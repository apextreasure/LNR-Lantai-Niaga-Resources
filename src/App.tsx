import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { KawasanServis } from './components/KawasanServis';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeEnquiryItem, setActiveEnquiryItem] = useState<string>('');

  const scrollToContact = (preselected?: string) => {
    if (preselected) {
      setActiveEnquiryItem(preselected);
    }
    const contactSection = document.getElementById('hubungi');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F2421] font-sans antialiased overflow-x-hidden">
      {/* Header with strictly 3 navigation links, actual logo and WhatsApp Hafiz CTA */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero: tasteful kitchen imagery, "Kabinet Impian, Ruang Lebih Selesa", renovation intro, buttons */}
        <Hero onOpenEnquiry={(service) => scrollToContact(service)} />

        {/* 2. About: LNR factory and showroom in Kapar, SSM SA0496700, strictly no invented stats */}
        <About />

        {/* 3. Services: 13 services from reference poster & card */}
        <Services onSelectService={(serviceTitle) => scrollToContact(serviceTitle)} />

        {/* 4. Packages: RM7,588, RM8,888, RM19,888 with WhatsApp preselection and mandatory disclaimer */}
        <Packages onOpenEnquiryWithPackage={(pkgName) => scrollToContact(pkgName)} />

        {/* 5. Portfolio: Gallery with filters, accessible lightbox, "Inspirasi reka bentuk" labels */}
        <Portfolio />

        {/* 6. Proposed enquiry process: 4 steps with explicit notice on scheduling subject to confirmation */}
        <Process />

        {/* 7. Kawasan Servis: "Berpusat di Kapar, Selangor. Hubungi kami untuk semakan liputan kawasan anda." */}
        <KawasanServis />

        {/* 8. FAQ: package customisation, measurements, coverage and quotation */}
        <FAQ />

        {/* 9. Contact: Hafiz contacts, Kapar Industrial Park showroom address, Google Maps link, enquiry form */}
        <Contact initialServiceOrPackage={activeEnquiryItem} />
      </main>

      {/* 10. Footer: logo, business name/registration, address, both contacts, anchor links, copyright */}
      <Footer />

      {/* Floating WhatsApp Action Button with Quick Menu */}
      <FloatingWhatsApp onOpenQuickForm={() => scrollToContact()} />
    </div>
  );
}
