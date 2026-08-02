import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Satori can't parse oklch, so these are the dark palette converted to sRGB
 * hex. Keep them in step with the `.dark` block in globals.css.
 */
const COLORS = {
  bg: "#100d08",
  fg: "#e7e4e0",
  muted: "#918b84",
  accent: "#de8e69",
  border: "#2c2822",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: COLORS.bg,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              color: COLORS.fg,
              letterSpacing: "-0.02em",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 32, color: COLORS.accent, marginTop: 12 }}>
            {site.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 26, color: COLORS.muted, lineHeight: 1.5 }}>
            React · Next.js · Node.js · TypeScript · AWS
          </div>
          {/* Single text child — satori requires explicit display on any
              element with more than one child. */}
          <div style={{ fontSize: 22, color: COLORS.muted, marginTop: 14 }}>
            {`${site.url.replace(/^https?:\/\//, "")} · ${site.location}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
