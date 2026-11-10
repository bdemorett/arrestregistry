import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides to Arrest, Jail, Warrant and Court Records",
  description:
    "Plain-English guides to finding someone in jail, checking for a warrant, looking up a court date, bail, expungement, and getting a mugshot removed.",
  alternates: { canonical: "/guides/" },
};

// Guides grouped by what the reader is trying to do right now.
const groups: { heading: string; intro: string; slugs: string[] }[] = [
  {
    heading: "Someone was just arrested",
    intro:
      "Start here if a friend or family member was picked up. These cover finding out where they're held, how release works, and when they'll see a judge.",
    slugs: ["find-out-if-someone-is-in-jail-minnesota", "how-bail-works-minnesota", "jail-roster-terms-glossary", "find-someone-in-minnesota-prison"],
  },
  {
    heading: "Warrants and court dates",
    intro:
      "Most warrants come from a missed court date or an unpaid fine. These explain how to check for one and how to find the next hearing in a case.",
    slugs: ["check-for-warrant-minnesota", "minnesota-court-date-lookup"],
  },
  {
    heading: "Your own record",
    intro:
      "For checking what shows up about you, clearing old records, and getting arrest information taken down.",
    slugs: [
      "background-check-on-yourself-minnesota",
      "minnesota-expungement-clean-slate",
      "remove-mugshot-from-internet",
      "arrest-vs-conviction-records",
      "are-arrest-records-public-in-minnesota",
    ],
  },
];

export default function GuidesPage() {
  const bySlug = new Map(guides.map((g) => [g.slug, g]));
  const listed = new Set(groups.flatMap((g) => g.slugs));
  const others = guides.filter((g) => !listed.has(g.slug));
  return (
    <article>
      <Breadcrumbs items={[{ name: "Guides", href: "/guides/" }]} />
      <h1>Guides to Arrest, Jail and Court Records</h1>
      <p className="lede">
        Arrest information is split across the county jail, the courts, and the state's criminal records agency, and each
        one has its own rules. These guides explain how each piece works and where to look, with links to the official
        sources.
      </p>
      <p>
        Several guides are written for Minnesota, where we started, and the steps are similar in most states. For a
        specific county, use the <Link href="/minnesota/">Minnesota</Link> or <Link href="/florida/">Florida</Link> county
        guides, which list that county's official jail search, court records and contacts.
      </p>

      {groups.map((grp) => (
        <section key={grp.heading}>
          <h2>{grp.heading}</h2>
          <p>{grp.intro}</p>
          <div className="cards">
            {grp.slugs
              .map((s) => bySlug.get(s))
              .filter((g): g is (typeof guides)[number] => Boolean(g))
              .map((g) => (
                <Link key={g.slug} className="card" href={`/guides/${g.slug}/`}>
                  <strong>{g.title}</strong>
                  <span>{g.blurb}</span>
                </Link>
              ))}
          </div>
        </section>
      ))}

      {others.length > 0 && (
        <section>
          <h2>More guides</h2>
          <div className="cards">
            {others.map((g) => (
              <Link key={g.slug} className="card" href={`/guides/${g.slug}/`}>
                <strong>{g.title}</strong>
                <span>{g.blurb}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
