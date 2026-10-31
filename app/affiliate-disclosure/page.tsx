import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  alternates: { canonical: "/affiliate-disclosure/" },
};

export default function Disclosure() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "Affiliate disclosure", href: "/affiliate-disclosure/" }]} />
      <h1>Affiliate Disclosure</h1>
      <p>
        Some links on Arrest Registry go to paid people-search and background check services. If you buy something after
        clicking one, {site.owner} may earn a commission at no extra cost to you. Those links are marked as sponsored.
      </p>
      <p>
        Commissions never change which official sources we list or what we say about them. Official government tools are
        always listed first, and most of them are free.
      </p>
      <h2>About people-search services</h2>
      <p>
        Private people-search sites compile public records from many sources. Their reports can be incomplete, outdated, or
        matched to the wrong person. They are not consumer reports under the Fair Credit Reporting Act and may not be used to
        decide on employment, housing, credit, insurance, or any other FCRA purpose. For those uses, employers and landlords
        need an FCRA-compliant background screening company.
      </p>
    </article>
  );
}
