"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { DOWNLOADS_UPDATED_EVENT, fetchDownloads } from "@/lib/downloadCounter";
import styles from "./DownloadCount.module.css";

/**
 * Live total download count. Reads the shared counter on mount, refreshes
 * every minute, and updates instantly when any Download button is clicked.
 */
export function DownloadCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      void fetchDownloads().then((value) => {
        if (!cancelled && value !== null) setCount(value);
      });
    };

    load();
    const interval = window.setInterval(load, 60_000);

    const onUpdate = (event: Event) => {
      const value = (event as CustomEvent<number>).detail;
      if (typeof value === "number") setCount(value);
    };
    window.addEventListener(DOWNLOADS_UPDATED_EVENT, onUpdate);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener(DOWNLOADS_UPDATED_EVENT, onUpdate);
    };
  }, []);

  if (count === null) return null;

  return (
    <p className={styles.stat} aria-live="polite">
      <Download size={15} aria-hidden="true" />
      <span>
        <strong className={styles.number}>{count.toLocaleString("en-US")}</strong>{" "}
        downloads so far
      </span>
    </p>
  );
}
