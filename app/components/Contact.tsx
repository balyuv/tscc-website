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
    <section id="contact" className="py-32 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-[#2997ff] text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Let&apos;s build<br />something great.
          </h2>
          <p className="text-[#86868b] text-lg leading-relaxed mb-12 font-light">
            Have a data challenge? We&apos;d love to hear about it. Schedule a free 30-minute discovery call.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#2997ff]/10">
                <Mail size={20} className="text-[#2997ff]" />
              </div>
              <span className="text-[#d1d1d6]">hello@thirdsightcc.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#2997ff]/10">
                <MapPin size={20} className="text-[#2997ff]" />
              </div>
              <span className="text-[#d1d1d6]">New York, NY · Remote-first</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-black border border-white/10 p-8">
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
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#d1d1d6] focus:outline-none focus:border-[#2997ff]/60 transition-colors">
                  <option value="">Select a service</option>
                  <option>Data Engineering</option>
                  <option>Cloud Infrastructure</option>
                  <option>Data Analytics</option>
                  <option>DataOps / MLOps</option>
                  <option>Data Strategy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#86868b] mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#48484a] focus:outline-none focus:border-[#2997ff]/60 transition-colors resize-none" placeholder="Tell us about your data challenge..." />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-[#2997ff] hover:bg-[#0077ed] text-white font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
