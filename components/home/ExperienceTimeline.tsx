import { FadeIn } from "@/components/ui/FadeIn";
import { Pill, PillGroup } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ExperienceEntry } from "@/lib/types";

/**
 * Clean timeline — no rails, no dots, no icons. Skills live here as inline
 * pills rather than in a separate grid, so they stay attached to shipped work.
 */
export function ExperienceTimeline({
  experience,
}: {
  experience: ExperienceEntry[];
}) {
  return (
    <section className="mt-11">
      <SectionHeading>Experience</SectionHeading>

      {experience.map((entry, index) => (
        <FadeIn
          key={`${entry.company}-${entry.dates}`}
          index={index}
          className="mb-[26px]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-[15px] font-semibold text-fg">
              {entry.role} · {entry.company}
            </h3>
            <span className="font-mono text-xs whitespace-nowrap text-muted">
              {entry.dates}
            </span>
          </div>

          <p className="mt-0.5 mb-2.5 font-mono text-[11px] text-muted">
            {entry.location}
          </p>

          <ul className="my-2 list-disc pl-[18px]">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="mb-1 text-sm leading-[1.6]">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-1">
            <PillGroup>
              {entry.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </PillGroup>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
