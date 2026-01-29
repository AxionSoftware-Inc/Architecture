export default function Contact() {
  return (
    <section id="aloqa" className="section">
      <div className="container-shell">
        <div className="grid gap-8 rounded-[36px] bg-black p-10 text-white lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Aloqa
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl">
              Loyihangizni birga boshlaymiz
            </h2>
            <p className="mt-6 text-sm leading-6 text-white/70">
              Bizga loyiha maqsadi va taxminiy maydon haqida qisqacha yozing.
              48 soat ichida konsept taklifini yuboramiz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
              <span className="rounded-full border border-white/20 px-4 py-2">
                info@apex.uz
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                +998 90 123 45 67
              </span>
            </div>
          </div>
          <div className="rounded-[28px] bg-white/10 p-6">
            <form className="grid gap-4">
              <input
                className="w-full rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/50"
                placeholder="Ism"
                type="text"
              />
              <input
                className="w-full rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/50"
                placeholder="Telefon"
                type="tel"
              />
              <textarea
                className="min-h-[120px] w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/50"
                placeholder="Loyiha haqida qisqacha"
              />
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black"
              >
                So&apos;rov yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
