---
name: lead-form
description: >
  This skill should be used when the user wants to "build a quote form", "build
  a lead form", "make a contact form", "replace my GoHighLevel form", "replace
  the embedded form", "make a multi-step form", "make a one question per screen
  form", "show prices on my quote form", "my form isn't converting", "people
  are only price checking", "why are leads dropping off", or wants to review,
  speed up or test a lead capture form on a service business website. It covers
  the flow, the questions, the price reveal, mobile input details, consent and
  privacy wording, spam, the backend that saves and forwards each lead,
  measurement and what to test.
metadata:
  version: "0.1.0"
  author: "Chris Dinham, Lead Gen course"
---

# Build a high-converting lead form

Build the quote form the way a previous build replaced its embedded GoHighLevel forms: our own form on our own page, one question per screen, a tap advances, and only the last two screens need typing. It loads in a few kilobytes instead of an embedded iframe, it matches the brand, and every answer lands in the CRM with the page it came from.

The form has two jobs, in this order:

1. **Capture the lead.** Every extra field, slow load or confusing screen loses people.
2. **Qualify it.** Ask the few questions the business needs to price or route the job, and let pure price checkers see a starting price without wasting a callback.

## How to build one

### Step 1: agree the questions

Read `references/best-practices.md` first. With the user, list what the business truly needs to quote the job, then cut everything it can find out on the call. Aim for three or four tap questions plus address and contact. Order them easy to sensitive:

1. An easy, non-personal tap question that also sizes the job (property size, service type).
2. One or two qualifying taps (how soon, any extras that change the price).
3. The address (with autocomplete).
4. Name, phone, optional email, optional note. Always last.

Never invent prices, response times or guarantees. Ask the user for the real numbers.

### Step 2: decide on the price reveal

If customers keep asking "how much?", show the starting price the moment the visitor answers the sizing question, and let them carry on. Read the price reveal section of `references/best-practices.md`. The "from" price must be one customers can actually get (Australian Consumer Law), and it must come from the same data that drives the site's pricing table so the two can never disagree.

### Step 3: build it

Read `references/implementation.md`. Build the form page (noindex), the form component, the address field and the small server endpoint that validates, saves and forwards each lead. Point every CTA on the site at the form page through `buildQuoteUrl()`.

### Step 4: wire measurement

Fire `form_start`, `form_step`, `price_reveal` and `generate_lead` (on confirmed server success only). Mark `generate_lead` as the key event. Details in `references/implementation.md`.

### Step 5: test before launch

Walk the whole form on a real phone: every tap, the phone's back button, a bad phone number, a slow network. Submit one real lead and check it reached the database and the CRM with readable answers. Then run the launch checks at the end of `references/implementation.md`.

## Non-negotiable rules

1. **One question per screen, tap to advance.** Choice questions advance on tap. Never auto-advance after typing. A back arrow on every screen after the first, and the phone's back button steps back one question instead of leaving the page.
2. **Big tap buttons, not dropdowns,** for any list a thumb can scan. At least 48px tall.
3. **Contact details last,** and phone explained ("Who should we ring with your quote?").
4. **Accept any Australian phone format** (spaces, brackets, +61). Clean it in code.
5. **No visible CAPTCHA.** A hidden honeypot field, a minimum time-to-submit check and server-side validation. Bots get a fake success.
6. **Save the lead before forwarding it.** The database row is the backup if the CRM is down or the webhook is wrong. Forward after the visitor has their answer, so a slow CRM never slows the form.
7. **Consent and privacy by the button.** A lead network must say it passes details to a provider. Link the privacy policy, and update the policy to name where leads are stored and sent.
8. **Honest prices only.** A "from" price is the real floor for that size, pulled from the site's single pricing data.
9. **The form page is noindex** and left out of the sitemap. It is a conversion step, not a landing page.
10. **Judge it on booked jobs, not form fills.** A form that doubles leads and halves the close rate has not helped.

## Reference files

| File | Read it when |
|---|---|
| `references/best-practices.md` | Designing the questions, the copy and the price reveal, or reviewing a form that is not converting. Evidence and sources for each rule. |
| `references/implementation.md` | Building it: the architecture, the form component, the endpoint, measurement and the launch checks. |
