import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getRelatedServices,
  getServiceBySlug,
  listServices,
} from "../../modules/services/model/repository";
import ServiceDetailView from "../../modules/services/ui/ServiceDetailView";

export function generateStaticParams() {
  return listServices().map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Xizmat topilmadi | Apex Architecture",
      description: "So'ralgan xizmat mavjud emas.",
    };
  }

  return {
    title: `${service.title} | Apex Architecture`,
    description: service.desc,
  };
}

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug, 3);

  return <ServiceDetailView service={service} related={related} />;
}
