import { DOWNLOAD_COUNTER_API, DOWNLOAD_COUNTER_KEY } from "@/config/site";

/** window event fired with the fresh total after any download click. */
export const DOWNLOADS_UPDATED_EVENT = "nur:downloads-updated";

function counterUrl(action: "hit" | "get"): string {
  return `${DOWNLOAD_COUNTER_API}/${action}/${encodeURIComponent(DOWNLOAD_COUNTER_KEY)}`;
}

/** Increments the counter by 1 and returns the new total (null on failure). */
export async function incrementDownloads(): Promise<number | null> {
  try {
    const res = await fetch(counterUrl("hit"), { keepalive: true });
    if (!res.ok) return null;
    const data = (await res.json()) as { value?: string | number };
    const value = Number(data.value);
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

/** Reads the current total without incrementing (0 before the first hit). */
export async function fetchDownloads(): Promise<number | null> {
  try {
    const res = await fetch(counterUrl("get"), { cache: "no-store" });
    if (res.status === 404) return 0;
    if (!res.ok) return null;
    const data = (await res.json()) as { value?: string | number };
    const value = Number(data.value);
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

/** Broadcasts a fresh total so every visible counter updates instantly. */
export function announceDownloads(value: number): void {
  window.dispatchEvent(new CustomEvent(DOWNLOADS_UPDATED_EVENT, { detail: value }));
}
