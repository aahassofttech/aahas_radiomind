import { Metadata } from "next";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import Stats from "@/components/sections/Stats";
import ViewerHighlight from "@/components/sections/ViewerHighlight";
import Process from "@/components/sections/Process";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import FaqPreview from "@/components/sections/FaqPreview";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBeaker,
  HiOutlineGlobeAlt,
  HiOutlineServerStack,
  HiOutlineSparkles,
  HiOutlineCheckCircle
} from "react-icons/hi2";


export const metadata: Metadata = buildMetadata({
  title: "Radiomind | AI Radiology That Reads, Reports and Never Tires",
  description:
    "Radiomind is a clinical-grade imaging viewer and AI-powered reporting platform for modern radiology departments, diagnostic centres, and hospital networks.",
  path: "/",
  keywords: ["AI radiology", "PACS", "DICOM viewer", "AI reporting", "medical imaging AI"],
});

const testimonials = [
  {
    id: "t1",
    quote:
      "Radiomind cut our average reporting time noticeably within the first month. The viewer integrates so well with our existing PACS that the team barely noticed a transition period.",
    name: "Dr. Ramesh Kulkarni",
    role: "Head of Radiology",
    organization: "Sunrise Diagnostic Centre",
    avatar: "/images/testimonials/avatar-1.svg",
  },
  {
    id: "t2",
    quote:
      "The priority worklist sorting has genuinely changed how our night shift operates. Critical findings surface faster, and our turnaround time on STAT studies has improved significantly.",
    name: "Dr. Suresh Patil",
    role: "Consultant Radiologist",
    organization: "Apex Multi-Speciality Hospital",
    avatar: "/images/testimonials/avatar-2.svg",
  },
  {
    id: "t3",
    quote:
      "We rolled out Radiomind across three facilities without a single disruptive migration. Our IT team appreciated that it layered onto infrastructure we already had in place.",
    name: "Ramesh Iyer",
    role: "Director of Radiology IT",
    organization: "Crescent Hospital Network",
    avatar: "/images/testimonials/avatar-3.svg",
  },
  {
    id: "t4",
    quote:
      "We rolled out Radiomind across three facilities without a single disruptive migration. Our IT team appreciated that it layered onto infrastructure we already had in place.",
    name: "Ramesh Iyer",
    role: "Director of Radiology IT",
    organization: "Crescent Hospital Network",
    avatar: "/images/testimonials/avatar-3.svg",
  },
];

const faqs = [
  {
    id: "faq-1",
    question: "Does Radiomind replace our existing PACS?",
    answer:
      "No. Radiomind layers directly onto your existing PACS using standard DICOM protocols, so your team keeps the systems and workflows they already know. There's no rip-and-replace migration required.",
    category: "Integration",
  },
  {
    id: "faq-2",
    question: "What imaging modalities does Radiomind support?",
    answer:
      "Radiomind supports CT, MRI, PET/CT, SPECT/CT, and MR/PET workflows, with multi-planar reconstruction and curved planar reformation available across supported modalities.",
    category: "Product",
  },
  {
    id: "faq-3",
    question: "How long does deployment typically take?",
    answer:
      "Most facilities are live within a few weeks. Because Radiomind integrates with your existing PACS rather than replacing it, deployment can be rolled out service-line by service-line if preferred.",
    category: "Deployment",
  },
  {
    id: "faq-4",
    question: "Is AI-powered reporting available today?",
    answer:
      "AI-powered reporting is currently in pilot at a major hospital network in Hyderabad. We're onboarding a limited number of additional facilities — reach out through Request Demo to ask about availability.",
    category: "Product",
  },
  {
    id: "faq-5",
    question: "Can Radiomind scale across a multi-site hospital network?",
    answer:
      "Yes. Radiomind is built on cloud-native infrastructure designed to scale from a single reading room to 100,000+ studies a day across a distributed hospital network, with no added performance overhead.",
    category: "Scalability",
  }
];

export default function HomePage() {
  return (
    <>

      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-blue to-white py-10 sm:py-10">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                AI Radiology that reads, reports, and never tires.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate sm:text-lg">
                A clinical-grade imaging viewer and FAQs with AI-powered reporting,
                built in India for modern radiology and healthcare teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/request-demo" size="lg">
                  Request Demo
                </Button>
                <Button href="/about" variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
                {["DICOM-native viewer", "Integrates with your PACS", "Built for Indian hospitals"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>


            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-ink shadow-xl shadow-blue-900/10">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/images/brain-dialysis.webp"
                    alt="AI-enhanced brain MRI scan visualization"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/40" />

                <div className="absolute inset-0">
                  <span className="absolute left-5 top-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                    T1 AXIAL
                  </span>

                  <span className="absolute left-5 bottom-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                    256 x 256
                  </span>

                  <span className="absolute right-5 top-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                    AI: ANALYZING
                  </span>

                  <span className="absolute right-5 bottom-5 text-[10px] tracking-[0.3em] text-cyan-300/90">
                    98.2%
                  </span>

                  <div className="absolute left-1/2 top-1/3 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-400/10 blur-[1px] animate-pulse" />

                  <div className="absolute left-1/2 top-1/2 h-1 w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80 animate-[scan_4s_linear_infinite]" />

                  <div className="absolute left-[42%] top-[38%] h-3 w-3 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.9)] animate-pulse" />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Features Section */}
      <FeatureShowcase />

      {/* Counter Stats */}
      <Stats />

      {/* Audience section */}
      <section className="py-10 sm:py-10">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for every imaging environment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate sm:text-lg">
            Radiomind pre-analyzes scans as you&apos;ve defined, surfacing key findings so
            radiologists everywhere can report with greater speed and confidence.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            <div
              className="flex items-start gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-primary/30 hover:bg-surface-blue/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <HiOutlineBuildingOffice2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">Multi-Speciality Hospitals</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">Enterprise imaging infrastructure for high-volume radiology departments.</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-primary/30 hover:bg-surface-blue/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <HiOutlineBeaker className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">Diagnostic & Imaging Centres</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">Efficient workflows for faster turnaround and improved productivity.</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-primary/30 hover:bg-surface-blue/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <HiOutlineGlobeAlt className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">Teleradiology Providers</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">Secure remote reporting and collaboration from anywhere.</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-primary/30 hover:bg-surface-blue/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <HiOutlineServerStack className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">Hospital Networks</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">Centralized PACS with unified access across multiple facilities.</p>
              </div>
            </div>


          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <Process />

      {/* AI-enabled DICOM */}
      <ViewerHighlight />

      {/* AI-Powered Reporting */}
      <section className="py-10 sm:py-10">
        <Container>
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface-blue/50 p-4 sm:p-6 lg:grid-cols-2">
            <div>
              <Badge>
                <HiOutlineSparkles className="mr-1 h-3.5 w-3.5" /> Coming Soon
              </Badge>
              <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                AI-Powered Reporting
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                Radiomind is building an integrated AI reporting layer that generates
                structured draft reports directly alongside imaging studies.
                Radiologists can review AI-generated impressions, accelerate reporting,
                and improve consistency — all while maintaining complete clinical
                oversight.
              </p>
              <p className="mt-3 text-sm font-medium text-primary">
                Currently being piloted at a major hospital network in Hyderabad.
              </p>
              <Button href="/request-demo" variant="secondary" className="mt-6">
                Join the Waitlist
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-white p-6">
              <svg viewBox="0 0 400 240" className="h-full w-full" role="presentation" aria-hidden="true">
                <rect width="400" height="240" rx="12" fill="#f8fafc" />
                <rect x="20" y="20" width="170" height="200" rx="8" fill="#0f172a" />
                <rect x="32" y="36" width="146" height="100" rx="4" fill="#1e293b" />
                <ellipse cx="105" cy="86" rx="60" ry="44" fill="#1e3a5f" />
                <rect x="32" y="148" width="60" height="6" rx="3" fill="#334155" />
                <rect x="32" y="160" width="100" height="6" rx="3" fill="#334155" />
                <rect x="32" y="172" width="80" height="6" rx="3" fill="#334155" />
                <rect x="210" y="20" width="170" height="92" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <circle cx="232" cy="42" r="8" fill="#2563eb" />
                <rect x="248" y="36" width="100" height="6" rx="3" fill="#94a3b8" />
                <rect x="225" y="60" width="135" height="6" rx="3" fill="#cbd5e1" />
                <rect x="225" y="72" width="120" height="6" rx="3" fill="#cbd5e1" />
                <rect x="225" y="84" width="135" height="6" rx="3" fill="#cbd5e1" />
                <rect x="225" y="96" width="90" height="6" rx="3" fill="#cbd5e1" />
                <rect x="210" y="124" width="170" height="96" rx="8" fill="white" stroke="#2563eb" strokeWidth="1.5" />
                <text x="225" y="146" fill="#2563eb" fontFamily="system-ui" fontSize="11" fontWeight="700">AI Draft Impression</text>
                <rect x="225" y="156" width="140" height="6" rx="3" fill="#bfdbfe" />
                <rect x="225" y="168" width="120" height="6" rx="3" fill="#bfdbfe" />
                <rect x="225" y="180" width="135" height="6" rx="3" fill="#bfdbfe" />
                <rect x="225" y="196" width="70" height="18" rx="9" fill="#2563eb" />
                <text x="237" y="208" fill="white" fontFamily="system-ui" fontSize="8" fontWeight="600">Approve</text>
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section Form */}
      <CtaSection />

      {/* FAQs Preview */}
      <FaqPreview items={faqs} />
    </>
  );
}
