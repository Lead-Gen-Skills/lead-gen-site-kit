# Changelog

Newest first. Every release that attendees receive gets an entry.

## 0.3.0, 13 November 2026

Changes to match the rebuilt course.

- New `choose-niche` skill: scores a list of industries against six criteria with reasons, has the user check demand with free tools and read the results page, runs the one lead price sum (value to the buyer against cost from ads), compares cities, and writes the keyword map the build skill reads.
- New `google-ads` skill: the cost per lead sum before anything is built, conversions before spend, one search campaign built from the brief with a negative keyword list and ads checked against length limits, the settings that protect a small budget, the weekly search terms review, and a small demand test.
- `build-site`: new WordPress mode (`references/09-wordpress-mode.md`). When the site is built in WordPress or another page builder, the skill asks which mode first, then produces the brief, a page plan (one main keyword and a flat URL per page) and section by section copy to paste in, with titles, descriptions, alt text and FAQs, and a `to-confirm.md` list of anything unsourced. It does not teach WordPress or recommend plugins.
- `lead-form`: a WordPress section. The skill designs the form and writes a `form-spec.md` for the user's own form tool, explains the three ways an enquiry can reach the lead software, and says to use exactly one per site and never to post to a webhook from a script in the page.
- `audit-site`: new `references/conversion-review.md`. The three-customer review reads the home and main service page as someone in a hurry, someone comparing quotes and someone cautious, and returns the five changes that would help most. The claims check lists every checkable claim with its source and flags anything unsourced before launch. The audit also reads the project documents for sites built in WordPress.
- `local-seo`: new `references/monthly-routine.md` with the month 1, 2 and 3 plan, the monthly and quarterly checks, the Search Console review for pages that are nearly ranking, when to add a page, and the AI answers check. The Google Business Profile reference gains video verification, a second profile, and what to do after a suspension. The skill now states the profile risk for lead networks plainly: one Google account per site, real details only, never a bought profile or an invented unit number. Reviews: no reviews from friends, family or other course members; a lead network may show its contractor's real reviews on the website when labelled; a 30 day request timed from the enquiry. Links: a step by step for finding local link prospects.

Fixes from a test run of every new piece on a sample one-city lead network:

- WordPress mode: on a one-city site the home page is the city page; the service page section order is spelled out; sections the brief cannot fill are left out, not filled with placeholders; the disclosure matches the number of contractors; code helpers named in other references are mapped to their WordPress equivalent.
- `local-seo`: the monthly routine starts with what must exist first (phone, business number, details block), says what to do when websites cannot be opened in the session, and makes the Google profile line the owner's decision for a lead network. Link and review wording tidied.
- `audit-site`: unsourced claims are listed in full and separately from the five conversion changes, with a report format.
- `choose-niche`: a rule of thumb for the gap between lead value, lead price and ad cost, one sum per service, and no padded keyword maps.
- `google-ads`: the daily budget is checked against real search volume, ad groups are not padded, "free" is not a negative when the offer is a free quote, and call items wait for the phone number.

## 0.2.0, 27 October 2026

Lessons from a recent two-region build.

- `optimize-images`: new `references/generating-images.md` for placeholder photos. It covers the phone-photo style block (a mid range smartphone snap with honest imperfections, never a polished render), the casual crew photo pattern, job-type photo cues by scene, batching around rate limits, reviewing every batch on a contact sheet, and labelling generated images as illustrative. The skill now also triggers on "generate images for the website" and "make a team photo".
- `build-site`: the conversion order is now trust first. After the trust bar comes a "why book with us" block (crew photo beside four proof points, then the CTA again), then how it works, then four "Jobs we do around [location]" cards with a photo each. The answer-first "explained" overview moves below the reviews, still in the HTML for search and AI engines. New guidance on collapsing long mobile menu groups with `details` and `summary`, and a launch checklist line for labelling generated photos.

Lessons from a production quote form rebuild.

- New `lead-form` skill. How to replace an embedded CRM form with our own one question per screen form: questions ordered easy to sensitive, tap to advance, the phone's back button stepping back one question, big tap tiles instead of dropdowns, phone last with a reason, honeypot and time checks instead of a CAPTCHA, a consent line for lead networks, and a Cloudflare Worker that saves every lead to D1 before forwarding it to the CRM. Covers the "from $X" price reveal after the property size question, for businesses whose callers only ask about price. `references/best-practices.md` grades the evidence behind each rule (with sources, and which popular stats not to quote); `references/implementation.md` has the architecture, code patterns, Cloudflare setup and launch checks.
- `build-site`: the CTA now links to the on-site quote form through `buildQuoteUrl()` with `from` and `cta` parameters (no UTMs on internal links). Measurement adds the form events and makes `generate_lead` the key event; the launch checklist, privacy line and `CLAUDE.md` template follow.

## 0.1.0, 27 October 2026

First release, distilled from a production multi-city build, its SEO audits, and its image, style and local SEO standards.

- `build-site`: brief with the five business questions, stack and data model, flat location URLs, conversion layout, content and keyword method, location page uniqueness, metadata and JSON-LD graph, AI search and llms.txt, GA4 measurement, launch checklist, and a `CLAUDE.md` template for new projects.
- `optimize-images`: the image SEO pipeline script (generalised: brand flag, optional geotag) and the image standard.
- `local-seo`: Google Business Profile, compliant review programme, citations and honest link building.
- `audit-site`: a weighted scorecard and report format for tracking progress between audits.
- Marketplace files for Claude (`.claude-plugin/marketplace.json`) and OpenAI (`.agents/plugins/marketplace.json`).
