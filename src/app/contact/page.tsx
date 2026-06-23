import { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the Radiomind team for questions about AI radiology reporting, PACS integration, pricing, or pilot programs.",
  path: "/contact",
  keywords: ["contact Radiomind", "radiology AI support", "PACS integration inquiry"],
});

export default function ContactPage() {
  return <ContactSection />;
}
