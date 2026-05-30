import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <polygon points="2,24 17,8 32,24 17,40" fill="#1a6fd4" />
          <polygon points="16,24 31,8 46,24 31,40" fill="#3ab0e8" opacity="0.9" />
          <polygon points="16,24 24,16 32,24 24,32" fill="#2dd4bf" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
