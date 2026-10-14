/**
 * ============================================================================
 *  CENTRAL WEBSITE CONFIGURATION
 * ============================================================================
 *  Every important, editable value for this website lives in this one file.
 *  Change the values below and the whole site updates on the next build.
 *
 *  The most important value is DOWNLOAD_APP_URL (line ~40). Every "Download
 *  App" button on the website reads from that single value.
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/*  1. APP IDENTITY                                                            */
/* -------------------------------------------------------------------------- */

export const APP_NAME = "Nur";
export const APP_FULL_NAME = "Nur — Quran & Islamic Companion";
export const APP_TAGLINE = "Your Quran. Your Daily Connection.";
export const APP_SUB_TAGLINE = "Quran and Islamic companion";

export const APP_DESCRIPTION =
  "Nur is a calm Quran and Islamic companion app. Read the Quran with translations, listen to recitations, study tafsir, and keep prayer times, Qibla, azkar and daily Islamic tools in one peaceful place.";

/* -------------------------------------------------------------------------- */
/*  2. APP DOWNLOAD  ***  EDIT THIS LINE LATER  ***                            */
/* -------------------------------------------------------------------------- */

/**
 * Replace the value below with your real APK / download link.
 * Every "Download App" button on the website uses this single value.
 *
 * While it still says "YOUR_..." the buttons stay visible and styled, but
 * they simply do not point anywhere real yet.
 */
export const DOWNLOAD_APP_URL = "/Nur-1.0.2.apk";

/** Must match `basePath` in next.config.ts ("" when served from a domain root). */
export const BASE_PATH = "/nur-quran-website";

/**
 * Prefixes in-site paths with the deployment basePath (GitHub Pages project
 * site lives under /<repo>/). External http(s) links pass through unchanged.
 */
export const withBasePath = (path: string): string =>
  /^https?:\/\//i.test(path) ? path : `${BASE_PATH}${path}`;

/** Returns true once a real download link has been configured. */
export const isDownloadConfigured = (): boolean =>
  DOWNLOAD_APP_URL.trim().length > 0 && !DOWNLOAD_APP_URL.startsWith("YOUR_");

/**
 * Live download counter (free public CountAPI — no signup, no keys).
 * Every "Download App" click increments this counter; the hero shows the
 * running total. Counts are public — never store anything sensitive here.
 * Change `key` any time to start a fresh counter.
 */
export const DOWNLOAD_COUNTER_API = "https://countapi.mileshilliard.com/api/v1";
export const DOWNLOAD_COUNTER_KEY = "nur_quran_app_downloads_v1";

/* -------------------------------------------------------------------------- */
/*  3. WEBSITE / SEO                                                           */
/* -------------------------------------------------------------------------- */

/** Production domain, without a trailing slash. Used for canonical + OG tags. */
export const SITE_URL = "https://fadeeesweb.github.io";

export const SITE_TITLE = "Nur — Quran & Islamic Companion App";
export const SITE_TITLE_TEMPLATE = "%s — Nur";
export const SITE_KEYWORDS = [
  "Quran app",
  "Quran reading app",
  "Quran with translation",
  "Quran recitation",
  "Islamic app",
  "Quran tafsir app",
  "prayer times app",
];

/* -------------------------------------------------------------------------- */
/*  4. CONTACT & LEGAL LINKS                                                   */
/* -------------------------------------------------------------------------- */

/** Replace with your real contact email address. */
export const CONTACT_EMAIL = "YOUR_EMAIL_HERE";

export const CONTACT_PAGE_PATH = "/contact/";
export const PRIVACY_PAGE_PATH = "/privacy/";
export const TERMS_PAGE_PATH = "/terms/";

/** Shown on the contact page while no real email address is configured. */
export const isContactConfigured = (): boolean =>
  CONTACT_EMAIL.trim().length > 0 && !CONTACT_EMAIL.startsWith("YOUR_");

/**
 * Social profiles. Leave the array empty and no social icons are rendered.
 * Example entry: { label: "X", href: "https://x.com/yourhandle" }
 */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

/* -------------------------------------------------------------------------- */
/*  5. COOKIE CONSENT                                                          */
/* -------------------------------------------------------------------------- */

/**
 * This website ships with NO analytics, NO trackers and NO advertising
 * cookies, so the consent banner is disabled by default.
 *
 * If you later add analytics / marketing cookies, set `enabled` to true and
 * the consent banner appears automatically.
 */
export const COOKIE_CONSENT = {
  enabled: false,
  text: "We use essential cookies to make this website work. With your permission, we may also use analytics cookies to understand how the site is used.",
  acceptLabel: "Accept",
  declineLabel: "Decline",
  privacyPath: PRIVACY_PAGE_PATH,
} as const;

/* -------------------------------------------------------------------------- */
/*  6. NAVIGATION                                                              */
/* -------------------------------------------------------------------------- */

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Quran", href: "/#quran" },
  { label: "Recitations", href: "/#recitations" },
  { label: "Tafsir", href: "/#tafsir" },
  { label: "Islamic Tools", href: "/#tools" },
];

/* -------------------------------------------------------------------------- */
/*  7. APP SCREENSHOTS                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Drop your real screenshots into:   public/app/screenshots/
 * using the file names listed below, then rebuild the site.
 *
 * Until a file exists, a clearly marked placeholder frame is shown instead —
 * no fake screenshots are ever rendered.
 *
 * Recommended size: 1080 x 2340 (portrait phone screenshot), PNG or WebP.
 */
export type AppScreenshot = {
  /** Used in code — keep stable. */
  key: string;
  /** Path relative to the public/ folder. */
  file: string;
  /** Visible label. */
  label: string;
  /** Descriptive alt text for accessibility. */
  alt: string;
};

export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    key: "home",
    file: "app/screenshots/home.webp",
    label: "Home",
    alt: "Nur app home dashboard screenshot",
  },
  {
    key: "quran",
    file: "app/screenshots/quran.webp",
    label: "Quran reading",
    alt: "Nur app Quran reading screen screenshot",
  },
  {
    key: "audio",
    file: "app/screenshots/audio.webp",
    label: "Audio",
    alt: "Nur app recitation audio player screenshot",
  },
  {
    key: "tafsir",
    file: "app/screenshots/tafsir.webp",
    label: "Tafsir",
    alt: "Nur app tafsir screen screenshot",
  },
  {
    key: "prayer",
    file: "app/screenshots/prayer.webp",
    label: "Prayer times",
    alt: "Nur app prayer times screen screenshot",
  },
  {
    key: "tools",
    file: "app/screenshots/tools.webp",
    label: "Islamic tools",
    alt: "Nur app Islamic tools screen screenshot",
  },
];

/* -------------------------------------------------------------------------- */
/*  8. FEATURES                                                                */
/* -------------------------------------------------------------------------- */

export type Feature = {
  id: string;
  title: string;
  description: string;
  /** Icon key resolved in src/components/FeatureIcons.tsx */
  icon: string;
};

/** Only features that actually exist in the Nur app are listed here. */
export const FEATURES: Feature[] = [
  {
    id: "reading",
    title: "Quran Reading",
    description:
      "All 114 surahs in a clean, distraction-free reading page with adjustable Arabic and translation size, line spacing and reading themes.",
    icon: "book",
  },
  {
    id: "translations",
    title: "Translations",
    description:
      "Understand verses with bundled translations, including Saheeh International in English and Fateh Muhammad Jalandhry in Urdu.",
    icon: "languages",
  },
  {
    id: "recitations",
    title: "Quran Recitations",
    description:
      "Listen ayah by ayah with reciters such as Alafasy, Abdul Basit and Al-Husary. Repeat ayah or surah, change speed, and download for offline listening.",
    icon: "headphones",
  },
  {
    id: "tafsir",
    title: "Tafsir",
    description:
      "Open trusted commentary when you want more context: Ibn Kathir (Muyassar), Al-Jalalayn, Al-Qurtubi, Al-Misbah Al-Munir, Al-Wasit and Al-Baghawi.",
    icon: "scroll",
  },
  {
    id: "bookmarks",
    title: "Bookmarks & Notes",
    description:
      "Mark the verses that matter, keep private notes on them, and return whenever you are ready.",
    icon: "bookmark",
  },
  {
    id: "search",
    title: "Search",
    description:
      "Find verses quickly by searching Arabic text, translations or surah names — and search your azkar and notes too.",
    icon: "search",
  },
  {
    id: "hifz",
    title: "Hifz & Revision",
    description:
      "Hide and reveal ayah ranges to test yourself, mark what you have memorised, and keep a revision history.",
    icon: "brain",
  },
  {
    id: "prayer",
    title: "Prayer Times",
    description:
      "Daily prayer timings calculated on your device, with 12 calculation methods, madhab options and reminder notifications.",
    icon: "clock",
  },
  {
    id: "qibla",
    title: "Qibla",
    description:
      "Find the Qibla direction with your phone's compass and see your distance to the Kaaba.",
    icon: "compass",
  },
  {
    id: "azkar",
    title: "Azkar & Duas",
    description:
      "Daily supplications from Hisn al-Muslim with tap counters, progress and search across 132 categories.",
    icon: "hands",
  },
  {
    id: "hijri",
    title: "Hijri Calendar",
    description:
      "Follow Islamic dates, events and occasions with a Hijri calendar built into the app.",
    icon: "calendar",
  },
  {
    id: "ramadan",
    title: "Ramadan Tools",
    description:
      "Imsak and iftar times, an iftar countdown, a fasting tracker and khatm progress for the month.",
    icon: "moon",
  },
];

/* -------------------------------------------------------------------------- */
/*  9. ISLAMIC TOOLS                                                           */
/* -------------------------------------------------------------------------- */

export type IslamicTool = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const ISLAMIC_TOOLS: IslamicTool[] = [
  {
    id: "prayer-times",
    title: "Prayer Times",
    description: "12 calculation methods, per-prayer adjustments and reminder notifications.",
    icon: "clock",
  },
  {
    id: "qibla",
    title: "Qibla Compass",
    description: "Compass-based Qibla direction with distance to the Kaaba.",
    icon: "compass",
  },
  {
    id: "hijri-calendar",
    title: "Hijri Calendar",
    description: "Islamic dates, events and occasions in one calendar.",
    icon: "calendar",
  },
  {
    id: "azkar-duas",
    title: "Azkar & Duas",
    description: "Hisn al-Muslim with counters, progress and search.",
    icon: "hands",
  },
  {
    id: "tasbeeh",
    title: "Tasbeeh Counter",
    description: "Presets, targets, rounds and gentle vibration feedback.",
    icon: "circle",
  },
  {
    id: "hifz-goals",
    title: "Hifz & Daily Goals",
    description: "Memorisation sessions, daily Quran goals and khatm planning.",
    icon: "target",
  },
  {
    id: "ramadan",
    title: "Ramadan Tools",
    description: "Iftar countdown, fasting tracker and khatm progress.",
    icon: "moon",
  },
  {
    id: "hajj-umrah",
    title: "Hajj & Umrah Guide",
    description: "Step-by-step guidance with a practical checklist.",
    icon: "route",
  },
  {
    id: "progress",
    title: "Journey & Progress",
    description: "Streaks, pages read, listening time and revision history.",
    icon: "chart",
  },
];

/* -------------------------------------------------------------------------- */
/* 10. CONTENT SOURCES  (shown for attribution / trust)                        */
/* -------------------------------------------------------------------------- */

export const QURAN_FACTS = [
  { value: "114", label: "Surahs" },
  { value: "6,236", label: "Ayahs" },
  { value: "604", label: "Pages" },
  { value: "30", label: "Juz" },
];

export const TRANSLATION_SOURCES = [
  { id: "en.sahih", name: "Saheeh International", language: "English" },
  { id: "ur.jalandhry", name: "Fateh Muhammad Jalandhry", language: "Urdu" },
];

export const TAFSIR_SOURCES = [
  { id: "ar.muyassar", name: "Tafsir Ibn Kathir (Muyassar)", language: "Arabic" },
  { id: "ar.jalalayn", name: "Al-Jalalayn", language: "Arabic" },
  { id: "ar.qurtubi", name: "Al-Qurtubi", language: "Arabic" },
  { id: "ar.miqbas", name: "Al-Misbah Al-Munir", language: "Arabic" },
  { id: "ar.waseet", name: "Al-Wasit", language: "Arabic" },
  { id: "ar.baghawi", name: "Al-Baghawi", language: "Arabic" },
];

/** Reciters featured on the website (all supported inside the app). */
export const FEATURED_RECITERS = [
  "Mishary Rashid Alafasy",
  "Abdul Basit Abdus-Samad",
  "Mahmoud Khalil Al-Husary",
  "Abdurrahman As-Sudais",
  "Saud Al-Shuraim",
  "Maher al-Muaiqly",
  "Saad Al-Ghamdi",
  "Mohamed Siddiq Al-Minshawi",
];

export const RECITATION_COUNT = 173;

/* -------------------------------------------------------------------------- */
/* 11. WHY THIS APP                                                            */
/* -------------------------------------------------------------------------- */

export const WHY_POINTS = [
  {
    title: "Everything in one place",
    description:
      "Reading, listening, understanding and the daily tools you already use — without jumping between apps.",
  },
  {
    title: "A peaceful reading page",
    description:
      "No ads, no feeds and no distractions. Just the Quran, your translation and the space to reflect.",
  },
  {
    title: "Made for daily consistency",
    description:
      "Goals, khatm planning, streaks and revision history keep your habit going one small step at a time.",
  },
  {
    title: "Private by design",
    description:
      "No advertising and no analytics. Your location stays on your device, used only for prayer times and Qibla.",
  },
  {
    title: "Works offline",
    description:
      "The full Quran text is bundled with the app, and translations, tafsir and audio can be saved for offline use.",
  },
  {
    title: "Respectful of your device",
    description:
      "Built as a focused companion rather than a service you depend on — your data stays where you keep it.",
  },
];

/* -------------------------------------------------------------------------- */
/* 12. TESTIMONIALS  (optional — intentionally empty)                          */
/* -------------------------------------------------------------------------- */

/**
 * No testimonials are invented for this website.
 * Add real ones here later and the section appears automatically.
 * Example: { quote: "...", name: "...", role: "..." }
 */
export const TESTIMONIALS: { quote: string; name: string; role?: string }[] = [];

/* -------------------------------------------------------------------------- */
/* 13. EXTERNAL CREDITS (attribution required by content licences)             */
/* -------------------------------------------------------------------------- */

export const SOURCE_CREDITS = [
  { label: "Quran text: Tanzil.net", href: "https://tanzil.net/docs/quran-text-license" },
  { label: "Text & audio: AlQuran Cloud", href: "https://alquran.cloud" },
  { label: "Azkar: Hisn al-Muslim", href: "https://hisnmuslim.com" },
];
