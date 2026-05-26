import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Logo size={28} />
          <div className="flex flex-col leading-none">
            <span className="text-white text-sm font-bold tracking-wide">TSCC</span>
            <span className="text-[#6e6e73] text-[9px] font-medium tracking-widest uppercase">Third Sight</span>
          </div>
        </div>
        <p className="text-[#6e6e73] text-sm">© 2026 Third Sight Consulting Corporation. All rights reserved.</p>
        <div className="flex gap-6 text-[#6e6e73] text-sm">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
