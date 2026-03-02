import Image from "next/image";

const projects = [
  {
    name: "Atlas Heights",
    location: "Toshkent, Chilonzor",
    area: "42 000 m2",
    image: "/hero/2.png",
  },
  {
    name: "Silk Avenue",
    location: "Samarqand markazi",
    area: "21 500 m2",
    image: "/hero/3.png",
  },
  {
    name: "Nexus Tech Park",
    location: "Toshkent, Yashnobod",
    area: "58 000 m2",
    image: "/hero/4.png",
  },
  {
    name: "Riverline Residence",
    location: "Buxoro",
    area: "18 900 m2",
    image: "/hero/5.png",
  },
];

export default function Projects() {
  return (
    <section id="loyihalar" className="section relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[var(--sand)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container-shell relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Portfel
            </p>
            <h2 className="display-font mt-4 text-4xl font-semibold sm:text-5xl">
              Arxitektura <span className="text-[var(--accent)]">San&apos;ati</span>
            </h2>
          </div>
          <a
            href="#aloqa"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-strong)] transition-all hover:gap-3"
          >
            Barchasini ko&apos;rish <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </a>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Main Featured Project */}
          <div className="relative overflow-hidden rounded-[40px] group h-[600px] shadow-2xl lg:h-full">
            <Image
              src="/hero/6.png"
              alt="Flagship project"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80" />

            <div className="absolute top-8 left-8">
              <span className="bg-amber-400 text-gray-900 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Flagship Project
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4 text-white/60 text-[10px] uppercase tracking-widest font-bold">
                <span className="border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">Premium Business</span>
                <span className="border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">2026</span>
              </div>
              <h3 className="display-font text-5xl font-bold text-white mb-4 leading-tight">
                Al Qasr <br /><span className="text-amber-400">Towers</span>
              </h3>
              <p className="text-sm text-gray-300 max-w-sm leading-relaxed mb-8">
                62 qavatli osmono&apos;par bino, shahar panoramasini o&apos;zgartiruvchi yangi ramz va innovatsion muhandislik cho&apos;qqisi.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors">
                Loyihani ko&apos;rish
              </button>
            </div>
          </div>

          {/* Side Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 content-start">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-[32px] bg-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-[280px]"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform transition-transform duration-500">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.location}
                  </p>
                  <h4 className="display-font text-xl font-bold mb-1">
                    {project.name}
                  </h4>
                  <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{project.area}</span>
                    <span className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
