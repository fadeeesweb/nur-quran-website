import { QURAN_FACTS } from "@/config/site";
import { QuranSample } from "./QuranSample";
import { revealDelay } from "@/lib/style";
import styles from "./QuranExperience.module.css";

const POINTS = [
  "Uthmani Arabic text",
  "Translations in English and Urdu",
  "Adjustable text size and line spacing",
  "Bookmarks and private notes",
  "Search across the Quran",
  "Tafsir alongside the passage",
  "Audio linked to every ayah",
];

export function QuranExperience() {
  return (
    <section id="quran" className={`section ${styles.section}`} aria-labelledby="quran-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy} data-reveal>
            <p className="eyebrow">The Quran</p>
            <h2 id="quran-title" className="section-title">
              Read With Focus
            </h2>
            <p className="section-lede">
              The reading page keeps itself out of your way. Arabic sits in a clear
              Uthmani script, your translation follows underneath, and every control you
              might need is one tap away — then out of sight again.
            </p>

            <ul className={styles.points}>
              {POINTS.map((point) => (
                <li key={point}>
                  <span className={styles.marker} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <p className={styles.note}>
              The preview on the right is live — try changing the text size or turning the
              translation off.
            </p>
          </div>

          <div
            className={styles.sample}
            data-reveal
            style={revealDelay(120)}
          >
            <QuranSample />
          </div>
        </div>

        <dl className={styles.facts} data-reveal>
          {QURAN_FACTS.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
