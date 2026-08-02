import type { ReactNode } from "react";

/** Small mono tag chip used for tech stacks. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-pill px-[7px] py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function PillGroup({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-1.5">{children}</div>;
}
