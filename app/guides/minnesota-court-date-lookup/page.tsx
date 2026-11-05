import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "minnesota-court-date-lookup";
const title = "How to Look Up a Court Date in Minnesota";

export const metadata: Metadata = {
  title,
  description:
    "Find a Minnesota court date with MCRO's Hearing Search, and what to do when an open criminal case doesn't show up by name.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Look up a court date"
      lede="Minnesota posts district court hearings online through MCRO. The catch: open criminal cases don't come up by the defendant's name, so you'll usually need the case number."
      sources={[mn.mcroInfo]}
      faqs={[
        {
          q: "Why doesn't my case show up when I search my name?",
          a: "MCRO doesn't return pending criminal cases, meaning cases without a conviction, in name searches. Search by case number or citation number instead.",
        },
        {
          q: "Where do I find my case number?",
          a: "It's on the citation, complaint, or release paperwork. Many county jail rosters also list case numbers and court dates.",
        },
      ]}
    >
      <h2>Use MCRO's Hearing Search</h2>
      <ol className="steps">
        <li>
          Open {ext(mn.mcro.url, "Minnesota Court Records Online")} and choose <strong>Hearing Search</strong>.
        </li>
        <li>
          Search by case number for the most reliable result. You can also search by name, attorney, attorney bar number,
          or judicial officer.
        </li>
        <li>Note the date, time, courtroom, and courthouse, then double-check with the court the day before.</li>
      </ol>

      <h2>Search tips</h2>
      <ul>
        <li>
          <strong>Open criminal cases need the case number.</strong> Name searches don't return pending criminal cases.
        </li>
        <li>
          <strong>Name searches are exact.</strong> Use a wildcard (*) or "Sounds Like" to widen them.
        </li>
        <li>
          <strong>No spaces in case numbers.</strong> Use only letters, numbers, and hyphens.
        </li>
        <li>
          <strong>Citation number works too.</strong> If you got a ticket, Case Search accepts the citation number.
        </li>
      </ul>

      <h2>Other ways to find a court date</h2>
      <ul>
        <li>
          <strong>County jail roster:</strong> many rosters list the next court date for people in custody.{" "}
          <Link href="/minnesota/">Find the county</Link>.
        </li>
        <li>
          <strong>Court administration:</strong> call the court administrator in the county where the case is filed.
        </li>
        <li>
          <strong>Courthouse terminals:</strong> public access computers at any Minnesota district courthouse search
          statewide records and show more than the website.
        </li>
      </ul>

      <div className="note">
        Missing a court date can lead to a warrant. If you think you've missed one, see{" "}
        <Link href="/guides/check-for-warrant-minnesota/">how to check for a warrant</Link>.
      </div>
    </GuideShell>
  );
}
