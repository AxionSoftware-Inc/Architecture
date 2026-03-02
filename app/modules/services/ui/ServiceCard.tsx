import Image from "next/image";
import Link from "next/link";
import type { Service } from "../model/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700">{service.tag}</p>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
      </div>
    </Link>
  );
}
