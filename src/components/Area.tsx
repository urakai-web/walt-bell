export default function Area() {
  return (
    <section id="area" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-orange-500">AREA & VEHICLE</p>
          <h2 className="mt-2 text-3xl font-bold">対応エリア・車両紹介</h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">対応エリア</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              長崎を中心に、全国への配送に対応しております。
              遠方への配送もお気軽にご相談ください。
            </p>
            <img
              src="/images/area.png"
              alt="対応エリア"
              className="mt-6 h-64 w-full rounded-lg object-contain bg-gray-50"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold">車両紹介</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              お荷物のサイズや量に合わせて、最適な車両を手配いたします。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <img src="/images/keiban.jpg" alt="軽バン" className="h-28 w-full rounded-lg object-cover" />
                <p className="mt-1 text-center text-xs text-gray-500">軽バン</p>
              </div>
              <div>
                <img src="/images/takahoro.jpg" alt="高幌車" className="h-28 w-full rounded-lg object-cover" />
                <p className="mt-1 text-center text-xs text-gray-500">高幌車</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
