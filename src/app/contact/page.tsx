import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CONTACT_EMAIL, PRIVACY_PAGE_PATH, TERMS_PAGE_PATH, isContactConfigured } from "@/config/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about the Nur Quran & Islamic Companion app — support, content corrections and feedback.",
  alternates: { canonical: "/contact/" },
};

const TOPICS = [
  "A content correction — Quran text, translation or attribution",
  "A problem with the app — include your device and OS version",
  "An idea that would make the app more useful",
  "A question about privacy or these terms",
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <PageHeader
            eyebrow="Contact"
            title="Get in touch"
            lede="Questions about the app, a correction to the content, or feedback — we would be glad to hear from you."
          />
        </div>
      </section>

      <section className={`section ${styles.body}`}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.card} data-reveal>
            <h2 className={styles.cardTitle}>
              <Mail size={19} aria-hidden="true" /> Email
            </h2>
            {isContactConfigured() ? (
              <>
                <a className={styles.email} href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                <p className={styles.hint}>
                  This opens your mail app with the address already filled in.
                </p>
              </>
            ) : (
              <p className={styles.hint}>
                A contact address has not been published yet. Add{" "}
                <code className={styles.code}>CONTACT_EMAIL</code> in{" "}
                <code className={styles.code}>src/config/site.ts</code> and it will appear
                here.
              </p>
            )}
          </div>

          <div className={styles.aside} data-reveal>
            <h2 className={styles.asideTitle}>Helpful details to include</h2>
            <ul className={styles.topics}>
              {TOPICS.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <p className={styles.legalLinks}>
              You can also read our <Link href={PRIVACY_PAGE_PATH}>Privacy Policy</Link>{" "}
              and <Link href={TERMS_PAGE_PATH}>Terms &amp; Conditions</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
