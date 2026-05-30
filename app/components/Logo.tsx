"use client";

// CANONICAL LOGO — diamond dimensions and arrangement are FIXED and must never change.
// Only font sizes differ between variants. SVG viewBox is always "0 0 48 22".
// Left diamond:    1,11 16,1  31,11 16,21  — fill #1a6fd4
// Right diamond:  16,11 31,1  46,11 31,21  — fill #3ab0e8
// Intersection:   16,11 23.5,6 31,11 23.5,16 — fill #2dd4bf

const variants = {
  lg: { svgW: 52, svgH: 22, mb: -12, pr: 12, wordmark: "text-4xl", subtitle: 11 },
  sm: { svgW: 38, svgH: 16, mb: -8,  pr: 8,  wordmark: "text-2xl", subtitle: 8 },
};

export default function Logo({
  variant = "lg",
  animate = false,
}: {
  variant?: "lg" | "sm";
  animate?: boolean;
}) {
  const v = variants[variant];

  return (
    <span className="inline-flex flex-col items-center">
      <span
        className={`flex justify-center w-full ${animate ? "logo-diamonds" : ""}`}
        style={{ marginBottom: v.mb, paddingRight: v.pr }}
      >
        <svg width={v.svgW} height={v.svgH} viewBox="0 0 48 22" fill="none">
          <polygon points="1,11 16,1 31,11 16,21"       fill="#1a6fd4" />
          <polygon points="16,11 31,1 46,11 31,21"      fill="#3ab0e8" opacity="0.9" />
          <polygon points="16,11 23.5,6 31,11 23.5,16"  fill="#2dd4bf" />
        </svg>
      </span>
      <span
        className={`${v.wordmark} font-bold tracking-[0.12em] leading-none ${animate ? "logo-wordmark" : ""}`}
      >
        <span className="text-[#2997ff]">ts</span>
        <span className="text-[#5ac8fa]">cc</span>
      </span>
      <span
        className={`tracking-[0.18em] mt-0.5 font-medium ${animate ? "logo-subtitle" : ""}`}
        style={{ fontSize: v.subtitle, color: "#2dd4bf" }}
      >
        Third Sight Consulting Corp.
      </span>
    </span>
  );
}
