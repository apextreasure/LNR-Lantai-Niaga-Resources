import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lnrData';

interface FloatingWhatsAppProps {
  onOpenQuickForm: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenQuickForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-none">
      {/* Floating Mini Popup Card when opened */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-80 sm:w-88 glass-panel p-5 rounded-2xl shadow-2xl border border-[#0D6236]/30 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#0D6236] text-white flex items-center justify-center font-bold">
                H
              </div>
              <div>
                <h4 className="font-bold text-[16px] text-[#1F2421]">Hafiz — LNR</h4>
                <p className="text-xs text-[#0D6236] font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Sedia Membantu di WhatsApp
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg"
              aria-label="Tutup tetingkap chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-3 text-[15px] text-[#44281D] leading-relaxed">
            <p>
              Salam sejahtera! Ada sebarang pertanyaan berkenaan pakej kabinet dapur atau sebut harga renovasi di Kapar / Selangor?
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-stone-100">
            <a
              href={`${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(
                'Salam Hafiz, saya ingin bertanyakan mengenai perkhidmatan kabinet dan ubah suai LNR.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accessible w-full py-2.5 px-4 bg-[#0D6236] hover:bg-[#094726] text-white font-bold text-[16px] rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-[#FFDE00]" />
              <span>Chat Terus di WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenQuickForm();
              }}
              className="btn-accessible w-full py-2.5 px-4 bg-white hover:bg-stone-50 text-[#1F2421] border border-stone-300 font-semibold text-[15px] rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Isi Borang Sebut Harga</span>
              <ArrowRight className="w-4 h-4 text-stone-500" />
            </button>
          </div>

          <div className="mt-3 pt-2 text-center text-[12px] text-stone-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D6236]" />
            <span>Lantai Niaga Resources (SA0496700)</span>
          </div>
        </div>
      )}

      {/* Persistent Floating Toggle Button */}
      <div className="pointer-events-auto flex items-center gap-2.5">
        {!isOpen && (
          <span className="hidden sm:inline-block bg-white text-[#1F2421] font-bold text-sm px-3.5 py-2 rounded-xl shadow-lg border border-[#E6D5C3]">
            Tanya Hafiz di WhatsApp
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0D6236] hover:bg-[#094726] text-white shadow-2xl flex items-center justify-center transition-all duration-200 active:scale-95 border-2 border-[#FFDE00] focus-visible:ring-4 focus-visible:ring-[#0D6236]/40 cursor-pointer"
          aria-label="Buka butang perbualan WhatsApp Hafiz"
          id="btn-floating-whatsapp-toggle"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-[#FFDE00]" />
          )}
        </button>
      </div>
    </div>
  );
};
