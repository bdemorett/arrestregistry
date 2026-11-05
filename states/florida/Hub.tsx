import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CountyFinder from "@/components/CountyFinder";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { circuitCounties, circuitName, flPublished } from "@/data/states/florida/counties";
import { fl } from "@/data/states/florida/resources";
import { formatDate, site } from "@/lib/site";

export const hubMetadata: Metadata = {
  title: "Florida Arrest Records: Jail Rosters, Court Cases & Criminal History",
  description:
    "How to look up arrest, jail, court, and criminal history records in Florida using official sources, with county-by-county jail and clerk guides.",
  alternates: { canonical: "/florida/" },
};

const circuits = Array.from({ length: 20 }, (_, i) => i + 1);
const ext = (url: string, text: string) => (
  <a href={url} target="_blank" rel="noopener">
    {text}
  </a>
);

export default function FloridaHub() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "Florida", href: "/florida/" }]} />
      <h1>How to Look Up Arrest Records in Florida</h1>
      <p className="lede">
        Florida is one of the most open states for arrest records. Information lives in three places: the county jail,
        the county clerk of court, and the Florida Department of Law Enforcement. Here's what each one covers and how to use
        it.
      </p>
      <p className="muted">Last reviewed {formatDate(site.lastReviewed)}</p>

      <CountyFinder
        state="florida"
        placeholder="County or county seat, e.g. Orange or Orlando"
        counties={flPublished.map((c) => ({ slug: c.slug, name: c.name, seat: c.seat })).sort((x, y) => x.name.localeCompare(y.name))}
      />

      <h2>The three official sources</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>What it shows</th>
              <th>What it misses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>County jail search</td>
              <td>Bookings, charges, bond; some counties keep past arrests searchable</td>
              <td>Other counties; people already moved to state prison</td>
            </tr>
            <tr>
              <td>County clerk of court</td>
              <td>Charges filed, hearings, outcomes, usually searchable by name</td>
              <td>Sealed and expunged cases; other counties (each clerk is separate)</td>
            </tr>
            <tr>
              <td>{ext(fl.fdleSearch.url, "FDLE criminal history")}</td>
              <td>Statewide Florida arrests and dispositions, $24 per name</td>
              <td>Sealed and expunged records, most juvenile records, other states</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>County jails</h3>
      <p>
        In most of Florida's 67 counties the sheriff runs the jail. Some counties are different, including Miami-Dade, Orange,
        Osceola, Pasco, Volusia, Escambia and Okaloosa, where county government runs the jail, so jail questions go to the county corrections
        department instead of the sheriff. Every county guide below says who runs that jail.
      </p>

      <h3>Clerk of court records</h3>
      <p>
        Each county elects a clerk of the circuit court who keeps that county's court records. Most clerks offer a free
        online case search by name, showing charges, hearing dates and how the case ended. Because each clerk is separate, a
        search in one county won't find a case in another. The clerks' statewide {ext(fl.caseAccess.url, "CaseAccess")}{" "}
        service searches all 67 counties at once for a $20 monthly or $200 yearly subscription.
      </p>

      <h3>FDLE criminal history</h3>
      <p>
        The Florida Department of Law Enforcement sells a statewide criminal history search to anyone for $24 per name,
        plus a $1 card fee online. Under {ext(fl.statute943053.url, "Fla. Stat. § 943.053")}, juvenile records stay
        confidential unless they involve a felony-level offense, and sealed or expunged records aren't released.
      </p>

      <h3>Sealing and expunction</h3>
      <p>
        Under {ext(fl.statute9430595.url, "Fla. Stat. § 943.0595")}, FDLE automatically seals a criminal history record when
        no charges were filed, the charges were dismissed or dropped, or the person was found not guilty or acquitted on all
        counts. Forcible felonies and certain sex offenses are excluded. The clerk then keeps the related court record
        confidential. Records that don't qualify may still be sealed or expunged by court order under{" "}
        {ext(fl.statute9430585.url, "§ 943.0585")}, which requires a $75 certificate of eligibility from FDLE first.
      </p>

      <h3>First appearance and bond</h3>
      <p>
        Under Florida Rule of Criminal Procedure 3.130, a person who is arrested and not released must see a judge within
        24 hours. Since January 1, 2024, people arrested on certain serious charges can be held until that first
        appearance instead of bonding out on a schedule, and only a judge can set or change bail ({ext(fl.hb1627.url, "HB 1627")}).
      </p>

      <h3>Booking photos</h3>
      <p>
        Booking photos are generally public in Florida. Under {ext(fl.statute90143.url, "Fla. Stat. § 901.43")}, a site that
        publishes mugshots can't charge to remove one and must take it down for free within 10 days of a written request
        sent by registered mail. Arrest Registry links to official sources and does not publish mugshots.
      </p>

      <SearchCta placement="state-hub" />

      <h2>Florida counties</h2>
      <p>
        Counties are grouped by judicial circuit. Guides with verified links are live; the rest are being checked against
        official sources and added in batches.
      </p>
      {circuits.map((n) => (
        <section key={n}>
          <h3>{circuitName(n)}</h3>
          <ul className="county-grid">
            {circuitCounties(n).map((c) => (
              <li key={c.slug}>
                {c.detail ? (
                  <Link href={`/florida/${c.slug}/`}>{c.name} County</Link>
                ) : (
                  <span className="soon">
                    {c.name} County<span className="tag">coming soon</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2>Related guides</h2>
      <div className="cards">
        <Link className="card" href="/guides/arrest-vs-conviction-records/">
          <strong>Arrest vs. conviction records</strong>
          <span>Why the difference matters</span>
        </Link>
        <Link className="card" href="/guides/remove-mugshot-from-internet/">
          <strong>Remove a mugshot from the internet</strong>
          <span>Takedown requests and search removal</span>
        </Link>
        <Link className="card" href="/guides/jail-roster-terms-glossary/">
          <strong>Jail roster terms</strong>
          <span>What common booking terms mean</span>
        </Link>
      </div>

      <Sources
        items={[fl.fdleChecks, fl.fdleSearch, fl.statute943053, fl.statute9430595, fl.statute9430585, fl.statute90143, fl.hb1627, fl.rule3130, fl.caseAccess, fl.fdcSearch, fl.statute26021]}
        reviewed={site.lastReviewed}
      />
    </article>
  );
}
