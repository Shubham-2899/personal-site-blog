import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Certification } from "@/lib/types";

/** Simple row of monogram badges — no vendor logos, no colour. */
export function Certifications({ items }: { items: Certification[] }) {
  return (
    <section className="mt-11">
      <SectionHeading>Certifications &amp; Learning</SectionHeading>

      <ul className="flex flex-wrap gap-4">
        {items.map((item) => (
          <li key={item.name} className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex size-8 shrink-0 items-center justify-center rounded bg-pill font-mono text-[9px] text-muted"
            >
              {item.initials}
            </span>
            <span>
              <span className="block text-[13px] text-fg">{item.name}</span>
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
