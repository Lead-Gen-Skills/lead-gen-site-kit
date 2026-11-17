# The brief

Fill this in before any code or copy is written. Every `[bracketed]` value is a blank. Unknown values become `TODO` placeholders in the data file and go on the launch checklist; never guess them.

## How to fill it in: draft first, then ask

1. **Read what the project folder already holds:** the business details (run `00-business-details.md` first if they have not been checked), `industry-research.md` (run `00-industry-research.md` first if it is missing), the keyword map, the prospect list, any call notes or buyer answers, and what the user said in their request.
2. **Draft every field you can from those.** The brand, the domain, the service, the city and the NAP come from the business details, character for character. Services and their wording, the head term, the URL slug, the locale, the likely main action, whether the trade shows prices, the official body to link to: the research and the keyword map answer these. The user should not be asked for them.
3. **Skip any question the user has already answered.** If they have told you the business model, the brand or the domain, write it in and move on. If their wording claims something the brief cannot yet support (for example "a local licensed business" before any licence has been seen), keep the model, leave the claim out, and tell them in one line why.
4. **Ask only for the decisions that are the user's, in one short list, with your recommendation and the reason for each.** Usually: phone or form as the main action, prices shown on the pages, on the pricing page only or quote only, whether the form shows a price (off unless the user wants it), which areas to launch with (only if the business details leave it open), the exact wording of the call to action, and what the brand can honestly promise. Add any Part A question that is still open. Keep the list to seven items or fewer.
5. **Leave buyer facts open.** On a lead network site the licence number, real reviews, job photos, years trading, the areas the buyer will travel to and any guarantee the buyer has to honour all come from the business that does the work. Mark each `TO CONFIRM WITH BUYER`. If there is no buyer yet, say so in the brief and draft a site that works without those facts: no rating, no licence number, no guarantee that someone else has to keep.
6. **Research is not the user's facts.** What other businesses promise or charge tells you what is normal. It never becomes this site's guarantee, price or proof.
7. **Pages that need facts you do not have.** If the keyword map calls for a page that only a buyer's facts can fill (a pricing page is the usual one), keep it in the plan, hold it back from launch, and put it in the decisions list. Never fill it with other businesses' figures or with placeholders.
8. **In WordPress mode** write `TO CONFIRM` wherever this file says `TODO`, and treat the Design and Hosting fields as the user's own: note "user's own" and move on.
9. **Finish with Part C,** and list everything you assumed.
10. **Once the user says yes, write the descriptions** the way `00-business-details.md` describes (short, profile length, long), from the facts in the brief only, and put them in the details sheet.

## Part A: five business questions (answer first)

These gate decisions that are expensive to undo. On a previous build, leaving them open caused months of rework.

1. **Who does the work?** (a) we do the work ourselves, or (b) we are a lead network that arranges independent providers. If (b), write the exact disclosure sentence for every footer, for example: "[Brand] passes your enquiry to a local [trade] business, which quotes and does the work. We do not do the work ourselves." Say "licensed" or "insured" only once there is a provider whose licence and insurance you have seen, and say "a network" only if there is more than one.
2. **Where do we have a real presence?** A real local phone, a real address or verified service base, and staff or providers who actually work there. Only these locations get a Google Business Profile and a `LocalBusiness` schema node. Other locations can still have a page, but carry a `Service` node only.
3. **What exactly do we guarantee?** On a lead network site with no buyer yet, promise only what the brand itself controls (for example how quickly the brand replies to an enquiry) and mark the rest `TO CONFIRM WITH BUYER`. Write the guarantee as a precise, deliverable promise (for example "we come back and redo it free within [N] hours", not "100% [outcome] guaranteed"). An unqualified promise in a title tag that the fine print walks back is a consumer law problem. Who fulfils it, if providers do the work?
4. **What proof do we really have?** Real review count and average, from where, and how recent. Real jobs completed. Years trading. If the honest answer is "very little yet", the site launches without a rating and earns one.
5. **What is the legal entity?** Registered name and business number (in Australia, the ABN). It goes in the footer, the privacy policy and the Organization schema, and directories ask for it.

## Part B: the build brief

- **Niche and service:** [service]
- **Brand name:** [brand]  **Legal name and business number:** [entity, ABN]
- **Business model:** [from question 1, plus the disclosure sentence if a lead network]
- **Primary conversion:** [e.g. "Get a Free Quote" linking to the on-site quote page, or out to an external funnel at (funnel URL)] The CTA wording is exactly **"[CTA text]"**.
- **Secondary action:** [usually "Call", a `tel:` link]
- **Production domain:** [https://example.com.au, built from the domain in the business details]
- **Country and locale:** [e.g. Australia, en-AU]
- **Launch locations:** [cities or service areas. Start with the ones from question 2. If the niche is not location based, list the main service pages instead; the same architecture applies.]
- **Head term per location:** [what people actually type in each place. These vary: on one multi-city build, each city used a different local name for the same service. Confirm with keyword data, not assumptions.]
- **URL keyword slug:** [e.g. `[service-keyword]`, giving `/[service-keyword]-[location]/`. If the keyword map already gives a web address for each page, use those addresses as they are.]
- **NAP:** name [exactly as on Google], phone [phone], email [email], hours [hours]. Mark which are real.
- **Google Business Profile URL(s):** [if any]
- **Old site to redirect from:** [old domain and URL list, or "none"]
- **Analytics:** GA4 Measurement ID [G-XXXXXXX or "create later"]
- **Pricing:** [from prices per tier, or "quote only"] Shown on [every page / the pricing page only]. Price in the quote form: [no (the default) / yes].
- **Service area check in the form:** [postcode range, suburb list or address, see the `lead-form` skill]
- **Guarantee or core promise:** [from question 3]
- **Proof:** [from question 4]
- **Official authority to link to:** [look this up if the research does not name it: the regulator or government body for the niche in each region, e.g. the state licensing or regulatory body. A genuine trust signal and an outbound link worth having.]
- **Design:** [a Claude Design export, Figma file, or "generate one". Note the fonts, palette, and the reserved CTA colour.]
- **Hosting:** [default: Cloudflare static assets]

## Part C: confirm back

Before moving to foundations, summarise the brief back to the user in one short list, including every `TODO`, and get a yes.
