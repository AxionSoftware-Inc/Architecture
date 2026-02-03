/* eslint-disable @next/next/no-img-element */

const kpis = [
  { value: "18+", label: "Yil tajriba", note: "Design-build amaliyoti" },
  { value: "240k", label: "m² topshirilgan", note: "Real obyekt natijalari" },
  { value: "68", label: "Loyihalar", note: "Residential / Business / Mixed" },
  { value: "4.9", label: "Mijoz bahosi", note: "Servis va sifat bo‘yicha" },
];

function KpiCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-black/5 bg-white/75 backdrop-blur-xl p-6
                    shadow-[0_16px_44px_-34px_rgba(17\,17\,17\,0.6)]
                    transition-transform duration-300 hover:-translate-y-1 hover:bg-white">
      {/* subtle corner accent */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-sand)] opacity-70 blur-2xl" />

      <p className="display-font text-3xl sm:text-4xl font-semibold leading-none text-main">
        {value}
      </p>

      <p className="mt-2 text-xs uppercase tracking-widest font-bold text-brand-dark">
        {label}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {note}
      </p>

      {/* hover underline */}
      <div className="pointer-events-none absolute inset-x-6 bottom-5 h-px bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-45 transition" />
    </div>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 text-xs uppercase tracking-widest
                     bg-white/70 border border-black/5 text-main backdrop-blur">
      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
      {children}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 sm:py-24 bg-[var(--color-bg-main)] overflow-hidden">
      {/* safe rich background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[var(--color-sand)] opacity-80 blur-3xl" />
        <div className="absolute -right-28 top-12 h-[520px] w-[520px] rounded-full bg-[var(--color-brand-primary)] opacity-[0.14] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(rgba(0\,0\,0\,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="container-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
          {/* LEFT editorial */}
          <div className="rounded-[34px] border border-black/5 bg-white/80 backdrop-blur-xl p-10 sm:p-12 shadow-[var(--shadow-main)]">
            <p className="text-xs uppercase tracking-widest text-dim">
              Ko‘rsatkichlar
            </p>

            <h2 className="display-font mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-main">
              Raqamlar — bu intizom natijasi
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted max-w-[62ch]">
              Katta kompaniya ko‘rinishi “ko‘p gap”dan chiqmaydi. U doimiy jarayon, nazorat
              va topshirilgan obyektlar bilan isbotlanadi.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Badge>Quality Control</Badge>
              <Badge>Material Standard</Badge>
              <Badge>Warranty</Badge>
              <Badge>BIM</Badge>
            </div>

            <div className="mt-10 rounded-[26px] border border-black/5 bg-white/70 backdrop-blur p-6 shadow-[0_16px_44px_-34px_rgba(17\,17\,17\,0.6)]">
              <p className="text-xs uppercase tracking-widest text-dim">
                Ishonch signali
              </p>
              <p className="display-font mt-2 text-xl font-semibold text-main">
                Har bir bosqichda audit va hisobot
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Dizayn → hujjat → qurilish → topshirish: bir qo‘lda boshqaruv.
              </p>
            </div>
          </div>

          {/* RIGHT KPI grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {kpis.map((k) => (
              <KpiCard key={k.label} value={k.value} label={k.label} note={k.note} />
            ))}
          </div>
        </div>

        {/* TRUST STRIP / marquee-like */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-black/5 bg-white/70 backdrop-blur shadow-[0_16px_44px_-34px_rgba(17\,17\,17\,0.6)]">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-widest text-dim">
                Hamkorlik va standartlar
              </p>
              <p className="text-xs uppercase tracking-widest font-bold text-brand-dark">
                Verified
              </p>
            </div>
          </div>

          <div className="border-t border-black/5">
            <div className="animate-marquee flex gap-6 py-4 px-6 text-xs uppercase tracking-widest font-bold text-brand-dark">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className="whitespace-nowrap">
                  QC AUDIT • AUTHOR SUPERVISION • MATERIAL STANDARD • WARRANTY • BIM DOCS
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

