import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '关于', href: '#about' },
    { name: '作品', href: '#portfolio' },
    { name: '服务', href: '#services' },
    { name: '联系', href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center pointer-events-none px-3 sm:px-4 md:px-6">
        <nav 
          className={`pointer-events-auto transition-all duration-300 ease-out ${
            isOpen 
              ? 'w-full md:max-w-sm rounded-2xl md:rounded-2xl bg-[#111]/95' 
              : 'w-auto rounded-full bg-white/10'
          } backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 h-auto min-h-[50px] sm:min-h-[60px]">
            <a href="#" className="text-base sm:text-lg md:text-xl font-black tracking-tighter flex items-center gap-1 group flex-shrink-0">
              <span className="text-white">WAYNE</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neon-lime group-hover:animate-pulse-fast"></span>
            </a>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center space-x-1 ${isOpen ? 'hidden' : 'block'}`}>
              <div className="h-4 w-[1px] bg-white/20 mx-4"></div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="ml-2 px-3 md:px-4 py-1.5 text-xs md:text-sm font-bold bg-neon-blue text-white rounded-full hover:bg-neon-pink transition-colors duration-300 whitespace-nowrap"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col px-4 sm:px-6 py-4 sm:py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base sm:text-lg font-medium text-gray-300 hover:text-neon-lime py-2 px-2 border-b border-white/5 last:border-0 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="px-4 py-2.5 text-base font-bold bg-neon-blue text-white rounded-full hover:bg-neon-pink transition-colors duration-300 text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;