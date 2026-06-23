"use client";

import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaqItem } from "@/types/content";
import { cn } from "@/lib/utils";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span className="text-sm font-semibold text-ink sm:text-base">
                {item.question}
              </span>
              <HiOutlineChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate sm:px-7">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
