import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Container from "@/components/ui/Container";
import { footerCompanyLinks, footerSupportLinks, footerLegalLinks } from "@/data/nav";

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-blue">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/radiomind-logo.webp" alt="Radiomind Logo" width={170} height={60} loading="lazy" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              AI-powered imaging and reporting infrastructure for modern radiology
              departments, diagnostic centres, and hospital networks.
            </p>
            <div className="mt-5 flex gap-3">
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

          <div>
            <h3 className="text-sm font-semibold text-ink">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Support</h3>
            <ul className="mt-4 space-y-2.5">
              {footerSupportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li className="flex items-center gap-2.5">
                <HiOutlineMail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:hello@radiomind.ai" className="hover:text-primary">
                  hello@radiomind.ai
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlinePhone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+917899876543" className="hover:text-primary">
                  +91 7899876543
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlineLocationMarker className="h-4 w-4 shrink-0 text-primary" />
                Hyderabad, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-blue-100 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Radiomind. All rights reserved.</p>
          <div className="flex gap-5">
            {footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
