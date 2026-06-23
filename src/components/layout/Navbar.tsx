"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiOutlineCpuChip } from "react-icons/hi2";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { mainNavLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex h-18 items-center justify-between py-3" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <img src="/images/radiomind-logo.webp" alt="Radiomind Logo" width={170} height={60} loading="lazy"/>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {mainNavLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    active ? "text-primary" : "text-slate"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex gap-2 items-center">
            <div className="block">
              <Button href="/request-demo" size="md">
                Request Demo
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-ink lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-surface-blue text-primary"
                    : "text-slate hover:bg-surface"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div onClick={() => setOpen(false)}>
              <Button href="/request-demo" className="mt-3 w-full">
                Request Demo
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
