const stats = [
  { value: "26", label: "Jamoa a'zolari" },
  { value: "12", label: "Xalqaro hamkor" },
  { value: "94%", label: "Mijoz qoniqishi" },
  { value: "7", label: "Shahar boyicha obyekt" },
];

export default function Stats() {
  return (
    <section className="section">
      <div className="container-shell">
        <div className="grid gap-10 rounded-[32px] border border-black/10 bg-white/80 p-10 shadow-sm backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Biz haqimizda
              </p>
              <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl">
                Yirik qurilishlarda ishonchli hamkor
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[color:var(--muted)]">
              Har bir loyiha uchun shaxsiy arxitektura konsepsiyasi, shaffof smeta
              va nazoratning raqamli tizimi. Loyihalarimiz shahar
              infratuzilmasini zamonaviylashtiradi.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-black/10 bg-[color:var(--sand)] p-6 text-center"
              >
                <p className="display-font text-3xl font-semibold">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
