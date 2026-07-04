import { ImageResponse } from "next/og";
import { profile, liveProjects, progressProjects } from "@/lib/projects";

export const alt = `${profile.name} — ${profile.role.es}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens approximated to hex (ImageResponse no soporta oklch).
const bg = "#141a17";
const text = "#f4f7f5";
const muted = "#a3aaa6";
const faint = "#6b736e";
const accent = "#3ee88a";
const progress = "#e8c33e";
const line = "#2a322d";

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
          background: bg,
          backgroundImage: `radial-gradient(900px 500px at 12% 0%, #1c241f 0%, ${bg} 60%)`,
          padding: "80px 90px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: accent,
            }}
          />
          <span
            style={{
              color: faint,
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Portafolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: accent,
              fontSize: 30,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            {profile.role.es}
          </span>
          <span
            style={{
              color: text,
              fontSize: 120,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            {profile.name}
          </span>
          <span
            style={{
              color: muted,
              fontSize: 34,
              marginTop: 28,
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            {profile.intro.es}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 44,
            borderTop: `1px solid ${line}`,
            paddingTop: 28,
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: accent }} />
            <span style={{ color: muted }}>{liveProjects.length} on live</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: progress }} />
            <span style={{ color: muted }}>{progressProjects.length} en proceso</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
