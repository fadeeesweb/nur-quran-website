"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { APP_NAME, NAV_ITEMS } from "@/config/site";
import { Logo } from "./Logo";
import { DownloadAppButton } from "./DownloadAppButton";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  /* Sticky bar gets a hairline + soft shadow once the page scrolls. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock background scroll while the mobile menu is open. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /* Escape closes the menu and returns focus to the toggle button. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  /* Move focus into the panel when it opens. */
  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();
  }, [open]);

  /* Close the menu when navigating (e.g. tapping an anchor link). */
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${APP_NAME} — home`}>
          <Logo size={38} withName alt={`${APP_NAME} logo`} eager />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const active = item.href === pathname;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                    {...(active ? { "aria-current": "page" as const } : {})}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <DownloadAppButton size="sm" className={styles.desktopCta} />
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls={open ? "mobile-menu" : undefined}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <div className={styles.overlay} onClick={close} aria-hidden="true" />
          <div
            id="mobile-menu"
            ref={panelRef}
            className={styles.mobilePanel}
            aria-label="Menu"
          >
            <nav aria-label="Mobile">
              <ul className={styles.mobileList}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.mobileLink} onClick={close}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <DownloadAppButton size="lg" block className={styles.mobileCta} />
          </div>
        </>
      ) : null}
    </header>
  );
}
