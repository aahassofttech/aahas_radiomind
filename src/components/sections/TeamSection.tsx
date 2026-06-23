import Container from "@/components/ui/Container";
import { teamMembers } from "@/data/content";

function Avatar({ seed }: { seed: number }) {
  const hue = (seed * 47) % 360;
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect width="120" height="120" fill={`hsl(${hue}, 35%, 92%)`} />
      <circle cx="60" cy="48" r="22" fill={`hsl(${hue}, 40%, 60%)`} />
      <path d="M20 120 C 20 88, 100 88, 100 120 Z" fill={`hsl(${hue}, 40%, 60%)`} />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Our Team</h2>
        <p className="mt-4 max-w-xl text-base text-slate sm:text-lg">
          A small, focused team of radiologists, engineers, and product builders
          working on the same problem from different angles.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {teamMembers.map((member, i) => (
            <div key={member.name}>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <Avatar seed={i} />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-ink sm:text-base">{member.name}</h3>
              <p className="text-xs text-muted sm:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
