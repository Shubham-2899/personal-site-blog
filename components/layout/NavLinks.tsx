"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { nav } from "@/content/site";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {nav.map(({ href, label }) => {
        // /blog stays active while reading a post.
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "text-[13px] font-semibold text-fg"
                : "text-[13px] text-muted transition-colors hover:text-fg"
            }
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
