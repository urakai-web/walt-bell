export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
        <nav className="mb-6 flex flex-wrap justify-center gap-6">
          <a href="#services" className="hover:text-gray-900">サービス</a>
          <a href="#reasons" className="hover:text-gray-900">選ばれる理由</a>
          <a href="#area" className="hover:text-gray-900">対応エリア</a>
          <a href="#company" className="hover:text-gray-900">会社概要</a>
          <a href="https://line.me/ti/p/2q_qhY6gNT" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">お問い合わせ</a>
        </nav>
        <p>&copy; {new Date().getFullYear()} 合同会社WaltBell All Rights Reserved.</p>
      </div>
    </footer>
  );
}
