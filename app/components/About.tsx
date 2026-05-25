import { CheckCircle } from "lucide-react";

const values = [
  "Engineering-first mindset — we build things that last",
  "Deep cloud-native expertise across AWS, GCP & Azure",
  "Transparent delivery with clear timelines and milestones",
  "We upskill your team, not create dependency on us",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: visual */}
        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 border border-slate-800 p-10">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years Experience", value: "8+" },
                { label: "Enterprise Clients", value: "30+" },
                { label: "TB of Data Processed", value: "500+" },
                { label: "Pipelines in Prod", value: "200+" },
              ].map((s) => (
                <div key={s.label} className="bg-[#0d1529] rounded-2xl p-6 text-center border border-slate-800">
                  <div className="text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-500/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
        </div>

        {/* Right: copy */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="gradient-text">TSCC</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Third Sight Consulting Corporation (TSCC) is a boutique data engineering firm based in Montgomery, NJ — built by engineers who have worked at scale. We partner with startups and enterprises to design data platforms that are reliable, cost-efficient, and built for growth.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            From Snowflake migrations to real-time streaming architectures, we bring the expertise to get your data infrastructure right the first time — no rewrites, no tech debt.
          </p>
          <ul className="space-y-3">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 text-slate-300">
                <CheckCircle size={18} className="text-sky-400 mt-0.5 shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
