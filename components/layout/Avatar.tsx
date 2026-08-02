import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

import { site } from "@/content/site";

/**
 * Server component: checks for the avatar file at render time and falls back to
 * an initials monogram, so the header looks intentional before a photo is added.
 */
export function Avatar() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", site.avatar));

  if (!hasPhoto) {
    const initials = site.name
      .split(" ")
      .map((part) => part[0])
      .join("");

    return (
      <div
        aria-hidden
        className="flex size-16 shrink-0 items-center justify-center rounded-full bg-pill font-mono text-sm text-muted"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={site.avatar}
      alt={`Portrait of ${site.name}`}
      width={64}
      height={64}
      priority
      className="size-16 shrink-0 rounded-full object-cover"
    />
  );
}
