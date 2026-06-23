"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeading, AnimatedSection, AnimatedItem } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Firebase-ready: replace with Firestore or Cloud Function submission
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <AnimatedSection id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact Us"
          title="Get Your Free Quote Today"
          subtitle="Ready to build your website? Contact MHR Solution — the leading website development company in Pakistan."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <AnimatedItem className="lg:col-span-2">
            <div className="space-y-6">
              <GlassCard hover={false}>
                <h3 className="text-lg font-bold text-foreground">Contact Information</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="flex items-center gap-3 text-muted transition-colors hover:text-brand-400"
                    >
                      <div className="rounded-lg bg-brand-500/10 p-2 text-brand-400">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-muted">Phone</div>
                        <div className="font-medium text-foreground">{SITE.phoneDisplay}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted transition-colors hover:text-brand-400"
                    >
                      <div className="rounded-lg bg-green-500/10 p-2 text-green-400">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-muted">WhatsApp</div>
                        <div className="font-medium text-foreground">Chat with us</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-3 text-muted transition-colors hover:text-brand-400"
                    >
                      <div className="rounded-lg bg-brand-500/10 p-2 text-brand-400">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-muted">Email</div>
                        <div className="font-medium text-foreground">{SITE.email}</div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted">
                    <div className="rounded-lg bg-brand-500/10 p-2 text-brand-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted">Location</div>
                      <div className="font-medium text-foreground">{SITE.location}</div>
                    </div>
                  </li>
                </ul>
              </GlassCard>

              <Button
                href={SITE.whatsapp}
                size="lg"
                className="w-full bg-green-600 hover:from-green-500 hover:to-green-600 shadow-green-500/25"
              >
                <MessageCircle size={20} />
                WhatsApp Us Now
              </Button>
            </div>
          </AnimatedItem>

          <AnimatedItem className="lg:col-span-3">
            <GlassCard hover={false} className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "sent" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
