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
    <section id="contact" className="py-28 px-6 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let&apos;s Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Have a data challenge? We&apos;d love to hear about it. Reach out and we&apos;ll schedule a free 30-minute discovery call.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 rounded-xl bg-sky-400/10 border border-sky-400/20">
                <Mail size={20} className="text-sky-400" />
              </div>
              <span>hello@thirdsightcc.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 rounded-xl bg-violet-400/10 border border-violet-400/20">
                <MapPin size={20} className="text-violet-400" />
              </div>
              <span>Montgomery, NJ · Remote-first</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-3xl bg-[#0d1529] border border-slate-800 p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-sky-400/10 flex items-center justify-center mb-4">
                <Send size={28} className="text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">First Name</label>
                  <input required className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Last Name</label>
                  <input required className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <input required type="email" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">What are you working on?</label>
                <select className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-sky-500 transition-colors">
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
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none" placeholder="Tell us about your data challenge..." />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-400 hover:to-violet-400 text-white font-semibold text-lg transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
