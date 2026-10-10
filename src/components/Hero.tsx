import type { CSSProperties } from "react";
import { DownloadAppButton } from "./DownloadAppButton";
import { DownloadCount } from "./DownloadCount";
import { Logo } from "./Logo";
import { StarPattern } from "./StarPattern";
import { APP_TAGLINE } from "@/config/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <StarPattern id="hero" variant="right" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy} data-reveal>
          <p className="eyebrow">{APP_TAGLINE}</p>
          <h1 id="hero-title" className={styles.title}>
            Read, listen and understand the Quran{" "}
            <em className={styles.accent}>in one peaceful place.</em>
          </h1>
          <p className={styles.lede}>
            Nur brings Quran reading, translations, recitations, tafsir and the daily
            Islamic tools you rely on together in a single, focused experience — built to
            be returned to every day.
          </p>

          <div className={styles.ctas}>
            <DownloadAppButton size="lg" />
            <a href="#features" className="btn btn--secondary btn--lg">
              Explore Features
            </a>
          </div>

          <DownloadCount />

          <ul className={styles.meta}>
            <li>No ads</li>
            <li>Works offline</li>
            <li>English · Urdu · Arabic</li>
          </ul>
        </div>

        <div className={styles.visual} data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>
          <div className={styles.poster}>
            <div className={styles.posterFrame}>
              <div className={styles.splash}>
                <Logo size={84} withName alt="Nur" eager />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
