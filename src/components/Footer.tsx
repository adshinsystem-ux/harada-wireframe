export function Footer() {
  const handleJobClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = "";
    setTimeout(() => {
      const jobSection = document.getElementById("job");
      if (jobSection) {
        jobSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-white border-t-2 border-gray-300 py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="mb-3 md:mb-4" style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: '600' }}>
              原田興産株式会社
            </h3>
            <div className="space-y-1 md:space-y-2" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', lineHeight: '1.8' }}>
              <p>〒869-2501</p>
              <p>熊本県阿蘇郡小国町宮原1234-5</p>
              <p>TEL: 0967-46-XXXX</p>
              <p>FAX: 0967-46-XXXX</p>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-3 md:mb-4" style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: '600' }}>
              サイトメニュー
            </h3>
            <nav className="space-y-1 md:space-y-2">
              <div><a href="#job" onClick={handleJobClick} className="hover:opacity-70" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)' }}>職種紹介</a></div>
              <div><a href="#requirements-list" className="hover:opacity-70" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)' }}>募集要項一覧</a></div>
              <div><a href="#faq-page" className="hover:opacity-70" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)' }}>よくある質問</a></div>
              <div><a href="#entry-form" className="hover:opacity-70" style={{ fontSize: 'clamp(13px, 1.5vw, 14px)' }}>エントリーフォーム</a></div>
              <div>
                <a 
                  href="https://harada-g.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-70" 
                  style={{ fontSize: 'clamp(13px, 1.5vw, 14px)' }}
                >
                  会社案内（コーポレートサイト）
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 md:pt-8 border-t border-gray-300">
          <p style={{ fontSize: '12px' }}>
            © HARADA KOSAN Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
