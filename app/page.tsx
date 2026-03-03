export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-sm text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Coming soon
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Smoooth SRL
            <span className="block text-neutral-300">
              Administrare & operare pensiuni, modern și predictibil.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
            Preluăm integral operarea unei locații turistice: rezervări, comunicare cu oaspeții,
            check-in/out, coordonare servicii, marketing și organizare de evenimente — cu procese
            standardizate și digitalizare cap-coadă.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:contact@florinluca.ro?subject=Smoooth%20—%20discu%C8%9Bie%20colaborare"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-emerald-400"
            >
              Discutăm o colaborare
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-800 px-5 py-3 text-sm font-medium text-neutral-50 hover:border-neutral-700"
            >
              Ce facem concret
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="text-sm text-neutral-300">Operare completă</div>
              <div className="mt-2 text-neutral-200">
                De la rezervări la experiența oaspeților.
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="text-sm text-neutral-300">Corporate-ready</div>
              <div className="mt-2 text-neutral-200">
                Retreat-uri, evenimente, grupuri.
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="text-sm text-neutral-300">Digital & standardizat</div>
              <div className="mt-2 text-neutral-200">
                Procese clare, control și consistență.
              </div>
            </div>
          </div>
        </header>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Ce facem concret</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Teaser public (high level). Detaliile se discută punctual, în funcție de locație.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Management rezervări & calendar",
              "Check-in / check-out, comunicare cu oaspeții",
              "Coordonare servicii & personal (inclusiv curățenie externalizată)",
              "F&B pentru grupuri și evenimente (unde se potrivește)",
              "Marketing & funnel (site, SEO, ads, conținut)",
              "Pachete corporate & organizare evenimente",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5"
              >
                <div className="text-neutral-200">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-900/30 p-8">
          <h3 className="text-xl font-semibold">Interesat de o discuție?</h3>
          <p className="mt-2 max-w-2xl text-neutral-300">
            Dacă ai o pensiune/vilă turistică și vrei operare profesionistă (sau pregătire pentru
            segmentul corporate), trimite-mi 2–3 detalii: locație, capacitate, obiectiv.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:contact@florinluca.ro?subject=Smoooth%20—%20brief%20colaborare"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
            >
              contact@florinluca.ro
            </a>
            <a
              href="https://www.linkedin.com/in/florin-luca/"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-800 px-5 py-3 text-sm font-medium text-neutral-50 hover:border-neutral-700"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn (opțional)
            </a>
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Notă: acesta este un teaser. Materialele detaliate și oferta se trimit la cerere.
          </p>
        </section>

        <footer className="mt-16 text-xs text-neutral-500">
          © {new Date().getFullYear()} Florin Luca — florinluca.ro
        </footer>
      </div>
    </main>
  );
}