import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { publishedCounties } from "@/data/states/minnesota/counties";
import { flPublished } from "@/data/states/florida/counties";
import { formatDate, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Research and Verify County Pages",
  description:
    "How Arrest Registry builds each county guide from official sheriff, court, and state sources, what we won't publish, and how we keep pages current.",
  alternates: { canonical: "/methodology/" },
};

export default function Methodology() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "How we verify", href: "/methodology/" }]} />
      <h1>How We Research and Verify County Pages</h1>
      <p className="lede">
        Every county page is built by hand from official government sources. Here's exactly what we check, what we leave
        out, and how we handle the gaps.
      </p>
      <p className="muted">Last updated {formatDate(site.lastReviewed)}</p>

      <h2>What we check for each county</h2>
      <ol className="steps">
        <li>
          <strong>The sheriff's own website.</strong> We find the jail roster or in-custody list, then note what it shows,
          how often it updates, and how long people stay listed after release, using the sheriff's own description where
          one exists.
        </li>
        <li>
          <strong>Jail and sheriff contacts.</strong> Addresses and phone numbers come from the sheriff's or county's official
          pages. If we can't find one on an official page, we leave it off rather than guess.
        </li>
        <li>
          <strong>Warrant lists.</strong> We link a county's warrant list only if the sheriff publishes one.
        </li>
        <li>
          <strong>The court.</strong> In Minnesota, courthouse locations come from the Minnesota Judicial Branch, and court
          phone numbers are listed only where we confirmed the main number on mncourts.gov. In Florida, court records are
          kept by each county's elected clerk, so we link the clerk's own case search.
        </li>
        <li>
          <strong>Statewide rules.</strong> Statements about public records, bail, expungement, and court access cite that
          state's statutes, court rules, and official agencies, such as Minnesota's BCA or the Florida Department of Law
          Enforcement.
        </li>
      </ol>

      <h2>When a source looks stale</h2>
      <p>
        Some official rosters stop updating. If a roster's own timestamp is weeks old when we check, we say so on the page and
        point readers to the jail's phone number instead.
      </p>

      <h2>What we won't publish</h2>
      <ul>
        <li>Arrest records, booking photos, or any page about an individual person.</li>
        <li>Phone numbers or addresses we couldn't confirm on an official source.</li>
        <li>A county page we couldn't verify. Those stay marked "coming soon" until we can.</li>
      </ul>

      <h2>Keeping pages current</h2>
      <p>
        Each page shows the date we last checked it against official sources. Agencies change websites often, so if you
        spot a broken link or outdated detail, please <Link href="/contact/">let us know</Link> and we'll recheck it.
      </p>

      <h2>Coverage</h2>
      <p>
        {publishedCounties.length} of Minnesota's 87 counties and {flPublished.length} of Florida's 67 counties are published
        so far. See the <Link href="/minnesota/">Minnesota</Link> and <Link href="/florida/">Florida</Link> county lists.
      </p>
    </article>
  );
}
