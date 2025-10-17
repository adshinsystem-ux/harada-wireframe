import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ArrowLeft } from "lucide-react";

export function FaqPage() {
  const faqCategories = [
    {
      category: "応募について",
      faqs: [
        {
          question: "未経験でも応募できますか？",
          answer: "はい、未経験の方も大歓迎です。入社後は先輩社員が丁寧に指導しますので、安心してご応募ください。職種によっては資格取得支援制度もございます。"
        },
        {
          question: "応募に必要な書類は何ですか？",
          answer: "履歴書（写真付き）と職務経歴書をご用意ください。書類選考通過後、面接時に必要な書類については別途ご連絡いたします。"
        },
        {
          question: "応募から内定までどのくらいの期間がかかりますか？",
          answer: "通常、応募から内定まで2〜3週間程度です。書類選考に約1週間、面接から内定通知まで1〜2週間を予定しています。ただし、状況により前後する場合がございます。"
        },
        {
          question: "複数の職種に同時に応募できますか？",
          answer: "申し訳ございませんが、応募は1職種ずつお願いしております。もし不合格となった場合は、別の職種への再応募が可能です。"
        },
        {
          question: "Web応募以外の方法はありますか？",
          answer: "Web応募を推奨しておりますが、郵送での応募も受け付けております。その場合は履歴書・職務経歴書を下記住所までお送りください。\n〒869-2501 熊本県阿蘇郡小国町宮原1234-5 原田興産株式会社 採用担当宛"
        }
      ]
    },
    {
      category: "選考について",
      faqs: [
        {
          question: "面接は何回ありますか？",
          answer: "通常1〜2回の面接を予定しています。1次面接は人事担当者、2次面接（必要に応じて実施）は部門責任者が担当します。"
        },
        {
          question: "面接はどこで行われますか？",
          answer: "本社（熊本県阿蘇郡小国町）で実施いたします。遠方の方で来社が難しい場合は、オンライン面接も対応可能ですのでご相談ください。"
        },
        {
          question: "面接時の服装は？",
          answer: "特に指定はございませんが、スーツまたはビジネスカジュアルでお越しください。清潔感のある服装であれば問題ございません。"
        },
        {
          question: "選考結果はいつ頃連絡がありますか？",
          answer: "書類選考、面接ともに結果は1週間以内にメールまたは電話でご連絡いたします。合否に関わらず必ずご連絡いたしますので、お待ちください。"
        },
        {
          question: "筆記試験はありますか？",
          answer: "職種によっては適性検査や簡単な筆記試験を実施する場合がございます。詳しくは面接のご案内時にお知らせいたします。"
        }
      ]
    },
    {
      category: "勤務条件について",
      faqs: [
        {
          question: "勤務時間を教えてください。",
          answer: "基本的な勤務時間は8:00〜17:00（休憩1時間、実働8時間）です。職種により若干異なる場合がございます。詳細は各職種の募集要項をご確認ください。"
        },
        {
          question: "休日はどのくらいありますか？",
          answer: "週休2日制（日曜日＋他1日）で、年間休日は105日です。GW休暇、夏季休暇、年末年始休暇があります。また、有給休暇、慶弔休暇の制度もございます。"
        },
        {
          question: "残業はどのくらいありますか？",
          answer: "職種や時期により異なりますが、月平均10〜20時間程度です。繁忙期には多少増える場合もございますが、残業代は全額支給いたします。"
        },
        {
          question: "転勤はありますか？",
          answer: "現在、事業所は本社のみとなりますので、転勤はございません。長期的に地元で働きたい方に最適な環境です。"
        },
        {
          question: "試用期間はありますか？",
          answer: "入社後3ヶ月間を試用期間としております。試用期間中も給与や待遇に変更はありません。"
        }
      ]
    },
    {
      category: "給与・福利厚生について",
      faqs: [
        {
          question: "給与はどのように決まりますか？",
          answer: "経験やスキル、保有資格などを総合的に判断して決定いたします。詳細は各職種の募集要項をご確認ください。面接時にもご相談いただけます。"
        },
        {
          question: "賞与はありますか？",
          answer: "年2回（7月・12月）支給いたします。業績や個人の成績により変動します。"
        },
        {
          question: "昇給制度はありますか？",
          answer: "年1回（4月）昇給の機会があります。勤務態度や業績、スキルアップなどを総合的に評価して決定します。"
        },
        {
          question: "社会保険は完備されていますか？",
          answer: "はい、健康保険、厚生年金、雇用保険、労災保険の各種社会保険を完備しております。"
        },
        {
          question: "どのような手当がありますか？",
          answer: "家族手当、住宅手当、通勤手当などの各種手当を支給しております。詳細は面接時にご説明いたします。"
        },
        {
          question: "退職金制度はありますか？",
          answer: "はい、退職金制度を設けております。勤続年数に応じて支給されます。"
        },
        {
          question: "資格取得支援制度はありますか？",
          answer: "業務に必要な資格取得については、受験費用の補助や資格手当の支給など、会社としてサポートいたします。"
        }
      ]
    },
    {
      category: "入社後について",
      faqs: [
        {
          question: "研修制度はありますか？",
          answer: "入社後は約1ヶ月の研修期間を設けております。会社や業界についての基礎知識から、実際の業務まで、先輩社員が丁寧に指導します。"
        },
        {
          question: "キャリアアップの機会はありますか？",
          answer: "本人の意欲と能力次第で、リーダーや管理職へのキャリアアップが可能です。定期的な面談で目標設定やキャリアプランについて相談できます。"
        },
        {
          question: "職場の雰囲気を教えてください。",
          answer: "アットホームな雰囲気で、先輩社員も気さくに接してくれます。分からないことがあれば気軽に質問できる環境です。"
        },
        {
          question: "女性も活躍していますか？",
          answer: "はい、営業職や事務職など、様々な部署で女性社員が活躍しています。男女問わず働きやすい環境づくりに努めています。"
        },
        {
          question: "社員同士の交流はありますか？",
          answer: "年1回の社員旅行や忘年会など、社員同士が交流できるイベントがあります。参加は任意ですが、多くの社員が参加しています。"
        }
      ]
    },
    {
      category: "その他",
      faqs: [
        {
          question: "会社見学は可能ですか？",
          answer: "はい、可能です。事前にご連絡いただければ、採用担当者が会社や施設をご案内いたします。お気軽にお問い合わせください。"
        },
        {
          question: "中途入社の社員は多いですか？",
          answer: "はい、当社の社員の多くは中途入社です。様々な業界・職種からの転職者が活躍しておりますので、ご安心ください。"
        },
        {
          question: "年齢制限はありますか？",
          answer: "特に年齢制限は設けておりません。意欲とやる気があれば、幅広い年齢層の方を歓迎いたします。"
        },
        {
          question: "Uターン・Iターン採用は積極的ですか？",
          answer: "はい、地元に戻って働きたい方（Uターン）や、地方で新しい生活を始めたい方（Iターン）を積極的に採用しています。"
        },
        {
          question: "選考で不合格になった場合、再応募は可能ですか？",
          answer: "はい、可能です。一定期間（6ヶ月程度）を空けていただければ、再度ご応募いただけます。"
        }
      ]
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
              FAQ
            </p>
            <h1 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700', lineHeight: '1.3' }}>
              よくある質問
            </h1>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6' }}>
              採用に関するよくある質問をまとめました
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

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-4 md:px-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 md:mb-16">
                <h2 className="mb-6 md:mb-8 pb-3 border-b-2 border-gray-800" style={{ fontSize: 'clamp(22px, 3vw, 26px)', fontWeight: '700' }}>
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border-2 border-gray-300 px-4 md:px-6">
                      <AccordionTrigger style={{ fontSize: 'clamp(15px, 2vw, 16px)', fontWeight: '600' }}>
                        Q. {faq.question}
                      </AccordionTrigger>
                      <AccordionContent style={{ fontSize: 'clamp(14px, 2vw, 15px)', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                        A. {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
            <h2 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
              その他のご質問
            </h2>
            <p className="mb-6 md:mb-8" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}>
              上記以外のご質問やご不明な点がございましたら、<br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
            <div className="bg-white border-2 border-gray-300 p-6 md:p-8 inline-block">
              <p className="mb-2" style={{ fontSize: 'clamp(14px, 2vw, 15px)', fontWeight: '600' }}>
                お問い合わせ先
              </p>
              <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', lineHeight: '1.7' }}>
                原田興産株式会社 採用担当<br />
                TEL: 0967-46-XXXX<br />
                受付時間: 平日 9:00〜17:00
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
