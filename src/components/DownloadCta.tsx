import { DownloadAppButton } from "./DownloadAppButton";
import { Logo } from "./Logo";
import { StarPattern } from "./StarPattern";
import styles from "./DownloadCta.module.css";

export function DownloadCta() {
  return (
    <section
      id="download"
      className={`section bg-green ${styles.section}`}
      aria-labelledby="download-title"
    >
      <StarPattern id="download" />

      <div className={`container ${styles.inner}`} data-reveal>
        <Logo size={74} alt="" />
        <p className="eyebrow">Get the app</p>
        <h2 id="download-title" className={styles.title}>
          Keep the Quran Close.
        </h2>
        <p className={styles.text}>
          Bring reading, listening, understanding and your daily tools into one calm
          app — and let the Quran be part of every day.
        </p>
        <div className={styles.actions}>
          <DownloadAppButton size="lg" variant="onDark" />
        </div>
        <p className={styles.note}>The download link opens in your browser.</p>
      </div>
    </section>
  );
}
