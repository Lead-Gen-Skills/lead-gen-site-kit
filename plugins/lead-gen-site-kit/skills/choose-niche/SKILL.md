---
name: choose-niche
description: >
  This skill should be used when the user wants to "pick an industry", "choose a
  niche", "find a lead gen niche", "score these industries", "which trade should
  I build a site for", "do keyword research for my lead gen site", "build a
  keyword map", "what is a lead worth", "set my lead price", "choose a city", or
  is deciding what a new lead-generation site should be about and where. It
  covers scoring industries, checking demand with free tools, the keyword map
  and the lead price sum.
metadata:
  version: "0.3.0"
  author: "Chris Dinham, Lead Gen course"
---

# Choose the industry, the city and the lead price

The industry decision matters more than anything built afterwards. A good industry forgives an average site; a bad one cannot be rescued by a great one. Choose on numbers, not on what the user finds interesting.

You are a research assistant here, not the decision maker. You do not know current local click costs or who ranks in the user's city. Say so, give reasons with every score, and have the user check the numbers that matter.

## Step 1: score a long list

Ask for the country and the industries the user is considering, then add as many again that fit. Score each from 1 to 5, with a one-line reason and a note wherever you are unsure:

| Criterion | What scores well |
|---|---|
| Job value | A typical job of roughly $1,000 to $5,000: enough that a business pays well for a lead, small enough that the customer decides quickly |
| Demand shape | Steady and repeatable, needed by many households or businesses every year |
| Decision speed | Urgent or quick decisions. Long, considered projects (custom builds, large renovations) score low |
| Service area | Businesses that travel across a city or region |
| Regulation | Light advertising rules. Health and other regulated services score low: stricter rules and small catchments |
| Buys marketing | Businesses in the trade already pay for ads or leads |

Trades generally score well: they want the phone to ring and do not micro-manage where a lead came from.

Rank the list and have the user pick five to check by hand.

## Step 2: check demand with free tools

For each of the five, the user looks up the main search for their city in Google Ads Keyword Planner and records monthly searches and the click cost estimate. You cannot do this for them unless they paste the data.

Then have them read the results page for that search and tell you four things: whether the top results are small local businesses or national brands, how strong the map pack is, whether there are ads, and whether an AI answer sits at the top. Small local businesses and other lead sites on page one is a good sign. National brands with large sites is a bad one.

Weight searches that show someone wants the service now, in a place: the service with the city, "near me", emergency and cost searches. Do not count "how to" and do-it-yourself searches as demand; AI answers now take many of those clicks.

A paid keyword tool is optional. Never tell the user they need one.

## Step 3: the lead price sum

Use one formula only:

```
value of a lead to the buyer = average job value x buyer's profit margin x share of enquiries they win
cost of a lead from ads      = click cost / share of clicks that enquire
```

- The lead price sits well below the value to the buyer, so they clearly profit, and well above the cost from ads.
- Plan on one in ten to one in five clicks becoming an enquiry. Use the cautious end until the user has their own numbers.
- If no price satisfies both, the industry does not work with ads. It may still work on search rankings alone, with a long wait before income. Say that plainly.
- Urgent, phone-based leads are usually worth more than form enquiries. Exclusive leads, sent to one business only, are worth more than shared ones.

Show the working. These are estimates to take into the first conversation with a buyer, who will give the real numbers.

## Step 4: the city

One city or region to start. Compare options on search volume, click cost and the number of businesses in the trade (too few means too few possible buyers). Big cities have more searches and more competition; regional centres have less of both and buyers who cover a wide area. Note whether the user or a likely buyer has a real address there, because map results are shown by distance from a verified address. Check the term people use locally, since the same service can have different names in different places.

## Step 5: the keyword map

For the chosen industry and city, turn the keyword data the user pastes into a map: one main keyword and two or three variations for the home page, each service page and the city page. Remove do-it-yourself and job-seeker searches. Say which services look worth their own page. Flag any two pages that would target the same search. Save it as `keyword-map.md` in the project folder; the `build-site` skill reads it for the page plan.

## Rules

- Never present an estimate as a fact. Label every number you did not get from the user or their data.
- Never promise income, rankings or lead volumes.
- If the user has not checked click costs and the results page themselves, the decision is not made yet. Say so.
