import { WHY_POINTS } from "@/config/site";
import { revealDelay } from "@/lib/style";
import styles from "./WhySection.module.css";

export function WhySection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="why-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro} data-reveal>
          <p className="eyebrow">Why this app</p>
          <h2 id="why-title" className="section-title">
            Built for consistency, not attention.
          </h2>
          <p className="section-lede">
            Most apps compete for your time. Nur is happy if you open it, read a page,
            listen to an ayah, and close it again — then come back tomorrow.
          </p>
          <p className={styles.promise}>
            No ads. No analytics. Location stays on your device.
          </p>
        </div>

        <ul className={styles.points}>
          {WHY_POINTS.map((point, index) => (
            <li
              key={point.title}
              className={styles.point}
              data-reveal
              style={revealDelay((index % 2) * 90)}
            >
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointText}>{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
