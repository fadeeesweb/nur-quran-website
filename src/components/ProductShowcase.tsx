import { APP_SCREENSHOTS } from "@/config/site";
import { Screenshot } from "./Screenshot";
import { revealDelay } from "@/lib/style";
import styles from "./ProductShowcase.module.css";

export function ProductShowcase() {
  return (
    <section
      id="showcase"
      className={`section ${styles.section}`}
      aria-labelledby="showcase-title"
    >
      <div className="container">
        <header className={styles.header} data-reveal>
          <div>
            <p className="eyebrow">Product showcase</p>
            <h2 id="showcase-title" className="section-title">
              More of the app, up close.
            </h2>
          </div>
          <p className="section-lede">
            Reading, listening, tafsir, prayer times and the daily tools — the screens
            you will spend your time in.
          </p>
        </header>

        <div className={styles.grid}>
          {APP_SCREENSHOTS.map((shot, index) => (
            <figure
              key={shot.key}
              className={styles.item}
              data-reveal
              style={revealDelay((index % 3) * 80)}
            >
              <div className={styles.frame}>
                <Screenshot shot={shot} frame="flat" />
              </div>
              <figcaption className={styles.caption}>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
