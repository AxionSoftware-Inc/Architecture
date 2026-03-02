import { projectItems } from "./data";

export function listProjects() {
  return projectItems;
}

export function getProjectBySlug(slug: string) {
  return projectItems.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, take = 3) {
  return projectItems.filter((project) => project.slug !== slug).slice(0, take);
}
