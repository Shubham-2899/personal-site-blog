import type { CSSProperties } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { UsesIcon } from "@/components/uses/UsesIcon";
import type { UsesGroup as UsesGroupType } from "@/lib/types";

/**
 * Badge tint is derived from each item's hue at a fixed lightness/chroma, so
 * the set reads as one family. `--badge-alpha` is theme-dependent (globals.css)
 * — the fill needs more opacity on dark to stay visible.
 */
export function UsesGroup({ group }: { group: UsesGroupType }) {
  return (
    <section className="mt-11">
      <SectionHeading>{group.label}</SectionHeading>

      <ul>
        {group.items.map((item) => {
          const style = {
            color: `oklch(0.6 0.14 ${item.hue})`,
            backgroundColor: `oklch(0.6 0.14 ${item.hue} / var(--badge-alpha))`,
          } as CSSProperties;

          return (
            <li key={item.name} className="mb-2.5 flex items-center gap-2.5">
              <span
                className="flex size-[30px] shrink-0 items-center justify-center rounded-[7px]"
                style={style}
              >
                <UsesIcon name={item.icon} />
              </span>

              <span className="text-sm">
                <span className="font-medium text-fg">{item.name}</span>
                <span className="text-muted"> — {item.note}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
