const reasons = [
  {
    image: "/images/reason-today.jpeg",
    title: "「今日届けたい」に応えます",
    description: "誤配やお急ぎの荷物も、当日依頼で運びます。",
  },
  {
    image: "/images/reason-nationwide.jpeg",
    title: "長崎から全国どこでも",
    description: "長崎中心に、全国対応OK。",
  },
  {
    image: "/images/reason-line.jpeg",
    title: "LINEで完結するお手軽さ",
    description: "お見積りもご相談も、LINEで気軽にどうぞ。",
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="bg-[#fae8d4] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-orange-500">REASON</p>
          <h2 className="mt-2 text-3xl font-bold">選ばれる理由</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={reason.image}
                alt={reason.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
