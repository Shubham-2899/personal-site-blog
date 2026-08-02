import type { Metadata } from "next";

import { UsesGroup } from "@/components/uses/UsesGroup";
import { uses } from "@/content/uses";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools, languages and hardware I actually reach for day to day.",
  alternates: { canonical: "/uses" },
};

export default function UsesPage() {
  return (
    <>
      <h1 className="mb-2 text-[22px] font-semibold text-fg">Uses</h1>
      <p className="text-base leading-[1.7]">
        No hot takes here. Just what&rsquo;s actually on my machine and why,
        kept current as it changes.
      </p>

      {uses.map((group) => (
        <UsesGroup key={group.label} group={group} />
      ))}
    </>
  );
}
