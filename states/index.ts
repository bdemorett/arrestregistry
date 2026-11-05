// State registry. Each state supplies its own hub page, county pages and metadata,
// so states can differ (court systems, record laws) while sharing one URL pattern:
//   /<state>/            state hub
//   /<state>/<county>/   county guide
// A state appears on the site only once it is added here.
import type { Metadata } from "next";
import type { ComponentType } from "react";
import MinnesotaHub, { hubMetadata as mnHubMetadata } from "@/states/minnesota/Hub";
import MinnesotaCounty, { countyMetadata as mnCountyMetadata, countySlugs as mnCountySlugs } from "@/states/minnesota/County";
import FloridaHub, { hubMetadata as flHubMetadata } from "@/states/florida/Hub";
import FloridaCounty, { countyMetadata as flCountyMetadata, countySlugs as flCountySlugs } from "@/states/florida/County";

export type StateModule = {
  slug: string;
  name: string;
  abbr: string;
  hubMetadata: Metadata;
  Hub: ComponentType;
  countySlugs: () => string[];
  countyMetadata: (county: string) => Metadata;
  County: ComponentType<{ county: string }>;
};

export const states: StateModule[] = [
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    hubMetadata: mnHubMetadata,
    Hub: MinnesotaHub,
    countySlugs: mnCountySlugs,
    countyMetadata: mnCountyMetadata,
    County: MinnesotaCounty,
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    hubMetadata: flHubMetadata,
    Hub: FloridaHub,
    countySlugs: flCountySlugs,
    countyMetadata: flCountyMetadata,
    County: FloridaCounty,
  },
];

export const getState = (slug: string) => states.find((s) => s.slug === slug);
