import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";

/** Solid pine top bar, shared across all (site) pages. */
export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-pine/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] py-4">
        <Link
          href="/"
          className="flex flex-col leading-none text-card-2 no-underline"
        >
          <span className="font-serif text-[28px] font-bold tracking-[0.5px]">
            Amonte
          </span>
          <span className="mt-[3px] text-[9.5px] uppercase tracking-[3.5px] opacity-75">
            Pensiune montană
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-[clamp(14px,2vw,28px)]">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden text-sm font-medium text-paper/90 no-underline hover:text-paper sm:inline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/rezerva-acum"
            className="rounded-full bg-paper px-5 py-2.5 text-[13.5px] font-semibold text-pine no-underline hover:bg-card-2"
          >
            Rezervă
          </Link>
        </div>
      </nav>
    </header>
  );
}
