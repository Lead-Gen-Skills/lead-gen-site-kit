# Lead form best practices, with the evidence

What makes a service business quote form convert, and how strong the evidence is for each rule. Grades: **Strong** (regulator, peer-reviewed, large dataset or controlled test), **Medium** (a named test with numbers, small or old), **Weak** (vendor claim or no method). Teach the rules; quote the numbers only with their grade.

Compiled October 2026 for a production quote form rebuild.

## The worked example

A previous build replaced an embedded GoHighLevel form with its own five screen form:

1. **How big is the place?** Tap the bedrooms (Studio, 1 to 5, 6+), then the bathrooms. The starting price for that size appears straight away ("3 bed, 2 bath, starts from $[price]"), nothing more. A Next button, because the visitor needs a moment to read the price.
2. **When do you need it done?** Five taps, advances on tap.
3. **Do you need [the common add-on]?** Three taps, the "yes" shows the add-on's starting price.
4. **What's the property address?** Google suggestions, works without them too.
5. **Who should we ring with your quote?** Name, phone, optional email, optional note, consent line, "Get My Free Quote".

The thank-you screen repeats the size and price ("your fixed quote for the 3 bed, 2 bath job, from $[price]"), says when the call comes, and offers the phone number.

## Structure and flow

- **One question per screen.** Fewer things per screen help people understand the question, use a phone and recover from mistakes. The UK government's design system is built on this pattern. *Strong in practice*: [GOV.UK question pages](https://design-system.service.gov.uk/patterns/question-pages), [GOV.UK form structure](https://www.gov.uk/service-manual/design/form-structure).
- **Multi-step usually beats one long form for quote requests, but the famous lift numbers are soft.** Formstack's 2015 report found multi-page forms converting at about 14% against about 5% for single page (vendor data). *Medium*: [Demand Gen Report summary](https://www.demandgenreport.com/features/news-briefs/study-online-forms-with-incentives-increase-conversion-rates). The widely shared "300%" claim comes from a vendor blog with no sample sizes. *Weak*: [Venture Harbour](https://ventureharbour.com/multi-step-lead-forms-get-300-conversions/). Do not quote it as fact.
- **Open with an easy, non-personal tap.** A small first commitment makes the bigger ones (phone number) more likely, the foot in the door effect. The 1966 study found 52.8% agreed after a small first request against 22.2% asked cold. *Medium, old, mixed replications*: [Freedman and Fraser](https://pubmed.ncbi.nlm.nih.gov/5969145/).
- **Order easy to sensitive:** sizing tap, qualifying taps, address, then contact details last.
- **Auto-advance on single-choice taps only.** Wait about 150 to 200 milliseconds so the tick is seen. Never auto-advance after typing.
- **Progress that feels quick early.** A slow start raises abandonment; progress bars do not reliably lift completion on long forms. *Strong, peer-reviewed*: [Conrad, Couper, Tourangeau and Peytchev 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC2910434). Show "2 of 5" or a bar, keep the form short enough that it moves fast.
- **The phone's back button goes back one question.** People expect Back to return to what they saw before; breaking it causes abandonment. *Medium*: [Baymard](https://baymard.com/blog/back-button-expectations). Push a history entry for each screen.

## Questions and fields

- **Every field earns its place.** Across 40,000 landing pages HubSpot saw conversion fall as fields were added, with text areas and dropdowns hurting most. *Medium, observational*: [HubSpot](https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx).
- **Phone is the expensive field.** In one controlled test, adding even an optional phone field cut conversion by 36%. *Medium, one test*: [NextAfter](https://www.nextafter.com/?p=14159). A callback business needs it, so ask it last and give the reason in the heading.
- **Email optional** when the follow-up is a phone call. Never a "confirm email" field.
- **One name field,** not first and last. Split it in code.
- **Do not ask what you already know.** The city comes from the page they clicked from or the address; the source page comes from the link.
- **Benchmark honestly.** In Zuko's dataset about two thirds of people who start a form finish it. *Medium, vendor dataset*: [Zuko](https://zuko.io/blog/25-conversion-rate-statistics-you-need).

## Mobile input details

- **Tap buttons beat dropdowns for short lists.** Baymard rates dropdowns a poor choice for fewer than about five options. *Strong*: [Baymard](https://baymard.com/blog/drop-down-usability). For a long but structured list (twelve bedroom and bathroom combinations), split it into two small tap rows instead of one long list.
- **Tap targets 48px or taller.** WCAG 2.2 AA asks for 24px minimum, 44px is the AAA and Apple standard, Android uses 48dp. [W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- **The right attributes on every input:** `autocomplete="name"`, `"tel"`, `"email"`, `type="tel"` with `inputmode="tel"`, `type="email"`. Browsers then fill the field in one tap. *Strong*: [web.dev autofill](https://web.dev/learn/forms/autofill).
- **Address autocomplete with a typed fallback.** Address lookup is the most effective way to cut address effort, and 9% of typed addresses contain typos. *Strong*: [Baymard](https://baymard.com/blog/automatic-address-lookup). Load the Maps script only when the address screen opens, so no other page pays for it.
- **Use a tap calendar for dates, and show the notice rule on it.** If providers need a minimum notice period, grey out the days inside it but keep them tappable: a tap explains the rule and names the earliest bookable day, instead of silently doing nothing. Start the week on Monday for Australian visitors, open on the month of the first bookable day, and offer a "Not sure of the date yet" way through so undecided visitors are not lost.
- **Validate when they try to move on,** not on every keystroke, and say plainly what to fix ("That number doesn't look right, mobile or landline.").
- **Visible labels,** not placeholder-only, and the button stays reachable above the keyboard.

## The price reveal ("from $X" after the size question)

**Opt-in only.** The form shows no prices unless the owner chooses this in the brief. Without it, the sizing question advances on tap like the others.

A previous build added this because callers kept asking only about price. The idea: answer the price question up front, so price checkers self-select out before costing a callback, and the people who carry on already accept the range.

- **The evidence is thin, so treat it as a test.** No controlled home-services test was found. A B2B case saw pricing near the form cut leads 8.7% but lift lead to opportunity 21%. *Weak*: [Goyette](https://adamgoyette.substack.com/p/should-you-put-pricing-on-your-landing). An older software test saw a prominent price double leads. *Medium, different market*: [VWO](https://vwo.com/blog/prominent-price-display-increases-leads-generated-by-100/). Expect fewer but better leads, and judge it on booked jobs per visitor.
- **Show it the moment the size is known, then keep going.** Do not auto-advance off the price screen: give a Next button so it can be read.
- **Keep it simple:** the size and "starts from $X". No tax notes or small print in the card; extras and conditions belong on the call and the pricing page.
- **The first number seen anchors the callback.** If real quotes routinely land far above the "from", the reveal turns into sticker shock on the phone. Keep the floor honest.
- **Australian Consumer Law:** the advertised price must be genuinely available, and small print cannot fix an overall misleading impression. *Strong, regulator*: [ACCC](https://www.accc.gov.au/business/advertising-and-promotions/false-or-misleading-claims).
- **One source of truth.** The form reads the same pricing data as the pricing table and the schema offers, so changing a price in one place updates all three.
- **No price for the edge cases** (homes bigger than the list): say "Bigger homes get a custom price" and keep them in the form.

## Trust and microcopy

- **Do not say "spam" near the button.** One test found "we will never spam you" cut signups 18.70%, while "your information will not be shared" lifted them 19.47%. *Medium, single tests*: [Unbounce](https://unbounce.com/a-b-testing/failed-ab-test-results/).
- **Say what happens next,** in the heading or under the button: "We call back the same day in business hours."
- **Button copy is an action and an outcome,** never "Submit". A previous build keeps its site-wide "Get a Free Quote" on every link and uses "Get My Free Quote" on the final button.
- **Lead networks need consent to share.** An Australian business that passes personal information to others for a benefit is trading in it, and loses the small business exemption unless people consent. *Strong, regulator*: [OAIC](https://www.oaic.gov.au/privacy/privacy-for-organisations/trading-in-personal-information). Put a short collection notice by the button ("By sending, you agree we can pass your details to one vetted local provider so they can quote this job.") and link the privacy policy. Get legal advice on the exact wording for each business.
- **Repeat the promise beside the form:** the guarantee and "the quote is the price", plus the phone number for people who would rather talk.

## Spam

- **No visible CAPTCHA to start.** People take about 10 seconds per image CAPTCHA and often get it wrong. *Strong, usability*: [Bursztein et al., Stanford](https://web.stanford.edu/~jurafsky/burszstein_2010_captcha.pdf).
- **Layer invisible checks:** a honeypot field hidden from people (`aria-hidden`, `tabindex="-1"`), a minimum time between page load and submit (a previous build uses 3 seconds), and server-side validation of name and phone. Answer bots with a fake success so they do not retry. Add Cloudflare Turnstile in invisible mode only if spam still gets through. [Turnstile](https://developers.cloudflare.com/turnstile/).

## After the submit: speed to lead

- **Ring fast.** Firms that contacted a web lead within an hour were nearly seven times as likely to qualify it, yet only 37% of 2,241 firms managed that. *Strong*: [Harvard Business Review](https://hbr.org/2011/03/the-short-life-of-online-sales-leads). The often quoted "100 times more likely at five minutes" comes from vendor data. *Medium*: [Lead Response Management study](https://www.mortech.com/hs-fs/hub/25649/file-13535879-pdf/docs/mit_study.pdf). The "78% buy from the first responder" figure cannot be traced; do not teach it.
- **The thank-you screen** restates what they asked for (size and starting price), when the call comes, and a click-to-call number.
- **Send an instant SMS or email** from the CRM confirming the request.
- **A perfect form with a two hour callback still wastes the lead.**

## Measurement

- `form_start` on the first tap, `form_step` with the step name and number on every screen, `price_reveal` with the size and price, and `generate_lead` (Google's recommended lead event, with `value` and `currency` when a price is known) only after the server confirms the save. [GA4 recommended events](https://support.google.com/analytics/answer/9267735).
- Mark only `generate_lead` as a key event. Do not rely on GA4's automatic form events for a JavaScript form; they can fire on failed sends.
- Build a funnel exploration from the `form_step` events, split by device, to see which screen loses people.
- Pull booked jobs from the CRM by source page. Form fills alone hide lead quality.

## What to test

Calculate the sample size before starting and do not stop early; most single sites only have the traffic to test bold changes.

- The price reveal shown against hidden (judge on booked jobs).
- Email required against optional.
- First question: property size against service type.
- A specific callback promise ("within 15 minutes") against a general one.
- Address autocomplete against suburb and postcode only.

## Common mistakes

1. Contact details first.
2. Dropdowns for short lists on a phone.
3. Auto-advancing after a typed field, or a Back button that leaves the form.
4. Rejecting phone numbers with spaces or +61.
5. A visible reCAPTCHA as the first defence.
6. "We never spam" next to the button.
7. A "from" price nobody can actually get.
8. Firing the lead event on the button click instead of on a confirmed save.
9. Forwarding straight to the CRM with no saved copy, so a broken webhook silently loses leads.
10. Passing leads to providers with no consent wording.
11. Counting form fills instead of booked jobs.
12. Slow follow-up.
