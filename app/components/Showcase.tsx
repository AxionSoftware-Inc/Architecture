const showcaseProjects = [
    {
        id: 1,
        title: "Al Qasr Towers",
        category: "Mixed-Use",
        year: "2026",
        image: "https://as1.ftcdn.net/v2/jpg/06/23/45/20/1000_F_623452068_v8rKbREhdiemnBOULvC3QK69DolVagWR.jpg",
        description: "62 qavatli osmono'par bino, shahar panoramasini o'zgartiruvchi yangi ramz."
    },
    {
        id: 2,
        title: "Eco Valley",
        category: "Turar-joy",
        year: "2025",
        image: "https://images.unsplash.com/photo-1542332205-4da5d5c17822?auto=format&fit=crop&w=1600&q=80",
        description: "Tabiat va urbanizatsiya uyg'unligi. 12 gektarlik ekopark ichida joylashgan majmua."
    },
    {
        id: 3,
        title: "Tech Hub Center",
        category: "Ofis",
        year: "2024",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
        description: "Innovatsion kompaniyalar uchun 21-asr ofis maykoni. Smart energiya tejamkorligi."
    }
];

export default function Showcase() {
    return (
        <section className="section overflow-hidden">
            <div className="container-shell mb-8">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                    Tanlangan
                </p>
                <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl">
                    Eksklyuziv loyihalar
                </h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 md:px-[max(0px,calc((100vw-1180px)/2))] scrollbar-hide snap-x snap-mandatory">
                {showcaseProjects.map((project) => (
                    <div
                        key={project.id}
                        className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[50vw] h-[60vh] rounded-[40px] overflow-hidden group snap-center shadow-md flex-shrink-0"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                            <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-widest opacity-80">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">{project.category}</span>
                                <span>{project.year}</span>
                            </div>
                            <h3 className="display-font text-4xl md:text-5xl font-medium mb-3">{project.title}</h3>
                            <p className="max-w-md text-white/80 leading-relaxed  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                {project.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                                Batafsil <span>→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
