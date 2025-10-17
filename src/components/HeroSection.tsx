import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-hero relative h-[500px] md:h-[600px] bg-gray-200 flex items-center justify-center">
      {/* Background Placeholder */}
      <div className="absolute inset-0 bg-gray-300"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-[800px]">
        <h1 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '700', lineHeight: '1.3' }}>
          <span className="inline md:inline">地域を支える、</span>
          <br className="md:hidden" />
          <span className="inline md:inline">人をつなぐ仕事。</span>
        </h1>
        <p className="mb-6 md:mb-8" style={{ fontSize: 'clamp(16px, 3vw, 20px)', lineHeight: '1.6' }}>
          人を大切にする会社で、自分らしく働こう。
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
