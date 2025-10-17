export function MessageSection() {
  return (
    <section className="section-message py-12 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-center mb-8 md:mb-16" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
          代表からのメッセージ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Placeholder */}
          <div className="bg-gray-300 aspect-[4/3]"></div>

          {/* Content */}
          <div>
            <h3 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '600' }}>
              地域とともに歩み、未来を築く
            </h3>
            <p className="mb-3 md:mb-4" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
              原田興産は、熊本県小国町で生コンクリートの製造・運搬・施工を通じて、地域のインフラを支え続けてきました。
            </p>
            <p className="mb-3 md:mb-4" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
              私たちが大切にしているのは、「人」です。社員一人ひとりが安心して働ける環境を整え、共に成長していくことを目指しています。経験の有無に関わらず、やる気と誠実さを持った方を歓迎いたします。
            </p>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8' }}>
              地域に根差し、お客様と社員から信頼される企業であり続けるために、私たちと共に歩んでくださる仲間を心よりお待ちしております。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
