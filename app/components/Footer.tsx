export default function Footer() {
  const socials = [
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ];

  const links = [
    { label: "Loyihalar", href: "#loyihalar" },
    { label: "Xizmatlar", href: "#xizmatlar" },
    { label: "Jarayon", href: "#jarayon" },
    { label: "Ofislar", href: "#ofis" },
    { label: "Aloqa", href: "#aloqa" },
  ];

  return (
    <footer className="relative border-t border-black/10 bg-white/70 backdrop-blur-xl">
      {/* soft top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-black/10" />

      <div className="container-shell py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.8fr] items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
                {/* agar logoni qo‘shmoqchi bo‘lsang: public/faxr.png */}
                {/* <img
                  src="/faxr.png"
                  alt="Apex Architecture logo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                /> */}
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-brand shadow-sm" />
              </div>

              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.38em] text-[var(--color-muted)]">
                  architecture & development
                </p>
                <p className="display-font text-2xl font-semibold text-[var(--color-text-main)]">
                  Apex Architecture
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
              Arxitektura, master-plan, BIM hujjatlar va mualliflik nazorati bo‘yicha
              to‘liq servis. Natija — real topshiriladigan obyekt sifati.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["BIM", "QC Audit", "Warranty", "Author Supervision"].map((x) => (
                <span
                  key={x}
                  className="inline-flex items-center rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.26em]
                             bg-[var(--color-sand)] text-[var(--color-brand-dark)] border border-black/5"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-[var(--color-muted)]">
              Sahifalar
            </p>

            <div className="mt-5 grid gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center justify-between rounded-2xl border border-black/5 bg-white/60 px-4 py-3
                              text-xs font-bold uppercase tracking-widest text-main
                              transition hover:bg-white"
                >
                  <span>{l.label}</span>
                  <span className="text-[var(--color-brand-dark)] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social / Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-[var(--color-muted)]">
              Ijtimoiy tarmoqlar
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group relative rounded-2xl border border-black/5 bg-white/60 px-4 py-4
                              text-xs font-bold uppercase tracking-widest text-main
                              transition hover:bg-white"
                >
                  <span className="relative z-10">{s.label}</span>
                  {/* underline reveal */}
                  <span className="absolute bottom-3 left-4 right-4 h-px bg-[var(--color-brand-primary)] opacity-0 transition group-hover:opacity-60" />
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-[22px] border border-black/5 bg-white/60 p-5 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
                Aloqa
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-main)]">
                +998 71 120 45 00
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Amir Temur shoh ko‘chasi 17, Toshkent
              </p>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-7">
          <p className="text-xs uppercase tracking-widest text-dim">
            © {new Date().getFullYear()} Apex Architecture. Barcha huquqlar himoyalangan.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
            <a className="hover:text-[var(--color-brand-dark)] transition" href="#">
              Privacy
            </a>
            <a className="hover:text-[var(--color-brand-dark)] transition" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
