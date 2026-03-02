"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  listProjects,
} from "../modules/projects/model/repository";
import type { Project } from "../modules/projects/model/types";

function Chip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition",
        active
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
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

export default function Showcase() {
  const projects = listProjects();
  const [filter, setFilter] = useState<"All" | Project["status"] | Project["klass"] | Project["type"]>("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.status === filter ||
            project.klass === filter ||
            project.type === filter
        );

  const featured = filtered[0] ?? projects[0];
  const grid = filtered.slice(1, 7);

  return (
    <section id="loyihalar" className="bg-gray-50 py-16 sm:py-20">
      <div className="container-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">Portfolio</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Realizatsiya qilingan loyihalar
            </h2>
          </div>
          <Link
            href="/projects/skyline-business-centre"
            className="rounded-full border border-gray-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-900 transition hover:border-gray-400"
          >
            Flagship loyiha
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Chip active={filter === "All"} label="Hammasi" onClick={() => setFilter("All")} />
          {(["Sotuvda", "Qurilishda", "Topshirilgan"] as const).map((status) => (
            <Chip key={status} active={filter === status} label={status} onClick={() => setFilter(status)} />
          ))}
          {(["Premium", "Business", "Comfort"] as const).map((klass) => (
            <Chip key={klass} active={filter === klass} label={klass} onClick={() => setFilter(klass)} />
          ))}
        </div>

        <Link
          href={`/projects/${featured.slug}`}
          className="group mt-8 block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md"
        >
          <div className="relative aspect-[16/8]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="-mt-28 relative z-10 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-blue-200">Featured</p>
            <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{featured.title}</h3>
            <p className="mt-2 text-sm text-gray-200">{featured.desc}</p>
          </div>
        </Link>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
