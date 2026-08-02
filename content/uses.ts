import type { UsesGroup } from "@/lib/types";

/**
 * `hue` is an OKLCH hue (0–360) used to tint the item's icon badge. This is the
 * one place on the site where colour is allowed to vary — keep it purposeful,
 * and keep hues within a group far enough apart to read as distinct.
 *
 * Order matters: groups render top to bottom exactly as listed.
 */
export const uses: UsesGroup[] = [
  {
    label: "Working with AI",
    items: [
      {
        name: "Claude",
        note: "code review, architecture discussions, writing",
        icon: "spark",
        hue: 45,
      },
      {
        name: "Claude Code",
        note: "terminal-based coding on larger changes",
        icon: "terminal",
        hue: 55,
      },
      {
        // Teal rather than green: keeps this hexagon clearly distinct from
        // Node.js's in the next group, and is closer to OpenAI's brand anyway.
        name: "ChatGPT",
        note: "quick lookups and second opinions",
        icon: "hex",
        hue: 195,
      },
    ],
  },
  {
    label: "Default stack",
    items: [
      {
        name: "Next.js / React",
        note: "frontend, almost every project starts here",
        icon: "brackets",
        hue: 210,
      },
      {
        name: "Node.js / NestJS",
        note: "backend when it needs real structure",
        icon: "hex",
        hue: 145,
      },
      {
        name: "PostgreSQL / MongoDB",
        note: "relational by default, Mongo for quick prototypes",
        icon: "cylinder",
        hue: 250,
      },
      {
        name: "Docker",
        note: "so local matches deploy",
        icon: "stack",
        hue: 220,
      },
    ],
  },
  {
    label: "Hosting & deployment",
    items: [
      {
        name: "AWS",
        note: "EC2, Lambda and S3 when a project needs real infrastructure",
        icon: "cloud",
        hue: 40,
      },
      {
        name: "Vercel",
        note: "default for anything Next.js — push to deploy",
        icon: "triangle",
        hue: 230,
      },
      {
        name: "Heroku",
        note: "older services that are happy where they are",
        icon: "hex",
        hue: 300,
      },
      {
        name: "Railway / DartNode",
        note: "VPS hosting when I want a plain box to myself",
        icon: "server",
        hue: 265,
      },
    ],
  },
  {
    label: "Local setup",
    items: [
      {
        name: "VS Code",
        note: "daily driver, few extensions",
        icon: "brackets",
        hue: 220,
      },
      { name: "Postman", note: "poking at APIs", icon: "arrow", hue: 25 },
      {
        name: "DBeaver",
        note: "database client, whatever the engine",
        icon: "cylinder",
        hue: 190,
      },
    ],
  },
  // {
  //   label: "Everything else",
  //   items: [
  //     { name: "Notion", note: "notes and task tracking", icon: "doc", hue: 0 },
  //     {
  //       name: "Slack",
  //       note: "team communication",
  //       icon: "bubble",
  //       hue: 320,
  //     },
  //     {
  //       name: "MacBook Pro",
  //       note: "primary machine",
  //       icon: "laptop",
  //       hue: 250,
  //     },
  //   ],
  // },
];
