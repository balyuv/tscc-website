"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "AI Models Deployed" },
  { value: "10x", label: "Faster Insights" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1e2a4a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(41,151,255,0.1),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-12">
        <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8 gradient-text">
          Data &amp; AI that<br />
          drives decisions.
        </h1>

        <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          We build the data foundations and AI solutions that turn raw information into strategic advantage — from pipelines to production models.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-opacity hover:opacity-80" style={{background: 'linear-gradient(135deg, #1a6fd4 0%, #3ab0e8 55%, #2dd4bf 100%)'}}>

            Start a Project <ArrowRight size={18} />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#2997ff] hover:text-white border border-[#2997ff]/40 hover:border-[#2997ff] font-semibold text-lg transition-colors">
            Our Services
          </a>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/10 mt-24 max-w-xl mx-auto border-t border-white/10 pt-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-6">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-[#6e6e73] text-xs sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6e6e73] hover:text-white transition-colors animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
