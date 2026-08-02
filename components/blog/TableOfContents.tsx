import type { TocEntry } from "@/lib/types";

/**
 * Rendered only for posts with 3+ headings — below that it's noise.
 * Ids come from lib/blog.ts, which slugs with the same library rehype-slug
 * uses, so these anchors always resolve.
 */
export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  if (toc.length < 3) return null;

  return (
    <nav
      aria-labelledby="toc-heading"
      className="mb-7 inline-block rounded-md border border-border px-4 py-3.5"
    >
      <p
        id="toc-heading"
        className="mb-2 font-mono text-xs text-muted"
      >
        On this page
      </p>

      <ul>
        {toc.map((entry) => (
          <li key={entry.id} className={entry.depth === 3 ? "pl-3" : undefined}>
            <a
              href={`#${entry.id}`}
              className="text-[13px] leading-8 text-muted transition-colors hover:text-accent"
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
