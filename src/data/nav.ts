import { NavLink } from "@/types/content";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request Demo", href: "/request-demo" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faq" },
];

export const footerSupportLinks: NavLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Request a Demo", href: "/request-demo" },
  { label: "Policies", href: "/policies" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/policies#privacy" },
  { label: "Terms & Conditions", href: "/policies#terms" },
  { label: "Cookie Policy", href: "/policies#cookies" },
];
