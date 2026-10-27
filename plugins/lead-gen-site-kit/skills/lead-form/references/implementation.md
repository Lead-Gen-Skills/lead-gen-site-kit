# Building the lead form

How a previous build built its own quote form on a static Next.js site hosted on Cloudflare. Adapt the names; keep the shape.

## Why not an embedded form

Embedded CRM forms (GoHighLevel, Typeform and similar) load a second site in an iframe: extra scripts, a visible delay, styling that never quite matches, and a funnel domain that splits analytics sessions. Our own form is a few kilobytes of the site's own code, matches the brand, keeps the visitor on our domain, and still ends up in the same CRM through a webhook.

## The shape

```
Visitor taps "Get a Free Quote" anywhere on the site
  -> /get-a-free-quote/?from=<page>&cta=<placement>   (static page, noindex)
  -> QuoteForm (client component, one question per screen)
  -> POST /api/lead                                    (a tiny Cloudflare Worker)
       1. same-origin check, honeypot, time-to-submit floor
       2. validate name and phone, phone to +61 form
       3. INSERT into the D1 table `leads`              (the backup copy)
       4. answer the visitor { ok: true }
       5. then, in waitUntil, forward to the CRM webhook and mark the row forwarded
```

Everything else on the site stays a static file. Only `/api/*` runs code.

## Files

| File | What it does |
|---|---|
| `src/app/get-a-free-quote/page.tsx` | The form page. `robots: { index: false, follow: true }`, left out of the sitemap. No sticky mobile bar (it would cover the form's buttons). Trust points and the phone number under the form. |
| `src/components/QuoteForm.tsx` | The form: steps, answers, price reveal, validation, submit, thank-you screen. |
| `src/components/AddressField.tsx` | Address box with Google Places suggestions when a Maps key is set, a plain box when not. |
| `src/data/<content>.ts` | The question wording and choices (`QUOTE_QUESTIONS`) and the pricing rows the reveal reads. |
| `src/lib/quote.ts` | `buildQuoteUrl()`: every CTA links to the form page with `?from=<page>&cta=<placement>`. |
| `worker/index.ts` | Routes `/api/lead` to the handler, everything else to the static assets. |
| `worker/lead.ts` | Validates, saves to D1, forwards to the CRM. |
| `migrations/0001_create_leads.sql` | The `leads` table. |
| `wrangler.jsonc` | The Worker, static assets with `run_worker_first: ["/api/*"]`, and the D1 binding. |

## The CTA link

Internal links get no `utm_` tags: UTMs on an internal link start a new GA4 session and overwrite the real traffic source. Tag with plain parameters instead.

```ts
export function buildQuoteUrl(baseUrl: string, campaign: string, placement = "unknown"): string {
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}from=${encodeURIComponent(campaign)}&cta=${encodeURIComponent(placement)}`;
}
```

The form reads `from` once on mount (a static export cannot use `useSearchParams` at build time, so read `window.location.search` in an effect). If `from` is a location slug, prefill the location and bias the address suggestions to it. Send both values with the lead, so the CRM shows which page and which button produced it.

## The form component, the parts that matter

- **Steps as a list** (`["size", "timing", "extras", "address", "contact"]`), one rendered at a time, keyed on the step so each new screen slides in.
- **Tap to advance:** on a choice, save the answer, then `setTimeout(next, 170)` so the tick shows first. Clear the timer on unmount.
- **The back button:** on every step change, `history.pushState({ ...history.state, step: n }, "")`, and on `popstate` read the step back. Spread the existing state: the Next.js router keeps its own data in that entry and hard-reloads the page on Back if it is missing.
- **The price reveal:** look the price up from the same pricing rows the site's table uses.

  ```ts
  const priceFor = (bed?: number, bath?: number) =>
    PRICING.find((p) => p.bedrooms === bed && p.bathrooms === bath);
  ```

  Bedroom tiles come from the rows (plus a "6+" for bigger homes); the bathroom tiles show only the counts listed for that bedroom number, and are skipped when there is just one. Wrap the price card in `aria-live="polite"` so screen readers hear it. Fire `price_reveal` once per size.
- **Phone check, client and server:** strip everything but digits and `+`, then accept `0[2-478]` plus 8 digits or `+61[2-478]` plus 8 digits. Convert to `+61...` on the server for the CRM.
- **Honeypot:** a "Company" input positioned off screen inside `aria-hidden="true"`, with `tabIndex={-1}` and `autoComplete="off"`.
- **Timing:** record `Date.now()` on mount and send `elapsed_ms`. The server treats anything under 3 seconds as a bot.
- **Dev mode:** `next dev` cannot run the Worker, so in development log the payload and fake a short send. Test the real endpoint with `wrangler dev` after a build.
- **Fire `generate_lead` only after `res.ok`.** Show a friendly error with a call button if the send fails, and keep everything they typed.

## The endpoint

Order matters: save first, answer the visitor, forward last.

```ts
// worker/index.ts
export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/lead") {
      if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
      return handleLead(request, env, ctx);
    }
    return env.ASSETS.fetch(request);
  },
};
```

In `handleLead`:

1. Reject a foreign `Origin` with 403.
2. If the honeypot has a value or `elapsed_ms < 3000`, return `{ ok: true }` and do nothing else.
3. Trim and length-cap every string. Require a name of two or more characters and a valid phone, else 422.
4. Insert the row with bound parameters (never string-built SQL). Return 500 if the insert fails, so the form shows its error and the visitor can call.
5. `ctx.waitUntil(forward(...))` and return `{ ok: true }`.
6. In `forward`, POST to the `LEAD_WEBHOOK_URL` secret with readable keys ("Property size", "When needed", "Price shown") so the CRM note reads well, an `external_id` built from the row id so a retry never creates a duplicate, and tracking under separate keys (source page, CTA, referrer). Set `forwarded = 1` only when the CRM confirms it stored the lead.

Any row with `forwarded = 0` is a lead to chase by hand. Check the table weekly until the webhook has a clean record.

## Cloudflare setup

```jsonc
// wrangler.jsonc
{
  "name": "your-site",
  "main": "worker/index.ts",
  "compatibility_date": "2026-06-28",
  "assets": {
    "directory": "./out",
    "binding": "ASSETS",
    "run_worker_first": ["/api/*"],
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page"
  },
  "d1_databases": [{ "binding": "DB", "database_name": "your-site-leads", "database_id": "<from d1 create>" }],
  "keep_vars": true
}
```

```bash
npx wrangler d1 create your-site-leads                              # once, copy the id into wrangler.jsonc
npx wrangler d1 migrations apply your-site-leads --remote           # create the table
npx wrangler secret put LEAD_WEBHOOK_URL                            # the CRM webhook URL, never committed
npx wrangler d1 execute your-site-leads --remote --command "SELECT * FROM leads ORDER BY id DESC LIMIT 20"
```

Treat the webhook URL as a secret: anyone holding it can create leads in the CRM. `keep_vars` stops a deploy wiping dashboard variables. A schema change is a new numbered file in `migrations/`.

## Google address suggestions

- A Google Cloud project with billing on; enable **Maps JavaScript API** and **Places API (New)**.
- Create a browser key restricted to the site's domains and `localhost`, and to those two APIs only. A browser key is public by design; the restrictions are the protection.
- Put it in `NEXT_PUBLIC_GOOGLE_MAPS_KEY` at build time. Without it the field is a plain address box.
- Use a session token per address and drop it after the pick, so each completed address bills as one session.

## Privacy policy updates

When the form moves on site, the policy must say what is collected (now including the address and job details), where it is stored (the host's database), who it is sent to (the CRM, the lead software, the provider who quotes), and that address lookups go through Google. A lead network also needs the consent line by the button (see `best-practices.md`).

## Launch checks

- [ ] Every CTA on the site links to the form page with `from` and `cta` set; nothing still points at the old funnel.
- [ ] The form page is noindex and missing from the sitemap.
- [ ] On a real phone: each tap advances, the phone's back button steps back one question, the keyboard type is right on each input, nothing is hidden under the keyboard.
- [ ] Each price the form shows matches the pricing table.
- [ ] A bad phone number shows a clear message; `0412 345 678`, `(08) 1234 5678` and `+61 412 345 678` all pass.
- [ ] `wrangler dev` after a build: a valid post saves a row, a post under 3 seconds or with the honeypot filled saves nothing but returns success, a bad phone returns 422, a GET returns 405.
- [ ] One real submission on the live site reaches the database (`forwarded = 1`) and the CRM with readable answers and the source page. Archive the test lead in the CRM.
- [ ] GA4 realtime shows `form_start`, `form_step`, `price_reveal` and `generate_lead`; `generate_lead` is marked as a key event.
- [ ] The privacy policy names the new storage and recipients, and the consent line sits by the button.
- [ ] Someone is rostered to call new leads fast, and the CRM sends an instant confirmation.
