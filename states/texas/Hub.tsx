import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CountyFinder from "@/components/CountyFinder";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { tcjsDate, tcjsRows, txPublished, slugify } from "@/data/states/texas/counties";
import { tx } from "@/data/states/texas/resources";
import { formatDate, site } from "@/lib/site";

export const hubMetadata: Metadata = {
  title: "Texas Arrest Records: Jail Rosters, Court Cases & Criminal History",
  description:
    "How to look up arrests, jail inmates, court cases and criminal history in Texas using official sources, with county jail guides and how full each large jail is.",
  alternates: { canonical: "/texas/" },
};

const ext = (url: string, text: string) => (
  <a href={url} target="_blank" rel="noopener">
    {text}
  </a>
);
const n = (x: number) => x.toLocaleString("en-US");

export default function TexasHub() {
  const published = new Set(txPublished.map((c) => c.name));
  const big = Object.values(tcjsRows)
    .filter((r) => !r.noJail && r.capacity && r.capacity >= 500 && r.pctCapacity !== null)
    .sort((a, b) => (b.pctCapacity ?? 0) - (a.pctCapacity ?? 0));
  const all = Object.values(tcjsRows).filter((r) => !r.noJail && r.capacity);
  const held = all.reduce((s, r) => s + r.total, 0);
  const beds = all.reduce((s, r) => s + (r.capacity ?? 0), 0);

  return (
    <article>
      <Breadcrumbs items={[{ name: "Texas", href: "/texas/" }]} />
      <h1>How to Look Up Arrest Records in Texas</h1>
      <p className="lede">
        In Texas, arrest information is spread across the county jail, two county clerks and the Department of Public
        Safety. Here's what each one shows, what it leaves out, and how to search it.
      </p>
      <p className="muted">Last reviewed {formatDate(site.lastReviewed)}</p>

      <CountyFinder
        state="texas"
        placeholder="County or county seat, e.g. Harris or Houston"
        counties={txPublished.map((c) => ({ slug: c.slug, name: c.name, seat: c.seat }))}
      />

      <h2>The official sources</h2>
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
              <td>Who's in custody now, usually with charges and bond</td>
              <td>Other counties; city jails; people moved to state prison</td>
            </tr>
            <tr>
              <td>District clerk</td>
              <td>Felony cases: charges, hearings, outcomes</td>
              <td>Misdemeanors (in most counties); sealed and expunged cases</td>
            </tr>
            <tr>
              <td>County clerk</td>
              <td>Class A and B misdemeanor cases</td>
              <td>Felonies; Class C tickets, which go to justice and city courts</td>
            </tr>
            <tr>
              <td>{ext(tx.dpsSearch.url, "DPS Conviction Name Search")}</td>
              <td>Convictions and deferred adjudications statewide, for a fee</td>
              <td>Arrests with no conviction or deferred adjudication; sealed and expunged records</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>County jails</h3>
      <p>
        In Texas the sheriff runs the county jail. Most large counties post an online inmate search, and the county guides
        below link each one. Some small counties have no jail of their own and send people to a neighboring county's jail.
      </p>

      <h3>Two clerks for criminal cases</h3>
      <p>
        Most Texas counties split criminal court records between two elected clerks. The district clerk keeps felony cases,
        and the county clerk keeps Class A and B misdemeanors such as DWI, theft and assault. Some counties, including
        Harris, have one clerk or one search portal for both. Each county guide says which applies.
      </p>

      <h3>The first 48 hours</h3>
      <p>
        Under {ext(tx.ccp1517.url, "Texas Code of Criminal Procedure article 15.17")}, a person who is arrested must be taken
        before a magistrate without unnecessary delay, and no later than 48 hours after arrest. The magistrate explains the
        charges and the person's rights and sets bail.
      </p>

      <h3>Statewide criminal history</h3>
      <p>
        The Department of Public Safety runs a public {ext(tx.dpsSearch.url, "conviction name search")}. It shows convictions
        and deferred adjudications reported to the state, not every arrest.
      </p>

      <h3>Expunction and nondisclosure</h3>
      <p>
        Texas has two ways to clear a record ({ext(tx.sealing.url, "TexasLawHelp explains both")}). An expunction destroys
        the records and is usually for arrests that didn't lead to a conviction. An order of nondisclosure seals records from
        the public, often after deferred adjudication. Some
        first-time misdemeanors that end in deferred adjudication are sealed automatically.
      </p>

      <SearchCta placement="state-hub" />

      <h2>Texas county guides</h2>
      <p>
        We're starting with 25 of Texas's largest counties, home to most of the state's population. More counties are being
        checked against official sources and added in batches.
      </p>
      <ul className="county-grid">
        {txPublished.map((c) => (
          <li key={c.slug}>
            <Link href={`/texas/${c.slug}/`}>{c.name} County</Link>
          </li>
        ))}
      </ul>

      <h2>How full are Texas county jails?</h2>
      <p>
        On {formatDate(tcjsDate)}, Texas county jails held {n(held)} people in {n(beds)} beds, or{" "}
        {Math.round((held / beds) * 100)}% of capacity, according to the {ext(tx.tcjs.url, "Texas Commission on Jail Standards")}.
        Jails with at least 500 beds, fullest first:
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>County</th>
              <th>Held</th>
              <th>Capacity</th>
              <th>% full</th>
              <th>Awaiting trial</th>
              <th>A year earlier</th>
            </tr>
          </thead>
          <tbody>
            {big.map((r) => (
              <tr key={r.name}>
                <td>{published.has(r.name) ? <Link href={`/texas/${slugify(r.name)}/`}>{r.name}</Link> : r.name}</td>
                <td>{n(r.total)}</td>
                <td>{n(r.capacity!)}</td>
                <td>{r.pctCapacity}%</td>
                <td>{r.pretrialPct !== null ? `${r.pretrialPct}%` : ""}</td>
                <td>{n(r.totalYearAgo)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted">
        From the commission's monthly population report. "Held" can include people held for other agencies, such as federal
        detainees. "Awaiting trial" is the share not yet convicted.
      </p>

      <h2>Related guides</h2>
      <div className="cards">
        <Link className="card" href="/guides/how-to-check-for-a-warrant/">
          <strong>How to check for a warrant</strong>
          <span>Where warrant lists are and aren't public</span>
        </Link>
        <Link className="card" href="/guides/arrest-vs-conviction-records/">
          <strong>Arrest vs. conviction records</strong>
          <span>Why the difference matters</span>
        </Link>
        <Link className="card" href="/guides/remove-mugshot-from-internet/">
          <strong>Remove a mugshot from the internet</strong>
          <span>Takedown requests and search removal</span>
        </Link>
      </div>

      <Sources items={[tx.dpsSearch, tx.dpsFaq, tx.ccp1517, tx.sealing, tx.tdcjSearch, tx.tcjs]} reviewed={site.lastReviewed} />
    </article>
  );
}
