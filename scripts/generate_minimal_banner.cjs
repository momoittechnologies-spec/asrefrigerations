const fs = require('fs');

const logoBase64 = fs.readFileSync('website/public/as-logo.png').toString('base64');
const qrWaBase64 = fs.readFileSync('website/public/qr-whatsapp.svg').toString('base64');
const playBadgeBase64 = fs.readFileSync('website/public/google-play-badge.svg').toString('base64');

// ============================================================================
// MINIMAL HIGH-IMPACT 8x4 FT FLEX BANNER (2400 x 1200 px - 2:1 Ratio)
// Ultra-clean, uncluttered, readable from 100 feet away in 3 seconds!
// ============================================================================
const svgMinimal = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2400 1200" width="2400" height="1200">
  <defs>
    <!-- Rich Deep Luxury Background -->
    <linearGradient id="minBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040711" />
      <stop offset="45%" stop-color="#0A1124" />
      <stop offset="100%" stop-color="#03050B" />
    </linearGradient>

    <!-- Vibrant Ambient Halos -->
    <radialGradient id="redAura" cx="15%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#EF4444" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#EF4444" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cyanAura" cx="85%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#00D2FF" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#00D2FF" stop-opacity="0" />
    </radialGradient>

    <!-- High-Impact Phone Pill Gradient -->
    <linearGradient id="callGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B91C1C" />
      <stop offset="40%" stop-color="#DC2626" />
      <stop offset="70%" stop-color="#EF4444" />
      <stop offset="100%" stop-color="#B91C1C" />
    </linearGradient>

    <!-- Appliance Card Glows -->
    <linearGradient id="glassCard" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.85" />
    </linearGradient>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800;900&amp;display=swap');
    text {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
  </style>

  <!-- 1. Background -->
  <rect width="2400" height="1200" fill="url(#minBg)" />
  <rect width="2400" height="1200" fill="url(#redAura)" />
  <rect width="2400" height="1200" fill="url(#cyanAura)" />

  <!-- Outer Vinyl Edge & Eyelets -->
  <rect x="18" y="18" width="2364" height="1164" rx="20" fill="none" stroke="#EF4444" stroke-width="3" stroke-opacity="0.35" />
  <g fill="#D4AF37" stroke="#78350F" stroke-width="2" opacity="0.6">
    <circle cx="35" cy="35" r="10" /> <circle cx="35" cy="35" r="5" fill="#0A1124" />
    <circle cx="1200" cy="35" r="8" /> <circle cx="1200" cy="35" r="4" fill="#0A1124" />
    <circle cx="2365" cy="35" r="10" /> <circle cx="2365" cy="35" r="5" fill="#0A1124" />
    <circle cx="35" cy="1165" r="10" /> <circle cx="35" cy="1165" r="5" fill="#0A1124" />
    <circle cx="1200" cy="1165" r="8" /> <circle cx="1200" cy="1165" r="4" fill="#0A1124" />
    <circle cx="2365" cy="1165" r="10" /> <circle cx="2365" cy="1165" r="5" fill="#0A1124" />
  </g>

  <!-- ========================================================================
       TOP SECTION: POWERFUL BRAND IDENTITY + LOCATION (Y: 50 to 190)
       ======================================================================== -->
  <g transform="translate(80, 50)">
    <!-- Logo -->
    <rect x="0" y="0" width="135" height="135" rx="28" fill="#0F172A" stroke="#EF4444" stroke-width="3" filter="url(#softGlow)" />
    <image x="12" y="12" width="111" height="111" xlink:href="data:image/png;base64,${logoBase64}" preserveAspectRatio="xMidYMid meet" />

    <!-- Brand Typography -->
    <text x="165" y="65" fill="#FFFFFF" font-size="64" font-weight="900" letter-spacing="-1">
      AS <tspan fill="#EF4444">REFRIGERATIONS</tspan>
    </text>
    <text x="168" y="105" fill="#38BDF8" font-size="22" font-weight="800" letter-spacing="4">
      BANGALORE • KAMMANAHALLI SERVICE HUB
    </text>
  </g>

  <!-- Top Right Google Review & Trust Pill -->
  <g transform="translate(1620, 70)">
    <rect x="0" y="0" width="700" height="90" rx="45" fill="#0F172A" stroke="#334155" stroke-width="2" />
    
    <g transform="translate(30, 24)">
      <circle cx="20" cy="20" r="20" fill="#F59E0B" />
      <text x="20" y="27" fill="#78350F" font-size="22" font-weight="900" text-anchor="middle">★</text>
      <text x="55" y="18" fill="#FDE68A" font-size="14" font-weight="800" text-transform="uppercase">Google Reviews</text>
      <text x="55" y="38" fill="#FFFFFF" font-size="19" font-weight="900">4.9 / 5.0 (928+ Verified Reviews)</text>
    </g>

    <line x1="410" y1="15" x2="410" y2="75" stroke="#334155" stroke-width="2" />

    <g transform="translate(435, 24)">
      <circle cx="20" cy="20" r="20" fill="#10B981" />
      <text x="20" y="27" fill="#022C22" font-size="20" font-weight="900" text-anchor="middle">✓</text>
      <text x="55" y="18" fill="#6EE7B7" font-size="14" font-weight="800" text-transform="uppercase">Doorstep Visit</text>
      <text x="55" y="38" fill="#FFFFFF" font-size="19" font-weight="900">100% In-Home Repair</text>
    </g>
  </g>

  <!-- ========================================================================
       CENTER HERO PUNCHLINE (Y: 220 to 330) - BOLD, CLEAN & BREATHABLE
       ======================================================================== -->
  <g transform="translate(1200, 275)" text-anchor="middle">
    <text x="0" y="0" fill="#FFFFFF" font-size="52" font-weight="900" letter-spacing="-0.5">
      DOORSTEP <tspan fill="#EF4444">AC, FRIDGE &amp; WASHING MACHINE</tspan> REPAIR
    </text>
    <text x="0" y="48" fill="#94A3B8" font-size="24" font-weight="700" letter-spacing="1">
      Kammanahalli • Kalyan Nagar • Banaswadi • HBR Layout • Hennur &amp; Surrounding Areas
    </text>
  </g>

  <!-- ========================================================================
       3 HERO APPLIANCE CARDS (Y: 360 to 760) - CLEAN VISUAL SHOWCASE
       ======================================================================== -->

  <!-- CARD 1: AIR CONDITIONERS -->
  <g transform="translate(80, 360)">
    <rect x="0" y="0" width="710" height="400" rx="30" fill="url(#glassCard)" stroke="#0284C7" stroke-width="3" filter="url(#softGlow)" />
    
    <!-- Header Pill -->
    <rect x="35" y="35" width="640" height="75" rx="20" fill="#0369A1" />
    <circle cx="75" cy="72" r="24" fill="#0284C7" />
    <text x="75" y="81" fill="#FFFFFF" font-size="26" text-anchor="middle">❄️</text>
    <text x="115" y="80" fill="#FFFFFF" font-size="32" font-weight="900">AIR CONDITIONER</text>

    <!-- Key Services (Only 3 Big Bullet Points!) -->
    <g transform="translate(45, 145)" font-size="24" font-weight="800" fill="#FFFFFF">
      <text x="0" y="40">✦ Deep Foam Jet Cleaning Spray</text>
      <text x="615" y="40" fill="#10B981" font-weight="900" text-anchor="end">₹600</text>

      <text x="0" y="105">✦ 100% Genuine Gas Refill (R32/R410A)</text>
      <text x="615" y="105" fill="#38BDF8" font-weight="900" text-anchor="end">₹2,500</text>

      <text x="0" y="170">✦ Installation &amp; Cooling Coil Leak Fix</text>
      <text x="615" y="170" fill="#FDE047" font-weight="900" text-anchor="end">Express</text>
    </g>

    <rect x="35" y="335" width="640" height="38" rx="12" fill="#0C1B33" />
    <text x="355" y="360" fill="#7DD3FC" font-size="16" font-weight="800" text-anchor="middle">
      Split &amp; Inverter ACs • Voltas • Daikin • LG • Blue Star • Samsung
    </text>
  </g>

  <!-- CARD 2: REFRIGERATORS -->
  <g transform="translate(845, 360)">
    <rect x="0" y="0" width="710" height="400" rx="30" fill="url(#glassCard)" stroke="#059669" stroke-width="3" filter="url(#softGlow)" />
    
    <!-- Header Pill -->
    <rect x="35" y="35" width="640" height="75" rx="20" fill="#047857" />
    <circle cx="75" cy="72" r="24" fill="#059669" />
    <text x="75" y="81" fill="#FFFFFF" font-size="26" text-anchor="middle">🧊</text>
    <text x="115" y="80" fill="#FFFFFF" font-size="32" font-weight="900">REFRIGERATOR</text>

    <!-- Key Services (Only 3 Big Bullet Points!) -->
    <g transform="translate(45, 145)" font-size="24" font-weight="800" fill="#FFFFFF">
      <text x="0" y="40">✦ Single Door Direct Cool Fix</text>
      <text x="615" y="40" fill="#10B981" font-weight="900" text-anchor="end">₹1,500</text>

      <text x="0" y="105">✦ Double Door Frost-Free Service</text>
      <text x="615" y="105" fill="#10B981" font-weight="900" text-anchor="end">₹2,000</text>

      <text x="0" y="170">✦ Inverter Compressor &amp; Gas Refill</text>
      <text x="615" y="170" fill="#FDE047" font-weight="900" text-anchor="end">Warranty</text>
    </g>

    <rect x="35" y="335" width="640" height="38" rx="12" fill="#09211B" />
    <text x="355" y="360" fill="#6EE7B7" font-size="16" font-weight="800" text-anchor="middle">
      Frost-Free &amp; Inverter • LG • Samsung • Whirlpool • Godrej • Haier
    </text>
  </g>

  <!-- CARD 3: WASHING MACHINES -->
  <g transform="translate(1610, 360)">
    <rect x="0" y="0" width="710" height="400" rx="30" fill="url(#glassCard)" stroke="#9333EA" stroke-width="3" filter="url(#softGlow)" />
    
    <!-- Header Pill -->
    <rect x="35" y="35" width="640" height="75" rx="20" fill="#7E22CE" />
    <circle cx="75" cy="72" r="24" fill="#9333EA" />
    <text x="75" y="81" fill="#FFFFFF" font-size="26" text-anchor="middle">🧺</text>
    <text x="115" y="80" fill="#FFFFFF" font-size="32" font-weight="900">WASHING MACHINE</text>

    <!-- Key Services (Only 3 Big Bullet Points!) -->
    <g transform="translate(45, 145)" font-size="24" font-weight="800" fill="#FFFFFF">
      <text x="0" y="40">✦ Front Load Inverter Direct Drive</text>
      <text x="615" y="40" fill="#D8B4FE" font-weight="900" text-anchor="end">Specialist</text>

      <text x="0" y="105">✦ Top Load Drum, Pulsator &amp; Rods</text>
      <text x="615" y="105" fill="#D8B4FE" font-weight="900" text-anchor="end">Express</text>

      <text x="0" y="170">✦ Motherboard (PCB) Circuit Repair</text>
      <text x="615" y="170" fill="#FDE047" font-weight="900" text-anchor="end">Chip-Level</text>
    </g>

    <rect x="35" y="335" width="640" height="38" rx="12" fill="#20112A" />
    <text x="355" y="360" fill="#D8B4FE" font-size="16" font-weight="800" text-anchor="middle">
      Automatic &amp; Inverter • IFB • Bosch • LG • Samsung • Whirlpool
    </text>
  </g>

  <!-- ========================================================================
       TRUST GUARANTEE BAR (Y: 790 to 890) - 3 CORE PILLARS ONLY
       ======================================================================== -->
  <g transform="translate(80, 795)">
    <!-- Pillar 1: 60-Mins -->
    <rect x="0" y="0" width="710" height="95" rx="24" fill="#0F172A" stroke="#10B981" stroke-width="2.5" />
    <circle cx="55" cy="48" r="26" fill="#10B981" />
    <text x="55" y="58" fill="#022C22" font-size="28" text-anchor="middle">⚡</text>
    <text x="98" y="40" fill="#6EE7B7" font-size="14" font-weight="800">GUARANTEED SPEED</text>
    <text x="98" y="68" fill="#FFFFFF" font-size="24" font-weight="900">60-MIN EXPRESS ARRIVAL</text>

    <!-- Pillar 2: Visiting Fee Waived -->
    <rect x="765" y="0" width="710" height="95" rx="24" fill="#0F172A" stroke="#F59E0B" stroke-width="2.5" />
    <circle cx="820" cy="48" r="26" fill="#D97706" />
    <text x="820" y="58" fill="#FFFFFF" font-size="28" text-anchor="middle">💰</text>
    <text x="863" y="40" fill="#FDE68A" font-size="14" font-weight="800">TRANSPARENT PRICING</text>
    <text x="863" y="68" fill="#FFFFFF" font-size="24" font-weight="900">₹299 VISIT (WAIVED IN BILL)</text>

    <!-- Pillar 3: 30-Day Warranty -->
    <rect x="1530" y="0" width="710" height="95" rx="24" fill="#0F172A" stroke="#38BDF8" stroke-width="2.5" />
    <circle cx="1585" cy="48" r="26" fill="#0284C7" />
    <text x="1585" y="58" fill="#FFFFFF" font-size="28" text-anchor="middle">🛡️</text>
    <text x="1628" y="40" fill="#BAE6FD" font-size="14" font-weight="800">COMPLETE PEACE OF MIND</text>
    <text x="1628" y="68" fill="#FFFFFF" font-size="24" font-weight="900">30-DAY SERVICE WARRANTY</text>
  </g>

  <!-- ========================================================================
       BOTTOM ACTION AREA (Y: 920 to 1150) - HUGE PHONE NUMBER & WHATSAPP
       ======================================================================== -->
  <!-- Left Side: QR Code & Play Store Pill -->
  <g transform="translate(80, 920)">
    <rect x="0" y="0" width="460" height="210" rx="24" fill="#0F172A" stroke="#334155" stroke-width="2" />
    
    <!-- WhatsApp QR Code -->
    <g transform="translate(25, 25)">
      <rect x="0" y="0" width="120" height="120" rx="14" fill="#FFFFFF" />
      <image x="6" y="6" width="108" height="108" xlink:href="data:image/svg+xml;base64,${qrWaBase64}" />
      <text x="60" y="145" fill="#4ADE80" font-size="12" font-weight="800" text-anchor="middle">SCAN TO WHATSAPP</text>
    </g>

    <!-- Play Store Badge & URL -->
    <g transform="translate(165, 30)">
      <text x="0" y="15" fill="#E2E8F0" font-size="13" font-weight="800">OFFICIAL ANDROID APP</text>
      <image x="0" y="28" width="160" height="48" xlink:href="data:image/svg+xml;base64,${playBadgeBase64}" />
      <rect x="0" y="88" width="265" height="42" rx="10" fill="#1E293B" />
      <text x="132" y="115" fill="#38BDF8" font-size="16" font-weight="800" text-anchor="middle">
        🌐 asrefrigerations.com
      </text>
    </g>
    <text x="230" y="192" fill="#94A3B8" font-size="12" font-weight="600" text-anchor="middle">
      #2, Sree Residency, Venkateshappa Layout, Kammanahalli – 560084
    </text>
  </g>

  <!-- Center & Right: MASSIVE PHONE NUMBER BAR (Readable from 100 meters away!) -->
  <g transform="translate(570, 920)">
    <!-- Glowing Banner -->
    <rect x="0" y="0" width="1750" height="210" rx="28" fill="url(#callGrad)" stroke="#FDE047" stroke-width="4" filter="url(#softGlow)" />
    
    <!-- Top Hotline Label -->
    <text x="875" y="44" fill="#FDE047" font-size="20" font-weight="900" letter-spacing="4" text-anchor="middle">
      ⚡ 24/7 BANGALORE DOORSTEP HELPLINE • DIRECT TECHNICIAN DISPATCH ⚡
    </text>

    <!-- The Giant Phone Number -->
    <g transform="translate(875, 128)" text-anchor="middle">
      <text x="0" y="0" fill="#FFFFFF" font-size="82" font-weight="900" letter-spacing="2">
        📞 +91 80732 06402
      </text>
    </g>

    <!-- Bottom subtext -->
    <g transform="translate(875, 180)" text-anchor="middle">
      <rect x="-480" y="-22" width="960" height="36" rx="18" fill="#000000" fill-opacity="0.35" />
      <text x="0" y="2" fill="#FEF08A" font-size="17" font-weight="800">
        Call / WhatsApp Specialist Syed • Immediate 60-Min Visit • 100% Genuine Spares
      </text>
    </g>
  </g>

</svg>`;

// Write the minimal 8x4 ft flex banner
fs.writeFileSync('website/public/bangalore-flex-banner-minimal-8x4ft.svg', svgMinimal, 'utf8');
console.log('[SUCCESS] Created website/public/bangalore-flex-banner-minimal-8x4ft.svg (Size: ' + fs.statSync('website/public/bangalore-flex-banner-minimal-8x4ft.svg').size + ' bytes)');
