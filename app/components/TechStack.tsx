const techs = [
  { category: "AI & LLMs", items: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "LlamaIndex", "Hugging Face"] },
  { category: "ML & MLOps", items: ["PyTorch", "scikit-learn", "MLflow", "SageMaker", "Vertex AI"] },
  { category: "Vector & RAG", items: ["Pinecone", "Weaviate", "pgvector", "FAISS", "Chroma"] },
  { category: "Data Processing", items: ["Apache Spark", "Apache Kafka", "Flink", "dbt", "Pandas"] },
  { category: "Cloud Platforms", items: ["AWS", "Google Cloud", "Azure", "Snowflake", "Databricks"] },
  { category: "Orchestration", items: ["Apache Airflow", "Prefect", "Dagster", "Luigi", "Step Functions"] },
  { category: "Databases", items: ["PostgreSQL", "BigQuery", "Redshift", "DynamoDB", "Cassandra"] },
  { category: "Visualization", items: ["Looker", "Power BI", "Tableau", "Grafana", "Metabase"] },
  { category: "Infrastructure", items: ["Terraform", "Kubernetes", "Docker", "Helm", "Pulumi"] },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32 px-6 bg-[#253457]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#5ac8fa] text-sm font-semibold uppercase tracking-widest mb-4">Tech Stack</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight gradient-text">
            The modern data & AI stack.
          </h2>
          <p className="text-white/50 text-xl max-w-xl mx-auto font-light">
            From LLMs and vector databases to pipelines and cloud — battle-tested tools, proven at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {techs.map((t) => (
            <div key={t.category} className="card-hover rounded-2xl bg-white/[0.06] border border-white/10 p-7">
              <h3 className="text-[#5ac8fa] font-semibold text-[11px] uppercase tracking-widest mb-5">{t.category}</h3>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-lg bg-white/[0.06] text-white/70 text-sm font-medium border border-white/10 hover:border-[#5ac8fa]/50 hover:bg-[#5ac8fa]/10 hover:text-white transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
