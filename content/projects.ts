import type { Project } from "@/lib/types";

/**
 * Curated by hand — order here is the order on the page. Live work first, then
 * client work in reverse-chronological order.
 *
 * Entries with `href: null` render as "Internal". Products are named, end
 * clients are not: describe who the work was for by sector, never by company.
 *
 * ChatQLM stays `href: null` deliberately. It has a public marketing site, but
 * it is client work — do not link it.
 */
export const projects: Project[] = [
  {
    name: "Trendlift",
    description:
      "Trend discovery for creators, founders and marketers. It watches curated niche sources, clusters what's accelerating and ranks topics by measured velocity rather than relevance guesswork, then hands back angles worth writing. I build and ship features across the product.",
    tags: ["Next.js", "TypeScript"],
    href: "https://www.trendlift.app/",
  },
  // {
  //   name: "Raspix Media",
  //   description: "Marketing website built for a media production studio.",
  //   tags: ["Next.js", "Tailwind CSS"],
  //   href: "https://raspixmedia.com/home",
  // },
  {
    name: "Compass CRM",
    description:
      "Field-force CRM for a pharma client. Medical representatives use it to plan visits to doctors, pharmacies and distributors, log their daily calls, and run campaigns and market surveys. It replaced a third-party vendor across 1,200+ users, with role-based access and configurable workflows.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    href: null,
  },
  {
    name: "ChatQLM",
    description:
      "Consumer app that takes optimisation problems in plain English (portfolio allocation, supply chain, scheduling) and routes them across AI, GPU and quantum hardware to answer what a general-purpose LLM cannot. I architected its subscription system end to end: tiered plans, recurring billing, feature gating and the full Stripe webhook lifecycle.",
    tags: ["Node.js", "TypeScript", "Stripe", "REST APIs"],
    href: null,
  },
  {
    name: "Loan Origination System",
    description:
      "Role-based customer onboarding and loan processing for a consumer lending platform.",
    tags: ["React", "TypeScript", "Material-UI"],
    href: null,
  },
  {
    name: "Salesforce Ingestion Pipeline",
    description:
      "Serverless ingestion pipeline for Salesforce data, replacing a scheduled legacy batch job with an event-driven design on AWS.",
    tags: ["Node.js", "TypeScript", "AWS Lambda"],
    href: null,
  },
];
