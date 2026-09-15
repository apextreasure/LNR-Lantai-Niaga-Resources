import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/lnrData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-customisation');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-white border-t border-[#E6D5C3]/60"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[15px] font-bold uppercase tracking-wider text-[#0D6236] bg-emerald-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Soalan Lazim
          </span>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] tracking-tight mb-4"
          >
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-[18px] sm:text-[19px] text-[#5C3828] leading-relaxed">
            Maklumat praktikal berkaitan ubah suai saiz pakej, ukuran pelan, liputan dan sebut harga.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0D6236] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#E6D5C3] bg-white hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#0D6236] cursor-pointer min-h-[56px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#0D6236]' : 'text-stone-400'}`} />
                    <span className="font-display text-[19px] sm:text-[20px] font-bold text-[#1F2421]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5C3828] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0D6236]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-[17px] sm:text-[18px] text-[#44281D]/90 leading-relaxed border-t border-[#E6D5C3]/40"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
