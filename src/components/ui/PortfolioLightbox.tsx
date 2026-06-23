"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";

interface PortfolioLightboxProps {
  project: PortfolioProject | null;
  imageIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function PortfolioLightbox({
  project,
  imageIndex,
  onClose,
  onIndexChange,
}: PortfolioLightboxProps) {
  const images = project?.images ?? [];
  const total = images.length;

  const goPrev = useCallback(() => {
    onIndexChange(imageIndex === 0 ? total - 1 : imageIndex - 1);
  }, [imageIndex, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange(imageIndex === total - 1 ? 0 : imageIndex + 1);
  }, [imageIndex, total, onIndexChange]);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, goPrev, goNext]);

  if (!project) return null;

  const current = images[imageIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="text-sm text-white/60">
              {imageIndex + 1} / {total} · {project.category}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>
        </div>

        {/* Main image */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/50">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 sm:left-4 sm:p-3"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative h-[50vh] w-full sm:h-[60vh]">
            <Image
              key={current}
              src={current}
              alt={`${project.title} screenshot ${imageIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 sm:right-4 sm:p-3"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onIndexChange(i)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-16 sm:w-24 ${
                i === imageIndex
                  ? "border-brand-400 ring-2 ring-brand-400/40"
                  : "border-white/20 opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface PortfolioCardImageProps {
  project: PortfolioProject;
  onClick: () => void;
}

export function PortfolioCardImage({ project, onClick }: PortfolioCardImageProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group/img relative block h-52 w-full cursor-zoom-in overflow-hidden"
      aria-label={`View ${project.title} gallery`}
    >
      <Image
        src={project.cover}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover/img:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {project.category}
      </span>
      <div className="absolute bottom-4 left-4 right-4 text-left">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover/img:bg-black/30 group-hover/img:opacity-100">
        <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
          <ZoomIn size={18} />
          View Gallery ({project.images.length})
        </span>
      </div>
    </button>
  );
}
