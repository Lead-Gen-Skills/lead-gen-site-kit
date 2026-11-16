# Changelog

Newest first. Every release that attendees receive gets an entry.

## 0.6.0, 16 November 2026

- `build-site`: new industry research step, run before the brief. New `references/00-industry-research.md` has the AI read the websites of the local businesses on the user's prospect list and page one for the main keyword, then report the services and the words customers use, the guarantees that are normal, what reviews praise and complain about, whether prices are shown, the trust signals, the questions customers ask and the gap. It saves `industry-research.md`. The research is for understanding the trade: no wording, review, claim or price from another business goes on the user's site, and the AI says which sites and reviews it could not read. Ask for it by itself with "research my industry".
- `build-site`: the brief is now drafted first. The AI fills in every field it can from the research, the keyword map and what the user has said, then asks only for the user's own decisions in one short list with a recommendation for each. It no longer asks every field one at a time, and it does not ask again about the business model when the user has already said. On a lead network site, facts that belong to the business doing the work (licence, real reviews, job photos, a guarantee they must honour) are marked `TO CONFIRM WITH BUYER`, so a site can be planned before a buyer is signed.

## 0.5.0, 16 November 2026

- `choose-niche`: the keyword map now uses the same layout as the course's Keyword sheet, so each row copies straight in. It opens with when it was researched, the tool and the area searched, then has these sections in order: Home page, Services (with a Pricing page at `/pricing/` that takes every cost and price search), Suburbs, Optional later (not counted in the site total), Clashes to watch and Searches left out. Every page row has the same columns: page, web address, main keyword, three secondary keywords, the page total, click cost and notes. Web addresses are `/`, `/[service]/` and `/[service]-[suburb]/`, and the city gets no page of its own because the home page owns "[service] [city]". Click cost is the highest among the page's keywords, with its keyword named in the notes, or "none reported", never blank. A one-row page one check for the home page's main keyword answers Yes or No for the map pack, the AI answer and whether it is a good sign, and Yes, No or Not checked for ads. Suburbs with no measurable volume leave the number blank and say "under 10". The full keyword list behind each page stays below the map.

## 0.4.0, 16 November 2026

- `choose-niche`: keyword research now works with whatever the user has. New `references/keyword-research.md` sets the order: a keyword tool connected to the session, then an export or paste from any tool, then no tool at all, with volumes left unknown and never invented. It covers only what is different for a local lead site: set the location to the city, count "near me" and plain service searches, add up small numbers per page, count only buyer searches, treat click cost as a sign of value, read page one instead of difficulty scores, and check local wording. The keyword map gives every page a monthly search total and allows suburb pages only inside the buyer's service area.

## 0.3.3, 13 November 2026

- `choose-niche`: step 1 no longer scores industries out of 5. It gives a plain-words verdict on each ticked industry and one table of three figures (average job value, searches a month, cost per click), in the order of the columns in the course's industries list. The list works out the price per lead and whether ads pay, at a 40% gross margin and a 25% close rate, and the skill uses the same two figures when it shows a price.

## 0.3.2, 13 November 2026

- `choose-niche`: the lead price sum now matches the course's lead calculator. The price per lead is what the buyer can spend to win a customer (job value x a spend share of about a fifth of gross profit, kept between 5% and 15% of the job) x their close rate (25% to stay safe). The earlier sum (job value x margin x close rate, priced at up to half) gave a higher figure and is gone. The ads check uses 10% of clicks becoming leads.
- `choose-niche`: step 1 reads an attached industries list and works on the rows marked Yes in its Shortlist column, then prices a lead for the top five in the same table.

## 0.3.1, 13 November 2026

- `choose-niche`: step 1 now uses the same five checks as the course lesson and the industries list: industry type, search volume, cost per click, job value and competition. Three are scored 1 to 5 for a total out of 15. Search volume and cost per click are real numbers for one city, so the skill uses pasted Keyword Planner data or marks its own figures as estimates to be checked.

## 0.3.0, 13 November 2026

Changes to match the rebuilt course.

- The kit is now public. No GitHub account or invitation is needed to install it, and the install steps are shorter.

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
