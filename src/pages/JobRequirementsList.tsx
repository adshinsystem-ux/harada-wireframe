import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function JobRequirementsList() {
  const jobs = [
    {
      title: "営業職",
      category: "SALES",
      description: "生コンクリートの受注営業。建設会社や工務店への訪問営業、見積作成、受注管理を担当します。",
      details: [
        "お客様との信頼関係構築",
        "新規顧客の開拓",
        "配送スケジュールの調整",
        "地域に密着した営業活動"
      ],
      link: "#requirements-sales"
    },
    {
      title: "運転手",
      category: "DRIVER",
      description: "生コンクリートミキサー車を運転し、建設現場へ安全・確実に製品を届ける重要な役割です。",
      details: [
        "ミキサー車の運転・配送",
        "現場での荷卸し作業",
        "車両の日常点検・整備",
        "配送スケジュール管理"
      ],
      link: "#requirements-driver"
    },
    {
      title: "技術職",
      category: "TECHNICAL",
      description: "生コンクリートの品質管理や配合設計を担当。製品の安全性と品質を守る専門職です。",
      details: [
        "品質管理・試験業務",
        "配合設計・材料管理",
        "技術データの分析",
        "製造工程の改善提案"
      ],
      link: "#requirements-technical"
    },
    {
      title: "製造職",
      category: "PRODUCTION",
      description: "生コンクリートプラントでの製造業務。正確な計量と製造により高品質な製品を生産します。",
      details: [
        "生コンクリートの製造",
        "原材料の計量・投入",
        "プラント設備の操作",
        "製造データの記録・管理"
      ],
      link: "#requirements-production"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] bg-gray-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-300"></div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-[800px]">
            <p className="mb-3 md:mb-4" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: '600', letterSpacing: '0.1em' }}>
              REQUIREMENTS
            </p>
            <h1 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700', lineHeight: '1.3' }}>
              募集要項一覧
            </h1>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6' }}>
              あなたに合った職種を見つけてください
            </p>
          </div>
        </section>

        {/* Job List Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-center mb-3 md:mb-4" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              募集職種
            </h2>
            <p className="text-center mb-8 md:mb-16 text-gray-600" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
              4つの職種で仲間を募集しています
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {jobs.map((job, index) => (
                <div key={index} className="border-2 border-gray-300">
                  {/* Image Placeholder */}
                  <div className="bg-gray-300 aspect-[16/9]"></div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="mb-2" style={{ fontSize: 'clamp(12px, 1.5vw, 13px)', fontWeight: '600', letterSpacing: '0.1em', color: '#666' }}>
                      {job.category}
                    </p>
                    <h3 className="mb-3 md:mb-4" style={{ fontSize: 'clamp(22px, 3vw, 26px)', fontWeight: '600' }}>
                      {job.title}
                    </h3>
                    <p className="mb-4 md:mb-6" style={{ fontSize: 'clamp(14px, 2vw, 15px)', lineHeight: '1.8' }}>
                      {job.description}
                    </p>

                    {/* Details List */}
                    <div className="mb-6 md:mb-8 bg-gray-50 p-4 md:p-5">
                      <h4 className="mb-3" style={{ fontSize: 'clamp(14px, 2vw, 15px)', fontWeight: '600' }}>
                        主な業務内容
                      </h4>
                      <ul className="space-y-2">
                        {job.details.map((detail, idx) => (
                          <li key={idx} style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', lineHeight: '1.6' }}>
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href={job.link}>
                      <Button 
                        className="w-full bg-black text-white hover:bg-gray-800"
                        style={{ fontSize: '15px', fontWeight: '600', padding: '12px' }}
                      >
                        募集要項を見る
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
            <h2 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              ご不明な点がございましたら
            </h2>
            <p className="mb-6 md:mb-8" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}>
              採用に関するご質問は、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#faq-page">
                <Button 
                  variant="outline"
                  className="border-2 border-gray-800 px-8 md:px-12 py-3"
                  style={{ fontSize: '15px', fontWeight: '600' }}
                >
                  よくある質問を見る
                </Button>
              </a>
              <a href="https://harada-g.co.jp" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="border-2 border-gray-800 px-8 md:px-12 py-3"
                  style={{ fontSize: '15px', fontWeight: '600' }}
                >
                  会社案内を見る
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
