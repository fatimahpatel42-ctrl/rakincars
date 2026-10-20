/*
  RAKIN CARS — GOOGLE SHEET LOADER
  =================================
  Paste the link of the Rakin Cars Google Sheet between the quotes below.
  (In Google Sheets: Share → General access → "Anyone with the link" → Viewer → Copy link)

  Leave it empty ("") to use the cars written in assets/js/cars-data.js instead.
*/
window.RAKIN_SHEET = "https://docs.google.com/spreadsheets/d/1tr8T_346TOCAec8eSxxtqQsSybfwKpUQGnx8fmx45uI/edit?usp=sharing";

(function () {
  "use strict";

  /* ---------- CSV parser (handles quotes, commas and line breaks inside cells) ---------- */
  function parseCSV(text) {
    var rows = [], row = [], cell = "", q = false, i, c;
    text = String(text || "").replace(/^﻿/, "");
    for (i = 0; i < text.length; i++) {
      c = text[i];
      if (q) {
        if (c === '"') {
          if (text[i + 1] === '"') { cell += '"'; i++; } else q = false;
        } else cell += c;
      } else if (c === '"') q = true;
      else if (c === ",") { row.push(cell); cell = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); rows.push(row); row = []; cell = "";
      } else cell += c;
    }
    if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (x) { return String(x).trim() !== ""; }); });
  }

  function toObjects(rows) {
    if (!rows.length) return [];
    var head = rows[0].map(function (h) { return norm(h); });
    return rows.slice(1).map(function (r) {
      var o = {};
      head.forEach(function (h, i) { if (h) o[h] = (r[i] == null ? "" : String(r[i])).trim(); });
      return o;
    });
  }
  // "Price (TZS)" -> "pricetzs", "Main photo" -> "mainphoto"
  function norm(s) { return String(s || "").toLowerCase().replace(/\(.*?\)/g, function (m) { return m.replace(/[()]/g, ""); }).replace(/[^a-z0-9]/g, ""); }
  function pick(o, keys) {
    for (var i = 0; i < keys.length; i++) { var v = o[norm(keys[i])]; if (v != null && v !== "") return v; }
    return "";
  }
  function yes(v, dflt) {
    v = String(v || "").trim().toLowerCase();
    if (!v) return dflt;
    return ["yes", "y", "true", "1", "ndiyo", "ndio", "x", "✓"].indexOf(v) >= 0;
  }
  function number(v) {
    v = String(v || "").replace(/[^0-9.]/g, "");
    if (!v) return null;
    var n = Number(v);
    return isFinite(n) && n > 0 ? n : null;
  }
  function slug(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }

  /* ---------- photos: accept Google Drive share links, normal links, or site paths ---------- */
  function photoURL(u) {
    u = String(u || "").trim();
    if (!u) return "";
    var m = u.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || u.match(/[?&]id=([\w-]+)/);
    if (m && /google\.com/.test(u)) return "https://drive.google.com/thumbnail?id=" + m[1] + "&sz=w1600";
    return u;
  }
  function photoList(cell) {
    return String(cell || "").split(/\n|,(?=\s*(?:https?:|assets\/|[^,|]*\|))/).map(function (s) { return s.trim(); }).filter(Boolean).map(function (s, i) {
      var label = "", url = s;
      var bar = s.indexOf("|");
      if (bar > 0 && !/^https?:/.test(s.slice(0, bar).trim())) { label = s.slice(0, bar).trim(); url = s.slice(bar + 1).trim(); }
      return { src: photoURL(url), label: label };
    }).filter(function (p) { return p.src; });
  }
  function videoInfo(u) {
    u = String(u || "").trim();
    if (!u) return null;
    var yt = u.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([\w-]{6,})/);
    if (yt) return { youtube: yt[1] };
    if (/instagram\.com\//.test(u)) return { link: u };
    if (/drive\.google\.com/.test(u)) {
      var m = u.match(/\/d\/([\w-]+)/) || u.match(/[?&]id=([\w-]+)/);
      if (m) return { drive: m[1] };
    }
    return { src: u };
  }

  /* ---------- turn a sheet row into a car ---------- */
  function rowToCar(r, n) {
    var make = pick(r, ["Make"]), model = pick(r, ["Model"]), variant = pick(r, ["Variant", "Version", "Trim"]);
    if (!make && !model) return null;
    if (pick(r, ["Show on website", "Show", "Visible"]) && !yes(pick(r, ["Show on website", "Show", "Visible"]), true)) return null;
    var year = number(pick(r, ["Year"]));
    var status = pick(r, ["Status"]).toLowerCase();
    if (/sold|imeuzwa|limeuzwa/.test(status)) status = "sold";
    else if (/reserv|hifadh/.test(status)) status = "reserved";
    else if (/arriv|coming|soon|njiani|inakuja/.test(status)) status = "arriving";
    else if (/on sale|^sale$|offer|discount|reduced|promo|ofa|punguzo/.test(status)) status = "sale";
    else status = "available";
    var photos = photoList(pick(r, ["Gallery photos", "Photos", "Gallery"]));
    var main = photoURL(pick(r, ["Main photo", "Card photo", "Cover photo"]));
    if (!photos.length && main) photos = [{ src: main, label: "" }];
    var cond = pick(r, ["Condition notes", "Condition", "Inspection notes"]);
    var id = slug(pick(r, ["ID", "Web ID"])) || slug([make, model, variant, year].filter(Boolean).join(" ")) || "car-" + n;
    return {
      id: id,
      ref: pick(r, ["Ref", "Stock ref", "Reference"]) || id.toUpperCase(),
      status: status,
      featured: yes(pick(r, ["Featured", "Just arrived", "New"]), false),
      name: pick(r, ["Display name", "Name"]) || null,
      make: make, model: model, variant: variant || model,
      body: pick(r, ["Body", "Body type"]) || null,
      year: year,
      mileage: number(pick(r, ["Mileage (km)", "Mileage", "KM"])),
      fuel: pick(r, ["Fuel"]) || null,
      transmission: pick(r, ["Transmission", "Gearbox"]) || null,
      engine: pick(r, ["Engine"]) || null,
      drive: pick(r, ["Drive", "Drivetrain"]) || null,
      colour: pick(r, ["Colour", "Color"]) || null,
      importedFrom: pick(r, ["Imported from", "Import from", "Origin"]) || null,
      priceTZS: number(pick(r, ["Price (TZS)", "Price TZS", "Price"])),
      priceUSD: number(pick(r, ["Price (USD)", "Price USD"])),
      wasTZS: number(pick(r, ["Was price (TZS)", "Was price", "Old price (TZS)", "Old price", "Original price"])),
      wasUSD: number(pick(r, ["Was price (USD)", "Old price (USD)"])),
      tradeIn: yes(pick(r, ["Trade-in", "Trade in", "Trade-in accepted"]), true),
      cardImage: main || (photos[0] && photos[0].src) || "",
      photos: photos,
      video: videoInfo(pick(r, ["Video", "Walkaround video", "Video link"])),
      about: pick(r, ["About (English)", "About", "Description"]) || null,
      aboutSw: pick(r, ["About (Swahili)", "About (Kiswahili)", "Maelezo"]) || null,
      condition: cond ? cond.split(/\n|;/).map(function (s) { return s.replace(/^[-•*\s]+/, "").trim(); }).filter(Boolean) : []
    };
  }

  /* ---------- fetch ---------- */
  function sheetId(link) {
    var m = String(link || "").match(/\/spreadsheets\/d\/([\w-]{20,})/);
    return m ? m[1] : (/^[\w-]{30,}$/.test(link) ? link : "");
  }
  function tabURL(link, tab) {
    // published CSV links (File → Share → Publish to web → CSV) work too, for the Cars tab
    if (/output=csv|\.csv(\?|$)/.test(link)) return tab === "Cars" ? link : null;
    var id = sheetId(link);
    if (!id) return null;
    return "https://docs.google.com/spreadsheets/d/" + id + "/gviz/tq?tqx=out:csv&headers=1&sheet=" + encodeURIComponent(tab) + "&t=" + Date.now();
  }
  function getTab(link, tab, ms) {
    var url = tabURL(link, tab);
    if (!url) return Promise.resolve(null);
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, ms || 7000);
    return fetch(url, { cache: "no-store", signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.text(); })
      .then(function (txt) {
        clearTimeout(timer);
        if (/^\s*</.test(txt)) throw new Error("Sheet is not shared publicly");
        return toObjects(parseCSV(txt));
      })
      .catch(function (e) { clearTimeout(timer); if (window.console) console.warn("[Rakin] Could not load '" + tab + "' tab:", e.message); return null; });
  }

  window.RAKIN_LOAD = function () {
    var link = String(window.RAKIN_SHEET || "").trim();
    if (!link) return Promise.resolve({ source: "file" });
    return Promise.all([getTab(link, "Cars"), getTab(link, "Info", 5000), getTab(link, "Reviews", 5000)]).then(function (res) {
      var out = { source: "file" };
      var cars = res[0];
      if (cars && cars.length) {
        var list = cars.map(rowToCar).filter(Boolean);
        // keep ids unique
        var seen = {};
        list.forEach(function (c) { var b = c.id, k = 2; while (seen[c.id]) c.id = b + "-" + k++; seen[c.id] = 1; });
        if (list.length) { out.cars = list; out.source = "sheet"; }
      }
      var info = res[1];
      if (info && info.length) {
        var map = {};
        info.forEach(function (r) {
          var k = norm(pick(r, ["Setting", "Key", "Field", "Name"])), v = pick(r, ["Value", "Details"]);
          if (k && v) map[k] = v;
        });
        out.info = {};
        if (map.phone) out.info.phone = map.phone;
        if (map.whatsapp || map.whatsappnumber) out.info.whatsapp = String(map.whatsapp || map.whatsappnumber).replace(/\D/g, "");
        if (map.instagram) out.info.instagram = map.instagram.replace(/^@|https?:\/\/(www\.)?instagram\.com\//g, "").replace(/\/$/, "");
        if (map.address) out.info.address = map.address;
        if (map.hoursenglish || map.openinghours || map.hours) out.info.hours = map.hoursenglish || map.openinghours || map.hours;
        if (map.hoursswahili || map.hourskiswahili) out.info.hoursSw = map.hoursswahili || map.hourskiswahili;
        if (map.googlemapslink || map.maplink || map.map) out.info.mapLink = map.googlemapslink || map.maplink || map.map;
      }
      var rev = res[2];
      if (rev && rev.length) {
        out.reviews = rev.map(function (r) {
          var text = pick(r, ["Review", "Text", "Comment"]);
          if (!text) return null;
          if (pick(r, ["Show on website", "Show"]) && !yes(pick(r, ["Show on website", "Show"]), true)) return null;
          return { name: pick(r, ["Name", "Customer name", "Customer"]), car: pick(r, ["Car bought", "Car"]), text: text, photo: photoURL(pick(r, ["Photo", "Handover photo"])) };
        }).filter(Boolean);
      }
      return out;
    });
  };
  window.RAKIN_PARSE_CSV = parseCSV; // exposed for testing
})();
