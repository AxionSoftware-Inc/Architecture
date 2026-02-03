"use client";

/* eslint-disable @next/next/no-img-element */

const services = [
  {
    title: "Arxitektura",
    desc: "Shahar muhiti va inson ehtiyojlarini birlashtiruvchi mukammal yechimlar.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
    bullets: ["Masterplan", "Konsept", "Fasad"],
    tag: "Design",
  },
  {
    title: "Interyer Dizayn",
    desc: "Ergonomika va estetika uyg‘unligida yashash sifatini oshiruvchi makonlar.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    bullets: ["Living", "Office", "Retail"],
    tag: "Interior",
  },
  {
    title: "BIM & Hujjatlar",
    desc: "Qurilish jarayonini aniq rejalashtirish uchun raqamli egizak va chizmalar.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    bullets: ["Revit", "Smeta", "Muhandislik"],
    tag: "Technical",
  },
  {
    title: "Qurilish Nazorati",
    desc: "Loyiha qog‘ozdan hayotga ko‘chayotganda sifat va muddat kafolati.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    bullets: ["Audit", "Texnik nazorat", "Monitoring"],
    tag: "Supervision",
  },
  {
    title: "Landidshaft",
    desc: "Binoni o‘rab turgan muhit — tabiat va arxitektura dialogi.",
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800",
    bullets: ["Jamoat zonalari", "Yashil hudud", "Yoritish"],
    tag: "Environment",
  },
  {
    title: "Turnkey",
    desc: "G‘oyadan kalitgacha — barcha jarayonlarni yagona pudratchi sifatida boshqarish.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    bullets: ["Boshqaruv", "Xaridlar", "Logistika"],
    tag: "Management",
  },
];

export default function Services() {
  return (
    <section id="xizmatlar" className="relative py-24 bg-main">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-sand opacity-40 blur-[100px]" />
        <div className="absolute -right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-brand opacity-10 blur-[120px]" />
      </div>

      <div className="container-shell relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-dim font-bold">
              Ekspertiza
            </span>
            <h2 className="display-font mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight text-main">
              Bizning yondashuv — <br />
              <span className="text-brand">kompleks yechimlar</span>
            </h2>
            <p className="mt-6 text-base text-muted max-w-lg leading-relaxed">
              Arxitektura faqat chiroyli fasad emas. Bu — funksiya, iqtisod va estetikaning mukammal balansi.
            </p>
          </div>

          <a
            href="#aloqa"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white
                       px-8 py-4 text-xs font-bold uppercase tracking-widest text-main
                       transition-all hover:bg-brand hover:text-white hover:border-transparent hover:shadow-lg"
          >
            Konsultatsiya olish
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80 transition-opacity duration-300 group-hover:via-black/40 group-hover:to-black/90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                    {service.tag}
                  </span>
                  <span className="text-[12px] font-bold opacity-60">0{index + 1}</span>
                </div>

                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="display-font text-3xl font-medium leading-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100 mb-6">
                    {service.desc}
                  </p>

                  {/* Bullets */}
                  <div className="flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100">
                    {service.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider backdrop-blur-sm"
                      >
                        <span className="h-1 w-1 rounded-full bg-sand" />
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
