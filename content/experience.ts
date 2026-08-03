import type { ExperienceEntry } from "@/lib/types";

/**
 * Reverse-chronological. Keep bullets to impact, not responsibilities.
 *
 * Naming policy: products are named, end clients are not. "Compass CRM" and
 * "ChatQLM" appear; the companies they were built for are described by sector
 * instead. Percentage metrics are cleared for publication; the client's
 * absolute licensing spend is not, so state the outcome without the rupee
 * figure.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Nanostuffs Technologies",
    dates: "Feb 2025 – Present",
    location: "Pune, India · Hybrid",
    bullets: [
      "Led a team of 5 building Compass CRM, an enterprise platform for a pharmaceutical manufacturer, replacing a third-party vendor across 1,200+ users and retiring its per-seat licensing cost.",
      "Designed its backend on Node.js, TypeScript and PostgreSQL with role-based access control and configurable workflows, cutting API response times 30% through query optimisation and modular service restructuring.",
      "Architected end-to-end Stripe billing for ChatQLM, an AI conversational platform, covering tiered plans, recurring invoicing, feature gating and the full webhook lifecycle that keeps subscription state in sync.",
    ],
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe", "RBAC"],
  },
  {
    role: "Software Engineer",
    company: "3Pillar Global",
    dates: "Jul 2022 – Feb 2025",
    location: "Remote",
    bullets: [
      "Built role-based onboarding and loan-processing modules for a consumer lending platform, trimming bundle size and render cost with memoisation and code-splitting.",
      "Integrated REST APIs and resolved cross-browser inconsistencies, reducing user-reported issues 15%.",
      "Replaced a legacy batch job with an event-driven serverless ingestion pipeline on AWS Lambda, lifting processing speed 25% and cutting operational cost 20%.",
    ],
    tags: ["React", "TypeScript", "Material-UI", "Node.js", "AWS Lambda"],
  },
  {
    role: "Apprentice Engineer",
    company: "3Pillar Global",
    dates: "Dec 2021 – Jun 2022",
    location: "Remote",
    bullets: [
      "Ramped up on React and Git fundamentals while contributing to production feature work.",
    ],
    tags: ["React", "Git"],
  },
];
