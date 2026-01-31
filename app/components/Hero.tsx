"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800",
];

const Row = ({ images, reverse = false }: { images: string[]; reverse?: boolean }) => (
  <div
    className={`flex gap-8 ${reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    style={{
      animationDirection: reverse ? "reverse" : "normal",
      animationDuration: "40s",
    }}
  >
    {/* Duplicate set for seamless loop */}
    {[...images, ...images, ...images].map((src, i) => (
      <div
        key={i}
        className="relative h-[280px] w-[400px] flex-shrink-0 overflow-hidden rounded-[24px] opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
      >
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    ))}
  </div>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-bg-main)] pt-20">
      {/* Layer 1: Scrolling Background (Marquee) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-8 opacity-20 md:opacity-30">
        <div className="-rotate-3 scale-110 transform">
          <Row images={heroImages} />
          <div className="h-8" />
          <Row images={[...heroImages].reverse()} reverse />
        </div>
      </div>

      {/* Layer 2: Gradient Overlays for Readability */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg-main)_70%)]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-bg-main)] via-transparent to-[var(--color-bg-main)]" />

      {/* Layer 3: Floating Decor Elements */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--color-sand)] opacity-40 blur-[120px] animate-float" />
        <div className="absolute -right-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[var(--color-brand-primary)] opacity-10 blur-[130px]" />
      </div>

      {/* Layer 4: Main Content */}
      <div className="container-shell relative z-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/40 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[var(--color-brand-dark)]">
                Premium Qurilish
              </span>
            </div>

            <h1 className="display-font mt-8 text-6xl sm:text-7xl lg:text-8xl font-medium leading-[1.05] text-[var(--color-text-main)]">
              Kelajak <br />
              <span className="relative">
                arxitekturasi
                <svg className="absolute -bottom-2 left-0 w-full text-[var(--color-brand-primary)] opacity-60" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 150 2 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[var(--color-text-muted)] leading-relaxed">
              Biz shunchaki bino qurmaymiz — biz hayot tarzini shakllantiramiz.
              Innovatsion muhandislik va estetik mukammallik uyg‘unligi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#loyihalar"
                className="group relative overflow-hidden rounded-full bg-[var(--color-brand-primary)] px-10 py-5 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lg transition-transform hover:-translate-y-1"
              >
                <span className="relative z-10">Loyihalar</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href="#aloqa"
                className="group rounded-full border border-black/10 bg-white/50 px-10 py-5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-main)] backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
              >
                Bog‘lanish
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-16 flex gap-12 border-t border-black/5 pt-8">
              <div>
                <p className="display-font text-3xl font-semibold">18+</p>
                <p className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] mt-1">Yil tajriba</p>
              </div>
              <div>
                <p className="display-font text-3xl font-semibold">68</p>
                <p className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] mt-1">Loyiha</p>
              </div>
              <div>
                <p className="display-font text-3xl font-semibold">240k</p>
                <p className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] mt-1">m² bitgan</p>
              </div>
            </div>
          </div>

          {/* Right Card (Glassmorphism Featured Project) */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-primary)] to-transparent opacity-20 blur-[80px] rounded-full" />

            <div className="relative glass-card rounded-[40px] p-8 transition-transform hover:scale-[1.02] duration-500 animate-[float_6s_ease-in-out_infinite]">
              <div className="relative h-[400px] overflow-hidden rounded-[32px]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  alt="Featured project"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-6 right-6">
                  <span className="backdrop-blur-md bg-black/30 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    Top Loyiha
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="display-font text-3xl">Skyline Center</h3>
                  <p className="text-white/80 text-sm mt-2">Premium klassdagi biznes markaz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
