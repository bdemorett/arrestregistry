import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact/" }]} />
      <h1>Contact</h1>
      <p>
        Found a broken link or outdated detail on a county page? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> with the page and what changed.
      </p>
      <div className="note">
        We can't remove records, look up individuals, or give legal advice. We don't hold any arrest records. To correct
        or remove a record, contact the agency that created it: the county sheriff for jail records, the district court for
        court records, or the Minnesota BCA for criminal history.
      </div>
    </article>
  );
}
