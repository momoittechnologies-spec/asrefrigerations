import { GooglePlayBadge } from './GooglePlayBadge';
import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Wrench, 
  CheckCircle2,
  Sparkles,
  Download,
  Smartphone,
  Navigation
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { ServiceItem } from '../data/servicesData';
import { CityId, CITIES_DATA } from '../data/citiesData';
import { detectCityFromLocation } from '../data/servicesData';

interface HeroProps {
  lang: Language;
  selectedCity?: CityId;
  onSelectCity?: (city: CityId) => void;
  onExpressBook: (data: {
    appliance: string;
    issue: string;
    city?: CityId;
    area: string;
    phone: string;
    name: string;
  }) => void;
  onOpenBooking: () => void;
  onSelectCategory: (cat: ServiceItem['category']) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  selectedCity = 'kadapa',
  onSelectCity,
  onExpressBook,
  onOpenBooking,
  onSelectCategory
}) => {
  const t = TRANSLATIONS[lang];
  const cityConfig = CITIES_DATA[selectedCity];

  const [appliance, setAppliance] = useState('AC');
  const [issue, setIssue] = useState('Deep Jet Wash / Foam Cleaning');
  const [area, setArea] = useState(cityConfig.localities[0]);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [gpsDetecting, setGpsDetecting] = useState(false);
  const [detectedToast, setDetectedToast] = useState<string | null>(null);
  const [gpsGuideOpen, setGpsGuideOpen] = useState<boolean>(false);

  const handleHeroGpsDetect = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setGpsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const detected = detectCityFromLocation(undefined, lat, lng);
        if (onSelectCity && detected !== selectedCity) {
          onSelectCity(detected);
        }

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
          if (res.ok) {
            const data = await res.json();
            const addr = data.address || {};
            const rawLoc = addr.suburb || addr.neighbourhood || addr.city_district || addr.locality || '';
            if (rawLoc) {
              const matched = CITIES_DATA[detected].localities.find(
                (loc) => loc.toLowerCase().includes(rawLoc.toLowerCase()) || rawLoc.toLowerCase().includes(loc.toLowerCase())
              );
              setArea(matched || rawLoc);
            }
          }
        } catch {}

        setGpsDetecting(false);
        const cityTitle = detected === 'bangalore' ? 'Bangalore (Kammanahalli)' : 'Kadapa District';
        setDetectedToast(`📍 Auto-switched to ${cityTitle} • Dynamic ${detected === 'bangalore' ? 'Bangalore' : 'Kadapa'} rates applied!`);
        setTimeout(() => setDetectedToast(null), 5000);
      },
      () => {
        setGpsDetecting(false);
        setGpsGuideOpen(true);
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };


  // Update area when city changes
  React.useEffect(() => {
    setArea(cityConfig.localities[0]);
  }, [selectedCity]);

  const issueOptions: Record<string, string[]> = {
    AC: selectedCity === 'bangalore' ? [
      'Antibacterial Foam Wash / Master Wash',
      'AC Not Cooling / Warm Air',
      'Gas Leakage & Refill (R32 / R410 / R22)',
      'Water Leakage from Indoor Unit',
      'AC Uninstallation & New Fitting',
      'Strange Noise / PCB Error / Power Issue'
    ] : [
      'Deep Jet Wash / Foam Cleaning',
      'AC Not Cooling / Warm Air',
      'Gas Leakage & Refill (R32 / R410 / R22)',
      'Water Leakage from Indoor Unit',
      'AC Uninstallation & New Fitting',
      'Strange Noise / PCB Error / Power Issue'
    ],
    Refrigerator: [
      'Fridge Not Cooling / Upper Freezing Only',
      'Gas Refill / Leak Repair (R134a / R600a)',
      'Water Leaking Inside / Defrost Issue',
      'Strange Compressor Sound / Tripping Power',
      'Double Door / Inverter Inoperative'
    ],
    'Washing Machine': [
      'Drum Not Rotating / Spin Issue',
      'Water Not Draining / OE Error',
      'Power On Problem / PCB Board Fault',
      'Excessive Vibration & Noise',
      'Deep Descale Wash Needed'
    ],
    Electrical: [
      'Geyser Heating Coil / Thermostat Repair',
      'Microwave Oven Not Heating',
      'Inverter & Home Wiring Tripping',
      'Ceiling Fan & Switchboard Fixing'
    ]
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert('Please enter your WhatsApp phone number for technician confirmation.');
      return;
    }
    const detected = detectCityFromLocation(area);
    if (detected !== selectedCity && onSelectCity) {
      onSelectCity(detected);
    }
    onExpressBook({
      appliance,
      issue,
      city: detected || selectedCity,
      area: area.trim() || cityConfig.localities[0],
      phone,
      name: name || 'Customer'
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#0B0F19] text-white pt-8 pb-16 lg:py-20">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & Social Proof */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-red-500 animate-spin" />
              <span>Doorstep Technician Visits within 60 Mins across {cityConfig.name}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              {selectedCity === 'kadapa' ? (
                <>Beat The Heat With Kadapa's <span className="text-red-500">#1 AC & Appliance</span> Experts</>
              ) : (
                <>Fast Doorstep AC & Appliance Service in <span className="text-red-500">Bangalore (Kammanahalli)</span></>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Key Trust Highlights Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 ios-tap">
                <div className="flex items-center gap-1 text-amber-400 font-black text-base sm:text-lg">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                  <span>4.9 / 5</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">928+ Google Reviews</div>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 ios-tap">
                <div className="flex items-center gap-1 text-red-400 font-black text-base sm:text-lg">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>60 Mins</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Express Doorstep Visit</div>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 ios-tap">
                <div className="flex items-center gap-1 text-emerald-400 font-black text-base sm:text-lg">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>30 Days</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Service Warranty</div>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 ios-tap">
                <div className="flex items-center gap-1 text-sky-400 font-black text-base sm:text-lg">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>10+ Yrs</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Master Sameer Bhai</div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 w-full">
              <a
                href={`tel:${cityConfig.phone}`}
                className="flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 font-black text-white text-sm sm:text-base shadow-lg shadow-red-600/20 ios-tap transition text-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="truncate">
                  {selectedCity === 'kadapa' ? `Call Shaik Sameer: ${cityConfig.phone}` : `Call Bangalore Hub: ${cityConfig.phone}`}
                </span>
              </a>

              <a
                href={`https://wa.me/${cityConfig.phoneRaw}?text=${encodeURIComponent(`Hi AS Refrigeration, I am looking for AC or Fridge service in ${cityConfig.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 font-black text-white text-sm sm:text-base shadow-lg shadow-emerald-600/20 ios-tap transition text-center"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Instant WhatsApp ({cityConfig.name})</span>
              </a>
            </div>

            {/* Assurance Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fixed & Transparent Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Genuine Refrigerants
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pay Cash/UPI After Repair
              </span>
            </div>

            {/* Native Mobile App VIP Loyalty Banner - Mobile-First & Desktop Optimized */}
            <div className="pt-3">
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/40 shadow-2xl relative overflow-hidden text-left">
                {/* Decorative ambient glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: App Identity & Rating */}
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-800/90 p-1.5 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/10">
                      <img 
                        src="/as-logo-square.png" 
                        alt="AS Refrigerations App Icon" 
                        className="w-full h-full object-cover rounded-xl"
                        loading="eager"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-black text-white text-sm sm:text-base tracking-tight">
                          AS Customer Android App
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-slate-950 uppercase tracking-wide shrink-0 shadow-xs">
                          ₹100 OFF
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Live GPS technician arrival radar, 1-tap re-booking &amp; 0% doorstep UPI bills.
                      </p>
                      
                      {/* Trust badge row on mobile */}
                      <div className="flex items-center gap-2 mt-1.5 text-[11px] font-bold">
                        <span className="text-amber-400">★ 4.9 (928+ reviews)</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Google Play Official</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Touch-optimized Action Area */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2.5 shrink-0 pt-2 sm:pt-0 border-t border-slate-800/80 sm:border-0 w-full sm:w-auto">
                    <div className="w-full sm:w-auto flex justify-center">
                      <GooglePlayBadge
                        width="198.59px"
                        height="57.36px"
                        className="w-[185px] sm:w-[198.59px] h-auto aspect-[198.59/57.36] shadow-xl hover:shadow-emerald-500/20"
                      />
                    </div>
                    <a
                      href="#mobile-app"
                      className="text-xs text-slate-400 hover:text-emerald-300 transition py-1 text-center font-bold sm:hidden"
                    >
                      View Features &amp; Partner APK →
                    </a>
                    <a
                      href="#mobile-app"
                      className="hidden sm:inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition shrink-0"
                    >
                      App Details →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 30-Second Express Booking Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900/95 border border-slate-800 rounded-[28px] p-6 sm:p-7 shadow-2xl backdrop-blur-xl text-left">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Fast Dispatch</span>
              </div>

              <div className="mb-5">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>{t.instantBookHeading}</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  {t.instantBookSub}
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                {/* Step 1: Appliance Tabs */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    1. Select Appliance
                  </label>
                  <div className="grid grid-cols-4 gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
                    {(['AC', 'Refrigerator', 'Washing Machine', 'Electrical'] as const).map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => {
                          setAppliance(item);
                          setIssue(issueOptions[item][0]);
                        }}
                        className={`py-2 px-1 text-xs font-bold rounded-xl transition text-center cursor-pointer ios-tap ${
                          appliance === item
                            ? 'bg-red-600 text-white shadow-md font-black'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {item === 'AC' ? '❄️ AC' : item === 'Refrigerator' ? '🧊 Fridge' : item === 'Washing Machine' ? '🧺 Wash' : '⚡ Elect'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Issue Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    2. Select Problem / Required Service
                  </label>
                  <select
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  >
                    {issueOptions[appliance]?.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 3: Smart Locality / GPS Field (Replaced Dropdown with Auto-GPS Input) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      3. Doorstep Landmark / Street ({cityConfig.name})
                    </label>
                    <span className="text-[10px] text-slate-400 font-medium">Type Colony or 1-Tap GPS</span>
                  </div>

                  {detectedToast && (
                    <div className="mb-2 p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-bold flex items-center gap-1.5">
                      <span>✓</span>
                      <span>{detectedToast}</span>
                    </div>
                  )}

                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-red-500 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      list="hero-locality-suggestions"
                      required
                      placeholder="e.g. Flat 302, Near Church / Main Road"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-9 pr-24 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                    />
                    <datalist id="hero-locality-suggestions">
                      {cityConfig.localities.map((ar) => (
                        <option key={ar} value={ar} />
                      ))}
                    </datalist>

                    <button
                      type="button"
                      onClick={handleHeroGpsDetect}
                      disabled={gpsDetecting}
                      className="absolute right-1.5 px-2.5 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-400 border border-emerald-500/40 text-[11px] font-black transition cursor-pointer flex items-center gap-1 active:scale-95 disabled:opacity-50"
                      title="Fetch current location via GPS"
                    >
                      <Navigation className={`w-3 h-3 ${gpsDetecting ? 'animate-spin' : ''}`} />
                      <span>{gpsDetecting ? 'Detecting...' : 'Auto GPS'}</span>
                    </button>
                  </div>
                </div>

                {/* Step 4: Name & WhatsApp Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Reddy"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                    />
                  </div>
                </div>

                {/* Mobile App Advantage Callout */}
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base shrink-0">📱</span>
                    <span className="text-[11px] font-medium text-slate-300">
                      Prefer <strong className="text-emerald-400">Live GPS Technician Radar</strong>?
                    </span>
                  </div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition shadow-xs shrink-0 flex items-center gap-1"
                  >
                    <span>Google Play (₹100 Off)</span>
                  </a>
                </div>

                {/* Submit Express Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-sm sm:text-base shadow-xl shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer ios-tap transition mt-2 active:scale-98"
                >
                  <span>Confirm Doorstep Booking</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Doorstep Visiting Fee Education Badge */}
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base shrink-0">🏷️</span>
                    <span className="text-[11px] font-medium text-amber-200">
                      Doorstep Visiting Fee: <strong className="text-white font-bold">₹{cityConfig.diagnosticFee}</strong> ({cityConfig.name})
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-md border border-amber-500/40">
                    100% Waived in Bill
                  </span>
                </div>

                <div className="text-[11px] text-center text-slate-400 font-medium">
                  🔒 No advance payment needed. Doorstep visiting fee ₹{cityConfig.diagnosticFee} in {cityConfig.name} — 100% waived in final repair bill upon approval!
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
