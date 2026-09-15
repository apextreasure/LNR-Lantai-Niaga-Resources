import React, { useState } from 'react';
import { MapPin, MessageCircle, Search, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lnrData';

export const KawasanServis: React.FC = () => {
  const [userLocation, setUserLocation] = useState('');

  const handleCheckLocation = (e: React.FormEvent) => {
    e.preventDefault();
    const queryLoc = userLocation.trim() || 'kawasan saya';
    const text = `Salam Hafiz, saya ingin membuat semakan liputan servis LNR. Adakah perkhidmatan kabinet/renovasi meliputi kawasan ${queryLoc}?`;
    window.open(`${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="kawasan"
      className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E6D5C3]/60 relative"
      aria-labelledby="kawasan-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#E6D5C3] shadow-md text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#0D6236] font-bold text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Pusat Operasi & Liputan</span>
          </div>

          <h2
            id="kawasan-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] mb-4 tracking-tight"
          >
            Kawasan Servis
          </h2>

          {/* Exact phrase instructed */}
          <p className="text-xl sm:text-2xl font-semibold text-[#0D6236] mb-3">
            Berpusat di Kapar, Selangor. Hubungi kami untuk semakan liputan kawasan anda.
          </p>

          <p className="text-[18px] sm:text-[19px] text-[#5C3828] max-w-2xl mx-auto leading-relaxed mb-8">
            Kilang dan bilik pameran kami terletak di Kapar Industrial Park. Bagi memastikan kualiti kerja pemasangan dan pemantauan tapak berada pada tahap terbaik, sila maklumkan lokasi kediaman anda untuk semakan terus bersama Hafiz.
          </p>

          {/* Interactive Location Inquiry Box */}
          <form
            onSubmit={handleCheckLocation}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch"
          >
            <div className="relative flex-1">
              <label htmlFor="input-kawasan-user" className="sr-only">
                Masukkan Kawasan atau Poskod Kediaman Anda
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                id="input-kawasan-user"
                type="text"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                placeholder="Contoh: Setia Alam, Shah Alam, Klang, dll."
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#C49774]/70 rounded-xl text-[17px] text-[#1F2421] focus:border-[#0D6236] focus:ring-2 focus:ring-[#0D6236]/30 shadow-inner outline-none transition-all placeholder:text-stone-400"
              />
            </div>

            <button
              type="submit"
              className="btn-accessible px-7 py-3.5 bg-[#0D6236] hover:bg-[#094726] text-white font-bold text-[18px] rounded-xl shadow transition-all duration-200 gap-2 shrink-0 border border-emerald-700/40 cursor-pointer"
              id="btn-semak-kawasan-whatsapp"
            >
              <MessageCircle className="w-5 h-5 text-[#FFDE00]" aria-hidden="true" />
              <span>Semak Liputan Kawasan</span>
            </button>
          </form>

          {/* Address reminder */}
          <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-stone-600 text-sm">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-[#0D6236]" />
              <span>Kapar Industrial Park, 42200 Kapar, Selangor</span>
            </div>
            <span className="hidden sm:inline text-stone-300">•</span>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0D6236] hover:underline"
            >
              Lihat Lokasi di Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
