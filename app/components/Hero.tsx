"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=1200",
];

function Row({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  // 3x duplicate → seamless
  const list = useMemo(() => [...images, ...images, ...images], [images]);

  return (
    <div
      className={`hero-marquee ${reverse ? "hero-marquee-reverse" : ""}`}
      style={{ ["--duration" as any]: "42s" }}
      aria-hidden="true"
    >
      {list.map((src, i) => (
        <div
          key={i}
          className="relative h-[240px] w-[360px] sm:h-[260px] sm:w-[380px] md:h-[280px] md:w-[420px]
                     flex-shrink-0 overflow-hidden rounded-[24px]
                     opacity-60 grayscale transition-all duration-500
                     hover:opacity-100 hover:grayscale-0"
        >
          <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 40);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[color:var(--color-bg-main)] pt-20">
      {/* Layer 1: Scrolling Background */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-8 opacity-20 md:opacity-30">
        <div className="-rotate-3 scale-110 transform">
          <Row images={heroImages} />
          <div className="h-8" />
          <Row images={[...heroImages].reverse()} reverse />
        </div>
      </div>

      {/* Layer 2: overlays (readability) */}
      <div className="absolute inset-0 z-10 hero-vignette" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[color:var(--color-bg-main)] via-transparent to-[color:var(--color-bg-main)]" />

      {/* Layer 3: floating decor */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="hero-float absolute -left-[10%] top-[18%] h-[520px] w-[520px] rounded-full bg-[color:var(--color-sand)] opacity-40 blur-[120px]" />
        <div className="absolute -right-[12%] bottom-[8%] h-[620px] w-[620px] rounded-full bg-[color:var(--color-brand-primary)] opacity-10 blur-[130px]" />
      </div>

      {/* Layer 4: main content */}
      <div className="container-shell relative z-20 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          {/* Text */}
          <div
            className={[
              "transition-all duration-1000",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            ].join(" ")}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/50 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-brand-primary)] hero-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[color:var(--color-brand-dark)]">
                Premium Qurilish
              </span>
            </div>

            <h1 className="display-font mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] text-[color:var(--color-text-main)]">
              Kelajak <br />
              <span className="relative inline-block">
                arxitekturasi
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[color:var(--color-brand-primary)] opacity-60"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10C50 2 150 2 298 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[color:var(--color-text-muted)] leading-relaxed">
              Biz shunchaki bino qurmaymiz — biz hayot tarzini shakllantiramiz.
              Innovatsion muhandislik va estetik mukammallik uyg‘unligi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#loyihalar"
                className="group relative overflow-hidden rounded-full bg-[color:var(--color-brand-primary)] px-10 py-5
                           text-xs font-bold uppercase tracking-[0.25em] text-white shadow-[0_16px_44px_-28px_rgba(17,17,17,0.55)]
                           transition-transform hover:-translate-y-1"
              >
                <span className="relative z-10">Loyihalar</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              </a>

              <a
                href="#aloqa"
                className="group rounded-full border border-black/10 bg-white/60 px-10 py-5 text-xs font-bold uppercase tracking-[0.25em]
                           text-[color:var(--color-text-main)] backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
              >
                Bog‘lanish
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-black/5 pt-8">
              <div>
                <p className="display-font text-3xl font-semibold text-[color:var(--color-text-main)]">
                  18+
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-muted)]">
                  Yil tajriba
                </p>
              </div>
              <div>
                <p className="display-font text-3xl font-semibold text-[color:var(--color-text-main)]">
                  68
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-muted)]">
                  Loyiha
                </p>
              </div>
              <div>
                <p className="display-font text-3xl font-semibold text-[color:var(--color-text-main)]">
                  240k
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-muted)]">
                  m² bitgan
                </p>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-brand-primary)] to-transparent opacity-20 blur-[90px] rounded-full" />

            <div className="relative rounded-[40px] border border-black/5 bg-white/70 backdrop-blur-xl p-8
                            shadow-[var(--shadow-main)] transition-transform hover:scale-[1.02] duration-500 hero-float-slow">
              <div className="relative h-[420px] overflow-hidden rounded-[32px]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400"
                  alt="Featured project"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-6 right-6">
                  <span className="backdrop-blur-md bg-black/30 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.30em] border border-white/20">
                    Top Loyiha
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="display-font text-3xl">Skyline Center</h3>
                  <p className="text-white/80 text-sm mt-2">
                    Premium klassdagi biznes markaz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local CSS: animations guaranteed */}
        <style jsx>{`
          .hero-vignette {
            background: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0) 0%,
              rgba(247, 244, 239, 1) 72%
            );
          }

          .hero-marquee {
            display: flex;
            gap: 2rem;
            width: max-content;
            animation: marquee var(--duration, 40s) linear infinite;
            will-change: transform;
          }

          .hero-marquee-reverse {
            animation-direction: reverse;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-33.333%);
            }
          }

          .hero-float {
            animation: float 7s ease-in-out infinite;
            will-change: transform;
          }

          .hero-float-slow {
            animation: float 9s ease-in-out infinite;
            will-change: transform;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-14px);
            }
          }

          .hero-pulse {
            animation: pulse 2.2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.15);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-marquee,
            .hero-float,
            .hero-float-slow,
            .hero-pulse {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
