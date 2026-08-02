import type { ExperienceEntry } from "@/lib/types";

/**
 * Reverse-chronological. Keep bullets to impact, not responsibilities.
 *
 * NOTE: the "₹42L annually" and "1,200+ users" figures came straight from your
 * design. They read well, but they are client specifics — soften or drop them
 * if they aren't already public.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Nanostuffs",
    dates: "Feb 2025 – Present",
    location: "Pune, India · Hybrid",
    bullets: [
      "Led a team of 5 engineers building an enterprise CRM for a pharma client, replacing a third-party vendor and saving roughly ₹42L annually in licensing.",
      "Engineered secure REST APIs and configurable workflows with role-based access control across 1,200+ users.",
      "Improved API response times by 30% through query optimisation and service restructuring.",
    ],
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "RBAC"],
  },
  {
    role: "Software Engineer",
    company: "3Pillar Global",
    dates: "Jul 2022 – Feb 2025",
    location: "Remote",
    bullets: [
      "Built role-based onboarding and loan-processing workflows for a Loan Origination System in consumer finance.",
      "Cut client-side production defects 15% via code-splitting, memoisation and cross-browser fixes.",
      "Modernised a Talend batch pipeline into an event-driven, serverless architecture for a real-estate listings client, cutting operational overhead ~20%.",
    ],
    tags: ["React", "TypeScript", "Material-UI", "AWS Lambda"],
  },
  {
    role: "Apprentice Engineer",
    company: "3Pillar Global",
    dates: "Dec 2021 – Jun 2022",
    location: "India",
    bullets: [
      "Ramped up on React and Git fundamentals while contributing to production feature work.",
    ],
    tags: ["React", "Git"],
  },
];
