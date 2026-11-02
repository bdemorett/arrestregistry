import type { Metadata } from "next";
import Link from "next/link";
import CountyFinder from "@/components/CountyFinder";
import JsonLd from "@/components/JsonLd";
import { publishedCounties } from "@/data/minnesota";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const finderList = publishedCounties.map((c) => ({ slug: c.slug, name: c.name, seat: c.seat })).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <section className="hero">
        <h1>Find where an arrest record lives</h1>
        <p className="lede">
          An arrest moves through three offices, and each one publishes something different. We map the official, free
          sources for every stop, county by county.
        </p>
        <ol className="line" aria-label="Where arrest information is published, in order">
          <li>
            <strong>County jail</strong>
            <span>Who's in custody now, charges, bail</span>
          </li>
          <li>
            <strong>District court</strong>
            <span>Charges filed, hearings, outcome</span>
          </li>
          <li>
            <strong>State record</strong>
            <span>Convictions on file with the BCA</span>
          </li>
        </ol>
      </section>

      <CountyFinder counties={finderList} />

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
        Browse <Link href="/guides/">all guides</Link> or the <Link href="/minnesota/">Minnesota overview</Link>.
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
