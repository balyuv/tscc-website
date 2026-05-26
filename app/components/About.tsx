import { CheckCircle } from "lucide-react";

const values = [
  "Engineering-first mindset — we build things that last",
  "Deep cloud-native expertise across AWS, GCP & Azure",
  "Transparent delivery with clear timelines and milestones",
  "We upskill your team, not create dependency on us",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Years Experience", value: "8+" },
            { label: "Enterprise Clients", value: "30+" },
            { label: "TB of Data Processed", value: "500+" },
            { label: "Pipelines in Production", value: "200+" },
          ].map((s) => (
            <div key={s.label} className="rounded-3xl bg-black border border-white/10 p-8 text-center hover:border-white/20 transition-colors">
              <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-[#6e6e73] text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-[#2997ff] text-sm font-semibold uppercase tracking-widest mb-4">About TSCC</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Built by engineers.<br />Trusted by enterprises.
          </h2>
          <p className="text-[#86868b] text-lg leading-relaxed mb-6 font-light">
            Third Sight Consulting Corporation is a boutique data engineering firm based in New York, NY — built by engineers who have worked at scale. We partner with startups and enterprises to design data platforms that are reliable, cost-efficient, and built for growth.
          </p>
          <p className="text-[#86868b] leading-relaxed mb-10 font-light">
            From Snowflake migrations to real-time streaming architectures, we bring the expertise to get your data infrastructure right the first time.
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
