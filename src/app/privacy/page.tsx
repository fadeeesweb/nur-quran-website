import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { CONTACT_EMAIL, CONTACT_PAGE_PATH, isContactConfigured } from "@/config/site";

/* -------------------------------------------------------------------------
   Edit this date whenever the policy changes.
   ------------------------------------------------------------------------- */
const LAST_UPDATED = "October 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Nur Quran & Islamic Companion app and website handle your information — location, microphone, bookmarks, optional sync and cookies.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lede="A plain account of what the Nur app and this website process, where it stays, and what never leaves your device."
      updated={LAST_UPDATED}
    >
      <h2>Overview</h2>
      <p>
        This policy covers the Nur mobile application (&ldquo;Nur&rdquo;, &ldquo;the
        app&rdquo;) and this website. It is written to be read, not to be skimmed: if
        something is unclear, please contact us using the details at the bottom of this
        page.
      </p>

      <h2>This website</h2>
      <p>
        This website is a static informational site. It does not use advertising cookies,
        tracking pixels, fingerprinting or analytics by default. If a cookie consent
        banner is shown, your choice is stored in your own browser so the site can
        remember it.
      </p>
      <p>
        If analytics are ever added, they will only run after consent, and this policy
        will be updated to describe them.
      </p>

      <h2>Information kept on your device</h2>
      <p>The app keeps the following on your device, under your control:</p>
      <ul>
        <li>Bookmarks, notes, daily goals, hifz and revision history</li>
        <li>Tasbeeh counts, fasting tracker entries and progress summaries</li>
        <li>Downloaded translations, tafsir and audio files</li>
        <li>Your display settings, language and reading preferences</li>
      </ul>
      <p>
        This information is not sent to us. Removing it in the app settings, or
        uninstalling the app, removes it from your device.
      </p>

      <h2>Location</h2>
      <p>
        When you allow location access, it is used{" "}
        <strong>on your device only</strong> to calculate prayer times and the Qibla
        direction. It is not transmitted to our servers and is not stored by us.
      </p>

      <h2>Microphone and recordings</h2>
      <p>
        When you choose to record your own recitation practice, the microphone is used
        only for that recording. Recordings remain on your device unless you explicitly
        export or share them.
      </p>

      <h2>Optional account and sync</h2>
      <p>
        Nur can be used entirely without an account. If sync is available in your copy of
        the app and you choose to sign in with an email address or Google account, the
        items you decide to sync (for example bookmarks and notes) are stored by our sync
        provider so they can follow you between devices. You can stop using sync and
        remove your data from the app&rsquo;s settings at any time.
      </p>

      <h2>Content and audio downloads</h2>
      <p>
        When you request translations, tafsir or audio, the app fetches them from the
        content providers named in the app and in the footer of this website. Those
        services receive standard technical requests (such as your IP address) under
        their own privacy policies.
      </p>

      <h2>Advertising and analytics in the app</h2>
      <p>Nur contains no advertising and no third-party analytics SDKs.</p>

      <h2>Children</h2>
      <p>
        Nur is suitable for general audiences and does not knowingly collect personal
        information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the app evolves. The date at the top of this page
        always reflects the latest version.
      </p>

      <h2>Contact</h2>
      <p>
        {isContactConfigured() ? (
          <>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </>
        ) : (
          <>
            Questions about this policy can be sent through the{" "}
            <Link href={CONTACT_PAGE_PATH}>contact page</Link>.
          </>
        )}
      </p>
    </LegalLayout>
  );
}
