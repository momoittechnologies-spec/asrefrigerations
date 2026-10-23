import React, { useState } from 'react';
import { 
  MapPin, 
  Check, 
  Navigation, 
  Phone, 
  Building2, 
  Sparkles, 
  X, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Download,
  Smartphone
} from 'lucide-react';
import { CityId, CITIES_DATA } from '../data/citiesData';
import { detectCityFromLocation } from '../data/servicesData';

interface CitySelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: CityId;
  onSelectCity: (city: CityId) => void;
}

export const CitySelectModal: React.FC<CitySelectModalProps> = ({
  isOpen,
  onClose,
  selectedCity,
  onSelectCity
}) => {
  const [detecting, setDetecting] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelect = (city: CityId) => {
    onSelectCity(city);
    onClose();
  };

  const handleGpsDetect = () => {
    if (!navigator.geolocation) {
      setGpsError('Geolocation is not supported by your browser.');
      return;
    }
    setDetecting(true);
    setGpsError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const detected = detectCityFromLocation(
          undefined,
          position.coords.latitude,
          position.coords.longitude
        );
        setDetecting(false);
        handleSelect(detected);
      },
      (error) => {
        setDetecting(false);
        setGpsError('Could not detect location. Please select your city manually below.');
      },
      { timeout: 8000 }
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-600" />

        {/* Close Button (only if user already has a selected city) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Doorstep Service Hub</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Select Your City / ప్రాంతాన్ని ఎంచుకోండి
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Choose your location to unlock accurate local rates, verified technician arrival in 60 mins, and local branch helpline.
          </p>

          {/* Quick GPS Button */}
          <div className="mt-4">
            <button
              onClick={handleGpsDetect}
              disabled={detecting}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold transition cursor-pointer disabled:opacity-50"
            >
              <Navigation className={`w-3.5 h-3.5 text-emerald-400 ${detecting ? 'animate-spin' : ''}`} />
              <span>{detecting ? 'Detecting Location...' : '📍 Auto-Detect City via GPS'}</span>
            </button>
            {gpsError && (
              <p className="text-[11px] text-amber-400 mt-1.5 font-medium">{gpsError}</p>
            )}
          </div>
        </div>

        {/* City Selection Options (2 Big Cards) */}
        <div className="p-4 sm:p-8 pt-2 overflow-y-auto space-y-3.5">
          {/* Card 1: KADAPA */}
          <div
            onClick={() => handleSelect('kadapa')}
            className={`group relative p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left ${
              selectedCity === 'kadapa'
                ? 'bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 border-red-500/60 shadow-lg shadow-red-950/30 ring-1 ring-red-500/30'
                : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  selectedCity === 'kadapa' ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-300'
                }`}>
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-white group-hover:text-red-400 transition">
                      KADAPA
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-red-500/20 text-red-300 border border-red-500/30 uppercase">
                      Flagship HQ
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Entire District Coverage • 25+ Towns</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    Mariapuram, Chinna Chowk, Akkayapalli, NGO Colony, Proddatur, Pulivendula, Badvel, Rayachoty & all areas.
                  </p>
                  <div className="mt-2 text-[11px] text-slate-300 flex items-center gap-2 font-semibold">
                    <Phone className="w-3 h-3 text-red-400" />
                    <span>Helpline: +91 78158 51330 (Shaik Sameer)</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                {selectedCity === 'kadapa' ? (
                  <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-slate-700/60 group-hover:bg-red-600 text-slate-400 group-hover:text-white flex items-center justify-center transition">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: BANGALORE */}
          <div
            onClick={() => handleSelect('bangalore')}
            className={`group relative p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left ${
              selectedCity === 'bangalore'
                ? 'bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 border-red-500/60 shadow-lg shadow-red-950/30 ring-1 ring-red-500/30'
                : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  selectedCity === 'bangalore' ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-300'
                }`}>
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-white group-hover:text-red-400 transition">
                      BANGALORE
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
                      Branch Hub
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Kammanahalli & Nearby Areas • 60-Min Dispatch</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    Kammanahalli, Kalyan Nagar, Banaswadi, HRBR Layout, Hennur, HBR, Ramamurthy Nagar & surrounding.
                  </p>
                  <div className="mt-2 text-[11px] text-slate-300 flex items-center gap-2 font-semibold">
                    <Phone className="w-3 h-3 text-red-400" />
                    <span>Helpline: +91 80732 06402</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                {selectedCity === 'bangalore' ? (
                  <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-slate-700/60 group-hover:bg-red-600 text-slate-400 group-hover:text-white flex items-center justify-center transition">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer info & APK Instigation Bar */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white flex items-center gap-1.5">
                <span>Official AS Android App</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500 text-slate-950 uppercase">₹100 OFF</span>
              </div>
              <p className="text-[11px] text-slate-400">Install native APK for live technician arrival GPS tracking & 1-tap bookings</p>
            </div>
          </div>
          <a
            href="/downloads/as-refrigerations-customer.apk"
            download="as-refrigerations-customer.apk"
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shrink-0 shadow-md shadow-emerald-600/20 active:scale-95 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>
        </div>
      </div>
    </div>
  );
};
