import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleJobClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    window.location.hash = "";
    setTimeout(() => {
      const jobSection = document.getElementById("job");
      if (jobSection) {
        jobSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const NavLinks = () => (
    <>
      <a href="#job" className="hover:opacity-70" onClick={handleJobClick}>職種紹介</a>
      <a href="#requirements-list" className="hover:opacity-70" onClick={() => setOpen(false)}>募集要項</a>
      <a href="#faq-page" className="hover:opacity-70" onClick={() => setOpen(false)}>FAQ</a>
      <a href="https://harada-g.co.jp" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
        会社案内
      </a>
    </>
  );

  return (
    <header className="bg-white border-b-2 border-gray-300 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo + RECRUIT SITE */}
        <a href="#" className="flex items-center gap-2 md:gap-4 hover:opacity-80">
          <img 
            src="https://harada-g.co.jp/wordpress/wp-content/themes/harada/img/common/icon_hd_logo.svg" 
            alt="原田興産ロゴ" 
            className="h-6 md:h-8"
          />
          <span className="text-xs md:text-sm tracking-wider" style={{ fontSize: '12px', fontWeight: '500' }}>
            RECRUIT SITE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavLinks />
          <a href="#entry-form">
            <Button 
              className="bg-black text-white px-6 py-2 hover:bg-gray-800"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              エントリー
            </Button>
          </a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="w-12 h-12">
              <Menu className="h-9 w-9" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] pl-8 pr-6">
            <nav className="flex flex-col gap-6 mt-8">
              <NavLinks />
              <a href="#entry-form" onClick={() => setOpen(false)}>
                <Button 
                  className="bg-black text-white w-full py-3 hover:bg-gray-800"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  エントリー
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
