import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { PortfolioItem } from '../types';
import { BUSINESS_INFO } from '../data/lnrData';

interface LightboxModalProps {
  item: PortfolioItem | null;
  allItems: PortfolioItem[];
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onNavigate,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (item && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % allItems.length;
        onNavigate(allItems[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
        onNavigate(allItems[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, allItems, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const nextItem = allItems[(currentIndex + 1) % allItems.length];
  const prevItem = allItems[(currentIndex - 1 + allItems.length) % allItems.length];

  const enquiryWhatsAppUrl = `${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(
    `Salam Hafiz, saya melihat rujukan portfolio di laman web LNR: "${item.title}". Bolehkah saya dapatkan anggaran kos dan perbincangan rekaan serupa untuk ruang rumah saya?`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-[#E6D5C3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#E6D5C3]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {item.conceptLabel}
            </span>
            <span className="text-sm font-semibold text-stone-500">
              {currentIndex + 1} daripada {allItems.length}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#0D6236] cursor-pointer"
            aria-label="Tutup paparan imej (Escape)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6">
          <div className="relative rounded-xl overflow-hidden bg-stone-950 aspect-[4/3] sm:aspect-[16/10] mb-5 border border-stone-200">
            <img
              src={item.image}
              alt={`${item.title} — ${item.conceptLabel}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Navigation buttons overlay */}
            <button
              type="button"
              onClick={() => onNavigate(prevItem)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label="Imej Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate(nextItem)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label="Imej Seterusnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div>
            <h2 id="lightbox-title" className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-2 font-display">
              {item.title}
            </h2>
            <p className="text-[17px] text-[#44281D] leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Features pills */}
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-wider text-[#85583E] mb-2">
                Spesifikasi & Ciri Reka Bentuk:
              </p>
              <div className="flex flex-wrap gap-2">
                {item.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[14px] bg-white text-stone-800 border border-stone-300 px-3 py-1 rounded-lg shadow-2xs font-medium"
                  >
                    • {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-500 italic">
                *Visual rujukan reka bentuk untuk memudahkan perbincangan konsep bersama Hafiz.
              </span>

              <a
                href={enquiryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accessible px-6 bg-[#0D6236] hover:bg-[#094726] text-white font-bold text-[17px] rounded-xl shadow gap-2 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-[#FFDE00]" aria-hidden="true" />
                <span>Bincang Rekaan Ini di WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
