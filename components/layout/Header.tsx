import Link from "next/link";

import { Avatar } from "@/components/layout/Avatar";
import { NavLinks } from "@/components/layout/NavLinks";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-3">
        <Avatar />
        <span>
          <span className="block text-[15px] font-semibold text-fg">
            {site.name}
          </span>
          <span className="block font-mono text-xs text-muted">
            {site.role}
          </span>
        </span>
      </Link>

      <nav className="flex items-center gap-5" aria-label="Main">
        <NavLinks />
        <ThemeToggle />
      </nav>
    </header>
  );
}
