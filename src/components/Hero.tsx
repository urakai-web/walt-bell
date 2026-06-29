export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* TODO: 画像が必要 — ヒーロー背景画像（トラックが走っている写真など） */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <p className="text-sm font-semibold tracking-widest text-orange-400">
          24時間対応・当日配車OK
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
          届けたい「今」に、
          <br />
          応える運送会社。
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
          スポットチャーター便・企業専属配送・引越しまで。
          <br className="hidden md:block" />
          お急ぎの荷物も、毎日の配送も、WaltBellにお任せください。
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:000-0000-0000"
            className="flex items-center justify-center gap-2 rounded bg-orange-500 px-8 py-4 text-lg font-bold transition-colors hover:bg-orange-600"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            000-0000-0000
          </a>
          <a
            href="#contact"
            className="rounded border-2 border-white px-8 py-4 text-center text-lg font-bold transition-colors hover:bg-white hover:text-gray-900"
          >
            無料お見積り・お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
