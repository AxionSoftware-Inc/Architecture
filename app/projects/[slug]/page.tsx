import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getRelatedProjects,
  listProjects,
} from "../../modules/projects/model/repository";
import ProjectDetailView from "../../modules/projects/ui/ProjectDetailView";

export function generateStaticParams() {
  return listProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Loyiha topilmadi | Apex Architecture",
      description: "So'ralgan loyiha mavjud emas.",
    };
  }

  return {
    title: `${project.title} | Apex Architecture`,
    description: `${project.location}, ${project.year}. ${project.desc}`,
  };
}

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug, 3);

  return <ProjectDetailView project={project} related={related} />;
}
