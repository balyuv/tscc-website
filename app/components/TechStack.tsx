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
    <section id="tech-stack" className="py-28 px-6 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We work with the modern data ecosystem — battle-tested tools at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((t) => (
            <div key={t.category} className="rounded-2xl bg-[#0d1529] border border-slate-800 p-6">
              <h3 className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-4">{t.category}</h3>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 hover:border-sky-500/50 hover:text-sky-300 transition-colors">
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
