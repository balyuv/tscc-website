import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 font-bold text-lg">
          <Logo size={28} />
          <div className="flex flex-col leading-none">
            <span className="gradient-text text-sm font-extrabold tracking-wide">TSCC</span>
            <span className="text-slate-600 text-[9px] font-medium tracking-widest uppercase">Third Sight</span>
          </div>
        </div>
        <p className="text-slate-600 text-sm">© 2025 Third Sight Consulting Corporation. All rights reserved.</p>
        <div className="flex gap-6 text-slate-500 text-sm">
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
