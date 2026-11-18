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
        Arrest Registry is a free guide to where arrest, jail and court records actually live, and how to use the official
        tools to find them. It covers Minnesota, Florida and Texas so far, county by county.
      </p>

      <h2>Who runs it</h2>
      <p>
        Arrest Registry was founded in 2026 by Ben DeMorett, who runs it through {site.owner}, a small Minnesota company
        that publishes reference websites. Ben is the site's editor and is responsible for what it publishes.
      </p>
      <p>
        The idea came from a simple problem. When someone you know is arrested, the information you need is spread across a
        sheriff's roster, one or two court clerks and a state records agency, each with its own website and rules. Searching
        for it mostly turns up mugshot sites and paid lookup pages. Arrest Registry puts the official sources for each county
        in one place and explains what each one shows and what it leaves out.
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
        We build each county page from the sheriff's office or jail, the state's courts or county clerk, the state's
        criminal records agency, and state statutes. We only publish a county once its links and details are confirmed on those
        official pages. Read the full <Link href="/methodology/">verification process</Link>. If something has changed, <Link href="/contact/">tell us</Link> and we'll fix it.
      </p>

      <h2>How we make money</h2>
      <p>
        Some pages include a link to a paid people-search service. If you buy through it, we may earn a commission. Read our{" "}
        <Link href="/affiliate-disclosure/">affiliate disclosure</Link>.
      </p>

      <h2>Corrections</h2>
      <p>
        Government websites change often. If a link is broken, a phone number is wrong or a detail is out of date, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> with the page and what changed. We check the official source and
        update the page, along with its "last checked" date.
      </p>

      <p className="muted">
        Arrest Registry is published by {site.owner}, Minnesota. Editor: Ben DeMorett.
      </p>
    </article>
  );
}
