---
name: audit-site
description: >
  This skill should be used when the user asks to "audit my lead gen site",
  "score my website", "check my site against the course standard", "what should
  I fix next", "track my progress", "review my site before launch", or wants a
  health check of an existing service-business website (built with this kit or
  not). It scores the site against the Lead Gen course scorecard and produces a
  prioritised fix list.
metadata:
  version: "0.1.0"
  author: "Chris Dinham, Lead Gen course"
---

# Audit a lead-gen site against the course scorecard

Score a site against the standard proven on a production multi-city build, then give the owner a short, ordered list of what to fix next. Use the same scorecard every time so the owner can track progress between audits.

## Inputs

Work with whatever is available, and say what could not be checked:

- **The codebase** (best): read the data file, layout, components, `public/` and config.
- **The live URL**: fetch the home page, one location page, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and view source for metadata and JSON-LD.
- **The owner's answers** for things only they know: real review count, whether the phone is answered, GBP status, GA4 key events, Search Console status.

Never mark an item as passing without evidence. When something cannot be verified, mark it "unknown" and say how to check it.

## Process

1. Read `references/scorecard.md`.
2. Check every item. Record pass, fail, partial, unknown or not applicable, with one line of evidence (a file path and line, a URL, a command output, or "owner confirmed").
3. Score each section as points earned over points available (unknown and not applicable items are excluded from the total, and listed).
4. Write the report in the format below.
5. If the project has a `docs/` folder, save the report as `docs/audit-YYYY-MM-DD.md` so the next audit can compare. If a previous audit exists, show the change per section.

## Priorities

Order fixes by this rule, which is what mattered most on previous builds:

1. **Liabilities first.** Anything untrue (invented ratings, review dates, guarantees the fine print narrows, placeholder phones, schema claiming a presence that does not exist). These carry legal and manual action risk and block the review programme. They are risk work, not growth work; say so plainly.
2. **Measurement.** If the owner cannot see which page produces leads, nothing else can be judged.
3. **Cheap defects that make later work stick** (sitemap submitted, canonicals, redirects, images).
4. **Off-page authority** on a new domain: profile, reviews, citations, links. Usually the real ranking bottleneck.
5. **Content depth**, starting with the locations where the business genuinely operates.

Be honest about expected impact. A title rewrite does not move a zero-authority site from position 60 to page one; say what each fix will and will not do.

## Report format

```
# [Site] audit, [date]

Overall: [score] / [available] ([percent]). Previous: [score or "first audit"].

## Top five fixes, in order
1. [Fix]. Why: [one line]. Effort: [hours or days]. Expected effect: [honest].
...

## Scorecard
| Section | Score | Change |
...

## Detail
### [Section]
- [x] / [ ] / [~] / [?] [Item]: [evidence]

## Could not check
- [Item]: [how the owner can check it]
```
