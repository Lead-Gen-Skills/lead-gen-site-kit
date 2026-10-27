# Launch checklist

Run every line. Report each as pass, fail or not applicable, with the evidence (the command output or the URL checked). This file doubles as a progress tracker: copy it into the project as `docs/launch-checklist.md` and tick items as they pass.

## Business truth

- [ ] Every `TODO` from the brief is resolved or explicitly accepted by the owner in writing.
- [ ] No invented ratings, review counts, review dates, customer numbers or local anecdotes anywhere (pages, schema, llms.txt, OG images).
- [ ] The guarantee wording is the precise promise, identical in the hero, FAQ, schema, OG images and llms.txt.
- [ ] Every phone number on the site is real and answered. No placeholders live.
- [ ] Legal entity and business number in the footer and privacy policy.
- [ ] Lead-network disclosure in every footer (if applicable).
- [ ] Privacy policy is final, and says where quote details are stored and who they are sent to (the CRM, the provider). A lead network has a consent line by the form button.
- [ ] Name, phone and hours on the site match the Google Business Profile exactly.

## Build

- [ ] `npm run build` passes with no warnings. `npx tsc --noEmit` is clean.
- [ ] `SITE.url` is the real production domain.
- [ ] Every CTA lands on the quote form with `from` and `cta` attached, and the form passes the launch checks in the `lead-form` skill (one real lead reaches the database and the CRM).
- [ ] The CTA wording is identical on every button: `grep -rn` for alternatives returns nothing.
- [ ] Dash sweep prints nothing: `grep -rlP '\x{2014}|\x{2013}' src` (if using the house style).

## Pages

- [ ] View source on home and one location page: one `h1`, FAQ answers present in the HTML, JSON-LD parses.
- [ ] Rich Results Test passes for home and one location page.
- [ ] Location pages are at least 60 percent unique against each other (or the thin ones are held back).
- [ ] No empty or placeholder pages are live (for example an empty `/reviews/`).
- [ ] 404 page is branded.

## Crawl and discovery

- [ ] `/sitemap.xml`, `/robots.txt` and `/llms.txt` return correct content (`curl` each).
- [ ] OG images render (test in a social card debugger). `_headers` content type in place.
- [ ] Every old-site URL 301s to the right new page (`curl -I` each line of `_redirects`).
- [ ] `www` and apex both resolve, one redirecting to the other.

## Images

- [ ] Every image is WebP, keyword-named, has accurate alt text, width and height.
- [ ] Hero image loads eagerly with high fetch priority; the rest lazy-load.
- [ ] Generated placeholder photos are labelled as illustrative, carry no real names, and contain no stray lettering or logos. Real job photos replace them as they arrive.

## Measurement

- [ ] GA4 realtime shows `page_view`, `quote_click`, `phone_click`, `form_start`, `price_reveal` and `generate_lead` from a test visit.
- [ ] Key events and custom dimensions registered in GA4.
- [ ] Search Console verified, sitemap submitted and reading Success.
- [ ] Bing Webmaster Tools verified.

## Speed

- [ ] Lighthouse mobile performance 90 or above on home and one location page.
- [ ] First-load JS around 120 kB or less.

## After launch (hand over to the `local-seo` skill)

- [ ] Google Business Profile complete (only where there is a real presence).
- [ ] Review programme running.
- [ ] Tier 1 citations started.
