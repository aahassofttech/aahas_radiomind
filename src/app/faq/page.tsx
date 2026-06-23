import { Metadata } from "next";
import RequestDemoSection from "@/components/sections/RequestDemoSection";
import { buildMetadata } from "@/lib/seo";
import FaqPreview from "@/components/sections/FaqPreview";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Radiomind's AI-powered imaging viewer, PACS integration, deployment, and reporting tools.",
  path: "/faq",
  keywords: ["Radiomind FAQ", "radiology AI questions", "PACS integration FAQ"],
});


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

export default function FaqPage() {
  return (
    <>
      {/* FAQs Preview */}
      <FaqPreview items={faqs} />

      <RequestDemoSection />
    </>
  );
}
