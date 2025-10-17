import { ChevronRight } from "lucide-react";

export function FlowSection() {
  const steps = [
    {
      title: "応募",
      description: "エントリーフォームからご応募"
    },
    {
      title: "書類選考",
      description: "履歴書・職務経歴書を審査"
    },
    {
      title: "面接",
      description: "人事担当者と面接を実施"
    },
    {
      title: "内定",
      description: "合格通知後、条件を確認"
    },
    {
      title: "入社",
      description: "研修を経て業務スタート"
    }
  ];

  return (
    <section className="section-flow py-12 md:py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-center mb-8 md:mb-16" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700' }}>
          採用フロー
        </h2>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-white border-2 border-gray-800 px-6 py-4 min-w-[140px] text-center">
                <p className="mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>{step.title}</p>
                <p className="text-gray-600" style={{ fontSize: '12px', lineHeight: '1.4' }}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-6 h-6 mx-2 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden flex flex-col items-center gap-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full max-w-[280px]">
              <div className="bg-white border-2 border-gray-800 px-6 py-3 w-full text-center">
                <p className="mb-1" style={{ fontSize: '16px', fontWeight: '600' }}>{step.title}</p>
                <p className="text-gray-600" style={{ fontSize: '11px', lineHeight: '1.4' }}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-6 h-6 my-2 flex-shrink-0 rotate-90" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
