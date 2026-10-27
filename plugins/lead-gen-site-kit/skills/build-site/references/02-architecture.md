# Architecture: stack, data model, routing, deploy

## Stack (as built on previous builds)

- **Next.js (App Router, latest stable) + TypeScript.**
- **Tailwind CSS.** Design tokens in `tailwind.config.ts`, mirrored as CSS variables in `src/app/globals.css`. Take colours, fonts, radius and shadows from the design export.
- **Fully static export.** In `next.config.mjs`: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`. Every route pre-renders to `out/`. No server runtime, no API routes, no ISR, no server actions.
- **No database.** All content lives in one typed data file.
- **Fonts self-hosted via `next/font`.** No render-blocking font CDN requests.
- **Hosting: Cloudflare static assets** via `wrangler.jsonc`.
- **Analytics:** GA4 via gtag.js in the root layout, production builds only, ID from `NEXT_PUBLIC_GA_ID`.
- **Lean JavaScript.** Target about 120 kB first-load JS. No animation libraries. Client components only where something is genuinely interactive (menus, accordions, tracked links).

Why static: a lead-gen site's pages change rarely, and a static site is the fastest, cheapest and most reliable thing you can host. There is nothing to hack and nothing to go down.

If the user prefers another stack (WordPress, Astro, Webflow), keep every principle in this kit and translate the mechanics. The rules matter more than the framework.

## The data file: one source of truth

Create `src/data/locations.ts` (one previous build called it `cities.ts`). It holds:

- `SITE`: brand, legal name, business number, tagline, canonical `url`, `quoteFormUrl` (the on-site form path, `/get-a-free-quote/`), main phone, `rating` (or `null` until real), `sameAs` (only profile URLs that exist), and the footer `disclosure`.
- A `Location` type with every field a location page, its metadata and its JSON-LD need: `slug`, `name`, `region`, `localTerm` (the head term that place actually uses), `hasLocalPresence` (true only where question 2 of the brief says so), hero copy, `intro` paragraphs (answer-first), `seoTitle`, `seoDescription`, `phone`, `priceFrom`, `geo`, `localAreas` (suburbs or sub-areas), `reviews`, `steps`, `pricing` tiers, `addOns`, `inclusions`, `exclusions`, `guarantee`, `faqs`, `gbpUrl`, and any regulator or authority fields for the niche.
- A `makeLocation()` factory that merges shared defaults with per-location data, so shared copy lives once and per-location extras append.
- Derived exports and helpers: `allReviews` (flattened, tagged with location, newest first), `generalFaqs`, `locationPath()`, `getLocation(slug)`, `getLocationByPageSlug()`.

Reviews carry their real `datePublished`. Never compute review dates from the build date.

## Routes

| Route | Purpose |
|---|---|
| `/` | Home: hero with CTA, trust bar, location grid, how it works, guarantee, reviews, FAQs |
| `/[keyword]-[location]/` | The location page: one template, N locations |
| `/reviews/` | Real reviews only. If there are none yet, do not ship an empty page; leave it out of the nav and sitemap until there are. |
| `/faqs/` | National FAQs, answers visible in the HTML, links to each location |
| `/pricing/` | Pricing and cost intent, as a real HTML table |
| `/about/`, `/contact/`, `/privacy-policy/` | Trust and legal |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Crawl and discovery |

### The flat location route

Serve every location from one root-level dynamic route, `app/[locationSlug]/page.tsx`, with `generateStaticParams()` returning every page slug and `export const dynamicParams = false`. Static routes such as `/about/` take precedence over the dynamic segment.

Why flat (`/[service-keyword]-[location]/`) and not nested (`/[location]/[service-keyword]/`): the keyword sits in one clean slug, and there is no orphan `/[location]/` parent that 404s or has to be built as a thin hub page.

Build every internal link with `locationPath(location)`. Never hardcode the path; when a previous build migrated URL patterns, the helper made it a one-line change.

## Static export rules (do not break)

- Metadata routes default to dynamic. Set `export const dynamic = "force-static"` on `sitemap.ts`, `robots.ts`, the `llms.txt` route and every `opengraph-image.tsx`.
- Never add API routes (beyond static GET handlers), server actions, `revalidate`, `cookies()`, `headers()`, `searchParams`, or `dynamic = 'force-dynamic'`.
- `next.config.mjs` `redirects()` does not run in a static export. Put all 301s in `public/_redirects`, which Cloudflare reads.
- Ship a branded `not-found.tsx` so `out/404.html` exists.

## Redirects from an old site

List every old URL (from the old sitemap, Search Console's Pages report and a crawl). Map each to its closest new page in `public/_redirects`. Old nested location URLs and bare location hubs go to the matching flat page; junk pages (sample pages, tag archives) go to `/`. Test every line after deploy with `curl -I`.

## Deployment (Cloudflare static assets)

`wrangler.jsonc` at the repo root, so `npx wrangler deploy` uploads `out/` as static assets instead of trying to build a server Worker:

```jsonc
{
  "name": "[project-name]",
  "compatibility_date": "[today]",
  "assets": {
    "directory": "./out",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page"
  }
}
```

- Build command `npm run build`, deploy command `npx wrangler deploy`, Node version pinned in `.nvmrc`.
- `public/_headers`: set `Content-Type: image/png` on the extensionless OG image paths (Cloudflare serves them wrong otherwise and social scrapers reject them), plus sensible cache and security headers.
- Add both the apex domain and `www`, with one 301-redirecting to the other.
- Deploying to production is the site owner's call. Ask before every production deploy.

## Project documentation to create

A short `CLAUDE.md` (from `templates/CLAUDE.md.template`) and a `docs/` folder: `architecture.md`, `seo-strategy.md` (the forward plan), `seo-implemented.md` (what is live, with file links), `keyword-map.md`, `content-style-guide.md`, `image-standards.md`, `deployment.md`, `changelog.md` (dated, newest first).
