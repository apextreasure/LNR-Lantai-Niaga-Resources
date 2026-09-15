import React from 'react';
import { Factory, Award, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lnrData';

export const About: React.FC = () => {
  return (
    <section
      id="tentang-kami"
      className="py-16 sm:py-20 bg-white border-y border-[#E6D5C3]/60"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase: Factory & Material Workshop */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src={BUSINESS_INFO.factoryImage}
                alt="Bilik pameran bahan dan karkas kabinet Lantai Niaga Resources di Kapar Selangor"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-[#FAF7F2] border-t border-[#E6D5C3]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0D6236] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[17px] text-[#1F2421]">
                      Kilang & Bilik Pameran Fabrikasi
                    </h3>
                    <p className="text-[15px] text-[#5C3828] leading-relaxed mt-1">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0D6236] hover:underline mt-2.5"
                    >
                      <span>Buka di Google Maps</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Description */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D6236] font-semibold text-sm mb-4">
              <Factory className="w-4 h-4" />
              <span>Mengenai Syarikat</span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1F2421] tracking-tight mb-6 leading-tight"
            >
              Lantai Niaga Resources <br />
              <span className="text-[#0D6236] text-2xl sm:text-3xl font-sans font-semibold">
                (No. Pendaftaran: {BUSINESS_INFO.registration})
              </span>
            </h2>

            <div className="space-y-4 text-[18px] sm:text-[19px] text-[#44281D]/90 leading-relaxed">
              <p>
                <strong>LNR — Lantai Niaga Resources</strong> merupakan perniagaan tempatan yang berpusat di Kapar Industrial Park, Selangor. Kami mengkhususkan operasi dalam pembuatan kabinet dapur tersuai (custom kitchen cabinets), almari pakaian (wardrobes), pertukangan logam gril keselamatan, serta kerja-kerja renovasi rumah.
              </p>
              <p>
                Dengan memiliki bengkel fabrikasi dan bilik pameran sendiri di Kapar, kami menguruskan pemilihan material secara teliti—termasuk papak <em>quartz stone</em> yang tahan lasak, karkas <em>foam-board</em> kalis air di ruang sinki, serta kelengkapan perkakasan <em>soft-close</em> untuk ketahanan harian.
              </p>
              <p>
                Setiap pertanyaan pelanggan akan diuruskan secara peribadi oleh wakil jualan kami, <strong>Hafiz</strong>, dari perbincangan ukuran kasar, pemilihan bahan, sehinggalah susunan kerja pemasangan di rumah anda.
              </p>
            </div>

            {/* Factual Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E6D5C3]">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D5C3]/80">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-[#0D6236]" />
                  <h3 className="font-bold text-[17px] text-[#1F2421]">Pendaftaran Sah</h3>
                </div>
                <p className="text-[15px] text-stone-600">
                  Perniagaan berdaftar rasmi SSM dengan nombor pendaftaran SA0496700.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D5C3]/80">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-[#0D6236]" />
                  <h3 className="font-bold text-[17px] text-[#1F2421]">Ahli CIDB Malaysia</h3>
                </div>
                <p className="text-[15px] text-stone-600">
                  LNR berdaftar sebagai ahli Lembaga Pembangunan Industri Pembinaan Malaysia (CIDB).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
