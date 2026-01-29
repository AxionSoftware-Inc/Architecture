const testimonials = [
  {
    quote:
      "Apex jamoasi bilan ishlash natijasida loyiha muddatidan oldin va yuqori sifatda yakunlandi.",
    name: "Sardor Karimov",
    role: "CEO, UrbanWave",
  },
  {
    quote:
      "Konsept, landshaft va interyer bir butun ekotizim sifatida ishlangan. Natija mukammal.",
    name: "Nilufar Yoldosheva",
    role: "Investor",
  },
  {
    quote:
      "BIM monitoringi va shaffof smeta bizga aniq rejalashtirish imkonini berdi.",
    name: "Olimjon Nurmatov",
    role: "Project Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[32px] border border-black/10 bg-white p-10 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Mijozlar fikri
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl">
              Ishonchli hamkorlik - bizning asosiy kapitalimiz
            </h2>
            <p className="mt-6 text-sm leading-6 text-[color:var(--muted)]">
              Har bir loyiha uchun alohida jamoa va kurator ajratamiz. Mijozlar
              bilan doimiy ochiq muloqot - strategiyamizning markazida.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full border border-black/10 bg-[color:var(--sand)]" />
              <div>
                <p className="text-sm font-semibold">Portfolio taqdimoti</p>
                <p className="text-xs text-[color:var(--muted)]">
                  Onlayn yoki ofisda
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] border border-black/10 bg-[color:var(--sand)] p-6"
              >
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  "{item.quote}"
                </p>
                <p className="mt-4 text-sm font-semibold text-black">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
