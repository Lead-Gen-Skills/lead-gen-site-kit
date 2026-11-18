# The lead-gen site scorecard

Each item is worth 1 point unless marked (2) or (3). Weighting reflects what moved results on previous builds.

## 1. Truth and trust (liabilities)

- (3) No invented ratings, review counts, customer numbers or review dates on pages, schema, OG images or llms.txt.
- (3) The guarantee is a precise promise and is worded consistently everywhere (hero, title tags, FAQ, schema, OG images, llms.txt).
- (2) Every phone number is real and answered. No placeholders.
- (2) LocalBusiness schema only for locations with a real presence.
- Legal entity and business number shown in the footer and privacy policy.
- Lead-network disclosure in every footer (if applicable).
- Privacy policy is complete and discloses the third-party funnel.
- No invented local detail on location or suburb pages.
- Site details match the Google Business Profile exactly.

## 2. Speed

- (2) Lighthouse mobile performance 90 or above on home and a location page.
- Static or cached HTML; no server rendering on each request.
- First-load JS around 120 kB or less.
- Fonts self-hosted, no render-blocking font CDN.
- Every image WebP, resized, with width and height.
- Hero image eager with high fetch priority; others lazy.

## 3. Conversion

- (2) One CTA with identical wording on every button.
- (2) CTA links to the funnel with location and placement tracking.
- CTA colour reserved for the CTA.
- Hero: keyword H1 with the emotional payoff, guarantee in the subtext, CTA and Call.
- Trust bar with concrete, true proof points.
- Sticky mobile bar with Call and CTA.
- Transparent pricing as an HTML table.
- Inclusions and exclusions.
- Real reviews with names and dates (or the section is absent).
- Final CTA section on every page.
- Funnel page matches the brand and promise, asks only needed fields, and is noindexed.

## 4. Architecture and on-page SEO

- (2) Location pages on flat keyword URLs, built from one data source.
- (2) Location pages at least 60 percent unique against each other.
- One H1 per page with the head term; logical heading order.
- Titles and descriptions fit and lead with the head term.
- Canonical on every page.
- Correct local head term per location (from real data).
- Hub and spoke internal links: nav location menu, footer locations, related locations, cross-links to reviews and FAQs.
- Outbound link to the relevant official authority.
- Old URLs 301 to new pages; `www` and apex consolidated.
- Branded 404.

## 5. Structured data

- (2) One connected JSON-LD graph by `@id` (Organization, WebSite, LocalBusiness or Service).
- Rich Results Test passes on home and a location page.
- FAQPage on pages with FAQs, answers in the HTML.
- BreadcrumbList on every non-home page.
- `sameAs` lists only live profiles.
- Opening hours in schema match the Google profile.

## 6. AI search

- (2) At least one genuinely useful informational page with its own URL (checklist, cost guide, rules explainer).
- `llms.txt` generated from the site data, true, and current.
- Answer-first passages under question-shaped headings, facts named inside sentences.
- `robots.txt` allows the AI crawlers the owner wants.
- Bing Webmaster Tools verified; IndexNow set up.
- AI referral traffic segment saved in GA4.

## 7. Measurement

- (3) `quote_click` and `phone_click` events firing and marked as key events.
- Cross-domain linker between site and funnel.
- Search Console verified and the sitemap reads Success.
- Internal and bot traffic filtered.
- Funnel numbers by campaign and placement available from the CRM.
- Google profile insights recorded monthly.

## 8. Local and off-page

- (3) Google Business Profile verified and complete (where eligible).
- (3) Review programme running: steady new reviews, compliant asks, every review answered.
- (2) Master details block exists and is used everywhere.
- Bing Places and Apple Business Connect live.
- Tier 1 citations live with identical details, tracked.
- Social profiles live, branded, in `sameAs`.
- Referring domains tracked monthly, growing from real sites and relationships. No link networks or bulk link packages.

## 9. Maintainability

- Short `CLAUDE.md` (or equivalent) with the non-negotiable rules.
- `docs/` with keyword map, what is live, and a dated changelog.
- Images go through the pipeline script.
- Adding a location is one data entry.
