const projects = [
  {
    name: "Atlas Heights",
    location: "Toshkent, Chilonzor",
    area: "42 000 m2",
    image:
      "https://as1.ftcdn.net/v2/jpg/06/23/45/20/1000_F_623452068_v8rKbREhdiemnBOULvC3QK69DolVagWR.jpg",
  },
  {
    name: "Silk Avenue",
    location: "Samarqand markazi",
    area: "21 500 m2",
    image:
      "https://as1.ftcdn.net/v2/jpg/06/23/45/20/1000_F_623452068_v8rKbREhdiemnBOULvC3QK69DolVagWR.jpg",
  },
  {
    name: "Nexus Tech Park",
    location: "Toshkent, Yashnobod",
    area: "58 000 m2",
    image:
      "https://as1.ftcdn.net/v2/jpg/06/23/45/20/1000_F_623452068_v8rKbREhdiemnBOULvC3QK69DolVagWR.jpg",
  },
  {
    name: "Riverline Residence",
    location: "Buxoro",
    area: "18 900 m2",
    image:
      "https://as1.ftcdn.net/v2/jpg/06/23/45/20/1000_F_623452068_v8rKbREhdiemnBOULvC3QK69DolVagWR.jpg",
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
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="relative overflow-hidden rounded-[40px] group h-[500px]">
            <img
              src="https://as1.ftcdn.net/v2/jpg/06/23/45/20/1000_F_623452068_v8rKbREhdiemnBOULvC3QK69DolVagWR.jpg"
              alt="Flagship project"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
              <div className="flex items-center gap-4 mb-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-white/80 text-xs uppercase tracking-widest">
                <span className="border border-white/30 px-3 py-1 rounded-full">Mixed-Use</span>
                <span className="border border-white/30 px-3 py-1 rounded-full">2026</span>
              </div>
              <h3 className="display-font text-5xl font-medium text-white mb-2">
                Al Qasr Towers
              </h3>
              <p className="text-sm text-white/80 max-w-md">
                62 qavatli osmono&apos;par bino, shahar panoramasini o&apos;zgartiruvchi yangi ramz.
              </p>
            </div>
          </div>
          <div className="grid gap-6 content-start">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-[32px] bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl h-[240px]"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h4 className="display-font text-2xl font-medium translate-y-2 transition-transform group-hover:translate-y-0">
                    {project.name}
                  </h4>
                  <p className="mt-1 text-xs text-white/80 uppercase tracking-widest opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
