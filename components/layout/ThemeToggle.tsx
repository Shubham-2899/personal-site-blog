"use client";

import { useTheme } from "next-themes";

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

/**
 * Shows the theme you'd switch *to*: a crescent while light, a sun while dark.
 *
 * Both icons are always rendered and swapped with CSS off the `.dark` class, so
 * the correct one is painted server-side on the first frame — no mount flag, no
 * hydration mismatch, no placeholder gap in the header. Built from divs rather
 * than an icon library so it inherits the theme tokens and adds no dependency.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex size-[26px] cursor-pointer items-center justify-center border-none bg-transparent p-0"
    >
      {/* Accessible name swaps with the icon, via the same CSS. */}
      <span className="sr-only hidden dark:inline">Switch to light mode</span>
      <span className="sr-only inline dark:hidden">Switch to dark mode</span>

      {/* Sun: centre dot plus eight rays. */}
      <span aria-hidden className="relative hidden size-4 dark:block">
        <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted" />
        {RAYS.map((deg) => (
          <span
            key={deg}
            className="absolute top-1/2 left-1/2 h-1 w-0.5 origin-center rounded-[1px] bg-muted"
            style={{
              transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-7px)`,
            }}
          />
        ))}
      </span>

      {/* Crescent moon, solid fill. Sized and coloured to match the sun. */}
      <svg
        aria-hidden
        focusable="false"
        viewBox="0 0 24 24"
        className="block size-4 fill-muted dark:hidden"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
