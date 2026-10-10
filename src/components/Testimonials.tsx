import { TESTIMONIALS } from "@/config/site";
import styles from "./Testimonials.module.css";

/**
 * No testimonials are invented. When real ones are added to TESTIMONIALS in
 * src/config/site.ts, the section appears automatically — otherwise it is
 * not rendered at all.
 */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className={`section ${styles.section}`} aria-labelledby="testimonials-title">
      <div className="container">
        <div className={styles.header} data-reveal>
          <p className="eyebrow">In their words</p>
          <h2 id="testimonials-title" className="section-title">
            What users are saying
          </h2>
        </div>

        <ul className={styles.grid}>
          {TESTIMONIALS.map((item) => (
            <li key={item.name} className={styles.item} data-reveal>
              <blockquote className={styles.quote}>“{item.quote}”</blockquote>
              <p className={styles.author}>
                <span className={styles.name}>{item.name}</span>
                {item.role ? <span className={styles.role}>{item.role}</span> : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
