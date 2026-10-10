import Link from "next/link";
import {
  APP_DESCRIPTION,
  APP_NAME,
  CONTACT_EMAIL,
  CONTACT_PAGE_PATH,
  isContactConfigured,
  NAV_ITEMS,
  PRIVACY_PAGE_PATH,
  SOCIAL_LINKS,
  SOURCE_CREDITS,
  TERMS_PAGE_PATH,
} from "@/config/site";
import { Logo } from "./Logo";
import { DownloadAppButton } from "./DownloadAppButton";
import styles from "./SiteFooter.module.css";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: PRIVACY_PAGE_PATH },
  { label: "Terms & Conditions", href: TERMS_PAGE_PATH },
  { label: "Contact", href: CONTACT_PAGE_PATH },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo size={44} withName alt={`${APP_NAME} logo`} />
            <p className={styles.description}>{APP_DESCRIPTION}</p>
            {SOCIAL_LINKS.length > 0 ? (
              <ul className={styles.socials}>
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      className={styles.socialLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav className={styles.column} aria-label="Footer">
            <h2 className={styles.columnTitle}>Explore</h2>
            <ul className={styles.links}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Get the app</h2>
            <ul className={styles.links}>
              <li>
                <DownloadAppButton variant="ghostOnDark" size="sm" showIcon={false}>
                  Download App
                </DownloadAppButton>
              </li>
              {isContactConfigured() ? (
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={styles.link}>
                    {CONTACT_EMAIL}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <nav className={styles.column} aria-label="Legal">
            <h2 className={styles.columnTitle}>Legal</h2>
            <ul className={styles.links}>
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.credits}>
          <span className={styles.creditsLabel}>Content sources</span>
          <ul className={styles.creditList}>
            {SOURCE_CREDITS.map((credit) => (
              <li key={credit.href}>
                <a
                  href={credit.href}
                  className={styles.creditLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {credit.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {APP_NAME}. All rights reserved.
          </p>
          <p className={styles.tagline}>Quran and Islamic companion.</p>
        </div>
      </div>
    </footer>
  );
}
