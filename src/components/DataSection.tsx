export function DataSection() {
  const data = [
    {
      number: "45",
      unit: "名",
      label: "社員数"
    },
    {
      number: "12",
      unit: "年",
      label: "平均勤続年数"
    },
    {
      number: "8:2",
      unit: "",
      label: "男女比"
    },
    {
      number: "38",
      unit: "歳",
      label: "平均年齢"
    },
    {
      number: "20",
      unit: "台",
      label: "保有車両台数"
    },
    {
      number: "50",
      unit: "年",
      label: "創業からの歴史"
    }
  ];

  return (
    <section className="section-data py-12 md:py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-center mb-3 md:mb-4" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
          数字で見る原田興産
        </h2>
        <p className="text-center mb-8 md:mb-16 text-gray-600" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
          データで見る、私たちの会社
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white border-2 border-gray-300 p-6 md:p-8 text-center">
              <div className="mb-3 md:mb-4">
                <span style={{ fontSize: 'clamp(36px, 8vw, 56px)', fontWeight: '700', lineHeight: '1' }}>
                  {item.number}
                </span>
                <span className="ml-1 md:ml-2" style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '600' }}>
                  {item.unit}
                </span>
              </div>
              <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
