import Link from "next/link";
import { listServices } from "../model/repository";
import ServiceCard from "./ServiceCard";

export default function ServicesListView() {
  const services = listServices();

  return (
    <main className="bg-white text-gray-900">
      <section className="container-shell py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Services</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Barcha xizmatlar</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
          Loyiha bosqichining har biri uchun alohida professional xizmatlar: konseptdan topshirishgacha.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10">
          <Link href="/#aloqa" className="rounded-full bg-blue-700 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-blue-600">
            So&apos;rov yuborish
          </Link>
        </div>
      </section>
    </main>
  );
}
