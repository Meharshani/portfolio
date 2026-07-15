"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// For mobile navigation, anchor tag with href="#section" should work if:
// 1. The target element's id matches the href value WITHOUT THE #
// 2. You are not interfering with scroll/overlay styles (backdrop-blur etc. can mask content)
// 3. You are not replacing the anchor <a> with <Link> (Next.js <Link> only supports navigation for actual pages, not in-page hash links)
// 4. You are not wrapping the anchor in a <form> or similar tag that absorbs or interrupts clicks

// To force scroll for in-page navigation, handle the click manually and close the menu.
// This solution enhances anchor default and works on all browsers/SPA:
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handler to support scrolling to section and closing nav
  function handleMobileNavClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.replace(/^#/, ""));
      if (el) {
        // Use scrollIntoView for smoother experience and compatibility
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    } else {
      // For real pages (not sections), fallback to router navigation (should be rare here)
      setMobileOpen(false);
      router.push(href);
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/80 py-3 backdrop-blur-xl shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
            M
          </div>
          <span className="text-xl font-bold tracking-tight">
            MHR <span className="text-brand-400">Solution</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl p-2.5 text-muted transition-colors hover:bg-white/10 hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button href="#contact" size="sm">
            Get Free Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl p-2 text-muted"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="rounded-xl p-2 text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="overflow-hidden border-b border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleMobileNavClick(e, link.href)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contact"
                className="mt-2 w-full"
                onClick={e => {
                  // Ensure anchor scroll and close on mobile
                  if (typeof window !== "undefined") {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    setMobileOpen(false);
                  }
                }}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
    </header>
  );
}
