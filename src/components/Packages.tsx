import React from 'react';
import { Check, Sparkles, AlertCircle, MessageCircle } from 'lucide-react';
import { PACKAGES_DATA, BUSINESS_INFO } from '../data/lnrData';
import { PackageItem } from '../types';

interface PackagesProps {
  onOpenEnquiryWithPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenEnquiryWithPackage }) => {
  const getWhatsAppPackageUrl = (pkg: PackageItem) => {
    const text = `Salam Hafiz, saya berminat untuk mengetahui lebih lanjut mengenai ${pkg.name} (${pkg.priceFormatted}) daripada LNR. Boleh saya dapatkan maklumat lanjut dan semakan ketersediaan semasa?`;
    return `${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="pakej"
      className="py-16 sm:py-24 bg-white border-t border-[#E6D5C3]/60 relative"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[15px] font-bold uppercase tracking-wider text-[#0D6236] bg-emerald-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Pakej Kabinet & Renovasi Rujukan
          </span>
          <h2
            id="packages-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] tracking-tight mb-4"
          >
            Pakej Lengkap Kabinet Dapur
          </h2>
          <p className="text-[18px] sm:text-[19px] text-[#5C3828] leading-relaxed">
            Spesifikasi disusun teliti bersama kaunter Quartz Stone tahan lasak, gril pintu keselamatan, serta naik taraf percuma untuk karkas kalis air.
          </p>
        </div>

        {/* Mandatory Factual Reference Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-amber-50/80 border border-amber-300/80 flex items-start gap-3 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-[15px] sm:text-[16px] text-amber-900 leading-relaxed font-medium">
            <strong>Nota Penting:</strong> {BUSINESS_INFO.disclaimer}
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#FAF7F2] border-2 border-[#0D6236] shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-[#E6D5C3] shadow-md hover:shadow-lg'
                } p-6 sm:p-8`}
              >
                {/* Popular Tag */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0D6236] text-[#FFDE00] text-xs uppercase font-extrabold tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pilihan Paling Digemari</span>
                  </div>
                )}

                <div>
                  {/* Title & Pricing */}
                  <div className="border-b border-stone-200 pb-6 mb-6">
                    <h3 className="text-2xl font-bold text-[#1F2421] mb-2 font-display">
                      {pkg.name}
                    </h3>
                    <p className="text-[15px] text-[#5C3828] mb-4 min-h-[44px]">
                      {pkg.subtitle}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#0D6236] tracking-tight font-sans">
                        {pkg.priceFormatted}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        / harga pakej rujukan
                      </span>
                    </div>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-4 mb-6">
                    <p className="text-[14px] font-bold uppercase tracking-wider text-[#44281D]">
                      Item Utama Termasuk:
                    </p>
                    <ul className="space-y-2.5 text-[16px] text-[#1F2421]">
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#0D6236]" />
                        </div>
                        <span>{pkg.specs.wallCabinet}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#0D6236]" />
                        </div>
                        <span>{pkg.specs.baseCabinet}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#0D6236]" />
                        </div>
                        <span>{pkg.specs.countertop}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#0D6236]" />
                        </div>
                        <span>Installation Fan & Lighting (Pemasangan Kipas & Lampu)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#0D6236]" />
                        </div>
                        <span>Grill Main Door (Gril Pintu Utama)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#0D6236]" />
                        </div>
                        <span>Sliding Window Yard (Tingkap Gelongsor Yard)</span>
                      </li>

                      {/* Package 19888 specific extras */}
                      {pkg.specs.additionalItems?.map((extra, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 font-medium text-emerald-950">
                          <div className="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#0D6236]" />
                          </div>
                          <span>{extra}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Free Items / Upgrades */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-6">
                    <p className="text-[13px] font-bold uppercase tracking-wider text-amber-900 mb-2">
                      Free Item / Naik Taraf Percuma:
                    </p>
                    <ul className="space-y-1.5 text-[15px] font-semibold text-amber-950">
                      {pkg.freeUpgrades.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-[#0D6236]">★</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-stone-200">
                  <a
                    href={getWhatsAppPackageUrl(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-accessible w-full py-3.5 px-4 rounded-xl font-bold text-[18px] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${
                      isPopular
                        ? 'bg-[#0D6236] hover:bg-[#094726] text-white'
                        : 'bg-[#1F2421] hover:bg-[#0D6236] text-white'
                    }`}
                    id={`btn-tanya-pakej-${pkg.id}`}
                  >
                    <MessageCircle className="w-5 h-5 text-[#FFDE00]" aria-hidden="true" />
                    <span>Tanya Pakej Ini</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiryWithPackage(pkg.name)}
                    className="w-full text-center text-[15px] font-semibold text-[#5C3828] hover:text-[#0D6236] py-1.5 transition-colors cursor-pointer"
                  >
                    Isi Borang Pertanyaan Web
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
