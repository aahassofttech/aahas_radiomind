import { Metadata } from "next";
import Stats from "@/components/sections/Stats";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { HiOutlineEye, HiOutlineRocketLaunch } from "react-icons/hi2";
import { teamMembers } from "@/data/content";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Radiomind's mission to bring AI-powered imaging and reporting tools to radiology departments and hospital networks everywhere.",
  path: "/about",
  keywords: ["about Radiomind", "AI radiology company", "Aahas Intelligence"],
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

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="bg-gradient-to-b from-surface-blue to-white py-10 sm:py-10">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-ink shadow-xl shadow-blue-900/10">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/images/heart-ct-scan.webp"
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
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Reimagining Radiology for the AI Era
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate sm:text-lg">
                At Radiomind, we believe radiology should be faster, smarter, and
                more accessible. Our platform empowers healthcare providers with
                enterprise-grade imaging and AI-driven innovation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/request-demo" size="lg">
                  Get Started
                </Button>
                <Button href="#vision" variant="secondary" size="lg">
                  Our Vision
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-10" id="vision">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-blue text-primary">
                  <HiOutlineEye className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Our vision</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-slate">
                  A world where every radiology department, regardless of size or
                  location, has access to the same AI-powered tools as the largest
                  academic hospitals — closing the gap between where care is
                  practiced and where the best technology lives.
                </p>
              </div>
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-blue text-primary">
                  <HiOutlineRocketLaunch className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Our mission</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-slate">
                  We build imaging and reporting infrastructure that integrates
                  with the systems hospitals already use — reducing radiologist
                  workload, improving diagnostic confidence, and helping every
                  patient get a faster, more accurate result.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <svg viewBox="0 0 480 420" className="h-full w-full" role="img" aria-label="Radiology workflow diagram showing scan to report pipeline">
                <rect width="480" height="420" fill="#f8fafc" />
                <rect x="40" y="40" width="180" height="110" rx="10" fill="white" stroke="#dbeafe" strokeWidth="2" />
                <circle cx="90" cy="90" r="22" fill="#bfdbfe" />
                <rect x="125" y="78" width="75" height="8" rx="4" fill="#93c5fd" />
                <rect x="125" y="94" width="55" height="8" rx="4" fill="#bfdbfe" />
                <rect x="260" y="40" width="180" height="110" rx="10" fill="white" stroke="#dbeafe" strokeWidth="2" />
                <rect x="290" y="65" width="120" height="60" rx="6" fill="#eef4ff" stroke="#93c5fd" strokeWidth="1.5" />
                <circle cx="320" cy="95" r="14" fill="#60a5fa" opacity="0.6" />
                <rect x="40" y="180" width="400" height="100" rx="10" fill="#2563eb" />
                <rect x="65" y="205" width="160" height="10" rx="5" fill="white" opacity="0.85" />
                <rect x="65" y="225" width="220" height="8" rx="4" fill="white" opacity="0.5" />
                <rect x="65" y="240" width="190" height="8" rx="4" fill="white" opacity="0.5" />
                <rect x="40" y="310" width="400" height="80" rx="10" fill="white" stroke="#dbeafe" strokeWidth="2" />
                <circle cx="75" cy="350" r="16" fill="#34d399" opacity="0.8" />
                <rect x="105" y="340" width="280" height="8" rx="4" fill="#cbd5e1" />
                <rect x="105" y="356" width="200" height="8" rx="4" fill="#e2e8f0" />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* Counter Stats */}
      <Stats />

      {/* Team Section */}
      <section className="bg-surface py-10 sm:py-10">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Our Team</h2>
          <p className="mt-4 max-w-xl text-base text-slate sm:text-lg">
            A small, focused team of radiologists, engineers, and product builders
            working on the same problem from different angles.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
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

      {/* CTA Section Form */}
      <CtaSection />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
