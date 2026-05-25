"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
          Third Sight Consulting Corporation · Montgomery, NJ
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Turn Your Data Into{" "}
          <span className="gradient-text">Competitive Advantage</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build robust data pipelines, scalable cloud infrastructure, and powerful analytics platforms that drive real business outcomes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-400 hover:to-violet-400 text-white font-semibold text-lg transition-all shadow-lg shadow-sky-500/25">
            Start a Project <ArrowRight size={20} />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-700 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 font-semibold text-lg transition-all">
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "99.9%", label: "Pipeline Uptime" },
            { value: "10x", label: "Faster Insights" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-sky-400 transition-colors animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
