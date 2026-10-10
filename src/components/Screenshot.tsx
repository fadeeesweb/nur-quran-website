import type { AppScreenshot } from "@/config/site";
import { withBasePath } from "@/config/site";
import { screenshotExists } from "@/lib/screenshots";
import { Logo } from "./Logo";
import styles from "./Screenshot.module.css";

type Props = {
  shot: AppScreenshot;
  /** "phone" draws a device bezel, "flat" is a plain rounded frame. */
  frame?: "phone" | "flat";
  eager?: boolean;
};

/**
 * Renders a real screenshot when the file exists in public/, otherwise an
 * unmistakable placeholder frame. Drop your screenshots into
 * public/app/screenshots/ (see APP_SCREENSHOTS in src/config/site.ts) and
 * rebuild — nothing else needs to change.
 */
export function Screenshot({ shot, frame = "flat", eager = false }: Props) {
  const exists = screenshotExists(shot.file);

  if (exists) {
    return (
      <img
        src={withBasePath(`/${shot.file}`)}
        alt={shot.alt}
        className={styles.image}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <div
      className={styles.placeholder}
      role="img"
      aria-label={`${shot.label} — screenshot not added yet`}
    >
      <span className={styles.badge}>Placeholder</span>
      <Logo size={56} withName className={styles.placeholderLogo} />
      <p className={styles.placeholderNote}>Screenshot not added yet</p>
    </div>
  );
}
