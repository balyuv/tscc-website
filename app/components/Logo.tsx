export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#818cf8" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      {/* Hexagon */}
      <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
      {/* Rays */}
      <line x1="20" y1="12" x2="20" y2="15" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="25" x2="20" y2="28" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="12" y1="20" x2="15" y2="20" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="25" y1="20" x2="28" y2="20" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="14.2" y1="14.2" x2="16.3" y2="16.3" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="23.7" y1="23.7" x2="25.8" y2="25.8" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="25.8" y1="14.2" x2="23.7" y2="16.3" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="16.3" y1="23.7" x2="14.2" y2="25.8" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Eye */}
      <ellipse cx="20" cy="20" rx="5" ry="3.5" stroke="url(#logoGrad)" strokeWidth="1.2" fill="none" />
      {/* Pupil */}
      <circle cx="20" cy="20" r="1.8" fill="url(#logoGrad)" />
    </svg>
  );
}
