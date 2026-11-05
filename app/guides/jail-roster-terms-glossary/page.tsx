import type { Metadata } from "next";
import Link from "next/link";
import GuideShell from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "jail-roster-terms-glossary";
const title = "Jail Roster Terms, Explained";

export const metadata: Metadata = {
  title,
  description:
    "Plain-English definitions of the terms on Minnesota jail rosters: booked, bail set, ROR, RPR, hold for another agency, Huber, sentenced, remanded, and more.",
  alternates: { canonical: `/guides/${slug}/` },
};

const terms: [string, string][] = [
  ["Booked / booking", "The intake process after an arrest: fingerprints, photo, property, and entry into the jail system. The booking number identifies that stay."],
  ["Intake date", "When the person was booked into the jail."],
  ["Arresting agency", "The police department, sheriff's office, or state agency that made the arrest."],
  ["MNI number", "A master name index number some jail systems assign to each person. It stays the same across bookings."],
  ["Charge severity (F, G, M, P)", "F is a felony, G a gross misdemeanor, M a misdemeanor, and P a petty misdemeanor, from most to least serious."],
  ["Court/Pending", "The charge is waiting on court action. No decision has been made yet."],
  ["Bail set / Bond set", "A judge or bail schedule set a dollar amount. Posting it gets the person released."],
  ["Bail with conditions", "Bail is set alongside release conditions such as no contact or testing. Minnesota also requires a higher bail-only alternative."],
  ["ROR / PR / RPR", "Released on own recognizance or personal recognizance: released on a promise to come back to court, without paying bail."],
  ["Hold placed / Hold for another agency", "Another county, state, or federal agency wants the person, so they won't be released even if the local case is resolved."],
  ["Remanded", "A judge ordered the person held in custody."],
  ["Sentenced", "The case has a sentence and the person is serving jail time."],
  ["Sent complete / Sentence complete", "The sentence is done. The person is being released or was already released."],
  ["Huber / work release", "A sentenced person allowed to leave for work and return to jail afterward. A judge must order it."],
  ["Sentence to Serve (STS)", "A program where people work community service crews as part of, or in place of, jail time."],
  ["Charges dropped / Dismissed", "The prosecutor dropped the charge or the court dismissed it. It's not a conviction."],
  ["Not guilty", "A judge or jury acquitted the person on that charge."],
  ["Rel when sober", "Held until no longer intoxicated, then released. Common after DWI or alcohol-related arrests."],
  ["Boarder", "Someone held for another county or agency under a contract, not for a local case."],
  ["Projected release date", "The jail's estimate of when a sentence ends. It can change with sentence credits, new charges, or court orders."],
];

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Jail roster terms"
      lede="Minnesota jail rosters use a lot of shorthand. Here's what the common terms mean, so you can tell the difference between someone held on a new charge and someone waiting to be picked up by another county."
      sources={[mn.lrlBail, mn.rule4]}
    >
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody>
            {terms.map(([t, d]) => (
              <tr key={t}>
                <td>
                  <strong>{t}</strong>
                </td>
                <td>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Wording varies by county and jail software, so if something on a roster is unclear, call the jail. For bail
        specifically, see <Link href="/guides/how-bail-works-minnesota/">how bail works in Minnesota</Link>.
      </p>
    </GuideShell>
  );
}
