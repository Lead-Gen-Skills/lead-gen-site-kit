# Keyword research for a local lead site

The user already knows general keyword research. This file covers only what is different when the site sells leads for one service in one city. Do not teach a tool screen by screen.

## Where the data comes from

Work down this list and stop at the first one that applies. Say which one you used.

1. **A connected keyword tool.** If keyword tools are available in the session (for example a KWFinder or SEMrush connector), use them directly: related keywords, volumes, click costs and the results page for the main search. Look up the tool's location id for the city or region first and set it. Never run the research for the whole country.
2. **An export or paste from any tool.** Google Ads Keyword Planner, SEMrush, Ahrefs, Ubersuggest, KWFinder or another. Read whatever columns are there: keyword, volume, click cost, difficulty. Ask which location the figures are for if it is not shown.
3. **No tool.** Build the keyword list from the service, the city, the suburbs in the service area and the Google suggestions and "people also ask" questions the user pastes. Leave the search totals blank, write "unknown" in the click cost column and in Notes, and say the figures are unknown.

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

The map uses the same layout as the course's Keyword sheet, so the user can copy each row straight into the sheet. Keep the sections, columns and their order exactly as below.

### Which pages go on the map

- **Home page.** It takes "[service] [city]". The city gets no suburb page of its own: a `/[service]-[city]/` page would compete with the home page.
- **Services.** One page for each service that is worth its own page, and say which are and why. Add a **Pricing** page, `/pricing/`, that takes every cost and price search ("[service] cost", "[service] price", "how much is [service]"), so no service page competes for them.
- **Suburbs.** Pages only for places inside the buyer's service area. If the service area is not known yet, list the candidate suburbs and write "confirm with the buyer" in Notes.
- **Optional later.** Pages worth building only if the buyer offers that service or the intent is mixed. Say why in Notes. They are not counted in the site total.

### Web addresses

Short and flat, with no city in a service address:

- Home: `/`
- Service: `/[service]/`
- Suburb: `/[service]-[suburb]/`
- Pricing: `/pricing/`

### Page columns

Every page row in Home page, Services, Suburbs and Optional later has these columns, in this order:

| Page | Web address | Main keyword | Secondary keywords | Monthly searches (page total) | Click cost | Notes |
|---|---|---|---|---|---|---|

- **Main keyword**: one search, in the wording the city uses.
- **Secondary keywords**: exactly three, the strongest after the main keyword, separated by commas. Fewer only when the page has fewer buyer searches. The rest go in the full lists below the map.
- **Monthly searches (page total)**: the sum of every keyword behind the page, not only the four shown. Leave it blank when there are no volumes and write "unknown" in Notes. For a suburb with no measurable volume, leave it blank and write "under 10" in Notes.
- **Click cost**: the highest click cost among the page's keywords, with the keyword it came from named in Notes ("click cost from [keyword]"). Write "none reported" when the tool gives no click cost for any of them, and "unknown" when there was no tool. Never leave it blank.
- **Notes**: where the click cost came from, "under 10", "confirm with the buyer", and anything else the user should check.

### The layout

Write `keyword-map.md` in this order. Use the placeholders below only as a guide to the shape: every row holds the real research.

```markdown
# Keyword map: [service] in [city]

Researched [date] with [tool, or "no tool"], area searched: [city, region or council area the figures are for].

## Home page

| Page | Web address | Main keyword | Secondary keywords | Monthly searches (page total) | Click cost | Notes |
|---|---|---|---|---|---|---|
| Home | / | [service] [city] | [service] near me, [keyword], [keyword] | [total] | $[highest] | Click cost from [keyword] |

### Page one check

| Search | Monthly searches | Click cost | Who is on page one | Map pack showing? | Ads showing? | AI answer at the top? | Good sign? | Notes |
|---|---|---|---|---|---|---|---|---|
| [service] [city] | [volume] | $[cost] | [for example: small local businesses, one directory, one lead site] | Yes | Not checked | No | Yes | [why it is or is not a good sign] |

## Services

| Page | Web address | Main keyword | Secondary keywords | Monthly searches (page total) | Click cost | Notes |
|---|---|---|---|---|---|---|
| [Service one] | /[service-one]/ | ... | ... | ... | ... | ... |
| Pricing | /pricing/ | [service] cost | [service] price, [keyword], [keyword] | [total] | ... | Takes every cost and price search |

## Suburbs

| Page | Web address | Main keyword | Secondary keywords | Monthly searches (page total) | Click cost | Notes |
|---|---|---|---|---|---|---|
| [Suburb] | /[service]-[suburb]/ | [service] [suburb] | ... | | none reported | under 10, confirm with the buyer |

**Site total: [sum of the Home page, Services and Suburbs totals] searches a month.** Optional later pages are not included.

## Optional later (not counted in the site total)

| Page | Web address | Main keyword | Secondary keywords | Monthly searches (page total) | Click cost | Notes |
|---|---|---|---|---|---|---|
| [Page] | /[service]/ | ... | ... | ... | ... | Build only if the buyer offers it |

## Clashes to watch

- [city] has no suburb page. The home page owns "[service] [city]".
- [Search] belongs to [page], not [other page].
- [Search] belongs to [page], not [other page].

## Searches left out

[Comma-separated list of the searches removed, and why in a few words: do-it-yourself, jobs, supplies, brand names, other areas.]
```

### Rules for each section

- **Page one check**: one row, for the home page's main keyword. Who is on page one: small local businesses, directories, lead sites or national brands. Map pack showing: Yes or No (whether the map results show at all, not how strong they are; do not write "strong" or "weak"). Ads showing: Yes, No or Not checked (use Not checked when the tool or the user could not see the paid results). AI answer at the top: Yes or No. Good sign: Yes when small local businesses, directories and lead sites fill the page, No when national brands do. Say why in Notes.
- **Google profile category**: while on the home page's results, open the top three profiles in the map pack and note each one's primary category (and any secondary categories shown). Choose the closest primary category they share, and secondaries only for services the site will offer. Write them into the details sheet's Primary category and Secondary categories rows if you can edit it; otherwise give the user the values to type in. If you cannot open the results yourself, give the user the exact search and ask them to read the categories off the three profiles. If there is no map pack, say so and leave the category for the profile work doc's category check.
- **Clashes to watch**: the city line always comes first. Then the next two most important, each naming the search and the page that owns it. The course sheet has room for three; put any more in the notes below the map.
- **Searches left out**: one line, so the user can see what was removed and add a search back if it is a real buyer search.
- **Room in the sheet**: the course sheet has rows for five service pages, the Pricing page and two spares, six suburbs and two optional pages. If the map needs more, say which pages to cut or tell the user to add rows.

### Below the map

- **Keywords behind each page**: the full list for every page, each keyword with its volume (and its click cost where there is one). The page total counts all of them.
- **Which services earn a page, and why**: one line per service, including the ones left as a section of another page.
- If the data is thin, build the map from what there is and say so. Do not pad it with guessed keywords.

Save it as `keyword-map.md` in the project folder. The `build-site` skill reads it for the page plan.
