"use client";

import {
  Globe,
  ShoppingCart,
  Smartphone,
  Code2,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading, AnimatedSection, AnimatedItem } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  Smartphone,
  Code2,
  Flame,
};

export function Services() {
  return (
    <AnimatedSection id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Web Development Services in Pakistan"
          subtitle="From business websites to custom software — we deliver premium digital solutions tailored to your needs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <AnimatedItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <GlassCard className="group h-full">
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-brand-500/20 to-purple-500/20 p-3 text-brand-400 transition-colors group-hover:from-brand-500/30 group-hover:to-purple-500/30">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
