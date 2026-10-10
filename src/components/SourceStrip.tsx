import { SOURCE_CREDITS } from "@/config/site";
import styles from "./SourceStrip.module.css";

/**
 * Slim attribution band — the website only shows content from sources it
 * can name.
 */
export function SourceStrip() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>Content sources</span>
        <ul className={styles.list}>
          {SOURCE_CREDITS.map((credit) => (
            <li key={credit.href}>
              <a
                href={credit.href}
                className={styles.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {credit.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
