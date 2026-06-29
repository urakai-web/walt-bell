export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* TODO: LINEの友だち追加URLを設定 */}
      <a
        href="https://line.me/ti/p/2q_qhY6gNT" target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-amber-500 py-4 text-lg font-bold text-white"
      >
        お問い合わせはこちら！
      </a>
    </div>
  );
}
