import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { getTxCounty, tcjsDate, tcjsRows, txPublished } from "@/data/states/texas/counties";
import { tx } from "@/data/states/texas/resources";
import { formatDate, site } from "@/lib/site";

export function countySlugs() {
  return txPublished.map((c) => c.slug);
}

export function indexableSlugs() {
  return txPublished.filter((c) => !c.detail.noindex).map((c) => c.slug);
}

const seatLabel = (name: string, seat: string) =>
  seat.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(seat.toLowerCase()) ? "" : ` (${seat})`;

export function countyMetadata(county: string): Metadata {
  const c = getTxCounty(county);
  if (!c) return {};
  const title = `${c.name} County${seatLabel(c.name, c.seat)}, TX Jail Roster & Arrest Records`;
  const description = c.detail.roster
    ? `Search the ${c.name} County jail (${c.seat}, TX): official inmate search link, jail phone, how full the jail is, and where to find felony and misdemeanor court records.`
    : `${c.name} County (${c.seat}, TX) has no online jail roster. Who to call, how full the jail is, and where to find felony and misdemeanor court records.`;
  return {
    title,
    description,
    alternates: { canonical: `/texas/${c.slug}/` },
    openGraph: { title, description, url: `/texas/${c.slug}/` },
    ...(c.detail.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

const ext = (url: string, text: string) => (
  <a href={url} target="_blank" rel="noopener">
    {text}
  </a>
);

const n = (x: number) => x.toLocaleString("en-US");

export default function TexasCountyPage({ county }: { county: string }) {
  const c = getTxCounty(county);
  if (!c) notFound();
  const d = c.detail;
  const path = `/texas/${c.slug}/`;
  const j = tcjsRows[c.name];
  const callPhone = d.jailPhone || d.infoPhone;

  const faqs: { q: string; a: string }[] = [
    {
      q: `How do I find out if someone is in the ${c.name} County jail?`,
      a: d.roster
        ? `Search the ${d.roster.label}.${callPhone ? ` To confirm by phone, call ${callPhone}.` : ""} Have the person's full name and date of birth ready.`
        : `${c.name} County doesn't post an online jail roster.${callPhone ? ` Call ${callPhone}` : " Call the sheriff's office"} with the person's full name and date of birth.`,
    },
    {
      q: `How do I look up a ${c.name} County court case?`,
      a: `${d.courtNote} Use the ${d.courtSearch.map((l) => l.label).join(" or the ")}.`,
    },
  ];

  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Texas", href: "/texas/" },
          { name: `${c.name} County`, href: path },
        ]}
      />
      <p className="muted">Independent guide. Not a government website.</p>
      <h1>{c.name} County, Texas: Jail Roster and Arrest Records</h1>
      <p className="lede">
        {d.roster
          ? `The ${d.sheriffName} runs the county jail. Here's the official way to check who's in custody, who to call, how full the jail is, and where felony and misdemeanor court records are kept.`
          : `${c.name} County doesn't post an online jail roster, so the phone is the way to check custody. Here's who to call, how full the jail is, and where to find court records.`}
      </p>
      <p className="muted">Last checked against official sources {formatDate(d.verified)}</p>

      <section className="facts" aria-label={`${c.name} County contacts`}>
        <dl>
          <dt>County seat</dt>
          <dd>{c.seat}</dd>
          <dt>Jail run by</dt>
          <dd>{d.sheriffName}</dd>
          {d.jailName && (
            <>
              <dt>Jail</dt>
              <dd>{d.jailName}</dd>
            </>
          )}
          {d.jailAddress && (
            <>
              <dt>Address</dt>
              <dd>{d.jailAddress}</dd>
            </>
          )}
          {d.jailPhone && (
            <>
              <dt>{d.jailPhoneLabel ?? "Jail phone"}</dt>
              <dd>
                <a href={`tel:${d.jailPhone}`}>{d.jailPhone}</a>
              </dd>
            </>
          )}
          {d.infoPhone && (
            <>
              <dt>{d.infoPhoneLabel ?? "Main line"}</dt>
              <dd>
                <a href={`tel:${d.infoPhone}`}>{d.infoPhone}</a>
              </dd>
            </>
          )}
          {j && !j.noJail && j.capacity ? (
            <>
              <dt>Jail population</dt>
              <dd>
                {n(j.total)} of {n(j.capacity)} beds ({j.pctCapacity}%) on {formatDate(tcjsDate)}
              </dd>
            </>
          ) : null}
        </dl>
      </section>

      <div className="route">
        <h2 className="station">{c.name} County jail roster: who's in custody</h2>
        {d.roster && (
          <p>
            <span className="official">Official</span>
            {ext(d.roster.url, d.roster.label)}
          </p>
        )}
        <ul>
          {d.rosterNotes.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="muted">Only people held in this county's jail appear.</p>

        {(d.warrants || d.warrantNote) && (
          <>
            <h2>{c.name} County warrant search</h2>
            {d.warrants && (
              <p>
                <span className="official">Official</span>
                {ext(d.warrants.url, d.warrants.label)}
              </p>
            )}
            {d.warrantNote && <p>{d.warrantNote}</p>}
            <p className="muted">
              Texas has no statewide public warrant search. <Link href="/guides/how-to-check-for-a-warrant/">How to check for a warrant</Link>.
            </p>
          </>
        )}

        <h2 className="station">{c.name} County court records and court dates</h2>
        <p>
          {/district clerk/i.test(d.courtNote)
            ? d.courtNote
            : `In most Texas counties the district clerk keeps felony cases and the county clerk keeps Class A and B misdemeanors. ${d.courtNote}`}
        </p>
        {d.courtSearch.map((l) => (
          <p key={l.url}>
            <span className="official">Official</span>
            {ext(l.url, l.label)}
          </p>
        ))}

      </div>

      {j && !j.noJail && j.capacity ? (
        <>
          <h2>How full is the {c.name} County jail?</h2>
          <p>
            On {formatDate(tcjsDate)}, the {c.name} County jail held {n(j.total)} people, {j.pctCapacity}% of its{" "}
            {n(j.capacity)}-bed capacity, according to the Texas Commission on Jail Standards.
            {j.totalYearAgo ? ` A year earlier it held ${n(j.totalYearAgo)}.` : ""}
            {j.pretrialPct !== null ? ` About ${j.pretrialPct}% of the people held were awaiting trial rather than serving a sentence.` : ""}
            {j.housedElsewhere ? ` Another ${n(j.housedElsewhere)} people from ${c.name} County were being held in other jails.` : ""}
          </p>
          {j.housedElsewhere ? (
            <p className="muted">
              If someone isn't on the {c.name} County roster, they may be held in another county's jail under contract. The jail
              can tell you where.
            </p>
          ) : null}
          <p className="muted">Texas Commission on Jail Standards monthly report.</p>
        </>
      ) : null}

      <h2>Looking for someone who's been released?</h2>
      <p>
        {d.roster
          ? d.pastSearch
            ? `The ${d.roster.label} ${d.pastSearch}.`
            : "The official jail search is mainly for people in custody now, so someone who's been released may not show up."
          : "Without an online roster, call the jail to ask whether someone has been released."}{" "}
        To find an older arrest:
      </p>
      <ul>
        <li>
          <strong>The court case:</strong> {ext(d.courtSearch[0].url, d.courtSearch[0].label)}, by name.
        </li>
        <li>
          <strong>Convictions statewide:</strong> the {ext(tx.dpsSearch.url, "DPS Conviction Name Search")}.
        </li>
        <li>
          <strong>Prison or state jail:</strong> the {ext(tx.tdcjSearch.url, "TDCJ Inmate Search")}.
        </li>
      </ul>

      {d.otherLinks && d.otherLinks.length > 0 && (
        <>
          <h2>More official links</h2>
          <ul>
            {d.otherLinks.map((l) => (
              <li key={l.url}>{ext(l.url, l.label)}</li>
            ))}
          </ul>
        </>
      )}

      <SearchCta placement="county-mid" county={c.name} />

      <p className="muted">
        An arrest isn't a conviction. Statewide rules on bail, expunction and nondisclosure are in the{" "}
        <Link href="/texas/">Texas overview</Link>.
      </p>

      <section className="faq">
        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <p>
        <Link href="/texas/">All Texas counties</Link> · <Link href="/guides/jail-roster-terms-glossary/">Jail roster terms</Link>
      </p>

      <Sources items={[...d.sources, tx.tcjs, tx.dpsSearch, tx.ccp1517, tx.sealing, tx.tdcjSearch]} reviewed={d.verified} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${c.name} County, Texas: Jail Roster and Arrest Records`,
          dateModified: d.verified,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: site.url + path,
          about: { "@type": "AdministrativeArea", name: `${c.name} County, Texas` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </article>
  );
}

