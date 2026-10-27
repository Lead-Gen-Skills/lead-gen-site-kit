# The brief

Fill this in with the user before any code is written. Every `[bracketed]` value is a blank. Unknown values become `TODO` placeholders in the data file and go on the launch checklist; never guess them.

## Part A: five business questions (answer first)

These gate decisions that are expensive to undo. On a previous build, leaving them open caused months of rework.

1. **Who does the work?** (a) we do the work ourselves, or (b) we are a lead network that arranges independent providers. If (b), write the exact disclosure sentence for every footer, for example: "[Brand] arranges a network of independent, insured providers. We do not perform the work ourselves."
2. **Where do we have a real presence?** A real local phone, a real address or verified service base, and staff or providers who actually work there. Only these locations get a Google Business Profile and a `LocalBusiness` schema node. Other locations can still have a page, but carry a `Service` node only.
3. **What exactly do we guarantee?** Write the guarantee as a precise, deliverable promise (for example "we come back and redo it free within [N] hours", not "100% [outcome] guaranteed"). An unqualified promise in a title tag that the fine print walks back is a consumer law problem. Who fulfils it, if providers do the work?
4. **What proof do we really have?** Real review count and average, from where, and how recent. Real jobs completed. Years trading. If the honest answer is "very little yet", the site launches without a rating and earns one.
5. **What is the legal entity?** Registered name and business number (in Australia, the ABN). It goes in the footer, the privacy policy and the Organization schema, and directories ask for it.

## Part B: the build brief

- **Niche and service:** [service]
- **Brand name:** [brand]  **Legal name and business number:** [entity, ABN]
- **Business model:** [from question 1, plus the disclosure sentence if a lead network]
- **Primary conversion:** [e.g. "Get a Free Quote" linking out to a GoHighLevel funnel at (funnel URL). No on-site form.] The CTA wording is exactly **"[CTA text]"**.
- **Secondary action:** [usually "Call", a `tel:` link]
- **Production domain:** [https://example.com.au]
- **Country and locale:** [e.g. Australia, en-AU]
- **Launch locations:** [cities or service areas. Start with the ones from question 2. If the niche is not location based, list the main service pages instead; the same architecture applies.]
- **Head term per location:** [what people actually type in each place. These vary: on one multi-city build, each city used a different local name for the same service. Confirm with keyword data, not assumptions.]
- **URL keyword slug:** [e.g. `[service-keyword]`, giving `/[service-keyword]-[location]/`]
- **NAP:** name [exactly as on Google], phone [phone], email [email], hours [hours]. Mark which are real.
- **Google Business Profile URL(s):** [if any]
- **Old site to redirect from:** [old domain and URL list, or "none"]
- **Analytics:** GA4 Measurement ID [G-XXXXXXX or "create later"]
- **Pricing:** [from prices per tier, or "quote only"]
- **Guarantee or core promise:** [from question 3]
- **Proof:** [from question 4]
- **Official authority to link to:** [the regulator or government body for the niche in each region, e.g. the state licensing or regulatory body. A genuine trust signal and an outbound link worth having.]
- **Design:** [a Claude Design export, Figma file, or "generate one". Note the fonts, palette, and the reserved CTA colour.]
- **Hosting:** [default: Cloudflare static assets]

## Part C: confirm back

Before moving to foundations, summarise the brief back to the user in one short list, including every `TODO`, and get a yes.
