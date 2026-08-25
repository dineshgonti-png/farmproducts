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

### Note

Demo storefront — checkout and the contact form are not wired to a backend.
