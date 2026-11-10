import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CrimeStats from "@/components/CrimeStats";
import JsonLd from "@/components/JsonLd";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { courtSources, mnCourts } from "@/data/states/minnesota/courts";
import { ucrSource } from "@/data/states/minnesota/ucr2025";
import { districtCounties, districtName, getCounty, publishedCounties } from "@/data/states/minnesota/counties";
import { mn } from "@/data/states/minnesota/resources";
import { formatDate, site } from "@/lib/site";

export function countySlugs() {
  return publishedCounties.map((c) => c.slug);
}

export function countyMetadata(county: string): Metadata {
  const c = getCounty(county);
  if (!c?.detail) return {};
  const d = c.detail;
  const place = seatLabel(c.name, c.seat);
  const title = d.roster
    ? d.warrants
      ? `${c.name} County${place}, MN Jail Roster, Warrants & Arrest Records`
      : `${c.name} County${place}, MN Jail Roster & Arrest Records`
    : `${c.name} County${place}, MN Arrest Records: Jail, Court & Sheriff Contacts`;
  const description = d.roster
    ? `Official ${c.name} County jail roster link (${c.seat}, MN), how long records stay up, sheriff and courthouse contacts, and how to search court cases and convictions.`
    : `${c.name} County (${c.seat}, MN) doesn't post an online jail roster. Here's who to call, where the courthouse is, and how to search court cases and convictions for free.`;
  return {
    title,
    description,
    alternates: { canonical: `/minnesota/${c.slug}/` },
    openGraph: { title, description, url: `/minnesota/${c.slug}/` },
  };
}

// Show the county seat in titles, unless it just repeats the county name.
const seatLabel = (name: string, seat: string) =>
  seat.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(seat.toLowerCase()) ? "" : ` (${seat})`;

// Short names people search for
const nicknames: Record<string, string> = { "Lac qui Parle": "LQP" };

const ext = (url: string, text: string) => (
  <a href={url} target="_blank" rel="noopener">
    {text}
  </a>
);

export default function CountyPage({ county }: { county: string }) {
  const c = getCounty(county);
  if (!c?.detail) notFound();
  const d = c.detail;
  const court = mnCourts[c.name];
  const neighbors = districtCounties(c.district).filter((n) => n.slug !== c.slug);
  const path = `/minnesota/${c.slug}/`;
  const contactPhone = d.jailPhone || d.sheriffPhone;
  const releaseLine = d.contractJail
    ? `${c.name} County inmates are held at the ${d.contractJail}, so check that jail's roster or call it first.`
    : d.roster
      ? d.releaseWindow
        ? `The ${d.roster.label} ${d.releaseWindow}. After that, released people drop off.`
        : `The ${d.roster.label} is meant for people in custody now, so someone who's been released usually drops off.`
      : `${c.name} County doesn't post an online roster, so call ${contactPhone ? `${d.jailPhone ? "the jail" : "the sheriff's office"} at ${contactPhone}` : `the ${d.sheriffName}`}.`;

  const faqs: { q: string; a: string }[] = [
    {
      q: `How do I find out if someone is in the ${c.name} County jail?`,
      a: d.contractJail
        ? `${c.name} County doesn't run its own jail. People arrested there are held at the ${d.contractJail}. ${d.rosterNotes[d.rosterNotes.length - 1]}`
        : d.roster
          ? `Check the ${d.roster.label}, published by the ${d.sheriffName}.${contactPhone ? ` To confirm, call ${d.jailPhone ? "the jail" : "the sheriff's office"} at ${contactPhone}.` : ""}`
          : `${c.name} County doesn't post an online roster.${contactPhone ? ` Call ${d.jailPhone ? "the jail" : "the sheriff's office"} at ${contactPhone}` : ` Contact the ${d.sheriffName}`} with the person's full name and date of birth.`,
    },
    ...(court
      ? [
          {
            q: `Where is the ${c.name} County courthouse?`,
            a: `${court.name}, ${court.address}.${court.phone ? ` The court's main number is ${court.phone}.` : ""} It's part of Minnesota's ${districtName(c.district)}.`,
          },
        ]
      : []),
    {
      q: `How do I find someone who was released from the ${c.name} County jail?`,
      a: `${releaseLine} For an older arrest, search the court case in Minnesota Court Records Online, check convictions in the BCA's free Public Criminal History Search, or ask the ${d.sheriffName} for the booking record. Basic arrest data is public under Minn. Stat. § 13.82.`,
    },
    {
      q: `Does ${c.name} County post a warrant list?`,
      a: d.warrants
        ? `Yes. The ${d.warrants.label} is published online. Lists can lag, so confirm with the sheriff's office.`
        : d.warrantNotes
          ? d.warrantNotes
          : `Not online that we could find. Call the ${d.sheriffName}${d.sheriffPhone ? ` at ${d.sheriffPhone}` : ""} to ask about a warrant.`,
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
      <p className="muted">Independent guide. Not a government website.</p>
      <h1>{c.name} County, Minnesota: Jail Roster and Arrest Records</h1>
      <p className="lede">
        {d.contractJail
          ? `${c.name} County boards inmates at the ${d.contractJail}. Here's where to check custody, who to call, and how to find the court case.`
          : d.roster
            ? `The ${d.sheriffName} posts an online roster of who's in the ${d.jailName ?? "county jail"}. Here's how to use it, what it covers, and where to look once a case reaches court.`
            : `${c.name} County doesn't post an online jail roster, so the phone is your fastest route. Here's who to call and how to find the court case.`}
      </p>
      <p className="muted">Last checked against official sources {formatDate(d.verified)}</p>

      <section className="facts" aria-label={`${c.name} County contacts`}>
        <dl>
          <dt>County seat</dt>
          <dd>
            {c.seat}
            {nicknames[c.name] ? ` (${c.name} County is often shortened to ${nicknames[c.name]})` : ""}
          </dd>
          <dt>Sheriff</dt>
          <dd>{d.sheriffName}</dd>
          {d.jailName && (
            <>
              <dt>Jail</dt>
              <dd>{d.jailName}</dd>
            </>
          )}
          {d.contractJail && (
            <>
              <dt>Inmates held at</dt>
              <dd>{d.contractJail}</dd>
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
          {court && (
            <>
              <dt>Courthouse</dt>
              <dd>
                {court.name}
                <br />
                {court.address}
              </dd>
            </>
          )}
          {court?.phone && (
            <>
              <dt>Court phone</dt>
              <dd>
                <a href={`tel:${court.phone}`}>{court.phone}</a>
              </dd>
            </>
          )}
          <dt>Court district</dt>
          <dd>{districtName(c.district)}</dd>
        </dl>
      </section>

      <div className="route">
      <h2 className="station">Check whether someone is in custody</h2>
      {d.roster && (
        <p>
          <span className="official">Official</span>
          {ext(d.roster.url, d.roster.label)}
        </p>
      )}
      <ul>
        {d.rosterNotes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      {!d.contractJail && d.roster && (
        <p className="muted">
          The roster only covers people booked into this jail. Arrests in other counties, or people sent straight to state
          prison, won't appear. See <Link href="/guides/find-out-if-someone-is-in-jail-minnesota/">how to find someone in custody</Link>{" "}
          for the other places to check.
        </p>
      )}
      {!d.roster && !d.contractJail && (
        <p className="muted">
          When you call, have the person's full name and date of birth ready. Jails generally confirm whether someone is in
          custody but won't discuss the case.
        </p>
      )}

      <h2>Warrant search</h2>
      {d.warrants && (
        <p>
          <span className="official">Official</span>
          {ext(d.warrants.url, d.warrants.label)}
        </p>
      )}
      {d.warrantNotes && <p>{d.warrantNotes}</p>}
      {!d.warrants && !d.warrantNotes && (
        <p>
          We couldn't find an online warrant list for {c.name} County. To ask about a warrant, call the {d.sheriffName}
          {d.sheriffPhone ? ` at ${d.sheriffPhone}` : ""}.
        </p>
      )}
      <p className="muted">
        Minnesota has no public statewide warrant search, so each county's list only covers its own warrants. Not being
        listed doesn't always mean there's no warrant. See <Link href="/guides/check-for-warrant-minnesota/">how to check for a warrant</Link>.
      </p>


      <h2 className="station">Find the court case</h2>
      {court && (
        <p>
          Criminal cases from {c.name} County are heard at the <strong>{court.name}</strong>, {court.address}
          {court.phone ? `, ${court.phone}` : ""}.{court.note ? ` ${court.note}` : ""}
          {court.url && (
            <>
              {" "}
              {ext(court.url, `${c.name} County District Court page`)}.
            </>
          )}
        </p>
      )}
      <p>
        Search the case in {ext(mn.mcro.url, "Minnesota Court Records Online")}. Open criminal cases don't come up by name,
        only by case number, which is usually on the roster or charging paperwork. The public terminals at the courthouse
        search statewide and show more than the website. More in{" "}
        <Link href="/guides/minnesota-court-date-lookup/">how to look up a court date</Link>.
      </p>

      <h2 className="station">Check conviction history</h2>
      <p>
        The BCA's free {ext(mn.bcaSearch.url, "Public Criminal History Search")} shows Minnesota convictions for 15 years
        after a sentence ends. It doesn't show arrests without a conviction. See{" "}
        <Link href="/guides/are-arrest-records-public-in-minnesota/">what's public in Minnesota</Link>.
      </p>
      </div>

      <h2>Looking for someone who's been released?</h2>
      <p>{releaseLine} To find an older arrest:</p>
      <ul>
        <li>
          <strong>The court case:</strong> search {ext(mn.mcro.url, "Minnesota Court Records Online")}. Not every criminal case
          shows up in an online name search, so if you don't find it, the public terminals at any Minnesota courthouse show more.
        </li>
        <li>
          <strong>Convictions:</strong> the BCA's free {ext(mn.bcaSearch.url, "Public Criminal History Search")} covers convictions
          for 15 years after the sentence ends.
        </li>
        <li>
          <strong>The booking record:</strong> basic arrest and booking data is public under{" "}
          {ext(mn.statute1382.url, "Minn. Stat. § 13.82")}. Ask the {d.sheriffName}'s records office for it.
        </li>
        <li>
          <strong>Sent to prison:</strong> check the {ext(mn.docLocator.url, "Minnesota DOC Offender Locator")}.
        </li>
      </ul>

      <CrimeStats county={c.name} district={c.district} districtCountyCount={districtCounties(c.district).length} />

      {(d.bookingPhotos || (d.otherLinks?.length ?? 0) > 0) && (
        <>
          <h2>More from the {d.sheriffName}</h2>
          <ul>
            {d.bookingPhotos && <li>{ext(d.bookingPhotos.url, d.bookingPhotos.label)}</li>}
            {d.otherLinks?.map((l) => <li key={l.url}>{ext(l.url, l.label)}</li>)}
          </ul>
        </>
      )}

      <SearchCta placement="county-mid" county={c.name} />

      <p>
        An arrest isn't a conviction, and many Minnesota records are now sealed automatically under the Clean Slate Act. See{" "}
        <Link href="/guides/arrest-vs-conviction-records/">arrest vs. conviction records</Link> and{" "}
        <Link href="/guides/minnesota-expungement-clean-slate/">Minnesota expungement</Link>. Arrest Registry doesn't post
        booking photos; <Link href="/guides/remove-mugshot-from-internet/">here's how to get one removed</Link>.
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
        <Link className="card" href="/guides/jail-roster-terms-glossary/">
          <strong>Jail roster terms</strong>
          <span>What ROR, hold, Huber and other terms mean</span>
        </Link>
        <Link className="card" href="/guides/how-bail-works-minnesota/">
          <strong>How bail works</strong>
          <span>Release options and how fast someone sees a judge</span>
        </Link>
        <Link className="card" href="/guides/find-someone-in-minnesota-prison/">
          <strong>Find someone in prison</strong>
          <span>Minnesota DOC Offender Locator</span>
        </Link>
      </div>

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

      <Sources items={[...d.sources, ...(court?.url ? [{ label: `${c.name} County District Court`, url: court.url }] : []), ...courtSources, ucrSource, mn.mcroInfo]} reviewed={d.verified} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${c.name} County, Minnesota: Jail Roster and Arrest Records`,
          dateModified: d.verified,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: site.url + path,
          about: { "@type": "AdministrativeArea", name: `${c.name} County, Minnesota` },
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
