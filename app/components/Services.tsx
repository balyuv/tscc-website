import { Database, Cloud, BarChart3, GitBranch, Shield, Zap, Brain, Bot } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Build and deploy custom AI solutions — from predictive models to LLM-powered applications — tailored to your business problems.",
    features: ["LLM integration & fine-tuning", "Predictive analytics", "NLP & document AI", "AI agents & automation"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Design and build scalable ETL/ELT pipelines that move, transform, and load data reliably — the foundation every AI system needs.",
    features: ["Apache Spark & Kafka", "dbt transformations", "Airflow orchestration", "Real-time streaming"],
  },
  {
    icon: Bot,
    title: "Generative AI Solutions",
    description: "Embed generative AI into your products and workflows — RAG systems, copilots, and intelligent automation built for enterprise.",
    features: ["RAG pipelines", "AI copilots & chatbots", "Vector databases", "Prompt engineering"],
  },
  {
    icon: BarChart3,
    title: "AI-Powered Analytics",
    description: "Go beyond dashboards — combine BI platforms with AI to surface anomalies, forecast trends, and automate reporting.",
    features: ["Snowflake & BigQuery", "AI-driven forecasting", "Anomaly detection", "Natural language BI"],
  },
  {
    icon: GitBranch,
    title: "MLOps & DataOps",
    description: "Productionize machine learning with robust CI/CD, model monitoring, and data pipeline governance.",
    features: ["Model versioning & registry", "Feature stores", "Drift detection", "Automated retraining"],
  },
  {
    icon: Cloud,
    title: "Cloud Data Platform",
    description: "Architect and deploy cloud-native data and AI platforms on AWS, GCP, and Azure with infrastructure as code.",
    features: ["AWS / GCP / Azure", "Terraform & IaC", "Kubernetes & Docker", "Cost optimization"],
  },
  {
    icon: Shield,
    title: "AI Governance",
    description: "Establish responsible AI frameworks — model explainability, bias auditing, lineage tracking, and compliance controls.",
    features: ["Model explainability", "Bias & fairness audits", "Data lineage", "GDPR / compliance"],
  },
  {
    icon: Zap,
    title: "Data & AI Strategy",
    description: "Define your AI roadmap, identify high-value use cases, and build the team and infrastructure to execute.",
    features: ["AI readiness assessment", "Use case prioritization", "Tech stack selection", "Team upskilling"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#253457]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#5ac8fa] text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight gradient-text">
            Data & AI, end to end.
          </h2>
          <p className="text-white/50 text-xl max-w-xl mx-auto font-light">
            From raw ingestion to production AI — every layer of your modern data and intelligence stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-hover rounded-2xl bg-white/[0.06] border border-white/10 p-8">
                <div className="inline-flex p-3 rounded-2xl bg-[#2997ff]/[0.12] mb-6">
                  <Icon size={20} className="text-[#5ac8fa]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/40">
                      <span className="w-1 h-1 rounded-full bg-[#5ac8fa] shrink-0" />
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
