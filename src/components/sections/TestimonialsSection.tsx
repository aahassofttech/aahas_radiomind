"use client";

import Container from "@/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { Testimonial } from "@/types/content";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-surface py-10 sm:py-10">
      <Container>
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Here&apos;s what <span className="text-primary">our clients</span> say about us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate sm:text-lg">
          Trusted by radiology teams to simplify reporting, improve coordination,
          and create faster, more confident diagnoses every day.
        </p>
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
                  <HiMiniChatBubbleBottomCenterText className="h-7 w-7 text-primary/30" />

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-blue text-sm font-semibold text-primary">
                      {t.name.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">
                        {t.role}, {t.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
