---
name: build-site
description: >
  This skill should be used when the user wants to "build a lead gen website",
  "start a new lead generation site", "build a site like the course example", "set up a
  multi-location service website", "plan the pages for my lead gen site", or add
  a new city, suburb or service area to an existing lead-gen site. It covers the
  brief, the stack, the data model, URL structure, conversion layout, copy,
  metadata, schema, AI search files, measurement and the launch checklist.
metadata:
  version: "0.2.0"
  author: "Chris Dinham, Lead Gen course"
---

# Build a lead-generation website

Build service-business lead-gen sites to the standard proven on a production multi-city Australian service site. The site exists to do three things, in this priority order:

1. **Load fast.** Page speed beats everything. Static HTML, tiny JavaScript, optimised images.
2. **Convert.** One call to action, everywhere, worded identically, sending visitors to a fast quote form.
3. **Rank.** In classic search, in the Google map pack, and in AI answer engines (ChatGPT, Perplexity, Google AI Overviews).

SEO work must never slow the page or weaken the conversion path. When the two conflict, speed and conversion win.

## How to run a build

Work through these phases in order. Do not skip phase 1: most expensive mistakes on previous builds came from building before the business questions were answered.

### Phase 1: the brief

Read `references/01-brief.md` and fill in every field with the user. Ask for anything missing; never invent business facts (phone, address, review counts, licences, guarantees, years in business). Mark unknowns as `TODO` placeholders and list them back to the user at the end of the build.

Settle the five business questions in that file before writing code, especially: **do you do the work yourself, or are you a lead network that passes jobs to providers?** That one answer changes the footer disclosure, the schema, the Google Business Profile eligibility and the copy.

### Phase 2: foundations

Read `references/02-architecture.md`. Scaffold the stack, create the single typed data file, build the flat location route, wire the static export and deploy config. Copy `templates/CLAUDE.md.template` into the project root as `CLAUDE.md` (and `AGENTS.md` pointing to it, for other agents), filled in from the brief, so the rules survive into every later chat.

### Phase 3: the conversion layer

Read `references/03-conversion.md`. Build the quote form with the `lead-form` skill in this plugin. Build the page sections in the order given, trust first: hero, trust bar, why book with us (crew photo and four proof points), how it works, jobs we do around here, guarantee, pricing, inclusions, reviews, the answer-first overview, FAQs, final CTA, sticky mobile bar.

### Phase 4: content

Read `references/04-content.md`. Build the keyword map first, then write answer-first copy. Every location page must be genuinely different from its siblings; templated city pages with the name swapped are doorway pages.

### Phase 5: the SEO and AI search layer

Read `references/05-metadata-and-schema.md` and `references/06-ai-search.md`. Metadata and canonicals, the connected JSON-LD graph, sitemap, robots, llms.txt, OG images, redirects.

### Phase 6: images

Use the `optimize-images` skill in this plugin for every image.

### Phase 7: measurement and launch

Read `references/07-measurement.md`, then run `references/08-launch-checklist.md` line by line and report each item as pass, fail or not applicable. After launch, hand over to the `local-seo` skill: on a new domain, off-page work is the main ranking lever.

## Non-negotiable rules

Enforce these on every page and every commit. Restate them in the project's `CLAUDE.md`.

1. **One CTA, exact wording.** The call to action uses the exact words from the brief (for example "Get a Free Quote") on every page and every button. Never reword it per page. It links to the on-site quote form (see the `lead-form` skill) through a single `buildQuoteUrl()` helper that appends the source page and the button placement. Sites that keep an external funnel use the same helper with UTM tags.
2. **One reserved CTA colour.** The CTA button colour is used for nothing else on the site.
3. **Honest business model.** If the business is a lead network, every footer carries the disclosure sentence, and copy and schema describe arranging providers, not doing the work.
4. **Flat location URLs.** `/[service-keyword]-[location]/`. Never a bare `/[location]/` parent. Build every internal link with a `locationPath()` helper.
5. **Add a location by adding one data entry.** Never hand-build a location page.
6. **Never invent proof.** No made-up ratings, review counts, review dates, customer numbers, guarantees or local anecdotes. Sample data is clearly labelled in code and replaced before launch. This is a consumer law and Google manual action risk, not just a style point.
7. **Every image goes through the pipeline.** WebP, resized, keyword filename, keyword alt text, real `<img>` with width and height.
8. **The locale is consistent.** `<html lang>`, spelling and idiom all match the market (for Australia: `en-AU`, colour, organise, licence).
9. **House style for copy** (as used on previous builds, keep unless the user chooses otherwise): no em dashes or en dashes, sentence case, no emoji, no exclamation hype. See `references/04-content.md`.

## Working habits that kept previous builds maintainable

- Keep `CLAUDE.md` short and high signal; put detail in a `docs/` folder.
- After each chunk of work, add a dated entry to `docs/changelog.md` and update `docs/seo-implemented.md` (what is live, with file links).
- Type-check with `npx tsc --noEmit` while the dev server runs. Never run `npm run build` at the same time as `npm run dev` (they share `.next` and corrupt it).
- Commit one change at a time with a plain message. Ask before pushing or deploying.

## Reference files

| File | Read it when |
|---|---|
| `references/01-brief.md` | Starting any new site |
| `references/02-architecture.md` | Scaffolding, routing, data model, deploy |
| `references/03-conversion.md` | Building page sections and the CTA |
| `references/04-content.md` | Keyword map, copy, FAQs, location page uniqueness |
| `references/05-metadata-and-schema.md` | Titles, canonicals, JSON-LD, OG images, redirects |
| `references/06-ai-search.md` | llms.txt, citable pages, AI referral tracking |
| `references/07-measurement.md` | GA4 events, cross-domain tracking, Search Console |
| `references/08-launch-checklist.md` | Before go-live, and as a progress tracker |
| `templates/CLAUDE.md.template` | Creating the project's always-read rules file |
