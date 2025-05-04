
export interface User {
  id: string;
  username: string;
  name: string;
  surname: string;
  role: 'JUNIOR' | 'ADMINISTRATOR';
}

export interface Product {
  id: string;
  code: string;
  name: string;
  details: string;
}

export interface Supplier {
  id: string;
  code: string;
  companyName: string;
  email: string;
  products: SupplierProduct[];
  closingPeriods: ClosingPeriod[];
}

export interface SupplierProduct {
  productId: string;
  productCode: string;
  productName: string;
}

export interface ClosingPeriod {
  id: string;
  startDate: string;
  endDate: string;
}

export interface Customer {
  id: string;
  code: string;
  name: string;
  shippingAddress: string;
  email: string;
}

export interface QuoteRequest {
  id: string;
  quoteCode: string; // GGMMAA-XX
  customerId: string;
  customerName: string;
  dateReceived: string;
  status: QuoteStatus;
  items: QuoteItem[];
  shippingAddress: string;
  validUntil: string;
}

export interface QuoteItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  bestPrice?: number;
  bestSupplierId?: string;
  bestSupplierName?: string;
}

export interface SupplierQuoteRequest {
  id: string;
  quoteRequestId: string;
  quoteCode: string;
  supplierQuoteCode: string; // GGMMAA-XXNN
  supplierId: string;
  supplierName: string;
  items: SupplierQuoteItem[];
  status: SupplierQuoteStatus;
  dateSent: string;
  dateResponded?: string;
  shippingCost?: number;
  shippingPallets?: number;
  shippingTime?: number;
  validUntil: string;
  reminderSent: boolean;
}

export interface SupplierQuoteItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  price?: number;
}

export type QuoteStatus = 
  | 'RECEIVED' 
  | 'IN_PROGRESS' 
  | 'REPROCESSING'
  | 'SENT' 
  | 'SENT_MISSING_PRODUCT'
  | 'CONFIRMED'
  | 'EXPIRED';

export type SupplierQuoteStatus = 
  | 'SENT' 
  | 'RESPONDED' 
  | 'REMINDER_SENT'
  | 'BLOCKED'
  | 'EXPIRED';

export interface SystemSettings {
  emailSender: string;
  markup: number;
  customHolidays: string[]; // Format: YYYY-MM-DD
  shippingRanges: ShippingRange[];
  freeShippingEnabled: boolean;
  freeShippingThreshold?: number;
  automaticQuotes: boolean;
}

export interface ShippingRange {
  id: string;
  minPallets: number;
  maxPallets: number;
  cost: number;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  userId: string;
  username: string;
  action: string;
  details: string;
}
