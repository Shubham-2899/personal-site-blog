import type { Certification } from "@/lib/types";

/**
 * Newest first; anything in progress goes above the completed ones.
 *
 * `initials` names the org where the org is the credential's value (AWS, Meta),
 * and the subject otherwise. Add `href` only for a real verification page — the
 * issuer's, not a link to an image of the certificate.
 */
export const certifications: Certification[] = [
  {
    initials: "CL",
    name: "Claude 101",
    org: "Anthropic Education",
    href: "https://verify.skilljar.com/c/brdzggmqu852",
  },
  {
    initials: "RE",
    name: "React – The Complete Guide",
    org: "Udemy",
    href: "https://www.udemy.com/certificate/UC-428f17f2-43fa-4b11-9508-5c7feaf17dac/",
  },
  {
    initials: "META",
    name: "Front-End Developer Certificate",
    org: "Meta",
  },
  {
    initials: "JS",
    name: "JavaScript Algorithms & Data Structures",
    org: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/shubhamlatake/javascript-algorithms-and-data-structures",
  },
];
