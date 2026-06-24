import { ImageResponse } from "next/og";

// Apple touch icon (home-screen on iOS) — generated at build, transparent and tightly framed.
export const dynamic = "force-static"; // required for output:export (generated at build, not runtime)
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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

export default function AppleIcon() {
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
        <img src={MARK} width={172} height={172} alt="" />
      </div>
    ),
    { ...size }
  );
}
