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
    description:
      "BIM asosida ishchi chizmalar va smetani ishlab chiqamiz.",
  },
  {
    title: "Qurilish va nazorat",
    description:
      "Mualliflik nazorati, ekspertiza va sifat auditini olib boramiz.",
  },
];

export default function Process() {
  return (
    <section id="jarayon" className="section">
      <div className="container-shell">
        <div className="rounded-[32px] border border-black/10 bg-white/90 p-10 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Jarayon
              </p>
              <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl">
                Dizayndan qurilishgacha bo'lgan nazorat
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              <span className="h-[1px] w-12 bg-[color:var(--muted)]" />
              4 bosqich
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[26px] border border-black/10 bg-[color:var(--sand)] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
                  0{index + 1}
                </p>
                <h3 className="display-font mt-4 text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
