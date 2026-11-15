import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";
import MnCountyLinks from "@/components/MnCountyLinks";

const src = {
  courtsFaq: { label: "Minnesota Judicial Branch: Criminal FAQs (posting bail, refunds)", url: "https://mncourts.gov/help-topics/criminal/faqs" },
  ramsey: { label: "Ramsey County District Court: Warrants and Bail", url: "https://mncourts.gov/find-courts/ramsey/ramseycriminalcourt/criminal-and-traffic-court" },
  hennepinSheriff: { label: "Hennepin County Sheriff: Post cash bail or bond for a detainee", url: "https://www.hennepinsheriff.org/en/jail-warrants/jail/Slide-out-group/post-cash-bail-bond-for-inmate" },
  houseResearch: { label: "MN House Research: Bail and Pretrial Release in Minnesota", url: "https://www.house.mn.gov/hrd/pubs/ss/ssbailmn.pdf" },
  ch60m: { label: "Minn. Stat. ch. 60M (bail bonds)", url: "https://www.revisor.mn.gov/statutes/cite/60M/full" },
  rule702: { label: "Minn. Gen. R. Prac. 702 (bail, forfeiture, reinstatement)", url: "https://www.revisor.mn.gov/court_rules/rule/gp-702/" },
  crm602: { label: "Form CRM602 instructions: Assignment of Bail to a Third Party", url: "https://www.mncourts.gov/mncourtsgov/media/CourtForms/CRM601.pdf?ext=.pdf" },
};

const slug = "how-bail-works-minnesota";
const title = "How Bail Works in Minnesota";

export const metadata: Metadata = {
  title,
  description:
    "How to post bail in Minnesota: cash bail vs. a bail bond, where and how to pay, getting bail money back, what judges weigh, and how fast someone sees a judge.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="How bail works"
      legalNote
      lede="Minnesota's constitution guarantees the right to have bail set. Here's how a judge decides, the difference between cash bail and a bail bond, how to post either one, and how bail money comes back."
      sources={[mn.lrlBail, mn.statute629, mn.rule4, src.courtsFaq, src.ramsey, src.hennepinSheriff, src.houseResearch, src.ch60m, src.rule702, src.crm602]}
      faqs={[
        {
          q: "Can a judge deny bail in Minnesota?",
          a: "Minnesota's constitution makes people bailable before conviction, so a judge has to set bail. But the amount doesn't have to be one the person can afford, so some people stay in jail anyway.",
        },
        {
          q: "What's the difference between bail with conditions and bail without conditions?",
          a: "When a judge allows release with conditions, Minnesota requires a second, bail-only amount as an alternative. Posting that higher amount lets the person go without the conditions.",
        },
        {
          q: "Where do I post bail in Minnesota?",
          a: "At the jail holding the person or at any criminal court location where the case will be heard. Cash bail is cash only, and jails accept bonds only from state-approved bond agents. Call the jail first for the exact amount and its payment rules.",
        },
        {
          q: "Do I get bail money back in Minnesota?",
          a: "Cash bail can come back after the case ends, minus any fines or fees the court applies it to, but only when a judge orders the refund. The refund goes to the defendant by check, even if someone else posted it, unless the defendant signs a form assigning it to that person. A bail bond premium is never refunded.",
        },
        {
          q: "How much does a bail bond cost in Minnesota?",
          a: "Minnesota allows a bail bond company to charge a premium of up to 10% of the bail amount, and the premium isn't refunded. The company may also require collateral, which must be returned within 21 days after you give it written proof the bond was discharged.",
        },
        {
          q: "What happens if someone misses court after posting bail?",
          a: "The judge can forfeit the bail or bond, meaning the state keeps the full amount, and usually issues a warrant. A forfeiture can sometimes be reinstated if a petition is filed within 180 days, with a penalty of at least 10% of the bail.",
        },
      ]}
    >
      <h2>The right to bail</h2>
      <p>
        Article I, section 7 of the Minnesota Constitution says people are bailable before conviction, and both the state
        and federal constitutions ban excessive bail. Since Minnesota has no death penalty, every defendant has the right to
        have bail set. State law then points to the court rules for how release works ({ext(mn.statute629.url, "Minn. Stat. § 629.53")}).
      </p>

      <h2>A judge's three options</h2>
      <ol className="steps">
        <li>
          <strong>Release without conditions,</strong> often called release on recognizance (ROR) or personal recognizance
          (PR or RPR). The court rules make this the starting point unless it would endanger public safety or not assure the
          person comes back to court.
        </li>
        <li>
          <strong>Release with conditions (CR),</strong> such as no contact with a victim, drug or alcohol testing, or
          supervision. If a judge sets conditions, Minnesota also requires a bail-only amount as an alternative.
        </li>
        <li>
          <strong>Bail,</strong> a dollar amount that gets the person released once it's posted.
        </li>
      </ol>

      <h2>What judges weigh</h2>
      <p>
        Judges look at a list of factors, including the nature of the charge, the person's ties to the community, their
        financial resources, and the safety of others. Judges must consider ability to pay, but they don't have to set an
        amount the person can actually pay.
      </p>

      <h2>Bail schedules for lower-level charges</h2>
      <p>
        For some misdemeanors, a bail schedule sets the amount ahead of time, so the person can post it without seeing a
        judge. Under state law, maximum bail for most misdemeanors and gross misdemeanors is twice the highest possible
        fine, with higher multiples allowed for some offenses like certain DWIs and domestic assaults.
      </p>

      <h2>Cash bail vs. a bail bond</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Cash bail</th>
              <th>Bail bond</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What you pay</td>
              <td>The full bail amount, in cash</td>
              <td>A premium to a bond company, up to 10% of the bail</td>
            </tr>
            <tr>
              <td>Who pays it</td>
              <td>Anyone: the person, family or friends</td>
              <td>The bond company guarantees the full amount to the court</td>
            </tr>
            <tr>
              <td>When the case ends</td>
              <td>Refunded, or applied to fines and fees the person owes</td>
              <td>The premium is not refunded; collateral comes back after the bond is discharged</td>
            </tr>
            <tr>
              <td>If the person misses court</td>
              <td>The state can keep all of it</td>
              <td>The bond company pays the court and can collect on any collateral</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bond companies must be approved by the judicial branch, and the courts can't recommend a particular one; the
        judicial branch keeps a statewide list of approved bail bond agents ({ext(src.ramsey.url, "Ramsey County District Court")}).
        A judge can set different amounts for each: for example, $1,000 cash bail with no conditions, or $300 with conditions.
      </p>

      <h2>How to post bail</h2>
      <ol className="steps">
        <li>
          <strong>Get the amount and case number.</strong> Many county jail rosters list bail amounts, or call the jail with the
          person's full name and date of birth.
        </li>
        <li>
          <strong>Go to the jail or a criminal court location</strong> where the case will be heard. Cash bail is cash only,
          and the jail accepts bonds only from state-approved bond agents ({ext(src.courtsFaq.url, "Minnesota Judicial Branch")}).
        </li>
        <li>
          <strong>Bring the exact amount.</strong> In Hennepin County, for example, you can post bail 24 hours a day at the
          Public Safety Facility, but staff can't make change and don't take checks or cards (bail information:
          612-348-5112). In Ramsey County, call Adult Detention at 651-266-9350.
        </li>
      </ol>

      <h2>Getting bail money back</h2>
      <p>
        Only a judge can order a bail refund, and it usually happens after the case is resolved. Any fines or fees can be
        taken out first. Refunds are mailed as a check to the defendant, even if someone else posted the money, unless the
        defendant files an <em>Assignment of Bail to a Third Party</em> (form CRM602) naming who should get it.
      </p>
      <p>
        If the person misses a court date, the judge can forfeit the bail or bond. A forfeiture can be reinstated only if a
        petition is filed within 180 days, and with a penalty of at least 10% of the bail ({ext(src.rule702.url, "General Rule of Practice 702")}).
      </p>

      <h2>How fast someone sees a judge</h2>
      <ul>
        <li>
          <strong>36 hours:</strong> after a warrantless arrest, the person must go before a judge within 36 hours, not
          counting the day of arrest, Sundays, or legal holidays. A misdemeanor defendant who doesn't get there in time must
          be released on a citation.
        </li>
        <li>
          <strong>48 hours:</strong> a judge must find probable cause within 48 hours of a warrantless arrest, with no days
          excluded. If that doesn't happen, the person must be released.
        </li>
      </ul>
      <p>
        That's why someone arrested on a Friday night may sit until Monday or Tuesday before a hearing. Check the{" "}
        <Link href="/minnesota/">county jail roster</Link>, since many list bail amounts and court dates.
      </p>

      <h2>Find bail amounts by county</h2>
      <p>These counties post an online jail roster, which often shows bail amounts and the next court date:</p>
      <MnCountyLinks only="roster" />

      <h2>Speedy trial and release</h2>
      <p>
        If a defendant in custody demands a speedy trial and it doesn't happen in time, they must be released on
        non-money conditions: within 10 days for a misdemeanor, or 120 days for a gross misdemeanor or felony, absent
        exceptional circumstances.
      </p>
    </GuideShell>
  );
}
