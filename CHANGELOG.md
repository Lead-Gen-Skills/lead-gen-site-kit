# Changelog

Newest first. Every release that attendees receive gets an entry.

## 0.3.0, 13 November 2026

Changes to match the rebuilt course.

- `optimize-images`: geotagging is removed. Writing GPS coordinates into a photo has no ranking effect, so the script no longer has `--lat` and `--lng`, and the skill, the image generation notes, the Google Business Profile checklist and the project template no longer mention it.
- `local-seo`: new `references/monthly-routine.md` with the month 1, 2 and 3 plan, the monthly and quarterly checks, the Search Console review for pages that are nearly ranking, when to add a page, and the AI answers check. The Google Business Profile reference gains video verification, a second profile, and what to do after a suspension. The skill now states the profile risk for lead networks plainly: one Google account per site, real details only, never a bought profile or an invented unit number. Reviews: no reviews from friends, family or other course members; a lead network may show its contractor's real reviews on the website when labelled; a 30 day request timed from the enquiry. Links: a step by step for finding local link prospects.

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
