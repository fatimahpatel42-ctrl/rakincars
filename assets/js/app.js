/* Rakin Cars — site logic (no build step, plain JavaScript) */
(function () {
  "use strict";

  var CARS = window.RAKIN_CARS || [];
  var INFO = window.RAKIN_INFO || {};
  var REVIEWS = window.RAKIN_REVIEWS || [];
  var BRANDS = ["Toyota", "Lexus", "Mercedes-Benz", "BMW", "Range Rover", "Audi", "Porsche", "Nissan"];
  var BODIES = ["SUV", "Sedan", "Pickup", "Hatchback", "Coupe", "Van"];
  var PRICES = [50e6, 100e6, 200e6, 300e6, 500e6, 1e9];

  /* ---------------- language ---------------- */
  var T = {
    en: {
      nav_cars: "Cars for sale", nav_sell: "Sell / Exchange", nav_import: "Import on order",
      nav_about: "About", nav_contact: "Contact", lang_btn: "Kiswahili",
      hero_kicker: "Mikocheni · Dar es Salaam",
      hero_title: "Premium pre-owned luxury cars",
      hero_lead: "We import, buy, sell and exchange quality used vehicles. Every car inspected, every price clear.",
      browse: "Browse cars", chat_wa: "Chat on WhatsApp",
      f_make: "Make", f_body: "Body type", f_price: "Max price (TZS)",
      any_make: "Any make", any: "Any", no_limit: "No limit", search: "Search cars",
      latest: "Latest arrivals", view_all: "View all cars →",
      st_available: "Available", st_reserved: "Reserved", st_sold: "Sold", st_arriving: "Arriving soon",
      por: "Price on request", km: "km",
      more_title: "More cars arriving soon",
      more_text: "Tell us what you're looking for and we'll let you know first.",
      more_btn: "Ask on WhatsApp",
      why_title: "Why buy from Rakin",
      why1_t: "Inspected before sale", why1_p: "Every car checked by our team, with condition notes on its page.",
      why2_t: "Clear prices", why2_p: "No surprises at the showroom. Ask and we'll give you a straight answer.",
      why3_t: "We handle the paperwork", why3_p: "Import, clearing, TRA registration and transfer done for you.",
      why4_t: "Trade in your old car", why4_p: "Exchange your current car as part payment towards your next one.",
      why_kicker: "The Rakin promise",
      why_lead: "Buying a luxury car should feel exciting, not stressful. Here's how we make it simple from first message to handover.",
      why_float: "Every car inspected before sale",
      why_cta_t: "Got questions?", why_cta_p: "Message our team on WhatsApp.",
      sell_t: "Sell or exchange your car", sell_p: "Send us the details and photos. We'll reply with an offer, usually the same day.",
      sell_btn: "Get an offer",
      imp_t: "Can't find your car?", imp_p: "Tell us the model, year and budget. We'll source and import it for you.",
      imp_btn: "Request a car",
      reviews_t: "Happy customers",
      visit_t: "Visit the showroom", open: "Open", hours_ask: "Call or WhatsApp us for opening hours",
      wa_us: "WhatsApp us", call: "Call",
      foot_tag: "Premium Pre-Owned Luxury Cars",
      all_title: "Cars for sale", results_one: "car", results_many: "cars", results_found: "found",
      clear: "Clear filters", none_found: "No cars match these filters right now.",
      none_btn: "Ask us to find one",
      back: "← Back to all cars", photo: "Photo", of: "of",
      trade_ok: "Trade-in accepted",
      ask_wa: "Ask about this car on WhatsApp", call_show: "Call the showroom", trade_this: "Trade in my car for this one",
      wa_ready: "WhatsApp opens with this message ready:",
      key_specs: "Key specs", sp_year: "Year", sp_mileage: "Mileage", sp_fuel: "Fuel", sp_trans: "Transmission",
      sp_engine: "Engine", sp_drive: "Drive", sp_colour: "Colour", sp_import: "Imported from", sp_body: "Body",
      about_car: "About this car", condition: "Condition & inspection", walk: "Walkaround video",
      similar: "Similar cars", nf_t: "Car not found", nf_p: "This car may have been sold or the link is wrong.",
      msg_general: "Hi Rakin Cars, I found you on your website. ",
      msg_car: "Hi Rakin Cars, I'm interested in the {car} (Ref {ref}). Is it still available?",
      msg_trade: "Hi Rakin Cars, I'd like to trade in my car for the {car} (Ref {ref}). My car is: ",
      msg_sell: "Hi Rakin Cars, I'd like to sell / exchange my car. Make & model: , Year: , Mileage: . I'll send photos.",
      msg_import: "Hi Rakin Cars, please help me find a car. Model: , Year: , Budget (TZS): ",
      msg_more: "Hi Rakin Cars, I'm looking for a car. Model: , Budget (TZS): ",
      just_arrived: "Just arrived", nudge: "Ask about this car?",
      to_light: "Switch to light mode", to_dark: "Switch to dark mode"
    },
    sw: {
      nav_cars: "Magari yanauzwa", nav_sell: "Uza / Badilisha", nav_import: "Agiza gari",
      nav_about: "Kuhusu sisi", nav_contact: "Mawasiliano", lang_btn: "English",
      hero_kicker: "Mikocheni · Dar es Salaam",
      hero_title: "Magari ya kifahari yaliyotumika",
      hero_lead: "Tunaagiza, tunanunua, tunauza na kubadilisha magari bora yaliyotumika. Kila gari limekaguliwa, kila bei iko wazi.",
      browse: "Tazama magari", chat_wa: "Ongea nasi WhatsApp",
      f_make: "Aina", f_body: "Muundo", f_price: "Bei ya juu (TZS)",
      any_make: "Aina yoyote", any: "Yoyote", no_limit: "Bila kikomo", search: "Tafuta magari",
      latest: "Yaliyoingia karibuni", view_all: "Tazama magari yote →",
      st_available: "Linapatikana", st_reserved: "Limehifadhiwa", st_sold: "Limeuzwa", st_arriving: "Linakuja karibuni",
      por: "Bei kwa maombi", km: "km",
      more_title: "Magari zaidi yanakuja",
      more_text: "Tuambie unatafuta gari gani na tutakujulisha kwanza.",
      more_btn: "Uliza WhatsApp",
      why_title: "Kwa nini ununue Rakin",
      why1_t: "Limekaguliwa kabla ya kuuzwa", why1_p: "Kila gari hukaguliwa na timu yetu, na maelezo ya hali yake kwenye ukurasa wake.",
      why2_t: "Bei zilizo wazi", why2_p: "Hakuna mshangao showroom. Uliza na tutakupa jibu la moja kwa moja.",
      why3_t: "Tunashughulikia makaratasi", why3_p: "Uagizaji, clearing, usajili wa TRA na uhamisho wa umiliki tunakufanyia.",
      why4_t: "Badilisha gari lako la zamani", why4_p: "Tumia gari lako la sasa kama sehemu ya malipo ya gari lako jipya.",
      why_kicker: "Ahadi ya Rakin",
      why_lead: "Kununua gari la kifahari kunapaswa kuwa raha, si usumbufu. Hivi ndivyo tunavyorahisisha kila hatua, kuanzia ujumbe wa kwanza hadi kukabidhiwa gari.",
      why_float: "Kila gari limekaguliwa kabla ya kuuzwa",
      why_cta_t: "Una maswali?", why_cta_p: "Tuandikie WhatsApp.",
      sell_t: "Uza au badilisha gari lako", sell_p: "Tutumie maelezo na picha. Tutakujibu na ofa, mara nyingi siku hiyo hiyo.",
      sell_btn: "Pata ofa",
      imp_t: "Hujapata gari unalotaka?", imp_p: "Tuambie aina, mwaka na bajeti. Tutakutafutia na kukuagizia.",
      imp_btn: "Omba gari",
      reviews_t: "Wateja walioridhika",
      visit_t: "Tembelea showroom", open: "Tunafunguliwa", hours_ask: "Tupigie au tutumie WhatsApp kujua saa za kazi",
      wa_us: "Tutumie WhatsApp", call: "Piga",
      foot_tag: "Magari ya kifahari yaliyotumika",
      all_title: "Magari yanauzwa", results_one: "gari", results_many: "magari", results_found: "yamepatikana",
      clear: "Ondoa vichujio", none_found: "Hakuna gari linalolingana na vichujio hivi kwa sasa.",
      none_btn: "Tuombe tukutafutie",
      back: "← Rudi kwenye magari yote", photo: "Picha", of: "kati ya",
      trade_ok: "Tunakubali kubadilishana",
      ask_wa: "Uliza kuhusu gari hili WhatsApp", call_show: "Piga simu showroom", trade_this: "Badilisha gari langu kwa hili",
      wa_ready: "WhatsApp itafunguka na ujumbe huu tayari:",
      key_specs: "Vipimo muhimu", sp_year: "Mwaka", sp_mileage: "Kilomita", sp_fuel: "Mafuta", sp_trans: "Gia",
      sp_engine: "Injini", sp_drive: "Mfumo wa kuendesha", sp_colour: "Rangi", sp_import: "Limetoka", sp_body: "Muundo",
      about_car: "Kuhusu gari hili", condition: "Hali & ukaguzi", walk: "Video ya gari",
      similar: "Magari yanayofanana", nf_t: "Gari halikupatikana", nf_p: "Huenda gari hili limeuzwa au kiungo si sahihi.",
      msg_general: "Habari Rakin Cars, nimewaona kwenye tovuti yenu. ",
      msg_car: "Habari Rakin Cars, ninavutiwa na {car} (Ref {ref}). Bado linapatikana?",
      msg_trade: "Habari Rakin Cars, ningependa kubadilisha gari langu kwa {car} (Ref {ref}). Gari langu ni: ",
      msg_sell: "Habari Rakin Cars, ningependa kuuza / kubadilisha gari langu. Aina: , Mwaka: , Kilomita: . Nitatuma picha.",
      msg_import: "Habari Rakin Cars, naomba mnisaidie kupata gari. Aina: , Mwaka: , Bajeti (TZS): ",
      msg_more: "Habari Rakin Cars, natafuta gari. Aina: , Bajeti (TZS): ",
      just_arrived: "Limeingia sasa", nudge: "Uliza kuhusu gari hili?",
      to_light: "Badilisha kwenda mwanga", to_dark: "Badilisha kwenda giza"
    }
  };
  var VALUE_SW = { "Diesel": "Dizeli", "Petrol": "Petroli", "Automatic": "Automatiki", "Manual": "Manual", "Hybrid": "Haibridi" };

  function getLang() {
    try { return localStorage.getItem("rc_lang") === "sw" ? "sw" : "en"; } catch (e) { return "en"; }
  }
  var LANG = getLang();
  function t(k) { return (T[LANG] && T[LANG][k]) || T.en[k] || k; }
  function v(x) { return LANG === "sw" && VALUE_SW[x] ? VALUE_SW[x] : x; }
  function setLang(l) {
    try { localStorage.setItem("rc_lang", l); } catch (e) {}
    location.reload();
  }

  /* ---------------- theme (dark / light) ---------------- */
  function getTheme() { return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"; }
  function logoFor(th) { return th === "light" ? "assets/img/logo-dark.png" : "assets/img/logo-white.png"; }
  function applyTheme(th, animate) {
    var root = document.documentElement;
    if (animate) {
      root.classList.add("theme-anim");
      setTimeout(function () { root.classList.remove("theme-anim"); }, 600);
    }
    root.setAttribute("data-theme", th);
    try { localStorage.setItem("rc_theme", th); } catch (e) {}
    document.querySelectorAll(".nav-logo img").forEach(function (im) { im.src = logoFor(th); });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", th === "light" ? "#f5f4f0" : "#0d0f10");
    var b = document.getElementById("theme-btn");
    if (b) {
      b.setAttribute("aria-label", th === "light" ? t("to_dark") : t("to_light"));
      b.setAttribute("title", th === "light" ? t("to_dark") : t("to_light"));
    }
  }

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function wa(text) { return "https://wa.me/" + (INFO.whatsapp || "") + "?text=" + encodeURIComponent(text || ""); }
  function tel() { return "tel:" + String(INFO.phone || "").replace(/\s+/g, ""); }
  function num(n) { return Number(n).toLocaleString("en-US"); }
  function carName(c) { return c.name || [c.make, c.variant || c.model].filter(Boolean).join(" "); }
  function carMeta(c) {
    return [c.year, c.mileage != null ? num(c.mileage) + " " + t("km") : null, v(c.fuel), v(c.transmission)]
      .filter(function (x) { return x != null && x !== ""; }).join(" · ");
  }
  function priceHTML(c, cls) {
    if (c.status === "sold") return '<div class="' + cls + '">' + esc(t("st_sold")) + "</div>";
    if (c.priceTZS == null) return '<div class="' + cls + ' por">' + esc(t("por")) + "</div>";
    return '<div class="' + cls + '">TZS <span data-count="' + c.priceTZS + '">' + num(c.priceTZS) + "</span></div>";
  }
  function badge(c) {
    var s = c.status || "available";
    return '<span class="badge badge-' + s + '">' + esc(t("st_" + s)) + "</span>";
  }
  function param(k) { return new URLSearchParams(location.search).get(k); }
  function sortCars(list) {
    var order = { available: 0, arriving: 1, reserved: 2, sold: 3 };
    return list.slice().sort(function (a, b) {
      if (!!b.featured - !!a.featured) return !!b.featured - !!a.featured;
      return (order[a.status] || 0) - (order[b.status] || 0);
    });
  }

  var ICON = {
    wa: '<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.25.69-1.45 1.32-2 1.37-.51.05-1.15.07-1.86-.12-.43-.13-.98-.32-1.69-.62-2.98-1.29-4.92-4.29-5.07-4.49-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.06 1.14 1.01 2.09 1.33 2.39 1.48.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.18 1.41z"/></svg>',
    phone: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    swap: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 16V4M7 4 3 8M7 4l4 4M17 8v12m0 0 4-4m-4 4-4-4"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 18l-6-6 6-6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 18l6-6-6-6"/></svg>'
  };

  /* ---------------- shared header / footer ---------------- */
  function chrome() {
    var h = document.getElementById("site-header");
    if (h) {
      h.className = "site-header";
      h.innerHTML =
        '<div class="wrap nav">' +
        '<a class="nav-logo" href="index.html" aria-label="Rakin Cars home"><span class="logo-shine"><img src="' + logoFor(getTheme()) + '" alt="Rakin Cars" width="96" height="40"></span></a>' +
        '<nav class="nav-links" id="nav-links">' +
        '<a href="cars.html">' + esc(t("nav_cars")) + "</a>" +
        '<a href="index.html#sell">' + esc(t("nav_sell")) + "</a>" +
        '<a href="index.html#import">' + esc(t("nav_import")) + "</a>" +
        '<a href="index.html#visit">' + esc(t("nav_contact")) + "</a>" +
        '<button class="lang-btn" id="lang-btn" type="button">' + esc(t("lang_btn")) + "</button>" +
        "</nav>" +
        '<div class="nav-tools">' +
        '<button class="theme-btn" id="theme-btn" type="button">' +
        '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>' +
        '<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>' +
        "</button>" +
        '<button class="menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false">' + ICON.menu + "</button>" +
        "</div>" +
        "</div>";
      document.getElementById("lang-btn").onclick = function () { setLang(LANG === "en" ? "sw" : "en"); };
      document.getElementById("theme-btn").onclick = function () { applyTheme(getTheme() === "light" ? "dark" : "light", true); };
      applyTheme(getTheme(), false);
      var mb = document.getElementById("menu-btn"), nl = document.getElementById("nav-links");
      mb.onclick = function () {
        var o = nl.classList.toggle("open");
        mb.setAttribute("aria-expanded", o ? "true" : "false");
      };
      nl.addEventListener("click", function (e) { if (e.target.tagName === "A") nl.classList.remove("open"); });
    }
    var f = document.getElementById("site-footer");
    if (f) {
      f.className = "site-footer";
      f.innerHTML =
        '<div class="wrap foot"><span>© ' + new Date().getFullYear() + " Rakin Cars · " + esc(t("foot_tag")) + "</span>" +
        '<a href="https://instagram.com/' + esc(INFO.instagram) + '" target="_blank" rel="noopener">Instagram @' + esc(INFO.instagram) + "</a></div>";
    }
    var w = document.createElement("a");
    w.className = "wa-float";
    w.href = wa(t("msg_general"));
    w.target = "_blank"; w.rel = "noopener";
    w.setAttribute("aria-label", "WhatsApp");
    w.innerHTML = ICON.wa.replace('class="ico"', "") + "<span>WhatsApp</span>";
    document.body.appendChild(w);
    document.documentElement.lang = LANG;
    // static text
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
  }

  /* ---------------- cards ---------------- */
  function cardHTML(c) {
    return (
      '<a class="card' + (c.status === "sold" ? " is-sold" : "") + '" href="car.html?id=' + encodeURIComponent(c.id) + '">' +
      '<div class="card-img"><img src="' + esc(c.cardImage || (c.photos && c.photos[0] && c.photos[0].src)) + '" alt="' + esc(carName(c)) + '" loading="lazy">' + badge(c) +
      (c.featured && c.status === "available" ? '<span class="ribbon">' + esc(t("just_arrived")) + "</span>" : "") +
      (c.status === "sold" ? '<span class="sold-stamp">' + esc(t("st_sold")) + "</span>" : "") + "</div>" +
      '<div class="card-body"><div class="card-title">' + esc(carName(c)) + "</div>" +
      '<div class="card-meta">' + esc(carMeta(c) || c.body || "") + "</div>" +
      priceHTML(c, "card-price") + "</div></a>"
    );
  }
  function moreCardHTML() {
    return (
      '<div class="empty-note"><strong>' + esc(t("more_title")) + "</strong><span>" + esc(t("more_text")) + "</span>" +
      '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + wa(t("msg_more")) + '">' + ICON.wa + esc(t("more_btn")) + "</a></div>"
    );
  }

  /* ---------------- filters ---------------- */
  function makesList() {
    var set = BRANDS.slice();
    CARS.forEach(function (c) { if (c.make && set.indexOf(c.make) < 0) set.push(c.make); });
    return set;
  }
  function fillFilters(form, sel) {
    var mk = form.querySelector("[name=make]"), bd = form.querySelector("[name=body]"), pr = form.querySelector("[name=max]");
    mk.innerHTML = '<option value="">' + esc(t("any_make")) + "</option>" +
      makesList().map(function (m) { return '<option' + (sel.make === m ? " selected" : "") + ">" + esc(m) + "</option>"; }).join("");
    bd.innerHTML = '<option value="">' + esc(t("any")) + "</option>" +
      BODIES.map(function (b) { return '<option' + (sel.body === b ? " selected" : "") + ">" + esc(b) + "</option>"; }).join("");
    pr.innerHTML = '<option value="">' + esc(t("no_limit")) + "</option>" +
      PRICES.map(function (p) {
        var label = p >= 1e9 ? "TZS " + p / 1e9 + "B" : "TZS " + p / 1e6 + "M";
        return '<option value="' + p + '"' + (String(sel.max) === String(p) ? " selected" : "") + ">" + label + "</option>";
      }).join("");
  }
  function chipsHTML(active) {
    return BRANDS.map(function (b) {
      return '<a class="chip' + (active === b ? " on" : "") + '" href="cars.html?make=' + encodeURIComponent(b) + '">' + esc(b) + "</a>";
    }).join("");
  }

  /* ---------------- pages ---------------- */
  function pageHome() {
    var form = document.getElementById("search-form");
    if (form) fillFilters(form, {});
    var grid = document.getElementById("latest");
    if (grid) {
      var list = sortCars(CARS).slice(0, 8);
      var html = list.map(cardHTML).join("");
      if (list.length < 4) html += moreCardHTML();
      grid.innerHTML = html;
    }
    var chips = document.getElementById("chips");
    if (chips) {
      if (REDUCED) chips.innerHTML = chipsHTML();
      else { chips.classList.add("ticker"); chips.innerHTML = '<div class="ticker-track">' + chipsHTML() + chipsHTML() + chipsHTML() + chipsHTML() + "</div>"; }
    }
    // hero tag
    var f = sortCars(CARS)[0], tag = document.getElementById("hero-tag");
    if (f && tag) {
      tag.innerHTML = "<div><strong>" + esc(carName(f)) + "</strong><span>" + esc(t("st_" + (f.status || "available"))) + "</span></div>" +
        '<a class="btn btn-red" style="padding:10px 16px" href="car.html?id=' + encodeURIComponent(f.id) + '">→</a>';
    }
    // CTAs
    setHref("cta-wa", wa(t("msg_general")));
    setHref("sell-btn", wa(t("msg_sell")));
    setHref("import-btn", wa(t("msg_import")));
    setHref("visit-wa", wa(t("msg_general")));
    setHref("why-cta", wa(t("msg_general")));
    var call = document.getElementById("visit-call");
    if (call) { call.href = tel(); call.lastChild.textContent = " " + t("call") + " " + INFO.phone; }
    var hrs = document.getElementById("hours");
    if (hrs) {
      var hv = LANG === "sw" && INFO.hoursSw ? INFO.hoursSw : INFO.hours;
      hrs.textContent = hv ? t("open") + " " + hv : t("hours_ask");
    }
    // reviews (only shown when real reviews exist)
    var rs = document.getElementById("reviews");
    if (rs && REVIEWS.length) {
      rs.hidden = false;
      document.getElementById("review-grid").innerHTML = REVIEWS.map(function (r) {
        return '<div class="card">' + (r.photo ? '<div class="card-img"><img src="' + esc(r.photo) + '" alt="" loading="lazy"></div>' : "") +
          '<div class="card-body"><p>“' + esc(r.text) + '”</p><div class="card-meta" style="margin-top:10px">' + esc(r.name) + " · " + esc(r.car) + "</div></div></div>";
      }).join("");
    }
  }
  function setHref(id, href) { var el = document.getElementById(id); if (el) el.href = href; }

  function pageAll() {
    var sel = { make: param("make") || "", body: param("body") || "", max: param("max") || "" };
    var form = document.getElementById("search-form");
    fillFilters(form, sel);
    form.addEventListener("change", function () { form.submit(); });
    document.getElementById("chips").innerHTML = chipsHTML(sel.make);
    var list = sortCars(CARS).filter(function (c) {
      if (sel.make && c.make !== sel.make) return false;
      if (sel.body && c.body !== sel.body) return false;
      if (sel.max && c.priceTZS != null && c.priceTZS > Number(sel.max)) return false;
      return true;
    });
    var n = list.length, filtered = sel.make || sel.body || sel.max;
    document.getElementById("count").innerHTML = n + " " + esc(n === 1 ? t("results_one") : t("results_many")) + " " + esc(t("results_found")) +
      (filtered ? ' · <a class="link-red" href="cars.html">' + esc(t("clear")) + "</a>" : "");
    var grid = document.getElementById("all");
    if (!n) {
      grid.innerHTML = '<div class="empty-note" style="grid-column:1/-1"><strong>' + esc(t("none_found")) + "</strong>" +
        '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + wa(t("msg_import")) + '">' + ICON.wa + esc(t("none_btn")) + "</a></div>";
    } else {
      grid.innerHTML = list.map(cardHTML).join("") + (n < 4 && !filtered ? moreCardHTML() : "");
    }
  }

  function pageCar() {
    var id = param("id");
    var c = CARS.filter(function (x) { return x.id === id; })[0] || (!id && CARS[0]);
    var root = document.getElementById("car");
    if (!c) {
      root.innerHTML = '<div class="not-found"><h1>' + esc(t("nf_t")) + '</h1><p class="card-meta">' + esc(t("nf_p")) +
        '</p><p style="margin-top:22px"><a class="btn btn-red" href="cars.html">' + esc(t("browse")) + "</a></p></div>";
      return;
    }
    var name = carName(c);
    document.title = name + " · Rakin Cars";
    var msg = t("msg_car").replace("{car}", (c.year ? c.year + " " : "") + name).replace("{ref}", c.ref || c.id);
    var tradeMsg = t("msg_trade").replace("{car}", (c.year ? c.year + " " : "") + name).replace("{ref}", c.ref || c.id);
    var photos = c.photos && c.photos.length ? c.photos : [{ src: c.cardImage, label: "" }];
    var specs = [
      ["sp_year", c.year], ["sp_mileage", c.mileage != null ? num(c.mileage) + " km" : null], ["sp_fuel", v(c.fuel)],
      ["sp_trans", v(c.transmission)], ["sp_engine", c.engine], ["sp_drive", c.drive], ["sp_colour", c.colour],
      ["sp_import", c.importedFrom], ["sp_body", c.body]
    ].filter(function (s) { return s[1] != null && s[1] !== ""; });
    var about = LANG === "sw" && c.aboutSw ? c.aboutSw : c.about;
    var similar = sortCars(CARS).filter(function (x) { return x.id !== c.id && x.status !== "sold"; })
      .sort(function (a, b) { return (b.body === c.body) - (a.body === c.body); }).slice(0, 3);
    var sub = [c.year, c.model !== c.variant ? c.model : null, c.mileage != null ? num(c.mileage) + " km" : null]
      .filter(Boolean).join(" · ");

    root.innerHTML =
      '<div class="crumbs"><a href="cars.html">' + esc(t("nav_cars")) + "</a> / " + esc(c.make) + " / " + esc(c.variant || c.model) + "</div>" +
      '<div class="detail-grid">' +
      "<div>" +
      '<div class="gallery-main" id="gmain"><img id="gimg" src="' + esc(photos[0].src) + '" alt="' + esc(name) + '">' +
      '<span class="status-pill">' + badge(c) + "</span>" +
      '<span class="counter" id="gcount"></span>' +
      (photos.length > 1 ? '<button class="g-nav g-prev" id="gprev" aria-label="Previous photo">' + ICON.left + '</button><button class="g-nav g-next" id="gnext" aria-label="Next photo">' + ICON.right + "</button>" : "") +
      "</div>" +
      '<div class="thumbs" id="thumbs">' + photos.map(function (p, i) {
        return '<button class="thumb" data-i="' + i + '"><img src="' + esc(p.src) + '" alt="" loading="lazy"><span>' + esc(p.label || "") + "</span></button>";
      }).join("") + "</div>" +
      "</div>" +
      '<aside class="buy-box">' +
      '<div class="kicker">' + esc(c.make) + "</div>" +
      "<h1>" + esc(c.variant || c.model) + "</h1>" +
      (sub ? '<div class="sub">' + esc(sub) + "</div>" : "") +
      priceHTML(c, "price") +
      '<div class="price-note">' + [c.priceUSD ? "≈ USD " + num(c.priceUSD) : null, c.tradeIn ? t("trade_ok") : null].filter(Boolean).map(esc).join(" · ") + "</div>" +
      '<div class="buy-actions">' +
      '<a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="' + wa(msg) + '">' + ICON.wa + esc(t("ask_wa")) + "</a>" +
      '<a class="btn btn-ghost btn-block" href="' + tel() + '">' + ICON.phone + esc(t("call_show")) + "</a>" +
      (c.tradeIn ? '<a class="btn btn-ghost btn-block" target="_blank" rel="noopener" href="' + wa(tradeMsg) + '">' + ICON.swap + esc(t("trade_this")) + "</a>" : "") +
      "</div>" +
      '<div class="wa-preview">' + esc(t("wa_ready")) + "<em>“" + esc(msg) + "”</em></div>" +
      "</aside></div>" +
      (specs.length ? '<div class="detail-sec"><h2>' + esc(t("key_specs")) + '</h2><div class="specs">' +
        specs.map(function (s) {
          var val = esc(s[1]);
          if (s[0] === "sp_year" && c.year) val = '<span data-count="' + c.year + '" data-from="' + (c.year - 12) + '" data-plain="1">' + c.year + "</span>";
          if (s[0] === "sp_mileage" && c.mileage != null) val = '<span data-count="' + c.mileage + '">' + num(c.mileage) + "</span> km";
          return '<div class="spec"><span>' + esc(t(s[0])) + "</span><strong>" + val + "</strong></div>";
        }).join("") + "</div></div>" : "") +
      (about ? '<div class="detail-sec"><h2>' + esc(t("about_car")) + '</h2><p class="about-text">' + esc(about) + "</p></div>" : "") +
      (c.condition && c.condition.length ? '<div class="detail-sec"><h2>' + esc(t("condition")) + '</h2><ul class="checks">' +
        c.condition.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" : "") +
      (c.video ? '<div class="detail-sec"><h2>' + esc(t("walk")) + '</h2><div class="walk"><video controls playsinline preload="none" poster="' + esc(c.video.poster || "") + '" src="' + esc(c.video.src) + '"></video></div></div>' : "") +
      (similar.length ? '<div class="detail-sec"><h2>' + esc(t("similar")) + '</h2><div class="cards">' + similar.map(cardHTML).join("") + "</div></div>" : "") +
      '<a class="back-link" href="cars.html">' + esc(t("back")) + "</a>";

    // gallery behaviour: slide + crossfade, drag to swipe
    window.__carMsg = msg;
    var i = 0, img = document.getElementById("gimg"), cnt = document.getElementById("gcount"), th = document.querySelectorAll(".thumb");
    var gm = document.getElementById("gmain"), busy = false;
    photos.forEach(function (ph) { var pre = new Image(); pre.src = ph.src; }); // preload for smooth swaps
    function label() {
      cnt.textContent = t("photo") + " " + (i + 1) + " " + t("of") + " " + photos.length;
      th.forEach(function (b, k) { b.classList.toggle("on", k === i); });
      var on = th[i]; if (on && on.scrollIntoView && window.innerWidth < 860) {}
    }
    function show(n, dir) {
      var next = (n + photos.length) % photos.length;
      if (next === i && img.getAttribute("src") === photos[next].src) { label(); return; }
      if (REDUCED || busy) { i = next; img.src = photos[i].src; label(); return; }
      dir = dir || (next > i ? 1 : -1);
      busy = true;
      var incoming = img.cloneNode();
      incoming.removeAttribute("id");
      incoming.src = photos[next].src;
      incoming.className = "g-incoming";
      incoming.style.transform = "translateX(" + (dir * 18) + "%) scale(1.04)";
      incoming.style.opacity = "0";
      gm.insertBefore(incoming, img.nextSibling);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          incoming.style.transform = "none"; incoming.style.opacity = "1";
          img.style.transition = "transform .5s cubic-bezier(.2,.8,.2,1), opacity .5s ease";
          img.style.transform = "translateX(" + (-dir * 12) + "%) scale(.98)"; img.style.opacity = "0";
        });
      });
      setTimeout(function () {
        img.src = photos[next].src; img.style.transition = "none"; img.style.transform = ""; img.style.opacity = "";
        if (incoming.parentNode) incoming.parentNode.removeChild(incoming);
        busy = false;
      }, 520);
      i = next; label();
    }
    th.forEach(function (b) { b.onclick = function () { var k = +b.getAttribute("data-i"); show(k, k > i ? 1 : -1); }; });
    var p = document.getElementById("gprev"), nx = document.getElementById("gnext");
    if (p) p.onclick = function () { show(i - 1, -1); };
    if (nx) nx.onclick = function () { show(i + 1, 1); };
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(i - 1, -1);
      if (e.key === "ArrowRight") show(i + 1, 1);
    });
    // drag with the finger, spring back if not far enough
    var sx = null, dx = 0;
    gm.addEventListener("touchstart", function (e) { if (busy) return; sx = e.touches[0].clientX; dx = 0; img.style.transition = "none"; }, { passive: true });
    gm.addEventListener("touchmove", function (e) {
      if (sx == null) return;
      dx = e.touches[0].clientX - sx;
      img.style.transform = "translateX(" + dx * 0.6 + "px)";
    }, { passive: true });
    gm.addEventListener("touchend", function () {
      if (sx == null) return;
      sx = null;
      if (Math.abs(dx) > 50) { img.style.transform = ""; show(dx < 0 ? i + 1 : i - 1, dx < 0 ? 1 : -1); }
      else { img.style.transition = "transform .45s cubic-bezier(.3,1.6,.5,1)"; img.style.transform = ""; }
    });
    i = 0; img.src = photos[0].src; label();
  }

  /* ---------------- boot ---------------- */
  /* ---------------- animations ---------------- */
  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function intro() {
    // Logo reveal, homepage only, once per visit
    var seen = false;
    try { seen = sessionStorage.getItem("rc_intro") === "1"; sessionStorage.setItem("rc_intro", "1"); } catch (e) {}
    if (seen || REDUCED) { document.body.classList.add("ready"); return; }
    var el = document.createElement("div");
    el.id = "intro";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<div class="intro-beam"></div><div class="intro-glow"></div>' +
      '<div class="intro-logo"><span class="logo-shine big"><img src="assets/img/logo-white.png" alt=""></span></div>' +
      '<div class="intro-line"></div><div class="intro-tag">Mikocheni · Dar es Salaam</div>';
    document.body.appendChild(el);
    document.body.classList.add("intro-on");
    var done = function () {
      if (!el.parentNode) return;
      el.classList.add("out");
      document.body.classList.remove("intro-on");
      document.body.classList.add("ready");
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 700);
    };
    el.addEventListener("click", done);
    setTimeout(done, 2300);
  }

  function reveals() {
    var els = document.querySelectorAll(".sec-head, .card, .empty-note, .why-item, .why-intro > *, .why-cta, .promo, .showroom-grid > *, .chip, .detail-sec, .spec");
    if (REDUCED || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) {
      // stagger siblings
      var i = Array.prototype.indexOf.call(e.parentNode.children, e);
      e.style.setProperty("--d", Math.min(i, 8) * 70 + "ms");
      e.classList.add("rv");
      io.observe(e);
    });
  }

  /* ---------- extra effects ---------- */
  var FINE = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function countUps() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    function run(el) {
      var to = +el.getAttribute("data-count"), from = +(el.getAttribute("data-from") || 0), plain = el.hasAttribute("data-plain");
      var t0 = null, dur = 1400;
      function step(ts) {
        if (!t0) t0 = ts;
        var k = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - k, 3), v = Math.round(from + (to - from) * e);
        el.textContent = plain ? String(v) : num(v);
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (REDUCED || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { run(x.target); io.unobserve(x.target); } });
    }, { threshold: 0.6 });
    els.forEach(function (el) { io.observe(el); });
  }

  function heroFx() {
    var hero = document.querySelector(".hero"), media = document.querySelector(".hero-media");
    if (!hero || !media || REDUCED) return;
    // headlight flash, synced to the end of the video loop
    var flash = document.createElement("div"); flash.className = "hero-flash"; media.appendChild(flash);
    var vid = media.querySelector("video"), last = 0;
    function fire() { flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go"); media.classList.remove("pulse"); void media.offsetWidth; media.classList.add("pulse"); }
    if (vid) vid.addEventListener("timeupdate", function () {
      var tt = vid.currentTime;
      if (last < 5.85 && tt >= 5.85) fire();
      last = tt;
    });
    // spotlight that follows the mouse
    if (FINE) {
      hero.classList.add("spot");
      hero.addEventListener("mousemove", function (e) {
        var r = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", (e.clientX - r.left) + "px");
        hero.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    }
    // parallax on scroll
    var col = document.querySelector(".hero-grid > div:first-child"), ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 900);
        if (vid) vid.style.transform = "translateY(" + y * 0.08 + "px) scale(1.12)";
        if (col) col.style.transform = "translateY(" + y * 0.12 + "px)";
        ticking = false;
      });
    }, { passive: true });
    if (vid) vid.style.transform = "scale(1.12)";
  }

  function tilt() {
    if (!FINE || REDUCED) return;
    document.addEventListener("mousemove", function (e) {
      var card = e.target.closest && e.target.closest(".card[href]");
      document.querySelectorAll(".card.tilting").forEach(function (c) { if (c !== card) { c.classList.remove("tilting"); c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); } });
      if (!card) return;
      var r = card.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.classList.add("tilting");
      card.style.setProperty("--ry", ((px - .5) * 10).toFixed(2) + "deg");
      card.style.setProperty("--rx", ((.5 - py) * 8).toFixed(2) + "deg");
      card.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
    });
  }

  function nudge() {
    if (document.body.getAttribute("data-page") !== "car" || REDUCED) return;
    setTimeout(function () {
      var w = document.querySelector(".wa-float");
      if (!w) return;
      if (window.__carMsg) w.href = wa(window.__carMsg);
      var tip = document.createElement("span"); tip.className = "wa-tip"; tip.textContent = t("nudge");
      w.appendChild(tip);
      w.classList.add("nudge");
      setTimeout(function () { w.classList.remove("nudge"); }, 1200);
      setTimeout(function () { tip.classList.add("hide"); }, 7000);
    }, 20000);
  }

  function pageTransitions() {
    if (REDUCED) return;
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || /^(https?:|tel:|mailto:)/.test(href)) return;
      var url = new URL(href, location.href);
      if (url.pathname === location.pathname && url.search === location.search && url.hash) return; // same-page anchor
      e.preventDefault();
      document.body.classList.add("leaving");
      setTimeout(function () { location.href = url.href; }, 260);
    });
    window.addEventListener("pageshow", function () { document.body.classList.remove("leaving"); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    chrome();
    if (document.body.getAttribute("data-page") === "home") intro(); else document.body.classList.add("ready");
    var page = document.body.getAttribute("data-page");
    if (page === "home") pageHome();
    if (page === "all") pageAll();
    if (page === "car") pageCar();
    requestAnimationFrame(reveals);
    countUps(); heroFx(); tilt(); nudge(); pageTransitions();
    document.querySelectorAll(".hero-in").forEach(function (el) {
      el.addEventListener("animationend", function (e) {
        if (e.animationName === "heroIn") { el.classList.remove("hero-in"); el.style.animation = "none"; requestAnimationFrame(function () { el.style.animation = ""; }); }
      });
    });
  });
})();
