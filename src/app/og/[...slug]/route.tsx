import { ImageResponse } from "next/og";
import { blog } from "@/lib/source";

export const runtime = "nodejs";  

export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string[] }> }
) {
  const origin = new URL(req.url).origin;   
  const logo = `${origin}/logo.svg`;
  const { slug: raw = [] } = await ctx.params;
  const cleaned = raw.map(s => s.replace(/\.png$/i, "")).filter(Boolean);
  const normalized =
    cleaned.length >= 2 && cleaned[0] === cleaned[cleaned.length - 1]
      ? cleaned.slice(0, -1)
      : cleaned;

  const page = blog.getPage(normalized);
  if (!page) return new Response("Not Found", { status: 404 });


  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 1000,
          height: 630,
          background: "#FFFFFF",
          fontFamily: "Inter, sans-serif",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ width: 32, height: 32 }} />
          <span style={{ fontSize: 20, fontWeight: "bold" }}>April Pollo</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", paddingLeft: 200, position: "relative", top: -32 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 96, fontWeight: "bold" }}>{page.data.title}</span>
            <span style={{ fontSize: 32, color: "#666" }}>{page.data.description}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "flex-end" }}>
          <span style={{ fontSize: 10, color: "#666" }}>
            © {new Date().getFullYear()} April Pollo.
          </span>
        </div>
      </div>
    ),
    { width: 1000, height: 630 }
  );
}