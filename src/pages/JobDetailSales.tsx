import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export function JobDetailSales() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] bg-gray-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-300"></div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-[800px]">
            <p className="mb-3 md:mb-4" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: '600', letterSpacing: '0.1em' }}>
              SALES
            </p>
            <h1 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700', lineHeight: '1.3' }}>
              営業職
            </h1>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6' }}>
              お客様との信頼関係を築き、地域の発展に貢献する仕事
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="py-4 md:py-6 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 text-sm">
              <a href="#" className="hover:opacity-70 flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                トップページに戻る
              </a>
            </div>
          </div>
        </section>

        {/* Job Description Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-center mb-8 md:mb-16" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              仕事内容
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              {/* Image */}
              <div className="bg-gray-300 aspect-[4/3]"></div>

              {/* Content */}
              <div>
                <h3 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '600' }}>
                  生コンクリートの提案営業
                </h3>
                <p className="mb-4" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                  建設会社や工務店などのお客様に対して、生コンクリートの受注営業を行います。新規開拓だけでなく、既存のお客様との関係維持・強化も重要な業務です。
                </p>
                <p className="mb-4" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                  現場の状況やニーズをヒアリングし、最適な製品や配送スケジュールを提案。お客様の課題解決をサポートします。
                </p>
                <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                  地域に密着した営業活動を通じて、小国町のインフラ整備に貢献できるやりがいのある仕事です。
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <h4 className="mb-3 md:mb-4" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                  主な業務
                </h4>
                <ul className="space-y-2" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                  <li>• 既存顧客への定期訪問</li>
                  <li>• 新規顧客の開拓</li>
                  <li>• 見積作成・受注管理</li>
                  <li>• 配送スケジュール調整</li>
                  <li>• 品質管理のサポート</li>
                </ul>
              </div>

              <div className="border-2 border-gray-300 p-6 md:p-8">
                <h4 className="mb-3 md:mb-4" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                  やりがい
                </h4>
                <ul className="space-y-2" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                  <li>• 地域の発展に貢献</li>
                  <li>• お客様との信頼関係構築</li>
                  <li>• 成果が数字に表れる</li>
                  <li>• 幅広い業界知識の習得</li>
                  <li>• チームでの目標達成</li>
                </ul>
              </div>

              <div className="border-2 border-gray-300 p-6 md:p-8">
                <h4 className="mb-3 md:mb-4" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                  身につくスキル
                </h4>
                <ul className="space-y-2" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                  <li>• 提案力・交渉力</li>
                  <li>• コミュニケーション能力</li>
                  <li>• 建設業界の知識</li>
                  <li>• スケジュール管理能力</li>
                  <li>• 問題解決力</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* One Day Schedule Section */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-center mb-4 md:mb-6" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              1日の流れ
            </h2>
            <p className="text-center mb-8 md:mb-12 text-gray-600" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
              営業職のある1日をご紹介します
            </p>

            <div className="max-w-[900px] mx-auto space-y-6 md:space-y-8">
              {/* Schedule Item */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div className="bg-gray-300 aspect-[4/3]"></div>
                <div>
                  <div className="bg-black text-white inline-block px-4 py-2 mb-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                    08:00
                  </div>
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    出社・朝礼
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                    メールチェック、1日のスケジュール確認。営業チームで情報共有を行います。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div className="bg-gray-300 aspect-[4/3] md:order-2"></div>
                <div className="md:order-1">
                  <div className="bg-black text-white inline-block px-4 py-2 mb-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                    09:00
                  </div>
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    顧客訪問（午前）
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                    建設会社や工務店を訪問。新規案件のヒアリングや見積提案を実施。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div className="bg-gray-300 aspect-[4/3]"></div>
                <div>
                  <div className="bg-black text-white inline-block px-4 py-2 mb-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                    12:00
                  </div>
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    昼休憩
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                    社員食堂または外食で休憩。同僚との情報交換の時間にも。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div className="bg-gray-300 aspect-[4/3] md:order-2"></div>
                <div className="md:order-1">
                  <div className="bg-black text-white inline-block px-4 py-2 mb-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                    13:00
                  </div>
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    顧客訪問（午後）
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                    既存顧客への定期訪問。配送スケジュールの調整や現場確認を実施。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div className="bg-gray-300 aspect-[4/3]"></div>
                <div>
                  <div className="bg-black text-white inline-block px-4 py-2 mb-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                    16:00
                  </div>
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    帰社・事務作業
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                    見積書作成、受注データ入力、翌日の訪問準備など。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                <div className="bg-gray-300 aspect-[4/3] md:order-2"></div>
                <div className="md:order-1">
                  <div className="bg-black text-white inline-block px-4 py-2 mb-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                    17:00
                  </div>
                  <h3 className="mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    退社
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                    業務報告を終えて退社。残業は少なく、ワークライフバランスを保てます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-center mb-8 md:mb-16" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              必要資格・求める人物像
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Requirements */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <h3 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '600' }}>
                  必要資格・スキル
                </h3>
                
                <div className="mb-6">
                  <h4 className="mb-3" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    必須
                  </h4>
                  <ul className="space-y-2" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}>
                    <li>• 普通自動車免許（AT可）</li>
                    <li>• 基本的なPCスキル（Word、Excel）</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3" style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>
                    歓迎
                  </h4>
                  <ul className="space-y-2" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}>
                    <li>• 営業経験（業界不問）</li>
                    <li>• 建設業界での経験</li>
                    <li>• コミュニケーション能力</li>
                  </ul>
                </div>
              </div>

              {/* Ideal Person */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <h3 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '600' }}>
                  こんな方を求めています
                </h3>
                <ul className="space-y-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}>
                  <li>• 人と話すことが好きな方</li>
                  <li>• 地域貢献に関心がある方</li>
                  <li>• 誠実で責任感のある方</li>
                  <li>• チームワークを大切にできる方</li>
                  <li>• 新しいことに挑戦する意欲がある方</li>
                  <li>• 長期的に安定して働きたい方</li>
                </ul>
              </div>
            </div>


          </div>
        </section>

        {/* Entry CTA Section */}
        <section className="section-entry relative py-16 md:py-32 bg-gray-200">
          <div className="absolute inset-0 bg-gray-300"></div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-[800px] mx-auto">
            <h2 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '700' }}>
              営業職に応募する
            </h2>
            <p className="mb-6 md:mb-10" style={{ fontSize: 'clamp(16px, 3vw, 18px)', lineHeight: '1.6' }}>
              未経験の方も大歓迎。一緒に地域の未来を築きましょう。
            </p>
            <a href="#requirements-sales">
              <Button 
                className="bg-black text-white px-10 py-4 md:px-16 md:py-6 hover:bg-gray-800"
                style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}
              >
                募集要項を見る
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
