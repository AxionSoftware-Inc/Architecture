import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(245,158,11,0.18),transparent_45%)]" />
      </div>

      <div className="container-shell relative z-10 grid min-h-[84vh] items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Premium Architecture
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Kelajak uchun
            <span className="block text-amber-300">yuqori darajadagi arxitektura</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Dizayn, texnik yechim va qurilish intizomini yagona tizimda birlashtiramiz.
            Natija chiroyli render emas, real topshirilgan obyekt bo&apos;ladi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#loyihalar"
              className="rounded-full bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:bg-amber-400"
            >
              Loyihalarni ko&apos;rish
            </Link>
            <Link
              href="#aloqa"
              className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white/20"
            >
              Bog&apos;lanish
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center">
            <div>
              <p className="text-2xl font-bold text-amber-300">18+</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">Yil tajriba</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-300">68</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">Loyiha</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-300">100%</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">Nazorat</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl">
          <div className="relative aspect-[4/3]">
            <Image
              src="/hero/1.png"
              alt="Skyline Center"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Featured</p>
            <h2 className="mt-2 text-2xl font-semibold">Skyline Business Centre</h2>
            <p className="mt-2 text-sm text-gray-300">Toshkent - Mirobod</p>
            <Link
              href="/projects/skyline-business-centre"
              className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-300 hover:text-amber-200"
            >
              Batafsil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
