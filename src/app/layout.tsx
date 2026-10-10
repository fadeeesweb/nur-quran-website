import type { Metadata, Viewport } from "next";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SITE_KEYWORDS, SITE_TITLE, SITE_TITLE_TEMPLATE, SITE_URL } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: SITE_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: SITE_TITLE,
    description: APP_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og/og-cover.png",
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Quran and Islamic companion app`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: APP_DESCRIPTION,
    images: ["/og/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B6B4F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Enables progressive scroll-reveal (see globals.css). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <ScrollReveal />
      </body>
    </html>
  );
}
