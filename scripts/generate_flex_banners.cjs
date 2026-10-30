const fs = require('fs');
const path = require('path');

// Read assets for base64 embedding so the SVG is 100% portable and self-contained
const logoBase64 = fs.readFileSync('website/public/as-logo.png').toString('base64');
const qrPlayBase64 = fs.readFileSync('website/public/qr-playstore.svg').toString('base64');
const qrWaBase64 = fs.readFileSync('website/public/qr-whatsapp.svg').toString('base64');
const playBadgeBase64 = fs.readFileSync('website/public/google-play-badge.svg').toString('base64');

// ============================================================================
// 1. HORIZONTAL 8x4 FT FLEX BANNER (2400 x 1200 px - 2:1 Aspect Ratio)
// ============================================================================
const svg8x4 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2400 1200" width="2400" height="1200">
  <defs>
    <!-- Master Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050811" />
      <stop offset="35%" stop-color="#0B1329" />
      <stop offset="70%" stop-color="#090E1F" />
      <stop offset="100%" stop-color="#04060D" />
    </linearGradient>

    <!-- Glowing Highlights -->
    <radialGradient id="redGlow" cx="20%" cy="15%" r="40%">
      <stop offset="0%" stop-color="#DC2626" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#DC2626" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cyanGlow" cx="80%" cy="40%" r="45%">
      <stop offset="0%" stop-color="#00D2FF" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#00D2FF" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="emeraldGlow" cx="50%" cy="85%" r="50%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#10B981" stop-opacity="0" />
    </radialGradient>

    <!-- Metallic & Card Gradients -->
    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#15213F" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#0B1122" stop-opacity="0.98" />
    </linearGradient>
    <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0D2E28" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#091815" stop-opacity="0.98" />
    </linearGradient>
    <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2D1B36" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#140C1A" stop-opacity="0.98" />
    </linearGradient>

    <!-- Gold Accent Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>

    <!-- Emergency Hotline Banner Gradient -->
    <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B91C1C" />
      <stop offset="30%" stop-color="#DC2626" />
      <stop offset="70%" stop-color="#EF4444" />
      <stop offset="100%" stop-color="#991B1B" />
    </linearGradient>

    <!-- Soft Drop Shadow Filter -->
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.6" />
    </filter>
    <filter id="glowShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#EF4444" flood-opacity="0.6" />
    </filter>
  </defs>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&amp;display=swap');
    text {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .bold-title { font-weight: 900; letter-spacing: -0.5px; }
    .heavy-caps { font-weight: 800; text-transform: uppercase; }
    .mono-num { font-feature-settings: "tnum"; font-variant-numeric: tabular-nums; }
  </style>

  <!-- 1. Background Base -->
  <rect width="2400" height="1200" fill="url(#bgGrad)" />
  <rect width="2400" height="1200" fill="url(#redGlow)" />
  <rect width="2400" height="1200" fill="url(#cyanGlow)" />
  <rect width="2400" height="1200" fill="url(#emeraldGlow)" />

  <!-- Subtle Blueprint Tech Grid Lines -->
  <g stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1.5">
    <line x1="0" y1="120" x2="2400" y2="120" />
    <line x1="0" y1="230" x2="2400" y2="230" />
    <line x1="0" y1="870" x2="2400" y2="870" />
    <line x1="0" y1="990" x2="2400" y2="990" />
    <line x1="800" y1="230" x2="800" y2="870" />
    <line x1="1600" y1="230" x2="1600" y2="870" />
  </g>

  <!-- Outer Vinyl Edge & Brass Eyelets (Standard for Indian Flex Printing) -->
  <rect x="15" y="15" width="2370" height="1170" rx="20" fill="none" stroke="#EF4444" stroke-width="3" stroke-opacity="0.4" />
  <rect x="25" y="25" width="2350" height="1150" rx="14" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.15" />

  <!-- Corner & Edge Eyelet Rings (8x4 ft standard 2ft intervals) -->
  <g fill="#D4AF37" stroke="#78350F" stroke-width="2" opacity="0.65">
    <circle cx="35" cy="35" r="10" /> <circle cx="35" cy="35" r="5" fill="#0B1329" />
    <circle cx="600" cy="35" r="8" /> <circle cx="600" cy="35" r="4" fill="#0B1329" />
    <circle cx="1200" cy="35" r="8" /> <circle cx="1200" cy="35" r="4" fill="#0B1329" />
    <circle cx="1800" cy="35" r="8" /> <circle cx="1800" cy="35" r="4" fill="#0B1329" />
    <circle cx="2365" cy="35" r="10" /> <circle cx="2365" cy="35" r="5" fill="#0B1329" />
    
    <circle cx="35" cy="600" r="8" /> <circle cx="35" cy="600" r="4" fill="#0B1329" />
    <circle cx="2365" cy="600" r="8" /> <circle cx="2365" cy="600" r="4" fill="#0B1329" />

    <circle cx="35" cy="1165" r="10" /> <circle cx="35" cy="1165" r="5" fill="#0B1329" />
    <circle cx="600" cy="1165" r="8" /> <circle cx="600" cy="1165" r="4" fill="#0B1329" />
    <circle cx="1200" cy="1165" r="8" /> <circle cx="1200" cy="1165" r="4" fill="#0B1329" />
    <circle cx="1800" cy="1165" r="8" /> <circle cx="1800" cy="1165" r="4" fill="#0B1329" />
    <circle cx="2365" cy="1165" r="10" /> <circle cx="2365" cy="1165" r="5" fill="#0B1329" />
  </g>

  <!-- ========================================================================
       TOP HEADER BAR (Y: 45 to 195)
       ======================================================================== -->
  <!-- Brand Logo & Main Name -->
  <g transform="translate(60, 45)">
    <!-- Logo Badge Container -->
    <rect x="0" y="0" width="130" height="130" rx="24" fill="#0F172A" stroke="#EF4444" stroke-width="2.5" />
    <image x="12" y="12" width="106" height="106" xlink:href="data:image/png;base64,${logoBase64}" preserveAspectRatio="xMidYMid meet" />
    
    <!-- Title Text -->
    <text x="150" y="55" fill="#FFFFFF" font-size="52" font-weight="900" letter-spacing="-1">
      AS <tspan fill="#EF4444">REFRIGERATIONS</tspan>
    </text>
    <text x="152" y="92" fill="#38BDF8" font-size="21" font-weight="800" letter-spacing="3" text-transform="uppercase">
      BANGALORE BRANCH • KAMMANAHALLI SERVICE HUB
    </text>
    <text x="152" y="120" fill="#94A3B8" font-size="16" font-weight="600">
      #2, Sree Residency, Venkateshappa Layout, Kammanahalli, Bangalore – 560084 • Master Specialist Syed
    </text>
  </g>

  <!-- Top Right Live Trust Ribbons -->
  <g transform="translate(1620, 50)">
    <!-- 60-Mins Express Pill -->
    <rect x="0" y="0" width="340" height="56" rx="28" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="2" />
    <circle cx="32" cy="28" r="14" fill="#10B981" />
    <text x="32" y="34" fill="#022C22" font-size="18" font-weight="900" text-anchor="middle">⚡</text>
    <text x="58" y="27" fill="#6EE7B7" font-size="13" font-weight="800" text-transform="uppercase">Rapid Response</text>
    <text x="58" y="44" fill="#FFFFFF" font-size="16" font-weight="900">60-MIN EXPRESS ARRIVAL</text>

    <!-- 4.9 Star Rating Pill -->
    <rect x="360" y="0" width="350" height="56" rx="28" fill="#F59E0B" fill-opacity="0.15" stroke="#F59E0B" stroke-width="2" />
    <circle cx="392" cy="28" r="14" fill="#F59E0B" />
    <text x="392" y="34" fill="#78350F" font-size="18" font-weight="900" text-anchor="middle">★</text>
    <text x="418" y="27" fill="#FDE68A" font-size="13" font-weight="800" text-transform="uppercase">Google Reviews</text>
    <text x="418" y="44" fill="#FFFFFF" font-size="16" font-weight="900">4.9 / 5.0 (928+ REVIEWS)</text>

    <!-- Warranty & Visiting Fee Tag -->
    <rect x="0" y="68" width="710" height="52" rx="14" fill="#0F172A" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="100" fill="#E2E8F0" font-size="17" font-weight="700">
      🛡️ <tspan fill="#38BDF8" font-weight="800">30-Day Service Warranty</tspan>  |  💰 <tspan fill="#FDE047" font-weight="800">Doorstep Visit: Only ₹299</tspan> (100% Waived on Repair Bill!)
    </text>
  </g>

  <!-- ========================================================================
       CENTER MEGA PUNCHLINE / BILLBOARD HEADLINE (Y: 200 to 290)
       ======================================================================== -->
  <g transform="translate(1200, 235)" text-anchor="middle">
    <!-- Glow Backing -->
    <rect x="-850" y="-30" width="1700" height="70" rx="35" fill="#EF4444" fill-opacity="0.08" />
    <rect x="-850" y="-30" width="1700" height="70" rx="35" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-opacity="0.3" />
    
    <text x="0" y="18" fill="#FFFFFF" font-size="38" font-weight="900" letter-spacing="1">
      BANGALORE'S #1 TRUSTED DOORSTEP <tspan fill="#EF4444">AC, FRIDGE &amp; WASHING MACHINE</tspan> REPAIR
    </text>
  </g>

  <!-- ========================================================================
       MAIN 3 SERVICE COLUMNS (Y: 295 to 830)
       ======================================================================== -->

  <!-- COLUMN 1: AIR CONDITIONERS (X: 60, Width: 735) -->
  <g transform="translate(60, 295)">
    <!-- Card Frame -->
    <rect x="0" y="0" width="735" height="530" rx="28" fill="url(#cardGrad1)" stroke="#0284C7" stroke-width="2.5" filter="url(#dropShadow)" />
    
    <!-- Top Card Header Strip -->
    <path d="M 0 28 Q 0 0 28 0 L 707 0 Q 735 0 735 28 L 735 85 L 0 85 Z" fill="#0369A1" />
    <circle cx="50" cy="42" r="24" fill="#0284C7" stroke="#38BDF8" stroke-width="2" />
    <text x="50" y="52" fill="#FFFFFF" font-size="26" text-anchor="middle">❄️</text>
    <text x="90" y="45" fill="#FFFFFF" font-size="28" font-weight="900">AIR CONDITIONER SERVICE</text>
    <text x="92" y="70" fill="#BAE6FD" font-size="14" font-weight="800" letter-spacing="1">SPLIT • INVERTER • WINDOW • CASSETTE</text>

    <!-- Services Itemized with Bangalore Transparent Pricing -->
    <g transform="translate(30, 115)">
      <!-- Item 1: Jet Foam Wash -->
      <rect x="0" y="0" width="675" height="65" rx="14" fill="#0C1B33" stroke="#1E3A8A" stroke-width="1.5" />
      <text x="20" y="33" fill="#FFFFFF" font-size="20" font-weight="800">Deep Foam Jet Spray Wash</text>
      <text x="20" y="52" fill="#94A3B8" font-size="13" font-weight="600">Active antibacterial foam wash kills 99.9% germs &amp; odor</text>
      <rect x="545" y="14" width="115" height="36" rx="8" fill="#10B981" />
      <text x="602" y="38" fill="#FFFFFF" font-size="20" font-weight="900" text-anchor="middle">₹600</text>

      <!-- Item 2: Gas Refill -->
      <rect x="0" y="75" width="675" height="65" rx="14" fill="#0C1B33" stroke="#1E3A8A" stroke-width="1.5" />
      <text x="20" y="108" fill="#FFFFFF" font-size="20" font-weight="800">100% Genuine Gas Refill (R32 / R410A / R22)</text>
      <text x="20" y="127" fill="#94A3B8" font-size="13" font-weight="600">Includes nitrogen pressure testing, leak search &amp; digital scale</text>
      <rect x="530" y="89" width="130" height="36" rx="8" fill="#0284C7" />
      <text x="595" y="113" fill="#FFFFFF" font-size="20" font-weight="900" text-anchor="middle">₹2,500</text>

      <!-- Item 3: Installation & Uninstallation -->
      <rect x="0" y="150" width="675" height="65" rx="14" fill="#0C1B33" stroke="#1E3A8A" stroke-width="1.5" />
      <text x="20" y="183" fill="#FFFFFF" font-size="20" font-weight="800">Installation / Uninstallation Service</text>
      <text x="20" y="202" fill="#94A3B8" font-size="13" font-weight="600">Professional copper pipe flaring, gas lock &amp; vibration-free</text>
      <rect x="500" y="164" width="160" height="36" rx="8" fill="#475569" />
      <text x="580" y="188" fill="#FFFFFF" font-size="17" font-weight="900" text-anchor="middle">₹800 / ₹1,350</text>

      <!-- Item 4: Chemical Coil Wash -->
      <rect x="0" y="225" width="675" height="65" rx="14" fill="#0C1B33" stroke="#1E3A8A" stroke-width="1.5" />
      <text x="20" y="258" fill="#FFFFFF" font-size="20" font-weight="800">Heavy Industrial Chemical Coil Wash</text>
      <text x="20" y="277" fill="#94A3B8" font-size="13" font-weight="600">Restores frozen/choked cooling coils to factory ice chill</text>
      <rect x="530" y="239" width="130" height="36" rx="8" fill="#0284C7" />
      <text x="595" y="263" fill="#FFFFFF" font-size="20" font-weight="900" text-anchor="middle">₹1,800</text>

      <!-- Item 5: PCB & Water Leak Fix -->
      <rect x="0" y="300" width="675" height="65" rx="14" fill="#0C1B33" stroke="#1E3A8A" stroke-width="1.5" />
      <text x="20" y="333" fill="#FFFFFF" font-size="20" font-weight="800">Water Leakage, Fan Motor &amp; Inverter PCB</text>
      <text x="20" y="352" fill="#94A3B8" font-size="13" font-weight="600">Drain pipe flush, sensor replacement &amp; circuit board fix</text>
      <rect x="525" y="314" width="135" height="36" rx="8" fill="#10B981" />
      <text x="592" y="338" fill="#FFFFFF" font-size="17" font-weight="900" text-anchor="middle">Doorstep Fix</text>
    </g>

    <!-- Bottom Brand Quality Stamp -->
    <rect x="25" y="482" width="685" height="36" rx="10" fill="#0F172A" />
    <text x="367" y="506" fill="#7DD3FC" font-size="14" font-weight="800" text-anchor="middle">
      ✓ Voltas • Daikin • LG • Blue Star • Samsung • Panasonic • Lloyd • Hitachi • Carrier
    </text>
  </g>

  <!-- COLUMN 2: REFRIGERATORS (X: 835, Width: 730) -->
  <g transform="translate(835, 295)">
    <!-- Card Frame -->
    <rect x="0" y="0" width="730" height="530" rx="28" fill="url(#cardGrad2)" stroke="#059669" stroke-width="2.5" filter="url(#dropShadow)" />
    
    <!-- Top Card Header Strip -->
    <path d="M 0 28 Q 0 0 28 0 L 702 0 Q 730 0 730 28 L 730 85 L 0 85 Z" fill="#047857" />
    <circle cx="50" cy="42" r="24" fill="#059669" stroke="#34D399" stroke-width="2" />
    <text x="50" y="52" fill="#FFFFFF" font-size="26" text-anchor="middle">🧊</text>
    <text x="90" y="45" fill="#FFFFFF" font-size="28" font-weight="900">REFRIGERATOR CARE</text>
    <text x="92" y="70" fill="#A7F3D0" font-size="14" font-weight="800" letter-spacing="1">SINGLE DOOR • DOUBLE DOOR • SIDE-BY-SIDE</text>

    <!-- Services Itemized with Bangalore Rates -->
    <g transform="translate(28, 115)">
      <!-- Item 1: Single Door Fridge -->
      <rect x="0" y="0" width="674" height="65" rx="14" fill="#0A221C" stroke="#065F46" stroke-width="1.5" />
      <text x="20" y="33" fill="#FFFFFF" font-size="20" font-weight="800">Single Door Direct Cool Service</text>
      <text x="20" y="52" fill="#94A3B8" font-size="13" font-weight="600">Thermostat tune, cooling coil de-ice, capacitor &amp; relay fix</text>
      <rect x="544" y="14" width="115" height="36" rx="8" fill="#10B981" />
      <text x="601" y="38" fill="#FFFFFF" font-size="20" font-weight="900" text-anchor="middle">₹1,500</text>

      <!-- Item 2: Double Door Frost Free -->
      <rect x="0" y="75" width="674" height="65" rx="14" fill="#0A221C" stroke="#065F46" stroke-width="1.5" />
      <text x="20" y="108" fill="#FFFFFF" font-size="20" font-weight="800">Double Door Frost-Free Complete Fix</text>
      <text x="20" y="127" fill="#94A3B8" font-size="13" font-weight="600">Bimetal fuse, defrost timer, evaporator fan &amp; heater fix</text>
      <rect x="544" y="89" width="115" height="36" rx="8" fill="#059669" />
      <text x="601" y="113" fill="#FFFFFF" font-size="20" font-weight="900" text-anchor="middle">₹2,000</text>

      <!-- Item 3: Compressor Replacement -->
      <rect x="0" y="150" width="674" height="65" rx="14" fill="#0A221C" stroke="#065F46" stroke-width="1.5" />
      <text x="20" y="183" fill="#FFFFFF" font-size="20" font-weight="800">Compressor Replacement (Inverter &amp; Regular)</text>
      <text x="20" y="202" fill="#94A3B8" font-size="13" font-weight="600">100% brand new company compressor with 1-Year guarantee</text>
      <rect x="524" y="164" width="135" height="36" rx="8" fill="#F59E0B" />
      <text x="591" y="188" fill="#78350F" font-size="17" font-weight="900" text-anchor="middle">OEM Spares</text>

      <!-- Item 4: Fridge Gas Refill -->
      <rect x="0" y="225" width="674" height="65" rx="14" fill="#0A221C" stroke="#065F46" stroke-width="1.5" />
      <text x="20" y="258" fill="#FFFFFF" font-size="20" font-weight="800">Cooling Gas Charging &amp; Filter Drier</text>
      <text x="20" y="277" fill="#94A3B8" font-size="13" font-weight="600">Hydrocarbon R600a / R134a precision vacuum refill</text>
      <rect x="534" y="239" width="125" height="36" rx="8" fill="#10B981" />
      <text x="596" y="263" fill="#FFFFFF" font-size="18" font-weight="900" text-anchor="middle">Full Charge</text>

      <!-- Item 5: Gasket & PCB -->
      <rect x="0" y="300" width="674" height="65" rx="14" fill="#0A221C" stroke="#065F46" stroke-width="1.5" />
      <text x="20" y="333" fill="#FFFFFF" font-size="20" font-weight="800">Magnetic Door Gasket &amp; Inverter Board</text>
      <text x="20" y="352" fill="#94A3B8" font-size="13" font-weight="600">Air-tight sealing, door sag correction &amp; microprocessor repair</text>
      <rect x="524" y="314" width="135" height="36" rx="8" fill="#059669" />
      <text x="591" y="338" fill="#FFFFFF" font-size="17" font-weight="900" text-anchor="middle">Doorstep Fix</text>
    </g>

    <!-- Bottom Brand Quality Stamp -->
    <rect x="25" y="482" width="680" height="36" rx="10" fill="#0A221C" />
    <text x="365" y="506" fill="#6EE7B7" font-size="14" font-weight="800" text-anchor="middle">
      ✓ LG Smart Inverter • Samsung Curd Maestro • Whirlpool • Godrej • Haier • Bosch
    </text>
  </g>

  <!-- COLUMN 3: WASHING MACHINES (X: 1605, Width: 735) -->
  <g transform="translate(1605, 295)">
    <!-- Card Frame -->
    <rect x="0" y="0" width="735" height="530" rx="28" fill="url(#cardGrad3)" stroke="#A855F7" stroke-width="2.5" filter="url(#dropShadow)" />
    
    <!-- Top Card Header Strip -->
    <path d="M 0 28 Q 0 0 28 0 L 707 0 Q 735 0 735 28 L 735 85 L 0 85 Z" fill="#7E22CE" />
    <circle cx="50" cy="42" r="24" fill="#9333EA" stroke="#D8B4FE" stroke-width="2" />
    <text x="50" y="52" fill="#FFFFFF" font-size="26" text-anchor="middle">🧺</text>
    <text x="90" y="45" fill="#FFFFFF" font-size="28" font-weight="900">WASHING MACHINE EXPERTS</text>
    <text x="92" y="70" fill="#E9D5FF" font-size="14" font-weight="800" letter-spacing="1">FRONT LOAD • TOP LOAD • SEMI-AUTOMATIC</text>

    <!-- Services Itemized -->
    <g transform="translate(30, 115)">
      <!-- Item 1: Front Load Special -->
      <rect x="0" y="0" width="675" height="65" rx="14" fill="#20112A" stroke="#581C87" stroke-width="1.5" />
      <text x="20" y="33" fill="#FFFFFF" font-size="20" font-weight="800">Front Load Inverter Direct Drive</text>
      <text x="20" y="52" fill="#94A3B8" font-size="13" font-weight="600">Drum bearing, spider arm, shock absorber &amp; rubber boot fix</text>
      <rect x="535" y="14" width="125" height="36" rx="8" fill="#9333EA" />
      <text x="597" y="38" fill="#FFFFFF" font-size="18" font-weight="900" text-anchor="middle">Specialist</text>

      <!-- Item 2: Top Load Auto -->
      <rect x="0" y="75" width="675" height="65" rx="14" fill="#20112A" stroke="#581C87" stroke-width="1.5" />
      <text x="20" y="108" fill="#FFFFFF" font-size="20" font-weight="800">Top Load Fully Automatic Service</text>
      <text x="20" y="127" fill="#94A3B8" font-size="13" font-weight="600">Pulsator disc, water level pressure switch &amp; suspension rods</text>
      <rect x="535" y="89" width="125" height="36" rx="8" fill="#9333EA" />
      <text x="597" y="113" fill="#FFFFFF" font-size="18" font-weight="900" text-anchor="middle">Express Fix</text>

      <!-- Item 3: Motor & Drain Pump -->
      <rect x="0" y="150" width="675" height="65" rx="14" fill="#20112A" stroke="#581C87" stroke-width="1.5" />
      <text x="20" y="183" fill="#FFFFFF" font-size="20" font-weight="800">Drain Pump &amp; Water Inlet Solenoid Valve</text>
      <text x="20" y="202" fill="#94A3B8" font-size="13" font-weight="600">Fixes OE / E24 error, slow water filling &amp; drainage blockage</text>
      <rect x="535" y="164" width="125" height="36" rx="8" fill="#A855F7" />
      <text x="597" y="188" fill="#FFFFFF" font-size="18" font-weight="900" text-anchor="middle">Parts Ready</text>

      <!-- Item 4: Motherboard PCB -->
      <rect x="0" y="225" width="675" height="65" rx="14" fill="#20112A" stroke="#581C87" stroke-width="1.5" />
      <text x="20" y="258" fill="#FFFFFF" font-size="20" font-weight="800">Motherboard (PCB) Circuit Repair</text>
      <text x="20" y="277" fill="#94A3B8" font-size="13" font-weight="600">Micro-controller chip repair, display dead &amp; cycle stuck issues</text>
      <rect x="515" y="239" width="145" height="36" rx="8" fill="#EAB308" />
      <text x="587" y="263" fill="#713F12" font-size="17" font-weight="900" text-anchor="middle">Chip-Level Fix</text>

      <!-- Item 5: Semi Automatic -->
      <rect x="0" y="300" width="675" height="65" rx="14" fill="#20112A" stroke="#581C87" stroke-width="1.5" />
      <text x="20" y="333" fill="#FFFFFF" font-size="20" font-weight="800">Semi-Automatic Wash &amp; Spin Motor</text>
      <text x="20" y="352" fill="#94A3B8" font-size="13" font-weight="600">Gearbox seal leakage, spin timer, brake &amp; belt replacement</text>
      <rect x="525" y="314" width="135" height="36" rx="8" fill="#9333EA" />
      <text x="592" y="338" fill="#FFFFFF" font-size="17" font-weight="900" text-anchor="middle">Same-Day Fix</text>
    </g>

    <!-- Bottom Brand Quality Stamp -->
    <rect x="25" y="482" width="685" height="36" rx="10" fill="#20112A" />
    <text x="367" y="506" fill="#D8B4FE" font-size="14" font-weight="800" text-anchor="middle">
      ✓ IFB Senator • Bosch Serie • LG TurboWash • Samsung EcoBubble • Whirlpool BloomWash
    </text>
  </g>

  <!-- ========================================================================
       TRUST & SPEED BANNER STRIP (Y: 845 to 945)
       ======================================================================== -->
  <g transform="translate(60, 845)">
    <!-- 4 High Impact Guarantee Shields -->
    <!-- Shield 1 -->
    <rect x="0" y="0" width="550" height="85" rx="18" fill="#0F172A" stroke="#10B981" stroke-width="2" />
    <circle cx="50" cy="42" r="26" fill="#10B981" />
    <text x="50" y="52" fill="#022C22" font-size="30" text-anchor="middle">⏱️</text>
    <text x="92" y="36" fill="#6EE7B7" font-size="13" font-weight="800" text-transform="uppercase">Guaranteed Punctuality</text>
    <text x="92" y="62" fill="#FFFFFF" font-size="21" font-weight="900">60-MIN EXPRESS ARRIVAL</text>

    <!-- Shield 2 -->
    <rect x="575" y="0" width="550" height="85" rx="18" fill="#0F172A" stroke="#38BDF8" stroke-width="2" />
    <circle cx="625" cy="42" r="26" fill="#0284C7" />
    <text x="625" y="52" fill="#FFFFFF" font-size="30" text-anchor="middle">🛡️</text>
    <text x="667" y="36" fill="#BAE6FD" font-size="13" font-weight="800" text-transform="uppercase">Peace of Mind</text>
    <text x="667" y="62" fill="#FFFFFF" font-size="21" font-weight="900">30-DAY SERVICE WARRANTY</text>

    <!-- Shield 3 -->
    <rect x="1150" y="0" width="555" height="85" rx="18" fill="#0F172A" stroke="#F59E0B" stroke-width="2" />
    <circle cx="1200" cy="42" r="26" fill="#D97706" />
    <text x="1200" y="52" fill="#FFFFFF" font-size="30" text-anchor="middle">💰</text>
    <text x="1242" y="36" fill="#FDE68A" font-size="13" font-weight="800" text-transform="uppercase">Transparent Pricing</text>
    <text x="1242" y="62" fill="#FFFFFF" font-size="21" font-weight="900">VISITING FEE: ONLY ₹299</text>

    <!-- Shield 4 -->
    <rect x="1730" y="0" width="550" height="85" rx="18" fill="#0F172A" stroke="#EC4899" stroke-width="2" />
    <circle cx="1780" cy="42" r="26" fill="#DB2777" />
    <text x="1780" y="52" fill="#FFFFFF" font-size="30" text-anchor="middle">💯</text>
    <text x="1822" y="36" fill="#FBCFE8" font-size="13" font-weight="800" text-transform="uppercase">Genuine Spares Guarantee</text>
    <text x="1822" y="62" fill="#FFFFFF" font-size="21" font-weight="900">100% ORIGINAL COPPER &amp; GAS</text>
  </g>

  <!-- ========================================================================
       BOTTOM MASTER CALLOUT & CONTACT BAR (Y: 955 to 1160)
       ======================================================================== -->
  <!-- Left Side: QR Code & Google Play App -->
  <g transform="translate(60, 955)">
    <!-- QR Card Container -->
    <rect x="0" y="0" width="410" height="195" rx="20" fill="#0F172A" stroke="#334155" stroke-width="2" />
    
    <!-- QR Code 1: Play Store -->
    <g transform="translate(18, 18)">
      <rect x="0" y="0" width="105" height="105" rx="10" fill="#FFFFFF" />
      <image x="5" y="5" width="95" height="95" xlink:href="data:image/svg+xml;base64,${qrPlayBase64}" />
      <text x="52" y="125" fill="#38BDF8" font-size="11" font-weight="800" text-anchor="middle">SCAN FOR APP</text>
    </g>

    <!-- QR Code 2: WhatsApp -->
    <g transform="translate(145, 18)">
      <rect x="0" y="0" width="105" height="105" rx="10" fill="#FFFFFF" />
      <image x="5" y="5" width="95" height="95" xlink:href="data:image/svg+xml;base64,${qrWaBase64}" />
      <text x="52" y="125" fill="#4ADE80" font-size="11" font-weight="800" text-anchor="middle">WHATSAPP BOOK</text>
    </g>

    <!-- Official Google Play Store Badge -->
    <g transform="translate(265, 30)">
      <text x="65" y="-5" fill="#E2E8F0" font-size="12" font-weight="800" text-anchor="middle">NOW ON PLAY STORE</text>
      <image x="0" y="10" width="135" height="40" xlink:href="data:image/svg+xml;base64,${playBadgeBase64}" />
      <rect x="0" y="62" width="135" height="30" rx="8" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="1" />
      <text x="67" y="82" fill="#6EE7B7" font-size="12" font-weight="800" text-anchor="middle">⚡ ₹100 App Discount</text>
    </g>

    <!-- Website URL Strip -->
    <rect x="18" y="145" width="374" height="36" rx="8" fill="#1E293B" />
    <text x="205" y="169" fill="#F8FAFC" font-size="16" font-weight="800" text-anchor="middle">
      🌐 www.asrefrigerations.com
    </text>
  </g>

  <!-- Center: ULTRA-BOLD GIANT PHONE HOTLINE (X: 495, Width: 1120) -->
  <g transform="translate(495, 955)">
    <!-- Giant Glowing Red Action Pill -->
    <rect x="0" y="0" width="1120" height="195" rx="24" fill="url(#phoneGrad)" stroke="#FDE047" stroke-width="4" filter="url(#dropShadow)" />
    
    <!-- Top Hotline Label -->
    <text x="560" y="42" fill="#FDE047" font-size="20" font-weight="900" letter-spacing="3" text-anchor="middle" text-transform="uppercase">
      ⚡ 24/7 BANGALORE DOORSTEP BOOKING HOTLINE • WHATSAPP AVAILABLE ⚡
    </text>

    <!-- Giant Digits (Legible from 100 meters away!) -->
    <g transform="translate(560, 118)" text-anchor="middle">
      <text x="0" y="0" fill="#FFFFFF" font-size="68" font-weight="900" letter-spacing="1" class="mono-num">
        📞 +91 80732 06402
      </text>
    </g>

    <!-- Sub Contact & Technician Lead -->
    <g transform="translate(560, 168)" text-anchor="middle">
      <rect x="-420" y="-22" width="840" height="34" rx="17" fill="#000000" fill-opacity="0.35" />
      <text x="0" y="0" fill="#FDE68A" font-size="16" font-weight="800">
        Branch In-Charge: Syed | Secondary Helpline: +91 80749 45415 | Flagship Lead: Shaik Sameer
      </text>
    </g>
  </g>

  <!-- Right Side: Bangalore Localities Covered (X: 1640, Width: 700) -->
  <g transform="translate(1640, 955)">
    <!-- Localities Container Card -->
    <rect x="0" y="0" width="700" height="195" rx="20" fill="#0F172A" stroke="#38BDF8" stroke-width="2" />
    
    <g transform="translate(25, 30)">
      <circle cx="14" cy="0" r="14" fill="#0284C7" />
      <text x="14" y="6" fill="#FFFFFF" font-size="16" text-anchor="middle">📍</text>
      <text x="38" y="5" fill="#38BDF8" font-size="18" font-weight="900">RAPID DOORSTEP SERVICE AREAS (BANGALORE):</text>
    </g>

    <!-- Two-column list of key areas in Kammanahalli Hub -->
    <g transform="translate(30, 65)">
      <text x="0" y="20" fill="#FFFFFF" font-size="16" font-weight="700">✓ Kammanahalli (Hub)</text>
      <text x="0" y="48" fill="#FFFFFF" font-size="16" font-weight="700">✓ Kalyan Nagar (HRBR)</text>
      <text x="0" y="76" fill="#FFFFFF" font-size="16" font-weight="700">✓ Banaswadi</text>
      <text x="0" y="104" fill="#FFFFFF" font-size="16" font-weight="700">✓ HBR Layout</text>

      <text x="230" y="20" fill="#FFFFFF" font-size="16" font-weight="700">✓ Hennur &amp; Cross</text>
      <text x="230" y="48" fill="#FFFFFF" font-size="16" font-weight="700">✓ Lingarajapuram</text>
      <text x="230" y="76" fill="#FFFFFF" font-size="16" font-weight="700">✓ Horamavu</text>
      <text x="230" y="104" fill="#FFFFFF" font-size="16" font-weight="700">✓ Ramamurthy Nagar</text>

      <text x="460" y="20" fill="#FFFFFF" font-size="16" font-weight="700">✓ Kasturi Nagar</text>
      <text x="460" y="48" fill="#FFFFFF" font-size="16" font-weight="700">✓ Cooke / Cox Town</text>
      <text x="460" y="76" fill="#FFFFFF" font-size="16" font-weight="700">✓ Frazer Town</text>
      <text x="460" y="104" fill="#FFFFFF" font-size="16" font-weight="700">✓ Babusapalya</text>
    </g>
  </g>

</svg>`;

// Write 8x4 ft Horizontal SVG
fs.writeFileSync('website/public/bangalore-flex-banner-8x4ft.svg', svg8x4, 'utf8');
console.log('[SUCCESS] Created website/public/bangalore-flex-banner-8x4ft.svg (Size: ' + fs.statSync('website/public/bangalore-flex-banner-8x4ft.svg').size + ' bytes)');


// ============================================================================
// 2. VERTICAL 3x6 FT ROLLUP STANDEE / BANNER (1200 x 2400 px - 1:2 Aspect Ratio)
// ============================================================================
const svg3x6 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 2400" width="1200" height="2400">
  <defs>
    <linearGradient id="vBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#04060E" />
      <stop offset="25%" stop-color="#0B132B" />
      <stop offset="60%" stop-color="#070C1A" />
      <stop offset="100%" stop-color="#020408" />
    </linearGradient>
    <linearGradient id="vPhoneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B91C1C" />
      <stop offset="50%" stop-color="#EF4444" />
      <stop offset="100%" stop-color="#B91C1C" />
    </linearGradient>
    <filter id="vShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800;900&amp;display=swap');
    text { font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
  </style>

  <!-- Background Base -->
  <rect width="1200" height="2400" fill="url(#vBgGrad)" />

  <!-- Outer Border & Brass Eyelets -->
  <rect x="18" y="18" width="1164" height="2364" rx="20" fill="none" stroke="#EF4444" stroke-width="3" stroke-opacity="0.35" />

  <!-- SECTION 1: HEADER & LOGO -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="1080" height="230" rx="24" fill="#0F172A" stroke="#334155" stroke-width="2" />
    <rect x="25" y="25" width="180" height="180" rx="20" fill="#1E293B" stroke="#EF4444" stroke-width="2" />
    <image x="35" y="35" width="160" height="160" xlink:href="data:image/png;base64,${logoBase64}" preserveAspectRatio="xMidYMid meet" />

    <text x="230" y="85" fill="#FFFFFF" font-size="52" font-weight="900">
      AS <tspan fill="#EF4444">REFRIGERATIONS</tspan>
    </text>
    <text x="232" y="125" fill="#38BDF8" font-size="22" font-weight="800" letter-spacing="2">
      BANGALORE • KAMMANAHALLI HUB
    </text>
    <text x="232" y="160" fill="#E2E8F0" font-size="16" font-weight="600">
      #2, Sree Residency, Venkateshappa Layout – 560084
    </text>
    <text x="232" y="190" fill="#94A3B8" font-size="15" font-weight="600">
      Lead Specialist: Syed | 10+ Yrs Legacy
    </text>
  </g>

  <!-- SECTION 2: MEGA HEADLINE & DISPATCH SPEED -->
  <g transform="translate(60, 315)">
    <rect x="0" y="0" width="1080" height="160" rx="24" fill="#B91C1C" fill-opacity="0.2" stroke="#EF4444" stroke-width="2" />
    <text x="540" y="55" fill="#FDE047" font-size="28" font-weight="900" text-anchor="middle" letter-spacing="2">
      DOORSTEP APPLIANCE REPAIR EXPERTS
    </text>
    <text x="540" y="105" fill="#FFFFFF" font-size="44" font-weight="900" text-anchor="middle">
      60-MINUTE EXPRESS DISPATCH
    </text>
    <text x="540" y="140" fill="#6EE7B7" font-size="18" font-weight="800" text-anchor="middle">
      ⭐ 4.9 / 5.0 Google Reviews • 30-Day Doorstep Warranty
    </text>
  </g>

  <!-- SECTION 3: CORE APPLIANCE CARDS -->
  <!-- 1. AC Service -->
  <g transform="translate(60, 500)">
    <rect x="0" y="0" width="1080" height="370" rx="24" fill="#0C1B33" stroke="#0284C7" stroke-width="2.5" filter="url(#vShadow)" />
    <path d="M 0 24 Q 0 0 24 0 L 1056 0 Q 1080 0 1080 24 L 1080 65 L 0 65 Z" fill="#0284C7" />
    <text x="30" y="44" fill="#FFFFFF" font-size="28" font-weight="900">❄️ AIR CONDITIONER REPAIR &amp; JET SERVICE</text>
    <rect x="910" y="15" width="145" height="36" rx="10" fill="#0F172A" />
    <text x="982" y="39" fill="#38BDF8" font-size="16" font-weight="900" text-anchor="middle">All Brands</text>

    <g transform="translate(30, 95)" font-size="20" font-weight="700" fill="#FFFFFF">
      <text x="0" y="30">✓ Deep Foam Jet Spray Cleaning</text>
      <text x="980" y="30" fill="#10B981" font-weight="900" text-anchor="end">₹600</text>

      <text x="0" y="80">✓ 100% Genuine Gas Refill (R32 / R410A / R22)</text>
      <text x="980" y="80" fill="#38BDF8" font-weight="900" text-anchor="end">₹2,500</text>

      <text x="0" y="130">✓ AC Installation / Safe Uninstallation</text>
      <text x="980" y="130" fill="#FDE047" font-weight="900" text-anchor="end">₹1,350 / ₹800</text>

      <text x="0" y="180">✓ Industrial Chemical Cooling Coil Wash</text>
      <text x="980" y="180" fill="#38BDF8" font-weight="900" text-anchor="end">₹1,800</text>

      <text x="0" y="230">✓ Water Leakage, Noise &amp; Inverter PCB Repair</text>
      <text x="980" y="230" fill="#10B981" font-weight="900" text-anchor="end">Same-Day</text>
    </g>
  </g>

  <!-- 2. Refrigerator Service -->
  <g transform="translate(60, 895)">
    <rect x="0" y="0" width="1080" height="370" rx="24" fill="#091E19" stroke="#059669" stroke-width="2.5" filter="url(#vShadow)" />
    <path d="M 0 24 Q 0 0 24 0 L 1056 0 Q 1080 0 1080 24 L 1080 65 L 0 65 Z" fill="#059669" />
    <text x="30" y="44" fill="#FFFFFF" font-size="28" font-weight="900">🧊 REFRIGERATOR SERVICE &amp; GAS CHARGING</text>
    <rect x="880" y="15" width="175" height="36" rx="10" fill="#0F172A" />
    <text x="967" y="39" fill="#34D399" font-size="16" font-weight="900" text-anchor="middle">Single &amp; Double</text>

    <g transform="translate(30, 95)" font-size="20" font-weight="700" fill="#FFFFFF">
      <text x="0" y="30">✓ Single Door Direct Cool Service</text>
      <text x="980" y="30" fill="#10B981" font-weight="900" text-anchor="end">₹1,500</text>

      <text x="0" y="80">✓ Double Door Frost-Free Complete Fix</text>
      <text x="980" y="80" fill="#10B981" font-weight="900" text-anchor="end">₹2,000</text>

      <text x="0" y="130">✓ Company Compressor Replacement (Inverter/Non)</text>
      <text x="980" y="130" fill="#FDE047" font-weight="900" text-anchor="end">1-Yr Warranty</text>

      <text x="0" y="180">✓ R600a / R134a Gas Refill &amp; Drier Replacement</text>
      <text x="980" y="180" fill="#34D399" font-weight="900" text-anchor="end">Precision</text>

      <text x="0" y="230">✓ Air-Tight Magnetic Gasket &amp; Sensor Replacement</text>
      <text x="980" y="230" fill="#10B981" font-weight="900" text-anchor="end">Doorstep Fix</text>
    </g>
  </g>

  <!-- 3. Washing Machine Service -->
  <g transform="translate(60, 1290)">
    <rect x="0" y="0" width="1080" height="370" rx="24" fill="#1F102B" stroke="#9333EA" stroke-width="2.5" filter="url(#vShadow)" />
    <path d="M 0 24 Q 0 0 24 0 L 1056 0 Q 1080 0 1080 24 L 1080 65 L 0 65 Z" fill="#9333EA" />
    <text x="30" y="44" fill="#FFFFFF" font-size="28" font-weight="900">🧺 WASHING MACHINE REPAIR SPECIALISTS</text>
    <rect x="860" y="15" width="195" height="36" rx="10" fill="#0F172A" />
    <text x="957" y="39" fill="#D8B4FE" font-size="16" font-weight="900" text-anchor="middle">Front &amp; Top Load</text>

    <g transform="translate(30, 95)" font-size="20" font-weight="700" fill="#FFFFFF">
      <text x="0" y="30">✓ Front Load Direct Drive &amp; Drum Bearing Fix</text>
      <text x="980" y="30" fill="#D8B4FE" font-weight="900" text-anchor="end">OEM Spares</text>

      <text x="0" y="80">✓ Top Load Fully Automatic Pulsator &amp; Rods</text>
      <text x="980" y="80" fill="#D8B4FE" font-weight="900" text-anchor="end">Express Fix</text>

      <text x="0" y="130">✓ Drain Pump, Water Inlet Valve &amp; Error Fix</text>
      <text x="980" y="130" fill="#FDE047" font-weight="900" text-anchor="end">On-Site</text>

      <text x="0" y="180">✓ Motherboard (PCB) Circuit Repair</text>
      <text x="980" y="180" fill="#FDE047" font-weight="900" text-anchor="end">Chip-Level</text>

      <text x="0" y="230">✓ Semi-Automatic Wash &amp; Spin Motor Replacement</text>
      <text x="980" y="230" fill="#10B981" font-weight="900" text-anchor="end">Same-Day</text>
    </g>
  </g>

  <!-- SECTION 4: 4 TRUST PILLARS -->
  <g transform="translate(60, 1685)">
    <rect x="0" y="0" width="525" height="100" rx="18" fill="#0F172A" stroke="#10B981" stroke-width="2" />
    <circle cx="55" cy="50" r="28" fill="#10B981" />
    <text x="55" y="61" fill="#022C22" font-size="30" text-anchor="middle">⚡</text>
    <text x="100" y="42" fill="#6EE7B7" font-size="13" font-weight="800">GUARANTEED SPEED</text>
    <text x="100" y="72" fill="#FFFFFF" font-size="22" font-weight="900">60-MIN ARRIVAL</text>

    <rect x="555" y="0" width="525" height="100" rx="18" fill="#0F172A" stroke="#FDE047" stroke-width="2" />
    <circle cx="610" cy="50" r="28" fill="#D97706" />
    <text x="610" y="61" fill="#FFFFFF" font-size="30" text-anchor="middle">💰</text>
    <text x="655" y="42" fill="#FDE68A" font-size="13" font-weight="800">FLAT VISITING FEE</text>
    <text x="655" y="72" fill="#FFFFFF" font-size="22" font-weight="900">₹299 (WAIVED IN BILL)</text>
  </g>

  <!-- SECTION 5: GIANT HOTLINE CALLOUT -->
  <g transform="translate(60, 1815)">
    <rect x="0" y="0" width="1080" height="230" rx="28" fill="url(#vPhoneGrad)" stroke="#FDE047" stroke-width="4" filter="url(#vShadow)" />
    <text x="540" y="50" fill="#FDE047" font-size="22" font-weight="900" letter-spacing="3" text-anchor="middle">
      ⚡ 24/7 BANGALORE DOORSTEP HELPLINE ⚡
    </text>
    <text x="540" y="130" fill="#FFFFFF" font-size="72" font-weight="900" text-anchor="middle" letter-spacing="1">
      📞 +91 80732 06402
    </text>
    <text x="540" y="185" fill="#FEF08A" font-size="20" font-weight="800" text-anchor="middle">
      Call / WhatsApp Syed • Instant Dispatch Across North &amp; East Bangalore
    </text>
  </g>

  <!-- SECTION 6: QR CODES & LOCALITIES FOOTER -->
  <g transform="translate(60, 2075)">
    <!-- QR Box -->
    <rect x="0" y="0" width="520" height="260" rx="22" fill="#0F172A" stroke="#334155" stroke-width="2" />
    <g transform="translate(25, 25)">
      <rect x="0" y="0" width="130" height="130" rx="12" fill="#FFFFFF" />
      <image x="8" y="8" width="114" height="114" xlink:href="data:image/svg+xml;base64,${qrPlayBase64}" />
      <text x="65" y="155" fill="#38BDF8" font-size="13" font-weight="800" text-anchor="middle">PLAY STORE APP</text>
    </g>
    <g transform="translate(180, 25)">
      <rect x="0" y="0" width="130" height="130" rx="12" fill="#FFFFFF" />
      <image x="8" y="8" width="114" height="114" xlink:href="data:image/svg+xml;base64,${qrWaBase64}" />
      <text x="65" y="155" fill="#4ADE80" font-size="13" font-weight="800" text-anchor="middle">WHATSAPP BOOK</text>
    </g>
    <g transform="translate(335, 45)">
      <image x="0" y="0" width="165" height="50" xlink:href="data:image/svg+xml;base64,${playBadgeBase64}" />
      <text x="82" y="80" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">asrefrigerations.com</text>
    </g>
    <rect x="25" y="190" width="470" height="48" rx="12" fill="#1E293B" />
    <text x="260" y="220" fill="#38BDF8" font-size="15" font-weight="800" text-anchor="middle">
      🌐 Web Booking: asrefrigerations.com
    </text>

    <!-- Localities List -->
    <rect x="545" y="0" width="535" height="260" rx="22" fill="#0F172A" stroke="#38BDF8" stroke-width="2" />
    <text x="575" y="40" fill="#38BDF8" font-size="18" font-weight="900">📍 KEY BANGALORE SERVICE AREAS:</text>
    <g transform="translate(575, 75)" font-size="17" font-weight="700" fill="#FFFFFF">
      <text x="0" y="0">• Kammanahalli</text>
      <text x="240" y="0">• Kalyan Nagar</text>
      <text x="0" y="32">• Banaswadi</text>
      <text x="240" y="32">• HBR Layout</text>
      <text x="0" y="64">• Hennur Road</text>
      <text x="240" y="64">• Lingarajapuram</text>
      <text x="0" y="96">• Horamavu</text>
      <text x="240" y="96">• Ramamurthy Nagar</text>
      <text x="0" y="128">• Kasturi Nagar</text>
      <text x="240" y="128">• Cooke Town / Cox Town</text>
    </g>
    <text x="812" y="240" fill="#94A3B8" font-size="13" font-weight="600" text-anchor="middle">
      Workshop: #2, Sree Residency, Venkateshappa Layout, Kammanahalli
    </text>
  </g>
</svg>`;

// Write 3x6 ft Vertical SVG
fs.writeFileSync('website/public/bangalore-standee-banner-3x6ft.svg', svg3x6, 'utf8');
console.log('[SUCCESS] Created website/public/bangalore-standee-banner-3x6ft.svg (Size: ' + fs.statSync('website/public/bangalore-standee-banner-3x6ft.svg').size + ' bytes)');
