import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { districtCounties, districtName, getCounty, publishedCounties } from "@/data/minnesota";
import { mn } from "@/lib/mnResources";
import { formatDate, site } from "@/lib/site";

type Props = { params: Promise<{ county: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCounties.map((c) => ({ county: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county } = await params;
  const c = getCounty(county);
  if (!c?.detail) return {};
  const title = `${c.name} County, MN Arrest Records & Jail Roster Lookup`;
  const description = `How to check the ${c.name} County jail roster, search court cases, and look up conviction records in Minnesota using official, free sources.`;
  return {
    title,
    description,
    alternates: { canonical: `/minnesota/${c.slug}/` },
    openGraph: { title, description, url: `/minnesota/${c.slug}/` },
  };
}

export default async function CountyPage({ params }: Props) {
  const { county } = await params;
  const c = getCounty(county);
  if (!c?.detail) notFound();
  const d = c.detail;
  const neighbors = districtCounties(c.district).filter((n) => n.slug !== c.slug);
  const path = `/minnesota/${c.slug}/`;

  const faqs: { q: string; a: string }[] = [
    {
      q: `How do I find out if someone is in the ${c.name} County jail?`,
      a: d.roster
        ? `Use the ${d.roster.label} published by the ${d.sheriffName}. ${d.rosterNotes[0]}${d.jailPhone ? ` You can also call the jail at ${d.jailPhone}.` : ""}`
        : `Contact the ${d.sheriffName}${d.jailPhone ? ` at ${d.jailPhone}` : ""}.`,
    },
    {
      q: `Are ${c.name} County arrest records public?`,
      a: `Jail booking information is public while it is posted on the county roster, and court case records are public through Minnesota Court Records Online. Arrests that did not lead to a conviction are not part of the public criminal history the state Bureau of Criminal Apprehension releases.`,
    },
    {
      q: `Can I see old convictions from ${c.name} County?`,
      a: `The BCA's free public search shows a conviction for 15 years after the sentence is completed. District court records in MCRO can show older cases, unless a record was expunged or sealed.`,
    },
    {
      q: `Which court handles criminal cases in ${c.name} County?`,
      a: `${c.name} County District Court, part of Minnesota's ${districtName(c.district)}. The main courthouse is in ${c.seat}, the county seat.`,
    },
  ];

  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Minnesota", href: "/minnesota/" },
          { name: `${c.name} County`, href: path },
        ]}
      />
      <h1>How to Look Up Arrest Records in {c.name} County, Minnesota</h1>
      <p className="lede">
        There is no single place to see every arrest in {c.name} County. You check three official sources, each covering a
        different stage: the jail roster for recent bookings, the courts for charges and outcomes, and the state for
        convictions. All three are free.
      </p>
      <p className="muted">Last reviewed {formatDate(d.verified)}</p>

      <section className="facts" aria-label={`${c.name} County quick facts`}>
        <dl>
          <dt>Sheriff</dt>
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
              <dt>Jail phone</dt>
              <dd>
                <a href={`tel:${d.jailPhone}`}>{d.jailPhone}</a>
              </dd>
            </>
          )}
          {d.sheriffPhone && (
            <>
              <dt>Sheriff's office</dt>
              <dd>
                <a href={`tel:${d.sheriffPhone}`}>{d.sheriffPhone}</a>
              </dd>
            </>
          )}
          <dt>County seat</dt>
          <dd>{c.seat}</dd>
          <dt>Court district</dt>
          <dd>{districtName(c.district)}</dd>
        </dl>
      </section>

      <h2>1. Check whether someone is in jail right now</h2>
      {d.roster ? (
        <p>
          <span className="official">Official</span>
          <a href={d.roster.url} target="_blank" rel="noopener">
            {d.roster.label}
          </a>
        </p>
      ) : null}
      <ul>
        {d.rosterNotes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      {d.contractJail ? (
        <p>
          {c.name} County doesn't run its own jail. People arrested here are held at the {d.contractJail}
          {d.roster
            ? `, so its roster is where a recent ${c.name} County arrest will show up.`
            : ", so contact that facility to confirm whether someone is being held."}{" "}
          If charges were filed, the court case is the next place to look.
        </p>
      ) : d.roster ? (
        <p>
          A roster only covers people booked into the {c.name} County jail. If the arrest was made in another county, or
          the person was taken straight to a state facility, they will not appear here. City police departments in{" "}
          {c.name} County generally book arrestees into the county jail, so the sheriff's roster is the right first stop
          for most local arrests.
        </p>
      ) : (
        <p>
          Without an online roster, the phone is the fastest way to confirm a recent arrest. Have the person's full name
          and date of birth ready. If charges were filed, the court case is the next place to look.
        </p>
      )}

      <h2>2. Search the court case</h2>
      <p>
        <span className="official">Official</span>
        <a href={mn.mcro.url} target="_blank" rel="noopener">
          {mn.mcro.label}
        </a>
      </p>
      <p>
        Once charges are filed, the case moves to {c.name} County District Court. MCRO is the Minnesota Judicial Branch's free
        statewide search. It covers {c.name} County along with every other district court in the state, so one search finds
        cases filed anywhere in Minnesota.
      </p>
      <ul>
        <li>
          <strong>Case Search</strong> finds cases by name or case number and shows the register of actions: charges,
          hearings, and how the case ended.
        </li>
        <li>
          <strong>Hearing Search</strong> shows upcoming court dates.
        </li>
        <li>
          <strong>Document Search</strong> pulls public filings, but only when you have the case number.
        </li>
      </ul>
      <p>
        One big limit: a <strong>pending criminal case won't come up when you search the defendant's name</strong> online.
        Name searches only find criminal cases that ended in a conviction. For an open case, search by case number (it's on
        the citation or charging paperwork), or use the public access terminals at the courthouse in {c.seat}, which search
        statewide records and show more than the website does.
      </p>

      <h2>3. Check conviction history</h2>
      <p>
        <span className="official">Official</span>
        <a href={mn.bcaSearch.url} target="_blank" rel="noopener">
          {mn.bcaSearch.label}
        </a>
      </p>
      <p>
        The Bureau of Criminal Apprehension runs the state's free public criminal history search. You need the person's
        first name, last name, and date of birth. It shows convictions, the court, the sentence, and the level of offense
        (felony, gross misdemeanor, and so on).
      </p>
      <p>
        It does <strong>not</strong> show arrests that never led to a conviction, juvenile records, out-of-state or federal
        cases, or convictions where the sentence ended more than 15 years ago. That is why a clean BCA result does not mean
        a person was never arrested.
      </p>

      {(d.warrants || d.warrantNotes) && (
        <>
          <h2>Warrant search</h2>
          {d.warrants && (
            <p>
              <span className="official">Official</span>
              <a href={d.warrants.url} target="_blank" rel="noopener">
                {d.warrants.label}
              </a>
            </p>
          )}
          {d.warrantNotes && <p>{d.warrantNotes}</p>}
        </>
      )}

      <h2>Booking photos (mugshots)</h2>
      <p>
        Under Minnesota law, booking photos are generally public data, though an agency can hold one back temporarily if
        releasing it would hurt an active investigation (
        <a href={mn.statute1382.url} target="_blank" rel="noopener">
          Minn. Stat. § 13.82, subd. 26
        </a>
        ). Arrest Registry does not post booking photos.
        {d.bookingPhotos ? (
          <>
            {" "}
            The {d.sheriffName} explains its own release policy on its{" "}
            <a href={d.bookingPhotos.url} target="_blank" rel="noopener">
              booking photo page
            </a>
            .
          </>
        ) : (
          <> To request one, contact the {d.sheriffName} directly.</>
        )}
      </p>

      <SearchCta placement="county-mid" county={c.name} />

      <h2>What an arrest record does and doesn't tell you</h2>
      <p>
        An arrest means police had probable cause to take someone into custody. It is not a finding of guilt. Plenty of
        bookings end with charges dropped, reduced, or dismissed, so read the court record before drawing conclusions.
      </p>
      <p>
        Minnesota's Clean Slate Act, in effect since January 1, 2025, also seals many records automatically, including
        dismissed cases and certain lower-level convictions after a crime-free waiting period. Once a record is expunged it
        drops out of public view. See our{" "}
        <Link href="/guides/minnesota-expungement-clean-slate/">guide to Minnesota expungement</Link> for who qualifies.
      </p>
      {(d.otherLinks?.length ?? 0) > 0 && (
        <>
          <h3>More from the {d.sheriffName}</h3>
          <ul>
            {d.otherLinks!.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Helpful guides</h2>
      <div className="cards">
        <Link className="card" href="/guides/find-out-if-someone-is-in-jail-minnesota/">
          <strong>Find someone in jail</strong>
          <span>Rosters, state prison, federal and ICE custody</span>
        </Link>
        <Link className="card" href="/guides/jail-roster-terms-glossary/">
          <strong>Jail roster terms</strong>
          <span>What ROR, hold, Huber and other terms mean</span>
        </Link>
        <Link className="card" href="/guides/how-bail-works-minnesota/">
          <strong>How bail works</strong>
          <span>Release options and how fast someone sees a judge</span>
        </Link>
        <Link className="card" href="/guides/check-for-warrant-minnesota/">
          <strong>Check for a warrant</strong>
          <span>County lists and what to do next</span>
        </Link>
      </div>

      <section className="faq">
        <h2>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <h2>Other counties in the {districtName(c.district)}</h2>
      {neighbors.length ? (
        <ul className="county-grid">
          {neighbors.map((n) => (
            <li key={n.slug}>
              {n.detail ? (
                <Link href={`/minnesota/${n.slug}/`}>{n.name} County</Link>
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
          {c.name} County is the only county in this district. <Link href="/minnesota/">See all Minnesota counties</Link>.
        </p>
      )}

      <Sources
        items={[...d.sources, mn.mcroInfo, mn.bcaFaq, mn.statute1382]}
        reviewed={d.verified}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `How to Look Up Arrest Records in ${c.name} County, Minnesota`,
          dateModified: d.verified,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: site.url + path,
          about: { "@type": "AdministrativeArea", name: `${c.name} County, Minnesota` },
        }}
      />
    </article>
  );
}
