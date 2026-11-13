---
name: choose-niche
description: >
  This skill should be used when the user wants to "pick an industry", "choose a
  niche", "find a lead gen niche", "score these industries", "which trade should
  I build a site for", "do keyword research for my lead gen site", "build a
  keyword map", "what is a lead worth", "set my lead price", "choose a city", or
  is deciding what a new lead-generation site should be about and where. It
  covers checking a shortlist of industries, checking demand with free tools, the keyword
  map and the lead price sum.
metadata:
  version: "0.3.3"
  author: "Chris Dinham, Lead Gen course"
---

# Choose the industry, the city and the lead price

The industry decision matters more than anything built afterwards. A good industry forgives an average site; a bad one cannot be rescued by a great one. Choose on numbers, not on what the user finds interesting.

You are a research assistant here, not the decision maker. You do not know current local click costs or who ranks in the user's city. Say so, give reasons with every verdict, and have the user check the numbers that matter.

## Step 1: check a shortlist

Ask for the country, the city if it is chosen, and the industries the user is considering. The course has them tick about ten in a master list by choosing Yes in its Shortlist column, then attach the downloaded file: when a list is attached, work only on the rows marked Yes. Offer to add others that fit.

For each industry give a verdict in plain words. Do not score out of 5: the course sheet has no score columns, and a number hides the reasoning. Cover the five things the course teaches:

| Check | What is good |
|---|---|
| Industry type | A trade or home service with steady, repeatable demand, quick decisions and businesses that travel across a city or region. Health and other regulated services are harder (stricter advertising rules, small catchments). So are long, considered projects such as custom builds and large renovations |
| Search volume | Enough people searching every month in the user's city to produce a steady flow of enquiries |
| Cost per click | Low enough that the clicks needed for one enquiry cost less than the lead can sell for |
| Job value | A typical job of roughly $1,000 to $5,000: enough that a business pays well for a lead, small enough that the customer decides quickly |
| Competition | Small local businesses and other lead sites on page one. National brands with large sites are harder |

Then give one table with these columns in this order, which is the order of the yellow columns in the course's industries list: industry, average job value ($), searches a month in the city, cost per click ($), and a one-line verdict. Rank it from best to worst.

The user types the three figures into each ticked row of their list, and the list works out the price per lead and whether ads pay, at a 40% gross margin and a 25% close rate. If you show a price per lead yourself, use the sum in step 3 with those same two figures so your answer agrees with their sheet.

Search volume and cost per click are real numbers for one city. Use the user's Keyword Planner data when they paste it. Without it, give your best estimate, mark every figure as an estimate, and say they must be checked in step 2 before anything is decided. Competition is also a guess until the user has looked at the results page.

Trades generally do well: they want the phone to ring and do not micro-manage where a lead came from. Businesses in a trade that already pay for ads or leads are a good sign.

Have the user pick about five to check by hand.

## Step 2: check demand with free tools

For each of the five, the user looks up the main search for their city in Google Ads Keyword Planner and records monthly searches and the click cost estimate. You cannot do this for them unless they paste the data.

Then have them read the results page for that search and tell you four things: whether the top results are small local businesses or national brands, how strong the map pack is, whether there are ads, and whether an AI answer sits at the top. Small local businesses and other lead sites on page one is a good sign. National brands with large sites is a bad one.

Weight searches that show someone wants the service now, in a place: the service with the city, "near me", emergency and cost searches. Do not count "how to" and do-it-yourself searches as demand; AI answers now take many of those clicks.

A paid keyword tool is optional. Never tell the user they need one.

## Step 3: the lead price sum

Use one method only. It is the same sum as the course's lead calculator, so the user gets one answer wherever they work it out:

```
spend share              = buyer's gross margin x 0.2, kept between 5% and 15% of the job value
spend to win a customer  = average job value x spend share
price per lead           = spend to win a customer x close rate
ad cost per lead         = cost per click / share of clicks that become leads
```

- The idea behind the spend share: a business can spend about a fifth of the gross profit on a job to win that customer. At a 40% margin that is 8% of the job value. Use 8% when the margin is unknown, and say so.
- Close rate is the share of leads the buyer turns into jobs. Use 25% to stay safe. Exclusive leads, sent to one business only, often close nearer 50%; use the buyer's own figure once there is one.
- Worked example: a $2,500 job at 8% is $200 to win a customer; at a 25% close rate the price per lead is $50.
- Ads check: plan on 10% of clicks becoming leads until the user has their own numbers. Ads pay when the price per lead is higher than the ad cost per lead. The most the user can pay per click is the price per lead x the click to lead rate. Where the gap is thin, say so.
- If ads do not pay, the industry may still work on search rankings alone, with a long wait before income. Say that plainly.
- Do the sum separately for each service with a different job value. A site can charge a different price per service.
- The sum counts only the first job. Where customers come back or buy more later, the buyer can afford more; ask the buyer, do not assume.
- Urgent, phone-based leads are usually worth more than form enquiries.

Show the working, and mark job value, margin and cost per click as estimates unless the user supplied them. These are figures to take into the first conversation with a buyer, who will give the real numbers.

## Step 4: the city

One city or region to start. Compare options on search volume, click cost and the number of businesses in the trade (too few means too few possible buyers). Big cities have more searches and more competition; regional centres have less of both and buyers who cover a wide area. Note whether the user or a likely buyer has a real address there, because map results are shown by distance from a verified address. Check the term people use locally, since the same service can have different names in different places.

## Step 5: the keyword map

For the chosen industry and city, turn the keyword data the user pastes into a map: one main keyword and two or three variations for the home page, each service page and the city page. Remove do-it-yourself and job-seeker searches. On a one-city site the home page takes the head term with the city, and there is no separate city page to compete with it. Say which services look worth their own page. If the data is thin, build the map from what there is and say so; do not pad it with guessed keywords. Flag any two pages that would target the same search. Save it as `keyword-map.md` in the project folder; the `build-site` skill reads it for the page plan.

## Rules

- Never present an estimate as a fact. Label every number you did not get from the user or their data.
- Never promise income, rankings or lead volumes.
- If the user has not checked click costs and the results page themselves, the decision is not made yet. Say so.
