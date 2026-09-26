# FarmProducts

An online store for certified-organic **turmeric and corn** — two crops, nothing else.

Static site: plain HTML, CSS and vanilla JS. No build step, no dependencies.

| Page | Contents |
|---|---|
| `index.html` | Hero, trust strip, category tiles, turmeric/corn split, bestsellers, offers, subscription crates, growers, reviews |
| `shop.html` | Full catalogue with sidebar filters (shelf, label, price, search) and sorting |
| `about.html` | The two-crop story, grower collectives, certifications |
| `contact.html` | Enquiry form, farm office details, FAQs |

### Structure

    assets/js/data.js   catalogue — FP_CATEGORIES + FP_PRODUCTS
    assets/js/app.js    cart (localStorage), filtering, rendering
    assets/css/styles.css

To add or change a product, edit `assets/js/data.js` — both the homepage and shop
render from it.

### Run locally

    python3 -m http.server 4321

Then open http://localhost:4321.

### Stock

Every product currently has `stock: false`, so the whole catalogue shows as
out of stock and offers an **Enquire** button instead of **Add**. To put a
line back on sale, set `stock: true` on it in `assets/js/data.js` and give it
a real `price` (a `price` of `null` renders as "Rate on request").

Only popcorn maize has a confirmed rate right now: Rs 100 / kg.

### Orders by email

Orders and enquiries are relayed to email by [FormSubmit](https://formsubmit.co),
which needs no account. The recipients are listed at the top of
`assets/js/app.js` — every address in the list gets its own copy:

    var ORDER_EMAILS = [
      "someone@example.com",
      "someoneelse@example.com"
    ];

**Each address must be confirmed once.** The first submission sent to a new
address triggers an activation email to that inbox; click the link in it and
everything afterwards arrives normally. An order counts as sent if at least
one address accepts it, so an unconfirmed recipient cannot block the others.

Until the list is filled in, the forms tell the customer to phone rather than
silently dropping the message.

Two caveats worth knowing:

- Customer names, phones and addresses pass through FormSubmit's servers on
  the way to the inbox.
- This repository is public, so any address in the list is visible in the page
  source and will eventually be found by scrapers. FormSubmit issues a random
  token you can POST to instead of the address itself — swap it in once the
  addresses are confirmed if you would rather not publish them.
