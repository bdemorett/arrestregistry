import { districtStats, metroCrime, statewide2025, ucrSource } from "@/data/mnUcr2025";
import { districtName } from "@/data/minnesota";

const fmt = (n: number) => n.toLocaleString("en-US");
const pct = (a: number, b: number) => {
  if (a === 0) return b === 0 ? "no change" : "new";
  const p = ((b - a) / a) * 100;
  const r = Math.abs(p) < 1 ? p.toFixed(1) : p.toFixed(0);
  return `${p > 0 ? "+" : ""}${r}%`;
};

export default function CrimeStats({ county, district, districtCountyCount }: { county: string; district: number; districtCountyCount: number }) {
  const m = metroCrime[county];
  const ds = districtStats[district];
  const rows: [string, [number, number]][] = m
    ? [
        ["Homicide", m.homicide],
        ["Rape", m.rape],
        ["Robbery", m.robbery],
        ["Aggravated assault", m.aggAssault],
        ["Burglary", m.burglary],
        ["Larceny/theft", m.larceny],
        ["Motor vehicle theft", m.mvTheft],
        ["Arson", m.arson],
      ]
    : [];
  const v24 = m ? m.homicide[0] + m.rape[0] + m.robbery[0] + m.aggAssault[0] : 0;
  const v25 = m ? m.homicide[1] + m.rape[1] + m.robbery[1] + m.aggAssault[1] : 0;
  const vChange = v24 ? ((v25 - v24) / v24) * 100 : 0;

  return (
    <section>
      <h2>Crime and arrests in context</h2>
      {m && (
        <>
          <p>
            Law enforcement agencies in {county} County reported {fmt(v25)} violent crimes in 2025,{" "}
            {vChange < 0 ? "down" : "up"} {Math.abs(vChange).toFixed(0)}% from {fmt(v24)} in 2024.
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Offense</th>
                  <th>2024</th>
                  <th>2025</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, [a, b]]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{fmt(a)}</td>
                    <td>{fmt(b)}</td>
                    <td>{pct(a, b)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {ds && (
        <p>
          {districtCountyCount === 1
            ? `${county} County makes up the ${districtName(district)} on its own.`
            : `${county} County is one of ${districtCountyCount} counties in the ${districtName(district)}.`}{" "}
          In 2025, agencies in the district reported {fmt(ds.groupA)} arrests for Group A offenses (serious
          crimes such as assault, theft, and drug offenses) and {fmt(ds.groupB)} for Group B offenses (including DWI,
          disorderly conduct, and trespass). The district's violent crime rate was {ds.violentRate} per 100,000 residents,
          compared with {statewide2025.violentRate} statewide.
        </p>
      )}
      <p className="muted">
        Source:{" "}
        <a href={ucrSource.url} target="_blank" rel="noopener">
          {ucrSource.label}
        </a>
        . Figures are offenses and arrests reported by local agencies, not convictions.
      </p>
    </section>
  );
}
