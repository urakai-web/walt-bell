export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-800 bg-gray-950 md:hidden">
      <a
        href="tel:000-0000-0000"
        className="flex flex-1 items-center justify-center gap-2 py-4 font-bold text-white"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.2 2.2z" />
        </svg>
        電話する
      </a>
      <a
        href="#contact"
        className="flex flex-1 items-center justify-center gap-2 bg-orange-500 py-4 font-bold text-white"
      >
        お問い合わせ
      </a>
    </div>
  );
}
