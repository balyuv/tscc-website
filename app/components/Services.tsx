import { Database, Cloud, BarChart3, GitBranch, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Design and build scalable ETL/ELT pipelines that move, transform, and load data reliably at any scale.",
    features: ["Apache Spark & Kafka", "dbt transformations", "Airflow orchestration", "Real-time streaming"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Architect and deploy cloud-native data platforms on AWS, GCP, and Azure with infrastructure as code.",
    features: ["AWS / GCP / Azure", "Terraform & IaC", "Kubernetes & Docker", "Cost optimization"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with modern BI platforms and self-serve analytics.",
    features: ["Snowflake & BigQuery", "Power BI / Looker", "Data modeling", "KPI dashboards"],
  },
  {
    icon: GitBranch,
    title: "DataOps & MLOps",
    description: "Implement CI/CD for data pipelines and machine learning workflows to ship faster with confidence.",
    features: ["Pipeline testing", "Data quality checks", "Model deployment", "Monitoring & alerts"],
  },
  {
    icon: Shield,
    title: "Data Governance",
    description: "Establish data quality, lineage, and governance frameworks to ensure compliance and trust in your data.",
    features: ["Data cataloging", "Lineage tracking", "Access controls", "GDPR / compliance"],
  },
  {
    icon: Zap,
    title: "Data Strategy",
    description: "Define your data roadmap, architecture decisions, and team structure to unlock long-term data value.",
    features: ["Architecture review", "Tech stack selection", "Team upskilling", "Roadmap planning"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#2997ff] text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            End-to-end data solutions.
          </h2>
          <p className="text-[#86868b] text-xl max-w-xl mx-auto font-light">
            From raw ingestion to business intelligence — every layer of your data stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-hover rounded-2xl bg-[#111111] border border-white/10 p-8">
                <div className="inline-flex p-2.5 rounded-xl bg-[#2997ff]/10 mb-6">
                  <Icon size={22} className="text-[#2997ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-[#86868b] text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#6e6e73]">
                      <span className="w-1 h-1 rounded-full bg-[#2997ff] shrink-0" />
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
