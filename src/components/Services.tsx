const services = [
  {
    id: "spot",
    title: "スポットチャーター便",
    description:
      "誤配やお急ぎの荷物を当日依頼でもお届け。「今すぐ届けたい」に対応する緊急配送サービスです。",
    features: ["当日依頼OK", "緊急対応", "誤配リカバリー"],
    image: "/images/keiban.jpg",
    imagePlaceholder: "",
  },
  {
    id: "corporate",
    title: "企業配",
    description:
      "御社の専属ドライバーとして、自社の製品・商品を毎日お届けします。委託でありながら、自社配送のような安心感を提供します。",
    features: ["専属ドライバー", "定期配送", "柔軟な対応"],
    image: "/images/corporate.jpg",
    imagePlaceholder: "",
  },
  {
    id: "moving",
    title: "引越し",
    description:
      "個人のお引越しから事務所移転まで、丁寧かつスピーディーに対応。大切な荷物を安全にお届けします。",
    features: ["個人・法人対応", "丁寧な作業", "見積り無料"],
    image: "/images/moving.jpg",
    imagePlaceholder: "",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-orange-500">SERVICE</p>
          <h2 className="mt-2 text-3xl font-bold">サービス案内</h2>
        </div>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {services.map((service) => (
            <div
              key={service.id}
              className="min-w-[80vw] snap-center overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg sm:min-w-[60vw] md:min-w-0"
            >
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="flex h-48 items-center justify-center bg-gray-100 text-sm text-gray-400">
                  {service.imagePlaceholder}
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-gray-400 md:hidden">← スワイプして確認 →</p>
      </div>
    </section>
  );
}
