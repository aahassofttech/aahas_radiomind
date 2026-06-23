import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-surface-blue to-white py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Get in Touch</h1>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Questions about integration, pricing, or piloting Radiomind at your
            facility? Send us a message and our team will respond within one
            business day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="space-y-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HiOutlineMail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a href="mailto:hello@radiomind.ai" className="font-medium text-ink hover:text-primary">
                    hello@radiomind.ai
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HiOutlinePhone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">Phone</p>
                  <a href="tel:+917899876543" className="font-medium text-ink hover:text-primary">
                    +91 7899876543
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HiOutlineLocationMarker className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">Office</p>
                  <p className="font-medium text-ink">Hyderabad, Telangana, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HiOutlineClock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted">Hours</p>
                  <p className="font-medium text-ink">Mon&ndash;Sat, 9:00 AM&ndash;6:30 PM IST</p>
                </div>
              </li>
            </ul>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Follow us</p>
              <div className="mt-3 flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Map placeholder showing Hyderabad office location">
                <rect width="400" height="200" fill="#eef4ff" />
                <path d="M0 140 Q 100 100, 200 130 T 400 110" stroke="#bfdbfe" strokeWidth="14" fill="none" />
                <path d="M40 0 L 60 200" stroke="#dbeafe" strokeWidth="6" />
                <path d="M250 0 L 230 200" stroke="#dbeafe" strokeWidth="6" />
                <circle cx="210" cy="105" r="10" fill="#2563eb" />
                <circle cx="210" cy="105" r="20" fill="#2563eb" opacity="0.2" />
                <text x="160" y="150" fill="#2563eb" fontFamily="system-ui" fontSize="11" fontWeight="600">
                  Hyderabad, India
                </text>
              </svg>
            </div>
          </div>

          <ContactForm variant="contact" submitLabel="Send Message" />
        </div>
      </Container>
    </section>
  );
}
