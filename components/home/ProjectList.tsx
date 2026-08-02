import { FadeIn } from "@/components/ui/FadeIn";
import { Pill, PillGroup } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/types";

/**
 * Changelog-style list rather than a card grid: name, right-aligned status,
 * one line of description, tech pills.
 */
export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="mt-11">
      <SectionHeading>Projects</SectionHeading>

      {projects.map((project, index) => (
        <FadeIn key={project.name} index={index} className="mb-[26px]">
          <div className="flex items-baseline justify-between gap-3">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-border text-[15px] font-semibold text-fg transition-colors hover:border-accent"
              >
                {project.name}
              </a>
            ) : (
              <span className="text-[15px] font-semibold text-fg">
                {project.name}
              </span>
            )}

            <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted">
              {project.href ? "Live" : "Internal"}
            </span>
          </div>

          <p className="mt-1.5 text-sm leading-[1.6] text-muted">
            {project.description}
          </p>

          <div className="mt-2">
            <PillGroup>
              {project.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </PillGroup>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
