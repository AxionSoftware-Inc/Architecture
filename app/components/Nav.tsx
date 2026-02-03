"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";

export default function Nav() {
  const links = useMemo(
    () => [
      { label: "Loyihalar", href: "#loyihalar" },
      { label: "Xizmatlar", href: "#xizmatlar" },
      { label: "Jarayon", href: "#jarayon" },
      { label: "Ofislar", href: "#ofis" },
      { label: "Aloqa", href: "#aloqa" },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  // ESC yopish
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Smooth scroll (optional). Agar xohlamasang olib tashla.
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Light glass background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />

      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-black/5" />
      {/* bottom soft divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />

      <nav
        className="container-shell relative flex items-center justify-between py-5 sm:py-6"
        aria-label="Primary navigation"
      >
        {/* ===== LEFT: LOGO ===== */}
        <a href="#" className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm overflow-hidden">
            <img
              src="/faxr.png"
              alt="Company logo"
              className="h-full w-full object-cover"
              loading="eager"
            />
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
        </a>

        {/* ===== CENTER: LINKS (desktop) ===== */}
        <div className="relative hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavClick(link.href)}
              className="group relative text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-text-main)]"
            >
              <span className="relative z-10 transition-colors group-hover:text-[color:var(--color-brand-dark)]">
                {link.label}
              </span>
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[color:var(--color-brand-primary)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* ===== RIGHT: CTA + MOBILE TOGGLE ===== */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* separator */}
          <span className="hidden h-8 w-px bg-black/10 lg:block" />

          {/* CTA (desktop + mobile) */}
          <a
            href="#aloqa"
            onClick={onNavClick("#aloqa")}
            className="group relative overflow-hidden rounded-full
                       bg-[color:var(--color-brand-primary)]
                       px-5 py-3 sm:px-6
                       text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white
                       shadow-[0_10px_30px_-18px_rgba(17,17,17,0.45)]
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:brightness-[1.05]"
          >
            <span className="relative z-10">Konsultatsiya</span>
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 backdrop-blur
                       shadow-sm transition hover:bg-white"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* hamburger / close icon */}
            <span className="relative h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-[2px] w-full bg-[color:var(--color-text-main)] transition-transform duration-300",
                  open ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-[2px] w-full bg-[color:var(--color-text-main)] transition-opacity duration-200",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] h-[2px] w-full bg-[color:var(--color-text-main)] transition-transform duration-300",
                  open ? "translate-y-[-7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>

        {/* ===== MOBILE PANEL ===== */}
        {open && (
          <>
            {/* overlay */}
            <button
              type="button"
              aria-label="Close menu overlay"
              className="lg:hidden fixed inset-0 z-40 bg-black/20"
              onClick={() => setOpen(false)}
            />

            <div className="lg:hidden fixed left-1/2 top-[72px] z-50 w-[min(92vw,520px)] -translate-x-1/2 overflow-hidden rounded-[28px]
                            border border-black/10 bg-white/90 backdrop-blur-xl shadow-[0_30px_80px_-55px_rgba(17,17,17,0.75)]">
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.34em] text-[color:var(--color-muted)]">
                  Menu
                </p>

                <div className="mt-4 grid gap-2">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={onNavClick(link.href)}
                      className="group flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-4 py-4
                                 text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--color-text-main)]
                                 transition hover:bg-white"
                    >
                      <span>{link.label}</span>
                      <span className="text-[color:var(--color-brand-dark)] transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-black/5 bg-[color:var(--color-sand)] p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-brand-dark)] font-bold">
                    Premium konsultatsiya
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                    Loyiha, smeta va muddat bo‘yicha tezkor javob.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
