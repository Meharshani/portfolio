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
import {
  SectionHeading,
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  Smartphone,
  Code2,
  Flame,
};

export function Services() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!search.trim()) return;

    router.push(`/scholarship?id=${search.trim().toUpperCase()}`);
  };

  return (
    <AnimatedSection id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Scholarship Verification"
          title="Check Your Scholarship Status"
          subtitle="Enter your Scholarship ID to verify your scholarship and view your course details."
        />

        {/* Scholarship Search */}
        {/* Scholarship Program */}
        <div className="mx-auto mt-16 mb-20 max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 shadow-2xl">
          <div className="px-8 py-12 text-center text-white">

            <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
              🎓 MHR Solution Scholarship Program 2026
            </span>

            <h2 className="mt-5 text-4xl font-extrabold">
              Scholarship Result Announced
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/95">
              We are proud to announce that only <strong>20 outstanding students</strong>
              have been selected after successfully passing the
              <strong> MHR Solution Scholarship Test</strong>.
              Each selected student has been awarded a
              <strong> 100% Scholarship worth Rs. 100,000</strong> for our
              <strong> Professional E-Commerce & Digital Marketing Course</strong>.
            </p>

            <button
              onClick={() => router.push("/scholarship")}
              className="mt-8 rounded-2xl bg-white px-10 py-4 text-lg font-bold text-orange-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Check Scholarship Status →
            </button>

          </div>
        </div>

        <SectionHeading
          badge="Our Services"
          title="Web Development Services in Pakistan"
          subtitle="From business websites to custom software — we deliver premium digital solutions tailored to your needs."
        />

        {/* Services */}
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

                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>

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