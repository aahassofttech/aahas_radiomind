import { Metadata } from "next";
import RequestDemoSection from "@/components/sections/RequestDemoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Demo",
  description:
    "Request a personalized demo of Radiomind's AI-powered imaging viewer and reporting platform for your radiology department.",
  path: "/request-demo",
  keywords: ["Radiomind demo", "request radiology AI demo", "PACS demo"],
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


export default function RequestDemoPage() {
  return (
    <>
      <RequestDemoSection />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
