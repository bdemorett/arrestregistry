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
      <p className="muted">Effective {formatDate("2026-11-07")}</p>
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
        We use Google AdSense to show ads. Google and its partners use cookies to serve ads based on your prior visits to
        this site and other sites, and to measure how ads perform. Google's use of advertising cookies lets it and its
        partners show you ads based on your visits to this and other sites on the internet.
      </p>
      <p>
        You can turn off personalized ads in{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener">
          Google's Ad Settings
        </a>
        , and opt out of some third-party vendors' personalized advertising at{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">
          aboutads.info
        </a>
        . Learn more in{" "}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">
          how Google uses cookies in advertising
        </a>
        . Visitors in the European Economic Area, the UK and Switzerland are asked for consent before personalized ads are
        shown.
      </p>
      <h2>Contact</h2>
      <p>
        Questions: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </article>
  );
}
