export default function TermsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16 text-white">
      <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-400">Terms of Service</p>
        <h1 className="mb-4 text-4xl font-bold">Website Terms</h1>
        <div className="space-y-4 text-sm leading-7 text-slate-300">
          <p>
            By using this website, you agree to use the services and content responsibly and
            lawfully.
          </p>
          <p>
            The owner may update, remove, or modify content at any time without prior notice.
            Information published on the site is provided for general informational purposes only.
          </p>
          <p>
            You are responsible for any activity that occurs under your account or browser session,
            and you agree not to misuse the site, interfere with its operations, or attempt to
            bypass any security controls.
          </p>
          <p>
            The site may include third-party links, embedded media, or external services. Those
            resources are governed by their own terms and privacy practices.
          </p>
        </div>
      </div>
    </main>
  );
}
