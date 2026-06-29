export default function Company() {
  return (
    <section id="company" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-orange-500">COMPANY</p>
          <h2 className="mt-2 text-3xl font-bold">会社概要</h2>
        </div>

        <table className="mt-14 w-full text-left">
          <tbody className="divide-y divide-gray-200">
            {[
              ["会社名", "合同会社WaltBell"],
              ["所在地", "〒000-0000 ○○県○○市○○ 0-0-0"],
              ["代表者", "○○ ○○"],
              ["設立", "○○年○○月"],
              ["事業内容", "スポットチャーター便 / 企業配送 / 引越し"],
              ["電話番号", "000-0000-0000"],
            ].map(([label, value]) => (
              <tr key={label}>
                <th className="w-1/3 py-4 text-sm font-semibold text-gray-500">{label}</th>
                <td className="py-4">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
