import Link from "next/link";
import type { Metadata } from "next";
import { buildNav, canonAvailable, type NavSection } from "./lib/canon";

export const metadata: Metadata = {
  title: "Documentation · Corpus",
  description: "The Corpus documentation.",
  alternates: { canonical: "/docs/" },
};

function Section({ sec, intro }: { sec: NavSection; intro?: string }) {
  return (
    <section className="docs-index-section">
      <h2>{sec.title}</h2>
      {intro ? <p>{intro}</p> : null}
      <ul className="docs-index-list">
        {sec.items.map((it) => (
          <li key={it.slug}>
            <Link href={`/docs/${it.slug}/`}>{it.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function DocsIndex() {
  if (!canonAvailable()) {
    return <p>The docs source was not available at build time.</p>;
  }
  const nav = buildNav();
  const find = (title: string) => nav.find((s) => s.title === title);
  const startHere = find("Start here");
  const tutorial = find("Tutorial");
  const examples = find("Examples");
  const reference = find("Reference");
  const adrs = find("ADRs");

  return (
    <div className="docs-prose" data-pagefind-body>
      <h1>Corpus documentation</h1>
      <p>
        Start with the numbered pages. Use the tutorial when you want to walk
        the loop once.
      </p>
      {startHere ? <Section sec={startHere} /> : null}
      {tutorial ? <Section sec={tutorial} /> : null}
      {examples ? <Section sec={examples} /> : null}
      {reference ? (
        <Section
          sec={reference}
          intro="Detailed rules, formats, checks, and glossary."
        />
      ) : null}
      {adrs && adrs.items.length > 0 ? (
        <section className="docs-index-section docs-index-section-compact">
          <h2>ADRs</h2>
          <p>
            Decision records for the framework.{" "}
            <Link href="/docs/adrs/README/">Browse {adrs.items.length} ADRs</Link>
          </p>
        </section>
      ) : null}
    </div>
  );
}
