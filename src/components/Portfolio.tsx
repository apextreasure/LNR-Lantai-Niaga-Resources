import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/lnrData';
import { PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Koleksi' },
    { id: 'kabinet', label: 'Kabinet Dapur' },
    { id: 'almari', label: 'Almari / Wardrobe' },
    { id: 'besi-kaca', label: 'Gril & Aluminium' },
    { id: 'kemasan', label: 'Siling & Kemasan' },
  ];

  const filteredItems = selectedCategory === 'semua'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E6D5C3]/60"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[15px] font-bold uppercase tracking-wider text-[#0D6236] bg-emerald-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Galeri Rujukan Projek
          </span>
          <h2
            id="portfolio-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] tracking-tight mb-4"
          >
            Inspirasi Reka Bentuk & Kemasan
          </h2>
          <p className="text-[18px] sm:text-[19px] text-[#5C3828] leading-relaxed">
            Lihat cadangan susun atur kabinet, kemasan kayu oak, kaunter quartz, gril pintu dan kerja pertukangan. Klik pada gambar untuk melihat maklumat terperinci.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Tapis Portfolio">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn-accessible px-5 py-2.5 rounded-xl font-semibold text-[17px] transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0D6236] text-white shadow-md'
                  : 'bg-white text-[#44281D] border border-[#E6D5C3] hover:bg-stone-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group glass-panel rounded-2xl overflow-hidden border border-[#E6D5C3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer focus-within:ring-2 focus-within:ring-[#0D6236]"
              tabIndex={0}
              role="button"
              aria-label={`Buka gambar ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveLightboxItem(item);
                }
              }}
            >
              <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Mandatory Label "Inspirasi reka bentuk" */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-sm text-[#44281D] border border-[#C49774]/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#0D6236]" />
                  <span>{item.conceptLabel}</span>
                </div>

                {/* Hover overlay button indicator */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="btn-accessible px-4 py-2 bg-white/90 text-stone-900 rounded-lg text-sm font-bold shadow flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#0D6236]" />
                    <span>Lihat Perincian</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#85583E] mb-1.5 block">
                  {item.categoryLabel}
                </span>
                <h3 className="text-[20px] font-bold text-[#1F2421] group-hover:text-[#0D6236] transition-colors mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#44281D]/80 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[15px] font-semibold text-[#0D6236]">
                  <span>Papar Spesifikasi</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        allItems={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </section>
  );
};
