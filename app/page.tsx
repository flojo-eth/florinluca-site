const contactEmail = "contact@florinluca.ro";

const services = [
  {
    title: "Operare completă",
    desc: "Preluăm fluxul zilnic: rezervări, check-in/out, comunicare, coordonare servicii.",
  },
  {
    title: "Marketing & vânzare",
    desc: "Structură de funnel + execuție: website, conținut, SEO, ads, mesaje și follow-up.",
  },
  {
    title: "Corporate-ready",
    desc: "Pachete și livrare pentru retreat-uri, grupuri și evenimente cu standarde clare.",
  },
  {
    title: "Digitalizare & standardizare",
    desc: "Procese + instrumente pentru consistență, control și decizii mai bune.",
  },
  {
    title: "Experiență premium",
    desc: "Detalii care se simt: ritm, claritate, ospitalitate, predictibilitate.",
  },
  {
    title: "Coordonare resurse",
    desc: "Personal, furnizori, curățenie externalizată — coordonate unitar, fără haos.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit & obiective",
    desc: "Înțelegem locația, constrângerile și țintele: ocupare, mix clienți, calitate.",
  },
  {
    step: "02",
    title: "Setup operațional",
    desc: "Rutine, responsabilități, standarde, instrumente. Totul devine repetabil.",
  },
  {
    step: "03",
    title: "Lansare & optimizare",
    desc: "Pornim, măsurăm, ajustăm. Îmbunătățim constant experiența și rezultatele.",
  },
];

const outcomes = [
  "Proces clar, fără improvizații",
  "Comunicare consistentă cu oaspeții",
  "Livrare mai bună pentru corporate",
  "Standard premium, repetabil",
  "Eficiență operațională prin digitalizare",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
        {/* top bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Smoooth SRL — teaser
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1">
              Operare pensiuni
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1">
              Corporate retreats
            </span>
            <span className="hidden rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 sm:inline-flex">
              Digital-first
            </span>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Operare & administrare pensiuni,
              <span className="block text-neutral-300">fără fricțiune. Doar rezultate.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300">
              Smoooth SRL preia operarea unei locații turistice într-un mod modern:
              procese standardizate, digitalizare, comunicare impecabilă și livrare premium
              pentru leisure și corporate.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contactEmail}?subject=Smoooth%20—%20discu%C8%9Bie%20colaborare`}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-emerald-400"
              >
                Cere o discuție
              </a>

              <a
                href="#what"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/20 px-5 py-3 text-sm font-medium text-neutral-50 hover:border-neutral-700"
              >
                Vezi ce facem concret
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/35 p-5">
                <div className="text-xs text-neutral-400">Focus</div>
                <div className="mt-2 text-sm text-neutral-200">Premium leisure + corporate</div>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/35 p-5">
                <div className="text-xs text-neutral-400">Stil</div>
                <div className="mt-2 text-sm text-neutral-200">Procese + standarde + ritm</div>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/35 p-5">
                <div className="text-xs text-neutral-400">Abordare</div>
                <div className="mt-2 text-sm text-neutral-200">Digital-first, fără haos</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="text-sm font-medium text-neutral-200">Pentru cine e potrivit</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Proprietari de pensiuni / vile turistice care vor operare profesionistă, poziționare
                premium și o experiență coerentă — mai ales pentru grupuri și corporate.
              </p>

              <div className="mt-5 space-y-3">
                {outcomes.map((x) => (
                  <div key={x} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/40 text-[11px] text-emerald-300">
                      ✓
                    </span>
                    <div className="text-sm text-neutral-200">{x}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4">
                <div className="text-xs text-neutral-400">Contact</div>
                <a
                  href={`mailto:${contactEmail}?subject=Smoooth%20—%20brief%20colaborare`}
                  className="mt-1 block text-sm font-medium text-neutral-100 hover:text-neutral-50"
                >
                  {contactEmail}
                </a>
                <div className="mt-2 text-xs text-neutral-500">
                  Trimite: locație, capacitate, obiectiv (leisure/corporate), status operare.
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* WHAT */}
        <section id="what" className="mt-16 sm:mt-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">Ce facem concret</h2>
            <p className="max-w-2xl text-neutral-300">
              Teaser public (high level). Detaliile se calibrează în funcție de locație și obiectiv.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6 hover:border-neutral-700"
              >
                <div className="text-sm font-medium text-neutral-100">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-300">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-16 sm:mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Cum lucrăm</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Un flow simplu, repetabil. Scopul: control, consistență și progres măsurabil.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6"
              >
                <div className="text-xs text-neutral-400">{p.step}</div>
                <div className="mt-2 text-sm font-medium text-neutral-100">{p.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-neutral-300">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 sm:mt-20">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-8 sm:p-10">
            <h3 className="text-xl font-semibold tracking-tight">
              Vrei să vezi dacă se potrivește pentru locația ta?
            </h3>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Trimite un mesaj scurt și îți răspund cu următorii pași (ce informații avem nevoie și
              cum ar arăta o colaborare).
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contactEmail}?subject=Smoooth%20—%20solicitare%20discu%C8%9Bie&body=Salut%2C%0A%0ALoca%C8%9Bie%3A%20%0ACapacitate%3A%20%0AObiectiv%3A%20(leisure%2Fcorporate)%0AStatus%3A%20(operezi%20deja%20sau%20urmeaz%C4%83)%0A%0AMul%C8%9Bumesc`}
                className="inline-flex items-center justify-center rounded-xl bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
              >
                Scrie-ne pe email
              </a>
              <a
                href="#what"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-800 px-5 py-3 text-sm font-medium text-neutral-50 hover:border-neutral-700"
              >
                Recitește serviciile
              </a>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              Notă: acesta este un teaser. Oferta completă și materialele detaliate se trimit la cerere.
            </p>
          </div>
        </section>

        <footer className="mt-14 border-t border-neutral-900 pt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Smoooth SRL — florinluca.ro
        </footer>
      </div>
    </main>
  );
}