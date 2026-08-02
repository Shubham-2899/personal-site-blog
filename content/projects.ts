import type { Project } from "@/lib/types";

/**
 * Curated by hand — order here is the order on the page.
 *
 * Entries with `href: null` render as "Internal": client work that can't be
 * linked or named. Keep those descriptions generic — no client names, no
 * figures that aren't already public.
 */
export const projects: Project[] = [
  {
    name: "Trendlift",
    description:
      "Trend discovery tool I build and ship features for — live in production.",
    tags: ["Next.js", "TypeScript"],
    href: "https://www.trendlift.app/",
  },
  {
    name: "Raspix Media",
    description: "Marketing website built for a media production studio.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://raspixmedia.com/home",
  },
  {
    name: "Compass CRM",
    description:
      "Enterprise CRM replacing a third-party vendor — role-based access, configurable workflows and a full audit trail.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    href: null,
  },
  {
    name: "Loan Origination System",
    description:
      "Role-based onboarding and loan processing workflows for a consumer lending platform.",
    tags: ["React", "TypeScript", "Material-UI"],
    href: null,
  },
  {
    name: "Serverless Data Pipeline",
    description:
      "Event-driven replacement for a scheduled batch job, moving CRM records into object storage in seconds rather than hours.",
    tags: ["AWS Lambda", "API Gateway", "S3"],
    href: null,
  },
];
