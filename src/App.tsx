import React, { useState } from 'react';
import { Language } from './data/translations';
import { CityId } from './data/citiesData';
import { ServiceItem, SERVICES_DATA, getServicesForCity, matchServiceForIssue } from './data/servicesData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ApplianceCategoryGrid } from './components/ApplianceCategoryGrid';
import { BrandsMarquee } from './components/BrandsMarquee';
import { PriceCalculator } from './components/PriceCalculator';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleReviews } from './components/GoogleReviews';
import { AppDownloadShowcase } from './components/AppDownloadShowcase';
import { InstagramReelsSection } from './components/InstagramReelsSection';
import { CommercialAMC } from './components/CommercialAMC';
import { PartnerNetwork } from './components/PartnerNetwork';
import { QRCodeStickerModal } from './components/QRCodeStickerModal';
import { PortalHubModal } from './components/PortalHubModal';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { DiagnosticAssistant } from './components/DiagnosticAssistant';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CitySelectModal } from './components/CitySelectModal';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [cityModalOpen, setCityModalOpen] = useState<boolean>(() => {
    try {
      // First visit: if user has not chosen a city before, immediately show City Selection Gateway
      return !localStorage.getItem('as_city');
    } catch {
      return false;
    }
  });
  const [selectedCity, setSelectedCity] = useState<CityId>(() => {
    try {
      const saved = localStorage.getItem('as_city');
      return saved === 'bangalore' ? 'bangalore' : 'kadapa';
    } catch {
      return 'kadapa';
    }
  });

  const handleSelectCity = (c: CityId) => {
    setSelectedCity(c);
    try {
      localStorage.setItem('as_city', c);
    } catch {
      // ignore storage error
    }
  };

  // Modal open states
  const [isOffline, setIsOffline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? !navigator.onLine : false;
  });

  React.useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [portalsModalOpen, setPortalsModalOpen] = useState(false);

  // URL Hash Auto-Open for Admin Console (#admin, #portals, #dispatch)
  React.useEffect(() => {
    const checkHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h === '#admin' || h === '#portals' || h === '#dispatch' || h === '#control') {
        setPortalsModalOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Filter & Service selection states
  const [selectedCategory, setSelectedCategory] = useState<ServiceItem['category']>('ac');
  const [preSelectedService, setPreSelectedService] = useState<ServiceItem | null>(null);
  const [preSelectedQuantity, setPreSelectedQuantity] = useState<number>(1);
  const [preSelectedPrice, setPreSelectedPrice] = useState<number | undefined>(undefined);
  const [preFilledContact, setPreFilledContact] = useState<{
    name?: string;
    phone?: string;
    area?: string;
    notes?: string;
  } | null>(null);

  // Handler for Hero Express Booking Form
  const handleExpressBook = (data: {
    appliance: string;
    issue: string;
    city?: CityId;
    area: string;
    phone: string;
    name: string;
  }) => {
    if (data.city && data.city !== selectedCity) {
      handleSelectCity(data.city);
    }
    const cityServices = getServicesForCity(data.city || selectedCity);
    const matched = matchServiceForIssue(data.appliance, data.issue, cityServices);

    setPreSelectedService(matched);
    setPreSelectedQuantity(1);
    setPreSelectedPrice(matched.price);
    setPreFilledContact({
      name: data.name,
      phone: data.phone,
      area: data.area,
      notes: `${data.appliance}: ${data.issue}`
    });
    setBookingModalOpen(true);
  };

  // Handler for Price Calculator Book button
  const handleBookEstimatedService = (
    service: ServiceItem,
    quantity: number,
    total: number
  ) => {
    setPreSelectedService(service);
    setPreSelectedQuantity(quantity);
    setPreSelectedPrice(total);
    setBookingModalOpen(true);
  };

  // Handler for Service Card Book button
  const handleBookService = (service: ServiceItem) => {
    setPreSelectedService(service);
    setPreSelectedQuantity(1);
    setPreSelectedPrice(service.price);
    setBookingModalOpen(true);
  };

  // Handler for Diagnostic Assistant Book button
  const handleBookDiagnosticIssue = (service: ServiceItem, issueTitle: string) => {
    setPreSelectedService(service);
    setPreSelectedQuantity(1);
    setPreSelectedPrice(service.price);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      {/* Network Offline Warning Alert */}
      {isOffline && (
        <div className="sticky top-0 z-[100] w-full bg-red-600 text-white text-xs sm:text-sm font-black py-2.5 px-4 text-center shadow-lg flex items-center justify-center gap-2">
          <span>⚠️</span>
          <span>No Internet Connection. Please check your mobile data or Wi-Fi connectivity to ensure real-time updates.</span>
        </div>
      )}

      {/* 1. Sticky Navigation Bar */}
      <Header
        lang={lang}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenBooking={() => {
          setPreSelectedService(null);
          setPreSelectedPrice(undefined);
          setBookingModalOpen(true);
        }}
        onOpenQr={() => setQrModalOpen(true)}
        onOpenPortals={() => setPortalsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden pb-24 md:pb-0">
        {/* 2. Hero with Express 30-Sec Booking Card */}
        <Hero
          lang={lang}
          selectedCity={selectedCity}
          onSelectCity={handleSelectCity}
          onExpressBook={handleExpressBook}
          onOpenBooking={() => setBookingModalOpen(true)}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Supported Brands Infinite Marquee */}
        <BrandsMarquee onOpenBooking={() => setBookingModalOpen(true)} />

        {/* 3. Interactive Category Grid */}
        <ApplianceCategoryGrid
          lang={lang}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Smart Appliance Diagnostic Assistant (Symptom Checker) */}
        <DiagnosticAssistant selectedCity={selectedCity} onBookIssue={handleBookDiagnosticIssue} />

        {/* 5. Interactive Transparent Price Estimator */}
        <PriceCalculator
          lang={lang}
          selectedCity={selectedCity}
          onBookEstimatedService={handleBookEstimatedService}
        />

        {/* 6. Services Catalogue Section */}
        <ServicesSection
          lang={lang}
          selectedCity={selectedCity}
          activeCategory={selectedCategory}
          onSelectCategory={(cat) => {
            if (cat !== 'all') setSelectedCategory(cat);
          }}
          onBookService={handleBookService}
        />

        {/* 7. Why Choose Us & Sameer Bhai's Workshop Showcase */}
        <WhyChooseUs
          lang={lang}
          selectedCity={selectedCity}
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 8. Verified Google Reviews (928+ Reviews on GMB Profile) */}
        <GoogleReviews lang={lang} selectedCity={selectedCity} />

        {/* 9. Native Android App Download Showcase */}
        <AppDownloadShowcase />

        {/* 10. Instagram Video Reels Hub & ₹100 Follower Discount */}
        <InstagramReelsSection
          lang={lang}
          onApplyCoupon={() => {
            setBookingModalOpen(true);
          }}
        />

        {/* 11. Annual Maintenance Contracts (AMC) */}
        <CommercialAMC
          lang={lang}
          selectedCity={selectedCity}
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 12. Technician Partner Network */}
        <PartnerNetwork lang={lang} selectedCity={selectedCity} />

        {/* 13. Frequently Asked Questions (FAQ) */}
        <FAQSection selectedCity={selectedCity} />
      </main>

      {/* Modern Footer */}
      <Footer
        lang={lang}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenQr={() => setQrModalOpen(true)}
        onOpenPortals={() => setPortalsModalOpen(true)}
      />

      {/* Mobile Sticky Navigation Bar */}
      <MobileStickyBar
        lang={lang}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenBooking={() => {
          setPreSelectedService(null);
          setPreSelectedPrice(undefined);
          setBookingModalOpen(true);
        }}
        onOpenPortals={() => setPortalsModalOpen(true)}
        onOpenQr={() => setQrModalOpen(true)}
      />

      {/* Smart QR Code AC Sticker Modal */}
      <QRCodeStickerModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />

      {/* Customer & Partner Management Hub Modal */}
      <PortalHubModal
        isOpen={portalsModalOpen}
        onClose={() => setPortalsModalOpen(false)}
        selectedCity={selectedCity}
      />

      {/* 3-Step Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        lang={lang}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
        preSelectedService={preSelectedService}
        preSelectedQuantity={preSelectedQuantity}
        preSelectedPrice={preSelectedPrice}
        preFilledContact={preFilledContact}
        onOpenPortals={() => setPortalsModalOpen(true)}
      />

      {/* First-Visit & Instant City Selection Gateway Modal */}
      <CitySelectModal
        isOpen={cityModalOpen}
        onClose={() => setCityModalOpen(false)}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
      />
    </div>
  );
}

export default App;
