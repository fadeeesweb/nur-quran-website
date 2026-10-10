import { ISLAMIC_TOOLS } from "@/config/site";
import { FeatureIcon } from "./FeatureIcon";
import { revealDelay } from "@/lib/style";
import styles from "./ToolsSection.module.css";

export function ToolsSection() {
  return (
    <section id="tools" className={`section ${styles.section}`} aria-labelledby="tools-title">
      <div className="container">
        <header className={styles.header} data-reveal>
          <div>
            <p className="eyebrow">Islamic tools</p>
            <h2 id="tools-title" className="section-title">
              The daily tools, kept close.
            </h2>
          </div>
          <p className="section-lede">
            Prayer times, Qibla, azkar, a Hijri calendar and more — practical instruments
            for everyday practice, designed with the same restraint as the reading page.
          </p>
        </header>

        <ul className={styles.grid}>
          {ISLAMIC_TOOLS.map((tool, index) => (
            <li
              key={tool.id}
              className={styles.item}
              data-reveal
              style={revealDelay((index % 3) * 80)}
            >
              <span className={styles.icon}>
                <FeatureIcon name={tool.icon} size={23} />
              </span>
              <h3 className={styles.title}>{tool.title}</h3>
              <p className={styles.text}>{tool.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
