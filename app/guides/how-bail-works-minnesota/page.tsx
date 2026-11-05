import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "how-bail-works-minnesota";
const title = "How Bail Works in Minnesota";

export const metadata: Metadata = {
  title,
  description:
    "Minnesota's right to bail, release with or without conditions, bail schedules for misdemeanors, and how quickly an arrested person must see a judge.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="How bail works"
      legalNote
      lede="Minnesota's constitution guarantees the right to have bail set. In practice, a judge picks between releasing someone outright, setting conditions, and setting a dollar amount. Here's how each works."
      sources={[mn.lrlBail, mn.statute629, mn.rule4]}
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
          q: "Where do I post bail?",
          a: "Usually at the county jail or courthouse. Each sheriff sets its own payment rules, so check the county page or call the jail first.",
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

      <h2>Speedy trial and release</h2>
      <p>
        If a defendant in custody demands a speedy trial and it doesn't happen in time, they must be released on
        non-money conditions: within 10 days for a misdemeanor, or 120 days for a gross misdemeanor or felony, absent
        exceptional circumstances.
      </p>
    </GuideShell>
  );
}
