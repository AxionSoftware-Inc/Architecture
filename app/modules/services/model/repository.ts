import { serviceItems } from "./data";

export function listServices() {
  return serviceItems;
}

export function getServiceBySlug(slug: string) {
  return serviceItems.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, take = 3) {
  return serviceItems.filter((service) => service.slug !== slug).slice(0, take);
}
