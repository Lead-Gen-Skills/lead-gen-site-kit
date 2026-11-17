# Metadata, structured data and social previews

## Metadata on every page

- `metadataBase` and a title template in the root layout, with site-wide defaults.
- Location pages use `generateMetadata` reading `seoTitle` and `seoDescription` from the data file.
- Titles about 50 to 60 characters, descriptions about 140 to 155, head term near the front. Check they fit; truncated titles lose clicks.
- `alternates.canonical` on every page, trailing-slash form.
- Open Graph and Twitter `summary_large_image`, with the correct OG locale.
- Theme colour and favicon in the layout.
- One `h1`, logical heading order, semantic `header`, `main` and `footer`.

## JSON-LD: one connected graph

Put all builders in `src/lib/schema.ts`, generated from the data file so markup can never drift from the visible page. Render with a tiny `JsonLd` component.

Link every entity by `@id`:

- Organization at `${SITE.url}/#organization`
- WebSite at `${SITE.url}/#website`
- One LocalBusiness per location **that has a real local presence**, at `${locationUrl}#localbusiness`, with `parentOrganization` pointing at the Organization.

| Page | Schema |
|---|---|
| Home | Organization, WebSite, WebPage, HowTo, FAQPage |
| Location with real presence | LocalBusiness (most specific subtype, e.g. HomeAndConstructionBusiness), Service, HowTo, FAQPage, WebPage with Speakable, BreadcrumbList |
| Location without real presence | Service (with `provider` set to the Organization, `areaServed`, no phone, hours, geo or address), HowTo, FAQPage, WebPage, BreadcrumbList |
| Reviews | Organization, WebPage, BreadcrumbList |
| FAQs, Pricing | Organization, FAQPage, WebPage, BreadcrumbList |
| About, Contact, Privacy | Organization, WebPage, BreadcrumbList |

### LocalBusiness detail that matters

- `name` is the brand exactly as on the Google Business Profile, with no city suffix. The location goes in `areaServed`.
- Opening hours match the Google profile exactly.
- `geo` coordinates, `areaServed` (the location plus its sub-areas), `priceRange`, an offer catalogue of services and add-ons.
- `aggregateRating` and `Review` nodes **only from real reviews with their real dates**. If you have none, omit them. Publishing a rating your profile does not support is both a consumer law risk and a Google spammy markup risk.
- Where the location has a Google profile URL, link it with `hasMap` and `sameAs`.

### Other details

- `Service` carries `alternateName` set to the local term.
- `WebPage` carries a `SpeakableSpecification` pointing at fact selectors (`#definition`, `.faq-answer`), not the headline.
- `BreadcrumbList` on every non-home page. The breadcrumb links stay in the page for screen readers but are hidden visually (see "Breadcrumbs" in `03-conversion.md`).
- `Organization.sameAs` lists only social and directory profiles that exist and resolve. An empty array is honest; a list of dead links is not.
- If the brand name collides with another business (a previous build did, with a brand in another industry), declare the relationship in prose on the About page and in `llms.txt`, not only in schema.

Validate with Google's Rich Results Test and the Schema.org validator after every schema change.

## Social preview images

- Site OG image (1200 by 630) at `app/opengraph-image.tsx`, generated at build with `next/og`.
- Per-location OG image at `app/[locationSlug]/opengraph-image.tsx` (location name, local term, the guarantee).
- Do not fetch external fonts inside the OG renderer; it causes missing-glyph failures. Use bundled defaults.
- Only true claims in OG images. They get cached by social platforms where a later text fix cannot reach them.

## Crawl and discovery

- `app/sitemap.ts`: home, every published location page, every static page. Submit it in Search Console and Bing Webmaster Tools.
- `app/robots.ts`: allow all, point at the sitemap. Allow the AI crawlers you want citing you (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended).
- `llms.txt`: see `06-ai-search.md`.
- Add an image sitemap once real photography is in.
- Set up IndexNow (Bing, and through it Copilot) for fast re-crawls after updates.
