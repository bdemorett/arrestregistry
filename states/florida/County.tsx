import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { circuitCounties, circuitName, flPublished, getFlCounty } from "@/data/states/florida/counties";
import { fl } from "@/data/states/florida/resources";
import { formatDate, site } from "@/lib/site";

export function countySlugs() {
  return flPublished.map((c) => c.slug);
}

export function countyMetadata(county: string): Metadata {
  const c = getFlCounty(county);
  if (!c?.detail) return {};
  const title = `${c.name} County, FL Jail Roster & Arrest Records Lookup`;
  const description = `Official ${c.name} County inmate search, who runs the jail, the clerk's court case search, and how to check Florida criminal history for free or at low cost.`;
  return {
    title,
    description,
    alternates: { canonical: `/florida/${c.slug}/` },
    openGraph: { title, description, url: `/florida/${c.slug}/` },
  };
}

const ext = (url: string, text: string) => (
  <a href={url} target="_blank" rel="noopener">
    {text}
  </a>
);

export default function FloridaCountyPage({ county }: { county: string }) {
  const c = getFlCounty(county);
  if (!c?.detail) notFound();
  const d = c.detail;
  const path = `/florida/${c.slug}/`;
  const neighbors = circuitCounties(c.circuit).filter((n) => n.slug !== c.slug);
  const jailRunner = d.jailOperator ?? `the ${d.sheriffName}`;
  const callPhone = d.jailPhone || d.infoPhone;

  const faqs: { q: string; a: string }[] = [
    {
      q: `How do I find out if someone is in the ${c.name} County jail?`,
      a: `Search the ${d.roster.label}, run by ${jailRunner}.${callPhone ? ` To confirm by phone, call ${callPhone}${d.jailPhone ? "" : ` (${d.infoPhoneLabel ?? "main line"})`}.` : ""} Have the person's full name and date of birth ready.`,
    },
    {
      q: `Who runs the jail in ${c.name} County?`,
      a: d.jailOperator
        ? `${d.jailOperator}. In ${c.name} County the jail is run by county government, not the sheriff, so jail questions go there.`
        : `The ${d.sheriffName}. In most Florida counties the sheriff runs the jail.`,
    },
    {
      q: `How do I look up a ${c.name} County court case?`,
      a: `Criminal cases are filed with the ${d.clerk.name}. Use the ${d.clerk.search.label} to find charges, hearings and outcomes. Some documents are confidential and won't show online.`,
    },
    {
      q: "Will an arrest stay on someone's record if the charges were dropped?",
      a: "Not always. Florida automatically seals many state criminal history records when no charges were filed, the charges were dismissed, or the person was found not guilty. Some serious offenses are excluded, and older or ineligible records may need a court-ordered sealing or expunction.",
    },
  ];

  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Florida", href: "/florida/" },
          { name: `${c.name} County`, href: path },
        ]}
      />
      <p className="muted">Independent guide. Not a government website.</p>
      <h1>{c.name} County, Florida: Jail Roster and Arrest Records</h1>
      <p className="lede">
        {d.jailOperator
          ? `${c.name} County's jail is run by ${d.jailOperator}, not the sheriff. Here's where to check custody, who to call, and how to find the court case with the clerk.`
          : `The ${d.sheriffName} runs the county jail and posts an online inmate search. Here's how to use it, what it covers, and where to look once a case reaches court.`}
      </p>
      <p className="muted">Last checked against official sources {formatDate(d.verified)}</p>

      <section className="facts" aria-label={`${c.name} County contacts`}>
        <dl>
          <dt>Sheriff</dt>
          <dd>{d.sheriffName}</dd>
          {d.jailOperator && (
            <>
              <dt>Jail run by</dt>
              <dd>{d.jailOperator}</dd>
            </>
          )}
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
          <dt>Court records</dt>
          <dd>{d.clerk.name}</dd>
          <dt>Court circuit</dt>
          <dd>{circuitName(c.circuit)}</dd>
        </dl>
      </section>

      <div className="route">
        <h2 className="station">Check whether someone is in custody</h2>
        <p>
          <span className="official">Official</span>
          {ext(d.roster.url, d.roster.label)}
        </p>
        {d.pastArrests && (
          <p>
            <span className="official">Official</span>
            {ext(d.pastArrests.url, d.pastArrests.label)}
          </p>
        )}
        <ul>
          {d.rosterNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="muted">
          A county search only covers that county's jail. Someone arrested elsewhere, or already sent to state prison, won't
          show up here. For prison, use the {ext(fl.fdcSearch.url, "Florida Department of Corrections Offender Search")}.
        </p>

        {d.warrants && (
          <>
            <h2>Warrants</h2>
            <p>
              <span className="official">Official</span>
              {ext(d.warrants.url, d.warrants.label)}
            </p>
            <p className="muted">Lists can lag. Not being listed doesn't always mean there's no warrant, so confirm with the sheriff's office.</p>
          </>
        )}

        <h2 className="station">Find the court case</h2>
        <p>
          In Florida, each county's elected clerk keeps the court records. Criminal cases from {c.name} County are filed with
          the <strong>{d.clerk.name}</strong>.
        </p>
        <p>
          <span className="official">Official</span>
          {ext(d.clerk.search.url, d.clerk.search.label)}
        </p>
        <p>
          Florida court records are generally public, so a name search usually shows open and closed cases with charges,
          hearing dates and outcomes. Sealed and expunged cases, and some confidential documents, won't appear. To search all
          67 counties at once, the clerks offer {ext(fl.caseAccess.url, "CaseAccess")}, a paid subscription through the
          Florida Courts E-Filing Portal.
        </p>

        <h2 className="station">Check Florida criminal history</h2>
        <p>
          The Florida Department of Law Enforcement sells a statewide {ext(fl.fdleSearch.url, "criminal history search")} for
          $24 per name, plus a $1 card fee online. It covers Florida records, not other states, and sealed or expunged records
          aren't released.
        </p>
      </div>

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

      <p>
        An arrest isn't a conviction. Florida also limits what booking photo sites can do: under{" "}
        {ext(fl.statute90143.url, "Fla. Stat. § 901.43")}, a site that publishes mugshots can't charge to remove one and must take
        it down within 10 days of a written request sent by registered mail. Arrest Registry doesn't post booking photos;{" "}
        <Link href="/guides/remove-mugshot-from-internet/">here's how to get one removed</Link>.
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

      <h2>Helpful guides</h2>
      <div className="cards">
        <Link className="card" href="/florida/">
          <strong>Florida arrest records overview</strong>
          <span>What's public, sealing, first appearance and bail</span>
        </Link>
        <Link className="card" href="/guides/jail-roster-terms-glossary/">
          <strong>Jail roster terms</strong>
          <span>What ROR, hold and other terms mean</span>
        </Link>
        <Link className="card" href="/guides/arrest-vs-conviction-records/">
          <strong>Arrest vs. conviction records</strong>
          <span>Why the difference matters</span>
        </Link>
      </div>

      <h2>Other counties in the {circuitName(c.circuit)}</h2>
      {neighbors.length ? (
        <ul className="county-grid">
          {neighbors.map((n) => (
            <li key={n.slug}>
              {n.detail ? (
                <Link href={`/florida/${n.slug}/`}>{n.name} County</Link>
              ) : (
                <span className="soon">
                  {n.name} County<span className="tag">coming soon</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          {c.name} County is the only county in this circuit. <Link href="/florida/">See all Florida counties</Link>.
        </p>
      )}

      <Sources items={[...d.sources, fl.fdleSearch, fl.fdcSearch, fl.statute9430595, fl.statute90143, fl.statute26021]} reviewed={d.verified} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${c.name} County, Florida: Jail Roster and Arrest Records`,
          dateModified: d.verified,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: site.url + path,
          about: { "@type": "AdministrativeArea", name: `${c.name} County, Florida` },
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
