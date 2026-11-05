import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "find-someone-in-minnesota-prison";
const title = "How to Find Someone in a Minnesota Prison";

export const metadata: Metadata = {
  title,
  description:
    "How to use the Minnesota DOC Offender Locator to find someone in state prison or on supervised release, and when to check county or federal records instead.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Find someone in prison"
      lede="People serving prison sentences in Minnesota are under the Department of Corrections, and the DOC runs a free public locator. Here's how to use it, and where to look when someone isn't in it."
      sources={[mn.docLocator, mn.bopLocator, mn.vine]}
      faqs={[
        {
          q: "Why can't I find someone who was just sentenced?",
          a: "The DOC says newly sentenced people may take several business days to show up. Until they're transferred, they're usually still in the county jail.",
        },
        {
          q: "Does the DOC locator show people in county jail?",
          a: "No. It covers people committed to the Commissioner of Corrections. People awaiting trial or serving shorter local sentences are in county jails.",
        },
      ]}
    >
      <h2>Jail vs. prison</h2>
      <p>
        County jails hold people awaiting trial and people serving shorter local sentences. State prisons hold people
        committed to the Commissioner of Corrections, typically for felony sentences of more than a year. If the person was
        arrested recently or hasn't been sentenced, check the <Link href="/minnesota/">county jail roster</Link> instead.
      </p>

      <h2>Using the DOC Offender Locator</h2>
      <ol className="steps">
        <li>
          Open the {ext(mn.docLocator.url, "Minnesota DOC Offender Locator")}.
        </li>
        <li>
          Search by name, or by MN DOC Offender ID (OID) if you have it. Name searches include every name tied to the
          person's convictions, which helps if they've used other names.
        </li>
        <li>
          Open the record to see the facility, or whether the person is on supervised release.
        </li>
      </ol>
      <p>The locator covers adults committed to the Commissioner who are still under DOC jurisdiction, in prison or on supervised release.</p>

      <h2>Tips</h2>
      <ul>
        <li>Write down the Offender ID once you find it. You'll need it for mail, money, and visits.</li>
        <li>New prison admissions can take several business days to appear.</li>
        <li>
          People required to register publicly, such as Level 3 offenders, are in a separate DOC public registrant search.
        </li>
        <li>
          For release or transfer alerts, the DOC uses a notification system called Minnesota Haven, and county jails use{" "}
          {ext(mn.vine.url, "VINE")}.
        </li>
      </ul>

      <h2>Not in the DOC locator?</h2>
      <ul>
        <li>
          <strong>Federal case:</strong> check the {ext(mn.bopLocator.url, "Bureau of Prisons Inmate Locator")}. It covers
          federal inmates and some people held before trial.
        </li>
        <li>
          <strong>Still in county custody:</strong> use the <Link href="/minnesota/">county jail roster</Link>.
        </li>
        <li>
          <strong>Unsure where they are:</strong> see{" "}
          <Link href="/guides/find-out-if-someone-is-in-jail-minnesota/">how to find out if someone is in jail</Link>.
        </li>
      </ul>
    </GuideShell>
  );
}
