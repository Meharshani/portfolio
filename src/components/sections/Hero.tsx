"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Code2, Globe, Layers, Smartphone, Zap } from "lucide-react";

gsap.registerPlugin(useGSAP);

const STATS = [
  { value: "40+", label: "Projects Delivered" },
  { value: "25+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
];

const TECH_STACK = [
  { label: "React.js", icon: Code2, color: "#61dafb" },
  { label: "Next.js", icon: Layers, color: "#ffffff" },
  { label: "Firebase", icon: Zap, color: "#ffca28" },
  { label: "Ecommerce", icon: Globe, color: "#a78bfa" },
  { label: "Mobile", icon: Smartphone, color: "#34d399" },
];

const ORBIT_LABELS = ["SEO", "UI/UX", "API", "Cloud", "CMS"];
const ORBIT_RADIUS = 175;
const ORBIT_STEP = 360 / ORBIT_LABELS.length;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const showcaseWrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const cube1Ref = useRef<HTMLDivElement>(null);
  const cube2Ref = useRef<HTMLDivElement>(null);
  const cube3Ref = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const floatLRef = useRef<HTMLDivElement>(null);
  const floatRRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ── Entrance timeline ──
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(
          [
            badgeRef.current,
            titleRef.current,
            subtitleRef.current,
            ctaRef.current,
            statsRef.current,
            showcaseWrapRef.current,
          ],
          { transformPerspective: 1000, transformStyle: "preserve-3d" }
        );

        gsap.set(showcaseWrapRef.current, { rotationY: -35, rotationX: 15, z: -120, opacity: 0 });
        gsap.set(cardRef.current, { transformPerspective: 1400, transformStyle: "preserve-3d" });
        gsap.set(cardInnerRef.current, { transformStyle: "preserve-3d" });

        tl.from(badgeRef.current, {
          opacity: 0,
          y: 60,
          rotationX: -90,
          duration: 0.8,
        })
          .from(
            titleRef.current,
            { opacity: 0, y: 80, rotationX: 45, z: -100, duration: 1 },
            "-=0.5"
          )
          .from(subtitleRef.current, { opacity: 0, y: 40, rotationX: 20, duration: 0.7 }, "-=0.6")
          .from(ctaRef.current, { opacity: 0, y: 30, scale: 0.8, duration: 0.6 }, "-=0.4")
          .from(
            statsRef.current?.children ? Array.from(statsRef.current.children) : [],
            {
              opacity: 0,
              y: 50,
              rotationY: 90,
              stagger: 0.12,
              duration: 0.7,
            },
            "-=0.3"
          )
          .to(
            showcaseWrapRef.current,
            { opacity: 1, rotationY: 0, rotationX: 0, z: 0, duration: 1.2, ease: "power4.out" },
            "-=0.8"
          );

        // ── Continuous 3D float on main card ──
        gsap.to(cardInnerRef.current, {
          y: -22,
          rotationX: 6,
          rotationY: -4,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // ── Slow 3D sway on showcase wrapper ──
        gsap.to(showcaseWrapRef.current, {
          rotationY: 8,
          rotationX: -5,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
        });

        // ── Orbiting ring ──
        gsap.to(orbitRef.current, {
          rotationZ: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        orbitRef.current?.querySelectorAll(".orbit-badge").forEach((el) => {
          gsap.to(el, {
            rotationZ: -360,
            duration: 20,
            repeat: -1,
            ease: "none",
          });
        });

        // ── Spinning logo cube ──
        gsap.to(logoRef.current, {
          rotationY: 360,
          duration: 6,
          repeat: -1,
          ease: "none",
        });

        // ── Progress bar ──
        gsap.to(progressRef.current, {
          scaleX: 0.9,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "left center",
        });

        // ── Tech tiles pop in ──
        gsap.from(techRefs.current.filter(Boolean), {
          opacity: 0,
          z: -80,
          rotationX: -60,
          stagger: 0.1,
          duration: 0.6,
          delay: 1.2,
          ease: "back.out(2)",
        });

        // ── Floating side badges ──
        gsap.to(floatLRef.current, {
          y: -12,
          rotationY: 20,
          z: 30,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(floatRRef.current, {
          y: 12,
          rotationY: -20,
          z: 30,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // ── Background 3D cubes ──
        [cube1Ref, cube2Ref, cube3Ref].forEach((ref, i) => {
          gsap.to(ref.current, {
            rotationX: 360,
            rotationY: 360,
            duration: 12 + i * 4,
            repeat: -1,
            ease: "none",
          });
          gsap.to(ref.current, {
            y: -40,
            duration: 3 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.5,
          });
        });

        // ── Rings ──
        gsap.to(ring1Ref.current, {
          rotationX: 70,
          rotationZ: 360,
          duration: 18,
          repeat: -1,
          ease: "none",
        });
        gsap.to(ring2Ref.current, {
          rotationX: 60,
          rotationZ: -360,
          duration: 14,
          repeat: -1,
          ease: "none",
        });

        // ── Glowing orbs ──
        gsap.to(orb1Ref.current, {
          scale: 1.3,
          opacity: 0.7,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(orb2Ref.current, {
          scale: 1.2,
          x: 30,
          y: -20,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // ── Perspective grid wave ──
        gsap.to(gridRef.current, {
          rotationX: 65,
          z: -50,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformPerspective: 600,
        });

        // ── Mouse 3D tilt on card ──
        const tiltX = gsap.quickTo(cardRef.current, "rotationX", {
          duration: 0.5,
          ease: "power2.out",
        });
        const tiltY = gsap.quickTo(cardRef.current, "rotationY", {
          duration: 0.5,
          ease: "power2.out",
        });

        const onMove = (e: MouseEvent) => {
          if (!showcaseWrapRef.current) return;
          const rect = showcaseWrapRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          tiltX(-y * 35);
          tiltY(x * 35);
        };

        const onLeave = () => {
          tiltX(0);
          tiltY(0);
        };

        showcaseWrapRef.current?.addEventListener("mousemove", onMove);
        showcaseWrapRef.current?.addEventListener("mouseleave", onLeave);

        return () => {
          showcaseWrapRef.current?.removeEventListener("mousemove", onMove);
          showcaseWrapRef.current?.removeEventListener("mouseleave", onLeave);
        };
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden pt-24">
      {/* GSAP 3D Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div
          ref={orb1Ref}
          className="absolute left-[8%] top-[18%] h-80 w-80 rounded-full bg-brand-500/30 blur-[100px]"
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-[12%] right-[6%] h-96 w-96 rounded-full bg-purple-500/25 blur-[120px]"
        />

        {/* 3D Cubes */}
        <div
          ref={cube1Ref}
          className="cube-wrap absolute left-[6%] top-[20%] hidden md:block"
          style={{ width: 64, height: 64, ["--cube-half" as string]: "32px" }}
        >
          <Cube3D size={64} color="rgba(59,130,246,0.35)" border="rgba(96,165,250,0.6)" />
        </div>
        <div
          ref={cube2Ref}
          className="cube-wrap absolute right-[10%] top-[45%] hidden md:block"
          style={{ width: 48, height: 48, ["--cube-half" as string]: "24px" }}
        >
          <Cube3D size={48} color="rgba(139,92,246,0.35)" border="rgba(167,139,250,0.6)" />
        </div>
        <div
          ref={cube3Ref}
          className="cube-wrap absolute bottom-[28%] left-[14%] hidden lg:block"
          style={{ width: 40, height: 40, ["--cube-half" as string]: "20px" }}
        >
          <Cube3D size={40} color="rgba(34,211,238,0.3)" border="rgba(34,211,238,0.55)" />
        </div>

        {/* 3D Rings */}
        <div
          ref={ring1Ref}
          className="absolute right-[14%] top-[20%] hidden h-32 w-32 rounded-full border-2 border-brand-400/50 lg:block"
          style={{ transformStyle: "preserve-3d" }}
        />
        <div
          ref={ring2Ref}
          className="absolute bottom-[32%] left-[8%] hidden h-24 w-24 rounded-full border-2 border-purple-400/40 lg:block"
          style={{ transformStyle: "preserve-3d" }}
        />

        <div
          ref={gridRef}
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(96,165,250,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96,165,250,0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            transformOrigin: "center top",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div
              ref={badgeRef}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/15 px-4 py-2 text-sm font-medium text-brand-300"
            >
              <Sparkles size={16} />
              #1 Software House in Pakistan
            </div>

            <h1
              ref={titleRef}
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Professional Website Development Company in{" "}
              <span className="bg-gradient-to-r from-brand-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Pakistan
              </span>
            </h1>

            <p ref={subtitleRef} className="mt-6 max-w-xl text-lg text-muted sm:text-xl lg:mx-0 mx-auto">
              We build modern, fast, and scalable websites that help businesses grow.
              React.js, Next.js, Ecommerce & Custom Software Solutions.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
              <Button href="#contact" size="lg">
                Get Free Quote
                <ArrowRight size={20} />
              </Button>
              <Button href="#portfolio" variant="secondary" size="lg">
                View Portfolio
              </Button>
            </div>

            <div ref={statsRef} className="mt-12 grid grid-cols-3 gap-3 sm:gap-4" style={{ perspective: 900 }}>
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card-3d rounded-2xl border border-brand-500/20 bg-white/10 p-3 backdrop-blur-md sm:p-5"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-xl font-bold text-brand-400 sm:text-2xl lg:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-[10px] text-muted sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — GSAP 3D Showcase */}
          <div
            ref={showcaseWrapRef}
            className="relative flex min-h-[420px] items-center justify-center sm:min-h-[480px]"
            style={{ transformStyle: "preserve-3d", perspective: 1400 }}
          >
            {/* Orbit ring */}
            <div
              ref={orbitRef}
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              {ORBIT_LABELS.map((label, i) => {
                const angle = Math.round(i * ORBIT_STEP);
                return (
                  <div
                    key={label}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `rotate(${angle}deg) translateY(-${ORBIT_RADIUS}px)` }}
                  >
                    <div
                      className="orbit-badge rounded-full border border-brand-400/40 bg-brand-500/15 px-3 py-1.5 text-xs font-bold text-brand-300 shadow-lg shadow-brand-500/20 backdrop-blur-md"
                      style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}
                    >
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3D Card */}
            <div ref={cardRef} className="relative z-10 w-full max-w-md" style={{ transformStyle: "preserve-3d" }}>
              <div ref={cardInnerRef} style={{ transformStyle: "preserve-3d" }}>
                {/* Depth shadow layers */}
                <div
                  className="absolute inset-0 rounded-2xl bg-brand-600/30 blur-md"
                  style={{ transform: "translateZ(-50px) scale(0.92)" }}
                />
                <div
                  className="absolute inset-0 rounded-2xl border border-brand-500/30 bg-brand-500/10"
                  style={{ transform: "translateZ(-25px) scale(0.96)" }}
                />

                <div
                  className="relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/20 to-white/5 p-1 shadow-2xl shadow-brand-500/30 backdrop-blur-xl"
                  style={{ transform: "translateZ(0px)" }}
                >
                  <div className="overflow-hidden rounded-xl bg-surface/95">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                      <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                      <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                      <span className="ml-2 text-xs text-muted">mhrsolution.online</span>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          ref={logoRef}
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-lg shadow-brand-500/50"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          M
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold text-foreground">MHR Solution</div>
                          <div className="text-xs text-muted">Web Development Studio</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {TECH_STACK.map((tech, i) => {
                          const Icon = tech.icon;
                          return (
                            <div
                              key={tech.label}
                              ref={(el) => { techRefs.current[i] = el; }}
                              className="rounded-xl border border-white/15 bg-white/10 p-3 text-center backdrop-blur-sm"
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              <Icon size={22} className="mx-auto mb-1.5" style={{ color: tech.color }} />
                              <span className="text-xs font-medium text-foreground">{tech.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          ref={progressRef}
                          className="h-full w-full origin-left scale-x-[0.3] rounded-full bg-gradient-to-r from-brand-500 via-purple-500 to-cyan-400"
                        />
                      </div>
                      <p className="mt-2 text-center text-[10px] text-muted sm:text-xs">
                        Building your next project...
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  ref={floatRRef}
                  className="absolute -right-6 top-1/4 hidden rounded-xl border border-brand-400/30 bg-brand-500/20 px-4 py-2 text-xs font-bold text-brand-200 shadow-lg backdrop-blur-md sm:block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  ⚡ Fast Delivery
                </div>
                <div
                  ref={floatLRef}
                  className="absolute -left-6 bottom-1/4 hidden rounded-xl border border-purple-400/30 bg-purple-500/20 px-4 py-2 text-xs font-bold text-purple-200 shadow-lg backdrop-blur-md sm:block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  🚀 SEO Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cube3D({
  size,
  color,
  border,
}: {
  size: number;
  color: string;
  border: string;
}) {
  const faces = ["front", "back", "right", "left", "top", "bottom"] as const;
  return (
    <div className="cube-3d" style={{ width: size, height: size, ["--cube-half" as string]: `${size / 2}px` }}>
      {faces.map((face) => (
        <div
          key={face}
          className={`cube-face cube-face-${face}`}
          style={{
            width: size,
            height: size,
            background: color,
            border: `1px solid ${border}`,
            boxShadow: `inset 0 0 20px ${border}`,
          }}
        />
      ))}
    </div>
  );
}
