import Link from "next/link";
import { publishedCounties } from "@/data/states/minnesota/counties";

// Links from Minnesota guides to the matching county pages.
// "warrants" and "roster" list only counties that post that list online.
export default function MnCountyLinks({ only }: { only?: "warrants" | "roster" }) {
  const list = publishedCounties.filter((c) =>
    only === "warrants" ? c.detail?.warrants : only === "roster" ? c.detail?.roster : true,
  );
  return (
    <ul className="county-grid">
      {list.map((c) => (
        <li key={c.slug}>
          <Link href={`/minnesota/${c.slug}/`}>{c.name} County</Link>
          {c.seat && !c.seat.toLowerCase().includes(c.name.toLowerCase()) ? (
            <span className="muted"> ({c.seat})</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
