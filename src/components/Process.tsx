import React from 'react';
import { MessageCircle, Ruler, FileCheck, CalendarCheck, Info } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/lnrData';

export const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-[#0D6236]" };
    switch (iconName) {
      case 'MessageCircle':
        return <MessageCircle {...props} />;
      case 'Ruler':
        return <Ruler {...props} />;
      case 'FileCheck':
        return <FileCheck {...props} />;
      case 'CalendarCheck':
        return <CalendarCheck {...props} />;
      default:
        return <MessageCircle {...props} />;
    }
  };

  return (
    <section
      id="proses"
      className="py-16 sm:py-24 bg-white border-t border-[#E6D5C3]/60"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[15px] font-bold uppercase tracking-wider text-[#0D6236] bg-emerald-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Aliran Kerja Mudah
          </span>
          <h2
            id="process-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] tracking-tight mb-4"
          >
            Cara Berurusan Bersama LNR
          </h2>
          <p className="text-[18px] sm:text-[19px] text-[#5C3828] leading-relaxed">
            Langkah teratur dari pertanyaan awal hingga kerja pertukangan di kediaman anda.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="glass-panel p-6 rounded-2xl border border-[#E6D5C3] shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shadow-2xs">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-display font-black text-3xl text-[#0D6236]/30">
                    0{item.step}
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-[#1F2421] mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#44281D]/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 text-xs font-semibold text-[#85583E] uppercase tracking-wider">
                Langkah {item.step}
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Condition Notice */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-stone-100 border border-stone-300 flex items-center gap-3">
          <Info className="w-5 h-5 text-[#5C3828] shrink-0" />
          <p className="text-[16px] text-[#1F2421] leading-relaxed font-medium">
            <strong>Pemberitahuan:</strong> Penjadualan dan lawatan tapak adalah tertakluk kepada pengesahan bersama antara pelanggan dan pihak pengurusan teknikal LNR.
          </p>
        </div>
      </div>
    </section>
  );
};
