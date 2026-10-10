import { FEATURES } from "@/config/site";
import { FeatureIcon } from "./FeatureIcon";
import { revealDelay } from "@/lib/style";
import styles from "./Features.module.css";

export function Features() {
  return (
    <section id="features" className={`section ${styles.section}`} aria-labelledby="features-title">
      <div className="container">
        <header className={styles.header} data-reveal>
          <div>
            <p className="eyebrow">Features</p>
            <h2 id="features-title" className="section-title">
              Everything you need, nothing you don’t.
            </h2>
          </div>
          <p className="section-lede">
            Twelve focused tools that support one habit: returning to the Quran. Each one
            earns its place, and none of them shout for attention.
          </p>
        </header>

        <ol className={styles.index}>
          {FEATURES.map((feature, index) => (
            <li
              key={feature.id}
              className={styles.item}
              data-reveal
              style={revealDelay((index % 4) * 70)}
            >
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.iconBox}>
                <FeatureIcon name={feature.icon} size={21} />
              </span>
              <div className={styles.body}>
                <h3 className={styles.itemTitle}>{feature.title}</h3>
                <p className={styles.itemText}>{feature.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
