import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import type { Link as L } from "@/data/states/minnesota/counties";
import { guides } from "@/lib/guides";
import { formatDate, site } from "@/lib/site";

type Faq = { q: string; a: string };

export default function GuideShell({
  slug,
  title,
  crumb,
  lede,
  children,
  sources,
  faqs,
  cta = true,
  legalNote = false,
}: {
  slug: string;
  title: string;
  crumb: string;
  lede: string;
  children: React.ReactNode;
  sources: L[];
  faqs?: Faq[];
  cta?: boolean;
  legalNote?: boolean;
}) {
  const path = `/guides/${slug}/`;
  const related = guides.filter((g) => g.slug !== slug).slice(0, 4);
  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Guides", href: "/guides/" },
          { name: crumb, href: path },
        ]}
      />
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
      <p className="muted">
        Last reviewed {formatDate(site.lastReviewed)}.{legalNote ? " This is general information, not legal advice." : ""}
      </p>

      {children}

      {cta && <SearchCta placement={`guide-${slug}`} />}

      {faqs && faqs.length > 0 && (
        <section className="faq">
          <h2>Common questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }}
          />
        </section>
      )}

      <h2>Related guides</h2>
      <div className="cards">
        {related.map((g) => (
          <Link key={g.slug} className="card" href={`/guides/${g.slug}/`}>
            <strong>{g.title}</strong>
            <span>{g.blurb}</span>
          </Link>
        ))}
        <Link className="card" href="/minnesota/">
          <strong>Minnesota county guides</strong>
          <span>Jail roster links and contacts for each county</span>
        </Link>
      </div>

      <Sources items={sources} reviewed={site.lastReviewed} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          dateModified: site.lastReviewed,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: site.url + path,
        }}
      />
    </article>
  );
}

export const ext = (href: string, text: string) => (
  <a href={href} target="_blank" rel="noopener">
    {text}
  </a>
);
