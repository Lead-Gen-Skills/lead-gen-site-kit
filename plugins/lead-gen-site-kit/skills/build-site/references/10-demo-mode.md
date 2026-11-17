# Demo mode: a site built before a buyer, or for teaching

Use this when the user wants the whole site built and live before a buyer is signed, or as an example to show other people. The site looks and works like the real thing, but nobody can mistake it for a real business's proof.

## The rule that does not bend

Never use a real business's name, reviews, rating, photos, licence or prices as stand-ins, not even the user's top prospect, and not even "just for the demo". On a live domain that shows a real business's reputation as proof for another brand, without their agreement. It is misleading to every visitor who reads it, and a consumer law risk for the user. If the user asks for it, say so in one or two plain sentences and offer the sample installer below.

## What a demo site has

1. **A sample installer.** A clearly fictional business name for the one who "does the work". Search the name first and pick another if a real business uses it. Give it sample facts modelled on a typical good local business: years trading, a free measure and quote, a call back time, warranties.
2. **Sample reviews and prices,** written for the demo, kept in the same data the real ones will use, and marked as samples there.
3. **A strip at the top of every page:** "Demo site for training. The installer, reviews and prices shown are samples, not a real business." Repeat a short "sample" note under the reviews and the price table.
4. **Kept out of search.** Every page carries a noindex instruction, and the site sends the same instruction in its response headers if the host allows it. In WordPress, tick "Discourage search engines from indexing this site" and check it is still ticked after any plugin change.
5. **No rating or review structured data** while the reviews are samples.
6. **Honest placeholders for photos.** Generated photos carry "Photos are illustrative of the work." (see the `optimize-images` skill).

Everything else follows the brief and the rest of this skill: the business model disclosure names the sample installer, the call to action and the form work, and enquiries are saved where the user can see them.

## Going live

Make demo mode one setting, not a scatter of edits. To go live:

1. Replace every sample fact (installer name, years, warranties, call back time, reviews, rating, prices, photos) with the buyer's own, with their written permission.
2. Fill the legal name and business number.
3. Turn demo mode off: remove the strip and the sample notes, remove the noindex, and add the rating markup only if real reviews are shown on the page.
4. Search the whole site for the sample installer's name and the word "sample". Both must return nothing.
5. Run the `audit-site` skill, including the claims check, before telling anyone the site is live.
