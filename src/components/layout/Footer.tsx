import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ALL_SERVICES, NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white">
                M
              </div>
              <span className="text-xl font-bold">
                MHR <span className="text-brand-400">Solution</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Professional website development company in Pakistan. We build modern,
              fast, and scalable digital solutions for businesses.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-brand-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              {ALL_SERVICES.slice(0, 6).map((service) => (
                <li key={service} className="text-sm text-muted">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand-400"
                >
                  <Phone size={16} className="text-brand-500" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand-400"
                >
                  <Mail size={16} className="text-brand-500" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-brand-500" />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Website Development Company Pakistan · Web Design Agency Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}
