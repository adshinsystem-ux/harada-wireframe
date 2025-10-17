import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { ArrowLeft } from "lucide-react";

export function EntryForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("エントリーフォームを送信しました。担当者より追って連絡させていただきます。");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] bg-gray-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-300"></div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-[800px]">
            <p className="mb-3 md:mb-4" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: '600', letterSpacing: '0.1em' }}>
              ENTRY
            </p>
            <h1 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700', lineHeight: '1.3' }}>
              エントリーフォーム
            </h1>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6' }}>
              原田興産への応募はこちらから
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

        {/* Introduction Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 md:px-8">
            <div className="mb-8 md:mb-12">
              <p className="mb-4" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
                原田興産への応募をご検討いただき、誠にありがとうございます。<br />
                以下のフォームに必要事項をご記入の上、送信してください。
              </p>
              <p className="text-red-600" style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                ※<span className="ml-1">印の項目は必須項目です。</span>
              </p>
            </div>

            {/* Entry Form */}
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              {/* 応募職種 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  応募職種 <span className="text-red-600">※</span>
                </Label>
                <RadioGroup required>
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value="sales" id="sales" />
                    <Label htmlFor="sales" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>営業職</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value="driver" id="driver" />
                    <Label htmlFor="driver" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>運転手</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value="technical" id="technical" />
                    <Label htmlFor="technical" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>技術職</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="production" id="production" />
                    <Label htmlFor="production" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>製造職</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* お名前 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="name" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  お名前 <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="name" 
                  type="text" 
                  required 
                  placeholder="例）山田 太郎"
                  className="w-full border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* フリガナ */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="kana" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  フリガナ <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="kana" 
                  type="text" 
                  required 
                  placeholder="例）ヤマダ タロウ"
                  className="w-full border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* 生年月日 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="birthday" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  生年月日 <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="birthday" 
                  type="date" 
                  required 
                  className="w-full md:w-1/2 border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* 性別 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  性別 <span className="text-red-600">※</span>
                </Label>
                <RadioGroup required className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>男性</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>女性</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>その他</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* 郵便番号 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="postal" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  郵便番号 <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="postal" 
                  type="text" 
                  required 
                  placeholder="例）123-4567"
                  className="w-full md:w-1/2 border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* 住所 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="address" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  住所 <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="address" 
                  type="text" 
                  required 
                  placeholder="例）熊本県阿蘇郡小国町宮原1234-5"
                  className="w-full border-2 border-gray-300 p-3 mb-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
                <p className="text-gray-600" style={{ fontSize: 'clamp(12px, 1.5vw, 13px)' }}>
                  ※都道府県から番地まで正確にご記入ください
                </p>
              </div>

              {/* 電話番号 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="phone" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  電話番号 <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  required 
                  placeholder="例）090-1234-5678"
                  className="w-full md:w-1/2 border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* メールアドレス */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="email" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  メールアドレス <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="例）example@email.com"
                  className="w-full border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* 学歴 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="education" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  最終学歴 <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="education" 
                  type="text" 
                  required 
                  placeholder="例）○○大学 △△学部 卒業"
                  className="w-full border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* 職務経歴 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="career" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  職務経歴 <span className="text-red-600">※</span>
                </Label>
                <Textarea 
                  id="career" 
                  required 
                  placeholder="これまでの職務経歴を簡潔にご記入ください"
                  className="w-full border-2 border-gray-300 p-3 min-h-[150px]"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}
                />
              </div>

              {/* 保有資格 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="license" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  保有資格・免許
                </Label>
                <Textarea 
                  id="license" 
                  placeholder="保有されている資格や免許がございましたらご記入ください"
                  className="w-full border-2 border-gray-300 p-3 min-h-[100px]"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}
                />
              </div>

              {/* 志望動機 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="motivation" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  志望動機 <span className="text-red-600">※</span>
                </Label>
                <Textarea 
                  id="motivation" 
                  required 
                  placeholder="当社への志望動機をご記入ください"
                  className="w-full border-2 border-gray-300 p-3 min-h-[150px]"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}
                />
              </div>

              {/* 入社可能時期 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="available" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  入社可能時期 <span className="text-red-600">※</span>
                </Label>
                <Input 
                  id="available" 
                  type="text" 
                  required 
                  placeholder="例）即日、または○月○日以降"
                  className="w-full md:w-1/2 border-2 border-gray-300 p-3"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
                />
              </div>

              {/* その他・備考 */}
              <div className="border-2 border-gray-300 p-6 md:p-8">
                <Label htmlFor="remarks" className="mb-4 block" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  その他・備考
                </Label>
                <Textarea 
                  id="remarks" 
                  placeholder="その他、お伝えしたいことがございましたらご記入ください"
                  className="w-full border-2 border-gray-300 p-3 min-h-[100px]"
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}
                />
              </div>

              {/* 個人情報の取り扱い */}
              <div className="border-2 border-gray-300 p-6 md:p-8 bg-gray-50">
                <h3 className="mb-4" style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                  個人情報の取り扱いについて
                </h3>
                <div className="mb-6 p-4 bg-white border border-gray-300 max-h-[200px] overflow-y-auto" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', lineHeight: '1.8' }}>
                  <p className="mb-3">
                    原田興産株式会社（以下「当社」といいます）は、お客様の個人情報について、以下のとおり取り扱います。
                  </p>
                  <p className="mb-2"><strong>1. 個人情報の利用目的</strong></p>
                  <p className="mb-3">
                    ご提供いただいた個人情報は、採用選考および採用に関する連絡のためのみに利用いたします。
                  </p>
                  <p className="mb-2"><strong>2. 個人情報の第三者提供</strong></p>
                  <p className="mb-3">
                    ご本人の同意がある場合または法令に基づく場合を除き、個人情報を第三者に提供することはありません。
                  </p>
                  <p className="mb-2"><strong>3. 個人情報の管理</strong></p>
                  <p className="mb-3">
                    個人情報は適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などの防止に努めます。
                  </p>
                  <p className="mb-2"><strong>4. 個人情報の開示・訂正・削除</strong></p>
                  <p>
                    ご本人から個人情報の開示、訂正、削除等の要請があった場合は、速やかに対応いたします。
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy" required className="mt-1" />
                  <Label htmlFor="privacy" className="cursor-pointer" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6' }}>
                    個人情報の取り扱いについて同意します <span className="text-red-600">※</span>
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4 md:pt-8">
                <Button 
                  type="submit"
                  className="bg-black text-white px-12 py-4 md:px-20 md:py-6 hover:bg-gray-800"
                  style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}
                >
                  送信する
                </Button>
                <p className="mt-4 text-gray-600" style={{ fontSize: 'clamp(12px, 1.5vw, 13px)' }}>
                  ※送信後、担当者より追って連絡させていただきます。
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
