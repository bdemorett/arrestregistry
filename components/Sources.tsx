import type { Link as L } from "@/data/states/minnesota/counties";
import { formatDate } from "@/lib/site";

export default function Sources({ items, reviewed }: { items: L[]; reviewed: string }) {
  return (
    <section className="sources">
      <h2>Sources</h2>
      <p className="muted">Checked against official pages on {formatDate(reviewed)}. Agencies change their sites, so confirm details before you act on them.</p>
      <ul>
        {items.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
