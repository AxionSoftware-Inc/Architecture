export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-8 h-screen min-h-[800px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1))]" />
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/23/45/20/1000_F_623452068_v8rKbREhdiemnBOULvC3QK69DolVagWR.jpg"
          alt="Modern architecture"
          className="h-full w-full object-cover animate-scale-slow"
          loading="eager"
        />
      </div>
      <div className="relative container-shell z-10 w-full">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="rounded-[40px] border border-white/10 bg-black/40 p-10 text-white backdrop-blur-md shadow-2xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-white/60"></span>
              <p className="text-xs uppercase tracking-[0.35em] text-white/90">
                Premium Qurilish
              </p>
            </div>
            <h1 className="display-font mt-6 text-5xl font-semibold leading-[1.1] sm:text-6xl lg:text-7xl">
              Kelajakni <br /> <span className="text-[color:var(--sand)]">yaratamiz</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80 font-light">
              Biz shunchaki bino qurmaymiz, biz hayot tarzini shakllantiramiz.
              Modern arxitektura va innovatsion muhandislik uyg&apos;unligi.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#loyihalar"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-[color:var(--sand)]"
              >
                <span className="relative z-10">Loyihalar</span>
              </a>
              <a
                href="#aloqa"
                className="group rounded-full border border-white/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all hover:border-[color:var(--sand)] hover:bg-black/50"
              >
                Bog&apos;lanish
              </a>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 grid grid-cols-3 gap-6">
              {[
                { value: "18+", label: "Yil tajriba" },
                { value: "240k", label: "m² bitgan" },
                { value: "68", label: "Loyiha" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="display-font text-3xl font-medium text-[color:var(--sand)]">
                    {item.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-10 lg:pt-0">
            <div className="glass-card transform transition-all hover:scale-[1.02] duration-500 rounded-[32px] p-8 animate-fade-up reveal-delay-1 border-l-4 border-l-[color:var(--accent)]">
              <div className="flex justify-between items-start">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Top Loyiha
                </p>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <h3 className="display-font mt-4 text-3xl font-medium">
                Skyline Business Centre
              </h3>
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                Toshkentning qoq markazida joylashgan 40 qavatli yangi avlod biznes markazi.
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.25em] font-bold">
                <span className="text-[color:var(--accent-strong)]">Liq. 2026</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] bg-[#1a1a1a] p-8 text-white animate-fade-up reveal-delay-2 group">
              <div className="absolute top-0 right-0 p-8 opacity-10 transition-opacity group-hover:opacity-20">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Falsafa
              </p>
              <h3 className="display-font mt-4 text-2xl font-medium text-[color:var(--sand)]">
                Detallarda mukammallik
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[90%]">
                Har bir chiziq, har bir burchak va har bir material shunchaki tanlanmaydi — u his qilinadi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
