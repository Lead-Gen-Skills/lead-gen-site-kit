# Conversion: turning visitors into quote requests

The page has one job: get the tap on the CTA. Every section either builds trust toward that tap or offers it.

## The CTA

- **Exact wording, everywhere.** Use one phrase, for example "Get a Free Quote", on every button: header, hero, mid-page, pricing, final section, sticky mobile bar. No "Get your exact price", no "Book now" variants. Consistency builds recognition, and it keeps tracking clean.
- **One reserved colour.** A previous build reserves one green for the CTA button alone. Pick one colour from the design and never use it decoratively.
- **It links to our own quote form.** A previous build started by linking out to an embedded GoHighLevel funnel and replaced it with its own one-question-per-screen form on `/get-a-free-quote/`, which is faster, on brand and shows a starting price as soon as the job size is picked. Build it with the `lead-form` skill. All CTAs go through one helper:

```ts
// src/lib/quote.ts
// Tags every CTA with the page and the placement it came from, so the form
// can prefill the location and the CRM can attribute each lead. No utm_ tags
// on an internal link: they would restart the GA4 session.
export function buildQuoteUrl(baseUrl: string, campaign: string, placement = "unknown"): string {
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}from=${encodeURIComponent(campaign)}&cta=${encodeURIComponent(placement)}`;
}
```

  Pass a distinct `placement` at every call site (`header`, `hero`, `pricing`, `final_cta`, `mobile_bar`) so you can see which button converts. If a site must keep an external funnel, the same helper appends `utm_source`, `utm_campaign` and `utm_content` instead.
- **Secondary action: Call.** A `tel:` link next to the CTA in the hero and in the mobile bar. Only a real number the business answers.

## Section order (top to bottom)

Trust comes first. Go from the hero straight into proof, and only explain the service further down the page. An "X, explained" overview as the first section after the hero reads like an encyclopedia entry and delays the reasons to book.

This is the order to start a first version of a site with. It was reviewed section by section on a previous build and works the same whether the site is coded or built in WordPress.

1. **Header.** Logo, about five nav items (Services, Areas, Pricing, About, Contact), CTA button.
2. **Hero.** H1 with the head term plus the customer's biggest worry turned into the payoff, for example "[Service] in [city], built to [pass the check customers fear failing]". Say "built to", never an unqualified promise, and never an empty slogan such as "done right the first time". Under the subtext: the rating line (only if real), then the CTA button and the Call link. The rating sits above the buttons. A real job photo, or a labelled placeholder, loaded eagerly.
3. **Trust bar.** Four ticks, each answering a worry customers in this trade have: no call back ("call back in one business day"), surprise costs ("free measure and written quote"), experience ("[N] years installing"), and the standard the work meets. Do not repeat the rating here once it is in the hero. Every tick must be true.
4. **Services.** The second major section. One card per service, each with a photo, the service name, one line and a link to its page. Give the cards a fixed width in a centred, wrapping row, so five services sit three on the first row and two centred beneath, never two left hanging on one side.
5. **Why book with us.** A casual crew photo beside four short proof points, each a bold line and one sentence, then the CTA and Call link again. Title it for the page ("Why [location] homeowners book through us"). Every point must be true of the business that does the work.
6. **Reviews,** straight after "why book with us", so the claims are followed at once by proof. Real reviews only, with name, location and date. If there are none yet, leave the section out rather than fake it.
7. **How it works.** Three or four plain steps from quote to done.
8. **Guarantee.** The exact promise, who fulfils it, and the time window. Name the customer's fear and remove it. Leave it out if there is no real guarantee yet.
9. **Areas we cover.** See below.
10. **The answer-first overview.** The plain explanation of the service in this location ("[Service] in [location]: what to know"). It stays in the HTML with `id="definition"`, so search and AI answer engines still find it.
11. **FAQs.** Short factual answers, fully in the HTML (an accordion may hide them visually, never from the page).
12. **Final CTA section.** One more clear ask.
13. **Footer.** Services, areas, legal entity and business number, privacy policy, and the lead-network disclosure if applicable.

**Optional sections, when the brief can fill them truthfully.** Add them after "how it works":

- **Jobs we do around [location].** Four cards, each a phone-style photo, the job type and one line (for example: households, holiday rentals, businesses, farms, building sites). Each location picks the four that fit it, so the visitor sees their own situation. Keep a photo per job type per region so neighbouring pages do not share pictures.
- **Pricing.** Transparent "from" prices as a real HTML table, "the quote is the price, no hidden fees", if prices are shown on the pages (see below).
- **Inclusions and exclusions.** Checklists. Exclusions build trust because they show you are honest about scope.

If any section uses generated photos, add a small "Photos are illustrative of the work." line under it.

**Service pages** keep the same order, lead with their own photo, put the service's own sections (types, options, what happens at the quote) after "why book with us" and reviews, and show the other services near the bottom.

**Location pages** keep the same order, show the services grid second (titled for the place, "[Service] services in [location]"), and add a section of true local detail after "how it works". See the location page recipe in `04-content.md`.

### Pricing: on every page, or on its own page

Decide this in the brief. Either:

- **Prices on the pages:** a "from" price table on the home, service and location pages, and the price reveal in the form if the user wants it; or
- **Prices on the pricing page only:** no price table or figures on any other page, the "how much does it cost?" FAQ only on the pricing page, and no prices in the form. The owner of a previous build chose this; it keeps the other pages about trust and the job.

Either way, every price comes from one place, so the pages can never disagree.

### Say a promise once

A brand promise repeated in the hero, the final CTA, the contact page and beside the form reads as filler. Put each promise where it does the most work, once.

### Breadcrumbs

Keep the breadcrumb trail for search engines and screen readers, but do not show it. Put the BreadcrumbList in the structured data (see `05-metadata-and-schema.md`) and the breadcrumb links in the page with a screen-reader-only class. A visible trail above the hero looked out of place on a previous build.

## The About page

The About page is where a sceptical visitor checks who you are. Build it to earn trust, in this order:

1. **A short intro** that names the customer's frustration (ringing around, waiting on call backs, quotes that list different things) and why the brand exists. Centred heading and two or three sentences.
2. **The crew photo** with the four proof points (the "why book with us" section).
3. **Why people trust us:** four cards, each an icon, a bold line and one sentence, for example built to the standard, a written quote that holds, a crew that turns up, work that is backed. Only what is true.
4. **Reviews.**
5. **How it works, plainly:** the disclosure sentence in full, who does the work, and three or four ticks.
6. **Areas we cover.**
7. **How to contact us,** with the map (below).
8. **Final CTA.**

## The contact page

A contact block (phone, email, hours, service area) beside an embedded map of the area the business covers, then the areas list. A contact page without a map of the service area looks unfinished. For Google Maps, embed the address from Google Maps' own Share, then Embed a map option; it shows a pin and a view of the area, not a drawn boundary.

## Areas we cover

One simple grid of the most popular suburbs, A to Z, each linking to its page, with one line under the heading: "Here are some of the most popular suburbs we cover. If yours is not listed but you are in [area], we can still help." The menu and the footer use the same list. On a single-city site, region groups ("inner city", "coast", "hills") are clutter.

Settle the real service area before writing a word. On a previous build an early draft listed outer towns the business would never travel to, and every page had to be corrected.

## The mobile menu

Once the site has more than a handful of locations, a flat mobile menu becomes a wall of links. Collapse the long groups ("What we do", "Where we go") behind native `details` and `summary` elements: they open with a tap, need no JavaScript, and keep every link in the static HTML for crawlers. Leave the short items (Reviews, FAQs, About, Contact) as plain links. Group locations by region inside "Where we go" when there is more than one region. Drop filler items such as an "All services" hub link from the menu; link the hub from the footer instead.

## Sticky mobile action bar

On mobile, a bar with Call and the CTA slides up once the hero CTA scrolls out of view, and stays hidden until then. Most service-business traffic is mobile; this bar is often the most clicked button on the site.

## Trust signals that genuinely work

- Real photos of real jobs (before and after is the most persuasive format for most trades).
- An outbound link to the official authority for the niche (the regulator, the licensing board). It signals you know the rules.
- The legal entity and business number in the footer.
- Specific numbers stated plainly: "[N]-hour redo window", "from $[price]".

## Things that cost a previous build trust (do not repeat)

- A headline guarantee that the FAQ quietly narrows. Write the precise promise once and use it everywhere.
- A big review count the Google profile does not support. Visitors check.
- CTA wording overridden on one section.
- Placeholder phone numbers left live.
- A privacy policy that says it is unfinished.
- A slow, off-brand embedded form. If an external funnel stays, it must carry the same brand and promise, ask only for the fields you need, and be noindex. Better, replace it (the `lead-form` skill).
