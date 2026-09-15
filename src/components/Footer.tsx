import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lnrData';
import lnrLogo from '../assets/lnr-logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D19] text-[#FAF7F2] pt-16 pb-12 border-t-4 border-[#0D6236]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo with strict object-fit: contain and original proportions */}
            <div className="h-16 w-32 flex items-center justify-center overflow-hidden rounded bg-[#0E5E35] border border-emerald-700/50 p-1">
              <img
                src={lnrLogo}
                alt="Logo LNR Lantai Niaga Resources"
                className="h-full w-full object-contain"
                width={128}
                height={64}
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold font-display text-white">
                {BUSINESS_INFO.name}
              </h2>
              <p className="text-sm text-stone-400 font-mono mt-0.5">
                No. Pendaftaran SSM: {BUSINESS_INFO.registration}
              </p>
            </div>

            <p className="text-[16px] text-stone-300 leading-relaxed max-w-sm">
              Pakar pertukangan kabinet dapur tersuai, wardrobe, kerja besi keselamatan, dan renovasi kediaman berkualiti terus dari kilang kami di Kapar, Selangor.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ahli Berdaftar CIDB Malaysia</span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-lg font-bold text-white font-display border-b border-stone-800 pb-2">
              Pautan Pantas
            </h3>
            <ul className="space-y-2.5 text-[16px] text-stone-300">
              <li>
                <a href="#hero" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  Laman Utama
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  Mengenai Kilang Kapar
                </a>
              </li>
              <li>
                <a href="#servis" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  13 Skop Servis & Renovasi
                </a>
              </li>
              <li>
                <a href="#pakej" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  Pakej Kabinet Dapur
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  Portfolio & Inspirasi Rekabentuk
                </a>
              </li>
              <li>
                <a href="#kawasan" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  Kawasan Servis & Liputan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  Soalan Lazim (FAQ)
                </a>
              </li>
              <li>
                <a href="#hubungi" className="hover:text-[#FFDE00] transition-colors py-1 inline-block">
                  Hubungi Hafiz
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Address */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white font-display border-b border-stone-800 pb-2">
              Bilik Pameran & Hubungi Hafiz
            </h3>

            <div className="space-y-3 text-[16px] text-stone-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFDE00] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Alamat Kilang & Showroom:</span>
                  <p className="text-stone-300 leading-relaxed mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-semibold mt-1"
                  >
                    <span>Cari di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Primary WhatsApp */}
              <div className="flex items-center gap-3 pt-2">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs text-stone-400 block">WhatsApp Utama (Hafiz):</span>
                  <a
                    href={BUSINESS_INFO.primaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {BUSINESS_INFO.primaryPhone}
                  </a>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-stone-400 shrink-0" />
                <div>
                  <span className="text-xs text-stone-400 block">WhatsApp Alternatif:</span>
                  <a
                    href={BUSINESS_INFO.altWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-stone-300 hover:text-white transition-colors"
                  >
                    {BUSINESS_INFO.altPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <p>
            Hak Cipta Terpelihara © {BUSINESS_INFO.currentYear} {BUSINESS_INFO.name} ({BUSINESS_INFO.registration}).
          </p>
          <p className="text-xs text-stone-500 text-center sm:text-right">
            Harga, spesifikasi pakej dan ketersediaan adalah berdasarkan rujukan katalog dan tertakluk kepada pengesahan sebut harga rasmi.
          </p>
        </div>
      </div>
    </footer>
  );
};
