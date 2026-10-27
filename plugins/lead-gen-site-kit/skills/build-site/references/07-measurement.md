# Measurement: knowing which page produces leads

A previous build ran for three months with GA4 installed and **zero key events**. Outbound clicks were only visible by accident, phone taps were invisible, and nobody could say which page produced a lead. Set this up before launch, not after.

## GA4 setup

1. GA4 in the root layout, production builds only, ID from `NEXT_PUBLIC_GA_ID` (document it in `.env.example`).
2. A small `"use client"` `TrackedLink` component whose `onClick` calls `window.gtag('event', name, params)` when `gtag` exists and silently does nothing otherwise. Fully compatible with a static export.
3. Every CTA fires `quote_click` with `{ location, placement, page_path }`.
4. Every `tel:` link fires `phone_click` with the same parameters. GA4 enhanced measurement never sees `tel:` taps.
5. Only if the quote form is an external funnel: a cross-domain linker between the site and the funnel domain:
   `gtag('config', GA_ID, { linker: { domains: ['yoursite.com.au', 'funnel.yoursite.com.au'], accept_incoming: true } })`, and accept incoming in the funnel's own tag setup.
6. The on-site quote form fires `form_start`, `form_step` (with `step` and `step_number`), `price_reveal` and `generate_lead` (only after the server confirms the save, with `value` and `currency` when a price is known). See the `lead-form` skill.
7. In GA4 Admin: mark `generate_lead` and `phone_click` as key events (and `quote_click` only if the form is an external funnel), and register `location`, `placement` and `page_path` as event-scoped custom dimensions. (Marking key events works only after the first event arrives, so allow 24 hours.)
8. The `buildQuoteUrl()` helper's `from` and `cta` parameters travel with each lead into the CRM, so leads are attributed without GA4.
9. Filter internal traffic and known bot or datacentre traffic before trusting any baseline. On a previous build about 40 percent of early sessions were datacentre traffic.
10. Save the AI referral exploration (see `06-ai-search.md`).

## Search Console and Bing

- Verify the domain property in Google Search Console. Submit the real sitemap URL and check it reads "Success".
- Verify Bing Webmaster Tools (import from Search Console is fastest).
- Check Manual Actions once at launch and after any big change.

## The form and the CRM

Build a GA4 funnel exploration from the `form_step` events to see which screen loses people. Then ask the CRM (GoHighLevel or whatever is used) for booked jobs by source page and CTA. A form fill is not a booked job.

## Google Business Profile insights

For a local service business the profile is often the biggest lead source, and it sits outside GA4 and Search Console. Record monthly: calls, website clicks, direction requests, and searches split by direct, discovery and branded.

## Reading trends honestly

A new site's impressions rise for three reasons: the launch ramp settling, seasonality, and real progress. Only the last is worth celebrating. Track the count of distinct queries in positions 1 to 20, not just total impressions; real progress adds queries to the top 20.
