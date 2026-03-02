export type ProjectStatus = "Sotuvda" | "Qurilishda" | "Topshirilgan";
export type ProjectClass = "Comfort" | "Business" | "Premium";
export type ProjectType = "Residential" | "Business" | "Mixed";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  status: ProjectStatus;
  klass: ProjectClass;
  type: ProjectType;
  area: string;
  image: string;
  desc: string;
  highlights: string[];
};
