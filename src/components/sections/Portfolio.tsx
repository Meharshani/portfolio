"use client";

import { useState } from "react";
import { ExternalLink, Images } from "lucide-react";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio";
import { SectionHeading, AnimatedSection, AnimatedItem } from "@/components/ui/SectionHeading";
import { PortfolioCardImage, PortfolioLightbox } from "@/components/ui/PortfolioLightbox";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Portfolio() {
  const [lightbox, setLightbox] = useState<{
    project: PortfolioProject;
    index: number;
  } | null>(null);

  const openGallery = (project: PortfolioProject, index = 0) => {
    setLightbox({ project, index });
  };

  return (
    <>
      <AnimatedSection id="portfolio" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Portfolio"
            title="Our Recent Projects"
            subtitle="Explore our portfolio of web applications, ecommerce stores, and mobile apps built for clients worldwide."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project) => (
              <AnimatedItem key={project.title}>
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <PortfolioCardImage
                    project={project}
                    onClick={() => openGallery(project)}
                  />

                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-brand-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => openGallery(project)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-brand-500/30 bg-brand-500/10 py-2.5 text-sm font-semibold text-brand-400 transition-colors hover:bg-brand-500/20"
                    >
                      <Images size={16} />
                      View {project.images.length} Screenshots
                    </button>
                  </div>
                </motion.article>
              </AnimatedItem>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="#contact" variant="outline" size="lg">
              Start Your Project
              <ExternalLink size={18} />
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <PortfolioLightbox
        project={lightbox?.project ?? null}
        imageIndex={lightbox?.index ?? 0}
        onClose={() => setLightbox(null)}
        onIndexChange={(index) =>
          setLightbox((prev) => (prev ? { ...prev, index } : null))
        }
      />
    </>
  );
}
