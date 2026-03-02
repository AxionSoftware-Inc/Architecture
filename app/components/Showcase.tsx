"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

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

// Yuqori sifatli va optimizatsiya qilingan rasmlar
const PROJECT_IMAGES = {
  skyline: "/hero/1.png",
  aurora: "/hero/2.png",
  stonepark: "/hero/3.png",
  nexus: "/hero/4.png",
  riverline: "/hero/5.png",
  atlas: "/hero/6.png",
  zenith: "/hero/1.png",
  silk: "/hero/2.png",
  gallery1: "/hero/3.png",
  gallery2: "/hero/4.png",
  gallery3: "/hero/5.png",
};

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
    image: PROJECT_IMAGES.skyline,
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
    image: PROJECT_IMAGES.aurora,
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
    image: PROJECT_IMAGES.stonepark,
    desc: "Oilaviy makon: maktab, bogcha, servis va sport zonalari.",
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
    image: PROJECT_IMAGES.nexus,
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
    image: PROJECT_IMAGES.riverline,
    desc: "Reja mantiqi, quyosh tushishi, tashqi hudud va transport qulayligi.",
  },
  {
    id: "atlas",
    title: "Atlas квартал",
    location: "Toshkent • Mirzo Ulugbek",
    year: "2026",
    status: "Sotuvda",
    klass: "Comfort",
    type: "Residential",
    area: "6 blok • 28 000 m²",
    image: PROJECT_IMAGES.atlas,
    desc: "Kundalik hayot uchun: servislar, park yolaklari, oila uchun zonalar.",
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
    image: PROJECT_IMAGES.zenith,
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
    image: PROJECT_IMAGES.silk,
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
    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] font-medium border backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[11px]";
  const toneCls =
    tone === "brand"
      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600/30 shadow-lg"
      : tone === "sand"
        ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 border-amber-200"
        : "bg-white/80 text-gray-700 border-gray-200/50";
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
        "rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.18em] font-bold border transition-all backdrop-blur-sm",
        "sm:px-4 sm:py-3 sm:text-[11px]",
        active
          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600/30 shadow-lg shadow-blue-500/20"
          : "bg-white/70 text-gray-700 border-gray-200 hover:bg-white hover:shadow-md",
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
    <div
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm
                 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white
                 md:rounded-3xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={`${p.image}`}
          alt={p.title}
          fill
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
          <Pill tone={statusTone as never}>{p.status}</Pill>
          <Pill tone="soft">{p.klass}</Pill>
        </div>

        {/* Content card */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div className="rounded-xl border border-white/20 bg-white/90 backdrop-blur-md p-4 shadow-xl sm:rounded-2xl sm:p-6">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              {p.location} • {p.year}
            </p>
            <h3 className="mt-2 text-lg font-bold text-gray-900 line-clamp-1 sm:text-xl">
              {p.title}
            </h3>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-600">{p.area}</p>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Korish →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Featured({ p }: { p: Project }) {
  const statusTone =
    p.status === "Sotuvda" ? "brand" : p.status === "Qurilishda" ? "sand" : "soft";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm
                   shadow-2xl transition-all duration-700 hover:shadow-3xl md:rounded-3xl">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#3b82f6,transparent_50%)]" />
      </div>

      <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/8]">
        <Image
          src={`${p.image}`}
          alt={p.title}
          fill
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="eager"
          sizes="100vw"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
          <Pill tone={statusTone as never}>{p.status}</Pill>
          <Pill tone="sand">{p.klass}</Pill>
          <Pill tone="soft">{p.type}</Pill>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 md:p-12">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                FEATURED • {p.location} • {p.year}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {p.title}
              </h2>
            </div>

            <p className="mb-6 text-sm text-gray-200 sm:text-base md:text-lg md:leading-relaxed">
              {p.desc}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              <Pill tone="soft">{p.area}</Pill>
              <Pill tone="soft">Premium Fasad</Pill>
              <Pill tone="soft">Signature Lobby</Pill>
              <Pill tone="soft">Smart Infrastructure</Pill>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Batafsil katalog va planlar
              </p>
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 
                               px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all 
                               hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30">
                <span className="relative z-10">Batafsil korish</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 
                              transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        group-hover:translate-x-[150%] transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
}

function GalleryCard({
  title,
  meta,
  index,
}: {
  title: string;
  meta: string;
  index: number;
}) {
  const images = [
    PROJECT_IMAGES.gallery1,
    PROJECT_IMAGES.gallery2,
    PROJECT_IMAGES.gallery3,
  ];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm
                   shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:rounded-3xl">

      <div className="relative aspect-[16/9] overflow-hidden md:aspect-[4/3]">
        <Image
          src={`${images[index]}`}
          alt={title}
          fill
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute left-4 top-4">
          <Pill tone="sand">Katalog</Pill>
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            {meta}
          </p>
          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-200">
            Batafsil malumot va fotogalereya
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const [filter, setFilter] = useState<"All" | Project["status"] | Project["klass"] | Project["type"]>("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const projects = useMemo(() => {
    if (filter === "All") return allProjects;
    return allProjects.filter(
      (p) => p.status === filter || p.klass === filter || p.type === filter
    );
  }, [filter]);

  const featured = projects[0] || allProjects[0];
  const grid = projects.slice(1, 7);

  return (
    <section id="loyihalar" className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 sm:py-16 md:py-20">

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-400/5 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/5 to-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-gray-400/5 to-gray-300/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Loyihalar Portfoliomiz
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Realizatsiya qilingan <span className="text-blue-600">loyihalar</span>
            </h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Har bir loyiha — bu innovatsiya, sifat va estetikaning uygunligi.
              Bizning ishlarimiz biz haqimizda gapiradi.
            </p>
          </div>

          <button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 
                           px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all 
                           hover:shadow-xl hover:shadow-blue-500/25 sm:w-auto">
            <span className="relative z-10">Katalogni yuklab olish</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 
                          transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>

        {/* Mobile filter toggle */}
        <div className="mt-8 flex sm:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3"
          >
            <span className="text-sm font-medium text-gray-700">
              Filter: {filter === "All" ? "Hammasi" : filter}
            </span>
            <svg
              className={`h-5 w-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Filters */}
        <div className={`mt-6 ${isFilterOpen ? "block" : "hidden"} sm:block sm:mt-8`}>
          <div className="flex flex-wrap gap-2">
            <Chip active={filter === "All"} label="Hammasi" onClick={() => setFilter("All")} />

            {/* Status filters */}
            <div className="hidden w-full border-t border-gray-200 pt-4 sm:block sm:w-auto sm:border-0 sm:pt-0">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Status:
              </span>
            </div>
            {["Sotuvda", "Qurilishda", "Topshirilgan"].map((status) => (
              <Chip
                key={status}
                active={filter === status}
                label={status}
                onClick={() => setFilter(status as never)}
              />
            ))}

            {/* Class filters */}
            <div className="hidden w-full border-t border-gray-200 pt-4 sm:block sm:w-auto sm:border-0 sm:pt-0">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Klass:
              </span>
            </div>
            {["Premium", "Business", "Comfort"].map((klass) => (
              <Chip
                key={klass}
                active={filter === klass}
                label={klass}
                onClick={() => setFilter(klass as never)}
              />
            ))}

            {/* Type filters */}
            <div className="hidden w-full border-t border-gray-200 pt-4 sm:block sm:w-auto sm:border-0 sm:pt-0">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Turi:
              </span>
            </div>
            {["Residential", "Business", "Mixed"].map((type) => (
              <Chip
                key={type}
                active={filter === type}
                label={type}
                onClick={() => setFilter(type as never)}
              />
            ))}
          </div>
        </div>

        {/* Featured Project */}
        <div className="mt-8 sm:mt-12">
          <Featured p={featured} />
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Loyihalarimizning <span className="text-blue-600">detallari</span>
            </h3>
            <p className="mt-2 text-gray-600">
              Fasadlar, interyerlar va texnik yechimlar haqida batafsil
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GalleryCard
              title="Fasad Katalogi"
              meta="Material • ritm • detal"
              index={0}
            />
            <GalleryCard
              title="Interyer Dizayni"
              meta="Lobby • umumiy zonalar"
              index={1}
            />
            <GalleryCard
              title="Plan & Funksionallik"
              meta="Reja • qiyosh • oqim"
              index={2}
            />
          </div>
        </div>

        {/* Bottom Info Strip */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-6 
                       shadow-lg sm:p-8 md:rounded-3xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Sifat Kafolati
              </p>
              <p className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">
                Har bir detal — bu sifat va mukammallik isboti
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Fasad Materiallari", "QC Audit", "Innovatsiya", "Garantiya"].map((item) => (
                <Pill key={item} tone="sand">
                  {item}
                </Pill>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 
                       text-white shadow-xl sm:grid-cols-4 sm:gap-6 sm:p-8 md:rounded-3xl">
          {[
            { value: "68", label: "Muvaffaqiyatli Loyiha" },
            { value: "240K", label: "Kvadrat Metr" },
            { value: "18+", label: "Yil Tajriba" },
            { value: "100%", label: "Mijoz Qanoatlantirish" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold sm:text-4xl md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-blue-100 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}