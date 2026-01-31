/* eslint-disable @next/next/no-img-element */

const steps = [
  {
    title: "Brief va audit",
    description:
      "Loyihaning biznes maqsadi, hudud va me'yoriy talablarni tahlil qilamiz.",
  },
  {
    title: "Kontsept va vizualizatsiya",
    description:
      "3D modeli, material palitrasi va yorug'lik ssenariylarini yaratamiz.",
  },
  {
    title: "Loyiha hujjatlari",
    description: "BIM asosida ishchi chizmalar va smetani ishlab chiqamiz.",
  },
  {
    title: "Qurilish va nazorat",
    description:
      "Mualliflik nazorati, ekspertiza va sifat auditini olib boramiz.",
  },
];

function StepIcon({ index }: { index: number }) {
  // Minimal SVG: cheap but premium
  const common =
    "h-5 w-5 text-[var(--color-brand-dark)] opacity-90";
  if (index === 0)
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7h16M7 7v13m10-13v13M6 20h12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8 4h8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  if (index === 1)
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l9 6-9 6-9-6 9-6z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M3 10.5l9 6 9-6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (index === 2)
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3h8l2 2v16H7V3z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h6M9 13h6M9 17h4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20V7l8-4 8 4v13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9 20v-7h6v7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8 10h8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Process() {
  return (
    <section
      id="jarayon"
      className="relative overflow-hidden py-20 sm:py-24 bg-[var(--color-bg-main)]"
    >
      {/* rich background (cheap) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full bg-[var(--color-sand)] opacity-80 blur-3xl" />
        <div className="absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-[var(--color-brand-primary)] opacity-[0.14] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply bg-[radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="container-shell relative z-10">
        <div className="rounded-[34px] border border-black/5 bg-white/80 backdrop-blur-xl shadow-[var(--shadow-main)] overflow-hidden">
          {/* top shimmer line */}
          <div className="relative h-1 w-full bg-[linear-gradient(90deg,rgba(176,122,71,0),rgba(176,122,71,0.9),rgba(176,122,71,0))]">
            <div className="absolute inset-0 opacity-70 animate-[shine_2.2s_linear_infinite] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.55),transparent)]" />
          </div>

          <div className="p-10 sm:p-12">
            {/* header */}
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-[var(--color-muted)]">
                  Jarayon
                </p>
                <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl leading-tight text-[var(--color-text-main)]">
                  Dizayndan qurilishgacha bo&apos;lgan nazorat
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)]">
                  Har bir bosqichda sifat, me&apos;yor va muddat nazorat qilinadi — natija “chiroyli render”
                  emas, real topshiriladigan obyekt bo‘ladi.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-px w-14 bg-black/10" />
                <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
                  4 bosqich
                </p>
              </div>
            </div>

            {/* connector line (desktop) */}
            <div className="relative mt-10 hidden lg:block">
              <div className="absolute left-0 right-0 top-7 h-px bg-black/10" />
              <div className="absolute left-0 right-0 top-7 h-px bg-[linear-gradient(90deg,rgba(176,122,71,0),rgba(176,122,71,0.55),rgba(176,122,71,0))]" />
            </div>

            {/* steps */}
            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative rounded-[28px] border border-black/5 bg-white/70 backdrop-blur
                             p-7 shadow-[0_14px_40px_-30px_rgba(17,17,17,0.55)]
                             transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  {/* accent corner */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-sand)] opacity-70 blur-2xl" />

                  {/* top row: number + icon */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-white/75 backdrop-blur shadow-sm">
                        <StepIcon index={index} />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-brand-dark)]">
                          0{index + 1}
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                          bosqich
                        </p>
                      </div>
                    </div>

                    {/* dot */}
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--color-brand-primary)] opacity-70 group-hover:opacity-100 transition" />
                  </div>

                  <h3 className="relative display-font mt-6 text-xl font-semibold leading-tight text-[var(--color-text-main)]">
                    {step.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {step.description}
                  </p>

                  {/* footer chips */}
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.22em]
                                     bg-[var(--color-sand)] text-[var(--color-brand-dark)] border border-black/5">
                      Nazorat
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.22em]
                                     bg-white/70 text-[var(--color-text-main)] border border-black/5">
                      Sifat
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.22em]
                                     bg-white/70 text-[var(--color-text-main)] border border-black/5">
                      Muddat
                    </span>
                  </div>

                  {/* hover underline */}
                  <div className="pointer-events-none absolute inset-x-7 bottom-6 h-px bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-50 transition" />
                </div>
              ))}
            </div>

            {/* bottom summary strip */}
            <div className="mt-10 rounded-[28px] border border-black/5 bg-white/70 backdrop-blur p-7 shadow-[0_14px_40px_-30px_rgba(17,17,17,0.55)]">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
                    Natija
                  </p>
                  <p className="display-font mt-2 text-xl font-semibold text-[var(--color-text-main)]">
                    Aniq jarayon → aniq natija → topshiriladigan sifat
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.26em]
                                   bg-[var(--color-brand-primary)] text-white shadow-sm">
                    BIM
                  </span>
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.26em]
                                   bg-[var(--color-sand)] text-[var(--color-brand-dark)] border border-black/5">
                    QC Audit
                  </span>
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.26em]
                                   bg-white/70 text-[var(--color-text-main)] border border-black/10">
                    Author Supervision
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* keyframes */}

      </div>
    </section>
  );
}
