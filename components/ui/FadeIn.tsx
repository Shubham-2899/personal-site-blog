import type { CSSProperties, ReactNode } from "react";

type Props = {
  /** Position in its list. Drives the stagger; capped so long lists stay snappy. */
  index?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Soft rise on mount, staggered 60ms per item down a list.
 *
 * Server component — the animation is pure CSS, so there's no scroll observer
 * and no client JS. Honours prefers-reduced-motion via globals.css.
 */
export function FadeIn({ index = 0, className = "", children }: Props) {
  const style = {
    "--fade-delay": `${Math.min(index, 6) * 60}ms`,
  } as CSSProperties;

  return (
    <div className={`animate-fade-in-up ${className}`} style={style}>
      {children}
    </div>
  );
}
