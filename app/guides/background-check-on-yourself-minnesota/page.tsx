import type { Metadata } from "next";
import Link from "next/link";
import GuideShell, { ext } from "@/components/GuideShell";
import { mn } from "@/data/states/minnesota/resources";

const slug = "background-check-on-yourself-minnesota";
const title = "How to Run a Background Check on Yourself in Minnesota";

export const metadata: Metadata = {
  title,
  description:
    "See what an employer's public check shows, request your full BCA criminal history for $8, and fix errors before they cost you a job or apartment.",
  alternates: { canonical: `/guides/${slug}/` },
};

export default function Page() {
  return (
    <GuideShell
      slug={slug}
      title={title}
      crumb="Background check on yourself"
      lede="Before a job or apartment application, it's worth seeing what's on your record. In Minnesota you can check the public version for free and order your complete record from the BCA for $8."
      sources={[mn.bcaSearch, mn.bcaFaq, mn.bcaRequestForm, mn.bcaFees, mn.mcroInfo]}
      faqs={[
        {
          q: "What's the difference between the free search and the $8 request?",
          a: "The free search shows public data: convictions for 15 years after the sentence ends. The $8 request gets your complete record, including private data and sealed offenses.",
        },
        {
          q: "Will a private background check company show the same thing?",
          a: "Not always. Commercial reports pull from many sources and can include old court records or data the BCA no longer makes public. If a report used for a job or rental is wrong, you can dispute it with the company under the federal Fair Credit Reporting Act.",
        },
      ]}
    >
      <h2>1. See what the public sees (free)</h2>
      <p>
        Run your own name and date of birth through the BCA's {ext(mn.bcaSearch.url, "Public Criminal History Search")}. This
        is the same public data anyone can pull. It shows convictions for 15 years after a sentence ends and leaves out
        arrests without a conviction, juvenile records, and out-of-state cases.
      </p>

      <h2>2. Check court records</h2>
      <p>
        Search your name in {ext(mn.mcro.url, "Minnesota Court Records Online")}. Court records can show convictions older
        than 15 years, which the BCA public search drops. If you have an open case, search by case number instead, since
        pending cases don't come up by name.
      </p>

      <h2>3. Request your complete BCA record ($8)</h2>
      <p>
        The BCA's {ext(mn.bcaRequestForm.url, "Criminal History Record Request")} gets your full record, including private
        data and sealed offenses. The fee is $8.
      </p>
      <ul>
        <li>
          <strong>In person:</strong> bring the completed form and a current government-issued photo ID to the BCA, 1430
          Maryland Avenue East, St. Paul.
        </li>
        <li>
          <strong>By mail:</strong> sign the form in front of a notary, include a self-addressed stamped envelope and
          payment, and mail it to: CHA Unit, Bureau of Criminal Apprehension, 1430 Maryland Avenue East, Saint Paul, MN 55106.
        </li>
      </ul>

      <h2>4. Fix what's wrong</h2>
      <ul>
        <li>
          <strong>Errors in your BCA record:</strong> contact the BCA and ask how to challenge the inaccurate entry.
        </li>
        <li>
          <strong>Records that should be sealed:</strong> many records now qualify for automatic sealing under the Clean
          Slate Act. See our <Link href="/guides/minnesota-expungement-clean-slate/">expungement guide</Link>.
        </li>
        <li>
          <strong>Errors in a commercial report:</strong> dispute them directly with the background check company.
        </li>
      </ul>
    </GuideShell>
  );
}
