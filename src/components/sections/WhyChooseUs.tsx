"use client";

import {
  Zap,
  Cpu,
  Search,
  MonitorSmartphone,
  BadgeDollarSign,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading, AnimatedSection, AnimatedItem } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Cpu,
  Search,
  MonitorSmartphone,
  BadgeDollarSign,
  Headphones,
};

export function WhyChooseUs() {
  return (
    <AnimatedSection id="why-us" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Your Trusted Web Design Agency in Lahore"
          subtitle="We combine technical excellence with business understanding to deliver websites that drive real results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] ?? Zap;
            return (
              <AnimatedItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/25">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
