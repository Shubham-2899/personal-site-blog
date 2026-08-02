import type { UsesGroup } from "@/lib/types";

/**
 * `hue` is an OKLCH hue (0–360) used to tint the item's icon badge. This is the
 * one place on the site where colour is allowed to vary — keep it purposeful.
 */
export const uses: UsesGroup[] = [
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
        name: "AWS Lambda / S3",
        note: "serverless over servers where I can help it",
        icon: "cloud",
        hue: 40,
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
    label: "Local setup",
    items: [
      {
        name: "VS Code",
        note: "daily driver, few extensions",
        icon: "brackets",
        hue: 220,
      },
      { name: "iTerm2 + zsh", note: "terminal", icon: "terminal", hue: 20 },
      { name: "Postman", note: "poking at APIs", icon: "arrow", hue: 25 },
      {
        name: "TablePlus",
        note: "when I need eyes on the database",
        icon: "cylinder",
        hue: 265,
      },
    ],
  },
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
    ],
  },
  {
    label: "Everything else",
    items: [
      { name: "Notion", note: "notes and task tracking", icon: "doc", hue: 0 },
      {
        name: "Slack",
        note: "team communication",
        icon: "bubble",
        hue: 320,
      },
      {
        name: "MacBook Pro",
        note: "primary machine",
        icon: "laptop",
        hue: 250,
      },
    ],
  },
];
