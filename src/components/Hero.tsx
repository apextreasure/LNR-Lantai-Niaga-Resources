import React from 'react';
import { ArrowRight, MessageCircle, MapPin, CheckCircle2, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lnrData';

interface HeroProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
      aria-label="Bahagian Utama"
    >
      {/* Background with warm ambient lighting & subtle organic pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Direct Factory & CIDB Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E6D5C3]/50 border border-[#C49774]/50 w-fit mb-6 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D6236]" aria-hidden="true"></span>
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#44281D]">
                Fabrikasi Terus Dari Kilang di Kapar, Selangor
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F2421] leading-[1.15] mb-6">
              Kabinet Impian, <br />
              <span className="text-[#0D6236] italic">Ruang Lebih Selesa</span>
            </h1>

            {/* Short renovation introduction */}
            <p className="text-[18px] sm:text-[20px] text-[#44281D]/90 leading-relaxed max-w-2xl mb-8 font-normal">
              Kepakaran pembuatan kabinet dapur tersuai, pertukangan kayu, gril keselamatan, dan kerja ubah suai rumah menyeluruh. Kami menghasilkan rekaan praktikal dengan kualiti pertukangan teliti mengikut bajet serta keselesaan kediaman anda.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#pakej"
                className="btn-accessible px-8 py-3.5 bg-[#0D6236] hover:bg-[#094726] text-white font-bold text-[18px] sm:text-[19px] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 gap-3 border border-emerald-700/40 text-center"
                id="hero-btn-lihat-pakej"
              >
                <span>Lihat Pakej</span>
                <ArrowRight className="w-5 h-5 text-[#FFDE00]" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry('Pertanyaan Umum Sebut Harga')}
                className="btn-accessible px-8 py-3.5 bg-[#FAF7F2] hover:bg-stone-100 text-[#1F2421] font-bold text-[18px] sm:text-[19px] rounded-xl border-2 border-[#5C3828]/40 hover:border-[#0D6236] shadow-sm transition-all duration-200 gap-2.5 text-center cursor-pointer"
                id="hero-btn-tanya-sebut-harga"
              >
                <MessageCircle className="w-5 h-5 text-[#0D6236]" aria-hidden="true" />
                <span>Tanya Sebut Harga</span>
              </button>
            </div>

            {/* Key Business Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E6D5C3]/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0D6236]" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-[#1F2421]">Kualiti Kilang</h2>
                  <p className="text-[14px] text-stone-600">Material Quartz & Foam Board</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100/80 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#5C3828]" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-[#1F2421]">Kapar, Selangor</h2>
                  <p className="text-[14px] text-stone-600">Bilik pameran & bengkel</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[#0D6236]" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-[#1F2421]">SA0496700</h2>
                  <p className="text-[14px] text-stone-600">Perniagaan berdaftar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative card with soft shadow & warm border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={BUSINESS_INFO.heroImage}
                  alt="Ruang dapur moden dengan kemasan kabinet kayu oak dan kaunter quartz stone putih"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle vignette & caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#FFDE00] font-bold mb-1">
                    Inspirasi Reka Bentuk
                  </span>
                  <p className="text-lg font-bold">
                    Kabinet Dapur Tona Kayu & Kaunter Quartz
                  </p>
                  <p className="text-sm text-stone-200">
                    Sistem laci 3 tingkat & karkas kalis air
                  </p>
                </div>
              </div>

              {/* Floating feature pill */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 glass-panel rounded-xl p-4 shadow-lg border border-[#E6D5C3] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#0D6236] text-white flex items-center justify-center font-bold font-display text-xl">
                  LNR
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#1F2421]">Harga Telus & Berpatutan</p>
                  <p className="text-[13px] text-stone-600">Pakej bermula dari RM 7,588</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
