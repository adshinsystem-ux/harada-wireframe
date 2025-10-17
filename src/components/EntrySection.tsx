import { Button } from "./ui/button";

export function EntrySection() {
  return (
    <section id="entry" className="section-entry relative py-16 md:py-32 bg-gray-200">
      {/* Background Placeholder */}
      <div className="absolute inset-0 bg-gray-300"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-[800px] mx-auto">
        <h2 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '700' }}>
          募集要項を確認する
        </h2>
        <p className="mb-6 md:mb-10" style={{ fontSize: 'clamp(16px, 3vw, 18px)', lineHeight: '1.6' }}>
          各職種の詳しい募集内容をご覧ください。
        </p>
        <a href="#requirements-list">
          <Button 
            className="bg-black text-white px-10 py-4 md:px-16 md:py-6 hover:bg-gray-800"
            style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '600' }}
          >
            募集要項一覧
          </Button>
        </a>
      </div>
    </section>
  );
}
