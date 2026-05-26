const techs = [
  { category: "Data Processing", items: ["Apache Spark", "Apache Kafka", "Flink", "dbt", "Pandas"] },
  { category: "Cloud Platforms", items: ["AWS", "Google Cloud", "Azure", "Snowflake", "Databricks"] },
  { category: "Orchestration", items: ["Apache Airflow", "Prefect", "Dagster", "Luigi", "Step Functions"] },
  { category: "Databases", items: ["PostgreSQL", "BigQuery", "Redshift", "DynamoDB", "Cassandra"] },
  { category: "Visualization", items: ["Looker", "Power BI", "Tableau", "Grafana", "Metabase"] },
  { category: "Infrastructure", items: ["Terraform", "Kubernetes", "Docker", "Helm", "Pulumi"] },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#2997ff] text-sm font-semibold uppercase tracking-widest mb-4">Tech Stack</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            The modern data ecosystem.
          </h2>
          <p className="text-[#86868b] text-xl max-w-xl mx-auto font-light">
            Battle-tested tools, proven at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techs.map((t) => (
            <div key={t.category} className="rounded-2xl bg-[#111111] border border-white/10 p-6 hover:border-white/20 transition-colors">
              <h3 className="text-[#2997ff] font-semibold text-xs uppercase tracking-widest mb-5">{t.category}</h3>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 text-[#d1d1d6] text-sm font-medium border border-white/10 hover:border-[#2997ff]/50 hover:text-white transition-colors cursor-default">
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
