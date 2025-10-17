import { Button } from "./ui/button";

export function JobSection() {
  const jobs = [
    {
      title: "営業",
      description: "お客様との関係構築から、プロジェクトの提案まで幅広く担当します。"
    },
    {
      title: "運転手",
      description: "生コンクリートを安全に現場へ届ける、重要な役割を担います。"
    },
    {
      title: "技術",
      description: "品質管理や技術開発を通じて、製品の安全性を支えます。"
    },
    {
      title: "製造",
      description: "生コンクリートの製造工程を担い、品質を守ります。"
    }
  ];

  return (
    <section id="job" className="section-job py-12 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-center mb-3 md:mb-4" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
          職種紹介
        </h2>
        <p className="text-center mb-8 md:mb-16 text-gray-600" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
          あなたの経験を活かせる4つの仕事
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="border-2 border-gray-300">
              {/* Image Placeholder */}
              <div className="bg-gray-300 aspect-[4/3]"></div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="mb-2 md:mb-3" style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: '600' }}>
                  {job.title}
                </h3>
                <p className="mb-4 md:mb-6" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.6' }}>
                  {job.description}
                </p>
                <a href="#job-sales">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-gray-800"
                    style={{ fontSize: '14px', fontWeight: '600' }}
                  >
                    詳しく見る
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
