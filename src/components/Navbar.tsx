"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSoundContext } from "./SoundProvider";
import { Volume2, VolumeX } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Project", href: "#project" },
  { name: "Journey", href: "#journey" },
  { name: "Research", href: "#research" },
  { name: "Gallery", href: "#gallery" },
  { name: "Aura", href: "#aura" },
  { name: "Team", href: "#team" },
  { name: "Future Vision", href: "#future" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMuted, toggleMute, playClick } = useSoundContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    // Sound design rule: No sound on every button click
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-md:px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Team Ramanujan Logo" className="w-10 h-10 object-contain rounded-sm" />
          <span className="font-black text-[#1A1A1A] text-xl tracking-tight hidden sm:block">Team Ramanujan</span>
        </div>
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm font-medium text-gray-600 hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleMute}
            className="ml-4 p-2 rounded-full bg-gray-100/50 hover:bg-gray-200/50 transition-colors"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX size={18} className="text-gray-500" /> : <Volume2 size={18} className="text-[#1A1A1A]" />}
          </button>
        </div>
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={toggleMute}
            className="p-2 rounded-full bg-gray-100/50 hover:bg-gray-200/50 transition-colors"
          >
            {isMuted ? <VolumeX size={18} className="text-gray-500" /> : <Volume2 size={18} className="text-[#1A1A1A]" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 space-y-1.5 focus:outline-none">
            <div className={`w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                handleLinkClick();
                setIsMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-gray-800 hover:text-[#F4C430] transition-colors py-2 border-b border-gray-50 last:border-none"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
