# Keyword research for a local lead site

The user already knows general keyword research. This file covers only what is different when the site sells leads for one service in one city. Do not teach a tool screen by screen.

## Where the data comes from

Work down this list and stop at the first one that applies. Say which one you used.

1. **A connected keyword tool.** If keyword tools are available in the session (for example a KWFinder or SEMrush connector), use them directly: related keywords, volumes, click costs and the results page for the main search. Look up the tool's location id for the city or region first and set it. Never run the research for the whole country.
2. **An export or paste from any tool.** Google Ads Keyword Planner, SEMrush, Ahrefs, Ubersuggest, KWFinder or another. Read whatever columns are there: keyword, volume, click cost, difficulty. Ask which location the figures are for if it is not shown.
3. **No tool.** Build the keyword list from the service, the city, the suburbs in the service area and the Google suggestions and "people also ask" questions the user pastes. Leave the volume and click cost columns blank and say they are unknown.

Never invent a volume or a click cost. Never tell the user they need a paid tool: Keyword Planner is free with a Google Ads account, and the no-tool route still produces a usable map.

## The local rules

**Location first.** A national volume says nothing about one city. Keyword Planner and KWFinder can target a city or region. Some tools, SEMrush among them, only have country databases: with those, rely on the searches that contain the city or suburb name, and say plainly that the "near me" and plain service figures are national.

**Searches without a place name still count.** People inside the city search "[service] near me" or just "[service]" and get local results. Location-targeted volumes include those searches. Volumes for city-named keywords alone undercount demand, so say so when that is all the data has.

**Small numbers are normal.** Tools round low local volumes to 0 or "under 10". Do not drop those keywords. Add up the searches behind each page (the service with the city, near me, suburbs, emergency, cost, price, quote) and judge the page on the total, not on any one keyword.

**Count only buyers.** Keep the service with a place, near me, emergency, cost, price and quote searches. Remove do-it-yourself and "how to" searches, job and career searches, training and courses, supplies and wholesale, and other businesses' brand names. AI answers now take many of the "how to" clicks anyway.

**Click cost is a sign of value.** A high click cost means businesses already pay for that click, so a lead in that trade is worth something. It is also the user's own cost if they run ads, which feeds the lead price sum in the main skill.

**Read page one, not the difficulty score.** Keyword difficulty scores are built for national sites and say little about a local results page. Look at the first page and the map results for the main search instead, from a connected tool or from what the user tells you. Small local businesses, directories and other lead sites are a good sign. National brands filling the page is a bad one. Note whether ads show and whether an AI answer sits at the top.

**Check the local wording.** The same service can have different names in different places. Use the term the city uses as the main keyword and keep the other as a variation.

## The keyword map

- One main keyword and two or three variations per page.
- The home page takes the service with the city. On a one-city site there is no separate city page to compete with it.
- One page for each service that is worth its own page. Say which are and why.
- Suburb pages only for places inside the buyer's service area. If the service area is not known yet, list the candidate suburbs and mark them "confirm with the buyer".
- Give every page its monthly search total, the sum of its keywords, or "unknown" when there are no volumes.
- Flag any two pages that would target the same search.
- If the data is thin, build the map from what there is and say so. Do not pad it with guessed keywords.

Save it as `keyword-map.md` in the project folder. The `build-site` skill reads it for the page plan.
