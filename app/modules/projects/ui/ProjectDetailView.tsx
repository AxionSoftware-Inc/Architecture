import Image from "next/image";
import Link from "next/link";
import type { Project } from "../model/types";
import ProjectCard from "./ProjectCard";
import Breadcrumb from "../../shared/ui/Breadcrumb";

export default function ProjectDetailView({
  project,
  related,
}: {
  project: Project;
  related: Project[];
}) {
  return (
    <main className="bg-gray-950 text-white">
      <section className="container-shell py-12 sm:py-16">
        <Breadcrumb
          items={[
            { label: "Bosh sahifa", href: "/" },
            { label: "Loyihalar", href: "/projects" },
            { label: project.title },
          ]}
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative overflow-hidden rounded-3xl border border-white/15">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-blue-300">Project detail</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{project.title}</h1>
            <p className="mt-3 text-sm text-gray-300">{project.desc}</p>

            <div className="mt-6 grid gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm">
              <p><span className="text-gray-400">Lokatsiya:</span> {project.location}</p>
              <p><span className="text-gray-400">Yil:</span> {project.year}</p>
              <p><span className="text-gray-400">Status:</span> {project.status}</p>
              <p><span className="text-gray-400">Klass:</span> {project.klass}</p>
              <p><span className="text-gray-400">Tur:</span> {project.type}</p>
              <p><span className="text-gray-400">Maydon:</span> {project.area}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Asosiy ustunliklar</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-200">
                {project.highlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#aloqa" className="rounded-full bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-amber-400">
                Konsultatsiya
              </Link>
              <Link href="/services" className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em]">
                Xizmatlar
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">O&apos;xshash loyihalar</h2>
            <Link href="/projects" className="text-xs uppercase tracking-[0.2em] text-blue-300 hover:text-blue-200">
              Barchasi
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
