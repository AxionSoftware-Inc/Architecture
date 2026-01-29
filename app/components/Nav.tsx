export default function Nav() {
  const links = [
    { label: "Loyihalar", href: "#loyihalar" },
    { label: "Xizmatlar", href: "#xizmatlar" },
    { label: "Jarayon", href: "#jarayon" },
    { label: "Ofislar", href: "#ofis" },
    { label: "Aloqa", href: "#aloqa" },
  ];

  return (
    <header className="relative z-20">
      <nav className="container-shell flex items-center justify-between py-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
            <span className="display-font text-xl font-semibold">AA</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              architecture
            </p>
            <p className="display-font text-lg font-semibold">Apex Architecture</p>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-[color:var(--muted)] lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#aloqa"
          className="rounded-full border border-black/10 bg-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
        >
          Konsultatsiya
        </a>
      </nav>
    </header>
  );
}
