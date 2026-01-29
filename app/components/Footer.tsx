export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/70">
      <div className="container-shell grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="display-font text-2xl font-semibold">Apex Architecture</p>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Arxitektura, master-plan va mualliflik nazorati bo'yicha to'liq
            servis.
          </p>
        </div>
        <div className="grid gap-4 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] sm:grid-cols-2">
          <span>Instagram</span>
          <span>Behance</span>
          <span>Telegram</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
