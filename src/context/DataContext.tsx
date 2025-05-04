
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  Product, 
  Supplier, 
  Customer, 
  QuoteRequest, 
  SupplierQuoteRequest, 
  SystemSettings, 
  LogEntry,
  QuoteStatus,
  SupplierQuoteStatus,
} from '@/types';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from './AuthContext';

interface DataContextType {
  products: Product[];
  suppliers: Supplier[];
  customers: Customer[];
  quotes: QuoteRequest[];
  supplierQuotes: SupplierQuoteRequest[];
  logs: LogEntry[];
  settings: SystemSettings;
  
  // Filter methods
  getQuotesByStatus: (status: QuoteStatus | 'ALL') => QuoteRequest[];
  getQuotesBySupplier: (supplierId: string) => SupplierQuoteRequest[];
  getQuoteById: (quoteId: string) => QuoteRequest | undefined;
  getSupplierQuoteById: (supplierQuoteId: string) => SupplierQuoteRequest | undefined;
  
  // Action methods
  createQuoteRequest: (customer: Customer, items: { productId: string, quantity: number }[]) => QuoteRequest;
  updateQuoteStatus: (quoteId: string, status: QuoteStatus) => void;
  updateSupplierQuoteStatus: (supplierQuoteId: string, status: SupplierQuoteStatus) => void;
  toggleReminderBlock: (supplierQuoteId: string, blocked: boolean) => void;
  toggleReminderAllowRerequest: (supplierQuoteId: string, allowRerequest: boolean) => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

// Mock data for products
const mockProducts: Product[] = [
  { id: '1', code: 'INX-TUBE-304', name: 'Tubo Inox AISI 304', details: 'Diametro 25mm, spessore 1.5mm' },
  { id: '2', code: 'INX-SHEET-316', name: 'Lamiera Inox AISI 316', details: 'Spessore 2mm, 1000x2000mm' },
  { id: '3', code: 'INX-BAR-304', name: 'Barra Inox AISI 304', details: 'Diametro 20mm, lunghezza 3m' },
  { id: '4', code: 'INX-ANGLE-316', name: 'Angolare Inox AISI 316', details: '40x40mm, spessore 4mm' },
  { id: '5', code: 'INX-PIPE-304', name: 'Tubo Saldato Inox AISI 304', details: 'DN 50, spessore 2mm' },
];

// Mock data for suppliers
const mockSuppliers: Supplier[] = [
  {
    id: '1', 
    code: 'SUP-001', 
    companyName: 'Inox Professional SpA',
    email: 'acquisti@inoxpro.it',
    products: [
      { productId: '1', productCode: 'INX-TUBE-304', productName: 'Tubo Inox AISI 304' },
      { productId: '2', productCode: 'INX-SHEET-316', productName: 'Lamiera Inox AISI 316' },
    ],
    closingPeriods: [],
  },
  {
    id: '2', 
    code: 'SUP-002', 
    companyName: 'Steel Solutions Srl',
    email: 'ordini@steelsolutions.it',
    products: [
      { productId: '3', productCode: 'INX-BAR-304', productName: 'Barra Inox AISI 304' },
      { productId: '4', productCode: 'INX-ANGLE-316', productName: 'Angolare Inox AISI 316' },
    ],
    closingPeriods: [],
  },
  {
    id: '3', 
    code: 'SUP-003', 
    companyName: 'MetalTrade Group',
    email: 'preventivi@metaltrade.com',
    products: [
      { productId: '1', productCode: 'INX-TUBE-304', productName: 'Tubo Inox AISI 304' },
      { productId: '5', productCode: 'INX-PIPE-304', productName: 'Tubo Saldato Inox AISI 304' },
    ],
    closingPeriods: [],
  },
];

// Mock data for customers
const mockCustomers: Customer[] = [
  { id: '1', code: 'CUST-001', name: 'Industrie Meccaniche SpA', shippingAddress: 'Via dell\'Industria 123, Milano', email: 'acquisti@indmec.it' },
  { id: '2', code: 'CUST-002', name: 'Costruzioni Navali Srl', shippingAddress: 'Via del Porto 45, Genova', email: 'ordini@navalisrl.it' },
  { id: '3', code: 'CUST-003', name: 'Food Processing Tech', shippingAddress: 'Via Emilia 789, Parma', email: 'procurement@foodpt.it' },
];

// Mock system settings
const mockSettings: SystemSettings = {
  emailSender: 'preventivi@acciaioinox.it',
  markup: 15, // 15% markup on supplier prices
  customHolidays: ['2025-12-24', '2025-12-31'],
  shippingRanges: [
    { id: '1', minPallets: 1, maxPallets: 2, cost: 150 },
    { id: '2', minPallets: 3, maxPallets: 5, cost: 250 },
    { id: '3', minPallets: 6, maxPallets: 10, cost: 400 },
  ],
  freeShippingEnabled: true,
  freeShippingThreshold: 5,
  automaticQuotes: true,
};

// Helper to generate current date in YYYY-MM-DD format
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Helper to generate a quote code (GGMMAA-XX)
const generateQuoteCode = (): string => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString().slice(-2);
  
  // In a real application, XX would be sequentially generated based on existing quotes
  const sequence = Math.floor(10 + Math.random() * 90).toString();
  
  return `${day}${month}${year}-${sequence}`;
};

// Helper to generate a supplier quote code (GGMMAA-XXNN)
const generateSupplierQuoteCode = (quoteCode: string): string => {
  // In a real application, NN would be sequentially generated
  const sequence = Math.floor(10 + Math.random() * 90).toString();
  return `${quoteCode}${sequence}`;
};

// Helper to calculate valid until date (working days)
const addWorkingDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  let addedDays = 0;
  
  while (addedDays < days) {
    result.setDate(result.getDate() + 1);
    const dayOfWeek = result.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Not a weekend
      addedDays++;
    }
  }
  
  return result;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [suppliers, setSuppliers] = useState<Supplier[]>(mockSuppliers);
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [supplierQuotes, setSupplierQuotes] = useState<SupplierQuoteRequest[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [settings, setSettings] = useState<SystemSettings>(mockSettings);
  
  const { toast } = useToast();
  const { user } = useAuth();

  // Add a new log entry
  const addLogEntry = (action: string, details: string) => {
    if (!user) return;
    
    const newLog: LogEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      userId: user.id,
      username: user.username,
      action,
      details,
    };
    
    setLogs(prev => [newLog, ...prev]);
  };

  // Filter methods
  const getQuotesByStatus = (status: QuoteStatus | 'ALL') => {
    if (status === 'ALL') return quotes;
    return quotes.filter(quote => quote.status === status);
  };

  const getQuotesBySupplier = (supplierId: string) => {
    return supplierQuotes.filter(sq => sq.supplierId === supplierId);
  };

  const getQuoteById = (quoteId: string) => {
    return quotes.find(q => q.id === quoteId);
  };

  const getSupplierQuoteById = (supplierQuoteId: string) => {
    return supplierQuotes.find(sq => sq.id === supplierQuoteId);
  };

  // Create a new quote request
  const createQuoteRequest = (customer: Customer, items: { productId: string, quantity: number }[]) => {
    const quoteCode = generateQuoteCode();
    const today = new Date();
    const validUntil = addWorkingDays(today, 5);
    
    const quoteItems = items.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        productId: item.productId,
        productName: product ? product.name : 'Unknown Product',
        quantity: item.quantity,
      };
    });
    
    const newQuote: QuoteRequest = {
      id: Date.now().toString(),
      quoteCode,
      customerId: customer.id,
      customerName: customer.name,
      dateReceived: formatDate(today),
      status: 'RECEIVED',
      items: quoteItems,
      shippingAddress: customer.shippingAddress,
      validUntil: formatDate(validUntil),
    };
    
    setQuotes(prev => [newQuote, ...prev]);
    
    addLogEntry(
      'CREATE_QUOTE', 
      `Created quote ${quoteCode} for ${customer.name}`
    );
    
    // Automatically create supplier quotes
    // In a real app, this would send emails to suppliers
    const relevantSuppliers = new Set<string>();
    items.forEach(item => {
      suppliers.forEach(supplier => {
        if (supplier.products.some(p => p.productId === item.productId)) {
          relevantSuppliers.add(supplier.id);
        }
      });
    });
    
    relevantSuppliers.forEach(supplierId => {
      const supplier = suppliers.find(s => s.id === supplierId);
      if (!supplier) return;
      
      const supplierItems = items
        .filter(item => supplier.products.some(p => p.productId === item.productId))
        .map(item => {
          const product = products.find(p => p.id === item.productId);
          return {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            productId: item.productId,
            productName: product ? product.name : 'Unknown Product',
            quantity: item.quantity,
          };
        });
      
      if (supplierItems.length === 0) return;
      
      const validUntilSupplier = addWorkingDays(today, 2);
      
      const newSupplierQuote: SupplierQuoteRequest = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        quoteRequestId: newQuote.id,
        quoteCode: quoteCode,
        supplierQuoteCode: generateSupplierQuoteCode(quoteCode),
        supplierId: supplier.id,
        supplierName: supplier.companyName,
        items: supplierItems,
        status: 'SENT',
        dateSent: formatDate(today),
        shippingPallets: Math.ceil(supplierItems.reduce((acc, item) => acc + item.quantity * 0.2, 0)),
        validUntil: formatDate(validUntilSupplier),
        reminderSent: false,
      };
      
      setSupplierQuotes(prev => [newSupplierQuote, ...prev]);
      
      addLogEntry(
        'CREATE_SUPPLIER_QUOTE', 
        `Created quote request for ${supplier.companyName}`
      );
    });
    
    // Update quote status to IN_PROGRESS
    setTimeout(() => {
      setQuotes(prev => prev.map(q => 
        q.id === newQuote.id ? { ...q, status: 'IN_PROGRESS' } : q
      ));
      
      toast({
        title: "Quote Processing Started",
        description: `Quote ${quoteCode} is now being processed`,
      });
      
      addLogEntry(
        'UPDATE_QUOTE_STATUS', 
        `Updated quote ${quoteCode} status to IN_PROGRESS`
      );
    }, 2000);
    
    return newQuote;
  };

  // Update quote status
  const updateQuoteStatus = (quoteId: string, status: QuoteStatus) => {
    setQuotes(prev => prev.map(q => {
      if (q.id === quoteId) {
        addLogEntry(
          'UPDATE_QUOTE_STATUS',
          `Updated quote ${q.quoteCode} status from ${q.status} to ${status}`
        );
        return { ...q, status };
      }
      return q;
    }));
  };

  // Update supplier quote status
  const updateSupplierQuoteStatus = (supplierQuoteId: string, status: SupplierQuoteStatus) => {
    setSupplierQuotes(prev => prev.map(sq => {
      if (sq.id === supplierQuoteId) {
        addLogEntry(
          'UPDATE_SUPPLIER_QUOTE_STATUS',
          `Updated supplier quote ${sq.supplierQuoteCode} status from ${sq.status} to ${status}`
        );
        return { ...sq, status };
      }
      return sq;
    }));
  };

  // Toggle reminder block for a supplier quote
  const toggleReminderBlock = (supplierQuoteId: string, blocked: boolean) => {
    setSupplierQuotes(prev => prev.map(sq => {
      if (sq.id === supplierQuoteId) {
        const newStatus = blocked ? 'BLOCKED' : 'SENT';
        addLogEntry(
          blocked ? 'BLOCK_REMINDER' : 'UNBLOCK_REMINDER',
          `${blocked ? 'Blocked' : 'Unblocked'} reminders for supplier quote ${sq.supplierQuoteCode}`
        );
        return { ...sq, status: newStatus };
      }
      return sq;
    }));
  };

  // Toggle whether a supplier can be re-requested for the same quote
  const toggleReminderAllowRerequest = (supplierQuoteId: string, allowRerequest: boolean) => {
    setSupplierQuotes(prev => prev.map(sq => {
      if (sq.id === supplierQuoteId) {
        addLogEntry(
          allowRerequest ? 'ALLOW_REREQUEST' : 'DISALLOW_REREQUEST',
          `${allowRerequest ? 'Allowed' : 'Disallowed'} re-requesting for supplier quote ${sq.supplierQuoteCode}`
        );
        return { ...sq, allowRerequest };
      }
      return sq;
    }));
  };

  const value = {
    products,
    suppliers,
    customers,
    quotes,
    supplierQuotes,
    logs,
    settings,
    
    // Filter methods
    getQuotesByStatus,
    getQuotesBySupplier,
    getQuoteById,
    getSupplierQuoteById,
    
    // Action methods
    createQuoteRequest,
    updateQuoteStatus,
    updateSupplierQuoteStatus,
    toggleReminderBlock,
    toggleReminderAllowRerequest,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
