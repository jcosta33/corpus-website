import { ImageResponse } from "next/og";

// Generated at build (works under output:export) — no logo asset needed. The six-node loop mark
// sits on a transparent canvas with minimal padding.
export const dynamic = "force-static";

const MARK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">` +
      `<circle cx="16" cy="16" r="14.8" stroke="#d88a24" stroke-width="1.6"/>` +
      `<polygon points="16,4.5 25.96,10.25 25.96,21.75 16,27.5 6.04,21.75 6.04,10.25" stroke="#d88a24" stroke-width="1.4" stroke-linejoin="round"/>` +
      `<path d="M16 16 L16 4.5 M16 16 L25.96 10.25 M16 16 L25.96 21.75 M16 16 L16 27.5 M16 16 L6.04 21.75 M16 16 L6.04 10.25" stroke="#d88a24" stroke-width="0.9" opacity="0.75"/>` +
      `<circle cx="16" cy="16" r="2.2" fill="#f0b85c"/>` +
      `</svg>`
  );

export function generateImageMetadata() {
  return [
    { id: "icon-192", size: { width: 192, height: 192 }, contentType: "image/png" },
    { id: "icon-512", size: { width: 512, height: 512 }, contentType: "image/png" },
  ];
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const resolvedId = await id;
  const dim = resolvedId === "icon-192" ? 192 : 512;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img src={MARK} width={dim} height={dim} alt="" />
      </div>
    ),
    { width: dim, height: dim }
  );
}
