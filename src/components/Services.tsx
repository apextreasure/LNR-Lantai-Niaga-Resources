import React, { useState } from 'react';
import {
  ChefHat,
  DoorClosed,
  ShieldCheck,
  Maximize2,
  SunMedium,
  Hammer,
  Eye,
  Paintbrush,
  Layers,
  Wrench,
  Grid3X3,
  Zap,
  HardHat,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/lnrData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('semua');

  // Map icon names to Lucide components
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-7 h-7 text-[#0D6236]" };
    switch (iconName) {
      case 'ChefHat':
        return <ChefHat {...iconProps} />;
      case 'DoorClosed':
        return <DoorClosed {...iconProps} />;
      case 'ShieldCheck':
        return <ShieldCheck {...iconProps} />;
      case 'Maximize2':
        return <Maximize2 {...iconProps} />;
      case 'SunMedium':
        return <SunMedium {...iconProps} />;
      case 'Hammer':
        return <Hammer {...iconProps} />;
      case 'Eye':
        return <Eye {...iconProps} />;
      case 'Paintbrush':
        return <Paintbrush {...iconProps} />;
      case 'Trowel':
        return <HardHat {...iconProps} />;
      case 'Wrench':
        return <Wrench {...iconProps} />;
      case 'Layers':
        return <Layers {...iconProps} />;
      case 'Grid3X3':
        return <Grid3X3 {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      default:
        return <Hammer {...iconProps} />;
    }
  };

  const filteredServices = activeCategory === 'semua'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="servis"
      className="py-16 sm:py-24 bg-[#FAF7F2]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[15px] font-bold uppercase tracking-wider text-[#0D6236] bg-emerald-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Skop Perkhidmatan LNR
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] tracking-tight mb-4"
          >
            Penyelesaian Kabinet & Renovasi Rumah
          </h2>
          <p className="text-[18px] sm:text-[19px] text-[#5C3828] leading-relaxed">
            Dari pembuatan kabinet dapur tersuai hingga ke kerja struktur dan kemasan akhir kediaman, ditangani dengan kemahiran pertukangan yang cermat.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Kategori Servis">
          {[
            { id: 'semua', label: 'Semua 13 Servis' },
            { id: 'kabinet', label: 'Kabinet & Almari' },
            { id: 'besi-kaca', label: 'Gril & Kaca Aluminium' },
            { id: 'renovasi', label: 'Renovasi & Struktur' },
            { id: 'kemasan', label: 'Kemasan Siling & Lantai' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeCategory === tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`btn-accessible px-5 py-2.5 rounded-xl font-semibold text-[17px] transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#0D6236] text-white shadow-md'
                  : 'bg-white text-[#44281D] border border-[#E6D5C3] hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-[#E6D5C3]/90 flex flex-col justify-between group hover:border-[#0D6236]/50"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {renderIcon(service.iconName)}
                </div>

                <div className="mb-3">
                  <h3 className="text-[20px] sm:text-[21px] font-bold text-[#1F2421] group-hover:text-[#0D6236] transition-colors">
                    {service.titleMs}
                  </h3>
                  <p className="text-[14px] font-medium text-[#85583E] tracking-wide">
                    {service.titleEn}
                  </p>
                </div>

                <p className="text-[17px] text-[#44281D]/85 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectService(service.titleMs)}
                className="btn-accessible w-full py-2.5 px-4 bg-white hover:bg-emerald-50 text-[#0D6236] hover:text-[#094726] border border-[#0D6236]/30 font-semibold text-[16px] rounded-xl transition-colors duration-200 flex items-center justify-between group-hover:border-[#0D6236] cursor-pointer"
                aria-label={`Tanya sebut harga untuk ${service.titleMs}`}
              >
                <span>Tanya Servis Ini</span>
                <ArrowUpRight className="w-4 h-4 text-[#0D6236] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
