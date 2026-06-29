export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-orange-400">CONTACT</p>
          <h2 className="mt-2 text-3xl font-bold">お問い合わせ</h2>
          <p className="mt-4 text-gray-400">
            お見積り・ご相談は無料です。お気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a
            href="tel:000-0000-0000"
            className="flex flex-col items-center gap-3 rounded-lg border border-gray-700 p-8 transition-colors hover:border-orange-500"
          >
            <svg className="h-10 w-10 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            <span className="text-2xl font-bold">000-0000-0000</span>
            <span className="text-sm text-gray-400">24時間受付</span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center gap-3 rounded-lg border border-gray-700 p-8 transition-colors hover:border-green-500"
          >
            {/* TODO: LINEのリンク先を設定 */}
            <svg className="h-10 w-10 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            <span className="text-lg font-bold">LINEでお見積り</span>
            <span className="text-sm text-gray-400">友だち追加で簡単お問い合わせ</span>
          </a>
        </div>

        <form className="mt-12 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-300">お名前 <span className="text-orange-400">*</span></label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300">電話番号 <span className="text-orange-400">*</span></label>
              <input
                type="tel"
                required
                className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
                placeholder="090-1234-5678"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300">メールアドレス</label>
            <input
              type="email"
              className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300">お問い合わせ種別</label>
            <select className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white focus:border-orange-500 focus:outline-none">
              <option value="">選択してください</option>
              <option value="spot">スポットチャーター便</option>
              <option value="corporate">企業配</option>
              <option value="moving">引越し</option>
              <option value="other">その他</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300">お問い合わせ内容 <span className="text-orange-400">*</span></label>
            <textarea
              required
              rows={5}
              className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
              placeholder="ご相談内容をご記入ください"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-orange-500 px-12 py-4 font-bold transition-colors hover:bg-orange-600"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
