import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { formatDate, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <article>
      <Breadcrumbs items={[{ name: "Privacy", href: "/privacy/" }]} />
      <h1>Privacy Policy</h1>
      <p className="muted">Effective {formatDate(site.lastReviewed)}</p>
      <p>
        This policy covers {site.domain}, operated by {site.owner}. We don't ask you to create an account and we don't
        collect names or search terms you type into government websites we link to.
      </p>
      <h2>Analytics</h2>
      <p>
        We use Google Analytics to understand which pages are useful. It collects information such as pages visited, device
        type, approximate location, and how you arrived, using cookies. Google's use of this data is described in its{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
          privacy policy
        </a>
        . You can opt out with Google's{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">
          browser add-on
        </a>
        .
      </p>
      <h2>Affiliate links</h2>
      <p>
        When you click a sponsored link, the partner site may set its own cookies to credit us for a purchase. Their
        privacy policies apply once you leave our site.
      </p>
      <h2>Advertising</h2>
      <p>
        If we add display advertising, ad partners may use cookies to show ads based on your visits to this and other sites.
        We will update this policy before that happens.
      </p>
      <h2>Contact</h2>
      <p>
        Questions: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </article>
  );
}
