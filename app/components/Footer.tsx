import Link from "next/link";

const navLinks = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Loyihalar", href: "/#loyihalar" },
  { label: "Xizmatlar", href: "/#xizmatlar" },
  { label: "Aloqa", href: "/#aloqa" },
];

const serviceLinks = [
  { label: "Arxitektura", href: "/services/arxitektura" },
  { label: "Interyer Dizayn", href: "/services/interyer-dizayn" },
  { label: "BIM va Hujjatlar", href: "/services/bim-va-hujjatlar" },
  { label: "Qurilish Nazorati", href: "/services/qurilish-nazorati" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-gray-950 text-gray-200">
      <div className="container-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-white">Apex Architecture</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Dizayndan topshirishgacha bo&apos;lgan to&apos;liq arxitektura va qurilish nazorati.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">Sahifalar</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">Xizmatlar</p>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">Aloqa</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>+998 90 123 45 67</p>
              <p>info@apex.uz</p>
              <p>Toshkent shahri, Yunusobod tumani</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-gray-500">
          {new Date().getFullYear()} Apex Architecture. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
