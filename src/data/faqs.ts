import { FaqItem } from "@/types/content";

export const faqs: FaqItem[] = [
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
  },
  {
    id: "faq-6",
    question: "What does the AI actually flag, and who reviews it?",
    answer:
      "Radiomind surfaces priority findings and structural annotations for radiologist review — it never finalizes a report on its own. Every AI-assisted finding requires radiologist sign-off before it becomes part of the official report.",
    category: "Product",
  },
  {
    id: "faq-7",
    question: "Do radiologists need special training to use Radiomind?",
    answer:
      "Most radiologists are comfortable within a single onboarding session. The viewer is browser-based and designed to feel familiar to anyone who has used a standard DICOM viewer before.",
    category: "Onboarding",
  },
  {
    id: "faq-8",
    question: "Can we export our data if we ever need to switch tools?",
    answer:
      "Yes. Radiomind supports CSV export for quantitative measurements and JSON export for DICOM metadata, so your data is never locked into a proprietary format.",
    category: "Data & Security",
  },
  {
    id: "faq-9",
    question: "What security and compliance standards does Radiomind follow?",
    answer:
      "Radiomind follows industry-standard data security practices for medical imaging, including encrypted data transit and storage. Specific compliance documentation is available on request during the demo process.",
    category: "Data & Security",
  },
  {
    id: "faq-10",
    question: "Who do we contact for support after going live?",
    answer:
      "Every facility is assigned a dedicated point of contact for post-deployment support. You can also reach our team directly through the Contact page for technical or clinical workflow questions.",
    category: "Support",
  },
];
