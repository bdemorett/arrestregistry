import Link from "next/link";

export default function NotFound() {
  return (
    <article>
      <h1>Page not found</h1>
      <p>
        That page doesn't exist, or the county guide isn't published yet. Browse <Link href="/minnesota/">Minnesota</Link> or <Link href="/florida/">Florida</Link> counties.
      </p>
    </article>
  );
}
