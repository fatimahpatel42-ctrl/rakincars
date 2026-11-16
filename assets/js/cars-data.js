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
    condition: ["3.0L V6 Petrol Engine", "Automatic Transmission", "Black Exterior", "Black Leather Interior", "7 Seats", "Ambient Interior Lighting", "Premium Specification", "Excellent Condition"]
  },
  {
    id: "mercedes-s400-white",
    name: "Mercedes-Benz S400 L",
    ref: "RC-S400L-W",
    status: "available",
    featured: true,
    make: "Mercedes-Benz",
    model: "S-Class",
    variant: "S400 L",
    body: "Sedan",
    year: 2016, mileage: null, fuel: "Petrol", transmission: "Automatic", engine: null, drive: null,
    colour: "White",
    importedFrom: null,
    priceTZS: 80000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/mercedes-s400-white/card.jpg",
    photos: [
      { src: "assets/img/cars/mercedes-s400-white/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/mercedes-s400-white/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/mercedes-s400-white/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/mercedes-s400-white/dash.jpg", label: "Dashboard" },
      { src: "assets/img/cars/mercedes-s400-white/rear-seats.jpg", label: "Rear seats" }
    ],
    video: null,
    about: "2016 Mercedes-Benz S400 L in white, the long-wheelbase S-Class. Petrol engine with automatic transmission, black luxury leather seats for 5 and ambient interior lighting, in excellent condition. Come and see it at our Mikocheni showroom.",
    aboutSw: "Mercedes-Benz S400 L ya 2016, rangi nyeupe, S-Class ndefu. Injini ya petroli na gia za automatic, viti 5 vya ngozi nyeusi vya kifahari na taa za ambient ndani. Iko katika hali nzuri sana. Karibu uione showroom yetu Mikocheni.",
    condition: ["Year: 2016", "Engine: Petrol", "Exterior Color: White", "Interior: Black Leather", "Seating Capacity: 5", "Luxury Leather Seats", "Ambient Interior Lighting", "Automatic Transmission", "Excellent Condition"]
  },
  {
    id: "toyota-land-cruiser-200-zx-white",
    name: "Toyota Land Cruiser 200 ZX",
    ref: "RC-LC200-ZX",
    status: "available",
    featured: true,
    make: "Toyota",
    model: "Land Cruiser 200",
    variant: "ZX V8",
    body: "SUV",
    year: 2017, mileage: null, fuel: "Petrol", transmission: "Automatic", engine: "4.6L V8 (1UR)", drive: "4WD",
    colour: "White",
    importedFrom: null,
    priceTZS: 200000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/lc200-zx-white/card.jpg",
    photos: [
      { src: "assets/img/cars/lc200-zx-white/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/lc200-zx-white/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/lc200-zx-white/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/lc200-zx-white/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/lc200-zx-white/dash.jpg", label: "Dashboard" },
      { src: "assets/img/cars/lc200-zx-white/rear-seats.jpg", label: "Rear seats" }
    ],
    video: null,
    about: "2017 Toyota Land Cruiser 200 ZX in white with the 4.6L V8 petrol engine (1UR) and automatic transmission. Black leather interior with 7 seats, sunroof, chrome grille, LED fog lights and side steps, in excellent condition. Come and see it at our Mikocheni showroom.",
    aboutSw: "Toyota Land Cruiser 200 ZX ya 2017, rangi nyeupe, injini ya petroli V8 lita 4.6 (1UR) na gia za automatic. Ndani ya ngozi nyeusi yenye viti 7, sunroof, grili ya chrome na taa za ukungu za LED. Iko katika hali nzuri sana. Karibu uione showroom yetu Mikocheni.",
    condition: ["Year: 2017", "Engine: 4.6L Petrol (1UR)", "Exterior Color: White", "Interior: Black Leather", "Seating Capacity: 7", "Sunroof", "Automatic Transmission", "Excellent Condition"]
  },
  {
    id: "toyota-vellfire-2010-white",
    name: "Toyota Vellfire",
    ref: "RC-VELL-W",
    status: "available",
    featured: true,
    make: "Toyota",
    model: "Vellfire",
    variant: "Vellfire",
    body: "Van",
    year: 2010, mileage: null, fuel: "Petrol", transmission: "Automatic", engine: "2.4L (2AZ)", drive: null,
    colour: "White",
    importedFrom: null,
    priceTZS: 27000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/vellfire-2010-white/card.jpg",
    photos: [
      { src: "assets/img/cars/vellfire-2010-white/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/vellfire-2010-white/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/vellfire-2010-white/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/vellfire-2010-white/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/vellfire-2010-white/dash.jpg", label: "Dashboard" },
      { src: "assets/img/cars/vellfire-2010-white/captain-seats.jpg", label: "Captain seats" }
    ],
    video: null,
    about: "2010 Toyota Vellfire in white with a 2.4L petrol engine (2AZ) and automatic transmission. Luxury captain seats with ottoman footrests, wood-trim dashboard and a premium, spacious interior for the whole family, in excellent condition. Come and see it at our Mikocheni showroom.",
    aboutSw: "Toyota Vellfire ya 2010, rangi nyeupe, injini ya petroli lita 2.4 (2AZ) na gia za automatic. Ina viti vya kifahari vya captain, dashibodi yenye mapambo ya mbao na nafasi kubwa kwa familia nzima. Iko katika hali nzuri sana. Karibu uione showroom yetu Mikocheni.",
    condition: ["2.4L Petrol (2AZ) Engine", "Automatic Transmission", "White Exterior", "Luxury Captain Seats", "Premium Interior", "Excellent Condition"]
  },
  {
    id: "toyota-land-cruiser-300-zx-2023-white",
    name: "Toyota Land Cruiser 300 ZX",
    ref: "RC-LC300-ZX23",
    status: "available",
    featured: true,
    make: "Toyota",
    model: "Land Cruiser 300",
    variant: "ZX",
    body: "SUV",
    year: 2023, mileage: null, fuel: "Petrol", transmission: "Automatic", engine: "3.5L V6 Twin-Turbo", drive: "4WD",
    colour: "White",
    importedFrom: null,
    priceTZS: 288000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/lc300-zx-2023-white/card.jpg",
    photos: [
      { src: "assets/img/cars/lc300-zx-2023-white/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/lc300-zx-2023-white/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/lc300-zx-2023-white/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/lc300-zx-2023-white/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/lc300-zx-2023-white/dash.jpg", label: "Dashboard" },
      { src: "assets/img/cars/lc300-zx-2023-white/rear-seats.jpg", label: "Rear seats" }
    ],
    video: null,
    about: "2023 Toyota Land Cruiser 300 ZX in white with the 3.5L V6 twin-turbo petrol engine, automatic transmission and 4WD. Beige leather interior with 7 seats, electric sunroof, JBL premium sound, electric adjustable seats, LED headlights, parking sensors and reverse camera. Price is plus registration. Ask us for more pictures.",
    aboutSw: "Toyota Land Cruiser 300 ZX ya 2023, rangi nyeupe, injini ya petroli V6 twin-turbo lita 3.5, gia za automatic na 4WD. Ndani ya ngozi rangi ya krimu yenye viti 7, sunroof ya umeme, sauti ya JBL, viti vya umeme, taa za LED, sensa za maegesho na kamera ya nyuma. Bei haijumuishi usajili. Tuulize kwa picha zaidi.",
    condition: ["3.5L V6 Twin-Turbo Petrol Engine", "Automatic Transmission", "4WD – Four Wheel Drive", "White Exterior", "Beige Leather Interior", "7 Seats", "Electric Sunroof", "JBL Premium Sound System", "Electric Adjustable Seats", "LED Headlights", "Alloy Wheels", "Front & Rear Parking Sensors", "Reverse Camera", "Premium ZX Specification"]
  },
  {
    id: "range-rover-vogue-lwb-sdv8-black",
    name: "Range Rover Vogue LWB SDV8",
    ref: "RC-RRV-LWB",
    status: "available",
    featured: true,
    make: "Land Rover",
    model: "Range Rover",
    variant: "Vogue LWB SDV8",
    body: "SUV",
    year: null, mileage: null, fuel: "Diesel", transmission: "Automatic", engine: "4.4L V8 Twin-Turbo (SDV8)", drive: "4WD",
    colour: "Metallic black",
    importedFrom: null,
    priceTZS: 90000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/range-rover-vogue-lwb-black/card.jpg",
    photos: [
      { src: "assets/img/cars/range-rover-vogue-lwb-black/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/range-rover-vogue-lwb-black/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/range-rover-vogue-lwb-black/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/range-rover-vogue-lwb-black/dash.jpg", label: "Dashboard" },
      { src: "assets/img/cars/range-rover-vogue-lwb-black/rear-seats.jpg", label: "Rear seats" }
    ],
    video: null,
    about: "Range Rover Vogue Long Wheelbase SDV8 in metallic black, with the 4.4L V8 twin-turbo diesel, automatic transmission, 4WD and air suspension. A luxury 5-seater with premium leather, panoramic sunroof and generous executive rear legroom. Registered (DUK). Come and see it at our Mikocheni showroom.",
    aboutSw: "Range Rover Vogue Long Wheelbase SDV8 rangi nyeusi ya metali, injini ya dizeli V8 twin-turbo lita 4.4, gia za automatic, 4WD na air suspension. Viti 5 vya ngozi ya kifahari, sunroof kubwa na nafasi ya ziada nyuma. Imesajiliwa (DUK). Karibu uione showroom yetu Mikocheni.",
    condition: ["4.4L V8 Twin-Turbo Diesel Engine", "Automatic Transmission", "4WD – Four Wheel Drive", "Long Wheelbase (LWB)", "Metallic Black Exterior", "Luxury 5-Seater SUV", "Premium Leather Interior", "Panoramic Sunroof", "Air Suspension", "LED Daytime Running Lights", "Premium Alloy Wheels", "Front & Rear Parking Sensors", "Luxury Executive Comfort", "Registration: DUK"]
  },
  {
    id: "toyota-harrier-z-2021-black",
    name: "Toyota Harrier Z Package",
    ref: "RC-HARR-Z21",
    status: "available",
    featured: true,
    make: "Toyota",
    model: "Harrier",
    variant: "Z Package",
    body: "SUV",
    year: 2021, mileage: null, fuel: "Petrol", transmission: "Automatic", engine: "2.0L", drive: null,
    colour: "Black",
    importedFrom: null,
    priceTZS: 80000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/harrier-2021-black/card.jpg",
    photos: [
      { src: "assets/img/cars/harrier-2021-black/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/harrier-2021-black/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/harrier-2021-black/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/harrier-2021-black/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/harrier-2021-black/dash.jpg", label: "Dashboard" }
    ],
    video: null,
    about: "2021 Toyota Harrier Z Package in black with a 2.0L petrol engine and automatic transmission. A 5-seater luxury SUV with premium leather seats, JBL premium sound, LED headlights and daytime running lights, alloy wheels and premium interior finishing, in excellent condition. Price is plus registration. Ask us for more pictures.",
    aboutSw: "Toyota Harrier Z Package ya 2021, rangi nyeusi, injini ya petroli lita 2.0 na gia za automatic. SUV ya kifahari ya viti 5 yenye viti vya ngozi, sauti ya JBL, taa za LED, magurudumu ya alloy na ndani ya hadhi ya juu. Iko katika hali nzuri sana. Bei haijumuishi usajili. Tuulize kwa picha zaidi.",
    condition: ["2.0L Petrol Engine", "Automatic Transmission", "Black Exterior", "Premium Leather Seats", "JBL Premium Sound System", "5 Seater Luxury SUV", "LED Headlights & Daytime Running Lights", "Alloy Wheels", "Multifunction Steering Wheel", "Premium Interior Finishing", "Excellent Condition"]
  },
  {
    id: "mercedes-gle300d-amg-line-2020-black",
    name: "Mercedes-Benz GLE 300d AMG Line",
    ref: "RC-GLE300D-20",
    status: "available",
    featured: true,
    make: "Mercedes-Benz",
    model: "GLE",
    variant: "GLE 300d AMG Line",
    body: "SUV",
    year: 2020, mileage: null, fuel: "Diesel", transmission: "9-speed automatic", engine: "2.0L Turbo Diesel", drive: "4MATIC (AWD)",
    colour: "Black",
    importedFrom: null,
    priceTZS: 165000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/gle300d-2020-black/card.jpg",
    photos: [
      { src: "assets/img/cars/gle300d-2020-black/showroom.jpg", label: "Showroom" },
      { src: "assets/img/cars/gle300d-2020-black/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/gle300d-2020-black/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/gle300d-2020-black/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/gle300d-2020-black/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/gle300d-2020-black/dash.jpg", label: "Dashboard" }
    ],
    video: null,
    about: "2020 Mercedes-Benz GLE 300d AMG Line in black with a 2.0L turbo diesel, 9-speed automatic and 4MATIC all-wheel drive. AMG Line exterior and AMG alloys, LED headlights, sunroof, premium leather and electric adjustable seats, and the widescreen digital cockpit, in excellent condition. Price is plus registration.",
    aboutSw: "Mercedes-Benz GLE 300d AMG Line ya 2020, rangi nyeusi, injini ya dizeli turbo lita 2.0, gia 9 za automatic na 4MATIC. Ina muonekano wa AMG Line, magurudumu ya AMG, taa za LED, sunroof, viti vya ngozi vya umeme na skrini pana ya kidijitali. Iko katika hali nzuri sana. Bei haijumuishi usajili.",
    condition: ["2.0L Turbo Diesel Engine", "9-Speed Automatic Transmission", "4MATIC All-Wheel Drive", "Black Exterior", "Premium Leather Seats", "Sunroof", "AMG Line Exterior Package", "AMG Alloy Wheels", "LED Headlights", "Premium Luxury Interior", "Multifunction Steering Wheel", "Electric Adjustable Seats", "Excellent Condition"]
  },
  {
    id: "mercedes-g350d-2022-black",
    name: "Mercedes-Benz G350d",
    ref: "RC-G350D-22",
    status: "available",
    featured: true,
    make: "Mercedes-Benz",
    model: "G-Class",
    variant: "G350d",
    body: "SUV",
    year: 2022, mileage: 5000, fuel: "Diesel", transmission: "9G-TRONIC automatic", engine: "3.0L 6-cylinder turbo diesel", drive: "4MATIC (AWD)",
    colour: "Glossy black",
    importedFrom: null,
    priceTZS: 435000000, priceUSD: null,
    tradeIn: true,
    cardImage: "assets/img/cars/g350d-2022-black/card.jpg",
    photos: [
      { src: "assets/img/cars/g350d-2022-black/front.jpg", label: "Front 3/4" },
      { src: "assets/img/cars/g350d-2022-black/front-side.jpg", label: "Front" },
      { src: "assets/img/cars/g350d-2022-black/rear-side.jpg", label: "Rear 3/4" },
      { src: "assets/img/cars/g350d-2022-black/rear.jpg", label: "Rear" },
      { src: "assets/img/cars/g350d-2022-black/dash.jpg", label: "Dashboard" },
      { src: "assets/img/cars/g350d-2022-black/rear-seats.jpg", label: "Rear seats" }
    ],
    video: null,
    about: "2022 Mercedes-Benz G350d in glossy black with only 5,000 km. 3.0L six-cylinder turbo diesel, 9G-TRONIC automatic and 4MATIC, with electric sunroof, LED headlights, premium alloys, side running boards, parking sensors and ambient-lit interior. Like brand new. Price is plus registration.",
    aboutSw: "Mercedes-Benz G350d ya 2022, rangi nyeusi ing'aayo, imetembea km 5,000 tu. Injini ya dizeli turbo silinda 6 lita 3.0, gia za 9G-TRONIC na 4MATIC, sunroof ya umeme, taa za LED, magurudumu ya kifahari, ngazi za pembeni na sensa za maegesho. Kama mpya kabisa. Bei haijumuishi usajili.",
    condition: ["3.0L 6-Cylinder Turbo Diesel Engine", "9G-TRONIC Automatic Transmission", "4MATIC All-Wheel Drive", "Glossy Black Exterior", "Luxury 5-Seater SUV", "Electric Sunroof", "LED Headlights", "Premium Alloy Wheels", "Side Running Boards", "Front & Rear Parking Sensors", "Legendary G-Class Design", "Mileage: Only 5,000 KM", "Like Brand New Condition"]
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
