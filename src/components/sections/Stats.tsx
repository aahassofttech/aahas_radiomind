import Container from "@/components/ui/Container";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="bg-surface py-10 sm:py-10">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Measurable <span className="text-primary">benefits</span> that transform care
        </h2>
        <p className="mt-4 max-w-2xl text-base text-slate sm:text-lg">
          Every feature is engineered for direct, quantifiable impact on patient
          outcomes, radiologist experience, and department efficiency.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-extrabold text-primary">{stat.value}</span>
                <span className="text-sm font-medium text-muted">{stat.label}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {stat.label === "Less reporting time"
                  ? "Reduce radiologist workload"
                  : stat.label === "Fewer missed findings"
                  ? "Improve diagnostic accuracy"
                  : stat.label === "Faster turnaround time"
                  ? "Faster turnaround time"
                  : "Scalable for any hospital"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
