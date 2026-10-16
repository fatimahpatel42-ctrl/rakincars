# Rakin Cars website

A fast, phone-friendly website for **rakincars.com**. No database, no monthly fees:
just these files, hosted free on Netlify.

```
index.html        Homepage
cars.html         All cars (with Make / Body / Price filters)
car.html          One page per car  (car.html?id=mercedes-g450d)
assets/js/cars-data.js   <- THE STOCK LIST. Edit this to add/sell cars.
assets/img/cars/  Car photos (one folder per car)
assets/video/     Hero loop + walkaround videos
```

---

## 1. Put it online (Netlify, free, about 5 minutes)

1. Go to **app.netlify.com/drop** and create a free account (email or Google).
2. Drag the whole **rakincars-site** folder onto the page.
3. Netlify gives you a test address like `something-123.netlify.app`. Open it and check everything works.
4. In Netlify: **Site configuration → Change site name**, e.g. `rakincars` → `rakincars.netlify.app`.

## 2. Connect rakincars.com (GoDaddy)

**First remove the WhatsApp forwarding** if you set one up:
GoDaddy → Domain Portfolio → rakincars.com → **DNS → Forwarding** → delete it.
(Forwarding locks the main record, so this step is required.)

Then:

1. In Netlify: **Domain management → Add a domain** → type `rakincars.com` → confirm.
   Netlify will add `www.rakincars.com` too.
2. In GoDaddy → rakincars.com → **DNS → DNS Records**, set these two records
   (edit the existing ones if they're already there; delete any other `A` record on `@`):

| Type  | Name | Value                              |
|-------|------|------------------------------------|
| A     | @    | `75.2.60.5`                        |
| CNAME | www  | `rakincars.netlify.app` (your Netlify address) |

3. Wait. It's usually live within an hour, but can take up to 24 hours.
4. Back in Netlify → **Domain management → HTTPS** → it issues the free certificate
   (the padlock) automatically once the domain is connected. Click "Verify DNS" if asked.

## 3. Add, update or sell a car

Everything is in **assets/js/cars-data.js**. Open it in any text editor (Notepad, TextEdit, VS Code).

- **Add a car:** copy the TEMPLATE block at the bottom, fill it in, and put the photos in a new
  folder like `assets/img/cars/landcruiser-2018/`.
- **Show the price:** change `priceTZS: null` to a number, e.g. `priceTZS: 450000000`.
  While it's `null` the site shows "Price on request".
- **Mark as sold:** `status: "sold"`. Other options: `"available"`, `"reserved"`, `"arriving"`.
- **Opening hours:** fill in `hours` / `hoursSw` in `RAKIN_INFO` near the bottom of the file.
- **Reviews:** add real ones to `RAKIN_REVIEWS`; the "Happy customers" section appears automatically.

Then drag the folder onto Netlify again: **Deploys → drag and drop** (it replaces the old version).

### Photo tips
- Landscape photos (4:3) look best on the listing cards → name it `card.jpg`.
- Any shape works for the gallery. Keep each photo under ~400 KB (resize to ~1200 px wide).

## 4. Still to fill in for the G 450d
In `cars-data.js`: `year`, `mileage`, `engine`, `colour`, `importedFrom`, `priceTZS`,
and a couple of honest `condition` notes. Anything left as `null` stays hidden.

## 5. Exact map pin
The map shows Mikocheni in general. For the exact showroom pin: Google Maps → search the
showroom → **Share → Embed a map** → copy the link inside `src="..."` → paste it into the
`<iframe src="...">` in **index.html** (search for "Rakin Cars on the map").

## Languages
The **Kiswahili** button switches the whole site. The Swahili text was written for you;
please have someone at Rakin read it once and correct anything that sounds unnatural
(edit the `sw:` section in `assets/js/app.js`).
