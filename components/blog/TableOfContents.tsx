import type { TocEntry } from "@/lib/types";

/**
 * Rendered only for posts with 3+ headings — below that it's noise.
 * Ids come from lib/blog.ts, which slugs with the same library rehype-slug
 * uses, so these anchors always resolve.
 */
export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  if (toc.length < 3) return null;

  const numbered = toc.map((entry, i) => ({
    ...entry,
    number:
      entry.depth === 2
        ? toc.slice(0, i + 1).filter((e) => e.depth === 2).length
        : null,
  }));

  return (
    <nav
      aria-labelledby="toc-heading"
      className="mb-7 inline-block rounded-md border border-border px-4 py-3.5"
    >
      <p
        id="toc-heading"
        className="mb-2.5 border-b border-border pb-2 font-mono text-[11px] uppercase tracking-wider text-muted"
      >
        On this page
      </p>

      <ul className="space-y-1.5 pt-2">
        {numbered.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={`group flex items-baseline gap-2 leading-tight text-muted transition-colors hover:text-accent ${
                entry.depth === 3 ? "pl-5 text-[12px]" : "text-[13px]"
              }`}
            >
              {entry.number !== null ? (
                <span className="font-mono text-[11px] text-accent">
                  {String(entry.number).padStart(2, "0")}
                </span>
              ) : (
                <span aria-hidden className="text-border transition-colors group-hover:text-accent">
                  –
                </span>
              )}
              <span>{entry.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
