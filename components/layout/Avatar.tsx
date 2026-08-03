import Image from "next/image";

import { site } from "@/content/site";
import avatarImage from "@/public/avatar.png";

/**
 * Statically imported rather than referenced as "/avatar.png".
 *
 * A string src goes through the optimizer at a stable URL (/_next/image?url=…),
 * so replacing the photo leaves the old bytes cached under the same URL — on
 * disk in .next/cache/images and again in the dev server's memory. A static
 * import emits a content-hashed URL instead, so a new photo is always a new URL
 * and can never be served stale. It also supplies the intrinsic dimensions.
 */
export function Avatar() {
  return (
    <Image
      src={avatarImage}
      alt={`Portrait of ${site.name}`}
      // Render box, not the source size — keeps the request at 48/96px.
      width={40}
      height={40}
      priority
      // object-contain so the whole photo stays visible, and no radius: the
      // source has no background, so there is no edge to round.
      className="size-10 shrink-0 object-contain"
    />
  );
}
