const FOOTER_LINKS = ["Privacy", "Terms", "About", "Contact", "Advertise"] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[#E1E1E1] py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#141414] flex items-center justify-center">
            <span className="text-white text-xs font-bold">V</span>
          </div>
          <span className="text-[#141414] font-bold text-sm tracking-wide">
            Voyage
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#5A5A5A] hover:text-[#141414] text-xs font-semibold transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="text-[#5A5A5A] text-xs">
          © 2025 Voyage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
