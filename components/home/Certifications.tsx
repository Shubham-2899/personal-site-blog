import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Certification } from "@/lib/types";

/**
 * One per line, monogram badge and label — no vendor logos, no colour.
 * Names link to the issuer's verification page where there is one.
 */
export function Certifications({ items }: { items: Certification[] }) {
  return (
    <section className="mt-11">
      <SectionHeading>Certifications &amp; Learning</SectionHeading>

      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.name} className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex size-8 shrink-0 items-center justify-center rounded bg-pill font-mono text-[9px] text-muted"
            >
              {item.initials}
            </span>
            <span>
              <span className="block text-[13px] text-fg">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-border transition-colors hover:border-accent"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </span>
              <span className="block font-mono text-[11px] text-muted">
                {item.org}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
