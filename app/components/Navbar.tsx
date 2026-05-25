"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = ["Services", "About", "Tech Stack", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0f1e]/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-bold text-xl">
          <Logo size={36} />
          <div className="flex flex-col leading-none">
            <span className="gradient-text text-base font-extrabold tracking-wide">TSCC</span>
            <span className="text-slate-500 text-[10px] font-medium tracking-widest uppercase">Third Sight</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-colors">
          Get in Touch
        </a>

        <button className="md:hidden text-slate-400" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1529] border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-slate-300 hover:text-sky-400 transition-colors" onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-full bg-sky-500 text-white text-sm font-semibold w-fit">
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
