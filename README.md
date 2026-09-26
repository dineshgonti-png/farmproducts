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
which needs no account. Set `ORDER_EMAIL` at the top of `assets/js/app.js` to
the address that should receive them:

    var ORDER_EMAIL = "orders@example.com";

The first submission after that sends a one-time confirmation link to that
address — click it once, and every order, enquiry and stock-notification
signup afterwards lands in the inbox. Until it is set, the forms tell the
customer to phone instead of silently dropping the message.

Customer details pass through FormSubmit's servers on the way to the inbox.
