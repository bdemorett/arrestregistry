import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "remove-mugshot-from-internet";
const title = "How to Get a Mugshot Removed From the Internet";

export const metadata: Metadata = {
  title,
  description:
    "Practical steps to remove a mugshot from websites and Google search results, including expungement, removal requests, and Google's policy for sites that charge to remove.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Remove a mugshot"
      cta={false}
      legalNote
      lede="A booking photo can follow someone for years, even after charges are dropped. You can't always force a site to take one down, but you can usually get it out of Google results and off many sites without paying."
      sources={[mn.googleExploitative, mn.googleResults, mn.statute1382, mn.cleanSlateFactSheet]}
      faqs={[
        {
          q: "Should I pay a site to remove my mugshot?",
          a: "Generally no. Paying one site doesn't stop copies elsewhere, and if a site charges for removal, Google may delist it for free under its policy on exploitative removal practices.",
        },
        {
          q: "Are booking photos public in Minnesota?",
          a: "Generally yes. Minn. Stat. § 13.82 makes booking photos public data, though an agency can temporarily hold one back during an active investigation.",
        },
        {
          q: "Does Arrest Registry publish mugshots?",
          a: "No. We link to official sources only and don't host booking photos or records about individuals.",
        },
      ]}
    >
      <h2>Start at the source</h2>
      <p>
        In Minnesota, booking photos are generally public data under{" "}
        {ext(mn.statute1382.url, "Minn. Stat. § 13.82")}. Most county jail rosters drop a photo once someone is released, but
        third-party sites may have already copied it. Removal works best in this order.
      </p>

      <h2>1. Clear the underlying record if you can</h2>
      <p>
        If the case was dismissed or you qualify for sealing, that changes everything. Minnesota's Clean Slate Act
        automatically seals many records, and an expungement order gives you official proof to send to websites. See{" "}
        <Link href="/guides/minnesota-expungement-clean-slate/">Minnesota expungement and the Clean Slate Act</Link>.
      </p>

      <h2>2. Ask each site directly</h2>
      <ul>
        <li>Look for a removal or contact page. Many news sites and some mugshot sites have a free request process.</li>
        <li>
          Include the URL, explain the outcome (dismissed, acquitted, expunged), and attach court documents if you have them.
        </li>
        <li>Keep a record of every request and response.</li>
      </ul>

      <h2>3. Get it out of Google results</h2>
      <ul>
        <li>
          <strong>Sites that charge for removal:</strong> Google's{" "}
          {ext(mn.googleExploitative.url, "exploitative removal policy")} lets you ask it to delist pages about you on sites
          that require payment to remove content. You have to be the person in the content, and it can't be a business
          review site.
        </li>
        <li>
          <strong>Other personal content:</strong> Google's {ext(mn.googleResults.url, "personal content removal")} options
          cover some other situations.
        </li>
      </ul>
      <p className="muted">
        Delisting removes the page from Google Search only. The page stays up and can still appear on other search engines
        or through direct links.
      </p>

      <h2>4. Consider a lawyer for stubborn cases</h2>
      <p>
        If a site refuses, or the record was sealed and it's still showing, a lawyer can advise on options. Free legal help
        is listed on {ext(mn.lawhelp.url, "LawHelpMN")}.
      </p>
    </GuideShell>
  );
}
