import Image from "next/image";
import Link from "next/link";
import type { Project } from "../model/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          {project.location} - {project.year}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{project.area}</p>
      </div>
    </Link>
  );
}
