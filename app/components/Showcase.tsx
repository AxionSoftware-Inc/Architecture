"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  location: string;
  year: string;
  status: "Sotuvda" | "Qurilishda" | "Topshirilgan";
  klass: "Comfort" | "Business" | "Premium";
  type: "Residential" | "Business" | "Mixed";
  area: string;
  image: string;
  desc: string;
};

const PLACEHOLDER =
  "https://www.prefabrikevler.com.tr/media/page/ofis-yapilari-122748.jpg";

const allProjects: Project[] = [
  {
    id: "skyline",
    title: "Skyline Business Centre",
    location: "Toshkent • Mirobod",
    year: "2026",
    status: "Sotuvda",
    klass: "Business",
    type: "Business",
    area: "40 qavat • 52 000 m²",
    image: PLACEHOLDER,
    desc: "Markaziy lokatsiya, premium fasad, kuchli logistika va servis infrastruktura.",
  },
  {
    id: "aurora",
    title: "Aurora Residence",
    location: "Toshkent • Yakkasaroy",
    year: "2027",
    status: "Qurilishda",
    klass: "Premium",
    type: "Residential",
    area: "7 blok • 31 000 m²",
    image: PLACEHOLDER,
    desc: "Sokin kvartal, material palitrasi, foydali reja va yashil hudud.",
  },
  {
    id: "stonepark",
    title: "StonePark квартал",
    location: "Toshkent • Yunusobod",
    year: "2024",
    status: "Topshirilgan",
    klass: "Comfort",
    type: "Residential",
    area: "5 blok • 24 000 m²",
    image: PLACEHOLDER,
    desc: "Oilaviy makon: maktab, bog‘cha, servis va sport zonalari.",
  },
  {
    id: "nexus",
    title: "Nexus Tower",
    location: "Toshkent • Shayxontohur",
    year: "2026",
    status: "Sotuvda",
    klass: "Premium",
    type: "Mixed",
    area: "32 qavat • 44 000 m²",
    image: PLACEHOLDER,
    desc: "Mixed-use: retail + office + apartments, fasad ritmi va premium lobby.",
  },
  {
    id: "riverline",
    title: "Riverline",
    location: "Toshkent • Sergeli",
    year: "2027",
    status: "Qurilishda",
    klass: "Business",
    type: "Residential",
    area: "9 blok • 36 000 m²",
    image: PLACEHOLDER,
    desc: "Reja mantiqi, quyosh tushishi, tashqi hudud va transport qulayligi.",
  },
  {
    id: "atlas",
    title: "Atlas квартал",
    location: "Toshkent • Mirzo Ulug‘bek",
    year: "2026",
    status: "Sotuvda",
    klass: "Comfort",
    type: "Residential",
    area: "6 blok • 28 000 m²",
    image: PLACEHOLDER,
    desc: "Kundalik hayot uchun: servislar, park yo‘laklari, oila uchun zonalar.",
  },
  {
    id: "zenith",
    title: "Zenith Plaza",
    location: "Toshkent • Chilonzor",
    year: "2025",
    status: "Topshirilgan",
    klass: "Business",
    type: "Business",
    area: "18 qavat • 21 000 m²",
    image: PLACEHOLDER,
    desc: "Biznes oqimlari, parking logikasi, fasad materiallari va energiya samaradorligi.",
  },
  {
    id: "silk",
    title: "Silk Avenue",
    location: "Toshkent • Olmazor",
    year: "2027",
    status: "Qurilishda",
    klass: "Premium",
    type: "Mixed",
    area: "Retail + living • 39 000 m²",
    image: PLACEHOLDER,
    desc: "Premium retail, living, landscape — barchasi bitta konseptda.",
  },
];

function Pill({
  children,
  tone = "soft",
}: {
  children: React.ReactNode;
  tone?: "soft" | "sand" | "brand";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.26em] border backdrop-blur";
  const toneCls =
    tone === "brand"
      ? "bg-[color:var(--color-brand-primary)] text-white border-transparent shadow-[0_10px_30px_-22px_rgba(17,17,17,0.45)]"
      : tone === "sand"
      ? "bg-[color:var(--color-sand)] text-[color:var(--color-brand-dark)] border-black/5"
      : "bg-white/70 text-[color:var(--color-text-main)] border-black/5";
  return <span className={`${base} ${toneCls}`}>{children}</span>;
}

function Chip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-5 py-3 text-[10px] uppercase tracking-[0.26em] font-bold border transition-all backdrop-blur",
        active
          ? "bg-[color:var(--color-brand-primary)] text-white border-transparent shadow-[0_12px_34px_-26px_rgba(17,17,17,0.55)]"
          : "bg-white/70 text-[color:var(--color-text-main)] border-black/10 hover:bg-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const statusTone =
    p.status === "Sotuvda" ? "brand" : p.status === "Qurilishda" ? "sand" : "soft";

  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/75 backdrop-blur-xl
                 shadow-[0_18px_55px_-42px_rgba(17,17,17,0.7)]
                 transition-transform duration-300 hover:-translate-y-1 hover:bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,244,239,0.0),rgba(17,17,17,0.12))]" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Pill tone={statusTone as any}>{p.status}</Pill>
          <Pill tone="soft">{p.klass}</Pill>
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/25 bg-white/70 backdrop-blur p-4">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
            {p.location} • {p.year}
          </p>
          <p className="display-font mt-2 text-lg font-semibold text-[color:var(--color-text-main)]">
            {p.title}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-sm text-[color:var(--color-text-muted)]">{p.area}</p>
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[color:var(--color-brand-dark)]">
              Ko‘rish →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function Featured({ p }: { p: Project }) {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-[34px] border border-black/5 bg-white/80 backdrop-blur-xl
                 shadow-[var(--shadow-main)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />

        {/* rich overlay (safe) */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(176,122,71,0.22),transparent_55%),linear-gradient(180deg,rgba(247,244,239,0.05),rgba(17,17,17,0.22))]" />

        {/* badges */}
        <div className="absolute left-6 top-6 flex flex-wrap gap-2">
          <Pill tone="brand">{p.status}</Pill>
          <Pill tone="sand">{p.klass}</Pill>
          <Pill tone="soft">{p.type}</Pill>
        </div>

        {/* content */}
        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
          <div className="rounded-[28px] border border-white/25 bg-white/75 backdrop-blur-xl p-6 sm:p-7 shadow-[0_22px_70px_-52px_rgba(17,17,17,0.75)]">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-muted)]">
              Featured • {p.location} • {p.year}
            </p>

            <h3 className="display-font mt-3 text-2xl sm:text-3xl font-semibold leading-tight text-[color:var(--color-text-main)]">
              {p.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[color:var(--color-text-muted)] max-w-[70ch]">
              {p.desc}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Pill tone="soft">{p.area}</Pill>
              <Pill tone="soft">Fasad: Premium</Pill>
              <Pill tone="soft">Lobby: Signature</Pill>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.30em] text-[color:var(--color-muted)]">
                Batafsil katalog
              </span>
              <span className="text-[10px] uppercase tracking-[0.30em] font-bold text-[color:var(--color-brand-dark)]">
                Ochish →
              </span>
            </div>
          </div>
        </div>

        {/* shine */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
          <div className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] group-hover:translate-x-[120%] transition-transform duration-1000" />
        </div>
      </div>
    </a>
  );
}

function BannerCard({
  title,
  meta,
  image,
}: {
  title: string;
  meta: string;
  image: string;
}) {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/75 backdrop-blur-xl
                 shadow-[0_18px_55px_-42px_rgba(17,17,17,0.7)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/7] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,244,239,0.82),rgba(247,244,239,0.18),rgba(17,17,17,0.18))]" />
        <div className="absolute left-6 top-6">
          <Pill tone="sand">Katalog</Pill>
        </div>
        <div className="absolute bottom-6 left-6 right-6 max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-muted)]">
            {meta}
          </p>
          <p className="display-font mt-2 text-2xl font-semibold text-[color:var(--color-text-main)]">
            {title}
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
            Batafsil ko‘rish → fasad, interyer, material va detal.
          </p>
        </div>
      </div>
    </a>
  );
}

export default function Showcase() {
  const [filter, setFilter] = useState<"All" | Project["status"] | Project["klass"] | Project["type"]>("All");

  const projects = useMemo(() => {
    if (filter === "All") return allProjects;
    return allProjects.filter(
      (p) => p.status === filter || p.klass === filter || p.type === filter
    );
  }, [filter]);

  const featured = projects[0] || allProjects[0];
  const grid = projects.slice(1, 7);

  return (
    <section id="loyihalar" className="relative py-20 sm:py-24 bg-[color:var(--color-bg-main)] overflow-hidden">
      {/* safe background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[color:var(--color-sand)] opacity-80 blur-3xl" />
        <div className="absolute -right-28 top-12 h-[520px] w-[520px] rounded-full bg-[color:var(--color-brand-primary)] opacity-[0.14] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="container-shell relative z-10">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[color:var(--color-muted)]">
              Showcase
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl leading-tight text-[color:var(--color-text-main)]">
              Loyihalar vitrini — rasm, detal, natija
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[color:var(--color-text-muted)]">
              Bizning kuchimiz — ishlarimiz. Har bir loyiha: fasad, material, reja va yakuniy sifat.
            </p>
          </div>

          <a
            href="#aloqa"
            className="rounded-full bg-[color:var(--color-brand-primary)] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white
                       shadow-[0_10px_30px_-22px_rgba(17,17,17,0.45)] hover:brightness-[1.05] transition"
          >
            Katalog so‘rash
          </a>
        </div>

        {/* filters (yengil) */}
        <div className="mt-8 flex flex-wrap gap-2">
          <Chip active={filter === "All"} label="Hammasi" onClick={() => setFilter("All")} />
          <Chip active={filter === "Sotuvda"} label="Sotuvda" onClick={() => setFilter("Sotuvda")} />
          <Chip active={filter === "Qurilishda"} label="Qurilishda" onClick={() => setFilter("Qurilishda")} />
          <Chip active={filter === "Topshirilgan"} label="Topshirilgan" onClick={() => setFilter("Topshirilgan")} />
          <span className="mx-1 hidden sm:inline-block h-8 w-px bg-black/10 self-center" />
          <Chip active={filter === "Premium"} label="Premium" onClick={() => setFilter("Premium")} />
          <Chip active={filter === "Business"} label="Business" onClick={() => setFilter("Business")} />
          <Chip active={filter === "Comfort"} label="Comfort" onClick={() => setFilter("Comfort")} />
          <span className="mx-1 hidden sm:inline-block h-8 w-px bg-black/10 self-center" />
          <Chip active={filter === "Residential"} label="Residential" onClick={() => setFilter("Residential")} />
          <Chip active={filter === "Business"} label="Business type" onClick={() => setFilter("Business")} />
          <Chip active={filter === "Mixed"} label="Mixed" onClick={() => setFilter("Mixed")} />
        </div>

        {/* featured */}
        <div className="mt-10">
          <Featured p={featured} />
        </div>

        {/* grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        {/* gallery banners */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <BannerCard
            title="Fasad katalogi"
            meta="Material • ritm • detal"
            image={PLACEHOLDER}
          />
          <BannerCard
            title="Interyer uslubi"
            meta="Lobby • umumiy zonalar"
            image={PLACEHOLDER}
          />
          <BannerCard
            title="Plan & funksionallik"
            meta="Reja • quyosh • oqim"
            image={PLACEHOLDER}
          />
        </div>

        {/* bottom strip */}
        <div className="mt-10 rounded-[28px] border border-black/5 bg-white/70 backdrop-blur p-7 shadow-[0_16px_44px_-34px_rgba(17,17,17,0.6)]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[color:var(--color-muted)]">
                Eslatma
              </p>
              <p className="display-font mt-2 text-xl font-semibold text-[color:var(--color-text-main)]">
                Biz ko‘rsatgan rasm — real ish intizomi va nazorat natijasi.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Fasad", "Material", "Detal", "QC Audit"].map((x) => (
                <Pill key={x} tone="sand">
                  {x}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
