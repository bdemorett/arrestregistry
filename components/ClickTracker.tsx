"use client";
import { useEffect } from "react";

// Sends GA4 events for affiliate clicks and outbound clicks to official sources.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (!gtag) return;
      if (a.dataset.track === "affiliate_click") {
        gtag("event", "affiliate_click", { placement: a.dataset.placement || "unknown", page_path: location.pathname });
      } else if (a.host && a.host !== location.host) {
        gtag("event", "official_link_click", { link_domain: a.host, page_path: location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
