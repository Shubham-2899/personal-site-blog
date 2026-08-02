import type { ReactElement } from "react";

import type { UsesIconName } from "@/lib/types";

/**
 * Hand-drawn 18px icon set — deliberately not a library, so the stroke weight
 * and corner treatment stay consistent with the rest of the site.
 * Colour comes from `currentColor`, set by the badge in UsesGroup.
 */
const PATHS: Record<UsesIconName, ReactElement> = {
  brackets: <path d="M7 4L2 9l5 5M11 4l5 5-5 5" />,

  terminal: (
    <>
      <path d="M2 3l5 5-5 5" />
      <line x1="9" y1="13" x2="16" y2="13" />
    </>
  ),

  hex: <path d="M9 1.5l7 4v7l-7 4-7-4v-7z" />,

  cylinder: (
    <>
      <ellipse cx="9" cy="4" rx="6" ry="2.2" />
      <path d="M3 4v10c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V4" />
    </>
  ),

  cloud: <path d="M5 13h8a3 3 0 000-6 4.5 4.5 0 00-8.7-1.3A3.5 3.5 0 005 13z" />,

  stack: (
    <>
      <rect x="3" y="3" width="5" height="5" />
      <rect x="10" y="3" width="5" height="5" />
      <rect x="6.5" y="10" width="5" height="5" />
    </>
  ),

  arrow: <path d="M3 9h12M10 4l5 5-5 5" />,

  spark: (
    <path d="M9 1v6M9 11v6M1 9h6M11 9h6M3.5 3.5l4 4M10.5 10.5l4 4M14.5 3.5l-4 4M7.5 10.5l-4 4" />
  ),

  doc: (
    <>
      <rect x="4" y="2" width="10" height="14" rx="1" />
      <line x1="7" y1="6" x2="11" y2="6" />
      <line x1="7" y1="9" x2="11" y2="9" />
    </>
  ),

  bubble: <path d="M2 4h14v8H8l-3 3v-3H2z" />,

  laptop: (
    <>
      <rect x="3" y="3" width="12" height="8" rx="1" />
      <line x1="1" y1="14" x2="17" y2="14" />
    </>
  ),

  triangle: <path d="M9 3l6.5 12h-13z" />,

  server: (
    <>
      <rect x="2" y="3" width="14" height="5" rx="1.2" />
      <rect x="2" y="10" width="14" height="5" rx="1.2" />
      {/* Zero-length strokes render as dots under strokeLinecap="round". */}
      <line x1="5" y1="5.5" x2="5" y2="5.5" />
      <line x1="5" y1="12.5" x2="5" y2="12.5" />
    </>
  ),
};

export function UsesIcon({ name }: { name: UsesIconName }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
