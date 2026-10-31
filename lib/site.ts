export const site = {
  name: "Arrest Registry",
  domain: "arrestregistry.com",
  url: "https://arrestregistry.com",
  tagline: "Plain-English guides to finding arrest, jail, and court records from official sources.",
  email: "contact@arrestregistry.com",
  owner: "DeMorett Holdings LLC",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  bingVerification: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  affiliateUrl: process.env.NEXT_PUBLIC_AFFILIATE_URL || "",
  affiliateName: process.env.NEXT_PUBLIC_AFFILIATE_NAME || "",
  // Bump when content is reviewed; shown on pages as "Last reviewed".
  lastReviewed: "2026-10-29",
};

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
