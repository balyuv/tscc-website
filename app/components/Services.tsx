import { Database, Cloud, BarChart3, GitBranch, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Design and build scalable ETL/ELT pipelines that move, transform, and load data reliably at any scale.",
    features: ["Apache Spark & Kafka", "dbt transformations", "Airflow orchestration", "Real-time streaming"],
    color: "sky",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Architect and deploy cloud-native data platforms on AWS, GCP, and Azure with infrastructure as code.",
    features: ["AWS / GCP / Azure", "Terraform & IaC", "Kubernetes & Docker", "Cost optimization"],
    color: "violet",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with modern BI platforms and self-serve analytics.",
    features: ["Snowflake & BigQuery", "Power BI / Looker", "Data modeling", "KPI dashboards"],
    color: "purple",
  },
  {
    icon: GitBranch,
    title: "DataOps & MLOps",
    description: "Implement CI/CD for data pipelines and machine learning workflows to ship faster with confidence.",
    features: ["Pipeline testing", "Data quality checks", "Model deployment", "Monitoring & alerts"],
    color: "sky",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description: "Establish data quality, lineage, and governance frameworks to ensure compliance and trust in your data.",
    features: ["Data cataloging", "Lineage tracking", "Access controls", "GDPR / compliance"],
    color: "violet",
  },
  {
    icon: Zap,
    title: "Data Strategy",
    description: "Define your data roadmap, architecture decisions, and team structure to unlock long-term data value.",
    features: ["Architecture review", "Tech stack selection", "Team upskilling", "Roadmap planning"],
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  sky: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  violet: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

const dotMap: Record<string, string> = {
  sky: "bg-sky-400",
  violet: "bg-violet-400",
  purple: "bg-purple-400",
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            End-to-end data solutions — from raw ingestion to business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            const cls = colorMap[s.color];
            const dot = dotMap[s.color];
            return (
              <div key={s.title} className="card-hover rounded-2xl bg-[#0d1529] border border-slate-800 p-8">
                <div className={`inline-flex p-3 rounded-xl border ${cls} mb-5`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
