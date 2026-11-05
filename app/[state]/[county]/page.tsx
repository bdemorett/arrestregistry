import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getState, states } from "@/states";

type Props = { params: Promise<{ state: string; county: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return states.flatMap((s) => s.countySlugs().map((county) => ({ state: s.slug, county })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county } = await params;
  return getState(state)?.countyMetadata(county) ?? {};
}

export default async function CountyRoute({ params }: Props) {
  const { state, county } = await params;
  const s = getState(state);
  if (!s || !s.countySlugs().includes(county)) notFound();
  return <s.County county={county} />;
}
