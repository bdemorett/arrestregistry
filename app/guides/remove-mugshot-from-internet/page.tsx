import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";
import { us } from "@/lib/nationalResources";

const slug = "remove-mugshot-from-internet";
const title = "How to Get Your Mugshot Off the Internet (for Free)";

export const metadata: Metadata = {
  title,
  description:
    "How to remove a mugshot from websites and Google for free: state laws that ban removal fees, how to word a removal request, sealing and expungement, and Google's removal tools.",
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
      lede="A booking photo can follow someone for years, even after the charges are dropped. In most cases you can get it off the sites that matter and out of Google results without paying anyone. Here's the order that works best."
      sources={[us.ncslMugshots, us.flStatute90143, us.gaMugshots, us.caCiv1798911, us.googleExploitative, us.googleOutdated, us.googleResults, mn.statute1382, us.lawhelp]}
      faqs={[
        {
          q: "Should I pay a website to remove my mugshot?",
          a: "Generally no. Many states ban mugshot sites from charging removal fees, paying one site doesn't stop copies on others, and Google will usually delist pages from sites that charge for removal if you ask.",
        },
        {
          q: "Can a mugshot website legally refuse to take my photo down?",
          a: "It depends on your state. Some states, like Florida and Georgia, require removal on a written request in certain situations. Others only ban charging a fee. Where no law applies, a site may refuse, but you can still ask search engines to delist it.",
        },
        {
          q: "How long does it take?",
          a: "Florida law gives a site 10 days after a qualifying request, and Georgia gives 30 days. Google delisting requests usually take a few days to a few weeks. Sealing or expunging the record takes longer, from weeks to months depending on the state.",
        },
        {
          q: "Will removing the mugshot remove the arrest record?",
          a: "No. The photo and the record are separate. The arrest still exists in court and state records unless it's sealed or expunged, which is why clearing the record is the strongest first step.",
        },
        {
          q: "Does Arrest Registry publish mugshots?",
          a: "No. We link to official sources only and don't host booking photos or records about individuals.",
        },
      ]}
    >
      <h2>Why mugshots end up everywhere</h2>
      <p>
        In most states, booking photos are public records. Sheriffs post them on jail rosters, and commercial sites copy
        them, sometimes within hours. Most official rosters drop a photo once someone is released, but the copies stay up.
        Some sites then charged people to take them down, which is why many states passed laws against it.
      </p>

      <h2>1. Clear the record first, if you can</h2>
      <p>
        If the charges were dropped, dismissed or you were found not guilty, or you qualify for sealing or expungement,
        start there. A court order or official record of the outcome is the strongest thing you can send to a website, and
        several state laws only require removal once the case ends that way.
      </p>
      <ul>
        <li>
          <strong>Minnesota:</strong> many records are now sealed automatically under the Clean Slate Act. See{" "}
          <Link href="/guides/minnesota-expungement-clean-slate/">Minnesota expungement and Clean Slate</Link>.
        </li>
        <li>
          <strong>Florida:</strong> FDLE automatically seals many records when charges were dropped or dismissed or the person
          was acquitted. See the <Link href="/florida/">Florida overview</Link>.
        </li>
        <li>
          <strong>Other states:</strong> search for your state court system's expungement or record sealing page, or ask a
          legal aid office. Many offer free help.
        </li>
      </ul>

      <h2>2. Check your state's mugshot law</h2>
      <p>
        At least a dozen states have passed laws aimed at mugshot websites, according to the{" "}
        {ext(us.ncslMugshots.url, "National Conference of State Legislatures")}. They work in different ways: some ban
        removal fees, some require removal on request, and some limit what police can release or post. Three examples:
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>What the law requires</th>
              <th>How to ask</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Florida</td>
              <td>
                Sites can't charge to remove a booking photo and must take it down within 10 days of a qualifying request (
                {ext(us.flStatute90143.url, "§ 901.43")}).
              </td>
              <td>Written request sent by registered mail.</td>
            </tr>
            <tr>
              <td>Georgia</td>
              <td>
                Sites must remove a qualifying mugshot for free within 30 days, for example after a dismissal or acquittal (
                {ext(us.gaMugshots.url, "O.C.G.A. § 10-1-393.5")}).
              </td>
              <td>
                Written request with your name, date of birth, arrest date and arresting agency, sent by certified mail with
                return receipt.
              </td>
            </tr>
            <tr>
              <td>California</td>
              <td>
                Anyone who publishes booking photos can't ask for or accept payment to remove or change one. Violations can
                cost $1,000 each ({ext(us.caCiv1798911.url, "Civ. Code § 1798.91.1")}).
              </td>
              <td>Request removal directly; report a site that asks for money.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="muted">
        Other states with mugshot website laws include Illinois, Oregon, Texas, Utah, Kentucky, South Carolina, Louisiana,
        Arkansas and New Jersey. Details and deadlines vary, so check your state's current statute or ask a legal aid office.
      </p>

      <h2>3. Ask each site to take it down</h2>
      <ul>
        <li>Search your full name plus "mugshot" and "arrest" on Google and Bing, and list every page that shows the photo.</li>
        <li>Look for each site's removal, privacy or contact page. Many news sites and some mugshot sites remove photos for free.</li>
        <li>
          Your request should include the page URL, your full name and date of birth, the arrest date and arresting agency,
          and how the case ended. Attach court paperwork if you have it.
        </li>
        <li>If your state has a mugshot law, name it in the request and follow its delivery method, such as certified mail.</li>
        <li>Keep copies of every request, receipt and reply. You'll need them for a complaint or for Google.</li>
      </ul>

      <h2>4. Get it out of search results</h2>
      <ul>
        <li>
          <strong>Sites that charge for removal:</strong> Google's{" "}
          {ext(us.googleExploitative.url, "exploitative removal practices policy")} lets you ask it to remove pages about you
          from sites that require payment to take content down. You must be the person shown.
        </li>
        <li>
          <strong>Pages that are already gone:</strong> if a site removed the photo but Google still shows the old preview,
          use Google's {ext(us.googleOutdated.url, "Refresh outdated content")} request. Bing offers a similar content
          removal tool.
        </li>
        <li>
          <strong>Other personal information:</strong> Google's {ext(us.googleResults.url, "personal content removal")} page
          covers other situations, such as doxxing or contact details.
        </li>
      </ul>
      <p className="muted">
        Removing a page from Google doesn't delete it from the website. It just stops it from appearing in Google searches
        for your name.
      </p>

      <h2>5. If a site refuses or asks for money</h2>
      <ul>
        <li>Report it to your state attorney general's consumer protection office, especially in states that ban removal fees.</li>
        <li>
          Be wary of "reputation management" companies that promise guaranteed removal for a fee. Most of what they do, you
          can do yourself for free with the steps above.
        </li>
        <li>
          For stubborn cases, a lawyer can advise on options. {ext(us.lawhelp.url, "LawHelp.org")} lists free legal aid
          offices by state.
        </li>
      </ul>
    </GuideShell>
  );
}
