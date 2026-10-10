# Nur — Quran & Islamic Companion · Website

Official landing / marketing website for the **Nur** Quran & Islamic Companion mobile
app. Static, fast, mobile-first, and built with Next.js (App Router) + TypeScript.

---

## ⭐ The one edit you will need first

Open **`src/config/site.ts`** and replace:

```ts
export const DOWNLOAD_APP_URL = "YOUR_APK_DOWNLOAD_LINK";
```

with your real APK / download link. **Every** "Download App" button on the website
(hero, navbar, mobile menu, footer, final CTA) reads that single value — no button
stores its own URL.

Other values you will likely change in the same file:

| Key | What it controls |
| --- | --- |
| `APP_NAME`, `APP_TAGLINE`, `APP_DESCRIPTION` | Brand text + SEO description |
| `DOWNLOAD_APP_URL` | The one download link used everywhere |
| `CONTACT_EMAIL` | Contact page + footer (shows a notice until set) |
| `SITE_URL` | Canonical URL, Open Graph, sitemap, robots |
| `APP_SCREENSHOTS` | Screenshot files, labels and alt text |
| `FEATURES`, `ISLAMIC_TOOLS` | All feature / tool copy |
| `NAV_ITEMS` | Navbar + footer navigation |
| `SOCIAL_LINKS` | Empty = no social icons are rendered |
| `COOKIE_CONSENT.enabled` | Cookie banner (off: the site has no trackers) |
| `TESTIMONIALS` | Empty = the section is not rendered (no fake reviews) |

---

## Commands

```bash
npm install        # install dependencies
npm run dev        # development server → http://localhost:3000
npm run build      # production build → static site in ./out
npm run preview    # serve the built site → http://localhost:4173
npm run typecheck  # TypeScript check
```

`next.config.ts` uses `output: "export"`, so `npm run build` produces a plain
HTML/CSS/JS site in the **`out/`** folder that can be uploaded to any static host
or shared hosting (Apache/cPanel, Nginx, Netlify, Cloudflare Pages, GitHub Pages).
`trailingSlash: true` is enabled so `/privacy/` works on every host.
The build also runs `scripts/fix-segment-paths.mjs`, which repairs a known
Next.js 16 export quirk on Windows (vercel/next.js#92339) so page prefetches
never return 404.

---

## Adding your real app screenshots

1. Export portrait screenshots from your app (recommended **1080 × 2340** PNG/WebP).
2. Drop them into `public/app/screenshots/` using exactly these names:

   ```
   public/app/screenshots/home.png
   public/app/screenshots/quran.png
   public/app/screenshots/audio.png
   public/app/screenshots/tafsir.png
   public/app/screenshots/prayer.png
   public/app/screenshots/tools.png
   ```

3. Run the build.

Until a file exists, the site shows a clearly marked **"Placeholder — screenshot not
added yet"** frame (never a fake screenshot). Nothing else needs editing; the file
names live in `APP_SCREENSHOTS` inside `src/config/site.ts`.

---

## Structure

```
public/
  logo/            official logo artwork (logo.png, favicon.png, …)
  app/screenshots/ drop real app screenshots here
  fonts/           self-hosted woff2 fonts (generated)
  og/og-cover.png  social share image (generated)
src/
  config/site.ts   ★ central configuration — edit this first
  data/sample.ts   verified Quran sample (Tanzil Uthmani + Saheeh International)
  app/             pages: /, /privacy, /terms, /contact, 404, sitemap, robots
  components/      Navbar, Hero, Features, QuranSample, Footer, …
  styles/          design tokens (globals.css) + @font-face rules (fonts.css)
scripts/
  download-fonts.mjs     re-downloads the self-hosted fonts
  generate-sample.cjs    regenerates the Quran sample data
  make-og-image.ps1      regenerates the social share image
  fix-segment-paths.mjs  post-build fix for Next 16 RSC prefetch paths
  serve.cjs              static preview server for ./out
```

---

## Design & content notes

- **Logo** — the supplied artwork in `public/logo/logo.png` is used everywhere
  (navbar, hero poster, footer, favicon, social image). It is only scaled, never
  redrawn.
- **Colours** — sampled from the logo: deep green `#0B6B4F`, gold `#C9A85C`,
  warm ivory `#FAF9F6`, charcoal `#0A0F0D`.
- **Typography** — Source Serif 4 (headings), Source Sans 3 (UI),
  Amiri / Amiri Quran (Arabic & Quran text), all self-hosted, SIL OFL.
- **Quran content** — the reading preview uses verified text only:
  Uthmani script from [Tanzil.net](https://tanzil.net) and the Saheeh International
  translation, served by AlQuran Cloud. Nothing is AI-generated.
- **No fake claims** — no invented testimonials, ratings, user counts or store badges.
- **Accessibility** — semantic landmarks, skip link, visible focus states, keyboard
  mobile menu, `prefers-reduced-motion` support, WCAG-conscious contrast.

## Before publishing

1. Set `SITE_URL` to your real domain (affects canonical, Open Graph, sitemap).
2. Set `DOWNLOAD_APP_URL` and `CONTACT_EMAIL`.
3. Drop in real screenshots.
4. Have the Privacy Policy and Terms reviewed for your jurisdiction.
