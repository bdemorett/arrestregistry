import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ClickTracker from "@/components/ClickTracker";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Arrest Registry: How to Find Arrest, Jail and Court Records", template: "%s | Arrest Registry" },
  description: site.tagline,
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  verification: {
    google: site.gscVerification || undefined,
    other: site.bingVerification ? { "msvalidate.01": site.bingVerification } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#16212c" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@700;800&family=Public+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
        {/* impact.com site verification (Impact's checker expects a "value" attribute, as in their snippet) */}
        <meta name="impact-site-verification" {...{ value: "2ee3f1e7-6cf8-4e7d-867b-42b7491aedd5" }} />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.adsenseClient}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link href="/" className="logo">
              <span className="logo-mark" aria-hidden>
                AR
              </span>
              Arrest Registry
            </Link>
            <nav className="nav">
              <Link href="/minnesota/">Minnesota</Link>
              <Link href="/florida/">Florida</Link>
              <Link href="/guides/">Guides</Link>
              <Link href="/about/">About</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              Arrest Registry is an independent guide. We are not a government agency, we do not host arrest records or
              booking photos, and we are not a consumer reporting agency. Always confirm information with the official
              source.
            </p>
            <p className="footer-links">
              <Link href="/about/">About</Link>
              <Link href="/methodology/">How we verify</Link>
              <Link href="/affiliate-disclosure/">Affiliate disclosure</Link>
              <Link href="/privacy/">Privacy</Link>
              <Link href="/contact/">Contact</Link>
            </p>
            <p className="muted">© {new Date().getFullYear()} {site.owner}</p>
          </div>
        </footer>
        <Analytics />
        <ClickTracker />
      </body>
    </html>
  );
}
