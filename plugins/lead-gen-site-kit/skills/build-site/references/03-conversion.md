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

1. **Header.** Logo, nav (Locations dropdown listing every location, Reviews, FAQs, Pricing, About, Contact), CTA button.
2. **Hero.** H1 with the primary keyword plus the emotional payoff (for example "[The outcome they want] in [location], without the stress."). Subtext that leads with the guarantee. CTA button and Call link. A real before and after or job photo, loaded eagerly.
3. **Trust bar.** Three to five concrete, true proof points: insured providers, fixed quote, the guarantee, real rating if you have one, years trading.
4. **Why book with us.** A casual crew photo (a Polaroid with a small sticker) beside four short proof points, each with an icon, a bold line and one sentence, then the CTA and Call link again. Title it for the page ("Why [location] locals book through us"). Every point must be true of every provider who might do the job. See the crew photo pattern in the `optimize-images` skill.
5. **How it works.** Three or four plain steps from quote to done.
6. **Jobs we do around [location].** Four cards, each a phone-style photo, the job type and one line (for example: households, holiday rentals, businesses, farms, building sites). Each location picks the four that fit it, so the visitor sees their own situation. Keep a photo per job type per region so neighbouring pages do not share pictures. If the photos are generated, add a small "Photos are illustrative of the work." line under the cards.
7. **Guarantee.** The exact promise, who fulfils it, and the time window. Name the customer's fear and remove it.
8. **Pricing.** Transparent "from" prices as a real HTML table. "The quote is the price, no hidden fees."
9. **Inclusions and exclusions.** Checklists. Exclusions build trust because they show you are honest about scope.
10. **Reviews.** Real reviews only, with name, location and date. If there are none yet, leave the section out rather than fake it.
11. **The answer-first overview.** The plain explanation of the service in this location ("[Service] in [location]: what to know"). It stays in the HTML with the Speakable `id="definition"`, so search and AI answer engines still find it; it just no longer sits in front of the trust sections.
12. **FAQs.** Short factual answers, fully rendered in the HTML (an accordion may hide them visually, never from the DOM).
13. **Final CTA section.** One more clear ask.
14. **Footer.** Explore links, every location, legal entity and business number, privacy policy, and the lead-network disclosure if applicable.

Service pages follow the same order, with a block listing every location (grouped by region once there are two) in place of the location-specific sections.

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
