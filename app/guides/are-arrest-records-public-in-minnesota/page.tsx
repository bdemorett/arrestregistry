import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { mn } from "@/data/states/minnesota/resources";
import { formatDate, site } from "@/lib/site";

const path = "/guides/are-arrest-records-public-in-minnesota/";

export const metadata: Metadata = {
  title: "Are Arrest Records Public in Minnesota?",
  description:
    "Which Minnesota arrest, booking, court, and criminal history records are public, which are private, and how long they stay visible.",
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Guides", href: "/guides/" },
          { name: "Are arrest records public in Minnesota?", href: path },
        ]}
      />
      <h1>Are Arrest Records Public in Minnesota?</h1>
      <p className="lede">
        Partly. The details of a recent arrest are public, and so are court cases. But the state's official criminal history
        only treats convictions as public, and only for a limited time. Which answer you get depends on where you look.
      </p>
      <p className="muted">Last reviewed {formatDate(site.lastReviewed)}</p>

      <h2>The short version</h2>
      <ul>
        <li>
          <strong>Jail bookings are public</strong> while the sheriff keeps them posted, usually while someone is in custody
          and for a few days after.
        </li>
        <li>
          <strong>Court cases are public</strong> through{" "}
          <a href={mn.mcro.url} target="_blank" rel="noopener">
            Minnesota Court Records Online
          </a>
          , including older cases, unless a judge seals or expunges them. Online name searches only return criminal cases
          that ended in a conviction, so an open case needs the case number or a courthouse terminal.
        </li>
        <li>
          <strong>Arrests without a conviction are private</strong> in the state's criminal history system run by the Bureau
          of Criminal Apprehension (BCA).
        </li>
        <li>
          <strong>Convictions are public at the BCA for 15 years</strong> after the sentence is completed, then they become
          private there.
        </li>
        <li>
          <strong>Booking photos are generally public</strong>, though agencies can hold them back temporarily during an
          active investigation.
        </li>
      </ul>

      <h2>Why the answer changes by source</h2>
      <p>
        Minnesota's Government Data Practices Act classifies each type of government record separately. Law enforcement
        data falls under{" "}
        <a href={mn.statute1382.url} target="_blank" rel="noopener">
          section 13.82
        </a>
        , which makes basic arrest and booking information public. Criminal history held by the BCA falls under{" "}
        <a href={mn.statute1387.url} target="_blank" rel="noopener">
          section 13.87
        </a>
        , which is much narrower. Court records follow the Minnesota Rules of Public Access, set by the courts themselves.
      </p>
      <p>
        So the same arrest can be visible on a county jail roster this week, show up as a case in MCRO for years, and never
        appear in the BCA's public search at all if it didn't end in a conviction.
      </p>

      <h2>What the BCA public search includes</h2>
      <p>
        The{" "}
        <a href={mn.bcaSearch.url} target="_blank" rel="noopener">
          Public Criminal History Search
        </a>{" "}
        is free. You need a first name, last name, and date of birth. A public record shows the offense, offense date, court,
        conviction date, sentence, and level of conviction.
      </p>
      <p>It leaves out:</p>
      <ul>
        <li>Arrest information</li>
        <li>Juvenile records</li>
        <li>Court information from cases that didn't end in a conviction</li>
        <li>Convictions where the sentence was completed more than 15 years ago</li>
        <li>Out-of-state and federal records</li>
      </ul>
      <p>
        People can request their own full record, including private data, from the BCA. Employers and landlords can see
        private data only with the person's written consent.
      </p>

      <h2>Court records last longer</h2>
      <p>
        A conviction that has dropped off the BCA's public search can still be found in the district court record. Court
        records stay public unless they are expunged or sealed. That's why Minnesota's expungement laws matter so much, and
        why the{" "}
        <Link href="/guides/minnesota-expungement-clean-slate/">Clean Slate Act</Link> was a big change.
      </p>

      <h2>How to look one up</h2>
      <ol className="steps">
        <li>
          Start with the county jail roster if the arrest was recent. <Link href="/minnesota/">Find your county</Link>.
        </li>
        <li>
          Search{" "}
          <a href={mn.mcro.url} target="_blank" rel="noopener">
            MCRO
          </a>{" "}
          by name to see convictions, or by case number for an open case, including charges, hearings, and outcome.
        </li>
        <li>
          Run the{" "}
          <a href={mn.bcaSearch.url} target="_blank" rel="noopener">
            BCA search
          </a>{" "}
          to see convictions on the person's state record.
        </li>
      </ol>

      <SearchCta placement="guide-public" />

      <Sources items={[mn.bcaFaq, mn.bcaInfo, mn.mcroInfo, mn.statute1382, mn.statute1387]} reviewed={site.lastReviewed} />
    </article>
  );
}
