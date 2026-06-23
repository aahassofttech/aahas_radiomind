import {
  HiOutlineBuildingOffice2,
  HiOutlineBeaker,
  HiOutlineGlobeAlt,
  HiOutlineServerStack,
} from "react-icons/hi2";
import Container from "@/components/ui/Container";
import { audiences } from "@/data/content";

const ICONS = [
  HiOutlineBuildingOffice2,
  HiOutlineBeaker,
  HiOutlineGlobeAlt,
  HiOutlineServerStack,
];

export default function Audience() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Built for every imaging environment
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate sm:text-lg">
          Radiomind pre-analyzes scans as you&apos;ve defined, surfacing key findings so
          radiologists everywhere can report with greater speed and confidence.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {audiences.map((item, i) => {
            const Icon = ICONS[i] || HiOutlineBuildingOffice2;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-primary/30 hover:bg-surface-blue/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
