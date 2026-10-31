import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Arrest Registry",
  description: "Who runs Arrest Registry, how we research county pages, and what we do and don't publish.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "About", href: "/about/" }]} />
      <h1>About Arrest Registry</h1>
      <p className="lede">
        Arrest Registry is a set of guides that explain where arrest, jail, and court records live and how to use the
        official tools to find them.
      </p>

      <h2>What we publish</h2>
      <p>
        County-by-county instructions: which agency runs the jail, where its roster is, how long records stay up, how to
        search court cases, and how to check the state's criminal history system. Every county page links to the
        government source and shows the date we last checked it.
      </p>

      <h2>What we don't publish</h2>
      <ul>
        <li>We do not host arrest records, booking photos, or any profile of an individual.</li>
        <li>We do not charge anyone to remove information, because we don't hold any.</li>
        <li>We are not a consumer reporting agency, and nothing here should be used for hiring, housing, or credit decisions.</li>
      </ul>

      <h2>How we research</h2>
      <p>
        We build each county page from the sheriff's office, the Minnesota Judicial Branch, the Bureau of Criminal
        Apprehension, and state statutes. We only publish a county once its links and details are confirmed on those
        official pages. If something has changed, <Link href="/contact/">tell us</Link> and we'll fix it.
      </p>

      <h2>How we make money</h2>
      <p>
        Some pages include a link to a paid people-search service. If you buy through it, we may earn a commission. Read our{" "}
        <Link href="/affiliate-disclosure/">affiliate disclosure</Link>.
      </p>

      <p className="muted">Arrest Registry is operated by {site.owner}, a Minnesota company.</p>
    </article>
  );
}
