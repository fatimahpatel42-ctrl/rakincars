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
      st_available: "Available", st_reserved: "Reserved", st_sold: "Sold", st_arriving: "Arriving soon", st_sale: "On sale", was: "Was", save: "You save",
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
      to_light: "Switch to light mode", to_dark: "Switch to dark mode",
      watch_ig: "Watch the video on Instagram", photos_soon: "Photos coming soon",
      search_ph: "Search e.g. Prado 2019, white, diesel", hide_sold: "Hide sold", sort_by: "Sort",
      sort_rec: "Recommended", sort_new: "Newest arrivals", sort_plow: "Price: low to high", sort_phigh: "Price: high to low",
      sort_year: "Year: newest first", sort_km: "Mileage: lowest first",
      load_more: "Load more cars", showing: "Showing {a} of {b} cars",
      zoom: "Zoom", zoom_hint: "Pinch or double-tap to zoom · swipe for next", close: "Close",
      brands_label: "Brands we sell & source",
      latest_kicker: "In stock now", latest_sub: "Hand-picked, inspected and ready to view at our Mikocheni showroom.",
      svc_kicker: "More than sales", svc_title: "Sell, trade or import", svc_sub: "Selling your car, trading up, or after something we don't have yet? We handle it.",
      tap_enter: "Tap to enter",
      f_explore: "Explore", f_contact: "Contact", f_hours: "Opening hours",
      directions: "Get directions", f_tag: "Premium pre-owned luxury cars. Imported, inspected and ready to drive.",
      rights: "All rights reserved."
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
      st_available: "Linapatikana", st_reserved: "Limehifadhiwa", st_sold: "Limeuzwa", st_arriving: "Linakuja karibuni", st_sale: "Ofa maalum", was: "Awali", save: "Unaokoa",
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
      to_light: "Badilisha kwenda mwanga", to_dark: "Badilisha kwenda giza",
      watch_ig: "Tazama video Instagram", photos_soon: "Picha zinakuja hivi karibuni",
      search_ph: "Tafuta mf. Prado 2019, V8, dizeli", hide_sold: "Ficha yaliyouzwa", sort_by: "Panga",
      sort_rec: "Yanayopendekezwa", sort_new: "Yaliyoingia karibuni", sort_plow: "Bei: chini kwenda juu", sort_phigh: "Bei: juu kwenda chini",
      sort_year: "Mwaka: mapya kwanza", sort_km: "Kilomita: chache kwanza",
      load_more: "Onyesha magari zaidi", showing: "Inaonyesha {a} kati ya {b}",
      zoom: "Kuza", zoom_hint: "Bana au gusa mara mbili kukuza · telezesha kwa inayofuata", close: "Funga",
      brands_label: "Aina tunazouza na kuagiza",
      latest_kicker: "Yaliyopo sasa", latest_sub: "Yamechaguliwa, yamekaguliwa na tayari kuonwa showroom yetu Mikocheni.",
      svc_kicker: "Zaidi ya mauzo", svc_title: "Uza, badilisha au agiza", svc_sub: "Unauza gari lako, unataka kubadilisha, au unatafuta gari ambalo hatuna bado? Tunakushughulikia.",
      tap_enter: "Gusa kuingia",
      f_explore: "Tembelea", f_contact: "Mawasiliano", f_hours: "Saa za kazi",
      directions: "Pata maelekezo", f_tag: "Magari ya kifahari yaliyotumika. Yameagizwa, yamekaguliwa na tayari kuendeshwa.",
      rights: "Haki zote zimehifadhiwa."
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
    document.querySelectorAll(".nav-logo img, .foot-logo img").forEach(function (im) { im.src = logoFor(th); });
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
  function carName(c) {
    if (c.name) return c.name;
    var sq = function (x) { return String(x || "").toLowerCase().replace(/[^a-z0-9]/g, ""); };
    var v = c.variant && c.variant !== c.model ? c.variant : "";
    if (!v) return [c.make, c.model].filter(Boolean).join(" ");
    if (!c.model || sq(v).indexOf(sq(c.model)) === 0 || sq(c.model).indexOf(sq(v)) === 0) return [c.make, v].filter(Boolean).join(" ");
    return [c.make, c.model, v].filter(Boolean).join(" ");
  }
  function carMeta(c) {
    return [c.year, c.mileage != null ? num(c.mileage) + " " + t("km") : null, v(c.fuel), v(c.transmission), c.colour]
      .filter(function (x) { return x != null && x !== ""; }).join(" · ");
  }
  function priceHTML(c, cls) {
    if (c.status === "sold") return '<div class="' + cls + '">' + esc(t("st_sold")) + "</div>";
    if (c.priceTZS == null && c.priceUSD != null) {
      var cutU = c.status === "sale" && c.wasUSD != null && c.wasUSD > c.priceUSD;
      return (cutU ? '<div class="was-price">' + esc(t("was")) + " <s>USD " + num(c.wasUSD) + "</s></div>" : "") +
        '<div class="' + cls + (c.status === "sale" ? " on-sale" : "") + '">USD <span data-count="' + c.priceUSD + '">' + num(c.priceUSD) + "</span></div>" +
        (cutU && cls === "price" ? '<div class="save-note">' + esc(t("save")) + " USD " + num(c.wasUSD - c.priceUSD) + "</div>" : "");
    }
    if (c.priceTZS == null) return '<div class="' + cls + ' por">' + esc(t("por")) + "</div>";
    var cut = c.status === "sale" && c.wasTZS != null && c.wasTZS > c.priceTZS;
    return (cut ? '<div class="was-price">' + esc(t("was")) + " <s>TZS " + num(c.wasTZS) + "</s></div>" : "") +
      '<div class="' + cls + (c.status === "sale" ? " on-sale" : "") + '">TZS <span data-count="' + c.priceTZS + '">' + num(c.priceTZS) + "</span></div>" +
      (cut && cls === "price" ? '<div class="save-note">' + esc(t("save")) + " TZS " + num(c.wasTZS - c.priceTZS) + "</div>" : "");
  }
  function badge(c) {
    var s = c.status || "available";
    return '<span class="badge badge-' + s + '">' + esc(t("st_" + s)) + "</span>";
  }
  function param(k) { return new URLSearchParams(location.search).get(k); }
  function sortCars(list) {
    var order = { sale: 0, available: 0, arriving: 1, reserved: 2, sold: 3 };
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
        '<a href="index.html#why">' + esc(t("nav_about")) + "</a>" +
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
    footer();
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

  /* ---------------- footer ---------------- */
  function mapsLink() {
    return INFO.mapLink || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Rakin Cars " + (INFO.address || "Mwai Kibaki Road, Mikocheni, Dar es Salaam"));
  }
  function hoursText() { return (LANG === "sw" && INFO.hoursSw) ? INFO.hoursSw : INFO.hours; }
  function footer() {
    var f = document.getElementById("site-footer");
    if (!f) return;
    f.className = "site-footer";
    var hrs = hoursText();
    var hoursLines = hrs ? String(hrs).split(/\n|;|\|/).map(function (x) { return "<li>" + esc(x.trim()) + "</li>"; }).join("") : "<li>" + esc(t("hours_ask")) + "</li>";
    f.innerHTML =
      '<div class="wrap foot-grid">' +
        '<div class="foot-brand">' +
          '<a href="index.html" class="foot-logo" aria-label="Rakin Cars home"><img src="' + logoFor(getTheme()) + '" alt="Rakin Cars"></a>' +
          "<p>" + esc(t("f_tag")) + "</p>" +
          '<div class="socials">' +
            '<a class="social" href="https://instagram.com/' + esc(INFO.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram @' + esc(INFO.instagram) + '" title="Instagram @' + esc(INFO.instagram) + '">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg></a>' +
            '<a class="social" href="' + wa(t("msg_general")) + '" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">' + ICON.wa.replace('class="ico"', "") + "</a>" +
            '<a class="social" href="' + tel() + '" aria-label="' + esc(t("call")) + " " + esc(INFO.phone) + '" title="' + esc(INFO.phone) + '">' + ICON.phone.replace('class="ico"', "") + "</a>" +
          "</div>" +
        "</div>" +
        '<div class="foot-col"><h4>' + esc(t("f_explore")) + "</h4><ul>" +
          '<li><a href="cars.html">' + esc(t("nav_cars")) + "</a></li>" +
          '<li><a href="index.html#sell">' + esc(t("nav_sell")) + "</a></li>" +
          '<li><a href="index.html#import">' + esc(t("nav_import")) + "</a></li>" +
          '<li><a href="index.html#why">' + esc(t("nav_about")) + "</a></li>" +
        "</ul></div>" +
        '<div class="foot-col"><h4>' + esc(t("f_contact")) + "</h4><ul>" +
          '<li><a href="' + tel() + '">' + esc(INFO.phone) + "</a></li>" +
          '<li><a href="' + wa(t("msg_general")) + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
          '<li><a href="https://instagram.com/' + esc(INFO.instagram) + '" target="_blank" rel="noopener">@' + esc(INFO.instagram) + "</a></li>" +
        "</ul></div>" +
        '<div class="foot-col"><h4>' + esc(t("f_hours")) + "</h4><ul>" + hoursLines + "</ul>" +
          '<p class="foot-addr">' + esc(INFO.address || "") + '</p><a class="foot-dir" href="' + esc(mapsLink()) + '" target="_blank" rel="noopener">' + esc(t("directions")) + " →</a>" +
        "</div>" +
      "</div>" +
      '<div class="foot-word" aria-hidden="true"><span>RAKIN CARS</span></div>' +
      '<div class="foot-road" aria-hidden="true"><span class="foot-car"><i class="foot-beam"></i><img src="assets/img/logo-car.png" alt=""></span></div>' +
      '<div class="wrap foot-bottom"><span>© ' + new Date().getFullYear() + " Rakin Cars · " + esc(t("rights")) + "</span><a href=\"#top\" class=\"to-top\">↑ Top</a></div>";
    if ("IntersectionObserver" in window) {
      var fio = new IntersectionObserver(function (en) {
        en.forEach(function (x) { f.classList.toggle("live", x.isIntersecting); });
      }, { threshold: 0.15 });
      fio.observe(f);
    } else f.classList.add("live");
    var tt = f.querySelector(".to-top");
    if (tt) tt.onclick = function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); };
  }

  /* ---------------- cards ---------------- */
  function cardHTML(c) {
    return (
      '<a class="card' + (c.status === "sold" ? " is-sold" : "") + '" href="car.html?id=' + encodeURIComponent(c.id) + '">' +
      '<div class="card-img">' + ((c.cardImage || (c.photos && c.photos[0] && c.photos[0].src)) ? '<img src="' + esc(c.cardImage || c.photos[0].src) + '" alt="' + esc(carName(c)) + '" loading="lazy" onerror="this.onerror=null;this.outerHTML=window.__noPhoto">' : noPhoto()) + badge(c) +
      (c.featured && c.status === "available" ? '<span class="ribbon">' + esc(t("just_arrived")) + "</span>" : "") +
      (c.status === "sold" ? '<span class="sold-stamp">' + esc(t("st_sold")) + "</span>" : "") + "</div>" +
      '<div class="card-body"><div class="card-title">' + esc(carName(c)) + "</div>" +
      '<div class="card-meta">' + esc(carMeta(c) || c.body || "") + "</div>" +
      priceHTML(c, "card-price") + "</div></a>"
    );
  }
  window.__noPhoto = "";
  function noPhoto() {
    return '<div class="no-photo"><img src="assets/img/logo-car.png" alt=""><span>' + esc(t("photos_soon")) + "</span></div>";
  }
  setTimeout(function () { window.__noPhoto = noPhoto(); }, 0);
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
    setHref("visit-dir", mapsLink());
    var ad = document.getElementById("visit-addr"); if (ad && INFO.address) ad.textContent = INFO.address;
    var call = document.getElementById("visit-call");
    if (call) { call.href = tel(); call.lastChild.textContent = " " + t("call") + " " + INFO.phone; }
    var hrs = document.getElementById("hours");
    if (hrs) {
      var hv = hoursText();
      hrs.textContent = hv ? t("open") + " " + String(hv).replace(/\n|;|\|/g, " · ") : t("hours_ask");
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
    var PAGE = 12;
    var st = {
      make: param("make") || "", body: param("body") || "", max: param("max") || "",
      q: param("q") || "", sort: param("sort") || "rec", hideSold: param("sold") === "hide", shown: PAGE
    };
    var form = document.getElementById("search-form");
    var qEl = document.getElementById("q"), sortEl = document.getElementById("sort"), hsEl = document.getElementById("hide-sold");
    var grid = document.getElementById("all"), moreWrap = document.getElementById("more-wrap"), moreBtn = document.getElementById("more");
    fillFilters(form, st);
    qEl.value = st.q; sortEl.value = st.sort; hsEl.checked = st.hideSold;
    qEl.placeholder = t("search_ph");
    document.getElementById("q-clear").onclick = function () { qEl.value = ""; st.q = ""; update(true); qEl.focus(); };

    function norm(x) { return String(x == null ? "" : x).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim(); }
    function hay(c) {
      return norm([c.make, c.model, c.variant, c.name, c.year, c.body, c.fuel, c.transmission, c.colour, c.ref, c.importedFrom, c.engine, c.drive, VALUE_SW[c.fuel], VALUE_SW[c.transmission], T.en["st_" + (c.status || "available")], T.sw["st_" + (c.status || "available")]].join(" "));
    }
    function matchQ(c, q) {
      if (!q) return true;
      var h = " " + hay(c) + " ";
      return norm(q).split(" ").every(function (w) {
        if (!w) return true;
        if (h.indexOf(" " + w) >= 0) return true;
        var n = w.replace(/^0+/, "");
        return /\d/.test(w) && h.indexOf(n) >= 0;
      });
    }
    function sorter(mode) {
      var rank = { sale: 0, available: 0, arriving: 1, reserved: 2, sold: 3 };
      var base = function (a, b) { return (rank[a.status] || 0) - (rank[b.status] || 0); };
      var nul = function (v, big) { return v == null ? (big ? Infinity : -Infinity) : v; };
      return function (a, b) {
        var r = base(a, b);
        if (mode === "rec") return (!!b.featured - !!a.featured) || r || a._i - b._i;
        if (r && mode !== "new") return r;
        if (mode === "new") return (!!b.featured - !!a.featured) || a._i - b._i;
        if (mode === "plow") return nul(a.priceTZS, true) - nul(b.priceTZS, true) || a._i - b._i;
        if (mode === "phigh") return nul(b.priceTZS, false) - nul(a.priceTZS, false) || a._i - b._i;
        if (mode === "year") return nul(b.year, false) - nul(a.year, false) || a._i - b._i;
        if (mode === "km") return nul(a.mileage, true) - nul(b.mileage, true) || a._i - b._i;
        return a._i - b._i;
      };
    }
    CARS.forEach(function (c, k) { c._i = k; });

    function syncURL() {
      var u = new URLSearchParams();
      if (st.make) u.set("make", st.make);
      if (st.body) u.set("body", st.body);
      if (st.max) u.set("max", st.max);
      if (st.q) u.set("q", st.q);
      if (st.sort !== "rec") u.set("sort", st.sort);
      if (st.hideSold) u.set("sold", "hide");
      var qs = u.toString();
      try { history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "")); } catch (e) {}
    }

    var current = [];
    function update(resetPage) {
      if (resetPage) st.shown = PAGE;
      document.getElementById("chips").innerHTML = chipsHTML(st.make);
      current = CARS.filter(function (c) {
        if (st.make && c.make !== st.make) return false;
        if (st.body && c.body !== st.body) return false;
        if (st.max && c.priceTZS != null && c.priceTZS > Number(st.max)) return false;
        if (st.hideSold && c.status === "sold") return false;
        return matchQ(c, st.q);
      }).sort(sorter(st.sort));
      var n = current.length, filtered = st.make || st.body || st.max || st.q || st.hideSold;
      document.getElementById("count").innerHTML = n + " " + esc(n === 1 ? t("results_one") : t("results_many")) + " " + esc(t("results_found")) +
        (filtered ? ' · <a class="link-red" href="cars.html" id="clear-all">' + esc(t("clear")) + "</a>" : "");
      document.querySelector(".tb-search").classList.toggle("has-q", !!st.q);
      if (!n) {
        grid.innerHTML = '<div class="empty-note" style="grid-column:1/-1"><strong>' + esc(t("none_found")) + "</strong>" +
          '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + wa(t("msg_import")) + '">' + ICON.wa + esc(t("none_btn")) + "</a></div>";
        moreWrap.hidden = true;
      } else {
        grid.innerHTML = current.slice(0, st.shown).map(cardHTML).join("") + (n < 4 && !filtered ? moreCardHTML() : "");
        paintMore();
      }
      syncURL();
      requestAnimationFrame(reveals);
      countUps();
    }
    function paintMore() {
      var n = current.length, s = Math.min(st.shown, n);
      moreWrap.hidden = n <= PAGE;
      document.getElementById("more-note").textContent = t("showing").replace("{a}", s).replace("{b}", n);
      document.getElementById("more-bar").style.width = (s / n * 100) + "%";
      moreBtn.hidden = s >= n;
    }
    moreBtn.onclick = function () {
      var from = st.shown;
      st.shown += PAGE;
      grid.insertAdjacentHTML("beforeend", current.slice(from, st.shown).map(cardHTML).join(""));
      paintMore();
      requestAnimationFrame(reveals);
      countUps();
    };
    // auto "load more" when the visitor scrolls near the button (after the first manual tap)
    var autoMore = false;
    moreBtn.addEventListener("click", function () { autoMore = true; });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        if (autoMore && en[0].isIntersecting && !moreBtn.hidden) moreBtn.click();
      }, { rootMargin: "300px" }).observe(moreWrap);
    }

    var qt = null;
    qEl.addEventListener("input", function () { clearTimeout(qt); qt = setTimeout(function () { st.q = qEl.value.trim(); update(true); }, 180); });
    qEl.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); qEl.blur(); } });
    sortEl.onchange = function () { st.sort = sortEl.value; update(true); };
    hsEl.onchange = function () { st.hideSold = hsEl.checked; update(true); };
    form.addEventListener("submit", function (e) { e.preventDefault(); });
    form.addEventListener("change", function () {
      st.make = form.make.value; st.body = form.body.value; st.max = form.max.value; update(true);
    });
    document.getElementById("chips").addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a.chip");
      if (!a) return;
      e.preventDefault(); e.stopPropagation();
      var m = new URL(a.href).searchParams.get("make") || "";
      st.make = st.make === m ? "" : m; form.make.value = st.make; update(true);
    }, true);
    document.getElementById("count").addEventListener("click", function (e) {
      if (e.target.id !== "clear-all") return;
      e.preventDefault(); e.stopPropagation();
      st = { make: "", body: "", max: "", q: "", sort: st.sort, hideSold: false, shown: PAGE };
      form.make.value = ""; form.body.value = ""; form.max.value = ""; qEl.value = ""; hsEl.checked = false;
      update(true);
    }, true);
    update(true);
  }

  function videoHTML(vd) {
    if (!vd) return "";
    var inner = "";
    if (vd.youtube) inner = '<div class="walk walk-embed"><iframe src="https://www.youtube.com/embed/' + esc(vd.youtube) + '?rel=0" title="Video" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" loading="lazy"></iframe></div>';
    else if (vd.drive) inner = '<div class="walk walk-embed"><iframe src="https://drive.google.com/file/d/' + esc(vd.drive) + '/preview" title="Video" allow="autoplay; fullscreen" loading="lazy"></iframe></div>';
    else if (vd.link) inner = '<a class="btn btn-ghost" href="' + esc(vd.link) + '" target="_blank" rel="noopener">▶ ' + esc(t("watch_ig")) + "</a>";
    else if (vd.src) inner = '<div class="walk"><video controls playsinline preload="none" poster="' + esc(vd.poster || "") + '" src="' + esc(vd.src) + '"></video></div>';
    return inner ? '<div class="detail-sec"><h2>' + esc(t("walk")) + "</h2>" + inner + "</div>" : "";
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
    var photos = c.photos && c.photos.length ? c.photos : (c.cardImage ? [{ src: c.cardImage, label: "" }] : [{ src: "assets/img/showroom.jpg", label: t("photos_soon") }]);
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
      '<button class="g-zoom" id="gzoom" type="button" aria-label="' + esc(t("zoom")) + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6"/></svg><span>' + esc(t("zoom")) + "</span></button>" +
      '<button class="g-play" id="gplay" type="button" aria-label="Pause"><svg class="i-pause" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg><svg class="i-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>' +
      '<div class="g-progress"><i id="gbar"></i></div>' +
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
      '<div class="price-note">' + [c.priceUSD && c.priceTZS != null ? "≈ USD " + num(c.priceUSD) : null, c.tradeIn ? t("trade_ok") : null].filter(Boolean).map(esc).join(" · ") + "</div>" +
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
      videoHTML(c.video) +
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

    /* ---- autoplay: next photo every 4s, pauses on hover / touch / zoom ---- */
    var DELAY = 4000, timer = null, paused = false, hoverPause = false, bar = document.getElementById("gbar");
    var playBtn = document.getElementById("gplay");
    function startBar() {
      if (!bar) return;
      bar.style.transition = "none"; bar.style.width = "0";
      void bar.offsetWidth;
      bar.style.transition = "width " + DELAY + "ms linear"; bar.style.width = "100%";
    }
    function stopBar() { if (bar) { var w = getComputedStyle(bar).width; bar.style.transition = "none"; bar.style.width = w; } }
    function schedule() {
      clearTimeout(timer);
      if (paused || hoverPause || photos.length < 2 || REDUCED || document.hidden) { stopBar(); return; }
      startBar();
      timer = setTimeout(function () { show(i + 1, 1); schedule(); }, DELAY);
    }
    function setPaused(v) { paused = v; gm.classList.toggle("is-paused", v); schedule(); }
    if (playBtn) playBtn.onclick = function (e) { e.stopPropagation(); setPaused(!paused); };
    gm.addEventListener("mouseenter", function () { hoverPause = true; schedule(); });
    gm.addEventListener("mouseleave", function () { hoverPause = false; schedule(); });
    // any manual navigation restarts the countdown
    [p, nx].forEach(function (b) { if (b) b.addEventListener("click", schedule); });
    th.forEach(function (b) { b.addEventListener("click", schedule); });
    gm.addEventListener("touchend", function () { setTimeout(schedule, 0); });
    document.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft" || e.key === "ArrowRight") schedule(); });
    document.addEventListener("visibilitychange", schedule);
    // only run while the gallery is on screen
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { hoverPause = !en[0].isIntersecting ? true : (gm.matches(":hover")); schedule(); }, { threshold: 0.4 }).observe(gm);
    } else schedule();
    if (photos.length < 2) gm.classList.add("single");

    /* ---- zoom: full-screen viewer with pinch, double-tap, wheel and drag ---- */
    function openViewer(start) {
      setPaused(true);
      var k = start, scale = 1, tx = 0, ty = 0;
      var v = document.createElement("div");
      v.className = "zoomer";
      v.setAttribute("role", "dialog");
      v.innerHTML =
        '<div class="z-top"><span class="z-count"></span><span class="z-label"></span><button class="z-close" aria-label="' + esc(t("close")) + '">✕</button></div>' +
        '<div class="z-stage"><img class="z-img" alt="' + esc(name) + '" draggable="false"></div>' +
        (photos.length > 1 ? '<button class="z-nav z-prev" aria-label="Previous">' + ICON.left + '</button><button class="z-nav z-next" aria-label="Next">' + ICON.right + "</button>" : "") +
        '<div class="z-hint">' + esc(t("zoom_hint")) + "</div>" +
        '<div class="z-thumbs">' + photos.map(function (ph, n) { return '<button data-n="' + n + '"><img src="' + esc(ph.src) + '" alt=""></button>'; }).join("") + "</div>";
      document.body.appendChild(v);
      document.body.style.overflow = "hidden";
      var zi = v.querySelector(".z-img"), stage = v.querySelector(".z-stage"), zt = v.querySelectorAll(".z-thumbs button");
      requestAnimationFrame(function () { v.classList.add("open"); });

      function apply(anim) {
        zi.style.transition = anim ? "transform .3s cubic-bezier(.2,.8,.2,1)" : "none";
        zi.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + scale + ")";
        v.classList.toggle("zoomed", scale > 1.01);
      }
      function clamp() {
        var r = stage.getBoundingClientRect(), w = zi.clientWidth * scale, h = zi.clientHeight * scale;
        var mx = Math.max(0, (w - r.width) / 2), my = Math.max(0, (h - r.height) / 2);
        tx = Math.max(-mx, Math.min(mx, tx)); ty = Math.max(-my, Math.min(my, ty));
      }
      function reset(anim) { scale = 1; tx = 0; ty = 0; apply(anim); }
      function go(n) {
        k = (n + photos.length) % photos.length;
        zi.classList.add("swap");
        setTimeout(function () {
          zi.src = photos[k].src; reset(false);
          v.querySelector(".z-count").textContent = (k + 1) + " / " + photos.length;
          v.querySelector(".z-label").textContent = photos[k].label || "";
          zt.forEach(function (b, m) { b.classList.toggle("on", m === k); });
          if (zt[k] && zt[k].scrollIntoView) zt[k].scrollIntoView({ block: "nearest", inline: "center" });
          zi.classList.remove("swap");
        }, zi.getAttribute("src") ? 140 : 0);
      }
      function zoomAt(ns, cx, cy) {
        var r = zi.getBoundingClientRect();
        var ox = cx - (r.left + r.width / 2), oy = cy - (r.top + r.height / 2);
        var f = ns / scale;
        tx = tx - ox * (f - 1); ty = ty - oy * (f - 1);
        scale = ns; clamp(); apply(true);
      }
      function close() {
        v.classList.remove("open");
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKey);
        setTimeout(function () { if (v.parentNode) v.parentNode.removeChild(v); }, 260);
        show(k, k > i ? 1 : -1);
        setPaused(false);
      }
      function onKey(e) {
        if (e.key === "Escape") close();
        else if (e.key === "ArrowRight") go(k + 1);
        else if (e.key === "ArrowLeft") go(k - 1);
        else if (e.key === "+" || e.key === "=") zoomAt(Math.min(4, scale * 1.5), innerWidth / 2, innerHeight / 2);
        else if (e.key === "-") { if (scale / 1.5 <= 1.01) reset(true); else zoomAt(scale / 1.5, innerWidth / 2, innerHeight / 2); }
        e.stopPropagation();
      }
      document.addEventListener("keydown", onKey);
      v.querySelector(".z-close").onclick = close;
      var zp = v.querySelector(".z-prev"), zn = v.querySelector(".z-next");
      if (zp) zp.onclick = function () { go(k - 1); };
      if (zn) zn.onclick = function () { go(k + 1); };
      zt.forEach(function (b) { b.onclick = function () { go(+b.getAttribute("data-n")); }; });

      // desktop: click toggles 2.5x at the cursor, wheel zooms, drag pans
      var lastTap = 0, dragging = false, moved = false, px = 0, py = 0;
      stage.addEventListener("wheel", function (e) {
        e.preventDefault();
        var ns = Math.max(1, Math.min(4, scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15)));
        if (ns <= 1.01) reset(true); else zoomAt(ns, e.clientX, e.clientY);
      }, { passive: false });
      stage.addEventListener("mousedown", function (e) { dragging = true; moved = false; px = e.clientX; py = e.clientY; });
      window.addEventListener("mousemove", function (e) {
        if (!dragging || scale <= 1) return;
        moved = true; tx += e.clientX - px; ty += e.clientY - py; px = e.clientX; py = e.clientY; clamp(); apply(false);
      });
      window.addEventListener("mouseup", function () { dragging = false; });
      stage.addEventListener("click", function (e) {
        if (moved) return;
        if (e.target === stage && scale <= 1) { close(); return; }
        if (scale > 1.01) reset(true); else zoomAt(2.5, e.clientX, e.clientY);
      });

      // touch: pinch to zoom, drag to pan, double-tap to zoom, swipe for next when not zoomed
      var t0 = null, pinch = null, sxs = 0, sys = 0, swipeX = 0;
      stage.addEventListener("touchstart", function (e) {
        if (e.touches.length === 2) {
          var a = e.touches[0], b = e.touches[1];
          pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), s: scale, cx: (a.clientX + b.clientX) / 2, cy: (a.clientY + b.clientY) / 2 };
        } else if (e.touches.length === 1) {
          t0 = { x: e.touches[0].clientX, y: e.touches[0].clientY, tx: tx, ty: ty, time: Date.now() };
          sxs = t0.x; sys = t0.y; swipeX = 0;
        }
      }, { passive: true });
      stage.addEventListener("touchmove", function (e) {
        if (pinch && e.touches.length === 2) {
          e.preventDefault();
          var a = e.touches[0], b = e.touches[1];
          var d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
          var ns = Math.max(1, Math.min(4, pinch.s * d / pinch.d));
          var f = ns / scale, r = zi.getBoundingClientRect();
          tx -= (pinch.cx - (r.left + r.width / 2)) * (f - 1); ty -= (pinch.cy - (r.top + r.height / 2)) * (f - 1);
          scale = ns; clamp(); apply(false);
        } else if (t0 && e.touches.length === 1) {
          var dx = e.touches[0].clientX - t0.x, dy = e.touches[0].clientY - t0.y;
          if (scale > 1.01) { e.preventDefault(); tx = t0.tx + dx; ty = t0.ty + dy; clamp(); apply(false); }
          else { swipeX = dx; zi.style.transition = "none"; zi.style.transform = "translateX(" + dx * 0.5 + "px)"; }
        }
      }, { passive: false });
      stage.addEventListener("touchend", function (e) {
        if (pinch && e.touches.length < 2) { pinch = null; if (scale <= 1.02) reset(true); return; }
        if (!t0) return;
        var now = Date.now();
        var tapped = Math.abs(swipeX) < 10 && now - t0.time < 250;
        if (scale <= 1.01) {
          if (Math.abs(swipeX) > 60) { go(swipeX < 0 ? k + 1 : k - 1); }
          else apply(true);
        }
        if (tapped) {
          if (now - lastTap < 300) {
            if (scale > 1.01) reset(true); else zoomAt(2.5, sxs, sys);
            lastTap = 0;
          } else lastTap = now;
        }
        t0 = null;
      });
      go(k);
    }
    var zb = document.getElementById("gzoom");
    if (zb) zb.onclick = function (e) { e.stopPropagation(); openViewer(i); };
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () { openViewer(i); });
    // double-tap the photo on phones opens zoom too
    var lt = 0;
    gm.addEventListener("touchend", function (e) {
      var n = Date.now();
      if (n - lt < 300 && e.target === img) { openViewer(i); lt = 0; } else lt = n;
    });
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
      '<div class="intro-line"></div><div class="intro-tag">Mikocheni · Dar es Salaam</div>' +
      '<button class="intro-tap" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg><span>' + esc(t("tap_enter")) + "</span></button>";
    document.body.appendChild(el);
    document.body.classList.add("intro-on");
    var finished = false;
    var done = function () {
      if (finished) return;
      finished = true;
      el.classList.add("out");
      document.body.classList.remove("intro-on");
      document.body.classList.add("ready");
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 700);
    };

    // Sound: browsers only allow sound after a tap, unless the visitor has
    // interacted with the site before. Try to play straight away; if the
    // browser blocks it, show "Tap to enter" so the tap can play the sound.
    var played = false, blocked = false;
    function sfx(src, vol) {
      try { var a = new Audio(src); a.volume = vol; return a.play().then(function () { return true; }); }
      catch (e) { return Promise.reject(e); }
    }
    sfx("assets/audio/intro.mp3", 0.55).then(function () {
      played = true;
      setTimeout(done, 2600);
    }).catch(function () {
      blocked = true;
      setTimeout(function () { if (!finished) el.classList.add("ask"); }, 1500);
      setTimeout(done, 6000); // nobody tapped: carry on silently
    });
    el.addEventListener("click", function () {
      if (finished) return;
      if (blocked && !played) {
        played = true;
        el.classList.remove("ask");
        el.classList.add("hit");
        sfx("assets/audio/enter.mp3", 0.6).catch(function () {});
        setTimeout(done, 650);
      } else done();
    });
    window.addEventListener("keydown", function k(e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") { window.removeEventListener("keydown", k); el.click(); }
    });
  }

  function reveals() {
    var els = document.querySelectorAll(".sec-head, .card, .empty-note, .why-item, .why-intro > *, .why-cta, .promo, .showroom-info, .showroom-photo, .foot-grid > *, .chip, .detail-sec, .spec");
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
    var els = document.querySelectorAll("[data-count]:not([data-counted])");
    if (!els.length) return;
    function run(el) {
      el.setAttribute("data-counted", "1");
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

  function loading(on) {
    ["latest", "all", "car"].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (on) el.innerHTML = id === "car" ? '<div class="skel skel-car"></div>' :
        '<div class="skel skel-card"></div><div class="skel skel-card"></div><div class="skel skel-card"></div>';
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.RAKIN_LOCKED) return;
    var page = document.body.getAttribute("data-page");
    var sheetOn = !!String(window.RAKIN_SHEET || "").trim() && typeof window.RAKIN_LOAD === "function";
    if (sheetOn) loading(true);
    chrome();
    if (page === "home") intro(); else document.body.classList.add("ready");
    var load = sheetOn ? window.RAKIN_LOAD() : Promise.resolve({ source: "file" });
    load.catch(function () { return { source: "file" }; }).then(function (d) {
      if (d.cars && d.cars.length) CARS = d.cars;
      if (d.info) { Object.keys(d.info).forEach(function (k) { INFO[k] = d.info[k]; }); footer(); }
      if (d.reviews && d.reviews.length) REVIEWS = d.reviews;
      render(page);
    });
  });

  function render(page) {
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
  }
})();
