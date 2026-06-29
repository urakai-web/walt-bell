export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* TODO: LINEの友だち追加URLを設定 */}
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 bg-amber-500 py-4 text-lg font-bold text-white"
      >
        お問い合わせはこちら！
      </a>
    </div>
  );
}
