/* ============================================================
   FarmProducts — storefront behaviour
   Cart persists in localStorage; product grids render from data.js
   ============================================================ */
(function () {
  "use strict";

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
    return "₹" + n.toLocaleString("en-IN");
  }
  function byId(id) {
    return (window.FP_PRODUCTS || []).filter(function (p) { return p.id === id; })[0];
  }
  function stars(rating) {
    var full = Math.round(rating);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
  }

  /* ---------------- product card ---------------- */
  function tagMarkup(p) {
    if (p.tags.indexOf("sale") > -1) {
      var off = Math.round((1 - p.price / p.was) * 100);
      return '<span class="card__tag card__tag--sale">' + off + "% off</span>";
    }
    if (p.tags.indexOf("new") > -1) return '<span class="card__tag card__tag--new">New</span>';
    if (p.tags.indexOf("bestseller") > -1) return '<span class="card__tag">Bestseller</span>';
    if (p.tags.indexOf("seasonal") > -1) return '<span class="card__tag">In season</span>';
    return "";
  }

  function cardMarkup(p) {
    return (
      '<article class="card" data-id="' + p.id + '">' +
        '<div class="card__media" style="background-color:' + p.bg + '">' +
          tagMarkup(p) +
          '<button class="card__fav" aria-label="Save ' + p.name + '">♡</button>' +
          "<span>" + p.icon + "</span>" +
        "</div>" +
        '<div class="card__body">' +
          '<span class="card__farm">' + p.farm + "</span>" +
          '<h3 class="card__title">' + p.name + "</h3>" +
          '<p class="card__unit">' + p.unit + "</p>" +
          (p.note ? '<p class="card__note">' + p.note + "</p>" : "") +
          '<p class="card__rating"><span style="color:#f5b840">' + stars(p.rating) + "</span> " +
            "<b>" + p.rating.toFixed(1) + "</b> (" + p.reviews + ")</p>" +
          '<div class="card__foot">' +
            '<span class="price">' + money(p.price) +
              (p.was ? "<s>" + money(p.was) + "</s>" : "") + "</span>" +
            '<button class="add" data-add="' + p.id + '">Add</button>' +
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
            "<div><b>" + p.name + "</b><small>" + p.unit + " · " + p.farm + "</small>" +
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
      var maxPrice = document.querySelector("[data-f-price]:checked");
      var q = (searchInput ? searchInput.value : search).trim().toLowerCase();

      var list = window.FP_PRODUCTS.filter(function (p) {
        if (cats.length && cats.indexOf(p.cat) === -1) return false;
        if (badges.length && !badges.every(function (b) { return p.tags.indexOf(b) > -1; })) return false;
        if (maxPrice && maxPrice.value !== "all" && p.price > Number(maxPrice.value)) return false;
        if (q && (p.name + " " + p.farm).toLowerCase().indexOf(q) === -1) return false;
        return true;
      });

      var sort = sortSel ? sortSel.value : "popular";
      list.sort(function (a, b) {
        if (sort === "low") return a.price - b.price;
        if (sort === "high") return b.price - a.price;
        if (sort === "rating") return b.rating - a.rating;
        return b.reviews - a.reviews;
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

    var best = document.querySelector("[data-best]");
    if (best) {
      renderGrid(best, window.FP_PRODUCTS
        .filter(function (p) { return p.tags.indexOf("bestseller") > -1 || p.rating >= 4.7; })
        .sort(function (a, b) { return b.reviews - a.reviews; })
        .slice(0, 8));
    }

    var deals = document.querySelector("[data-deals]");
    if (deals) {
      renderGrid(deals, window.FP_PRODUCTS
        .filter(function (p) { return p.tags.indexOf("sale") > -1; })
        .slice(0, 4));
    }
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

    document.querySelectorAll("[data-fake-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        toast(form.getAttribute("data-fake-form"));
        form.reset();
      });
    });

    var checkout = document.querySelector("[data-checkout]");
    if (checkout) checkout.addEventListener("click", function () {
      if (!cart.length) return toast("Your basket is empty");
      toast("Demo store — checkout isn't wired up yet 🙂");
    });

    var y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHome();
    initShop();
    initChrome();
    paint();
  });
})();
