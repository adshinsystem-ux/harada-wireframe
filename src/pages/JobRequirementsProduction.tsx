import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export function JobRequirementsProduction() {
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
              募集要項
            </h1>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6' }}>
              製造職
            </p>
          </div>
        </section>

        {/* Job Category Tabs */}
        <section className="py-8 md:py-12 bg-white border-b-2 border-gray-300">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <a href="#requirements-sales">
                <Button 
                  variant="outline"
                  className="border-2 border-gray-800 px-6 md:px-8 py-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}
                >
                  営業職
                </Button>
              </a>
              <a href="#requirements-driver">
                <Button 
                  variant="outline"
                  className="border-2 border-gray-800 px-6 md:px-8 py-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}
                >
                  運転手
                </Button>
              </a>
              <a href="#requirements-technical">
                <Button 
                  variant="outline"
                  className="border-2 border-gray-800 px-6 md:px-8 py-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}
                >
                  技術職
                </Button>
              </a>
              <a href="#requirements-production">
                <Button 
                  className="bg-black text-white px-6 md:px-8 py-3 hover:bg-gray-800"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}
                >
                  製造職
                </Button>
              </a>
            </div>
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

        {/* Requirements Details Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-center mb-8 md:mb-16" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              製造職 募集要項
            </h2>

            {/* Requirements Table */}
            <div className="max-w-[900px] mx-auto">
              <div className="border-2 border-gray-300">
                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>募集職種</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>製造職</p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>仕事内容</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      生コンクリートプラントでの製造業務。原材料の計量・投入、プラント設備の操作、製造データの記録・管理などを担当します。
                    </p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>雇用形態</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>中途採用</p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>給与</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p className="mb-2" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      月給 200,000円〜290,000円
                    </p>
                    <p className="text-gray-600" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', lineHeight: '1.7' }}>
                      ※経験・能力により優遇<br />
                      ※試用期間3ヶ月あり（条件変更なし）
                    </p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>賞与</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>年2回（7月・12月）</p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>昇給</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>年1回（4月）</p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>勤務時間</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      7:30〜16:30<br />
                      実働8時間（休憩60分）
                    </p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>休日休暇</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      週休2日制（日曜日、他）<br />
                      年間休日105日<br />
                      GW休暇、夏季休暇、年末年始休暇<br />
                      有給休暇、慶弔休暇
                    </p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>福利厚生</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      各種社会保険完備（健康保険、厚生年金、雇用保険、労災保険）<br />
                      退職金制度<br />
                      家族手当<br />
                      住宅手当<br />
                      通勤手当<br />
                      資格取得支援制度
                    </p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-300">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>応募資格</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p className="mb-3" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      <strong>【必須】</strong><br />
                      ・普通自動車免許（AT可）<br />
                      ・重機の操作経験がある方、または意欲がある方
                    </p>
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      <strong>【歓迎】</strong><br />
                      ・製造業での勤務経験がある方<br />
                      ・車両系建設機械の資格をお持ちの方<br />
                      ・体力に自信がある方
                    </p>
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-gray-100 p-4 md:p-6 border-b md:border-b-0 md:border-r-2 border-gray-300">
                    <h3 style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>勤務地</h3>
                  </div>
                  <div className="md:col-span-2 p-4 md:p-6">
                    <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                      熊本県阿蘇郡小国町宮原1234-5<br />
                      原田興産株式会社 本社
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Process Section */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <h2 className="text-center mb-8 md:mb-16" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              選考の流れ
            </h2>

            <div className="max-w-[800px] mx-auto space-y-6 md:space-y-8">
              <div className="bg-white border-2 border-gray-300 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                    1
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>書類選考</h3>
                </div>
                <p className="ml-14" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                  履歴書・職務経歴書による書類選考を行います。
                </p>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                    2
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>面接（1〜2回）</h3>
                </div>
                <p className="ml-14" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                  人事担当者および部門責任者との面接を実施します。
                </p>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                    3
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>内定</h3>
                </div>
                <p className="ml-14" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                  合格通知後、労働条件の確認と入社日の調整を行います。
                </p>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                    4
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}>入社</h3>
                </div>
                <p className="ml-14" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                  入社後は研修プログラムに沿って、業務をスタートします。
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <p className="text-gray-600" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                ※選考期間は応募から内定まで2〜3週間程度を予定しています。<br />
                ※選考結果は、合否に関わらずご連絡いたします。
              </p>
            </div>
          </div>
        </section>

        {/* Entry CTA Section */}
        <section className="section-entry relative py-16 md:py-32 bg-gray-200">
          <div className="absolute inset-0 bg-gray-300"></div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-[800px] mx-auto">
            <h2 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '700' }}>
              この職種に応募する
            </h2>
            <p className="mb-6 md:mb-10" style={{ fontSize: 'clamp(16px, 3vw, 18px)', lineHeight: '1.6' }}>
              未経験の方も大歓迎。あなたの挑戦をお待ちしています。
            </p>
            <a href="#entry-form">
              <Button 
                className="bg-black text-white px-10 py-4 md:px-16 md:py-6 hover:bg-gray-800"
                style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}
              >
                エントリーする
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
