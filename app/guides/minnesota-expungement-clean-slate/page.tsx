import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Sources from "@/components/Sources";
import { mn } from "@/data/states/minnesota/resources";
import { formatDate, site } from "@/lib/site";

const path = "/guides/minnesota-expungement-clean-slate/";

export const metadata: Metadata = {
  title: "Minnesota Expungement and the Clean Slate Act",
  description:
    "How Minnesota's Clean Slate Act automatically seals eligible arrest and conviction records, what still needs a petition, and where to get help.",
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Guides", href: "/guides/" },
          { name: "Minnesota expungement", href: path },
        ]}
      />
      <h1>Minnesota Expungement and the Clean Slate Act</h1>
      <p className="lede">
        Since January 1, 2025, Minnesota seals many criminal records automatically, with no petition and no filing fee. Some
        records still need the old court petition process. Here's how to tell which applies.
      </p>
      <p className="muted">Last reviewed {formatDate(site.lastReviewed)}. This is general information, not legal advice.</p>

      <h2>What the Clean Slate Act does</h2>
      <p>
        The Legislature passed the Clean Slate Act in 2023. It took effect January 1, 2025, though the BCA needed extra time
        to finish its systems, so the first automatic expungements came later in 2025. State leaders estimated roughly
        500,000 Minnesotans could benefit.
      </p>
      <p>
        Before the law, expungement meant filing a petition, paying fees that could top $300, and waiting on a court date.
        Very few eligible people did it. The new law flips that: the state finds qualifying records and seals them on its
        own.
      </p>

      <h2>Records that can be sealed automatically</h2>
      <p>The BCA's fact sheet groups eligible records into three types:</p>
      <ul>
        <li>
          <strong>Dismissals and exonerations.</strong> Cases that were dismissed or ended in an acquittal.
        </li>
        <li>
          <strong>Diversion and stays of adjudication.</strong> Cases resolved through a diversion program or a stay of
          adjudication, once the person completes it and stays out of trouble for the waiting period.
        </li>
        <li>
          <strong>Certain convictions.</strong> Many petty misdemeanors, misdemeanors, and gross misdemeanors, plus some
          lower-level felonies, after a crime-free waiting period that runs from about two to five years depending on the
          offense.
        </li>
      </ul>
      <p>
        Commonly eligible offenses include theft, forgery, property damage, receiving stolen property, and fifth-degree drug
        possession or sale. Offenses that require predatory offender registration are not eligible.
      </p>

      <h2>Cannabis records</h2>
      <p>
        Minnesota's Adult-Use Cannabis Act, effective August 1, 2023, separately requires automatic expungement of many
        lower-level cannabis records. Felony cannabis cases go to a Cannabis Expungement Board for review.
      </p>

      <h2>When you still need a petition</h2>
      <p>
        If your record doesn't qualify for automatic sealing, you may still be able to petition the court under{" "}
        <a href={mn.statute609A.url} target="_blank" rel="noopener">
          Minnesota Statutes chapter 609A
        </a>
        . The Clean Slate Act also widened the list of offenses eligible for a petition. Free help is available through
        legal aid programs listed on{" "}
        <a href="https://www.lawhelpmn.org" target="_blank" rel="noopener">
          LawHelpMN
        </a>
        .
      </p>

      <h2>How to check your own record</h2>
      <ol className="steps">
        <li>
          Search your name in{" "}
          <a href={mn.mcro.url} target="_blank" rel="noopener">
            Minnesota Court Records Online
          </a>{" "}
          to see which cases are still public.
        </li>
        <li>
          Run the{" "}
          <a href={mn.bcaSearch.url} target="_blank" rel="noopener">
            BCA public search
          </a>{" "}
          to see what an employer running a public check would see.
        </li>
        <li>
          Request your full BCA record if you need to see private entries too. Details are on the{" "}
          <a href={mn.bcaFaq.url} target="_blank" rel="noopener">
            BCA FAQ
          </a>
          .
        </li>
      </ol>

      <div className="note">
        Private background check companies may keep old copies of records after they're sealed. If a sealed record shows up
        in a commercial report, you can dispute it with that company under the federal Fair Credit Reporting Act.
      </div>

      <p>
        Related: <Link href="/guides/are-arrest-records-public-in-minnesota/">Are arrest records public in Minnesota?</Link>
      </p>

      <Sources
        items={[mn.cleanSlateFactSheet, mn.statute609A, mn.bcaFaq, { label: "LawHelpMN", url: "https://www.lawhelpmn.org" }]}
        reviewed={site.lastReviewed}
      />
    </article>
  );
}
