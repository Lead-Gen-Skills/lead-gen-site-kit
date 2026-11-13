# Generating placeholder images

Real photos of real jobs always win. Until the business has them, generate placeholders that look like the real thing would: a phone snap taken on the job, not a polished render. This is the style used on previous builds.

## The rules

1. **Phone photo, not stock.** Every prompt asks for a mid range smartphone shot with honest imperfections. Polished, cinematic, HDR images read as AI at a glance and cost trust.
2. **Nothing unpleasant.** For trades that handle waste, dirt or damage, the story is the people, the gear and the tidy result, never the mess. Put it in the negative prompt every time.
3. **No readable text.** Generators garble lettering. Ask for plain, unbranded vehicles, uniforms and buildings, and reject any image with stray letters, logos or number plates.
4. **Label it.** A section built from generated photos carries a small line such as "Photos are illustrative of the work." Never caption a generated person with a real name, and never present a generated image as a specific real job.
5. **Replace as real photos arrive.** Keep the prompts in the project's `docs/image-prompts.md` so a placeholder can be regenerated or swapped without guesswork.

## The phone-photo style block

Append to every prompt:

```
Shot on a mid range smartphone in natural daylight. Slightly off centre handheld
framing, horizon a touch crooked, mild softness toward the edges, realistic light,
a few honest imperfections. No HDR glow, no colour grading, no stock photo
styling, not cinematic. Photorealistic, 4:3.
Negative: text, watermarks, logos, brand names, signage, number plates, glossy
finish, fisheye, oversaturation, plastic looking skin, extra fingers,
[anything unpleasant for this trade].
```

Start job photos with "Phone photo taken by the operator:" so the framing feels like someone on the job pulled their phone out.

## The crew photo

One casual team shot does more for trust than any amount of copy. It sits beside the "why book with us" block (see `build-site`, `references/03-conversion.md`) and on the About page. Use a second, different shot on About so the two pages do not repeat.

Pattern:

```
Three ordinary looking [country] [trade] workers [beside their van / truck /
at the front door of a job], mid conversation, [one holding a typical tool],
[one with a clipboard or tablet], [one leaning on the vehicle with a coffee].
Plain unbranded [colour] work shirts, work boots, a bit dusty from the day.
Relaxed candid moment, nobody posing, one of them half smiling at something off
camera. Everyday faces, no model looks. [Time of day] light, [local setting].
```

Mix ages and genders, keep faces ordinary, and check hands and faces at full size before using it. Caption it with the role, not names ("the local crew, a break by the truck").

## Job-type photos

The "Jobs we do around [location]" cards need one photo per job type, ideally one per region so neighbouring regions do not share pictures. Make the job the subject, not the vehicle: if every prompt centres the van or truck, every card looks the same. Fill the frame with what makes that job different, keep the vehicle at the edge or out of shot, and give each prompt a local landscape cue so it belongs to the page it sits on:

| Job type | Example scene cue |
|---|---|
| Household job | the backyard: a clothesline with washing, a swing set or trampoline, the worker at the job |
| Holiday rental | shot from the deck: towels on the rail, coffee cups, the water view, the worker small on the lawn below |
| Caravan or holiday park | rows of vans with awnings and annexes, the job in front, the trees typical of that region |
| Commercial or venue | the kitchen back door, or a wedding lawn with chairs set out and the job at the edge |
| Farm | cows or cattle filling the foreground, the shed and the job behind |
| Building site | the worker and the job close up, frames and a site office behind |

## Generating in practice

- Generate at 4:3 (the Polaroid frame and the card both crop to about 4:3) and keep the subject centred.
- Batch the set. Image services rate limit parallel jobs (on the image generation service used for a previous build, about eight at once), so send waves of eight and wait for each to finish.
- Review every image before it goes near the site. Put a wave on one contact sheet (a 4 by 2 grid of thumbnails with their numbers) and check each for: stray letters or logos, anything unpleasant, warped hands or faces, the wrong country's vehicles or buildings, and whether the scene actually belongs to its page. Regenerate anything that fails rather than settling.
- Run the keepers through the pipeline (`scripts/optimize-image.mjs`): about 1000px wide for heroes and crew photos, 800 to 900px for cards.
- Record each image's prompt, filename and alt text in `docs/image-prompts.md`, and delete generated files the site no longer uses so they do not bloat the build.
