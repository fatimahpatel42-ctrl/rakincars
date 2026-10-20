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
    status    "available" | "sale" (On sale) | "reserved" | "sold" | "arriving"
    make, model, variant
    body      "SUV" | "Sedan" | "Pickup" | "Hatchback" | "Coupe" | "Van"
    year, mileage (km, number), fuel, transmission, engine, drive, colour, importedFrom
    priceTZS  number, e.g. 385000000  — or null to show "Price on request"
    priceUSD  number or null (optional)
    wasTZS    optional old price for cars "On sale", e.g. 420000000 — shown crossed out
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
      { src: "assets/img/cars/g450d/showroom.jpg", label: "Showroom" },
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
      { src: "assets/img/cars/g450d/rear-far.jpg", label: "Rear view" }
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
,
  {
    id: "toyota-land-cruiser-300-champagne",
    name: "Toyota Land Cruiser 300",
    ref: "RC-LC300-C",
    status: "available",
    featured: true,
    make: "Toyota",
    model: "Land Cruiser 300",
    variant: "Land Cruiser 300",
    body: "SUV",
    year: null, mileage: null, fuel: null, transmission: "Automatic", engine: null, drive: "4WD",
    colour: "Champagne beige",
    importedFrom: null,
    priceTZS: null, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/lc300-champagne/card.jpg",
    photos: [
      { src: "assets/img/cars/lc300-champagne/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/lc300-champagne/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/lc300-champagne/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/lc300-champagne/dash.jpg", label: "Dashboard" }
    ],
    video: null,
    about: "The latest-generation Land Cruiser 300 in an elegant champagne finish. Chrome grille, LED lighting and the full-width infotainment screen, with the legendary Land Cruiser toughness underneath. Ask us for the full specification.",
    aboutSw: "Land Cruiser 300 ya kizazi kipya, rangi ya champagne. Grili ya chrome, taa za LED na skrini pana ya kisasa, pamoja na uimara maarufu wa Land Cruiser. Tuulize kwa maelezo kamili.",
    condition: ["Inspected by our team before sale", "Ask us for the full inspection notes"]
  },
  {
    id: "toyota-land-cruiser-300-white",
    name: "Toyota Land Cruiser 300",
    ref: "RC-LC300-W",
    status: "available",
    featured: true,
    make: "Toyota",
    model: "Land Cruiser 300",
    variant: "Land Cruiser 300",
    body: "SUV",
    year: null, mileage: null, fuel: null, transmission: "Automatic", engine: null, drive: "4WD",
    colour: "Pearl white",
    importedFrom: null,
    priceTZS: null, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/lc300-white/card.jpg",
    photos: [
      { src: "assets/img/cars/lc300-white/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/lc300-white/rear.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/lc300-white/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/lc300-white/front-seats.jpg", label: "Front seats" },
      { src: "assets/img/cars/lc300-white/rear-seats.jpg", label: "Rear seats" },
      { src: "assets/img/cars/lc300-white/engine.jpg", label: "Engine" }
    ],
    video: null,
    about: "Land Cruiser 300 in pearl white with a light beige leather interior. Chrome grille, two-tone alloys and a spacious, practical cabin for the whole family. Ask us for the full specification.",
    aboutSw: "Land Cruiser 300 rangi nyeupe ya lulu, ndani ina viti vya ngozi rangi ya krimu. Grili ya chrome na nafasi kubwa kwa familia nzima. Tuulize kwa maelezo kamili.",
    condition: ["Inspected by our team before sale", "Ask us for the full inspection notes"]
  },
  {
    id: "toyota-land-cruiser-300-gr-sport",
    name: "Toyota Land Cruiser 300 GR Sport",
    ref: "RC-LC300-GR",
    status: "available",
    featured: true,
    make: "Toyota",
    model: "Land Cruiser 300",
    variant: "GR Sport",
    body: "SUV",
    year: null, mileage: null, fuel: null, transmission: "Automatic", engine: null, drive: "4WD",
    colour: "Black",
    importedFrom: null,
    priceTZS: null, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/lc300-gr-sport/card.jpg",
    photos: [
      { src: "assets/img/cars/lc300-gr-sport/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/lc300-gr-sport/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/lc300-gr-sport/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/lc300-gr-sport/seats.jpg", label: "Seats" },
      { src: "assets/img/cars/lc300-gr-sport/cockpit.jpg", label: "Cockpit" }
    ],
    video: null,
    about: "The sporty Land Cruiser 300 GR Sport in black: the bold TOYOTA-lettered grille, black alloys, GR badging and a dark leather interior. A head-turner that's still a true Land Cruiser off the road. Ask us for the full specification.",
    aboutSw: "Land Cruiser 300 GR Sport rangi nyeusi: grili yenye maandishi TOYOTA, magurudumu meusi, nembo ya GR na ndani ya ngozi nyeusi. Tuulize kwa maelezo kamili.",
    condition: ["Inspected by our team before sale", "Ask us for the full inspection notes"]
  },
  {
    id: "audi-q7-black",
    name: "Audi Q7",
    ref: "RC-Q7-BLK",
    status: "available",
    featured: true,
    make: "Audi",
    model: "Q7",
    variant: "Q7",
    body: "SUV",
    year: 2017, mileage: null, fuel: "Petrol", transmission: "Automatic", engine: "3.0L V6", drive: "quattro (AWD)",
    colour: "Black",
    importedFrom: null,
    priceTZS: 100000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/audi-q7-black/card.jpg",
    photos: [
      { src: "assets/img/cars/audi-q7-black/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/audi-q7-black/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/audi-q7-black/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/audi-q7-black/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/audi-q7-black/dash.jpg", label: "Dashboard" }
    ],
    video: null,
    about: "2017 Audi Q7 in black with a 3.0L V6 petrol engine and automatic transmission. Premium specification with black leather interior, 7 seats and ambient interior lighting, in excellent condition. Come and see it at our Mikocheni showroom.",
    aboutSw: "Audi Q7 ya 2017, rangi nyeusi, injini ya petroli V6 lita 3.0 na gia za automatic. Ina viti 7 vya ngozi nyeusi, taa za ambient ndani na vipengele vya hadhi ya juu. Iko katika hali nzuri sana. Karibu uione showroom yetu Mikocheni.",
    condition: ["Excellent condition", "Inspected by our team before sale", "Ask us for the full inspection notes"]
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
  address: "Mwai Kibaki Road, Mikocheni, Dar es Salaam, Tanzania",
  hours: "8:30 AM – 6:30 PM",      // e.g. "Mon–Sat · 8:30 AM – 6:30 PM"
  hoursSw: "Saa 2:30 asubuhi – Saa 12:30 jioni"
};

/* Customer reviews — only shown on the homepage once you add real ones.
   Example:
   { name: "Juma", car: "Toyota Prado TX-L", text: "Smooth process from viewing to registration.", photo: "assets/img/reviews/juma.jpg" }
*/
window.RAKIN_REVIEWS = [];
