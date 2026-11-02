"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

type Item = { slug: string; name: string; seat: string };

export default function CountyFinder({ counties, state = "minnesota" }: { counties: Item[]; state?: string }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return counties;
    return counties.filter((c) => c.name.toLowerCase().includes(s) || c.seat.toLowerCase().includes(s));
  }, [q, counties]);
  return (
    <div className="finder">
      <label htmlFor="county-q">Find your county</label>
      <input
        id="county-q"
        type="search"
        placeholder="County or county seat, e.g. Stearns or St. Cloud"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
      />
      {list.length ? (
        <ul className="county-grid">
          {list.map((c) => (
            <li key={c.slug}>
              <Link href={`/${state}/${c.slug}/`}>{c.name} County</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">No published county matches "{q}". Try the county seat, or check the full list below.</p>
      )}
    </div>
  );
}
