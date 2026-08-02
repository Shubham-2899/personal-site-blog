import { ExternalLink } from "@/components/ui/ExternalLink";
import { site } from "@/content/site";

/**
 * Two direct paragraphs — deliberately not a hero. No tagline, no CTA buttons.
 */
export function Intro() {
  return (
    <section>
      <p className="mb-[18px] text-base leading-[1.7]">
        I&rsquo;m a full stack engineer working mostly in the JavaScript and
        TypeScript ecosystem &mdash; React and Next.js on the front end, Node.js
        and NestJS on the back. Lately I&rsquo;ve been spending most of my time
        on RBAC-heavy enterprise tools, CRM platforms, and moving legacy infra
        onto event-driven, serverless architectures.
      </p>
      <p className="mb-[18px] text-base leading-[1.7]">
        Based in {site.location}. I write here occasionally about the systems I
        build and the problems I run into. Reach me at{" "}
        <ExternalLink href={`mailto:${site.email}`}>{site.email}</ExternalLink>,
        or find me on{" "}
        <ExternalLink href={site.github}>GitHub</ExternalLink> and{" "}
        <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>.
      </p>
    </section>
  );
}
