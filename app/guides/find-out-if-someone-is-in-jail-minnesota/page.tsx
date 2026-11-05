import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "find-out-if-someone-is-in-jail-minnesota";
const title = "How to Find Out if Someone Is in Jail in Minnesota";

export const metadata: Metadata = {
  title,
  description:
    "Step-by-step: check the county jail roster, the Minnesota DOC locator, federal and ICE locators, and VINE to find someone in custody in Minnesota.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Find someone in jail"
      lede="Minnesota has no single statewide jail search. Where you look depends on who made the arrest and how far along the case is. Work through these in order and you'll find almost anyone in custody."
      sources={[mn.docLocator, mn.bopLocator, mn.iceLocator, mn.vine, mn.mcroInfo, mn.rule4]}
      faqs={[
        {
          q: "Is there a statewide Minnesota jail roster?",
          a: "No. Each county sheriff publishes its own roster, and some small counties don't post one at all. Minnesota VINE is the closest thing to a statewide lookup for people in county jails, but it's built for custody notifications.",
        },
        {
          q: "How soon does a new arrest show up on a roster?",
          a: "It depends on the county. Some update every 30 minutes or hourly, others once or twice a day, and a few only on weekdays. People still in intake usually don't appear until they get a booking number.",
        },
        {
          q: "How long can someone be held before seeing a judge?",
          a: "For a warrantless arrest, Minnesota's court rules require a first appearance within 36 hours, not counting the day of arrest, Sundays, or holidays, and a judge must find probable cause within 48 hours.",
        },
      ]}
    >
      <h2>1. Start with the county where the arrest happened</h2>
      <p>
        City police in Minnesota almost always book people into the county jail, so the sheriff's roster for the county
        where the arrest happened is the best first stop. Most counties post a searchable roster or a PDF list, and many
        show charges, bail, and the next court date.
      </p>
      <p>
        <Link href="/minnesota/">Pick the county</Link> to get its official roster link, jail phone number, and how long
        records stay up after release. Some rosters drop people within days of release, so check soon.
      </p>
      <div className="note">
        A few small counties don't run their own jail. Rock County, for example, holds people at the Nobles County Jail, and
        Red Lake County uses a regional facility in Crookston. The county pages note this where it applies.
      </div>

      <h2>2. If they're not on the roster, call the jail</h2>
      <p>
        Rosters lag. Someone still in intake may not appear until they have a booking number, and some counties only
        update once or twice a day. Call the jail, give the person's full name and date of birth, and ask whether they're in
        custody. Jails will generally confirm custody status, though they won't discuss case details.
      </p>

      <h2>3. Check state prison if they've been sentenced</h2>
      <p>
        People sentenced to more than a year usually go to a state prison run by the Minnesota Department of Corrections.
        The {ext(mn.docLocator.url, "DOC Offender Locator")} searches by name or offender ID and covers everyone in prison or
        on supervised release. See our <Link href="/guides/find-someone-in-minnesota-prison/">prison locator guide</Link>.
      </p>

      <h2>4. Check federal and immigration custody</h2>
      <ul>
        <li>
          <strong>Federal charges:</strong> the {ext(mn.bopLocator.url, "Federal Bureau of Prisons Inmate Locator")} covers
          federal inmates. People awaiting federal trial are often held in county jails under contract, so check county
          rosters too.
        </li>
        <li>
          <strong>Immigration:</strong> the {ext(mn.iceLocator.url, "ICE Online Detainee Locator")} covers people in ICE
          custody and those released in the past 60 days. Several Minnesota county jails hold ICE detainees.
        </li>
      </ul>

      <h2>5. Use VINE for status changes</h2>
      <p>
        {ext(mn.vine.url, "Minnesota VINE")} is a free service for checking custody status and getting notified when it
        changes, such as a release or transfer. Use {ext(mn.vinelink.url, "VINELink")} online or call 877-664-8463.
      </p>

      <h2>6. Look for the court case</h2>
      <p>
        Once charges are filed, the case appears in {ext(mn.mcro.url, "Minnesota Court Records Online")}. An open criminal
        case won't come up in a name search there, so you'll need the case number from the roster or charging paperwork.
        See <Link href="/guides/minnesota-court-date-lookup/">how to look up a court date</Link>.
      </p>
    </GuideShell>
  );
}
