import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MHR Solution - Website Development Company Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030712 0%, #1e3a5f 50%, #030712 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "white",
            }}
          >
            M
          </div>
          <span style={{ fontSize: 48, fontWeight: 700, color: "white" }}>
            MHR <span style={{ color: "#60a5fa" }}>Solution</span>
          </span>
        </div>
        <p
          style={{
            fontSize: 28,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Professional Website Development Company in Pakistan
        </p>
        <p style={{ fontSize: 20, color: "#60a5fa", marginTop: 16 }}>
          React.js · Next.js · Ecommerce · Custom Software
        </p>
      </div>
    ),
    { ...size }
  );
}
