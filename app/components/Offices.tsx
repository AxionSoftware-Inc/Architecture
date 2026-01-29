const offices = [
  {
    city: "Toshkent",
    address: "Amir Temur shoh ko'chasi 17",
    phone: "+998 71 120 45 00",
  },
  {
    city: "Samarqand",
    address: "Buyuk ipak yoli 45",
    phone: "+998 66 310 22 10",
  },
  {
    city: "Buxoro",
    address: "Ark ko'chasi 3A",
    phone: "+998 65 223 31 21",
  },
];

export default function Offices() {
  return (
    <section id="ofis" className="section">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-black/10 bg-white p-10 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Ofislar
            </p>
            <h2 className="display-font mt-4 text-3xl font-semibold sm:text-4xl">
              Markaziy ofislar va hududiy studiyalar
            </h2>
            <div className="mt-8 grid gap-6">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-[24px] border border-black/10 bg-[color:var(--sand)] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    {office.city}
                  </p>
                  <p className="display-font mt-2 text-xl font-semibold">
                    {office.address}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {office.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Office"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Showroom
              </p>
              <p className="display-font mt-2 text-2xl font-semibold">
                360 deg material kutubxonasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
