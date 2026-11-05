import type { Metadata } from "next";
import Link from "next/link";
import CountyFinder from "@/components/CountyFinder";
import JsonLd from "@/components/JsonLd";
import { publishedCounties } from "@/data/states/minnesota/counties";
import { flPublished } from "@/data/states/florida/counties";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const finderList = [
    ...publishedCounties.map((c) => ({ slug: c.slug, name: c.name, seat: c.seat, state: "minnesota", stateAbbr: "MN" })),
    ...flPublished.map((c) => ({ slug: c.slug, name: c.name, seat: c.seat, state: "florida", stateAbbr: "FL" })),
  ].sort((a, b) => a.name.localeCompare(b.name) || a.stateAbbr.localeCompare(b.stateAbbr));
  return (
    <>
      <section className="hero">
        <h1>Find where an arrest record lives</h1>
        <p className="lede">
          After an arrest, information can show up in three places, and each one publishes something different. We cover 85
          of Minnesota's 87 counties and {flPublished.length} Florida counties so far, pointing you to the official source at each stop.
          More counties and states are coming.
        </p>
        <ol className="line" aria-label="Where arrest information is published, in order">
          <li>
            <strong>County jail</strong>
            <span>Who's in custody now, charges, bail</span>
          </li>
          <li>
            <strong>Court records</strong>
            <span>Charges filed, hearings, outcome</span>
          </li>
          <li>
            <strong>State record</strong>
            <span>Criminal history kept by the state</span>
          </li>
        </ol>
      </section>

      <CountyFinder counties={finderList} placeholder="County or county seat, e.g. Stearns or Orlando" />

      <h2>Common questions, answered</h2>
      <div className="cards">
        {guides.slice(0, 8).map((g) => (
          <Link key={g.slug} className="card" href={`/guides/${g.slug}/`}>
            <strong>{g.title}</strong>
            <span>{g.blurb}</span>
          </Link>
        ))}
      </div>
      <p>
        Browse <Link href="/guides/">all guides</Link>, the <Link href="/minnesota/">Minnesota overview</Link>, or the{" "}
        <Link href="/florida/">Florida overview</Link>.
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.tagline,
        }}
      />
    </>
  );
}
