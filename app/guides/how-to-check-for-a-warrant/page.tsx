import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { us } from "@/lib/nationalResources";

const slug = "how-to-check-for-a-warrant";
const title = "How to Find Out if You Have a Warrant";

const ncic = {
  label: "FBI: NCIC Privacy Impact Assessment (who can access warrant records)",
  url: "https://www.fbi.gov/file-repository/pias/pia-ncic-020723.pdf",
};

export const metadata: Metadata = {
  title: `${title} (Any State)`,
  description:
    "There's no public national warrant search. Here's how to check for a warrant in any state: county warrant lists, court records, the clerk, and having a lawyer check for you.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Check for a warrant"
      legalNote
      lede="There's no public website that searches every warrant in the country. Warrants are issued by local courts, so you check where the case would be: the county where you were charged, cited, or had a court date. Here's how, from the quickest check to the safest."
      sources={[ncic, us.lawhelp]}
      faqs={[
        {
          q: "Is there a national warrant search I can use?",
          a: "No. The national database police use, the FBI's NCIC, is only open to authorized agencies. The public has to check county by county.",
        },
        {
          q: "Can I get arrested if I call to ask about a warrant?",
          a: "Asking by phone is generally low risk, and court clerks typically answer questions about a case. Going to a sheriff's office or police station in person with an active warrant can lead to an arrest, which is why many people have a lawyer check first.",
        },
        {
          q: "Will a warrant show up on a background check?",
          a: "Not reliably. Many background checks focus on convictions and court cases, so don't count on one to find a warrant. Checking the court record or the county list is more direct.",
        },
        {
          q: "Can police see a warrant from another county or state?",
          a: "Usually, yes. Warrants are typically entered into state and national law enforcement systems, so an officer at a traffic stop can often see a warrant from somewhere else.",
        },
        {
          q: "What's a bench warrant?",
          a: "A warrant a judge issues from the bench, most often after someone misses a court date or doesn't pay a fine. It's usually easier to clear than a warrant tied to new charges, often by getting back in front of the judge.",
        },
      ]}
    >
      <h2>Where warrants come from</h2>
      <ul>
        <li>
          <strong>Bench warrants:</strong> the most common kind. A judge issues one when someone misses a court date, doesn't
          pay a fine, or violates probation.
        </li>
        <li>
          <strong>Arrest warrants:</strong> issued when police or a prosecutor ask a judge to approve an arrest on new
          charges.
        </li>
      </ul>
      <p>
        Either way, the warrant comes from a specific court, usually a county court. That's why you need to check the
        counties where you've had a case, a ticket or a court date, not a national list. The national system police use,
        the FBI's National Crime Information Center, includes a wanted persons file but is limited to authorized agencies (
        {ext(ncic.url, "FBI")}).
      </p>

      <h2>1. Check the county's warrant list</h2>
      <p>
        Many sheriff's offices post active warrants online. Lists can lag behind the court, and some counties only post
        certain warrants, so not being listed doesn't prove there's no warrant.
      </p>
      <ul>
        <li>
          <strong>Minnesota:</strong> each <Link href="/minnesota/">county guide</Link> says whether that county posts a warrant
          list and links to it. See also <Link href="/guides/check-for-warrant-minnesota/">checking for a warrant in Minnesota</Link>.
        </li>
        <li>
          <strong>Florida:</strong> several sheriffs, including Pasco, Leon, St. Johns, Okaloosa and Bay, post warrant searches.
          Find them on the <Link href="/florida/">Florida county guides</Link>.
        </li>
        <li>
          <strong>Other states:</strong> search for "[county name] sheriff warrant search" and use the result on the
          sheriff's own .gov or official site, not a third-party site.
        </li>
      </ul>

      <h2>2. Look at the court case</h2>
      <p>
        If you know about a case, look it up in that state's or county's online court records. Entries like "warrant
        issued," "bench warrant," "capias" or "failure to appear" mean a warrant was ordered. Check the most recent entries,
        since a warrant can also be recalled later.
      </p>
      <ul>
        <li>
          <strong>Minnesota:</strong> see <Link href="/guides/minnesota-court-date-lookup/">how to look up a court case or court date</Link>.
        </li>
        <li>
          <strong>Florida:</strong> each county clerk runs its own case search, linked on every{" "}
          <Link href="/florida/">Florida county guide</Link>.
        </li>
      </ul>

      <h2>3. Call the court clerk</h2>
      <p>
        The clerk's office for the county where the case is filed can usually tell you whether a case has an active warrant
        and what it's for. Have your full name, date of birth and case number ready if you have one.
      </p>

      <h2>4. Have a lawyer check for you</h2>
      <p>
        This is the safest route, especially if you think there's a warrant. A defense lawyer or public defender can check,
        explain what it's for, and often arrange to clear it without you being taken into custody.{" "}
        {ext(us.lawhelp.url, "LawHelp.org")} lists free legal aid by state.
      </p>

      <h2>If you find a warrant</h2>
      <ul>
        <li>Don't ignore it. A warrant doesn't expire on its own, and it can come up at any traffic stop.</li>
        <li>
          For a bench warrant from a missed court date or unpaid fine, many courts let you get back on the calendar, ask the
          judge to recall the warrant, or pay what's owed. The court or a lawyer can tell you what applies.
        </li>
        <li>For a warrant on new charges, talk to a lawyer before turning yourself in.</li>
      </ul>
    </GuideShell>
  );
}
