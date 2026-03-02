import type { Metadata } from "next";
import ServicesListView from "../modules/services/ui/ServicesListView";

export const metadata: Metadata = {
  title: "Xizmatlar | Apex Architecture",
  description: "Arxitektura, interyer, BIM, nazorat va turnkey xizmatlar to'plami.",
};

export default function ServicesPage() {
  return <ServicesListView />;
}
