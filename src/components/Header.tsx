import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lnrData';
import lnrLogo from '../assets/lnr-logo.svg';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Servis & Pakej', href: '#pakej' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Kawasan Servis', href: '#kawasan' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E6D5C3]/80 py-3'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with strict object-fit: contain and original proportions */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#0D6236] rounded-md p-1"
            aria-label="LNR — Lantai Niaga Resources Laman Utama"
          >
            <div className="h-12 sm:h-14 w-24 sm:w-28 flex items-center justify-center overflow-hidden rounded shadow-sm border border-emerald-900/20 bg-[#0E5E35]">
              <img
                src={lnrLogo}
                alt="Logo Rasmi LNR Lantai Niaga Resources"
                className="h-full w-full object-contain"
                width={112}
                height={56}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-[#1F2421] group-hover:text-[#0D6236] transition-colors leading-none">
                LNR
              </span>
              <span className="text-xs text-[#5C3828] font-medium tracking-wide">
                Lantai Niaga Resources
              </span>
            </div>
          </a>

          {/* Desktop Nav - strictly 3 links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[18px] font-semibold text-[#1F2421] hover:text-[#0D6236] transition-colors py-2 px-1 border-b-2 border-transparent hover:border-[#0D6236] focus-visible:ring-2 focus-visible:ring-[#0D6236] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA: WhatsApp Hafiz */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(
                'Salam Hafiz, saya berminat untuk berbincang mengenai perkhidmatan kabinet & renovasi rumah LNR.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accessible px-5 bg-[#0D6236] hover:bg-[#094726] text-white font-semibold text-[18px] rounded-lg shadow-sm hover:shadow transition-all duration-200 gap-2 border border-emerald-700/40 active:scale-[0.98]"
              id="cta-whatsapp-hafiz-header"
            >
              <MessageCircle className="w-5 h-5 text-[#FFDE00]" aria-hidden="true" />
              <span>WhatsApp Hafiz</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(
                'Salam Hafiz, saya berminat untuk sebut harga kabinet & renovasi LNR.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0D6236] text-white rounded-lg text-sm font-semibold flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="WhatsApp Hafiz terus"
            >
              <MessageCircle className="w-5 h-5 text-[#FFDE00]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#1F2421] hover:bg-[#E6D5C3]/50 focus-visible:ring-2 focus-visible:ring-[#0D6236] min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden glass-panel border-b border-[#E6D5C3] px-6 py-6 mt-2 shadow-xl animate-in slide-in-from-top-3 duration-200"
          id="mobile-navigation-drawer"
        >
          <nav className="flex flex-col space-y-4" aria-label="Menu Mudah Alih">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[19px] font-semibold text-[#1F2421] hover:text-[#0D6236] py-3 px-3 rounded-lg hover:bg-emerald-50/80 transition-colors flex items-center justify-between border-b border-stone-200/60"
              >
                <span>{link.label}</span>
                <span className="text-[#5C3828] text-sm">→</span>
              </a>
            ))}

            <div className="pt-3">
              <a
                href={`${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(
                  'Salam Hafiz, saya berminat untuk berbincang mengenai perkhidmatan kabinet & renovasi rumah LNR.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-accessible w-full bg-[#0D6236] hover:bg-[#094726] text-white font-bold text-[18px] rounded-lg shadow gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#FFDE00]" aria-hidden="true" />
                <span>WhatsApp Hafiz (+6010-307 4277)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
