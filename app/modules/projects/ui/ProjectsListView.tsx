import Link from "next/link";
import { listProjects } from "../model/repository";
import ProjectCard from "./ProjectCard";

export default function ProjectsListView() {
  const projects = listProjects();

  return (
    <main className="bg-gray-950 text-white">
      <section className="container-shell py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-blue-300">Portfolio</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Barcha loyihalar</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
          Barcha residential, business va mixed-use obyektlar bir joyda. Har bir loyiha uchun alohida detail sahifa mavjud.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10">
          <Link href="/#aloqa" className="rounded-full bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-amber-400">
            Loyiha bo&apos;yicha maslahat
          </Link>
        </div>
      </section>
    </main>
  );
}
