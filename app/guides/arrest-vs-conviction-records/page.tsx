import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SearchCta from "@/components/SearchCta";
import Sources from "@/components/Sources";
import { mn } from "@/lib/mnResources";
import { formatDate, site } from "@/lib/site";

const path = "/guides/arrest-vs-conviction-records/";

export const metadata: Metadata = {
  title: "Arrest Records vs. Conviction Records: What's the Difference?",
  description:
    "An arrest record shows someone was taken into custody. A conviction record shows a court found them guilty. Here's why it matters.",
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Guides", href: "/guides/" },
          { name: "Arrest vs. conviction records", href: path },
        ]}
      />
      <h1>Arrest Records vs. Conviction Records</h1>
      <p className="lede">
        People use "criminal record" to mean both, but they're different things. An arrest record says police took someone
        into custody. A conviction record says a court found them guilty. Mixing them up is how people get misjudged.
      </p>
      <p className="muted">Last reviewed {formatDate(site.lastReviewed)}</p>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Arrest record</th>
              <th>Conviction record</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What it means</td>
              <td>Police had probable cause to detain someone</td>
              <td>A court found guilt or accepted a guilty plea</td>
            </tr>
            <tr>
              <td>Who creates it</td>
              <td>Police and the county jail</td>
              <td>The district court</td>
            </tr>
            <tr>
              <td>Where to find it (MN)</td>
              <td>County jail roster, court filings if charged</td>
              <td>MCRO, BCA public search</td>
            </tr>
            <tr>
              <td>Proves guilt?</td>
              <td>No</td>
              <td>Yes, unless overturned</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>What happens after an arrest</h2>
      <p>After a booking, a case can go several ways:</p>
      <ul>
        <li>Released with no charges filed</li>
        <li>Charged, then dismissed</li>
        <li>Resolved through diversion or a stay of adjudication, which can end without a conviction</li>
        <li>Pleaded or found guilty, sometimes on a lesser charge than the arrest</li>
        <li>Acquitted at trial</li>
      </ul>
      <p>
        Only the last two produce a conviction or a final verdict. That's why the charge on a jail roster often doesn't match
        the final outcome. Always check the court record.
      </p>

      <h2>How each shows up in background checks</h2>
      <p>
        In Minnesota, the BCA's public criminal history search shows convictions only. Arrest data without a conviction is
        private at the BCA.
      </p>
      <p>
        Commercial background check companies are covered by the federal Fair Credit Reporting Act when their reports are
        used for jobs, housing, or credit. The FCRA generally bars them from reporting arrests that didn't lead to a
        conviction once they're more than seven years old. Convictions can be reported regardless of age.
      </p>
      <p>
        Minnesota's ban-the-box law also keeps most private employers from asking about criminal history until an
        applicant has been selected for an interview, or until a conditional job offer if there's no interview.
      </p>

      <h2>If you're checking on someone</h2>
      <ol className="steps">
        <li>Treat a jail roster entry as a starting point, not an answer.</li>
        <li>
          Look up the case in{" "}
          <a href={mn.mcro.url} target="_blank" rel="noopener">
            MCRO
          </a>{" "}
          to see the actual outcome. Open cases only come up by case number, not by name.
        </li>
        <li>Match on date of birth, not just name. Common names produce false matches constantly.</li>
      </ol>

      <SearchCta placement="guide-arrest-vs-conviction" />

      <p>
        Related: <Link href="/guides/minnesota-expungement-clean-slate/">Minnesota expungement and the Clean Slate Act</Link>
      </p>

      <Sources
        items={[
          mn.bcaInfo,
          mn.bcaFaq,
          { label: "FTC: Background checks and the FCRA", url: "https://www.ftc.gov/business-guidance/resources/background-checks-what-employers-need-know" },
          { label: "Minn. Stat. § 364.021 (ban the box)", url: "https://www.revisor.mn.gov/statutes/cite/364.021" },
        ]}
        reviewed={site.lastReviewed}
      />
    </article>
  );
}
