# HEATER

> Identity, web, type — for things worth making.

A demo website for **HEATER**, a fictional multi-disciplinary creative studio in Mexico City. Five hand-coded HTML pages — chunky display type, multi-color palette, color blocks behind text, big rotated decoration, contemporary art studio energy.

**Live:** [heater-studio.vercel.app](https://heater-studio.vercel.app)

---

## The brief

The first three demos in this portfolio all converged on a "quiet premium" aesthetic — warm earthy palettes (cream, bone, oxblood), refined serif display fonts (Instrument Serif, Fraunces), restrained editorial layouts. Good for some clients. Wrong for others.

HEATER is the deliberate opposite. The challenge: build a creative-studio portfolio site that **looks like it was made by a creative studio** — confident, loud, contemporary art magazine, Memphis revival, not afraid of colour. While still doing the boring jobs every studio site has to do: show work, explain process, get inbound enquiries.

Aesthetic direction: cream paper background, **four bright accent colours used in rotation** (electric blue, hot magenta, butter yellow, acid lime), chunky display type (Boldonse), pixel-monospace accents (Space Mono), geometric shape decorations, color blocks behind text, rotated typography. The visual opposite of the warm-and-quiet design that's become default for "premium" web in 2026.

---

## Pages

| Page | Notes |
|---|---|
| **Home** (`/`) | Massive HEATER wordmark with shape decorations, marquee strip, four colored service cards, three featured projects, dark manifesto pull-quote, magenta big-CTA |
| **Work** (`/work.html`) | Page hero, filter chips (Identity/Web/Type/Photo/System), 9-project grid with colored duotone media, number indices, category tags |
| **Case study** (`/work/sunwheel.html`) | Full case for Sunwheel — hero with metadata table, big image, color-band sections (yellow/magenta/dark) with H3 + body, results numbers on dark, project navigation |
| **Studio** (`/studio.html`) | Manifesto + prose, 3-step process cards, 4-person team with colored avatar cards, awards & press list |
| **Contact** (`/contact.html`) | Direct contact info with PSA card, long-form pitch form with success state, Organization schema.org structured data |

Plus a sticky bordered header, a running marquee strip, a yellow color-block footer, a hidden brand mark watermark behind the footer, a mobile menu, and `.sr-only` accessibility helpers.

---

## Stack

- **HTML5** semantic
- **CSS** custom properties for the multi-color system, fluid type with `clamp()`, geometric shape decorations as pure CSS
- **Vanilla JS** (`main.js`) — about 50 lines, handles mobile nav, active link marking, work-filter chip state, form success transitions
- **Google Fonts** — Boldonse (display), Sora (body), Space Mono (data accent)
- **schema.org Organization** on the Contact page

Zero dependencies. The whole site is five HTML files, one CSS file, one JS file. No build step. Loads in well under a second on a 3G connection.

---

## Design system

| Token | Value |
|---|---|
| Background | `#FAFAF5` (cream paper) |
| Surface | `#F4F1E8` (off-cream) |
| Ink | `#0E0E14` |
| Accent — electric blue | `#1E5BFF` |
| Accent — hot magenta | `#FF2D7E` |
| Accent — butter yellow | `#FFE34D` |
| Accent — acid lime | `#C7FF1F` |
| Display | **Boldonse** (chunky display sans) |
| Body | **Sora** |
| Mono | **Space Mono** |

The four accent colors are used in **rotation** — never one dominant — to create the contemporary art studio feel. Service cards, manifesto, big CTAs, and the footer each carry a different color.

Full tokens in [`styles.css`](styles.css) under `:root`.

---

## Local development

```bash
git clone https://github.com/KlaosY/heater-studio.git
cd heater-studio
open index.html
```

Or with any static server:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

That's it.

---

## About

Designed and built by **[Klaos](https://github.com/KlaosY)** as a portfolio demo. Available for freelance work on creative agency websites, brand systems, and hand-coded marketing pages.

- 📨 [klaossy@gmail.com](mailto:klaossy@gmail.com)
- 🐙 [github.com/KlaosY](https://github.com/KlaosY)

---

## License

Code: [MIT](LICENSE) — fork, learn, remix. The brand "HEATER", the team bios, the project case studies (Sunwheel, Riff Records, etc.), and the copy are demo content for this portfolio piece; please don't pass them off as your own work.
