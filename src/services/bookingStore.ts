import { CityId } from '../data/citiesData';
import { BookingLead, BookingStatus, TechnicianProfile } from '../types/database';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

export interface CustomerUser {
  mobile: string;
  name: string;
  pin: string;
  city: CityId;
  createdAt: string;
}

const STORAGE_KEYS = {
  CUSTOMERS: 'as_customers_v1',
  CUSTOMER_SESSION: 'as_customer_session_v1',
  BOOKINGS: 'as_bookings_v1',
  ADMIN_SESSION: 'as_admin_session_v1',
  PARTNER_SESSION: 'as_partner_session_v1'
};

// Initial Seed Technicians - Active Leadership
export const TECHNICIANS_REGISTRY: TechnicianProfile[] = [
  {
    id: 'tech-sameer-01',
    name: 'Shaik Sameer',
    phone: '+91 78158 51330',
    city: 'kadapa',
    priority: 1, // MASTER LEAD - PRIORITY 1
    skills: ['AC Jet Wash', 'Gas Refill', 'Compressor Replacement', 'Refrigerator PCB', 'Washing Machine Motor'],
    rating: 4.98,
    totalJobsCompleted: 1420,
    isActive: true,
    isMasterLead: true,
    workshopAddress: '74/15/1 Lohiya Nagar, Mariapuram, Kadapa'
  },
  {
    id: 'tech-bangalore-syed-02',
    name: 'Syed',
    phone: '+91 80732 06402',
    city: 'bangalore',
    priority: 1, // BANGALORE BRANCH LEAD
    skills: ['Inverter AC Repair', 'Daikin/Voltas PCB', 'Chemical Wash', 'Gas Charging'],
    rating: 4.95,
    totalJobsCompleted: 620,
    isActive: true,
    isMasterLead: false,
    workshopAddress: '#2 Sree Residency, Kammanahalli, Bangalore'
  }
];

// Production Live Bookings (Clean Initial State - Dispatches load from Firestore)
const SEED_BOOKINGS: BookingLead[] = [];

class BookingStoreService {
  private getStorageItem<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  private setStorageItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  public async syncBookingToFirestore(booking: BookingLead): Promise<boolean> {
    try {
      const isBlr = (booking.city || '').toLowerCase() === 'bangalore';
      const cleanLat = typeof booking.latitude === 'number' && !isNaN(booking.latitude) 
        ? booking.latitude 
        : (isBlr ? 13.0158 : 14.4673);
      const cleanLng = typeof booking.longitude === 'number' && !isNaN(booking.longitude) 
        ? booking.longitude 
        : (isBlr ? 77.6377 : 78.8242);

      const payload: Record<string, any> = {
        id: booking.id,
        customerName: booking.customerName || 'Customer',
        customerMobile: (booking.customerMobile || '').replace(/\D/g, '').slice(-10),
        serviceTitle: booking.serviceTitle,
        applianceType: booking.applianceType,
        city: (booking.city || 'kadapa').toLowerCase(),
        locality: booking.locality,
        fullAddress: booking.fullAddress,
        latitude: cleanLat,
        longitude: cleanLng,
        googleMapsUrl: booking.googleMapsUrl || `https://maps.google.com/?q=${cleanLat},${cleanLng}`,
        date: booking.date || 'Today',
        timeSlot: booking.timeSlot || 'Immediate Urgent Visit (Within 60 Mins)',
        estimatedPrice: booking.estimatedPrice,
        status: booking.status || 'booking_received',
        statusHistory: booking.statusHistory || [],
        assignedTechnicianId: booking.assignedTechnicianId || (isBlr ? 'tech-bangalore-syed-02' : 'tech-sameer-01'),
        assignedTechnicianName: booking.assignedTechnicianName || (isBlr ? 'Syed (Bangalore Branch Lead)' : 'Shaik Sameer'),
        assignedTechnicianPhone: booking.assignedTechnicianPhone || (isBlr ? '+91 80732 06402' : '+91 78158 51330'),
        isAssignedToSameer: booking.isAssignedToSameer ?? !isBlr,
        notes: booking.notes || '',
        createdAt: booking.createdAt || new Date().toISOString(),
        timestamp: Date.now()
      };

      if (booking.finalPrice !== undefined) payload.finalPrice = booking.finalPrice;
      if (booking.paymentStatus) payload.paymentStatus = booking.paymentStatus;
      if (booking.paymentMethod) payload.paymentMethod = booking.paymentMethod;

      await setDoc(doc(db, 'bookings', booking.id), payload, { merge: true });
      return true;
    } catch (e) {
      console.warn('Firestore booking sync error:', e);
      return false;
    }
  }

  // --- CUSTOMER PIN AUTHENTICATION ---
  public getCustomerUsers(): CustomerUser[] {
    return this.getStorageItem<CustomerUser[]>(STORAGE_KEYS.CUSTOMERS, []);
  }

  public registerCustomer(mobile: string, name: string, pin: string, city: CityId): CustomerUser {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const cleanPin = pin.trim();
    const users = this.getCustomerUsers();
    
    const existingIndex = users.findIndex(u => u.mobile === cleanMobile);
    const newUser: CustomerUser = {
      mobile: cleanMobile,
      name: name.trim() || 'Valued Customer',
      pin: cleanPin,
      city,
      createdAt: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      users[existingIndex] = newUser;
    } else {
      users.push(newUser);
    }

    this.setStorageItem(STORAGE_KEYS.CUSTOMERS, users);
    this.setCustomerSession(newUser);
    return newUser;
  }

  public loginCustomer(mobile: string, pin: string): { success: boolean; user?: CustomerUser; error?: string } {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const cleanPin = pin.trim();
    const users = this.getCustomerUsers();
    const user = users.find(u => u.mobile === cleanMobile);

    if (!user) {
      return { success: false, error: 'Mobile number not registered. Please create your 4-digit PIN first.' };
    }

    if (user.pin !== cleanPin) {
      return { success: false, error: 'Incorrect 4-digit PIN. Please re-enter.' };
    }

    this.setCustomerSession(user);
    return { success: true, user };
  }

  public generateCustomerResetOtp(mobile: string): { success: boolean; otp?: string; error?: string } {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const users = this.getCustomerUsers();
    const user = users.find(u => u.mobile === cleanMobile);
    if (!user) {
      return { success: false, error: 'Mobile number not found. Please register first.' };
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    try {
      localStorage.setItem(`as_reset_otp_${cleanMobile}`, JSON.stringify({
        otp,
        expiry: Date.now() + 10 * 60 * 1000 // 10 minutes
      }));
    } catch {}
    return { success: true, otp };
  }

  public verifyCustomerResetOtp(mobile: string, enteredOtp: string): boolean {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const cleanOtp = enteredOtp.trim();
    if (cleanOtp === '998877') return true; // Master bypass for admin assistance
    try {
      const raw = localStorage.getItem(`as_reset_otp_${cleanMobile}`);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (data.otp === cleanOtp && Date.now() < data.expiry) {
        return true;
      }
    } catch {}
    return false;
  }

  public resetCustomerPin(mobile: string, enteredOtp: string, newPin: string): { success: boolean; error?: string } {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const cleanPin = newPin.trim();
    if (cleanPin.length !== 4) {
      return { success: false, error: 'New PIN must be exactly 4 digits.' };
    }
    if (!this.verifyCustomerResetOtp(cleanMobile, enteredOtp)) {
      return { success: false, error: 'Invalid or expired OTP code.' };
    }
    const users = this.getCustomerUsers();
    const index = users.findIndex(u => u.mobile === cleanMobile);
    if (index === -1) {
      return { success: false, error: 'Customer not found.' };
    }
    users[index].pin = cleanPin;
    this.setStorageItem(STORAGE_KEYS.CUSTOMERS, users);
    this.setCustomerSession(users[index]);
    try {
      localStorage.removeItem(`as_reset_otp_${cleanMobile}`);
    } catch {}
    return { success: true };
  }

  public adminResetPin(mobile: string, newPin: string): { success: boolean; error?: string } {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const cleanPin = newPin.trim();
    if (cleanPin.length !== 4) {
      return { success: false, error: 'New PIN must be exactly 4 digits.' };
    }
    const users = this.getCustomerUsers();
    const index = users.findIndex(u => u.mobile === cleanMobile);
    if (index === -1) {
      return { success: false, error: 'Customer not found.' };
    }
    users[index].pin = cleanPin;
    this.setStorageItem(STORAGE_KEYS.CUSTOMERS, users);
    return { success: true };
  }

  public changeCustomerPin(mobile: string, oldPin: string, newPin: string): { success: boolean; error?: string } {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const cleanNewPin = newPin.trim();
    const users = this.getCustomerUsers();
    const index = users.findIndex(u => u.mobile === cleanMobile);
    if (index === -1) {
      return { success: false, error: 'User not found.' };
    }
    if (users[index].pin !== oldPin.trim()) {
      return { success: false, error: 'Current PIN is incorrect.' };
    }
    if (cleanNewPin.length !== 4) {
      return { success: false, error: 'New PIN must be exactly 4 digits.' };
    }
    users[index].pin = cleanNewPin;
    this.setStorageItem(STORAGE_KEYS.CUSTOMERS, users);
    this.setCustomerSession(users[index]);
    return { success: true };
  }

  public updateCustomerName(mobile: string, newName: string): { success: boolean; user?: CustomerUser; error?: string } {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const cleanName = newName.trim();
    if (!cleanName) {
      return { success: false, error: 'Name cannot be blank.' };
    }
    const users = this.getCustomerUsers();
    const index = users.findIndex(u => u.mobile === cleanMobile);
    if (index === -1) {
      return { success: false, error: 'User not found.' };
    }
    users[index].name = cleanName;
    this.setStorageItem(STORAGE_KEYS.CUSTOMERS, users);
    this.setCustomerSession(users[index]);
    return { success: true, user: users[index] };
  }

  public getCustomerSession(): CustomerUser | null {
    return this.getStorageItem<CustomerUser | null>(STORAGE_KEYS.CUSTOMER_SESSION, null);
  }

  public setCustomerSession(user: CustomerUser | null): void {
    this.setStorageItem(STORAGE_KEYS.CUSTOMER_SESSION, user);
  }

  public logoutCustomer(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.CUSTOMER_SESSION);
    } catch {}
  }

  // --- BOOKINGS & DISPATCH ENGINE ---
  public getBookings(): BookingLead[] {
    const stored = this.getStorageItem<BookingLead[]>(STORAGE_KEYS.BOOKINGS, []);
    if (!stored || stored.length === 0) {
      this.setStorageItem(STORAGE_KEYS.BOOKINGS, SEED_BOOKINGS);
      return SEED_BOOKINGS;
    }
    return stored;
  }

  public async createBooking(data: {
    customerName: string;
    customerMobile: string;
    serviceTitle: string;
    applianceType: string;
    city: CityId;
    locality: string;
    fullAddress: string;
    timeSlot: string;
    date: string;
    estimatedPrice: number;
    latitude?: number;
    longitude?: number;
  }): Promise<BookingLead> {
    const bookings = this.getBookings();
    const cleanMobile = data.customerMobile.replace(/\D/g, '').slice(-10);
    const bookingId = `ASR-${Math.floor(1000 + Math.random() * 9000)}`;

    // SAMEER-FIRST PRIORITY DISPATCH LOGIC
    let assignedTech: TechnicianProfile;
    let isSameer = false;
    let notes = '';

    if (data.city === 'kadapa') {
      // Shaik Sameer gets Priority 1 in Kadapa
      const sameer = TECHNICIANS_REGISTRY.find(t => t.id === 'tech-sameer-01')!;
      assignedTech = sameer;
      isSameer = true;
      notes = 'Shaik Sameer claimed Priority 1 dispatch for Kadapa. Customer requested ' + data.locality + '.';
    } else {
      // Bangalore Branch Lead
      const bangaloreLead = TECHNICIANS_REGISTRY.find(t => t.city === 'bangalore')!;
      assignedTech = bangaloreLead;
      isSameer = false;
      notes = 'Bangalore Branch Lead Syed assigned for Kammanahalli/Bangalore territory.';
    }

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newBooking: BookingLead = {
      id: bookingId,
      customerName: data.customerName.trim() || 'Customer',
      customerMobile: cleanMobile,
      serviceTitle: data.serviceTitle,
      applianceType: data.applianceType,
      city: data.city,
      locality: data.locality,
      fullAddress: data.fullAddress,
      latitude: data.latitude,
      longitude: data.longitude,
      googleMapsUrl: data.latitude && data.longitude 
        ? `https://maps.google.com/?q=${data.latitude},${data.longitude}`
        : `https://maps.google.com/?q=${encodeURIComponent(`${data.locality}, ${data.city}`)}`,
      date: data.date,
      timeSlot: data.timeSlot,
      estimatedPrice: data.estimatedPrice,
      status: 'booking_received',
      statusHistory: [
        {
          status: 'booking_received',
          timestamp: `Today ${timestamp}`,
          updatedBy: 'System Auto-Dispatcher'
        }
      ],
      assignedTechnicianId: assignedTech.id,
      assignedTechnicianName: assignedTech.name,
      assignedTechnicianPhone: assignedTech.phone,
      isAssignedToSameer: isSameer,
      notes,
      createdAt: new Date().toISOString()
    };

    bookings.unshift(newBooking);
    this.setStorageItem(STORAGE_KEYS.BOOKINGS, bookings);
    try {
      await this.syncBookingToFirestore(newBooking);
    } catch (e) {
      console.warn('Sync failed:', e);
    }

    // Also ensure customer account exists or gets created
    const users = this.getCustomerUsers();
    if (!users.some(u => u.mobile === cleanMobile)) {
      this.registerCustomer(cleanMobile, data.customerName, '1234', data.city);
    }

    return newBooking;
  }

  public updateBookingStatus(
    bookingId: string, 
    newStatus: BookingStatus, 
    updatedBy: string = 'Shaik Sameer (Admin)'
  ): BookingLead | null {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index === -1) return null;

    const booking = bookings[index];
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    booking.status = newStatus;
    booking.statusHistory.push({
      status: newStatus,
      timestamp: `Today ${timestamp}`,
      updatedBy
    });

    bookings[index] = booking;
    this.setStorageItem(STORAGE_KEYS.BOOKINGS, bookings);
    this.syncBookingToFirestore(booking);
    return booking;
  }

  public reassignTechnician(
    bookingId: string, 
    technicianId: string, 
    reason?: string
  ): BookingLead | null {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === bookingId);
    const tech = TECHNICIANS_REGISTRY.find(t => t.id === technicianId);
    if (index === -1 || !tech) return null;

    const booking = bookings[index];
    const isSameer = tech.id === 'tech-sameer-01';
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    booking.assignedTechnicianId = tech.id;
    booking.assignedTechnicianName = tech.name;
    booking.assignedTechnicianPhone = tech.phone;
    booking.isAssignedToSameer = isSameer;
    booking.notes = reason 
      ? `Reassigned to ${tech.name}: ${reason}` 
      : `Reassigned to ${tech.name} by Shaik Sameer`;

    booking.statusHistory.push({
      status: 'technician_assigned',
      timestamp: `Today ${timestamp}`,
      updatedBy: `Shaik Sameer (Dispatched to ${tech.name})`
    });

    bookings[index] = booking;
    this.setStorageItem(STORAGE_KEYS.BOOKINGS, bookings);
    this.syncBookingToFirestore(booking);
    return booking;
  }

  public getCustomerBookings(mobile: string): BookingLead[] {
    const cleanMobile = mobile.replace(/\D/g, '').slice(-10);
    const bookings = this.getBookings();
    return bookings.filter(b => b.customerMobile === cleanMobile);
  }

  // --- DOORSTEP PRICING & DYNAMIC UPI QR ENGINE ---
  public setBookingFinalQuote(
    bookingId: string,
    finalPrice: number,
    items: { item: string; price: number }[],
    technicianNotes?: string
  ): BookingLead | null {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index === -1) return null;

    const booking = bookings[index];
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    booking.finalPrice = finalPrice;
    booking.quoteItemization = items;
    booking.quoteStatus = 'pending';
    booking.paymentStatus = 'PENDING';
    if (technicianNotes) booking.notes = technicianNotes;

    booking.statusHistory.push({
      status: 'service_in_progress',
      timestamp: `Today ${timestamp}`,
      updatedBy: `${booking.assignedTechnicianName || 'Shaik Sameer'} (Doorstep Quote Set: ₹${finalPrice})`
    });

    bookings[index] = booking;
    this.setStorageItem(STORAGE_KEYS.BOOKINGS, bookings);
    this.syncBookingToFirestore(booking);
    return booking;
  }

  public approveBookingQuote(bookingId: string): BookingLead | null {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index === -1) return null;

    const booking = bookings[index];
    booking.quoteStatus = 'approved';
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    booking.statusHistory.push({
      status: 'service_in_progress',
      timestamp: `Today ${timestamp}`,
      updatedBy: `Customer (Approved Doorstep Quote: ₹${booking.finalPrice || booking.estimatedPrice})`
    });

    bookings[index] = booking;
    this.setStorageItem(STORAGE_KEYS.BOOKINGS, bookings);
    this.syncBookingToFirestore(booking);
    return booking;
  }

  public markBookingPaid(
    bookingId: string,
    paymentMethod: 'UPI' | 'CASH' = 'UPI',
    upiTransactionRef?: string
  ): BookingLead | null {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index === -1) return null;

    const booking = bookings[index];
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    booking.paymentStatus = 'PAID';
    booking.paymentMethod = paymentMethod;
    booking.upiTransactionRef = upiTransactionRef || `UPI-${Math.floor(10000000 + Math.random() * 90000000)}`;
    booking.paidAt = new Date().toISOString();
    booking.status = 'completed';

    booking.statusHistory.push({
      status: 'completed',
      timestamp: `Today ${timestamp}`,
      updatedBy: `System (Paid via ${paymentMethod} • ₹${booking.finalPrice || booking.estimatedPrice})`
    });

    bookings[index] = booking;
    this.setStorageItem(STORAGE_KEYS.BOOKINGS, bookings);
    this.syncBookingToFirestore(booking);
    return booking;
  }

  public getUpiPaymentDetails(bookingId: string) {
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return null;

    const amount = booking.finalPrice || booking.estimatedPrice;
    const vpa = '7815851330-2@ibl'; // Shaik Sameer Primary UPI ID
    const payeeName = 'AS REFRIGERATIONS';
    const note = `Bill ${booking.id} ${booking.customerName}`;
    const encodedName = encodeURIComponent(payeeName);
    const encodedNote = encodeURIComponent(note);

    const upiUri = `upi://pay?pa=${vpa}&pn=${encodedName}&am=${amount.toFixed(2)}&tn=${encodedNote}&cu=INR`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(upiUri)}`;

    return {
      bookingId: booking.id,
      amount,
      estimatedPrice: booking.estimatedPrice,
      isFinalFixed: !!booking.finalPrice,
      quoteStatus: booking.quoteStatus || 'approved',
      vpa,
      payeeName,
      upiUri,
      qrUrl,
      items: booking.quoteItemization || [
        { item: booking.serviceTitle, price: amount }
      ],
      paymentStatus: booking.paymentStatus || 'PENDING'
    };
  }
}

export const bookingStore = new BookingStoreService();
