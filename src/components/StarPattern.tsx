import styles from "./StarPattern.module.css";

type Props = {
  /** Unique per page so multiple patterns never share a DOM id. */
  id: string;
  /** "right" fades the pattern away from the headline; "full" covers the section. */
  variant?: "full" | "right";
};

/**
 * Very subtle eight-point star field — a quiet echo of the official logo.
 * Decorative only; always marked aria-hidden.
 */
export function StarPattern({ id, variant = "full" }: Props) {
  const patternId = `${id}-pattern`;
  return (
    <div
      className={`${styles.pattern} ${variant === "right" ? styles.right : ""}`}
      aria-hidden="true"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id={patternId} width="96" height="96" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#c9a85c" strokeWidth="1.25">
              <rect x="26" y="26" width="44" height="44" />
              <rect x="26" y="26" width="44" height="44" transform="rotate(45 48 48)" />
              <circle cx="48" cy="48" r="3.5" fill="#c9a85c" stroke="none" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
