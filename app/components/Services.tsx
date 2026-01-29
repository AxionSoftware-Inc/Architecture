const services = [
  {
    title: "Arxitektura konsepti",
    description:
      "Shahar kontekstini tahlil qilish, konseptual eskiz va volumetrik model.",
  },
  {
    title: "Master-plan",
    description:
      "Turar-joy va tijorat obyektlarini integratsiyalashgan hududiy reja.",
  },
  {
    title: "Interyer dizayn",
    description:
      "Premium interyer yechimlari, mebel va yorug'lik konsepsiyasi.",
  },
  {
    title: "Mualliflik nazorati",
    description:
      "Qurilish jarayonida sifati va standartlarga to'liq moslik.",
  },
];

export default function Services() {
  return (
    <section id="xizmatlar" className="section">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] bg-[color:var(--sand)] p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Xizmatlar
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl">
              Loyihalash va qurilishning to'liq sikli
            </h2>
            <p className="mt-6 text-sm leading-6 text-[color:var(--muted)]">
              Biz konseptdan tortib, qurilish va topshirishgacha bo'lgan barcha
              bosqichlarni boshqaramiz. Shuningdek, marketing renderlari va
              raqamli monitoringni taqdim etamiz.
            </p>
            <div className="mt-10 rounded-[24px] border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Keng qamrov
              </p>
              <p className="display-font mt-4 text-2xl font-semibold">
                10+ professional yonalish
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="display-font text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                  {service.description}
                </p>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-strong)]">
                  Batafsil
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
