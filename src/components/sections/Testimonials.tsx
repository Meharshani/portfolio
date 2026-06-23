"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading, AnimatedSection, AnimatedItem } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by businesses across Pakistan for professional website development and software solutions."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <AnimatedItem key={testimonial.name}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-500/20" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-purple-600 text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
