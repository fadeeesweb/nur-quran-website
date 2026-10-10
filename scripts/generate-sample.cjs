/* Generates src/data/sample.ts from the verified AlQuran Cloud response files. */
const fs = require("node:fs");
const path = require("node:path");

const dir = path.join(require("os").tmpdir(), "opencode", "qurandata");
const ar = JSON.parse(fs.readFileSync(path.join(dir, "ar.json"), "utf8"));
const en = JSON.parse(fs.readFileSync(path.join(dir, "en.json"), "utf8"));

const clean = (s) =>
  s
    .replace(/^\uFEFF/, "")
    .replace(/[\u200E\u200F\u202A-\u202E]/g, "")
    .trim();

const ayahs = ar.data.ayahs.map((a, i) => ({
  n: a.numberInSurah,
  ar: clean(a.text),
  en: clean(en.data.ayahs[i].text),
}));

const out = `/**
 * Verified sample content for the website.
 * Quran text (Uthmani script) from Tanzil.net, reproduced verbatim without modification.
 * English translation: Saheeh International.
 * Both served by AlQuran Cloud (api.alquran.cloud) - the same provider the app uses.
 * Do not edit by hand; regenerate if replacement content is needed.
 */

export const SAMPLE_SURAH = {
  number: ${ar.data.number},
  nameAr: ${JSON.stringify(clean(ar.data.name))},
  englishName: ${JSON.stringify(ar.data.englishName)},
  englishTranslation: ${JSON.stringify(ar.data.englishNameTranslation)},
  revelationType: ${JSON.stringify(ar.data.revelationType)},
  numberOfAyahs: ${ar.data.numberOfAyahs},
} as const;

export const SAMPLE_AYAHS: { n: number; ar: string; en: string }[] = ${JSON.stringify(ayahs, null, 2)};

export const SAMPLE_SOURCES = {
  quranText: "Quran text (Uthmani script) from Tanzil.net, reproduced verbatim without modification.",
  translation: "English translation: Saheeh International.",
  provider: "Content served by AlQuran Cloud.",
} as const;
`;

fs.mkdirSync(path.join(process.cwd(), "src", "data"), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), "src", "data", "sample.ts"), out, "utf8");
console.log("src/data/sample.ts written:", out.length, "bytes");
