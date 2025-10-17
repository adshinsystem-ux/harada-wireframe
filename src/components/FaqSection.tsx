import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "未経験でも応募できますか？",
      answer: "はい、未経験の方も大歓迎です。入社後は先輩社員が丁寧に指導しますので、安心してご応募ください。"
    },
    {
      question: "勤務時間や休日について教えてください。",
      answer: "勤務時間は8:00〜17:00（休憩1時間）が基本です。休日は週休2日制で、年間休日は105日です。"
    },
    {
      question: "福利厚生はどのようなものがありますか？",
      answer: "社会保険完備、退職金制度、各種手当（家族手当、住宅手当など）を用意しています。"
    },
    {
      question: "選考にはどのくらいの期間がかかりますか？",
      answer: "応募から内定まで、通常2〜3週間程度です。状況により前後する場合がございます。"
    }
  ];

  return (
    <section id="faq" className="section-faq py-12 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-center mb-8 md:mb-16" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
          よくある質問
        </h2>

        <div className="max-w-[800px] mx-auto mb-8 md:mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-gray-300 px-4 md:px-6 overflow-visible">
                <AccordionTrigger style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: '600' }}>
                  Q. {faq.question}
                </AccordionTrigger>
                <AccordionContent style={{ fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: '1.7' }}>
                  A. {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <a href="#faq-page">
            <Button 
              variant="outline" 
              className="px-8 md:px-12 py-3 border-2 border-gray-800"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              すべての質問を見る
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
