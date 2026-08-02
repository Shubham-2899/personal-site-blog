import type { ReactNode } from "react";

/**
 * Mono, uppercase, wide-tracked label. The sans/mono split is the site's main
 * hierarchy signal, so section labels are always mono.
 */
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-[18px] font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
      {children}
    </h2>
  );
}
