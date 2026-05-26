"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(41,151,255,0.08),transparent)]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#6e6e73] text-sm font-medium mb-10">
          <span className="w-1.5 h-1.5 bg-[#2997ff] rounded-full" />
          Third Sight Consulting Corporation · New York, NY
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white">
          Turn data into<br />
          <span className="gradient-text">competitive edge.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Scalable data pipelines, cloud infrastructure, and analytics platforms built for real business impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2997ff] hover:bg-[#0077ed] text-white font-semibold text-lg transition-colors">
            Start a Project <ArrowRight size={18} />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#2997ff] hover:text-white border border-[#2997ff]/40 hover:border-[#2997ff] font-semibold text-lg transition-colors">
            Our Services
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-24 max-w-2xl mx-auto border-t border-white/10 pt-12">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "99.9%", label: "Pipeline Uptime" },
            { value: "10x", label: "Faster Insights" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-[#6e6e73] text-sm">{s.label}</div>
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
