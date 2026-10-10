import { TAFSIR_SOURCES } from "@/config/site";
import { revealDelay } from "@/lib/style";
import styles from "./TafsirSection.module.css";

export function TafsirSection() {
  return (
    <section id="tafsir" className={`section ${styles.section}`} aria-labelledby="tafsir-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy} data-reveal>
          <p className="eyebrow">Tafsir</p>
          <h2 id="tafsir-title" className="section-title">
            Understand what you read.
          </h2>
          <p className="section-lede">
            When a passage needs more context, open a tafsir beside it. Commentary is only
            as trustworthy as its source — so every tafsir in Nur is named, and you always
            know exactly whose words you are reading.
          </p>
          <p className={styles.note}>
            Tafsir text belongs to its publishers and is downloaded when you open it
            inside the app, then kept for offline reading.
          </p>
        </div>

        <div className={styles.sources} data-reveal style={revealDelay(120)}>
          <h3 className={styles.listTitle}>
            {TAFSIR_SOURCES.length} tafsir sources
          </h3>
          <ol className={styles.list}>
            {TAFSIR_SOURCES.map((source, index) => (
              <li key={source.id} className={styles.row}>
                <span className={styles.rowIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.rowName}>{source.name}</span>
                <span className={styles.rowLang}>{source.language}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
