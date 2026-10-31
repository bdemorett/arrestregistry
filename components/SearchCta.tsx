import Link from "next/link";
import { site } from "@/lib/site";

// Affiliate call to action. Hidden until NEXT_PUBLIC_AFFILIATE_URL is set.
// Clicks fire a GA4 "affiliate_click" event (see components/ClickTracker.tsx).
export default function SearchCta({ placement, county }: { placement: string; county?: string }) {
  if (!site.affiliateUrl) return null;
  const brand = site.affiliateName || "a people-search service";
  return (
    <aside className="cta" aria-label="Search records from a private provider">
      <div>
        <p className="cta-kicker">Searching beyond {county ? `${county} County` : "one county"}?</p>
        <p className="cta-text">
          Official rosters only cover one jail at a time. A paid background search with {brand} pulls court and public
          records from multiple states into one report.
        </p>
      </div>
      <a
        className="cta-button"
        href={site.affiliateUrl}
        target="_blank"
        rel="sponsored nofollow noopener"
        data-track="affiliate_click"
        data-placement={placement}
      >
        Run a background search
      </a>
      <p className="cta-fine">
        Paid, private service, not a government source. Results can be incomplete or out of date, and it may not be used
        for hiring, housing, or credit decisions under the FCRA. We may earn a commission.{" "}
        <Link href="/affiliate-disclosure/">Disclosure</Link>
      </p>
    </aside>
  );
}
