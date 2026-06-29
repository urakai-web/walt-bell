import { useState, useEffect } from "react";

const images = ["/images/hero1.jpeg", "/images/hero2.jpeg", "/images/hero3.jpeg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-white">
      {/* デスクトップ: 従来のオーバーレイ */}
      <div className="relative hidden h-[80vh] min-h-[500px] overflow-hidden md:block">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative flex h-full items-center px-12 lg:px-24">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              届けたい「今」に、
              <br />
              応える運送会社。
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
              スポットチャーター便・企業専属配送・引越しまで。
              <br />
              お急ぎの荷物も、毎日の配送も、WaltBellにお任せください。
            </p>
            <div className="mt-8">
              <a
                href="https://line.me/ti/p/2q_qhY6gNT" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-green-500 px-8 py-4 text-lg font-bold transition-colors hover:bg-green-600"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINEで無料お見積り
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* モバイル: 画像上 + テキスト下 */}
      <div className="md:hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="bg-gray-800 px-6 py-10">
          <h1 className="text-xl font-bold leading-tight">
            届けたい「今」に、応える運送会社。
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            スポットチャーター便・企業専属配送・引越しまで。
            お急ぎの荷物も、毎日の配送も、WaltBellにお任せください。
          </p>
          <div className="mt-6">
            <a
              href="https://line.me/ti/p/2q_qhY6gNT" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded bg-green-500 px-6 py-4 font-bold transition-colors hover:bg-green-600"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで無料お見積り
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
