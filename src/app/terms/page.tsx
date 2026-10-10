import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_PAGE_PATH, isContactConfigured } from "@/config/site";

/* Edit this date whenever the terms change. */
const LAST_UPDATED = "October 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply when you use the Nur Quran & Islamic Companion app and this website, including content sources and acceptable use.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      lede="The ground rules for using Nur and this website, written in ordinary language."
      updated={LAST_UPDATED}
    >
      <h2>1. Acceptance of these terms</h2>
      <p>
        By downloading, installing or using Nur (&ldquo;the app&rdquo;) or by browsing
        this website, you agree to these terms. If you do not agree, please do not use
        the app or the website.
      </p>

      <h2>2. What Nur is</h2>
      <p>
        Nur is a Quran and Islamic companion application that provides Quran text,
        translations, recitations, tafsir, prayer times, Qibla, azkar and related Islamic
        tools. It is an information and practice aid.
      </p>
      <p>
        Nur does not replace the Quran, a qualified teacher, or scholarly advice. For
        religious rulings or personal guidance, please consult a knowledgeable scholar.
      </p>

      <h2>3. Permitted use</h2>
      <p>You may use the app and this website for personal, non-commercial purposes.</p>
      <ul>
        <li>Do not attempt to disrupt, reverse engineer or misuse the app.</li>
        <li>Do not repackage the app or present it as your own product.</li>
        <li>
          Do not reproduce copyrighted translations or commentary outside the terms set by
          their publishers.
        </li>
      </ul>

      <h2>4. Content and sources</h2>
      <p>
        The Quran text in Nur is reproduced from{" "}
        <a href="https://tanzil.net/docs/quran-text-license" rel="noopener noreferrer" target="_blank">
          Tanzil.net
        </a>{" "}
        without modification, under the terms of the Quran text licence published there.
      </p>
      <p>
        Translations, tafsir, azkar and recitation audio belong to their respective
        authors, publishers and reciters, and are used under the terms of those sources.
        Source names and attributions are listed inside the app and in the footer of this
        website.
      </p>
      <p>
        Content can change or be updated. If you find an error in the text or its
        presentation, please tell us — corrections are welcome.
      </p>

      <h2>5. Downloads</h2>
      <p>
        The app is made available through the download link published on this website.
        Download only from links we publish, and take the usual care when installing
        applications on your device.
      </p>

      <h2>6. No warranties</h2>
      <p>
        The app and this website are provided &ldquo;as is&rdquo;. We work to keep them
        accurate, available and secure, but we cannot promise that they will always be
        free of errors, or that every piece of content will be complete or current. Please
        verify important matters against their original sources.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for losses arising from your use
        of, or inability to use, the app or this website. Nothing in these terms limits
        liability that cannot be limited under applicable law.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Our handling of information is described in the{" "}
        <Link href="/privacy/">Privacy Policy</Link>, which forms part of these terms.
      </p>

      <h2>9. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top of this page
        reflects the latest version. Continued use of the app after a change means you
        accept the updated terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        {isContactConfigured() ? (
          <>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </>
        ) : (
          <>
            Questions about these terms can be sent through the{" "}
            <Link href={CONTACT_PAGE_PATH}>contact page</Link>.
          </>
        )}
      </p>
    </LegalLayout>
  );
}
