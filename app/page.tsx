import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { publishedCounties } from "@/data/minnesota";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section>
        <h1>Find arrest, jail, and court records from the source</h1>
        <p className="lede">
          Every county posts arrest and jail information differently, and most of it is free. We map out exactly where to
          look, county by county, using official government sources only.
        </p>
        <p>
          <Link className="button" href="/minnesota/">
            Start with Minnesota
          </Link>
        </p>
      </section>

      <h2>Minnesota county guides</h2>
      <div className="cards">
        {publishedCounties.map((c) => (
          <Link key={c.slug} className="card" href={`/minnesota/${c.slug}/`}>
            <strong>{c.name} County</strong>
            <span>Jail roster, court records, and conviction search</span>
          </Link>
        ))}
      </div>
      <p>
        <Link href="/minnesota/">See all 87 Minnesota counties</Link>
      </p>

      <h2>How record lookups work</h2>
      <ol className="steps">
        <li>
          <strong>Jail roster.</strong> The county sheriff's list of who is in custody now. Best for arrests in the last few
          days.
        </li>
        <li>
          <strong>Court records.</strong> Charges, hearings, and outcomes once a case is filed.
        </li>
        <li>
          <strong>State criminal history.</strong> Convictions on a person's official record.
        </li>
      </ol>

      <h2>Guides</h2>
      <div className="cards">
        {guides.map((g) => (
          <Link key={g.slug} className="card" href={`/guides/${g.slug}/`}>
            <strong>{g.title}</strong>
            <span>{g.blurb}</span>
          </Link>
        ))}
      </div>

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
