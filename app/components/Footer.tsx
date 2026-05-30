import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-[#1e2a4a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#">
          <Logo variant="sm" />
        </a>
        <p className="text-[#6e6e73] text-sm">© 2026 Third Sight Consulting. All rights reserved.</p>
        <div className="flex gap-6 text-[#6e6e73] text-sm">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
