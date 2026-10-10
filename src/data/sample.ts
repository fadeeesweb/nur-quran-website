/**
 * Verified sample content for the website.
 * Quran text (Uthmani script) from Tanzil.net, reproduced verbatim without modification.
 * English translation: Saheeh International.
 * Full-surah audio: Mishary Rashid Alafasy via AlQuran Cloud (cdn.islamic.network).
 * Both served by AlQuran Cloud (api.alquran.cloud) - the same provider the app uses.
 * Do not edit by hand; regenerate if replacement content is needed.
 */

export const SAMPLE_SURAH = {
  number: 1,
  nameAr: "سُورَةُ ٱلْفَاتِحَةِ",
  englishName: "Al-Faatiha",
  englishTranslation: "The Opening",
  revelationType: "Meccan",
  numberOfAyahs: 7,
} as const;

export const SAMPLE_AYAHS: { n: number; ar: string; en: string }[] = [
  {
    "n": 1,
    "ar": "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    "en": "In the name of Allah, the Entirely Merciful, the Especially Merciful."
  },
  {
    "n": 2,
    "ar": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
    "en": "[All] praise is [due] to Allah, Lord of the worlds -"
  },
  {
    "n": 3,
    "ar": "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    "en": "The Entirely Merciful, the Especially Merciful,"
  },
  {
    "n": 4,
    "ar": "مَٰلِكِ يَوْمِ ٱلدِّينِ",
    "en": "Sovereign of the Day of Recompense."
  },
  {
    "n": 5,
    "ar": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "en": "It is You we worship and You we ask for help."
  },
  {
    "n": 6,
    "ar": "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
    "en": "Guide us to the straight path -"
  },
  {
    "n": 7,
    "ar": "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
    "en": "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray."
  }
];

export const SAMPLE_AUDIO = {
  url: "https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3",
  reciter: "Mishary Rashid Alafasy",
} as const;

export const SAMPLE_SOURCES = {
  quranText: "Quran text (Uthmani script) from Tanzil.net, reproduced verbatim without modification.",
  translation: "English translation: Saheeh International.",
  audio: "Full-surah recitation by Mishary Rashid Alafasy.",
  provider: "Content served by AlQuran Cloud.",
} as const;
