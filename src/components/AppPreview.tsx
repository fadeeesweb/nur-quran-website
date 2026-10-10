import type { CSSProperties } from "react";
import type { AppScreenshot } from "@/config/site";
import { APP_SCREENSHOTS, withBasePath } from "@/config/site";
import { Screenshot } from "./Screenshot";
import styles from "./AppPreview.module.css";

const PREVIEW_KEYS = ["quran", "home", "audio"];

function pick(key: string): AppScreenshot | undefined {
  return APP_SCREENSHOTS.find((shot) => shot.key === key);
}

export function AppPreview() {
  const shots = PREVIEW_KEYS.map(pick).filter((shot): shot is AppScreenshot => Boolean(shot));

  return (
    <section className={`section ${styles.section}`} aria-labelledby="preview-title">
      <div className="container">
        <header className={styles.header} data-reveal>
          <div>
            <p className="eyebrow">A look inside</p>
            <h2 id="preview-title" className="section-title">
              Designed for focus, from the first screen.
            </h2>
          </div>
          <p className="section-lede">
            A quiet interface that keeps the Quran at the centre: clear reading pages,
            a steady home screen, and audio controls that stay out of the way until you
            need them.
          </p>
        </header>

        <div className={styles.rail}>
          {shots.map((shot, index) => (
            <figure
              key={shot.key}
              className={styles.item}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className={styles.phone}>
                <div className={styles.screen}>
                  <Screenshot shot={shot} frame="phone" eager={index === 1} />
                </div>
                <img
                  src={withBasePath("/app/iphone-frame.png")}
                  alt=""
                  aria-hidden="true"
                  className={styles.frameImg}
                />
              </div>
              <figcaption className={styles.caption}>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
