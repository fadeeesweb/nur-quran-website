import type { CSSProperties } from "react";

/** Builds an inline style carrying the reveal transition delay. */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
