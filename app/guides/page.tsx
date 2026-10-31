import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides to Arrest, Court and Criminal Records",
  description: "Plain-English guides to how arrest, court, and criminal history records work, and how to find them.",
  alternates: { canonical: "/guides/" },
};

export default function GuidesPage() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "Guides", href: "/guides/" }]} />
      <h1>Guides</h1>
      <p className="lede">How records work, what the law allows, and how to read what you find.</p>
      <div className="cards">
        {guides.map((g) => (
          <Link key={g.slug} className="card" href={`/guides/${g.slug}/`}>
            <strong>{g.title}</strong>
            <span>{g.blurb}</span>
          </Link>
        ))}
      </div>
    </article>
  );
}
