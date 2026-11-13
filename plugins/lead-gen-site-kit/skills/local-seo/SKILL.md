---
name: local-seo
description: >
  This skill should be used when the user asks about "Google Business Profile",
  "GBP", "ranking in the map pack", "local SEO", "citations", "directories",
  "NAP consistency", "getting reviews", "backlinks for a local business",
  "why isn't my new site ranking", "what do I do for SEO each month", "monthly
  SEO routine", "verify my Google profile", "video verification", "my profile
  was suspended", "find local link prospects", "which pages are nearly
  ranking", or what to do after launching a lead-gen website. It covers the
  off-page plan that actually moves a new local site: the profile, reviews,
  citations, links, the month by month routine and what to avoid.
metadata:
  version: "0.3.0"
  author: "Chris Dinham, Lead Gen course"
---

# Local SEO after launch: the off-page plan

On a brand new domain, **authority is the bottleneck, not on-page SEO.** A previous build launched with clean code, full schema and good copy, and sat around position 60 for its head terms. The diagnosis was simple: zero backlinks, zero citations, an untouched Google profile. The page one result it was chasing had only about 60 referring domains, which is beatable. No title rewrite or schema fix closes that gap; off-page work does.

So after launch, the work shifts to these levers, in this order:

1. **Google Business Profile** (only where there is a real presence). Read `references/google-business-profile.md`.
2. **A review programme**, done legally. Read `references/reviews.md`.
3. **Citations**, with identical details everywhere. Read `references/citations.md`.
4. **Links from real local relationships** and two or three linkable pages. Read `references/links.md`.

When the user asks what to do this month, or how to keep going after launch, read `references/monthly-routine.md` and work from the month they are in.

## Before any of it: the master details block

Create one source of truth for the business details (a sheet or a `docs/nap.md`) and use it, character for character, everywhere: the site, the Google profile, every directory, every social profile.

```
Business name:  [exactly as on Google, no added keywords or city]
Phone:          [one real local number]
Email:          [email]
Website:        [home URL for national listings; the location page for map listings]
Address:        [street address, or "service-area business, address hidden"]
Service area:   [only areas genuinely serviced]
Hours:          [exactly as on Google]
Categories:     [primary category, then genuine secondaries]
Business number:[ABN or equivalent]
```

When a detail changes, change it in the master block and the site data file together, then work down every live listing.

## Lead networks and the profile: the owner's decision, made with open eyes

If the business arranges providers rather than doing the work, a Google Business Profile is a risk the owner chooses to take or not. State this plainly before any profile work, once:

- A lead-generation brand with a service area that tells visitors it passes enquiries to a local contractor is a lawful business. Google's profile rules are separate from the law and stricter: Google generally expects the profile holder to serve customers directly at that location, and it can suspend a profile without warning.
- So treat the profile as a strong lead source that can disappear, never as the foundation. The website, ads and local links are what the owner controls.
- Keep each site's profile in its own Google account, so one suspension cannot take others with it.
- Real details only: an address the owner can confirm, a real phone number, real photos, real reviews.
- Never buy a verified profile, never invent a unit or suite number, never verify at an address the owner cannot confirm. These end in suspension.

Marketplaces such as Airtasker, hipages and ServiceSeeking generally expect the account holder to do the work; check each one's rules. Reviews earned on a profile that is later removed are lost, so tell the owner that too.

## Track progress

Keep a simple tracker (a sheet works) with one row per listing: platform, URL, status (to do, submitted, live, needs fix), date, login location (never the password itself). Review it monthly alongside Search Console and the profile insights.

## Reference files

| File | Covers |
|---|---|
| `references/google-business-profile.md` | Setting up and completing the profile, how Google ranks local results, weekly habits |
| `references/reviews.md` | Asking for reviews legally and consistently |
| `references/citations.md` | Directory tiers, the golden NAP rule, what to skip |
| `references/links.md` | Earning real links, finding prospects, linkable assets, and what never to do |
| `references/monthly-routine.md` | What to do in month 1, 2, 3 and every month after, the Search Console review, the AI answers check |
