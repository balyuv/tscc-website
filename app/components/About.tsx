import { CheckCircle } from "lucide-react";

const values = [
  "Engineering-first mindset — we build AI that lasts in production",
  "Deep expertise in cloud-native data platforms and LLM systems",
  "Transparent delivery with clear timelines and milestones",
  "We upskill your team so AI becomes a core competency, not a black box",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#1e2a4a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Years Experience", value: "8+" },
            { label: "Enterprise Clients", value: "30+" },
            { label: "AI Models in Production", value: "30+" },
            { label: "Pipelines Delivered", value: "200+" },
          ].map((s) => (
            <div key={s.label} className="relative rounded-3xl bg-white/[0.04] border border-white/10 p-8 text-center hover:border-white/20 transition-all hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#2997ff]/50 to-transparent" />
              <div className="text-4xl font-bold text-white mb-2 mt-1">{s.value}</div>
              <div className="text-[#6e6e73] text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-[#2997ff] text-sm font-semibold uppercase tracking-widest mb-4">About TSCC</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight gradient-text">
            Built by engineers.<br />Powered by AI.
          </h2>
          <p className="text-[#86868b] text-lg leading-relaxed mb-6 font-light">
            Third Sight Consulting is a boutique data and AI firm built by engineers who have worked at scale. We partner with startups and enterprises to design data platforms and AI systems that are reliable, cost-efficient, and built for growth.
          </p>
          <p className="text-[#86868b] leading-relaxed mb-10 font-light">
            From Snowflake migrations and real-time streaming to LLM-powered applications and predictive models — we bring the expertise to get your data and AI stack right the first time.
          </p>
          <ul className="space-y-4">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 text-[#d1d1d6]">
                <CheckCircle size={18} className="text-[#2997ff] mt-0.5 shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
