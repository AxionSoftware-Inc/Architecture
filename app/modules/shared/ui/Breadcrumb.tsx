import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-gray-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-gray-200">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-white" : "text-gray-300"}>{item.label}</span>
              )}
              {!last ? <span>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
