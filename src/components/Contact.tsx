import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Send, ExternalLink, Building2, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, PACKAGES_DATA, SERVICES_DATA } from '../data/lnrData';
import { EnquiryFormData } from '../types';

interface ContactProps {
  initialServiceOrPackage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialServiceOrPackage = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    location: '',
    packageOrService: initialServiceOrPackage || 'Pakej Popular 8 Kaki (RM 8,888)',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  // Synchronize if prop changes
  React.useEffect(() => {
    if (initialServiceOrPackage) {
      setFormData((prev) => ({ ...prev, packageOrService: initialServiceOrPackage }));
    }
  }, [initialServiceOrPackage]);

  const validate = () => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Sila masukkan nama penuh anda.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Sila masukkan lokasi rumah / kawasan anda.';
    }
    if (!formData.packageOrService) {
      newErrors.packageOrService = 'Sila pilih jenis pakej atau servis.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsOpeningWhatsApp(true);

    const formattedMessage = `Salam Hafiz (LNR), saya ingin membuat pertanyaan sebut harga kabinet & renovasi:

• Nama: ${formData.name.trim()}
• Lokasi Rumah: ${formData.location.trim()}
• Servis/Pakej: ${formData.packageOrService}
${formData.message.trim() ? `• Mesej Tambahan: ${formData.message.trim()}` : ''}

Mohon maklumat lanjut dan perbincangan anggaran sebut harga. Terima kasih!`;

    const waUrl = `${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp in new tab for user to send
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Reset button state after opening
    setTimeout(() => {
      setIsOpeningWhatsApp(false);
    }, 1500);
  };

  return (
    <section
      id="hubungi"
      className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E6D5C3]/60 relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[15px] font-bold uppercase tracking-wider text-[#0D6236] bg-emerald-100/70 px-4 py-1.5 rounded-full inline-block mb-3">
            Hubungi Kami
          </span>
          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] tracking-tight mb-4"
          >
            Mulakan Perbincangan Bersama Hafiz
          </h2>
          <p className="text-[18px] sm:text-[19px] text-[#5C3828] leading-relaxed">
            Hantarkan perincian ruang atau pelan rumah anda untuk kami semak spesifikasi bahan dan anggaran sebut harga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contacts & Factory Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sales Representative Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#E6D5C3] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#0D6236] text-white flex items-center justify-center font-bold text-xl font-display">
                  H
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#85583E]">
                    Wakil Jualan & Khidmat Pelanggan
                  </span>
                  <h3 className="text-2xl font-bold text-[#1F2421]">Hafiz</h3>
                  <p className="text-sm text-stone-600">Lantai Niaga Resources (SA0496700)</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Primary WhatsApp */}
                <a
                  href={`${BUSINESS_INFO.primaryWhatsAppUrl}?text=${encodeURIComponent(
                    'Salam Hafiz, saya ingin berbincang mengenai sebut harga kabinet & renovasi LNR.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accessible w-full p-4 rounded-xl bg-[#0D6236] hover:bg-[#094726] text-white font-bold text-[18px] shadow-sm flex items-center justify-between transition-all"
                  id="btn-whatsapp-primary-hafiz"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-[#FFDE00]" />
                    <div className="text-left">
                      <div className="text-xs text-emerald-100 font-medium">WhatsApp Utama (Hafiz)</div>
                      <div>{BUSINESS_INFO.primaryPhone}</div>
                    </div>
                  </div>
                  <span className="text-sm bg-white/20 px-2.5 py-1 rounded-md font-semibold">
                    Klik Chat
                  </span>
                </a>

                {/* Alternative WhatsApp */}
                <a
                  href={`${BUSINESS_INFO.altWhatsAppUrl}?text=${encodeURIComponent(
                    'Salam Hafiz, saya ingin bertanya mengenai perkhidmatan LNR.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accessible w-full p-4 rounded-xl bg-white hover:bg-stone-50 border-2 border-[#5C3828]/40 hover:border-[#0D6236] text-[#1F2421] font-bold text-[17px] shadow-2xs flex items-center justify-between transition-all"
                  id="btn-whatsapp-alt-hafiz"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0D6236]" />
                    <div className="text-left">
                      <div className="text-xs text-stone-500 font-medium">WhatsApp Alternatif</div>
                      <div>{BUSINESS_INFO.altPhone}</div>
                    </div>
                  </div>
                  <span className="text-sm bg-stone-100 px-2.5 py-1 rounded-md font-semibold text-stone-700">
                    Hubungi
                  </span>
                </a>
              </div>
            </div>

            {/* Factory Address Card with Google Maps search link */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#E6D5C3] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#5C3828]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2421] mb-1">
                    Kilang & Bilik Pameran (Showroom)
                  </h3>
                  <p className="text-[16px] text-[#44281D] leading-relaxed mb-4">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[16px] font-bold text-[#0D6236] hover:text-[#094726] bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl border border-emerald-300 transition-colors"
                    id="link-google-maps-address"
                  >
                    <MapPin className="w-5 h-5 text-[#0D6236]" />
                    <span>Buka Panduan Google Maps</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E6D5C3] shadow-lg">
              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1F2421] mb-2">
                  Borang Pertanyaan Sebut Harga WhatsApp
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#5C3828] leading-relaxed">
                  Lengkapkan butiran di bawah. Maklumat akan disusun kemas dalam format WhatsApp untuk anda hantar terus kepada Hafiz.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="enquiry-name" className="block text-[16px] font-bold text-[#1F2421] mb-1.5">
                    Nama Penuh <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Contoh: Encik Ridzuan / Puan Aisyah"
                    className={`w-full px-4 py-3.5 rounded-xl border text-[17px] bg-[#FAF7F2] transition-colors outline-none ${
                      errors.name
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-[#C49774]/60 focus:border-[#0D6236] focus:ring-2 focus:ring-[#0D6236]/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm font-semibold text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="enquiry-location" className="block text-[16px] font-bold text-[#1F2421] mb-1.5">
                    Lokasi Rumah / Kawasan Perumahan <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="enquiry-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                      if (errors.location) setErrors({ ...errors, location: undefined });
                    }}
                    placeholder="Contoh: Bandar Bukit Raja, Klang / Setia Alam"
                    className={`w-full px-4 py-3.5 rounded-xl border text-[17px] bg-[#FAF7F2] transition-colors outline-none ${
                      errors.location
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-[#C49774]/60 focus:border-[#0D6236] focus:ring-2 focus:ring-[#0D6236]/30'
                    }`}
                  />
                  {errors.location && (
                    <p className="text-sm font-semibold text-red-600 mt-1">{errors.location}</p>
                  )}
                </div>

                {/* Service or Package Selection */}
                <div>
                  <label htmlFor="enquiry-package" className="block text-[16px] font-bold text-[#1F2421] mb-1.5">
                    Pilihan Pakej atau Servis <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="enquiry-package"
                    value={formData.packageOrService}
                    onChange={(e) => setFormData({ ...formData, packageOrService: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#C49774]/60 bg-[#FAF7F2] text-[17px] focus:border-[#0D6236] focus:ring-2 focus:ring-[#0D6236]/30 outline-none"
                  >
                    <optgroup label="Pakej Promosi Kabinet">
                      {PACKAGES_DATA.map((pkg) => (
                        <option key={pkg.id} value={`${pkg.name} (${pkg.priceFormatted})`}>
                          {pkg.name} — {pkg.priceFormatted}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Servis Khusus Renovasi & Pertukangan">
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.titleMs}>
                          {srv.titleMs} ({srv.titleEn})
                        </option>
                      ))}
                      <option value="Ubah Suai Menyeluruh Rumah">Ubah Suai Menyeluruh Rumah</option>
                    </optgroup>
                  </select>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="enquiry-message" className="block text-[16px] font-bold text-[#1F2421] mb-1.5">
                    Mesej Tambahan / Anggaran Panjang Kabinet (Pilihan)
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Contoh: Dapur bentuk L ukuran 10 kaki, berminat tambah island dan tingkap yard. Sudah ada floor plan pemaju."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#C49774]/60 bg-[#FAF7F2] text-[17px] focus:border-[#0D6236] focus:ring-2 focus:ring-[#0D6236]/30 outline-none"
                  ></textarea>
                </div>

                {/* Notice: Never shows 'sent' prematurely */}
                <div className="text-xs text-stone-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D6236]" />
                  <span>
                    Menekan butang di bawah akan membuka aplikasi WhatsApp untuk anda menyemak dan menghantar mesej ini terus kepada Hafiz.
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isOpeningWhatsApp}
                  className="btn-accessible w-full py-4 px-6 bg-[#0D6236] hover:bg-[#094726] text-white font-bold text-[19px] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 gap-3 border border-emerald-700/40 cursor-pointer disabled:opacity-80"
                  id="btn-hantar-borang-whatsapp"
                >
                  <Send className="w-5 h-5 text-[#FFDE00]" aria-hidden="true" />
                  <span>
                    {isOpeningWhatsApp ? 'Membuka WhatsApp...' : 'Hantar Pertanyaan ke WhatsApp Hafiz'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
