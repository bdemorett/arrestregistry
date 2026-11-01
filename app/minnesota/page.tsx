import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { districtCounties, districtName } from "@/data/minnesota";
import { mn } from "@/lib/mnResources";
import { formatDate, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minnesota Arrest Records: Jail Rosters, Court Cases & Criminal History",
  description:
    "How to look up arrest, jail, court, and conviction records in Minnesota using free official sources, with county-by-county jail roster guides.",
  alternates: { canonical: "/minnesota/" },
};

const districts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function MinnesotaPage() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "Minnesota", href: "/minnesota/" }]} />
      <h1>How to Look Up Arrest Records in Minnesota</h1>
      <p className="lede">
        Minnesota doesn't keep one public arrest database. Arrest information lives in three places: county jail rosters,
        the state court system, and the Bureau of Criminal Apprehension. Here's what each one covers and how to use it.
      </p>
      <p className="muted">Last reviewed {formatDate(site.lastReviewed)}</p>

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
              <td>County jail roster</td>
              <td>Recent bookings, charges, bail, court dates</td>
              <td>Anyone released more than a few days ago; other counties</td>
            </tr>
            <tr>
              <td>
                <a href={mn.mcro.url} target="_blank" rel="noopener">
                  MCRO
                </a>{" "}
                (courts)
              </td>
              <td>Charges filed, hearings, outcomes, statewide</td>
              <td>Pending cases in a name search (need the case number); uncharged arrests; expunged cases</td>
            </tr>
            <tr>
              <td>
                <a href={mn.bcaSearch.url} target="_blank" rel="noopener">
                  BCA public search
                </a>
              </td>
              <td>Convictions for 15 years after the sentence ends</td>
              <td>Arrests without a conviction, juvenile and out-of-state records</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>County jail rosters</h3>
      <p>
        Most of Minnesota's 87 sheriffs run a county jail, and most post a roster of who is in custody. A few small
        counties board inmates in a neighboring county's jail instead. Rosters are the
        fastest way to confirm a recent arrest, but they are short-lived. Ramsey County, for example, removes a record five
        days after release, and Hennepin County shows releases from the past seven days. Pick a county below for its roster
        link and details.
      </p>

      <h3>Minnesota Court Records Online (MCRO)</h3>
      <p>
        MCRO is the Judicial Branch's free search of state district court records. You can search cases by name, look up
        upcoming hearings, and download public documents if you have the case number. One catch: pending criminal cases
        don't come up in a name search, only cases that ended in a conviction, so an open case needs the case number. Every
        district courthouse also has public terminals that search records statewide and show more than the website.
      </p>

      <h3>BCA Public Criminal History Search</h3>
      <p>
        The BCA's search is free and needs a first name, last name, and date of birth. Under Minnesota law, a conviction is
        public for 15 years after the sentence is completed. Arrest information without a conviction is private data at
        the BCA, so it won't show up here at all.
      </p>

      <h3>Booking photos</h3>
      <p>
        Booking photos are generally public data in Minnesota under{" "}
        <a href={mn.statute1382.url} target="_blank" rel="noopener">
          Minn. Stat. § 13.82
        </a>
        , but each agency sets its own release process. Arrest Registry links to official sources and does not publish
        mugshots.
      </p>

      <SearchCta placement="state-hub" />

      <h2>Minnesota counties</h2>
      <p>
        Counties are grouped by judicial district. Guides with verified links are live; the rest are being checked against
        official sources and added in batches.
      </p>
      {districts.map((d) => (
        <section key={d}>
          <h3>{districtName(d)}</h3>
          <ul className="county-grid">
            {districtCounties(d).map((c) => (
              <li key={c.slug}>
                {c.detail ? (
                  <Link href={`/minnesota/${c.slug}/`}>{c.name} County</Link>
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
        <Link className="card" href="/guides/are-arrest-records-public-in-minnesota/">
          <strong>Are arrest records public in Minnesota?</strong>
          <span>What's public, what's private, and for how long</span>
        </Link>
        <Link className="card" href="/guides/minnesota-expungement-clean-slate/">
          <strong>Minnesota expungement and Clean Slate</strong>
          <span>Which records get sealed automatically</span>
        </Link>
        <Link className="card" href="/guides/arrest-vs-conviction-records/">
          <strong>Arrest vs. conviction records</strong>
          <span>Why the difference matters</span>
        </Link>
      </div>

      <Sources
        items={[mn.bcaSearch, mn.bcaFaq, mn.bcaInfo, mn.mcroInfo, mn.statute1382, mn.statute1387]}
        reviewed={site.lastReviewed}
      />
    </article>
  );
}
