import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Policies",
  description:
    "Read Radiomind's privacy policy, terms and conditions, and cookie policy governing the use of our platform and website.",
  path: "/policies",
  keywords: ["Radiomind privacy policy", "terms and conditions", "cookie policy"],
});

const sections = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "cookies", label: "Cookie Policy" },
];

export default function PoliciesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Policies</h1>
        <p className="mt-4 text-base text-slate sm:text-lg">
          Last updated June 1, 2026. This page explains how Radiomind collects,
          uses, and protects your information, along with the terms that govern
          use of our platform and website.
        </p>

        <nav className="mt-8 flex flex-wrap gap-3" aria-label="Policy sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-slate hover:border-primary hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <article className="prose-policy mt-12 space-y-12">
          <section id="privacy">
            <h2 className="text-2xl font-bold text-ink">Privacy Policy</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate">
              <p>
                Radiomind, operated by Aahas Softech Solutions, collects information
                you provide directly to us, such as when you request a demo,
                contact our team, or subscribe to product updates. This may
                include your name, work email, phone number, and organization.
              </p>
              <p>
                We use this information to respond to inquiries, schedule demos,
                provide customer support, and improve our products. We do not
                sell your personal information to third parties.
              </p>
              <p>
                For facilities using Radiomind in a clinical setting, imaging
                data and protected health information are handled under
                separate data processing agreements aligned with applicable
                healthcare data protection regulations. Contact our team for
                detailed compliance documentation specific to your deployment.
              </p>
              <p>
                You may request access to, correction of, or deletion of your
                personal information at any time by emailing
                hello@radiomind.ai.
              </p>
            </div>
          </section>

          <section id="terms">
            <h2 className="text-2xl font-bold text-ink">Terms & Conditions</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate">
              <p>
                By accessing or using the Radiomind website and platform, you
                agree to be bound by these terms. If you do not agree, please
                do not use our services.
              </p>
              <p>
                Radiomind provides imaging visualization, workflow, and
                reporting-assistance tools. All AI-generated findings and draft
                reports require radiologist review and sign-off; Radiomind does
                not replace clinical judgment and is not a substitute for
                professional medical diagnosis.
              </p>
              <p>
                Content on this website, including text, graphics, and logos,
                is the property of Aahas Softech Solutions and may not be
                reproduced without permission.
              </p>
              <p>
                We may update these terms from time to time. Continued use of
                our services after changes are posted constitutes acceptance
                of the revised terms.
              </p>
            </div>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold text-ink">Cookie Policy</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate">
              <p>
                We use cookies and similar technologies to operate our website,
                remember your preferences, and understand how visitors interact
                with our content so we can improve it over time.
              </p>
              <p>
                Essential cookies are required for core site functionality and
                cannot be disabled. Analytics cookies help us understand usage
                patterns and are used only in aggregate, anonymized form.
              </p>
              <p>
                You can control or disable cookies through your browser
                settings. Disabling certain cookies may affect how parts of our
                website function.
              </p>
            </div>
          </section>
        </article>
      </Container>
    </section>
  );
}
