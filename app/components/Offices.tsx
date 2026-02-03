"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";

const offices = [
  {
    city: "Toshkent",
    address: "Amir Temur shoh ko'chasi 17",
    phone: "+998 71 120 45 00",
    hours: "Du–Sh: 09:00–19:00",
    tag: "Markaziy ofis",
    metro: "Metro: Amir Temur",
  },
  {
    city: "Samarqand",
    address: "Buyuk ipak yo‘li 45",
    phone: "+998 66 310 22 10",
    hours: "Du–Sh: 09:00–18:00",
    tag: "Hududiy studio",
    metro: "Markaz: Registon yaqinida",
  },
  {
    city: "Buxoro",
    address: "Ark ko'chasi 3A",
    phone: "+998 65 223 31 21",
    hours: "Du–Sh: 09:00–18:00",
    tag: "Hududiy studio",
    metro: "Markaz: Ark kompleksi",
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
      ? "bg-[var(--color-brand-primary)] text-white border-transparent shadow-[0_10px_30px_-22px_rgba(17,17,17,0.45)]"
      : tone === "sand"
        ? "bg-[var(--color-sand)] text-[var(--color-brand-dark)] border-black/5"
        : "bg-white/70 text-[var(--color-text-main)] border-black/5";
  return <span className={`${base} ${toneCls}`}>{children}</span>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.38em] text-[var(--color-muted)]">
      {children}
    </p>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur px-4 py-4 shadow-[0_12px_34px_-26px_rgba(17,17,17,0.55)] transition-transform hover:-translate-y-0.5">
      <div className="display-font text-2xl text-[var(--color-text-main)]">
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-[var(--color-muted)]">
        {label}
      </div>
    </div>
  );
}

export default function Offices() {
  const [active, setActive] = useState(offices[0].city);

  const current = useMemo(
    () => offices.find((o) => o.city === active) || offices[0],
    [active]
  );

  // Placeholder image (keyin o'zing almashtirasan)
  const heroImg =
    "https://www.prefabrikevler.com.tr/media/page/ofis-yapilari-122748.jpg";

  return (
    <section id="ofis" className="relative py-20 sm:py-24 bg-main overflow-hidden">
      {/* Decorative background: boy, lekin yengil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[var(--color-sand)] opacity-80 blur-3xl" />
        <div className="absolute -right-28 top-12 h-[520px] w-[520px] rounded-full bg-[var(--color-brand-primary)] opacity-[0.14] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply bg-[radial-gradient(rgba(0\,0\,0\,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/5" />
      </div>

      <div className="container-shell relative z-10">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-black/10" />
            <Label>Ofislar</Label>
            <span className="h-px w-10 bg-black/10" />
          </div>

          <h2 className="display-font text-3xl sm:text-4xl md:text-5xl leading-tight text-main">
            Markaziy ofislar va hududiy studiyalar
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
            Mijozlarni qabul qilish, material kutubxonasi, loyiha muhokamasi va shartnoma jarayoni uchun qulay joylar.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          {/* LEFT: Office selector + details */}
          <div className="relative rounded-[34px] border border-black/5 bg-white/75 backdrop-blur-xl shadow-[var(--shadow-main)] overflow-hidden">
            {/* top accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg\,rgba(176\,122\,71\,0),rgba(176\,122\,71\,0.9),rgba(176\,122\,71\,0))]" />
            <div className="p-8 sm:p-10">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {offices.map((o) => (
                  <button
                    key={o.city}
                    type="button"
                    onClick={() => setActive(o.city)}
                    className={[
                      "rounded-full px-5 py-3 text-[10px] uppercase tracking-[0.26em] font-bold border transition-all",
                      "backdrop-blur",
                      o.city === active
                        ? "bg-[var(--color-brand-primary)] text-white border-transparent shadow-[0_12px_34px_-26px_rgba(17\,17\,17\,0.55)]"
                        : "bg-white/70 text-[var(--color-text-main)] border-black/10 hover:bg-white",
                    ].join(" ")}
                  >
                    {o.city}
                  </button>
                ))}
              </div>

              {/* Rich chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill tone="sand">{current.tag}</Pill>
                <Pill tone="soft">{current.hours}</Pill>
                <Pill tone="soft">{current.metro}</Pill>
              </div>

              {/* Main details */}
              <div className="mt-8 grid gap-4">
                <div className="rounded-[26px] border border-black/5 bg-[var(--color-bg-glass)] backdrop-blur p-6 shadow-[0_12px_34px_-28px_rgba(17\,17\,17\,0.55)] animate-[fadeUp_520ms_ease-out]">
                  <Label>Manzil</Label>
                  <p className="display-font mt-2 text-xl sm:text-2xl font-semibold text-[var(--color-text-main)]">
                    {current.address}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                    Ish vaqtida kelib ko‘ring — material namunalarini joyida tanlab beramiz.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-black/5 bg-white/70 backdrop-blur p-6 shadow-[0_12px_34px_-28px_rgba(17\,17\,17\,0.55)] animate-[fadeUp_600ms_ease-out]">
                    <Label>Telefon</Label>
                    <p className="display-font mt-2 text-lg font-semibold text-[var(--color-text-main)]">
                      {current.phone}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={`tel:${current.phone.replace(/\s/g, "")}`}
                        className="rounded-full bg-[var(--color-brand-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.26em] text-white shadow-[0_10px_30px_-22px_rgba(17\,17\,17\,0.45)] hover:brightness-[1.05] transition"
                      >
                        Qo‘ng‘iroq
                      </a>
                      <a
                        href="#aloqa"
                        className="rounded-full bg-white/70 border border-black/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--color-text-main)] hover:bg-white transition"
                      >
                        Yozish
                      </a>
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-black/5 bg-white/70 backdrop-blur p-6 shadow-[0_12px_34px_-28px_rgba(17\,17\,17\,0.55)] animate-[fadeUp_680ms_ease-out]">
                    <Label>Qabul</Label>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      Hujjatlar, loyiha konsepsiyasi, smeta va muddat bo‘yicha tezkor konsultatsiya.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <Stat value="30m" label="o‘rtacha uchrashuv" />
                      <Stat value="24h" label="javob vaqti" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini trust strip */}
              <div className="mt-8 rounded-[26px] border border-black/5 bg-white/70 backdrop-blur p-6 shadow-[0_12px_34px_-28px_rgba(17\,17\,17\,0.55)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <Label>Ishonch</Label>
                    <p className="display-font mt-2 text-lg font-semibold text-[var(--color-text-main)]">
                      Material kutubxonasi • Namuna paneli • Konsultatsiya zonasi
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Pill tone="soft">ISO</Pill>
                    <Pill tone="soft">QC</Pill>
                    <Pill tone="soft">Warranty</Pill>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual + showroom card + mini gallery */}
          <div className="relative rounded-[34px] overflow-hidden border border-black/5 shadow-[var(--shadow-main)] bg-white">
            {/* Big image */}
            <img
              src={heroImg}
              alt="Office showroom"
              className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
              loading="lazy"
            />
            {/* overlays (light, rich) */}
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_20%,rgba(176\,122\,71\,0.20),transparent_55%)\,linear-gradient(180deg,rgba(247\,244\,239\,0.20),rgba(17\,17\,17\,0.20))]" />
            <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(rgba(0\,0\,0\,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />

            {/* Showroom card */}
            <div className="absolute left-6 right-6 bottom-6 rounded-[28px] border border-white/30 bg-white/75 backdrop-blur-xl p-6 shadow-[0_18px_50px_-34px_rgba(17\,17\,17\,0.65)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Label>Showroom</Label>
                  <p className="display-font mt-2 text-2xl font-semibold text-[var(--color-text-main)]">
                    360° material kutubxonasi
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    Fasad, interyer, pol, yoritish va tekstura namunalari — joyida.
                  </p>
                </div>
                <Pill tone="brand">Premium</Pill>
              </div>

              {/* Mini gallery strip */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                  >
                    <img
                      src={heroImg}
                      alt=""
                      aria-hidden="true"
                      className="h-20 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,17,17,0.10))]" />
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#aloqa"
                  className="group relative overflow-hidden rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-[10px]
                             font-bold uppercase tracking-[0.26em] text-white shadow-[0_10px_30px_-22px_rgba(17\,17\,17\,0.45)]
                             transition hover:-translate-y-0.5 hover:brightness-[1.05]"
                >
                  Uchrashuv belgilash
                  <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg\,transparent\,rgba(255\,255\,255\,0.45)\,transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
                </a>

                <a
                  href="#loyihalar"
                  className="rounded-full bg-white/70 border border-black/10 px-6 py-3 text-[10px]
                             font-bold uppercase tracking-[0.26em] text-[var(--color-text-main)]
                             transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Loyihalarni ko‘rish
                </a>
              </div>
            </div>

            {/* corner badge */}
            <div className="absolute left-6 top-6">
              <Pill tone="soft">{current.city}</Pill>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for small entrance */}

    </section>
  );
}
