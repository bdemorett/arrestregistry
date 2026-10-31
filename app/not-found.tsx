import Link from "next/link";

export default function NotFound() {
  return (
    <article>
      <h1>Page not found</h1>
      <p>
        That page doesn't exist, or the county guide isn't published yet. <Link href="/minnesota/">Browse Minnesota counties</Link>.
      </p>
    </article>
  );
}
