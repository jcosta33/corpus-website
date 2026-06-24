import { ImageResponse } from "next/og";

// Apple touch icon (home-screen on iOS) — generated at build, transparent and tightly framed.
export const dynamic = "force-static"; // required for output:export (generated at build, not runtime)
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const MARK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">` +
      `<circle cx="16" cy="16" r="15.2" stroke="#d88a24" stroke-width="1.3"/>` +
      `<polygon points="16,2.6 27.6,9.3 27.6,22.7 16,29.4 4.4,22.7 4.4,9.3" stroke="#d88a24" stroke-width="1.35" stroke-linejoin="round"/>` +
      `<path d="M16 16 L16 2.6 M16 16 L27.6 9.3 M16 16 L27.6 22.7 M16 16 L16 29.4 M16 16 L4.4 22.7 M16 16 L4.4 9.3" stroke="#d88a24" stroke-width="0.9" opacity="0.75"/>` +
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
        <img src={MARK} width={180} height={180} alt="" />
      </div>
    ),
    { ...size }
  );
}
