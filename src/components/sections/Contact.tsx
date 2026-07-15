"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeading, AnimatedSection, AnimatedItem } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      formData.append("subject", "New website enquiry — MHR Solution");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("bot-field", "");

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (response.ok) {
        window.location.href = "https://mhrsolution.online/?success=true";
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
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
              {error && (
                <p className="mb-4 text-center font-semibold text-red-400">{error}</p>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="hidden"
                  name="subject"
                  value="New website enquiry — MHR Solution"
                />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
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
                      name="phone"
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
                    name="email"
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
                    name="message"
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
                  disabled={sending}
                >
                  {sending ? (
                    "Sending..."
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
