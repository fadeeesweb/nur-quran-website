import { withBasePath } from "@/config/site";
import styles from "./Logo.module.css";

type LogoProps = {
  /** Pixel size of the square logo mark. */
  size?: number;
  /** Show the application name next to the mark. */
  withName?: boolean;
  /** Accessible label for the image. Pass "" when a visible name follows. */
  alt?: string;
  className?: string;
  eager?: boolean;
};

/**
 * Official brand logo. The supplied artwork is never altered — only scaled,
 * with generous breathing room around it.
 */
export function Logo({
  size = 40,
  withName = false,
  alt = "",
  className,
  eager = false,
}: LogoProps) {
  return (
    <span
      className={[styles.logo, className].filter(Boolean).join(" ")}
      style={{ gap: withName ? Math.max(9, Math.round(size * 0.3)) : 0 }}
    >
      <img
        src={withBasePath("/logo/logo.webp")}
        alt={alt}
        width={size}
        height={size}
        className={styles.mark}
        style={{ width: size, height: size }}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
      {withName ? (
        <span className={styles.name} style={{ fontSize: Math.round(size * 0.52) }}>
          Nur
        </span>
      ) : null}
    </span>
  );
}
