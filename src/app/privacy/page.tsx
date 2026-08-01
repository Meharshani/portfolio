export default function PrivacyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16 text-white">
      <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-400">Privacy Policy</p>
        <h1 className="mb-4 text-4xl font-bold">Privacy Notice</h1>
        <div className="space-y-4 text-sm leading-7 text-slate-300">
          <p>
            This site may collect limited information needed to provide contact, login, or inquiry
            functionality.
          </p>
          <p>
            Information submitted through forms or authentication flows is handled in accordance with
            the security and privacy practices of the services used to power this website.
          </p>
          <p>
            We do not sell personal information. Any information collected is used to respond to
            requests, improve the experience, and operate the platform securely.
          </p>
          <p>
            If you have questions about data handling, please use the contact information available
            on the site so the appropriate team can assist you.
          </p>
        </div>
      </div>
    </main>
  );
}
