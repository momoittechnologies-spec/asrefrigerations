const fs = require('fs');
const path = require('path');

function updateFile(relPath, searchStr, replaceStr) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  const isCRLF = content.includes('\r\n');
  const target = isCRLF ? searchStr.replace(/\r?\n/g, '\r\n') : searchStr.replace(/\r?\n/g, '\n');
  const replacement = isCRLF ? replaceStr.replace(/\r?\n/g, '\r\n') : replaceStr.replace(/\r?\n/g, '\n');

  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`[SUCCESS] Updated ${relPath}`);
    return true;
  } else {
    console.error(`[ERROR] Target not found in ${relPath}`);
    return false;
  }
}

// 1. Footer.tsx
const footerTarget = `                  <a
                    href="/downloads/as-refrigerations-customer.apk"
                    download="as-refrigerations-customer.apk"
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition flex items-center gap-2 group text-left"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
                      <path d="M4 3.5C4 2.8 4.6 2.3 5.3 2.6L16.2 9.2L12 13.4L4 3.5Z" fill="#00D2FF"/>
                      <path d="M16.2 9.2L20.5 11.8C21.2 12.2 21.2 13.2 20.5 13.6L16.2 16.2L12 12.7L16.2 9.2Z" fill="#FFCE00"/>
                      <path d="M4 21.9C4 22.6 4.6 23.1 5.3 22.8L16.2 16.2L12 12L4 21.9Z" fill="#FF3A44"/>
                      <path d="M12 12.7L4 3.5C3.8 3.8 3.7 4.2 3.7 4.7V20.7C3.7 21.2 3.8 21.6 4 21.9L12 12.7Z" fill="#00E676"/>
                    </svg>
                    <div>
                      <div className="text-[9px] text-emerald-400 font-bold leading-none">Customer App</div>
                      <div className="text-[11px] font-bold text-white group-hover:text-emerald-400 transition leading-tight">APK Download</div>
                    </div>
                  </a>`;

const footerReplacement = `                  <a
                    href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Get Customer App on Google Play Store"
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition flex items-center gap-2 group text-left"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
                      <path d="M4 3.5C4 2.8 4.6 2.3 5.3 2.6L16.2 9.2L12 13.4L4 3.5Z" fill="#00D2FF"/>
                      <path d="M16.2 9.2L20.5 11.8C21.2 12.2 21.2 13.2 20.5 13.6L16.2 16.2L12 12.7L16.2 9.2Z" fill="#FFCE00"/>
                      <path d="M4 21.9C4 22.6 4.6 23.1 5.3 22.8L16.2 16.2L12 12L4 21.9Z" fill="#FF3A44"/>
                      <path d="M12 12.7L4 3.5C3.8 3.8 3.7 4.2 3.7 4.7V20.7C3.7 21.2 3.8 21.6 4 21.9L12 12.7Z" fill="#00E676"/>
                    </svg>
                    <div>
                      <div className="text-[9px] text-emerald-400 font-bold leading-none">Customer App</div>
                      <div className="text-[11px] font-bold text-white group-hover:text-emerald-400 transition leading-tight">Google Play</div>
                    </div>
                  </a>`;

updateFile('src/components/Footer.tsx', footerTarget, footerReplacement);

// 2. Hero.tsx (Hero banner callout)
const heroTarget1 = `                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/downloads/as-refrigerations-customer.apk"
                    download="as-refrigerations-customer.apk"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-lg shadow-emerald-600/30 transition active:scale-95 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download APK</span>
                  </a>
                  <a
                    href="#mobile-app"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition"
                  >
                    Features →
                  </a>
                </div>`;

const heroReplacement1 = `                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Get AS Refrigerations on Google Play"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950 border border-emerald-500/50 hover:border-emerald-400 text-white font-black text-xs shadow-lg shadow-emerald-500/20 transition active:scale-95 cursor-pointer group"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
                      <path d="M4 3.5C4 2.8 4.6 2.3 5.3 2.6L16.2 9.2L12 13.4L4 3.5Z" fill="#00D2FF"/>
                      <path d="M16.2 9.2L20.5 11.8C21.2 12.2 21.2 13.2 20.5 13.6L16.2 16.2L12 12.7L16.2 9.2Z" fill="#FFCE00"/>
                      <path d="M4 21.9C4 22.6 4.6 23.1 5.3 22.8L16.2 16.2L12 12L4 21.9Z" fill="#FF3A44"/>
                      <path d="M12 12.7L4 3.5C3.8 3.8 3.7 4.2 3.7 4.7V20.7C3.7 21.2 3.8 21.6 4 21.9L12 12.7Z" fill="#00E676"/>
                    </svg>
                    <span>Google Play</span>
                  </a>
                  <a
                    href="#mobile-app"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition"
                  >
                    App Details →
                  </a>
                </div>`;

updateFile('src/components/Hero.tsx', heroTarget1, heroReplacement1);

// 3. Hero.tsx (Express booking card callout)
const heroTarget2 = `                  <a
                    href="/downloads/as-refrigerations-customer.apk"
                    download="as-refrigerations-customer.apk"
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition shadow-xs shrink-0 flex items-center gap-1"
                  >
                    <span>Use App (₹100 Off)</span>
                  </a>`;

const heroReplacement2 = `                  <a
                    href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition shadow-xs shrink-0 flex items-center gap-1"
                  >
                    <span>Google Play (₹100 Off)</span>
                  </a>`;

updateFile('src/components/Hero.tsx', heroTarget2, heroReplacement2);

// 4. Header.tsx (Navigation & Mobile menu)
const headerTarget1 = `            <a
              href="#mobile-app"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Android App</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">APK</span>
            </a>`;

const headerReplacement1 = `            <a
              href="#mobile-app"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Android App</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Play Store</span>
            </a>`;

updateFile('src/components/Header.tsx', headerTarget1, headerReplacement1);

const headerTarget2 = `            <a
              href="#mobile-app"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold hover:bg-emerald-500/20 transition flex items-center justify-between"
            >
              <span>📱 Download APK</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500 text-slate-950 uppercase">APK</span>
            </a>`;

const headerReplacement2 = `            <a
              href="#mobile-app"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold hover:bg-emerald-500/20 transition flex items-center justify-between"
            >
              <span>📱 Google Play App</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500 text-slate-950 uppercase">PLAY STORE</span>
            </a>`;

updateFile('src/components/Header.tsx', headerTarget2, headerReplacement2);

// 5. BookingModal.tsx
const bookingTarget1 = `              <a
                href="/downloads/as-refrigerations-customer.apk"
                download="as-refrigerations-customer.apk"
                className="px-2.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[10px] shrink-0 transition flex items-center gap-1 shadow-xs"
              >
                <span>Get App</span>
                <Download className="w-3 h-3" />
              </a>`;

const bookingReplacement1 = `              <a
                href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[10px] shrink-0 transition flex items-center gap-1 shadow-xs"
              >
                <span>Google Play</span>
              </a>`;

updateFile('src/components/BookingModal.tsx', bookingTarget1, bookingReplacement1);

const bookingTarget2 = `              <a
                href="/downloads/as-refrigerations-customer.apk"
                download="as-refrigerations-customer.apk"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download AS Customer App (18 MB)</span>
              </a>`;

const bookingReplacement2 = `              <a
                href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-emerald-500/50 hover:border-emerald-400 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
                  <path d="M4 3.5C4 2.8 4.6 2.3 5.3 2.6L16.2 9.2L12 13.4L4 3.5Z" fill="#00D2FF"/>
                  <path d="M16.2 9.2L20.5 11.8C21.2 12.2 21.2 13.2 20.5 13.6L16.2 16.2L12 12.7L16.2 9.2Z" fill="#FFCE00"/>
                  <path d="M4 21.9C4 22.6 4.6 23.1 5.3 22.8L16.2 16.2L12 12L4 21.9Z" fill="#FF3A44"/>
                  <path d="M12 12.7L4 3.5C3.8 3.8 3.7 4.2 3.7 4.7V20.7C3.7 21.2 3.8 21.6 4 21.9L12 12.7Z" fill="#00E676"/>
                </svg>
                <span>Get Customer App on Google Play</span>
              </a>`;

updateFile('src/components/BookingModal.tsx', bookingTarget2, bookingReplacement2);

// 6. CitySelectModal.tsx
const cityTarget = `          <a
            href="/downloads/as-refrigerations-customer.apk"
            download="as-refrigerations-customer.apk"
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shrink-0 shadow-md shadow-emerald-600/20 active:scale-95 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>`;

const cityReplacement = `          <a
            href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-emerald-500/50 hover:border-emerald-400 text-white font-black text-xs shrink-0 shadow-md shadow-emerald-600/20 active:scale-95 transition cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none">
              <path d="M4 3.5C4 2.8 4.6 2.3 5.3 2.6L16.2 9.2L12 13.4L4 3.5Z" fill="#00D2FF"/>
              <path d="M16.2 9.2L20.5 11.8C21.2 12.2 21.2 13.2 20.5 13.6L16.2 16.2L12 12.7L16.2 9.2Z" fill="#FFCE00"/>
              <path d="M4 21.9C4 22.6 4.6 23.1 5.3 22.8L16.2 16.2L12 12L4 21.9Z" fill="#FF3A44"/>
              <path d="M12 12.7L4 3.5C3.8 3.8 3.7 4.2 3.7 4.7V20.7C3.7 21.2 3.8 21.6 4 21.9L12 12.7Z" fill="#00E676"/>
            </svg>
            <span>Google Play</span>
          </a>`;

updateFile('src/components/CitySelectModal.tsx', cityTarget, cityReplacement);

// 7. MobileStickyBar.tsx
const stickyTarget = `              <a
                href="/downloads/as-refrigerations-customer.apk"
                download="as-refrigerations-customer.apk"
                onClick={() => setSupportSheetOpen(false)}
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white flex items-center justify-between active:scale-98 transition shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-base">
                    📱
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-emerald-200">Native Android App</div>
                    <div className="text-sm font-black text-white">Download APK (v1.0)</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-950 bg-white px-2.5 py-1 rounded-lg">
                  18 MB • Direct Install
                </span>
              </a>`;

const stickyReplacement = `              <a
                href="https://play.google.com/store/apps/details?id=com.asrefrigerations.customer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSupportSheetOpen(false)}
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white flex items-center justify-between active:scale-98 transition shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-base">
                    📱
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-emerald-200">Official Android App</div>
                    <div className="text-sm font-black text-white">Get on Google Play</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-950 bg-white px-2.5 py-1 rounded-lg">
                  Play Store
                </span>
              </a>`;

updateFile('src/components/MobileStickyBar.tsx', stickyTarget, stickyReplacement);
