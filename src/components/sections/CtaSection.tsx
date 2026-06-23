import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";

export default function CtaSection() {
  return (
    <section className="bg-surface-blue py-10 sm:py-10" id="request-demo">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Ready to transform your Radiology department?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
              Tell us about your facility. A Radiomind AI specialist will reach
              out within one business day to schedule your personalized demo.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HiOutlineMail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a href="mailto:hello@radiomind.ai" className="font-medium text-ink hover:text-primary">
                    hello@radiomind.ai
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HiOutlinePhone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted">Phone</p>
                  <a href="tel:+917899876543" className="font-medium text-ink hover:text-primary">
                    +91 7899876543
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HiOutlineLocationMarker className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted">Address</p>
                  <p className="font-medium text-ink">Hyderabad, India</p>
                </div>
              </li>
            </ul>
          </div>

          <ContactForm variant="demo" submitLabel="Request Demo" />
        </div>
      </Container>
    </section>
  );
}
