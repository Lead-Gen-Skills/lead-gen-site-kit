# AI search: getting cited by ChatGPT, Perplexity and AI Overviews

AI referrals are not a side channel. On a previous build, ChatGPT referrals converted to funnel clicks at a noticeably higher rate than Google organic, and nearly half of all tracked funnel clicks in the first three months came from AI assistants. Nobody saw it until the clicks were properly tracked. Plan for it from day one.

## The principle: a citable URL with a citable passage

An AI engine cannot cite a paragraph buried inside a long sales page. It cites a URL whose content directly answers the question. So:

- Give each genuinely useful asset its own URL: the checklist, the cost guide, the rules explainer.
- Under each question-shaped heading, put a short declarative answer first, then the detail.
- One fact per sentence. Name the place, price or timeframe inside the sentence ("[Service] for a 2 bedroom home in [location] costs from $[price]"), not only in the table row or heading.
- Use real HTML tables for tabular data.
- Keep FAQ answers fully in the static HTML.

## llms.txt

Generate `/llms.txt` from the same data file as the site (`app/llms.txt/route.ts` with `force-static`) so it can never drift. Include:

- Brand, what the business does, and the disclosure (if a lead network).
- Services, prices, and the precise guarantee.
- Every published location with its URL and local term.
- Key pages (pricing, FAQs, checklist, cost guide) with URLs.
- The general FAQs, as question and answer pairs.
- A one-line disambiguation if the brand name collides with another business.

Everything in `llms.txt` is fed to AI assistants as fact. Only true claims go in it.

## Crawl access

In `robots.txt`, allow the AI crawlers you want citations from. Being in Bing's index matters because Copilot and several other assistants draw on it: verify Bing Webmaster Tools and set up IndexNow.

## Entity signals

AI engines lean on the same entity signals as Google: a consistent name, phone and details across the web, a Google Business Profile, real social profiles in `sameAs`, and mentions on trusted local sites. The `local-seo` skill covers these.

## Measure it

- In GA4, save an exploration segmenting sessions whose source contains `chatgpt`, `perplexity`, `claude`, `copilot` or `gemini`, so you get a weekly number.
- Periodically ask the assistants your target questions ("who does [service] in [location]", "how much is [service] in [location]") and record whether and where you are cited.
