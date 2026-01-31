"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  city: string;
  rating: number; // 1..5
  quote: string;
  project: string;
  year: string;
  image: string;
};

const AVATAR =
  "https://www.prefabrikevler.com.tr/media/page/ofis-yapilari-122748.jpg";

const items: Testimonial[] = [
  {
    name: "Dilshod M.",
    role: "Biznes egasi",
    company: "Retail",
    city: "Toshkent",
    rating: 5,
    quote:
      "Eng yoqqani — jarayon ochiq: material, smeta, muddat hammasi nazoratda. Yakunda tayyor obyekt aynan renderdagi kabi chiqdi.",
    project: "Skyline Business Centre",
    year: "2026",
    image: AVATAR,
  },
  {
    name: "Nodira A.",
    role: "Investor",
    company: "Residential",
    city: "Samarqand",
    rating: 5,
    quote:
      "Reja mantiqi va yorug‘lik ssenariysi juda puxta. Uchrashuvlar tartibli, har haftalik hisobot bor — shu professional daraja.",
    project: "Aurora Residence",
    year: "2027",
    image: AVATAR,
  },
  {
    name: "Jahongir S.",
    role: "Direktor",
    company: "Office",
    city: "Buxoro",
    rating: 4,
    quote:
      "Mualliflik nazorati kuchli bo‘ldi. Mayda detallarni ham ‘o‘tib ketmaydi’. Servis bilan ishlash yengil.",
    project: "Zenith Plaza",
    year: "2025",
    image: AVATAR,
  },
  {
    name: "Madina K.",
    role: "Uy egasi",
    company: "Family",
    city: "Toshkent",
    rating: 5,
    quote:
      "Material tanlashda showroom juda yordam berdi. Tugunlar va chizmalar aniq bo‘lgani uchun ustalar ham tez ishladi.",
    project: "StonePark квартал",
    year: "2024",
    image: AVATAR,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={[
            "inline-block h-2.5 w-2.5 rounded-full",
            i < rating
              ? "bg-[color:var(--color-brand-primary)]"
              : "bg-black/10",
          ].join(" ")}
          aria-hidden="true"
        />
      ))}
      <span className="ml-2 text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
        {rating}.0
      </span>
    </div>
  );
}

function Pill({
  children,
  tone = "soft",
}: {
  children: React.ReactNode;
  tone?: "soft" | "sand" | "brand";
}) {
  const base =
    "inline-flex items-center rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.26em] border backdrop-blur";
  const toneCls =
    tone === "brand"
      ? "bg-[color:var(--color-brand-primary)] text-white border-transparent shadow-[0_10px_30px_-22px_rgba(17,17,17,0.45)]"
      : tone === "sand"
      ? "bg-[color:var(--color-sand)] text-[color:var(--color-brand-dark)] border-black/5"
      : "bg-white/70 text-[color:var(--color-text-main)] border-black/5";
  return <span className={`${base} ${toneCls}`}>{children}</span>;
}

function QuoteCard({
  t,
  active,
  onClick,
}: {
  t: Testimonial;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group text-left w-full rounded-[28px] border p-7 backdrop-blur-xl transition-all duration-300",
        "shadow-[0_16px_44px_-34px_rgba(17,17,17,0.6)]",
        active
          ? "border-transparent bg-white/90 ring-1 ring-[color:var(--color-brand-primary)]"
          : "border-black/5 bg-white/75 hover:bg-white hover:-translate-y-1",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <Stars rating={t.rating} />
        <Pill tone="sand">{t.city}</Pill>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
        “{t.quote}”
      </p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="display-font text-lg font-semibold text-[color:var(--color-text-main)]">
            {t.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
            {t.role}
            {t.company ? ` • ${t.company}` : ""}
          </p>
        </div>

        <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[color:var(--color-brand-dark)]">
          Ko‘rish →
        </span>
      </div>
    </button>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const featured = useMemo(() => items[active] ?? items[0], [active]);

  return (
    <section
      id="fikrlar"
      className="relative overflow-hidden py-20 sm:py-24 bg-[color:var(--color-bg-main)]"
    >
      {/* safe rich background (no risky gradients) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[color:var(--color-sand)] opacity-80 blur-3xl" />
        <div className="absolute -right-28 top-12 h-[520px] w-[520px] rounded-full bg-[color:var(--color-brand-primary)] opacity-[0.14] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="container-shell relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[color:var(--color-muted)]">
              Testimonials
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl leading-tight text-[color:var(--color-text-main)]">
              Mijoz fikri — eng kuchli isbot
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[color:var(--color-text-muted)]">
              Biz “chiroyli dizayn” bilan tugamaymiz: jarayon, audit, nazorat va topshirish — hammasi
              mijoz tajribasida seziladi.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Pill tone="soft">Quality Control</Pill>
            <Pill tone="soft">Weekly Report</Pill>
            <Pill tone="soft">Warranty</Pill>
          </div>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          {/* Left: Featured */}
          <div className="relative rounded-[34px] overflow-hidden border border-black/5 bg-white/80 backdrop-blur-xl shadow-[var(--shadow-main)]">
            <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,rgba(176,122,71,0),rgba(176,122,71,0.9),rgba(176,122,71,0))]" />

            <div className="p-10 sm:p-12">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.38em] text-[color:var(--color-muted)]">
                    Featured fikr
                  </p>
                  <p className="display-font mt-2 text-2xl sm:text-3xl font-semibold text-[color:var(--color-text-main)]">
                    {featured.project}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                    {featured.city} • {featured.year}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Stars rating={featured.rating} />
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 rounded-[28px] border border-black/5 bg-white/70 backdrop-blur p-7 shadow-[0_16px_44px_-34px_rgba(17,17,17,0.6)]">
                <p className="text-sm sm:text-base leading-relaxed text-[color:var(--color-text-muted)]">
                  “{featured.quote}”
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[color:var(--color-brand-primary)] shadow-sm" />
                    </div>
                    <div>
                      <p className="display-font text-lg font-semibold text-[color:var(--color-text-main)]">
                        {featured.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                        {featured.role}
                        {featured.company ? ` • ${featured.company}` : ""}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Pill tone="sand">{featured.project}</Pill>
                    <Pill tone="soft">Verified</Pill>
                  </div>
                </div>
              </div>

              {/* CTA row */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#aloqa"
                  className="group relative overflow-hidden rounded-full bg-[color:var(--color-brand-primary)] px-6 py-3 text-[10px]
                             font-bold uppercase tracking-[0.26em] text-white shadow-[0_10px_30px_-22px_rgba(17,17,17,0.45)]
                             transition hover:-translate-y-0.5 hover:brightness-[1.05]"
                >
                  Konsultatsiya
                  <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
                </a>

                <a
                  href="#loyihalar"
                  className="rounded-full bg-white/70 border border-black/10 px-6 py-3 text-[10px]
                             font-bold uppercase tracking-[0.26em] text-[color:var(--color-text-main)]
                             transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Loyihalarni ko‘rish
                </a>
              </div>
            </div>
          </div>

          {/* Right: List */}
          <div className="grid gap-6">
            {items.map((t, idx) => (
              <QuoteCard
                key={t.name + idx}
                t={t}
                active={idx === active}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
