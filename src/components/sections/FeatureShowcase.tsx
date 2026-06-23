import { HiOutlineCheck } from "react-icons/hi";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FeatureIllustration from "@/components/sections/FeatureIllustration";
import { features } from "@/data/content";
import { cn } from "@/lib/utils";

export default function FeatureShowcase() {
  return (
    <section className="py-10 sm:py-10" id="features">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Flexible solutions for every business model
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate sm:text-lg">
          Radiomind pre-analyzes CT and MRI scans, surfacing key findings so
          radiologists can report with greater speed and confidence.
        </p>

        <div className="mt-16 space-y-20">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div className="overflow-hidden rounded-2xl">
                <FeatureIllustration icon={feature.icon} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ink sm:text-3xl">{feature.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-blue text-primary">
                        <HiOutlineCheck className="h-3.5 w-3.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Button href="/request-demo" variant="secondary" size="sm" className="mt-7">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
