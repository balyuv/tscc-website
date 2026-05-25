export default function Preview() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] flex flex-col items-center justify-center gap-16 py-20 px-6">
      <h1 className="text-3xl font-extrabold text-white">Logo Options</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

        {/* Option 1: Angular Eye */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#0d1529] rounded-2xl border border-slate-800 p-8">
            <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38bdf8" />
                  <stop offset="0.5" stopColor="#818cf8" />
                  <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="url(#g1)" strokeWidth="1.5" fill="none" />
              {/* Angular / cat eye */}
              <path d="M8 20 Q14 13 20 13 Q26 13 32 20 Q26 27 20 27 Q14 27 8 20Z" stroke="url(#g1)" strokeWidth="1.5" fill="none" />
              <circle cx="20" cy="20" r="3" fill="url(#g1)" />
            </svg>
          </div>
          <span className="text-slate-300 font-semibold">1 — Angular Eye</span>
          <span className="text-slate-500 text-xs text-center">Sharp pointed corners<br/>cat-eye / precision feel</span>
        </div>

        {/* Option 2: Iris Rings */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#0d1529] rounded-2xl border border-slate-800 p-8">
            <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38bdf8" />
                  <stop offset="0.5" stopColor="#818cf8" />
                  <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="url(#g2)" strokeWidth="1.5" fill="none" />
              {/* Outer eye shape */}
              <ellipse cx="20" cy="20" rx="9" ry="6" stroke="url(#g2)" strokeWidth="1.2" fill="none" />
              {/* Iris ring 1 */}
              <circle cx="20" cy="20" r="4.5" stroke="url(#g2)" strokeWidth="0.8" fill="none" opacity="0.7" />
              {/* Iris ring 2 */}
              <circle cx="20" cy="20" r="2.5" stroke="url(#g2)" strokeWidth="0.8" fill="none" opacity="0.5" />
              {/* Pupil */}
              <circle cx="20" cy="20" r="1.2" fill="url(#g2)" />
            </svg>
          </div>
          <span className="text-slate-300 font-semibold">2 — Iris Rings</span>
          <span className="text-slate-500 text-xs text-center">Concentric rings<br/>depth / data layers</span>
        </div>

        {/* Option 3: Scan Line Eye */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#0d1529] rounded-2xl border border-slate-800 p-8">
            <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38bdf8" />
                  <stop offset="0.5" stopColor="#818cf8" />
                  <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="url(#g3)" strokeWidth="1.5" fill="none" />
              {/* Eye outline */}
              <ellipse cx="20" cy="20" rx="9" ry="6" stroke="url(#g3)" strokeWidth="1.2" fill="none" />
              {/* Scan line */}
              <line x1="11" y1="20" x2="29" y2="20" stroke="url(#g3)" strokeWidth="0.8" opacity="0.5" />
              {/* Pupil */}
              <circle cx="20" cy="20" r="2.5" fill="url(#g3)" />
              {/* Tick marks on scan line */}
              <line x1="14" y1="18.5" x2="14" y2="21.5" stroke="url(#g3)" strokeWidth="0.7" opacity="0.6" />
              <line x1="20" y1="17.5" x2="20" y2="22.5" stroke="url(#g3)" strokeWidth="0.7" opacity="0.6" />
              <line x1="26" y1="18.5" x2="26" y2="21.5" stroke="url(#g3)" strokeWidth="0.7" opacity="0.6" />
            </svg>
          </div>
          <span className="text-slate-300 font-semibold">3 — Scan Line</span>
          <span className="text-slate-500 text-xs text-center">Data scan beam<br/>analytics / lidar feel</span>
        </div>

        {/* Option 4: Starburst Eye */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#0d1529] rounded-2xl border border-slate-800 p-8">
            <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g4" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38bdf8" />
                  <stop offset="0.5" stopColor="#818cf8" />
                  <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" stroke="url(#g4)" strokeWidth="1.5" fill="none" />
              {/* Rays */}
              <line x1="20" y1="12" x2="20" y2="15" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="20" y1="25" x2="20" y2="28" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="12" y1="20" x2="15" y2="20" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="25" y1="20" x2="28" y2="20" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="14.2" y1="14.2" x2="16.3" y2="16.3" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="23.7" y1="23.7" x2="25.8" y2="25.8" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="25.8" y1="14.2" x2="23.7" y2="16.3" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="16.3" y1="23.7" x2="14.2" y2="25.8" stroke="url(#g4)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              {/* Eye */}
              <ellipse cx="20" cy="20" rx="5" ry="3.5" stroke="url(#g4)" strokeWidth="1.2" fill="none" />
              {/* Pupil */}
              <circle cx="20" cy="20" r="1.8" fill="url(#g4)" />
            </svg>
          </div>
          <span className="text-slate-300 font-semibold">4 — Starburst</span>
          <span className="text-slate-500 text-xs text-center">Rays of insight<br/>energetic / visionary</span>
        </div>

      </div>

      <p className="text-slate-600 text-sm">Tell Claude which number you prefer</p>
    </div>
  );
}
