import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";
import { fl } from "@/data/states/florida/resources";
import { tx } from "@/data/states/texas/resources";

const slug = "what-happens-after-arrest";
const title = "What Happens After Someone Is Arrested: The First 48 Hours";

const src = {
  mclaughlin: { label: "County of Riverside v. McLaughlin, 500 U.S. 44 (1991) (Cornell LII)", url: "https://www.law.cornell.edu/supct/html/89-1817.ZS.html" },
  conan: { label: "Constitution Annotated: Fourth Amendment, seizure of persons", url: "https://www.law.cornell.edu/constitution-conan/amendment-4/seizure-of-persons" },
  pbso: { label: "Palm Beach County Sheriff's Office: Inmate Management Division (intake steps)", url: "https://www.pbso.org/inside-pbso/corrections/inmate-management-bureau" },
};

export const metadata: Metadata = {
  title,
  description:
    "Step by step: booking, when someone shows up on the jail roster, the 48-hour rule for seeing a judge, how bail gets set, and what family can do in the first two days after an arrest.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="After an arrest"
      legalNote
      lede="The first two days after an arrest follow a fairly predictable path in every state: booking, a first appearance before a judge or magistrate, and a decision about release. The deadlines differ by state. Here's what happens at each step and what family can do."
      sources={[src.mclaughlin, src.conan, src.pbso, mn.rule4, fl.rule3130, tx.ccp1517]}
      faqs={[
        {
          q: "How long can police hold someone without seeing a judge?",
          a: "Under the U.S. Supreme Court's decision in County of Riverside v. McLaughlin (1991), a person arrested without a warrant generally must get a judicial probable-cause determination within 48 hours. After that, the government has to show an emergency or extraordinary circumstance. Many states set shorter deadlines, such as 24 hours in Florida.",
        },
        {
          q: "Why can't I find someone on the jail roster yet?",
          a: "Booking takes time, and the person won't appear on most rosters until it's finished. They may also be held at a city lockup first, or in a different county than you expect. Wait a few hours and search again, or call the jail with their full name and date of birth.",
        },
        {
          q: "Does a weekend delay the first court appearance?",
          a: "It can under some state rules. Minnesota's 36-hour rule doesn't count the day of arrest, Sundays or legal holidays. But the 48-hour federal limit on holding someone without a probable-cause determination still applies, and the Supreme Court has said intervening weekends aren't a valid excuse.",
        },
        {
          q: "Does being arrested mean someone will be charged?",
          a: "No. Prosecutors decide whether to file charges, and some arrests end with no charges or with charges dropped. That's why an arrest record isn't the same as a conviction.",
        },
      ]}
    >
      <h2>At a glance</h2>
      <ol className="steps">
        <li>
          <strong>Arrest and transport</strong> to a jail or holding facility.
        </li>
        <li>
          <strong>Booking:</strong> identification, fingerprints, photo, property and a medical screening. This is when the
          person starts showing up on the jail's online roster.
        </li>
        <li>
          <strong>First appearance</strong> before a judge or magistrate, usually within 24 to 48 hours, where probable cause
          is reviewed and release or bail is decided.
        </li>
        <li>
          <strong>Release or continued custody,</strong> depending on the bail decision.
        </li>
        <li>
          <strong>The court case begins,</strong> if charges are filed.
        </li>
      </ol>

      <h2>1. Booking</h2>
      <p>
        Booking is the jail's intake process. At the Palm Beach County Sheriff's Office, for example, it includes taking an
        inventory of personal property, a physical search, criminal history checks, fingerprints entered into the automated
        fingerprint system, photographs, an initial medical screening, and a classification interview to decide where the
        person will be housed ({ext(src.pbso.url, "PBSO")}). Most jails follow similar steps.
      </p>
      <p>
        Booking can take several hours on a busy night. Until it's done, the person usually won't appear on the jail's online
        roster, and staff may not be able to confirm much by phone.
      </p>

      <h2>2. Finding them on the roster</h2>
      <p>
        Once booked, most county jails list the person on their inmate search with the booking date, charges and often the
        bail amount. Start with the county where the arrest happened. Our county guides link each jail's official search:
      </p>
      <ul>
        <li>
          <Link href="/minnesota/">Minnesota county jail rosters</Link>
        </li>
        <li>
          <Link href="/florida/">Florida county jail inmate searches</Link>
        </li>
        <li>
          <Link href="/texas/">Texas county jail inmate searches</Link>
        </li>
      </ul>
      <p>
        If they aren't there, they may still be in booking, at a city lockup, in another county, or in federal custody. See{" "}
        <Link href="/guides/find-out-if-someone-is-in-jail-minnesota/">how to find someone in custody</Link> for the other
        places to check.
      </p>

      <h2>3. The first appearance and the 48-hour rule</h2>
      <p>
        The Fourth Amendment requires a prompt judicial check on whether there was probable cause to hold someone arrested
        without a warrant. In <em>County of Riverside v. McLaughlin</em> (1991), the Supreme Court set the general outer limit
        at 48 hours. After that, the burden shifts to the government to show an emergency or other extraordinary circumstance
        ({ext(src.conan.url, "Constitution Annotated")}). States can, and often do, set tighter deadlines:
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Deadline</th>
              <th>Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Minnesota</td>
              <td>
                Before a judge within 36 hours, not counting the day of arrest, Sundays or holidays; a probable-cause finding
                within 48 hours, no days excluded
              </td>
              <td>{ext(mn.rule4.url, "Minn. R. Crim. P. 4")}</td>
            </tr>
            <tr>
              <td>Florida</td>
              <td>First appearance before a judge within 24 hours of arrest</td>
              <td>{ext(fl.rule3130.url, "Fla. R. Crim. P. 3.130")}</td>
            </tr>
            <tr>
              <td>Texas</td>
              <td>Before a magistrate without unnecessary delay, and no later than 48 hours</td>
              <td>{ext(tx.ccp1517.url, "Tex. Code Crim. Proc. art. 15.17")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        At the first appearance, the judge or magistrate explains the charges and the person's rights, and decides on release:
        release on the person's own recognizance, release with conditions, or a bail amount. In Minnesota, someone who misses
        the 48-hour probable-cause deadline must be released.
      </p>

      <h2>4. Bail and release</h2>
      <p>
        If bail is set, it can usually be posted in cash at the jail, or through a licensed bail bond company that charges a
        non-refundable fee. Rules on payment methods and refunds vary by state and county, so call the jail before you go. For
        the details in Minnesota, see <Link href="/guides/how-bail-works-minnesota/">how bail works in Minnesota</Link>.
      </p>
      <p>
        Someone who can't post bail stays in custody while the case moves forward. In Texas, for example, about three in four people
        in county jails on Oct. 1, 2026, were awaiting trial rather than serving a sentence; the{" "}
        <Link href="/texas/">Texas overview</Link> shows the figures for each large jail.
      </p>

      <h2>5. After the first 48 hours</h2>
      <p>
        If prosecutors file charges, a court case opens and shows up in the court records search for that county, usually with
        the next hearing date. If no charges are filed, the person is released, though the arrest itself may still appear in
        some records until it's sealed or expunged.
      </p>
      <ul>
        <li>
          <Link href="/guides/minnesota-court-date-lookup/">How to look up a court date in Minnesota</Link>
        </li>
        <li>
          <Link href="/guides/arrest-vs-conviction-records/">Arrest vs. conviction records</Link>
        </li>
        <li>
          <Link href="/guides/how-to-check-for-a-warrant/">How to check for a warrant</Link>
        </li>
      </ul>

      <h2>What family can do in the first two days</h2>
      <ul>
        <li>Find out which agency made the arrest and which county the person is held in.</li>
        <li>Search that county's jail roster, and search again after a few hours if they don't appear yet.</li>
        <li>Call the jail with the person's full legal name and date of birth to confirm custody and the bail amount.</li>
        <li>Note the booking number and case number. You'll need them to post bail and to follow the court case.</li>
        <li>Ask when the first appearance is scheduled and at which courthouse.</li>
      </ul>
    </GuideShell>
  );
}
