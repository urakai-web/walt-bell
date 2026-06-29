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
              関東エリアを中心に、全国への配送に対応しております。
              遠方への配送もお気軽にご相談ください。
            </p>
            {/* TODO: 画像が必要 — 対応エリアの地図画像 */}
            <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-400">
              対応エリア地図
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">車両紹介</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              お荷物のサイズや量に合わせて、最適な車両を手配いたします。
            </p>
            {/* TODO: 画像が必要 — 各車両の写真（軽バン、2tトラックなど） */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["軽バン", "1tトラック", "2tトラック", "4tトラック"].map(
                (vehicle) => (
                  <div
                    key={vehicle}
                    className="flex h-28 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-400"
                  >
                    {vehicle}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
