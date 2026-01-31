export default function Nav() {
  const links = [
    { label: "Loyihalar", href: "#loyihalar" },
    { label: "Xizmatlar", href: "#xizmatlar" },
    { label: "Jarayon", href: "#jarayon" },
    { label: "Ofislar", href: "#ofis" },
    { label: "Aloqa", href: "#aloqa" },
  ];

  return (
    <header className="relative z-30">
      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-black/5" />

      <nav className="container-shell flex items-center justify-between py-7">
        {/* ===== LEFT: LOGO ===== */}
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
            <span className="display-font text-xl font-semibold tracking-tight">
              AA
            </span>
            {/* accent dot */}
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[color:var(--color-brand-primary)] shadow-sm" />
          </div>

          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[color:var(--color-muted)]">
              architecture & development
            </p>
            <p className="display-font text-lg font-semibold text-[color:var(--color-text-main)]">
              Apex Architecture
            </p>
          </div>
        </div>

        {/* ===== CENTER: LINKS ===== */}
        <div className="relative hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-text-main)]"
            >
              <span className="relative z-10 transition-colors group-hover:text-[color:var(--color-brand-dark)]">
                {link.label}
              </span>

              {/* underline reveal */}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[color:var(--color-brand-primary)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* ===== RIGHT: CTA ===== */}
        <div className="flex items-center gap-4">
          {/* separator */}
          <span className="hidden h-8 w-px bg-black/10 lg:block" />

          <a
            href="#aloqa"
            className="group relative overflow-hidden rounded-full
                       bg-[color:var(--color-brand-primary)]
                       px-6 py-3
                       text-[11px] font-bold uppercase tracking-[0.28em] text-white
                       shadow-[0_10px_30px_-18px_rgba(17,17,17,0.45)]
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:brightness-[1.05]"
          >
            <span className="relative z-10">Konsultatsiya</span>

            {/* shine */}
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
          </a>
        </div>
      </nav>

      {/* bottom soft divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />
    </header>
  );
}
