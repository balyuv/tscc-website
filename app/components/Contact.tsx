"use client";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#1e2a4a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-[#2997ff] text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight gradient-text">
            Let&apos;s build<br />something great.
          </h2>
          <p className="text-[#86868b] text-lg leading-relaxed mb-12 font-light">
            Have a data or AI challenge? We&apos;d love to hear about it. Schedule a free 30-minute discovery call.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#2997ff]/10">
                <Mail size={20} className="text-[#2997ff]" />
              </div>
              <span className="text-[#d1d1d6]">hello@thirdsightconsulting.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#2997ff]/10">
                <MapPin size={20} className="text-[#2997ff]" />
              </div>
              <span className="text-[#d1d1d6]">New York, NY · Remote-first</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#2997ff]/10 flex items-center justify-center mb-4">
                <Send size={28} className="text-[#2997ff]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-[#86868b]">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-[#86868b] mb-2">First Name</label>
                  <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#48484a] focus:outline-none focus:border-[#2997ff]/60 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm text-[#86868b] mb-2">Last Name</label>
                  <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#48484a] focus:outline-none focus:border-[#2997ff]/60 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#86868b] mb-2">Email</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#48484a] focus:outline-none focus:border-[#2997ff]/60 transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm text-[#86868b] mb-2">What are you working on?</label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#d1d1d6] focus:outline-none focus:border-[#2997ff]/60 transition-colors cursor-pointer pr-10"
                    style={{ WebkitAppearance: "none" }}
                  >
                    <option value="" style={{ backgroundColor: "#111" }}>Select a service</option>
                    <option style={{ backgroundColor: "#111" }}>AI & Machine Learning</option>
                    <option style={{ backgroundColor: "#111" }}>Generative AI / LLMs</option>
                    <option style={{ backgroundColor: "#111" }}>Data Engineering</option>
                    <option style={{ backgroundColor: "#111" }}>Cloud Infrastructure</option>
                    <option style={{ backgroundColor: "#111" }}>AI-Powered Analytics</option>
                    <option style={{ backgroundColor: "#111" }}>MLOps / DataOps</option>
                    <option style={{ backgroundColor: "#111" }}>Data & AI Strategy</option>
                    <option style={{ backgroundColor: "#111" }}>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6e6e73]">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#86868b] mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#48484a] focus:outline-none focus:border-[#2997ff]/60 transition-colors resize-none" placeholder="Tell us about your data challenge..." />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl text-white font-semibold text-lg transition-opacity hover:opacity-80 flex items-center justify-center gap-2" style={{background: 'linear-gradient(135deg, #1a6fd4 0%, #3ab0e8 55%, #2dd4bf 100%)'}}>

                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
