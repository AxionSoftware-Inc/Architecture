import Image from "next/image";
import Link from "next/link";
import type { Service } from "../model/types";
import ServiceCard from "./ServiceCard";
import Breadcrumb from "../../shared/ui/Breadcrumb";

export default function ServiceDetailView({
  service,
  related,
}: {
  service: Service;
  related: Service[];
}) {
  return (
    <main className="bg-white text-gray-900">
      <section className="container-shell py-12 sm:py-16">
        <Breadcrumb
          items={[
            { label: "Bosh sahifa", href: "/" },
            { label: "Xizmatlar", href: "/services" },
            { label: service.title },
          ]}
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200">
            <div className="relative aspect-[16/10]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Service detail</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{service.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.desc}</p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Qamrov</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-700">
                {service.bullets.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Jarayon</p>
              <ol className="mt-3 grid gap-2 text-sm text-gray-700">
                {service.process.map((step, index) => (
                  <li key={step}>{index + 1}. {step}</li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#aloqa" className="rounded-full bg-blue-700 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-blue-600">
                So&apos;rov yuborish
              </Link>
              <Link href="/projects" className="rounded-full border border-gray-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em]">
                Loyihalar
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Bog&apos;liq xizmatlar</h2>
            <Link href="/services" className="text-xs uppercase tracking-[0.2em] text-blue-700 hover:text-blue-600">
              Barchasi
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
