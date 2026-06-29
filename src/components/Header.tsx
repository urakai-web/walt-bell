import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#">
          <img src="/images/logo.jpg" alt="WaltBell" className="h-[90px]" />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-orange-400 transition-colors">サービス</a>
            <a href="#reasons" className="hover:text-orange-400 transition-colors">選ばれる理由</a>
            <a href="#area" className="hover:text-orange-400 transition-colors">対応エリア</a>
            <a href="#company" className="hover:text-orange-400 transition-colors">会社概要</a>
          </nav>
          <a
            href="https://line.me/ti/p/2q_qhY6gNT" target="_blank" rel="noopener noreferrer"
            className="rounded bg-green-500 px-5 py-2 text-sm font-bold transition-colors hover:bg-green-600"
          >
            LINEでお問い合わせ
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-gray-800 px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3 text-sm">
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-orange-400">サービス</a>
            <a href="#reasons" onClick={() => setIsOpen(false)} className="hover:text-orange-400">選ばれる理由</a>
            <a href="#area" onClick={() => setIsOpen(false)} className="hover:text-orange-400">対応エリア</a>
            <a href="#company" onClick={() => setIsOpen(false)} className="hover:text-orange-400">会社概要</a>
            <a
              href="https://line.me/ti/p/2q_qhY6gNT" target="_blank" rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded bg-green-500 px-4 py-2 text-center font-bold hover:bg-green-600"
            >
              LINEでお問い合わせ
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
