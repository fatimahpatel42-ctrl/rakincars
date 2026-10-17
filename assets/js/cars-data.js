/*
  RAKIN CARS — STOCK LIST
  =======================
  This is the only file you need to edit to add, change or sell a car.

  To ADD a car: copy one whole { ... } block, paste it below, and change the details.
  To MARK AS SOLD: change status to "sold".
  To REMOVE a car: delete its whole { ... } block (including the comma after it).

  Fields:
    name      optional display name, e.g. "Mercedes-Benz G 450d"
    id        short unique name used in the web address, e.g. "g450d-blue"  (no spaces)
    ref       your stock reference, e.g. "RC-0150" (appears in the WhatsApp message)
    status    "available" | "reserved" | "sold" | "arriving"
    make, model, variant
    body      "SUV" | "Sedan" | "Pickup" | "Hatchback" | "Coupe" | "Van"
    year, mileage (km, number), fuel, transmission, engine, drive, colour, importedFrom
    priceTZS  number, e.g. 385000000  — or null to show "Price on request"
    priceUSD  number or null (optional)
    tradeIn   true/false — shows "Trade-in accepted"
    cardImage the photo shown on listing cards (landscape works best)
    photos    list of { src, label } — the gallery on the car page
    video     optional walkaround video file  { src, poster }
    about     2–3 sentences in your own words (English)
    aboutSw   same in Kiswahili (optional)
    condition list of honest inspection notes
    featured  true = shown in the homepage hero / first in "Latest arrivals"

  Any field set to null is simply hidden on the website.
*/

window.RAKIN_CARS = [
  {
    id: "mercedes-g450d",
    name: "Mercedes-Benz G 450d",
    ref: "RC-G450D",
    status: "available",
    featured: true,
    make: "Mercedes-Benz",
    model: "G-Class",
    variant: "G 450d",
    body: "SUV",
    year: null,            // e.g. 2024
    mileage: null,         // e.g. 12000
    fuel: "Diesel",
    transmission: "Automatic",
    engine: null,          // e.g. "3.0L"
    drive: "4MATIC (AWD)",
    colour: null,          // e.g. "Blue metallic"
    importedFrom: null,    // e.g. "UK" or "Japan"
    priceTZS: null,        // e.g. 450000000
    priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/g450d/card.jpg",
    photos: [
      { src: "assets/img/cars/g450d/front.jpg", label: "Front" },
      { src: "assets/img/cars/g450d/side.jpg", label: "Side" },
      { src: "assets/img/cars/g450d/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/g450d/headlight.jpg", label: "Headlights" },
      { src: "assets/img/cars/g450d/cockpit.jpg", label: "Cockpit" },
      { src: "assets/img/cars/g450d/interior.jpg", label: "Interior" },
      { src: "assets/img/cars/g450d/dash.jpg", label: "Dash" },
      { src: "assets/img/cars/g450d/sill.jpg", label: "Door sills" },
      { src: "assets/img/cars/g450d/wheel.jpg", label: "Wheels" },
      { src: "assets/img/cars/g450d/rear-close.jpg", label: "Tailgate" },
      { src: "assets/img/cars/g450d/lights.jpg", label: "Night" },
      { src: "assets/img/cars/g450d/rear-far.jpg", label: "Showroom" }
    ],
    video: { src: "assets/video/walkaround-g450d.mp4", poster: "assets/video/walkaround-g450d.jpg" },
    about:
      "The icon, in a deep blue metallic finish. Chrome slatted grille, round LED headlights, " +
      "illuminated door sills and a full ambient-lit interior with quilted seats and the " +
      "widescreen digital cockpit. Come and see it in person at our Mikocheni showroom.",
    aboutSw:
      "Gari maarufu, rangi ya bluu ya metali. Grili ya chrome, taa za LED za duara, " +
      "vizingiti vya milango vinavyowaka na ndani yenye mwanga wa ambient, viti maridadi " +
      "na skrini pana ya kidijitali. Karibu uione mwenyewe showroom yetu Mikocheni.",
    condition: [
      "Inspected by our team before sale",
      "Ask us for the full inspection notes and service history"
    ]
  }

  /* ---- TEMPLATE: copy from the { to the } below, remove the slash-star lines ----
  ,{
    id: "toyota-landcruiser-v8-2018",
    ref: "RC-0143",
    status: "available",
    featured: false,
    make: "Toyota",
    model: "Land Cruiser",
    variant: "V8",
    body: "SUV",
    year: 2018,
    mileage: 62000,
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "4.5L",
    drive: "4WD",
    colour: "White",
    importedFrom: "Japan",
    priceTZS: 180000000,
    priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/landcruiser/card.jpg",
    photos: [
      { src: "assets/img/cars/landcruiser/front.jpg", label: "Front" }
    ],
    video: null,
    about: "Write two or three sentences here.",
    aboutSw: null,
    condition: ["Engine and gearbox checked", "Mileage verified from import documents"]
  }
  ---- END TEMPLATE ---- */
];

/* Showroom details — edit here */
window.RAKIN_INFO = {
  phone: "+255 689 091 111",
  whatsapp: "255689091111",        // digits only, with country code
  instagram: "rakincars.tz",
  address: "Mikocheni, Dar es Salaam, Tanzania",
  hours: "8:30 AM – 6:30 PM",      // e.g. "Mon–Sat · 8:30 AM – 6:30 PM"
  hoursSw: "Saa 2:30 asubuhi – Saa 12:30 jioni"
};

/* Customer reviews — only shown on the homepage once you add real ones.
   Example:
   { name: "Juma", car: "Toyota Prado TX-L", text: "Smooth process from viewing to registration.", photo: "assets/img/reviews/juma.jpg" }
*/
window.RAKIN_REVIEWS = [];
