
import { useState } from 'react';
import { OfferteList } from '@/components/offerte/OfferteList';
import { FilterBar } from '@/components/offerte/FilterBar';
import { OffertaDetail } from '@/components/offerte/OffertaDetail';
import { mockOfferte } from '@/data/offerte-mock';
import { Offerta, OfferStatus } from '@/types/offerte';
import { useToast } from "@/hooks/use-toast";

const Offerte = () => {
  // State management
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<OfferStatus | 'ALL'>('ALL');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [clienteFilter, setClienteFilter] = useState('');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [fornitoreFilter, setFornitoreFilter] = useState('');
  const { toast } = useToast();
  
  // Find selected offer
  const selectedOffer = mockOfferte.find(offer => offer.id === selectedOfferId);
  
  // Filter offers based on criteria
  const filteredOfferte = mockOfferte.filter(offer => {
    // Status filter
    if (selectedStatus !== 'ALL' && offer.stato !== selectedStatus) {
      return false;
    }
    
    // Products filter
    if (selectedProducts.length > 0) {
      const hasMatchingProduct = selectedProducts.some(prod => 
        offer.prodotti.some(p => p.toLowerCase().includes(prod.toLowerCase()))
      );
      if (!hasMatchingProduct) return false;
    }
    
    // Client/code filter
    if (clienteFilter) {
      const matchesClient = offer.cliente.toLowerCase().includes(clienteFilter.toLowerCase());
      const matchesCode = offer.codice.toLowerCase().includes(clienteFilter.toLowerCase());
      if (!matchesClient && !matchesCode) return false;
    }
    
    // Date range filter
    if (startDate) {
      const receiveDate = new Date(offer.dataRicezione);
      if (receiveDate < startDate) return false;
    }
    
    if (endDate) {
      const receiveDate = new Date(offer.dataRicezione);
      if (receiveDate > endDate) return false;
    }
    
    // Supplier filter
    if (fornitoreFilter && !offer.fornitoriCoinvolti.some(f => 
        f.toLowerCase().includes(fornitoreFilter.toLowerCase())
      )) {
      return false;
    }
    
    return true;
  });
  
  // Add product filter
  const addProductFilter = (product: string) => {
    if (product === 'all') {
      setSelectedProducts([]);
      return;
    }
    
    if (!selectedProducts.includes(product)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };
  
  // Remove product filter
  const removeProductFilter = (product: string) => {
    if (product === 'all') {
      setSelectedProducts([]);
      return;
    }
    
    setSelectedProducts(selectedProducts.filter(p => p !== product));
  };
  
  // Handle view detail click
  const handleViewDetail = (id: string) => {
    setSelectedOfferId(id);
  };
  
  // Handle back button click
  const handleBack = () => {
    setSelectedOfferId(null);
  };
  
  // Toggle block supplier
  const handleToggleBlockSupplier = (fornitorId: string) => {
    if (!selectedOffer) return;
    
    // In a real app, this would update the actual data through API
    // Here we just show a toast notification
    const fornitore = selectedOffer.fornitori.find(f => f.id === fornitorId);
    if (!fornitore) return;

    const newBlockedState = !fornitore.blocked;
    
    toast({
      title: `${newBlockedState ? 'Bloccato' : 'Riattivato'} sollecito al fornitore`,
      description: `${fornitore.nome} - ${fornitore.codicePreventivo}`,
    });
  };
  
  return (
    <div className="space-y-6">
      {!selectedOfferId ? (
        <>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Offerte</h1>
            <p className="text-muted-foreground">
              Gestione delle richieste di offerta e preventivi
            </p>
          </div>
          
          <FilterBar
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedProducts={selectedProducts}
            addProduct={addProductFilter}
            removeProduct={removeProductFilter}
            clienteFilter={clienteFilter}
            setClienteFilter={setClienteFilter}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            fornitoreFilter={fornitoreFilter}
            setFornitoreFilter={setFornitoreFilter}
          />
          
          <OfferteList 
            offerte={filteredOfferte} 
            onViewDetail={handleViewDetail} 
          />
        </>
      ) : selectedOffer ? (
        <OffertaDetail 
          offerta={selectedOffer} 
          onBack={handleBack} 
          onToggleBlockSupplier={handleToggleBlockSupplier} 
        />
      ) : (
        <div className="text-center py-8">
          <p>Offerta non trovata</p>
          <button onClick={handleBack} className="underline mt-2">
            Torna alla lista
          </button>
        </div>
      )}
    </div>
  );
};

export default Offerte;
