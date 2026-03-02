import type { Metadata } from "next";
import ProjectsListView from "../modules/projects/ui/ProjectsListView";

export const metadata: Metadata = {
  title: "Loyihalar | Apex Architecture",
  description: "Barcha arxitektura loyihalari: residential, business va mixed-use portfolio.",
};

export default function ProjectsPage() {
  return <ProjectsListView />;
}
