# Content: keywords, copy and location pages

## Build the keyword map first

Before writing a word of copy, create `docs/keyword-map.md`. Per location:

- **Head term** (goes in the H1, title and meta description). Check what that place actually searches. Local variants are common and decisive: on one multi-city build, one city's local name for the service carried more than half of that city's demand, while the other cities each used a different name.
- **Secondary terms** (H2s and body copy): synonyms and modifiers ("[synonym for the service]", "[service] near me", "same day [service]").
- **Cost and long-tail queries** ("how much is [service] in [location]").
- **Question queries** that AI engines and voice assistants get asked ("how long does [service] take"). These become FAQs and, later, their own pages.

Use real data (Search Console once live, a keyword tool before). Do not guess volumes.

## Voice

The voice that worked on previous builds is a dependable local tradie who does this every day: plain-spoken, warm, confident, never salesy or corporate. Adapt the persona to the niche, keep the qualities.

- Speak to the reader as "you". The company is "we".
- Name the customer's real fear and remove it with the guarantee.
- Short sentences, one idea each. Bullets over paragraphs for inclusions.
- Numbers as proof, never vague claims. And only true numbers.

## House style (as used on previous builds)

Adopt these unless the user chooses otherwise, then write the choice into the project `CLAUDE.md`.

1. **No em dashes or en dashes** anywhere: copy, comments, schema strings, OG images, llms.txt. Use a comma, period, colon or parentheses for a break, and "to" for ranges ("3 to 6 hours", "$189 to $549"). Hyphens in compound words (same-day, follow-up) and URL slugs are fine. Sweep with `grep -rlP '\x{2014}|\x{2013}' src` (should print nothing).
2. **Sentence case** for headlines, buttons and nav. Never ALL CAPS.
3. **No emoji**, no exclamation-mark hype.
4. **Local spelling and idiom** for the market.

## Answer-first writing (for Google and AI engines)

- Each location page opens its overview with a plain one-paragraph answer to "what is [service] in [place] and how does it work here", marked `id="definition"`. This is the Speakable target and the passage AI engines quote.
- FAQ answers are short, factual and self-contained: name the place, the price or the timeframe inside the sentence rather than relying on the heading.
- One H1 per page with the head term. Logical H2 and H3 order.
- Use keywords naturally. The style guide wins any tie with keyword density.

## Location pages must be genuinely different

This is the most common failure of multi-location sites, and a previous build hit it: four city pages that were only about 30 percent unique, with the same headings in the same order and FAQs that differed only by the city name. Google treats that as a doorway pattern, and those pages earned impressions and almost no clicks.

Aim for at least 60 percent unique content per location page. What genuinely differs between locations:

- The local head term and how people there phrase it.
- The local rules and authority (for a regulated trade: each state's regulator, local rules and dispute process).
- Real local pricing, coverage areas and travel limits.
- Questions people in that place actually ask.
- Real local photos and real local reviews.

What does **not** count: swapping the city name into the same paragraph, or inventing local colour. Invented operational detail ("we know how the sea air affects [location] homes") is worse than none if nobody actually did that work. Every local claim needs an operator who can confirm it is true.

**If you cannot make a location page genuinely unique, do not publish it yet.** Concentrate on the locations where the business really operates. On one multi-city build, the one location with a real phone and a real profile carried more than half of all impressions; the other three were a cost with no return.

## Expansion gates

Adding a location is one data entry, which is exactly the trap: cheap to build is not free to publish. Before adding new cities or suburb pages, require both:

- At least one existing location page producing sustained clicks.
- Some real authority (a previous build used "more than 10 referring domains" as the gate).

Suburb pages, if you build them, are a hard-capped pilot (five or six pages on flat URLs) with genuinely unique content and operator sign-off, never a programmatic batch of dozens.

## Linkable informational pages

Informational queries are far easier to rank for than commercial head terms on a new domain. On a previous build, a "[service] checklist" query reached position 2 with no dedicated page while the commercial terms sat at 45 to 85. Plan two or three genuinely useful pages early:

- A checklist (the thing customers print).
- A cost guide with a real price table.
- A rules or rights explainer per region.

Each gets its own URL, a real table where data is tabular, and short declarative answers under question-shaped headings. These are what people link to and what AI engines cite.
