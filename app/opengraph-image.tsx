import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #E30613 0%, #B0040F 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85, letterSpacing: 4, textTransform: "uppercase" }}>
          Centro Auditivo · Tijuca / RJ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, lineHeight: 1.05, fontWeight: 600 }}>
            Prazer em <span style={{ fontStyle: "italic" }}>Ouvir</span>
          </div>
          <div style={{ fontSize: 36, opacity: 0.9, maxWidth: 900 }}>
            {SITE.tagline}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, opacity: 0.85 }}>
          <span>prazeremouvir.com.br</span>
          <span>WhatsApp {SITE.phones[0].number}</span>
        </div>
      </div>
    ),
    size,
  );
}
