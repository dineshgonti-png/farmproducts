/* ============================================================
   FarmProducts — storefront behaviour
   Cart persists in localStorage; product grids render from data.js
   ============================================================ */
(function () {
  "use strict";

  /* ============================================================
     ORDERS & ENQUIRIES BY EMAIL
     Every address listed here gets its own copy of each order and
     enquiry. Add or remove addresses freely.

     Relayed by FormSubmit.co, which needs no account. EACH address
     must be confirmed once: the first submission sent to it triggers
     a one-time activation email to that inbox — click the link in it
     and everything afterwards arrives normally.

     An order is treated as sent if at least one address accepts it,
     so a recipient who has not confirmed yet cannot block orders
     from reaching the one who has.
     ============================================================ */
  var ORDER_EMAILS = [
    "dinesh.gonti7@gmail.com",
    "nalimelaabhinavreddy@gmail.com"
  ];


  var STORE_KEY = "fp_cart_v1";
  var FREE_SHIP = 599;
  var cart = load();

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
    catch (e) { return []; }
  }
  function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(cart));
  }
  function money(n) {
    if (n === null || n === undefined) return "Rate on request";
    return "₹" + n.toLocaleString("en-IN");
  }
  function byId(id) {
    return (window.FP_PRODUCTS || []).filter(function (p) { return p.id === id; })[0];
  }

  /* ---------------- product card ---------------- */
  var TAGS = {
    "high-curcumin": "High curcumin",
    "rare": "Rare variety",
    "local": "Local landrace",
    "seed": "Seed rhizome"
  };

  function tagMarkup(p) {
    for (var i = 0; i < p.tags.length; i++) {
      if (TAGS[p.tags[i]]) return '<span class="card__tag">' + TAGS[p.tags[i]] + "</span>";
    }
    return "";
  }

  function cardMarkup(p) {
    var out = !p.stock;
    return (
      '<article class="card' + (out ? " is-out" : "") + '" data-id="' + p.id + '">' +
        '<div class="card__media' + (out ? " is-out" : "") + '" style="background-color:' + p.bg + '">' +
          tagMarkup(p) +
          '<button class="card__fav" aria-label="Save ' + p.name + '">\u2661</button>' +
          "<span>" + p.icon + "</span>" +
          (out ? '<span class="stock-ribbon">Out of stock</span>' : "") +
        "</div>" +
        '<div class="card__body">' +
          '<span class="card__farm">' + p.origin + "</span>" +
          '<h3 class="card__title">' + p.name +
            (p.telugu ? ' <span class="card__telugu">' + p.telugu + "</span>" : "") + "</h3>" +
          '<p class="card__unit">' + p.unit + (p.spec ? ' \u00b7 <span class="card__spec">' + p.spec + "</span>" : "") + "</p>" +
          (p.note ? '<p class="card__note">' + p.note + "</p>" : "") +
          '<div class="card__foot">' +
            '<span class="price' + (p.price === null ? " price--ask" : "") + '">' + money(p.price) +
              (p.price !== null ? ' <small>/ ' + p.unit + "</small>" : "") + "</span>" +
            (out
              ? '<a class="add add--enquire" href="contact.html?product=' + encodeURIComponent(p.name) + '">Enquire</a>'
              : '<button class="add" data-add="' + p.id + '">Add</button>') +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderGrid(el, list) {
    if (!el) return;
    el.innerHTML = list.length
      ? list.map(cardMarkup).join("")
      : '<p class="empty">No products match these filters yet. Try clearing a filter.</p>';
  }

  /* ---------------- cart ---------------- */
  function add(id) {
    var line = cart.filter(function (l) { return l.id === id; })[0];
    if (line) line.qty += 1;
    else cart.push({ id: id, qty: 1 });
    save(); paint();
    toast(byId(id).name + " added to basket");
  }
  function setQty(id, delta) {
    cart.forEach(function (l) { if (l.id === id) l.qty += delta; });
    cart = cart.filter(function (l) { return l.qty > 0; });
    save(); paint();
  }
  function remove(id) {
    cart = cart.filter(function (l) { return l.id !== id; });
    save(); paint();
  }
  function subtotal() {
    return cart.reduce(function (sum, l) {
      var p = byId(l.id);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);
  }

  function paint() {
    var count = cart.reduce(function (n, l) { return n + l.qty; }, 0);
    document.querySelectorAll("[data-cart-count]").forEach(function (n) {
      n.textContent = count;
      n.style.display = count ? "grid" : "none";
    });

    var body = document.querySelector("[data-cart-body]");
    if (!body) return;

    if (!cart.length) {
      body.innerHTML =
        '<div class="cart-empty"><span>🧺</span><b>Your basket is empty</b>' +
        "<p>Add some just-harvested produce to get going.</p></div>";
    } else {
      body.innerHTML = cart.map(function (l) {
        var p = byId(l.id);
        if (!p) return "";
        return (
          '<div class="line">' +
            '<div class="line__img" style="background:' + p.bg + '">' + p.icon + "</div>" +
            "<div><b>" + p.name + "</b><small>" + p.unit + " · " + p.origin + "</small>" +
              '<div class="qty">' +
                '<button data-dec="' + p.id + '" aria-label="Decrease">−</button>' +
                "<span>" + l.qty + "</span>" +
                '<button data-inc="' + p.id + '" aria-label="Increase">+</button>' +
              "</div>" +
            "</div>" +
            '<div><div class="line__price">' + money(p.price * l.qty) + "</div>" +
              '<button class="line__rm" data-rm="' + p.id + '">Remove</button></div>' +
          "</div>"
        );
      }).join("");
    }

    var sub = subtotal();
    var shipEl = document.querySelector("[data-ship]");
    var subEl = document.querySelector("[data-sub]");
    var totEl = document.querySelector("[data-total]");
    var noteEl = document.querySelector("[data-ship-note]");
    var ship = sub === 0 || sub >= FREE_SHIP ? 0 : 49;
    if (subEl) subEl.textContent = money(sub);
    if (shipEl) shipEl.textContent = ship ? money(ship) : "Free";
    if (totEl) totEl.textContent = money(sub + ship);
    if (noteEl) {
      noteEl.textContent = sub === 0 ? ""
        : sub >= FREE_SHIP ? "🎉 You've unlocked free delivery."
        : "Add " + money(FREE_SHIP - sub) + " more for free delivery.";
    }
  }

  /* ---------------- drawer / toast ---------------- */
  function openCart(open) {
    var d = document.querySelector("[data-drawer]");
    var o = document.querySelector("[data-overlay]");
    if (!d) return;
    d.classList.toggle("is-open", open);
    if (o) o.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  var toastTimer;
  function toast(msg) {
    var t = document.querySelector("[data-toast]");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-on"); }, 2200);
  }

  /* ---------------- shop filtering ---------------- */
  function initShop() {
    var grid = document.querySelector("[data-shop-grid]");
    if (!grid) return;

    var params = new URLSearchParams(location.search);
    var preset = params.get("cat");
    var search = params.get("q") || "";

    var filterBox = document.querySelector("[data-filters]");
    var sortSel = document.querySelector("[data-sort]");
    var countEl = document.querySelector("[data-count]");
    var searchInput = document.querySelector("[data-shop-search]");
    if (searchInput && search) searchInput.value = search;

    // build category checkboxes
    var catHtml = window.FP_CATEGORIES.map(function (c) {
      var n = window.FP_PRODUCTS.filter(function (p) { return p.cat === c.id; }).length;
      return '<label class="fopt"><input type="checkbox" value="' + c.id + '" data-f="cat"' +
        (preset === c.id ? " checked" : "") + "> " + c.name + "<span>" + n + "</span></label>";
    }).join("");
    var catWrap = document.querySelector("[data-cat-filters]");
    if (catWrap) catWrap.innerHTML = catHtml;

    function apply() {
      var cats = [].slice.call(document.querySelectorAll('[data-f="cat"]:checked')).map(function (i) { return i.value; });
      var badges = [].slice.call(document.querySelectorAll('[data-f="tag"]:checked')).map(function (i) { return i.value; });
      var stockOpt = document.querySelector("[data-f-stock]:checked");
      var q = (searchInput ? searchInput.value : search).trim().toLowerCase();

      var list = window.FP_PRODUCTS.filter(function (p) {
        if (cats.length && cats.indexOf(p.cat) === -1) return false;
        if (badges.length && !badges.every(function (b) { return p.tags.indexOf(b) > -1; })) return false;
        if (stockOpt && stockOpt.value === "in" && !p.stock) return false;
        if (q && (p.name + " " + p.telugu + " " + p.origin + " " + p.spec).toLowerCase().indexOf(q) === -1) return false;
        return true;
      });

      var sort = sortSel ? sortSel.value : "featured";
      list.sort(function (a, b) {
        var ap = a.price === null ? Infinity : a.price;
        var bp = b.price === null ? Infinity : b.price;
        if (sort === "low") return ap - bp;
        if (sort === "high") return (bp === Infinity ? -1 : bp) - (ap === Infinity ? -1 : ap);
        if (sort === "name") return a.name.localeCompare(b.name);
        return a.id - b.id;
      });

      renderGrid(grid, list);
      if (countEl) countEl.textContent = list.length + " product" + (list.length === 1 ? "" : "s");
    }

    if (filterBox) filterBox.addEventListener("change", apply);
    if (sortSel) sortSel.addEventListener("change", apply);
    if (searchInput) searchInput.addEventListener("input", apply);
    var clear = document.querySelector("[data-clear]");
    if (clear) clear.addEventListener("click", function () {
      document.querySelectorAll("[data-filters] input").forEach(function (i) {
        if (i.type === "checkbox") i.checked = false;
        if (i.type === "radio") i.checked = i.value === "all";
      });
      if (searchInput) searchInput.value = "";
      apply();
    });

    apply();
  }

  /* ---------------- home page sections ---------------- */
  function initHome() {
    var catGrid = document.querySelector("[data-cats]");
    if (catGrid) {
      catGrid.innerHTML = window.FP_CATEGORIES.map(function (c) {
        return '<a class="cat" href="shop.html?cat=' + c.id + '">' +
          '<div class="cat__ico" style="background:' + c.bg + '">' + c.icon + "</div>" +
          "<b>" + c.name + "</b><small>" + c.note + "</small></a>";
      }).join("");
    }

    var turmeric = document.querySelector("[data-turmeric]");
    if (turmeric) {
      renderGrid(turmeric, window.FP_PRODUCTS.filter(function (p) { return p.cat === "turmeric"; }));
    }

    var other = document.querySelector("[data-other]");
    if (other) {
      renderGrid(other, window.FP_PRODUCTS.filter(function (p) { return p.cat !== "turmeric"; }));
    }

    var table = document.querySelector("[data-variety-table]");
    if (table) {
      table.innerHTML =
        "<thead><tr><th>Variety</th><th>Origin</th><th>Character</th><th>Pack</th><th>Rate</th><th>Status</th></tr></thead><tbody>" +
        window.FP_PRODUCTS.filter(function (p) { return p.cat === "turmeric"; }).map(function (p) {
          return "<tr><td><b>" + p.name + "</b>" +
            (p.telugu ? ' <span class="card__telugu">' + p.telugu + "</span>" : "") + "</td>" +
            "<td>" + p.origin + "</td><td>" + p.spec + "</td><td>" + p.unit + "</td>" +
            "<td>" + money(p.price) + "</td>" +
            '<td><span class="pill pill--' + (p.stock ? "in" : "out") + '">' +
              (p.stock ? "In stock" : "Out of stock") + "</span></td></tr>";
        }).join("") + "</tbody>";
    }

    var count = document.querySelector("[data-variety-count]");
    if (count) {
      count.textContent = window.FP_PRODUCTS.filter(function (p) { return p.cat === "turmeric"; }).length;
    }
  }

  /* ---------------- sending mail ---------------- */
  function recipients() {
    return (ORDER_EMAILS || []).filter(function (a) { return /.+@.+\..+/.test(a); });
  }
  function canSend() { return recipients().length > 0; }

  function send(subject, fields) {
    var payload = JSON.stringify(
      Object.assign({ _subject: subject, _template: "table" }, fields)
    );
    return Promise.all(recipients().map(function (addr) {
      return fetch("https://formsubmit.co/ajax/" + encodeURIComponent(addr), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: payload
      }).then(function (r) {
        // FormSubmit answers 200 with success:"false" when a form is not yet
        // activated, so the status code alone is not proof of delivery.
        return r.json().then(function (data) {
          return r.ok && String(data && data.success) === "true";
        }, function () {
          return false;
        });
      })["catch"](function () {
        return false;
      });
    })).then(function (results) {
      if (results.indexOf(true) === -1) throw new Error("no recipient accepted the message");
      return results;
    });
  }

  function orderSummary() {
    return cart.map(function (l) {
      var p = byId(l.id);
      if (!p) return "";
      return p.name + " (" + p.unit + ") x " + l.qty +
        (p.price === null ? " — rate on request" : " — " + money(p.price * l.qty));
    }).join("\n");
  }

  function mailtoLink(f) {
    return "mailto:" + recipients().join(",") +
      "?subject=" + encodeURIComponent("New order from farmproducts.in") +
      "&body=" + encodeURIComponent(orderText(f));
  }

  function orderText(f) {
    var sub = subtotal();
    var ship = sub === 0 || sub >= FREE_SHIP ? 0 : 49;
    return [
      "New order from farmproducts.in",
      "",
      orderSummary(),
      "",
      "Subtotal: " + money(sub),
      "Delivery: " + (ship ? money(ship) : "Free"),
      "Total: " + money(sub + ship),
      "",
      "Name: " + f.name.value,
      "Phone: " + f.phone.value,
      "Email: " + f.email.value,
      "Address: " + f.address.value,
      f.notes.value ? "Notes: " + f.notes.value : ""
    ].join("\n").replace(/\n{3,}/g, "\n\n");
  }

  /* ---------------- checkout form ---------------- */
  function showOrderForm() {
    var body = document.querySelector("[data-cart-body]");
    var foot = document.querySelector("[data-order-foot]") || document.querySelector(".drawer__foot");
    if (!body) return;
    if (foot) foot.style.display = "none";
    body.innerHTML =
      '<form class="order-form" data-order-form>' +
        "<h4>Where should it go?</h4>" +
        '<div class="field"><label for="o-name">Name</label><input id="o-name" name="name" required></div>' +
        '<div class="field"><label for="o-phone">Phone</label><input id="o-phone" name="phone" required inputmode="tel"></div>' +
        '<div class="field"><label for="o-email">Email</label><input id="o-email" name="email" type="email" required></div>' +
        '<div class="field"><label for="o-addr">Delivery address</label><textarea id="o-addr" name="address" required></textarea></div>' +
        '<div class="field"><label for="o-note">Anything else?</label><textarea id="o-note" name="notes" style="min-height:70px"></textarea></div>' +
        '<div class="order-form__items"><b>Your order</b><pre>' + orderSummary() + "</pre></div>" +
        '<button class="btn btn--primary btn--block" type="submit">Place order</button>' +
        '<button class="btn btn--ghost btn--block" style="margin-top:8px" type="button" data-order-back>Back to basket</button>' +
        '<p class="form-note">We\'ll email you to confirm the rate and the dispatch date before anything ships.</p>' +
      "</form>";
  }

  function submitOrder(form) {
    if (!canSend()) {
      toast("Ordering isn't set up yet — please contact us directly");
      return;
    }
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Sending…";
    send("New order from the website", {
      Name: form.name.value,
      Phone: form.phone.value,
      Email: form.email.value,
      Address: form.address.value,
      Notes: form.notes.value,
      Order: orderSummary(),
      Total: money(subtotal())
    }).then(function () {
      cart = [];
      save();
      paint();
      var foot2 = document.querySelector(".drawer__foot");
      if (foot2) foot2.style.display = "none";
      document.querySelector("[data-cart-body]").innerHTML =
        '<div class="cart-empty"><span>\u2705</span><b>Order received</b>' +
        "<p>We've got it. You'll hear from us shortly to confirm the rate and when it ships.</p></div>";
    })["catch"](function () {
      btn.disabled = false;
      btn.textContent = "Place order";
      var warn = form.querySelector("[data-order-error]");
      if (!warn) {
        warn = document.createElement("p");
        warn.className = "order-error";
        warn.setAttribute("data-order-error", "");
        form.insertBefore(warn, btn);
      }
      warn.innerHTML = "We couldn't send that order automatically, and nothing has been " +
        "charged or dispatched. Send it to us directly instead \u2014 your details are " +
        "already filled in below." +
        '<br><br><a class="btn btn--primary btn--block" style="margin-bottom:8px" href="' +
        mailtoLink(form) + '">Send this order by email</a>' +
        '<a class="btn btn--ghost btn--block" href="contact.html">Or contact us</a>';
      toast("Couldn't send automatically — send it directly below");
    });
  }

  /* ---------------- site-wide stock banner ---------------- */
  function paintStockNote() {
    var el = document.querySelector("[data-stock-note]");
    if (!el) return;
    var inStock = (window.FP_PRODUCTS || []).filter(function (p) { return p.stock; });
    var out = (window.FP_PRODUCTS || []).length - inStock.length;

    if (!inStock.length) {
      el.innerHTML = "<b>Currently out of stock.</b> The catalogue is open for enquiries \u2014 " +
        "tell us the variety and quantity and we'll come back with a rate and a date.";
      return;
    }
    if (!out) {
      el.innerHTML = "<b>Everything is in stock.</b> Order online, or ask us for a rate on bulk lots.";
      return;
    }
    var names = inStock.map(function (p) {
      return p.name + (p.price === null ? "" : " \u2014 " + money(p.price) + " / " + p.unit);
    }).join(", ");
    el.innerHTML = "<b>Available now: " + names + ".</b> " +
      "The remaining " + out + " lines are out of stock \u2014 use Enquire on any of them and we'll quote.";
  }

  /* ---------------- global wiring ---------------- */
  function initChrome() {
    document.addEventListener("click", function (e) {
      var t = e.target;

      var addBtn = t.closest ? t.closest("[data-add]") : null;
      if (addBtn) {
        add(Number(addBtn.getAttribute("data-add")));
        addBtn.textContent = "Added ✓";
        addBtn.classList.add("is-added");
        setTimeout(function () {
          addBtn.textContent = "Add";
          addBtn.classList.remove("is-added");
        }, 1200);
        return;
      }
      if (t.closest && t.closest("[data-inc]")) return setQty(Number(t.closest("[data-inc]").getAttribute("data-inc")), 1);
      if (t.closest && t.closest("[data-dec]")) return setQty(Number(t.closest("[data-dec]").getAttribute("data-dec")), -1);
      if (t.closest && t.closest("[data-rm]"))  return remove(Number(t.closest("[data-rm]").getAttribute("data-rm")));
      if (t.closest && t.closest("[data-open-cart]")) return openCart(true);
      if (t.closest && t.closest("[data-close-cart]")) return openCart(false);

      var fav = t.closest ? t.closest(".card__fav") : null;
      if (fav) {
        fav.classList.toggle("is-on");
        fav.textContent = fav.classList.contains("is-on") ? "♥" : "♡";
        toast(fav.classList.contains("is-on") ? "Saved to your list" : "Removed from your list");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") openCart(false);
    });

    var burger = document.querySelector("[data-burger]");
    if (burger) burger.addEventListener("click", function () {
      document.querySelector(".nav").classList.toggle("is-open");
    });

    document.querySelectorAll("[data-header-search]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var v = form.querySelector("input").value.trim();
        location.href = "shop.html" + (v ? "?q=" + encodeURIComponent(v) : "");
      });
    });

    document.querySelectorAll("[data-enquiry-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!canSend()) {
          toast("Email delivery isn't set up yet — please call us");
          return;
        }
        var btn = form.querySelector('button[type="submit"]');
        var label = btn.textContent;
        btn.disabled = true;
        btn.textContent = "Sending…";
        send("Website enquiry: " + (form.querySelector("#t") ? form.querySelector("#t").value : "general"), {
          Name: form.querySelector("#n").value,
          Contact: form.querySelector("#e").value,
          About: form.querySelector("#t") ? form.querySelector("#t").value : "",
          Message: form.querySelector("#m").value
        }).then(function () {
          form.reset();
          toast("Thanks — we'll come back to you with a rate and a date.");
        })["catch"](function () {
          toast("Couldn't send that — please try again or call us");
        }).then(function () {
          btn.disabled = false;
          btn.textContent = label;
        });
      });
    });

    document.querySelectorAll("[data-fake-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (canSend()) {
          send("Stock notification signup", { Email: form.querySelector("input").value })["catch"](function () {});
        }
        toast(form.getAttribute("data-fake-form"));
        form.reset();
      });
    });

    var checkout = document.querySelector("[data-checkout]");
    if (checkout) checkout.addEventListener("click", function () {
      if (!cart.length) return toast("Your basket is empty");
      showOrderForm();
    });

    document.addEventListener("submit", function (e) {
      if (e.target.hasAttribute("data-order-form")) {
        e.preventDefault();
        submitOrder(e.target);
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("[data-order-back]")) {
        var foot = document.querySelector(".drawer__foot");
        if (foot) foot.style.display = "";
        paint();
      }
    });

    var wanted = new URLSearchParams(location.search).get("product");
    if (wanted) {
      var msg = document.querySelector("#m");
      var subject = document.querySelector("#t");
      if (msg && !msg.value) {
        msg.value = "I'd like to enquire about: " + wanted + "\n\nQuantity needed:\nDelivery location:";
      }
      if (subject) {
        for (var i = 0; i < subject.options.length; i++) {
          if (subject.options[i].text.indexOf("Rate enquiry") === 0) { subject.selectedIndex = i; break; }
        }
      }
      var banner = document.querySelector("[data-enquiry-banner]");
      if (banner) {
        banner.textContent = "Enquiring about " + wanted + " \u2014 tell us the quantity and we'll come back with a rate.";
        banner.style.display = "block";
      }
    }

    var y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    // drop anything a previous visit left in the basket that is no longer sold
    var before = cart.length;
    cart = cart.filter(function (l) {
      var p = byId(l.id);
      return p && p.stock;
    });
    if (cart.length !== before) save();

    paintStockNote();
    initHome();
    initShop();
    initChrome();
    paint();
  });
})();
