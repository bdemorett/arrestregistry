import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getState, states } from "@/states";

type Props = { params: Promise<{ state: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  return getState(state)?.hubMetadata ?? {};
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();
  return <s.Hub />;
}
