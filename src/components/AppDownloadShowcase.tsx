import React from 'react';
import {
  Smartphone,
  Download,
  Star,
  ShieldCheck,
  MapPin,
  QrCode,
  Lock,
  Sparkles,
  Bell,
  Layers,
  Clock,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Zap,
  Check
} from 'lucide-react';
import { GooglePlayBadge } from './GooglePlayBadge';

export const AppDownloadShowcase: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="w-5 h-5" />,
      color: 'red',
      title: 'Live Doorstep Tracker',
      desc: '6-stage real-time stepper: Booking Confirmed → Technician En Route → Doorstep Arrived → Work In Progress → Bill Generated → Paid.'
    },
    {
      icon: <Lock className="w-5 h-5" />,
      color: 'emerald',
      title: 'Zero-SMS PIN Auth',
      desc: 'Native mobile-number + 4-digit PIN login stored securely on device. No OTP costs, no SMS billing.'
    },
    {
      icon: <QrCode className="w-5 h-5" />,
      color: 'amber',
      title: 'Doorstep NPCI UPI QR',
      desc: 'Sameer locks the final price on-site. Customer scans a dynamic NPCI QR via PhonePe / GPay — 0% gateway fee.'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      color: 'purple',
      title: 'Sameer-First Dispatch',
      desc: 'Jobs auto-assigned to Shaik Sameer as Priority 1. Overflow routed to verified partner technicians.'
    },
    {
      icon: <Bell className="w-5 h-5" />,
      color: 'sky',
      title: 'Push Notifications',
      desc: 'Native Android push alerts for booking updates, technician ETA, and service completion receipt.'
    },
    {
      icon: <Layers className="w-5 h-5" />,
      color: 'rose',
      title: 'Dual App Architecture',
      desc: 'Two separate dedicated apps: Customer Booking App on Google Play & Technician Partner Dispatcher App — each purpose-built.'
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    red:     { bg: 'bg-red-500/10',     border: 'border-red-500/20',     text: 'text-red-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    amber:   { bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   text: 'text-amber-400' },
    purple:  { bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  text: 'text-purple-400' },
    sky:     { bg: 'bg-sky-500/10',     border: 'border-sky-500/20',     text: 'text-sky-400' },
    rose:    { bg: 'bg-rose-500/10',    border: 'border-rose-500/20',    text: 'text-rose-400' },
  };

  return (
    <section id="mobile-app" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Now on Google Play Store • Official Android Apps</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            The <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">AS REFRIGERATIONS</span><br className="hidden sm:inline" />
            Official Android App
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            A fully dedicated native Android application built with Kotlin &amp; Jetpack Compose for a genuine smartphone experience — purpose-built for fast-track booking, live technician GPS arrival tracking, and doorstep 0% UPI payments.
          </p>
        </div>

        {/* Download Cards - 3 Column Grid for Customer (Play Store), Partner (APK) & iOS (Coming Soon) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">

          {/* 1. Customer App (Google Play Store Official Spotlight Card) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-emerald-500/60 hover:border-emerald-400 transition-all duration-300 shadow-2xl relative overflow-hidden group flex flex-col justify-between">
            {/* Top spotlight ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 font-black text-[10px] uppercase px-3.5 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              <span>Google Play Verified</span>
            </div>

            <div>
              {/* App Identity Row */}
              <div className="flex items-center gap-3.5 mb-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 p-1.5 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                  <img 
                    src="/as-logo-square.png" 
                    alt="AS Refrigerations Customer App" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-extrabold block">
                    Customer App
                  </span>
                  <h4 className="text-lg font-black text-white leading-tight">
                    AS REFRIGERATIONS
                  </h4>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Doorstep AC &amp; Appliance Service
                  </span>
                </div>
              </div>

              {/* Rating & Stats Pill */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-4 text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-black">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-semibold">16 MB</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Play Protect</span>
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Fast-track 60-min express repair booking, live 6-stage technician GPS radar, and direct 0% UPI door payment with instant ₹100 app discount.
              </p>

              {/* Micro feature chips */}
              <div className="grid grid-cols-2 gap-2 mb-5 text-[11px] font-semibold text-slate-300">
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/5 border border-white/5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Live GPS Radar</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/5 border border-white/5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Instant ₹100 Off</span>
                </div>
              </div>
            </div>

            {/* CTA: Official Google Play Badge */}
            <div className="flex flex-col items-center gap-3 pt-3 border-t border-slate-800/80">
              <div className="w-full flex justify-center">
                <GooglePlayBadge
                  url="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                  width="198.59px"
                  height="57.36px"
                  className="w-[190px] sm:w-[198.59px] h-auto aspect-[198.59/57.36] shadow-xl shadow-emerald-950/60"
                />
              </div>

              {/* Direct APK fallback link */}
              <a
                href="/downloads/as-refrigerations-customer.apk"
                download="as-refrigerations-customer.apk"
                className="text-[11px] text-slate-400 hover:text-emerald-300 underline font-semibold flex items-center gap-1 transition"
                title="Download direct APK file"
              >
                <Download className="w-3 h-3" />
                <span>Or download direct APK (16 MB)</span>
              </a>
            </div>
          </div>

          {/* 2. Partner Android App (Google Play Store Badge + Direct APK) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-amber-500/50 hover:border-amber-400 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-500 text-slate-950 font-black text-[10px] uppercase px-3.5 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              <span>Google Play Partner</span>
            </div>

            <div>
              {/* App Identity Row */}
              <div className="flex items-center gap-3.5 mb-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 p-1.5 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10">
                  <img 
                    src="/as-logo-square.png" 
                    alt="AS Refrigerations Partner App" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider font-extrabold block">
                    Technician Hub
                  </span>
                  <h4 className="text-lg font-black text-white leading-tight">
                    AS PARTNER
                  </h4>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Service Dispatch &amp; Quotations
                  </span>
                </div>
              </div>

              {/* Rating & Stats Pill */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-4 text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-black">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>Field Edition</span>
                </div>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-semibold">18.2 MB</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Play Protect</span>
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Dedicated for Shaik Sameer (Kadapa) &amp; Syed (Bangalore) partner technicians: live leads radar, GPS turn-by-turn route, dynamic UPI QR &amp; earnings ledger.
              </p>

              {/* Micro feature chips */}
              <div className="grid grid-cols-2 gap-2 mb-5 text-[11px] font-semibold text-slate-300">
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/5 border border-white/5">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Instant Leads Radar</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/5 border border-white/5">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">NPCI Dynamic QR</span>
                </div>
              </div>
            </div>

            {/* Action CTA: Official Google Play Badge + Fallback APK */}
            <div className="flex flex-col items-center gap-3 pt-3 border-t border-slate-800/80">
              <div className="w-full flex justify-center">
                <GooglePlayBadge
                  url="https://play.google.com/store/apps/details?id=com.asrefrigerations.partner"
                  width="198.59px"
                  height="57.36px"
                  className="w-[190px] sm:w-[198.59px] h-auto aspect-[198.59/57.36] shadow-xl shadow-amber-950/60"
                  analyticsLabel="Google Play Partner App"
                />
              </div>

              <a
                href="/downloads/as-refrigerations-partner.apk"
                download="as-refrigerations-partner.apk"
                className="text-[11px] text-slate-400 hover:text-amber-300 underline font-semibold flex items-center gap-1 transition"
                title="Download direct Partner APK file"
              >
                <Download className="w-3 h-3" />
                <span>Or download direct Partner APK (18 MB)</span>
              </a>
            </div>
          </div>

          {/* 3. iOS Coming Soon Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border-2 border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-sky-500/20 text-sky-300 font-bold text-[10px] uppercase px-3 py-1 rounded-bl-xl border-b border-l border-sky-500/30">
              Q1 2027
            </div>

            <div>
              {/* App Identity Row */}
              <div className="flex items-center gap-3.5 mb-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 p-2 border border-slate-700 flex items-center justify-center shrink-0 shadow-md">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.76 1.05-1.81.93-2.84-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.74-.96 2.76 1.02.08 2.07-.53 2.7-1.29z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block">
                    Apple Ecosystem
                  </span>
                  <h4 className="text-lg font-black text-white leading-tight">
                    Apple App Store
                  </h4>
                  <span className="text-[11px] text-slate-400 font-medium">
                    iOS &amp; iPadOS Client
                  </span>
                </div>
              </div>

              {/* Stats Pill */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-4 text-xs text-sky-400 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Swift &amp; SwiftUI</span>
                </div>
                <span className="text-slate-600">•</span>
                <span>In Planning</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Native Swift &amp; SwiftUI iOS client for iPhone &amp; iPad. Scheduled under Apple Developer Organization Program.
              </p>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed mb-4">
                Scheduled release for iPhone users following Android launch in South India.
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800/80 text-slate-400 font-black text-xs border border-slate-700 cursor-not-allowed select-none">
                <span>🍏 iOS App — Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Installation & Verification Guide */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-left max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
              <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
                How to Install the AS Refrigerations App
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Official Play Store Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-black text-sm flex items-center justify-center mb-2.5">
                  1
                </div>
                <strong className="text-white text-sm block font-bold mb-1">Get on Google Play</strong>
                <p className="text-slate-400 leading-relaxed">
                  Tap the official <strong>"Get it on Google Play"</strong> badge above. Tap Install on the Play Store for automatic, virus-scanned installation.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-black text-sm flex items-center justify-center mb-2.5">
                  2
                </div>
                <strong className="text-white text-sm block font-bold mb-1">Quick 4-Digit PIN</strong>
                <p className="text-slate-400 leading-relaxed">
                  Enter your mobile number and set a 4-digit PIN. Instant zero-SMS authentication stored securely on your phone.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 font-black text-sm flex items-center justify-center mb-2.5">
                  3
                </div>
                <strong className="text-white text-sm block font-bold mb-1">Track &amp; Save ₹100</strong>
                <p className="text-slate-400 leading-relaxed">
                  Enjoy real-time 6-stage GPS technician tracking, transparent quotation bills, and instant ₹100 discount on your doorstep repair!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {features.map((f, i) => {
            const c = colorMap[f.color];
            return (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-colors duration-200">
                <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.border} border ${c.text} flex items-center justify-center shrink-0 mt-0.5`}>
                  {f.icon}
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm mb-1">{f.title}</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MSME Trust Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-slate-800/60">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Official Registered Business · <strong className="text-slate-300">AS REFRIGERATIONS</strong></span>
          </div>
          <span className="hidden sm:block text-slate-700">•</span>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Native Kotlin &amp; Jetpack Compose · <strong className="text-slate-300">Android 7.0+</strong></span>
          </div>
          <span className="hidden sm:block text-slate-700">•</span>
          <a
            href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 transition"
          >
            <span>View on Google Play Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
