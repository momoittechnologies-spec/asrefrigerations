export interface ServiceItem {
  id: string;
  name: string;
  nameTe: string;
  category: 'ac' | 'fridge' | 'washing_machine' | 'electrical' | 'amc';
  price: number;
  duration: string;
  popular?: boolean;
  description: string;
  descriptionTe: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

export const KADAPA_CITY_AREAS = [
  'Mariapuram (HQ / Workshop)',
  'Lohiya Nagar',
  'Pulivendula Road',
  'RTC Bus Stand Circle',
  'Chinna Chowk',
  'Pedda Chowk',
  'Akkayapalli',
  'NGO Colony',
  'RIMS Hospital Area',
  'Ravindra Nagar',
  'Prakash Nagar',
  '1 Town Area',
  'Yerramukkapalli',
  'Nagarajupalli',
  'Almaspet',
  'Co-operative Colony',
  'Madhavaram Road',
  'Built-Up Circle',
  'Devuni Kadapa'
];

export const KADAPA_DISTRICT_TOWNS = [
  'Proddatur',
  'Pulivendula',
  'Badvel',
  'Rayachoty',
  'Jammalamadugu',
  'Mydukur',
  'Kamalapuram',
  'Yerraguntla',
  'Vontimitta',
  'Rajampet',
  'Chennur',
  'Porumamilla',
  'Lakkireddipalli',
  'Sidhout (Siddhavatam)',
  'Vempalli',
  'Vallur',
  'Pendlimarri',
  'Sambepalli',
  'Galiveedu',
  'Chapadu',
  'Duvvur',
  'Khajipet',
  'Muddanur',
  'Simhadripuram',
  'Lingala'
];

export const BANGALORE_KAMMANAHALLI_AREAS = [
  'Kammanahalli (Branch Hub)',
  'Venkateshappa Layout',
  'Kalyan Nagar (HRBR Layout)',
  'Banaswadi',
  'HBR Layout',
  'Hennur & Hennur Cross',
  'Lingarajapuram',
  'Ramamurthy Nagar',
  'Horamavu',
  'Kasturi Nagar',
  'Cooke Town',
  'Cox Town',
  'Frazer Town (Pulikeshi Nagar)',
  'Babu Sahib Palya (Babusapalya)',
  'Kothanur',
  'Richards Town'
];

export const KADAPA_AREAS = [...KADAPA_CITY_AREAS, ...KADAPA_DISTRICT_TOWNS];

export const SERVICES_DATA: ServiceItem[] = [
  // AC Services
  {
    id: 'ac-normal-wash',
    name: 'AC Normal Basic Wash',
    nameTe: 'ఏసీ నార్మల్ బేసిక్ వాష్',
    category: 'ac',
    price: 550,
    duration: '30 mins',
    description: 'Filter cleaning, indoor coil brush wash, drain tray flushing, and basic airflow test.',
    descriptionTe: 'ఫిల్టర్ క్లీనింగ్, ఇండోర్ కాయిల్ బ్రష్ వాష్, డ్రైన్ ట్రే ఫ్లషింగ్ మరియు ఎయిర్‌ఫ్లో టెస్ట్.',
    features: ['Indoor filter wash', 'Dust removal', 'Basic performance check']
  },
  {
    id: 'ac-jet-wash',
    name: 'AC Deep Jet Pump Wash',
    nameTe: 'ఏసీ డీప్ జెట్ పంప్ వాష్',
    category: 'ac',
    price: 1000,
    duration: '45 mins',
    popular: true,
    description: 'High-pressure water jet cleaning for deep dust, outdoor condenser fin flush & 2x cooling boost.',
    descriptionTe: 'హై ప్రెజర్ వాటర్ జెట్ క్లీనింగ్, ఔట్‌డోర్ కండెన్సర్ డీప్ వాష్ మరియు సూపర్ కూలింగ్.',
    features: ['High-pressure jet wash', 'Indoor & outdoor deep cleaning', 'Drain pipe unclogging', 'Cooling inspection']
  },
  {
    id: 'ac-foam-wash',
    name: 'AC Antibacterial Foam Wash',
    nameTe: 'ఏసీ యాంటీ బాక్టీరియల్ ఫోమ్ వాష్',
    category: 'ac',
    price: 1200,
    duration: '45 mins',
    popular: true,
    description: 'Special active foam spray kills 99.9% germs, eliminates bad odors, and dissolves stubborn grime.',
    descriptionTe: 'యాక్టివ్ ఫోమ్ స్ప్రే బాక్టీరియా మరియు దుర్వాసనను తొలగిస్తుంది, స్వచ్ఛమైన చల్లని గాలిని ఇస్తుంది.',
    features: ['Antibacterial foam treatment', 'Fungus & odor removal', 'Jet pump rinse', 'Improves air quality']
  },
  {
    id: 'ac-chemical-wash',
    name: 'AC Chemical Master Wash',
    nameTe: 'ఏసీ కెమికల్ మాస్టర్ వాష్',
    category: 'ac',
    price: 1800,
    duration: '60 mins',
    description: 'Industrial coil-safe chemical wash for heavily choked cooling coils and outdoor units.',
    descriptionTe: 'చాలా మురికిపట్టిన కాయిల్స్ కోసం కెమికల్ వాష్, నూతన ఏసీ లాంటి కూలింగ్ అనుభవం.',
    features: ['Deep chemical de-scaling', 'Condenser coil restoration', 'Max cooling power restoration']
  },
  {
    id: 'ac-gas-32',
    name: 'AC R-32 Gas Charging (Complete Refill)',
    nameTe: 'ఏసీ R-32 గ్యాస్ చార్జింగ్ (పూర్తి రీఫిల్)',
    category: 'ac',
    price: 3250,
    duration: '45 mins',
    popular: true,
    description: 'Vacuum leak testing, Nitrogen pressure check, and 100% genuine R-32 eco-friendly refrigerant refill.',
    descriptionTe: 'లీకేజ్ టెస్టింగ్, వాక్యూమ్ టెస్ట్ మరియు ఒరిజినల్ R-32 గ్యాస్ ఫిల్లింగ్.',
    features: ['Leak identification & fix', 'Vacuum machine process', '100% Pure R-32 gas', '30-day gas warranty']
  },
  {
    id: 'ac-gas-410',
    name: 'AC R-410A Gas Charging (Inverter AC)',
    nameTe: 'ఏసీ R-410A గ్యాస్ చార్జింగ్ (ఇన్వర్టర్ ఏసీ)',
    category: 'ac',
    price: 3000,
    duration: '45 mins',
    description: 'Full leak test & precision weighing refill with genuine R-410A refrigerant for inverter ACs.',
    descriptionTe: 'ఇన్వర్టర్ ఏసీల కోసం కచ్చితమైన ఒరిజినల్ R-410A గ్యాస్ ఫిల్లింగ్.',
    features: ['Nitrogen pressure testing', 'Digital weight scale refill', 'Ampere load verification', '30-day warranty']
  },
  {
    id: 'ac-gas-22',
    name: 'AC R-22 Gas Charging (Conventional AC)',
    nameTe: 'ఏసీ R-22 గ్యాస్ చార్జింగ్ (నాన్-ఇన్వర్టర్)',
    category: 'ac',
    price: 2800,
    duration: '45 mins',
    description: 'Dedicated R-22 gas charging for conventional split and window air conditioners.',
    descriptionTe: 'నాన్-ఇన్వర్టర్ ఏసీల కోసం R-22 గ్యాస్ రీఫిల్లింగ్.',
    features: ['Full system flush', 'Original R-22 refill', 'Thermostat testing']
  },
  {
    id: 'ac-uninstallation',
    name: 'AC Uninstallation Only',
    nameTe: 'ఏసీ తీసివేయడం మాత్రమే',
    category: 'ac',
    price: 750,
    duration: '45 mins',
    description: 'Safe refrigerant pump-down, wall bracket detachment, and secure copper line sealing.',
    descriptionTe: 'గ్యాస్ లాక్ చేసి ఇండోర్ మరియు ఔట్‌డోర్ యూనిట్లను సురక్షితంగా తీసివేయడం.',
    features: ['Refrigerant pump-down lock', 'Indoor & outdoor bracket removal', 'Copper line sealed']
  },
  {
    id: 'ac-water-leak',
    name: 'AC Water Leakage & Drain Clearing',
    nameTe: 'ఏసీ వాటర్ లీకేజ్ & డ్రైన్ రిపేర్',
    category: 'ac',
    price: 599,
    duration: '30 mins',
    description: 'Fix indoor water leakage, flush blocked condensate tray, and clear moldy drain line.',
    descriptionTe: 'ఇండోర్ వాటర్ లీకేజ్ సరిచేయడం, డ్రైన్ ట్రే మరియు పైప్ క్లీనింగ్.',
    features: ['Stop indoor dripping', 'High-pressure drain flush', 'Drain tray alignment', 'Zero wall mess guarantee']
  },
  {
    id: 'ac-uninstallation-fitting',
    name: 'AC Complete Uninstallation & Re-Installation',
    nameTe: 'ఏసీ రిమూవల్ & కొత్త ఫిట్టింగ్',
    category: 'ac',
    price: 2200,
    duration: '90 mins',
    description: 'Safe gas lock uninstallation from old location and professional alignment installation at new home.',
    descriptionTe: 'పాత ఇంటి నుంచి సురక్షితంగా తీసి కొత్త ఇంట్లో పర్ఫెక్ట్ లెవలింగ్‌తో ఫిట్టింగ్ చేయడం.',
    features: ['Safe refrigerant pump-down', 'Copper pipe routing', 'Heavy-duty wall bracket mounting', 'Post-fit test']
  },
  {
    id: 'ac-fitting-only',
    name: 'AC Installation / Fitting Only',
    nameTe: 'ఏసీ ఫిట్టింగ్ / ఇన్‌స్టాలేషన్ మాత్రమే',
    category: 'ac',
    price: 1400,
    duration: '60 mins',
    description: 'Professional indoor and outdoor bracket mounting with precise leveling and vacuum check.',
    descriptionTe: 'ఇండోర్ మరియు ఔట్‌డోర్ యూనిట్ పర్ఫెక్ట్ ఫిట్టింగ్ మరియు వైరింగ్ కనెక్షన్.',
    features: ['Precision wall drilling', 'Indoor/Outdoor alignment', 'Drain piping test']
  },
  {
    id: 'ac-visit',
    name: 'AC Inspection & Visiting Charge',
    nameTe: 'ఏసీ చెకప్ & విజిటింగ్ ఛార్జ్',
    category: 'ac',
    price: 350,
    duration: '30 mins',
    description: 'Complete fault diagnosis by master technician. (Adjusted in final repair bill upon approval).',
    descriptionTe: 'ఏసీ సమస్యను పూర్తిగా తనిఖీ చేయడం. పని చేయిస్తే ఈ ఛార్జ్ సర్వీస్ బిల్లులో మినహాయించబడుతుంది.',
    features: ['On-site doorstep inspection', 'No hidden charges', 'Transparent estimate']
  },

  // Refrigerator Services
  {
    id: 'fridge-single-134',
    name: 'Single Door Fridge R-134a Gas Charging',
    nameTe: 'సింగిల్ డోర్ ఫ్రిజ్ R-134a గ్యాస్ చార్జింగ్',
    category: 'fridge',
    price: 1800,
    duration: '45 mins',
    popular: true,
    description: 'Capillary clearing, filter drier replacement, vacuum and original R-134a gas charging.',
    descriptionTe: 'క్యాపిలరీ క్లీనింగ్, ఫిల్టర్ డ్రైయర్ మార్పు, వాక్యూమ్ మరియు ఒరిజినల్ గ్యాస్ ఫిల్లింగ్.',
    features: ['Copper filter drier replacement', 'Leak brazing repair', 'Deep cooling restored', '30-day warranty']
  },
  {
    id: 'fridge-single-600',
    name: 'Single Door Fridge R-600a Gas Refill',
    nameTe: 'సింగిల్ డోర్ ఫ్రిజ్ R-600a గ్యాస్ రీఫిల్',
    category: 'fridge',
    price: 1800,
    duration: '45 mins',
    description: 'Safe handling & precision refill of Isobutane R-600a eco-refrigerant.',
    descriptionTe: 'R-600a గ్రీన్ గ్యాస్ రీఫిల్లింగ్ మరియు కూలింగ్ చెక్.',
    features: ['Safe pinching & brazing', 'Pure R-600a charging', 'Defrost check']
  },
  {
    id: 'fridge-double-600',
    name: 'Double Door Frost-Free R-600a Gas Charging',
    nameTe: 'డబుల్ డోర్ ఫ్రాస్ట్-ఫ్రీ R-600a గ్యాస్ చార్జింగ్',
    category: 'fridge',
    price: 2200,
    duration: '60 mins',
    popular: true,
    description: 'For all major brands (LG, Samsung, Whirlpool, Godrej, Haier). Leak sealing & genuine charging.',
    descriptionTe: 'ఎల్జీ, శామ్‌సంగ్, వర్ల్‌పూల్, గోద్రెజ్ మొదలైన అన్ని డబుల్ డోర్ ఫ్రిజ్ లకు గ్యాస్ ఫిల్లింగ్.',
    features: ['Condenser coil leak test', 'Evaporator fan check', 'Full chamber chill test']
  },
  {
    id: 'fridge-double-134',
    name: 'Double Door Fridge R-134a Gas Refill',
    nameTe: 'డబుల్ డోర్ ఫ్రిజ్ R-134a గ్యాస్ రీఫిల్',
    category: 'fridge',
    price: 2050,
    duration: '60 mins',
    description: 'High-durability R-134a gas refill with high-pressure nitrogen testing.',
    descriptionTe: 'నైట్రోజన్ టెస్ట్ తో డబుల్ డోర్ ఫ్రిజ్ గ్యాస్ చార్జింగ్.',
    features: ['Filter & valve replacement', 'Thermostat setting', 'Quick cooling guarantee']
  },
  {
    id: 'fridge-double-290',
    name: 'Inverter Double Door / Side-by-Side R-290 Gas Refill',
    nameTe: 'ఇన్వర్టర్ / సైడ్-బై-సైడ్ R-290 గ్యాస్ రీఫిల్',
    category: 'fridge',
    price: 3200,
    duration: '60 mins',
    description: 'Specialized inverter compressor charging with high-grade R-290 refrigerant.',
    descriptionTe: 'హై-ఎండ్ ఇన్వర్టర్ ఫ్రిజ్ ల కొరకు స్పెషలిస్ట్ గ్యాస్ సర్వీస్.',
    features: ['Inverter PCB diagnostics', 'Precision digital gauge refill', 'Commercial freezer compatibility']
  },
  {
    id: 'fridge-compressor',
    name: 'Inverter Fridge Compressor Replacement',
    nameTe: 'ఇన్వర్టర్ ఫ్రిజ్ కంప్రెసర్ మార్పు (మోడల్ ఆధారంగా ధర)',
    category: 'fridge',
    price: 0,
    duration: '120 mins',
    popular: true,
    description: 'Genuine branded inverter compressor replacement (LG, Samsung, Whirlpool, Godrej). Price varies depending on fridge capacity, inverter PCB compatibility, and brand model.',
    descriptionTe: 'బ్రాండెడ్ ఇన్వర్టర్ కంప్రెసర్ మార్పు. ఫ్రిజ్ మోడల్ మరియు ఇన్వర్టర్ బోర్డు ఆధారంగా ధర నిర్ణయించబడుతుంది.',
    features: ['Doorstep fault diagnosis', 'Nitrogen leak testing & vacuuming', 'Genuine branded compressor', 'Fresh refrigerant gas refill', '90-day compressor warranty']
  },
  {
    id: 'fridge-visit',
    name: 'Refrigerator Inspection & Visiting Charge',
    nameTe: 'ఫ్రిజ్ చెకప్ & విజిటింగ్ ఛార్జ్',
    category: 'fridge',
    price: 350,
    duration: '30 mins',
    description: 'Doorstep diagnosis for cooling failure, water leakage, strange sounds or power issues.',
    descriptionTe: 'కూలింగ్ అవ్వకపోవడం, నీళ్లు కారడం లేదా పవర్ సమస్యలను ఇంటివద్దనే తనిఖీ చేయడం.',
    features: ['Doorstep technician visit', 'Comprehensive electrical & cooling test', 'Adjustable in repair bill']
  },

  // Washing Machine Services
  {
    id: 'wm-visit',
    name: 'Washing Machine Doorstep Diagnosis & Visiting Charge',
    nameTe: 'వాషింగ్ మెషిన్ విజిటింగ్ & చెకప్ ఛార్జ్',
    category: 'washing_machine',
    price: 350,
    duration: '30 mins',
    popular: true,
    description: 'Complete fault diagnosis of motor, drain pump, inlet valve, belt, or control board.',
    descriptionTe: 'మోటార్, డ్రైన్ పంప్, ఇన్లెట్ వాల్వ్ లేదా పిసిబి బోర్డు సమస్యలను సమగ్రంగా పరిశీలించడం.',
    features: ['Doorstep inspection in 60 mins', 'Front/Top Load expert', 'Transparent quote']
  },
  {
    id: 'wm-service-cleaning',
    name: 'Washing Machine Deep Scale Clean & Drum Wash',
    nameTe: 'వాషింగ్ మెషిన్ డీప్ స్కేల్ క్లీన్ & డ్రమ్ వాష్',
    category: 'washing_machine',
    price: 750,
    duration: '45 mins',
    description: 'Drum de-scaling, lint trap clearing, pulsator cleaning, and high-pressure hose flush.',
    descriptionTe: 'డ్రమ్ మురికి మరియు ఉప్పు నీటి మరకలను తొలగించి బట్టలు పరిశుభ్రంగా ఉతికేలా చేయడం.',
    features: ['Lime scale removal', 'Pulsator disassembly wash', 'Drainage hose unclogging']
  },
  {
    id: 'wm-pcb-repair',
    name: 'Washing Machine PCB Board Repair & Diagnostics',
    nameTe: 'వాషింగ్ మెషిన్ పీసీబీ బోర్డ్ రిపేర్',
    category: 'washing_machine',
    price: 1500,
    duration: '60 mins',
    description: 'Microcontroller repair, relay change, sensor error clearing (OE, UE, dE, IE error codes).',
    descriptionTe: 'ఎర్రర్ కోడ్స్ (OE, UE, dE, IE) మరియు కంట్రోల్ సర్క్యూట్ బోర్డు రిపేర్.',
    features: ['Component level repair', 'Original spare relays', 'Tested with load']
  },

  // Electricals & Appliances
  {
    id: 'appliance-geyser',
    name: 'Water Heater / Geyser Repair & Coil Replacement',
    nameTe: 'గీజర్ రిపేర్ & హీటింగ్ కాయిల్ మార్పు',
    category: 'electrical',
    price: 0,
    duration: '30 mins',
    description: 'Thermostat replacement, heating element change, water leak repair & safe grounding. Price fluctuates based on geyser capacity (instant vs storage) and element wattage.',
    descriptionTe: 'హీటింగ్ కాయిల్ మార్పు, థర్మోస్టాట్ రిపేర్. గీజర్ మోడల్ మరియు కాయిల్ వాటేజ్ ఆధారంగా ధర నిర్ణయం.',
    features: ['Heating element check', 'Thermostat calibration', 'Safety earthing verification', 'Quote on inspection']
  },
  {
    id: 'appliance-microwave',
    name: 'Microwave Oven Doorstep Repair',
    nameTe: 'మైక్రోవేవ్ ఓవెన్ రిపేర్',
    category: 'electrical',
    price: 550,
    duration: '45 mins',
    description: 'Magnetron repair, high-voltage diode replacement, fuse change & turntable fix.',
    descriptionTe: 'వేడి కాకపోవడం, స్పార్కింగ్ రావడం వంటి సమస్యల పరిష్కారం.',
    features: ['Magnetron testing', 'Safe high-voltage discharge', 'Door switch alignment']
  },
  {
    id: 'appliance-fan-wiring',
    name: 'Ceiling Fan, Inverter & Switchboard Electrical Service',
    nameTe: 'సీలింగ్ ఫ్యాన్, ఇన్వర్టర్ & స్విచ్‌బోర్డ్ వైరింగ్',
    category: 'electrical',
    price: 300,
    duration: '30 mins',
    description: 'Short circuit troubleshooting, inverter rewiring, fan capacitor replacement.',
    descriptionTe: 'షార్ట్ సర్క్యూట్ సమస్యలు, ఇన్వర్టర్ కనెక్షన్ మరియు ఫ్యాన్ రిపేర్.',
    features: ['Certified electrician work', 'Safe power routing', 'Prompt fix']
  },

  // AMC Packages
  {
    id: 'amc-home-comfort',
    name: 'Home Comfort AMC (1 Year AC Protection)',
    nameTe: 'హోమ్ కంఫర్ట్ ఏసీ AMC (1 సంవత్సరం ప్రొటెక్షన్)',
    category: 'amc',
    price: 0,
    duration: '12 Months',
    popular: true,
    description: '2 Free Jet/Foam washes, unlimited breakdown callouts, discount on spares. Price fluctuates based on number of AC units, brand, and tonnage.',
    descriptionTe: '2 ఉచిత జెట్ వాష్‌లు, అపరిమిత బ్రేక్‌డౌన్ విజిట్స్. ఏసీల సంఖ్య మరియు టన్నేజ్ బట్టి ధర నిర్ణయం.',
    features: ['2 Scheduled Deep Jet Washes', 'Priority 2-hour technician dispatch', 'Flat 20% off on spare parts & gas', 'Free gas top-up inspection', 'Customized multi-unit quote']
  },
  {
    id: 'amc-commercial',
    name: 'Comprehensive Home Appliance AMC & Commercial HVAC',
    nameTe: 'కమర్షియల్ షోరూమ్ & హోమ్ అప్లయన్సెస్ సమగ్ర AMC',
    category: 'amc',
    price: 0,
    duration: '12 Months',
    description: 'Tailored for Kadapa households, retail stores, clinics & offices. Custom pricing based on appliance portfolio and on-site inspection.',
    descriptionTe: 'కడపలోని గృహాలు, దుకాణాలు మరియు ఆసుపత్రుల కోసం సమగ్ర వార్షిక ప్యాకేజీ. అప్లయన్స్ సంఖ్యను బట్టి కస్టమ్ ధర.',
    features: ['Quarterly preventive maintenance', 'Emergency 60-min response guarantee', 'Dedicated account technician', 'GST invoice & compliance report', 'Custom quote on inspection']
  }
];

export const INSTAGRAM_PROFILE = {
  handle: '@asrefrigerations.kadapa',
  url: 'https://www.instagram.com/asrefrigerations.kadapa/',
  couponCode: 'INSTA100',
  discountAmount: 100
};

export const GMB_PROFILE = {
  url: 'https://www.reviewsmart.online/r/as-refrigeration',
  reviewCount: 928,
  rating: 4.9
};

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Kondaiah Bathala',
    location: 'Mariapuram, Kadapa',
    rating: 5,
    date: 'Recent',
    service: 'Fridge Gas Refill & Service',
    comment: 'Reasonable price excellent work for my double door fridge repair. Came within 40 minutes and cooled immediately. Highly recommend Sameer Bhai!'
  },
  {
    id: 'rev-2',
    name: 'Shaik Fahimun',
    location: 'Nagarajupalli, Kadapa',
    rating: 5,
    date: 'Recent',
    service: 'Washing Machine Repair',
    comment: 'Good washing machine repair. Drum wasn’t spinning and motor had issue. Fixed cleanly on the spot without taking to shop.'
  },
  {
    id: 'rev-3',
    name: 'Venkata Subba Reddy',
    location: 'RIMS Road, Kadapa',
    rating: 5,
    date: '1 week ago',
    service: 'AC Jet Pump Wash & Gas Refill',
    comment: 'Best AC technician in Kadapa! Our 1.5 ton split AC was blowing warm air. They checked nitrogen leak, refilled R32 gas and jet washed the outdoor unit. Chilling like brand new now.'
  },
  {
    id: 'rev-4',
    name: 'Mohammed Irfan',
    location: 'RTC Bus Stand Circle, Kadapa',
    rating: 5,
    date: '2 weeks ago',
    service: 'AC Uninstallation & Fitting',
    comment: 'Shifted my home from 1 Town to Yerramukkapalli. AS Refrigerations team pumped down the gas safely and re-fitted both ACs with zero gas leakage. Very polite and professional.'
  },
  {
    id: 'rev-5',
    name: 'P. Lakshmi Narayana',
    location: 'NGO Colony, Kadapa',
    rating: 5,
    date: '3 weeks ago',
    service: 'Foam Jet AC Wash',
    comment: 'Done foam jet wash for our 2 split ACs before summer. Water jet and foam cleaning took out so much dust. Electricity bill also reduced because AC cools much faster.'
  },
  {
    id: 'rev-6',
    name: 'Suresh Kumar',
    location: 'Akkayapalli, Kadapa',
    rating: 5,
    date: '1 month ago',
    service: 'Single Door Fridge Repair',
    comment: 'Sameer Bhai is an expert technician. Very honest pricing compared to other local mechanics who ask double money. Giving 5/5 stars.'
  }
];

export const BANGALORE_REVIEWS: ReviewItem[] = [
  {
    id: 'blr-rev-1',
    name: 'Karthik R.',
    location: 'HRBR Layout, Bangalore',
    rating: 5,
    date: 'Recent',
    service: 'AC Jet Wash Service',
    comment: 'Punctual and very neat high-pressure jet wash. Used protective bag on indoor AC, zero mess on wall. Airflow is ice cold now. Syed arrived within 40 minutes.'
  },
  {
    id: 'blr-rev-2',
    name: 'Ananya Sharma',
    location: 'Kammanahalli, Bangalore',
    rating: 5,
    date: 'Recent',
    service: 'Fridge Gas Refill & Service',
    comment: 'Our double door fridge stopped cooling in the bottom section. Technician Syed detected the leak, replaced the filter drier, and refilled gas on the spot. Clear upfront ₹2,000 rate.'
  },
  {
    id: 'blr-rev-3',
    name: 'Praveen Kumar',
    location: 'Banaswadi, Bangalore',
    rating: 5,
    date: '1 week ago',
    service: 'AC Installation & Fitting',
    comment: 'Shifted my split AC to our new Banaswadi flat. Safe gas pump down, level mounting, and vacuum check. Transparent ₹1,700 flat charge.'
  },
  {
    id: 'blr-rev-4',
    name: 'Vinod N.',
    location: 'Kalyan Nagar, Bangalore',
    rating: 5,
    date: '2 weeks ago',
    service: 'AC Water Leakage Clearing',
    comment: 'Indoor unit was leaking water onto bedroom floor. Drain hose flushed with pressure pump and tray cleared. Problem solved in 30 mins.'
  },
  {
    id: 'blr-rev-5',
    name: 'Deepak Hegde',
    location: 'HBR Layout, Bangalore',
    rating: 5,
    date: '3 weeks ago',
    service: 'AC R-32 Gas Charging',
    comment: 'Full nitrogen pressure test and 100% genuine R-32 gas refill. Honest flat ₹2,500 rate without any hidden charges. 30-day warranty card provided.'
  },
  {
    id: 'blr-rev-6',
    name: 'Sowmya M.',
    location: 'Hennur, Bangalore',
    rating: 5,
    date: '1 month ago',
    service: 'Washing Machine Repair',
    comment: 'Front load washing machine spin error. Diagnosed and fixed the drain pump issue right at doorstep. Very polite technician.'
  }
];

export function getReviewsForCity(city: 'kadapa' | 'bangalore' = 'kadapa'): ReviewItem[] {
  return city === 'bangalore' ? BANGALORE_REVIEWS : GOOGLE_REVIEWS;
}


export const PARTNER_TIERS = [
  {
    id: 'tier-fridge',
    role: 'Refrigerator Technician',
    roleTe: 'రిఫ్రిజిరేటర్ టెక్నీషియన్',
    planType: 'Zero Commission Partner',
    leadsExpected: 'Verified Refrigerator Doorstep Leads',
    badge: 'Steady Earner',
    benefits: [
      'Verified refrigerator repair & gas refill leads in Kadapa',
      'Preferred service territory in your chosen locality',
      'Transparent job allocation directly to your phone',
      'Support for genuine spare parts & technical escalation',
      '100% direct customer payments (Cash / UPI)'
    ]
  },
  {
    id: 'tier-ac',
    role: 'AC Specialist Technician',
    roleTe: 'ఏసీ స్పెషలిస్ట్ టెక్నీషియన్',
    planType: 'Zero Commission Partner',
    leadsExpected: 'High-Demand AC Service Leads',
    badge: 'Most Popular',
    popular: true,
    benefits: [
      'Priority job allocation for AC repairs & jet washing',
      'High ticket service calls (Jet wash, Gas refills, Installations)',
      'Direct customer WhatsApp contact & route guidance',
      'Direct technical backup from Master Shaik Sameer',
      'Wholesale dealer pricing on R32/R410A refrigerant and copper'
    ]
  },
  {
    id: 'tier-wm',
    role: 'Washing Machine Specialist',
    roleTe: 'వాషింగ్ మెషిన్ టెక్నీషియన్',
    planType: 'Zero Commission Partner',
    leadsExpected: 'Verified Daily Washing Machine Leads',
    badge: 'Quick Join',
    benefits: [
      'Automatic & semi-automatic machine service calls',
      'Nearby locality requests only (save petrol & travel time)',
      '100% direct customer collections into your own pocket',
      'Dedicated helpline & spare parts dealer rates',
      'Instant partner profile activation on AS Refrigerations app'
    ]
  }
];


export function detectCityFromLocation(query?: string, lat?: number, lng?: number): 'kadapa' | 'bangalore' {
  if (lat !== undefined && lng !== undefined && !isNaN(lat) && !isNaN(lng)) {
    const distToBangaloreSq = Math.pow(lat - 12.9716, 2) + Math.pow(lng - 77.5946, 2);
    const distToKadapaSq = Math.pow(lat - 14.4673, 2) + Math.pow(lng - 78.8242, 2);
    return distToBangaloreSq < distToKadapaSq ? 'bangalore' : 'kadapa';
  }

  if (query) {
    const q = query.toLowerCase().trim();
    const bngKeywords = [
      'bangalore', 'bengaluru', 'kammanahalli', 'kalyan nagar', 'hrbr',
      'banaswadi', 'hbr', 'hennur', 'lingarajapuram', 'ramamurthy', 'horamavu',
      'kasturi nagar', 'cooke town', 'cox town', 'frazer town', 'pulikeshi',
      'babusapalya', 'babu sahib', 'kothanur', 'richards town', 'hebbal', 'karnataka',
      '560084', '560043', '560033', '560005', '560016', '560077', '560045'
    ];
    for (const kw of bngKeywords) {
      if (q.includes(kw)) return 'bangalore';
    }

    const kdpKeywords = [
      'kadapa', 'ysr', 'mariapuram', 'lohiya', 'pulivendula', 'chinna chowk',
      'pedda chowk', 'akkayapalli', 'ngo colony', 'rims', 'ravindra nagar',
      'prakash nagar', 'yerramukkapalli', 'nagarajupalli', 'proddatur',
      'badvel', 'rayachoty', 'jammalamadugu', 'mydukur', 'kamalapuram',
      'yerraguntla', 'vontimitta', 'rajampet', 'chennur', 'porumamilla',
      'seven roads', 'devuni kadapa', 'andhra', '516001', '516002', '516003', '516004'
    ];
    for (const kw of kdpKeywords) {
      if (q.includes(kw)) return 'kadapa';
    }
  }

  return 'kadapa';
}

export function getServicesForCity(city: 'kadapa' | 'bangalore' = 'kadapa'): ServiceItem[] {
  if (city === 'bangalore') {
    // Note: 'ac-jet-wash' removed for Bangalore per business requirement
    return SERVICES_DATA
      .filter((svc) => svc.id !== 'ac-jet-wash')
      .map((svc) => {
        // 1. Gas charging 22, 32, 410 anything: Flat 2500rs
        if (svc.id === 'ac-gas-32') {
          return {
            ...svc,
            popular: true,
            name: 'AC R-32 Gas Charging (All Gases Flat ₹2,500)',
            price: 2500,
            description: 'Vacuum leak testing, Nitrogen pressure check, and 100% genuine R-32 refill. Flat ₹2,500 Bangalore branch rate.'
          };
        }
        if (svc.id === 'ac-gas-410') {
          return {
            ...svc,
            name: 'AC R-410A Gas Charging (All Gases Flat ₹2,500)',
            price: 2500,
            description: 'Precision digital scale refill with genuine R-410A refrigerant. Flat ₹2,500 Bangalore branch rate.'
          };
        }
        if (svc.id === 'ac-gas-22') {
          return {
            ...svc,
            name: 'AC R-22 Gas Charging (All Gases Flat ₹2,500)',
            price: 2500,
            description: 'Dedicated R-22 gas charging for conventional split and window ACs. Flat ₹2,500 Bangalore branch rate.'
          };
        }
        // 2. Foam wash: 600rs (Popular in Bangalore)
        if (svc.id === 'ac-foam-wash') {
          return {
            ...svc,
            popular: true,
            price: 600,
            description: 'Special active foam spray kills 99.9% germs, eliminates bad odors, and dissolves stubborn grime. Bangalore branch rate: ₹600.'
          };
        }
        // 3. Uninstallation: 850rs
        if (svc.id === 'ac-uninstallation') {
          return {
            ...svc,
            price: 850,
            description: 'Safe gas lock uninstallation and professional bracket removal. Bangalore branch rate: ₹850.'
          };
        }
        // 4. Installation: 1700rs
        if (svc.id === 'ac-fitting-only') {
          return {
            ...svc,
            price: 1700,
            description: 'Professional indoor and outdoor bracket mounting with precise leveling and vacuum check. Bangalore branch rate: ₹1,700.'
          };
        }
        // 5. Complete Uninstallation & Re-Installation: Changed from 2200 to 2550 in Bangalore
        if (svc.id === 'ac-uninstallation-fitting') {
          return {
            ...svc,
            price: 2550,
            description: 'Safe gas lock uninstallation from old location and professional alignment installation at new home. Bangalore branch rate: ₹2,550.'
          };
        }
        // 6. Water leak: 599rs
        if (svc.id === 'ac-water-leak') {
          return {
            ...svc,
            price: 599,
            description: 'Fix indoor unit water leaking / dripping, flush clogged condensate drain pipe, and align drain tray. Bangalore rate: ₹599.'
          };
        }
        // 7. AC repair visiting charges: 299rs (100% waived in final repair bill)
        if (svc.id === 'ac-visit') {
          return {
            ...svc,
            price: 299,
            name: 'AC Inspection & Visiting Charge',
            description: 'Complete check-up to identify issues before repair. (Doorstep visit charge ₹299 is 100% waived in final repair bill upon approval).'
          };
        }
        // 8. Chemical wash: 1800rs for Bangalore
        if (svc.id === 'ac-chemical-wash') {
          return {
            ...svc,
            price: 1800,
            description: 'Industrial coil-safe chemical wash for heavily choked cooling coils. Bangalore branch rate: ₹1,800.'
          };
        }
        // 9. Single Door Fridge Service: 1500rs for Bangalore
        if (svc.id === 'fridge-single-134' || svc.id === 'fridge-single-600') {
          return {
            ...svc,
            price: 1500,
            description: svc.description + ' Bangalore single door fridge rate: ₹1,500.'
          };
        }
        // 10. Double Door Fridge Service: 2000rs for Bangalore
        if (svc.id === 'fridge-double-600' || svc.id === 'fridge-double-134') {
          return {
            ...svc,
            price: 2000,
            description: svc.description + ' Bangalore double door frost-free rate: ₹2,000.'
          };
        }
        // 11. Fridge / Washing Machine visiting charge in Bangalore: 299rs
        if (svc.id === 'fridge-visit' || svc.id === 'wm-checkup') {
          return {
            ...svc,
            price: 299,
            description: 'Complete doorstep diagnosis. (₹299 visiting charge is 100% waived in final repair bill upon approval).'
          };
        }
        return svc;
      });
  }

  // Kadapa rates
  return SERVICES_DATA;
}


export function matchServiceForIssue(
  appliance: string,
  issue: string,
  cityServices: ServiceItem[]
): ServiceItem {
  const normIssue = (issue || '').toLowerCase();
  const normAppliance = (appliance || '').toLowerCase();

  // 1. AC Issues
  if (normAppliance.includes('ac') || normAppliance.includes('air')) {
    if (normIssue.includes('leak') || normIssue.includes('water') || normIssue.includes('drain')) {
      const match = cityServices.find((s) => s.id === 'ac-water-leak');
      if (match) return match;
    }
    if (normIssue.includes('foam') || normIssue.includes('antibacterial')) {
      const match = cityServices.find((s) => s.id === 'ac-foam-wash');
      if (match) return match;
    }
    if (normIssue.includes('jet') || normIssue.includes('pump wash')) {
      const match = cityServices.find((s) => s.id === 'ac-jet-wash') || cityServices.find((s) => s.id === 'ac-foam-wash');
      if (match) return match;
    }
    if (normIssue.includes('gas') || normIssue.includes('refill') || normIssue.includes('r32') || normIssue.includes('r410') || normIssue.includes('r22')) {
      const match = cityServices.find((s) => s.id === 'ac-gas-32') || cityServices.find((s) => s.category === 'ac' && s.id.includes('gas'));
      if (match) return match;
    }
    if (normIssue.includes('uninstallation & new fitting') || normIssue.includes('re-installation') || (normIssue.includes('fitting') && normIssue.includes('uninstall'))) {
      const match = cityServices.find((s) => s.id === 'ac-uninstallation-fitting');
      if (match) return match;
    }
    if (normIssue.includes('uninstall')) {
      const match = cityServices.find((s) => s.id === 'ac-uninstallation');
      if (match) return match;
    }
    if (normIssue.includes('install') || normIssue.includes('fitting')) {
      const match = cityServices.find((s) => s.id === 'ac-fitting-only');
      if (match) return match;
    }
    if (normIssue.includes('not cooling') || normIssue.includes('warm') || normIssue.includes('noise') || normIssue.includes('pcb') || normIssue.includes('power')) {
      const match = cityServices.find((s) => s.id === 'ac-visit');
      if (match) return match;
    }
    return cityServices.find((s) => s.id === 'ac-visit') || cityServices.find((s) => s.category === 'ac') || cityServices[0];
  }

  // 2. Refrigerator Issues
  if (normAppliance.includes('fridge') || normAppliance.includes('refrigerator')) {
    if (normIssue.includes('gas') || normIssue.includes('refill') || normIssue.includes('r134') || normIssue.includes('r600')) {
      const match = cityServices.find((s) => s.id === 'fridge-single-134') || cityServices.find((s) => s.id === 'fridge-single-600');
      if (match) return match;
    }
    if (normIssue.includes('double door') || normIssue.includes('frost')) {
      const match = cityServices.find((s) => s.id === 'fridge-double-600');
      if (match) return match;
    }
    if (normIssue.includes('compressor')) {
      const match = cityServices.find((s) => s.id === 'fridge-compressor') || cityServices.find((s) => s.id === 'fridge-visit');
      if (match) return match;
    }
    const match = cityServices.find((s) => s.id === 'fridge-visit');
    if (match) return match;
    return cityServices.find((s) => s.category === 'fridge') || cityServices[0];
  }

  // 3. Washing Machine Issues
  if (normAppliance.includes('washing') || normAppliance.includes('machine') || normAppliance.includes('wm')) {
    if (normIssue.includes('descale') || normIssue.includes('clean') || normIssue.includes('wash')) {
      const match = cityServices.find((s) => s.id === 'wm-service-cleaning');
      if (match) return match;
    }
    if (normIssue.includes('pcb') || normIssue.includes('board') || normIssue.includes('error')) {
      const match = cityServices.find((s) => s.id === 'wm-pcb-repair');
      if (match) return match;
    }
    const match = cityServices.find((s) => s.id === 'wm-checkup') || cityServices.find((s) => s.id === 'wm-visit');
    if (match) return match;
    return cityServices.find((s) => s.category === 'washing_machine') || cityServices[0];
  }

  // 4. Electrical Issues
  if (normAppliance.includes('electrical')) {
    if (normIssue.includes('geyser') || normIssue.includes('heater') || normIssue.includes('coil')) {
      const match = cityServices.find((s) => s.id === 'geyser-repair');
      if (match) return match;
    }
    if (normIssue.includes('microwave') || normIssue.includes('oven')) {
      const match = cityServices.find((s) => s.id === 'micro-repair');
      if (match) return match;
    }
    const match = cityServices.find((s) => s.id === 'elec-visit');
    if (match) return match;
    return cityServices.find((s) => s.category === 'electrical') || cityServices[0];
  }

  return cityServices[0];
}
