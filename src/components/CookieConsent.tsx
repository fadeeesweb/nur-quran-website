"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_CONSENT } from "@/config/site";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "nur-cookie-consent";

/**
 * Configurable cookie consent. Disabled by default because this website
 * ships without analytics or advertising cookies — see COOKIE_CONSENT in
 * src/config/site.ts to turn it on.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!COOKIE_CONSENT.enabled) return;
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* Storage unavailable — stay quiet rather than block the page. */
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!COOKIE_CONSENT.enabled || !visible) return null;

  return (
    <div className={styles.banner} role="region" aria-label="Cookie consent">
      <p className={styles.text}>
        {COOKIE_CONSENT.text}{" "}
        <Link href={COOKIE_CONSENT.privacyPath} className={styles.link}>
          Privacy Policy
        </Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={() => decide("declined")}>
          {COOKIE_CONSENT.declineLabel}
        </button>
        <button type="button" className={styles.accept} onClick={() => decide("accepted")}>
          {COOKIE_CONSENT.acceptLabel}
        </button>
      </div>
    </div>
  );
}
