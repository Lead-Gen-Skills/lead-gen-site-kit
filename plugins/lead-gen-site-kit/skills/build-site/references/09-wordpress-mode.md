# WordPress mode

Use this mode when the user builds the site themselves in WordPress (or any page builder or CMS) and wants the kit for the thinking and the writing. In this mode you write documents, not code. The user assembles the pages the way they already know.

Do not teach WordPress, and do not recommend themes, page builders, hosts or a plugin list. The user has their own way of building. Keep to what is different about a lead-gen site.

Every rule in the main skill still applies: one call to action with exact wording, an honest business model, flat location URLs, never invent proof, real photos, a consistent locale.

## What you produce

Create these in the user's project folder, so later sessions (audits, the monthly routine, new pages) can read them.

| File | Contents |
|---|---|
| `brief.md` | The brief from `01-brief.md`, every field answered or marked `TO CONFIRM` |
| `page-plan.md` | One row per page: page name, URL slug, the one main keyword, two or three variations, which pages it links to |
| `copy/[page-slug].md` | The full copy for one page, section by section, plus its title, description, image alt text and FAQs |
| `to-confirm.md` | Every fact you could not source, and everything you assumed |

## The steps

1. **Brief.** Run `01-brief.md` with the user, one question at a time. Never fill a gap yourself. Unknowns go to `to-confirm.md`.
2. **Page plan.** Read `04-content.md` for the keyword map. One main keyword per page; flag any two pages that target the same search. URL slugs are short and flat with the service and the place together: `/[service-keyword]-[location]/`. No empty parent pages.
   - **On a one-city site the home page is the city page.** It takes the head term with the city. Do not plan a separate city page that would compete with it. Each service page takes its own service with the city.
   - **Suburbs:** follow the pilot rules in `04-content.md`. Start with a handful, never more than ten at launch, and only suburbs the business covers and has something true and specific to say about.
3. **Copy, two pages first.** Write the home page in the section order from `03-conversion.md`, and the main service page in this order: headline with the service and place and the call to action, a first section written to sell, a section on the specifics of this service, reviews, the call to action again, then FAQs. Label each section with its heading so it can be pasted into a page block by block. Stop and let the user build and check those two before writing the rest; they become the templates.
   - **Only write a section the brief can fill.** Pricing tables, inclusions lists, job cards and team photos need facts the brief may not hold. Where it does not, leave the section out and note it in `to-confirm.md`. Never ship a section of placeholders.
4. **Per page extras.** With each page's copy give: the title and meta description (see `05-metadata-and-schema.md` for length), alt text for each image slot, and the FAQs. Answer-first, visible text.
5. **The remaining pages.** Service pages, the city page, the suburb pilot, about, contact, the quote page. Before each location page, state what is specific to that place; if nothing is, tell the user to leave it out.
6. **The disclosure.** If the business is a lead network, give the exact disclosure sentence and the three places it goes: the footer, the about page, beside the quote form. Word it to match the brief: one contractor is "a local licensed contractor", not "a network of providers". Legal page wording comes from the user's own lawyer-drafted template, never from you.
7. **Schema, as a paste-in block.** Offer the JSON-LD from `05-metadata-and-schema.md` as one block per page type for the user to paste where their set up allows. No rating markup unless real reviews are shown on that page.
8. **Images.** Use the `optimize-images` skill for every photo; the user uploads the results.
9. **The form.** Use the `lead-form` skill for the questions, order and wording. In WordPress the form is built with the user's form tool or their CRM's form; see "The form in WordPress" in that skill.
10. **Before launch.** Run the `audit-site` skill against the live or staging URL, including the claims check, and give the five fixes that matter most.

## What changes from a coded build

- The code helpers named in the other references (`buildQuoteUrl()`, `locationPath()`, the data file, "add one data entry") do not exist here. The rule behind each still applies: every call to action links to the one quote page, and every URL and internal link comes from `page-plan.md`.
- Write `TO CONFIRM` wherever the other references say `TODO`.
- No data file, routes or deploy config. `page-plan.md` is the source of truth for URLs and internal links, and `brief.md` for facts. When a fact changes, change the brief first, then every page that uses it.
- You cannot enforce rules in code, so list the invented-value risks explicitly: at the end of every writing session, add anything unsourced to `to-confirm.md` and read the list back.
- Speed is the user's job in their own build. Mention it once: compressed images, few plugins and scripts. Do not turn it into a lesson.
- Measurement: give the two events that matter (form successfully sent, phone number tapped) and how to test them, installed directly or through a tag manager, whichever the user prefers. See `07-measurement.md`.
