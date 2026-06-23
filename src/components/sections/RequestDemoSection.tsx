import { HiOutlineCheckCircle } from "react-icons/hi";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";

const highlights = [
  "A 30-minute walkthrough tailored to your imaging volume",
  "Live look at AI-assisted worklist prioritization",
  "Answers on PACS integration for your specific vendor",
  "No commitment required to see a personalized demo",
];

export default function RequestDemoSection() {
  return (
    <section className="bg-gradient-to-b from-surface-blue to-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              See Radiomind in action
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
              Tell us about your facility and a Radiomind AI specialist will
              walk you through the viewer, worklist, and reporting tools —
              tailored to how your department actually works.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate">
                  <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-ink">Prefer to talk first?</p>
              <p className="mt-1 text-sm text-slate">
                Call us directly at{" "}
                <a href="tel:+917899876543" className="font-medium text-primary">
                  +91 7899876543
                </a>{" "}
                or email{" "}
                <a href="mailto:hello@radiomind.ai" className="font-medium text-primary">
                  hello@radiomind.ai
                </a>
              </p>
            </div>
          </div>

          <ContactForm variant="demo" submitLabel="Request Demo" />
        </div>
      </Container>
    </section>
  );
}
