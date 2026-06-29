const steps = [
  {
    number: "01",
    title: "LINEで相談",
    description: "まずはLINEで友だち追加。ご希望の日時・届け先・荷物の内容をお気軽にお送りください。",
  },
  {
    number: "02",
    title: "お見積り",
    description: "内容を確認後、お見積りをご提示します。ご不明点があればLINE上でそのままご質問いただけます。",
  },
  {
    number: "03",
    title: "配車",
    description: "お見積りにご了承いただけましたら、最適な車両を手配。当日依頼にも対応しています。",
  },
  {
    number: "04",
    title: "お届け",
    description: "ドライバーが責任を持って集荷・配送。完了後にご報告いたします。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-[#fae8d4] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-orange-500">FLOW</p>
          <h2 className="mt-2 text-3xl font-bold">ご利用の流れ</h2>
        </div>

        <div className="mt-14 space-y-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 w-0.5 grow bg-orange-300" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
