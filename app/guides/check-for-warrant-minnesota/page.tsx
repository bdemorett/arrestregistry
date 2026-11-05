import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "check-for-warrant-minnesota";
const title = "How to Check for a Warrant in Minnesota";

export const metadata: Metadata = {
  title,
  description:
    "Minnesota has no public statewide warrant search. Here's how to check county warrant lists, call the sheriff, and what to do if a warrant turns up.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Check for a warrant"
      legalNote
      lede="Minnesota doesn't offer a public statewide warrant search. Warrants are posted, if at all, by the county sheriff's office that holds them. Here's how to check, and what to do next."
      sources={[mn.mcroInfo, mn.lawhelp]}
      faqs={[
        {
          q: "Does the BCA public search show warrants?",
          a: "No. The BCA's Public Criminal History Search shows convictions only. Warrants are tracked by law enforcement systems that aren't open to the public.",
        },
        {
          q: "If I'm not on a county's warrant list, does that mean I'm clear?",
          a: "Not necessarily. Many counties only post some warrants, lists update on their own schedules, and a warrant may have been issued in a different county. Call the sheriff's office in each county where you had a case to be sure.",
        },
        {
          q: "Can a warrant from one county get me arrested in another?",
          a: "Yes. Warrants are entered into law enforcement databases that officers across the state can check, for example during a traffic stop.",
        },
      ]}
    >
      <h2>Why there's no single search</h2>
      <p>
        A warrant is a court order, but it's entered and served by law enforcement. Minnesota doesn't publish a statewide
        list, and the BCA's public criminal history search only covers convictions. Each sheriff decides whether to post
        its active warrants online, and many small counties don't.
      </p>

      <h2>1. Check the county's warrant list</h2>
      <p>
        Many sheriffs post an active warrant list or search, including Hennepin, Anoka, Stearns, Olmsted, Goodhue, Douglas,
        Cass, and others. <Link href="/minnesota/">Find the county</Link>; if it has an online warrant list, the county page
        links to it.
      </p>
      <p>Keep in mind:</p>
      <ul>
        <li>Lists are often limited to criminal warrants from that county's district court.</li>
        <li>They update on different schedules, some daily and some less often.</li>
        <li>A listing means a warrant was on file when the list was published. It isn't proof of guilt.</li>
      </ul>

      <h2>2. Call the sheriff's office</h2>
      <p>
        If there's no online list, or you want to be sure, call the sheriff's office in the county where the case was
        filed. Have your full name and date of birth ready. The county pages list sheriff and jail numbers.
      </p>

      <h2>3. Look for missed court dates</h2>
      <p>
        Most warrants in Minnesota come from missing a court date or not following court orders. If you think that's what
        happened, search {ext(mn.mcro.url, "Minnesota Court Records Online")} by your case number to see the case history.
        You can also call the court administrator's office in that county.
      </p>

      <h2>If you find a warrant</h2>
      <ul>
        <li>
          <strong>Talk to a lawyer first if you can.</strong> A defense attorney or public defender can sometimes get the
          warrant addressed or arrange a court date. Free legal help is listed on {ext(mn.lawhelp.url, "LawHelpMN")}.
        </li>
        <li>
          <strong>Ask about turning yourself in.</strong> Some sheriffs publish instructions, and doing it on your own terms
          is usually better than being picked up during a traffic stop.
        </li>
        <li>
          <strong>Know the bail amount if you can.</strong> Some warrants have bail already set, which you may be able to
          post. See <Link href="/guides/how-bail-works-minnesota/">how bail works in Minnesota</Link>.
        </li>
      </ul>
    </GuideShell>
  );
}
