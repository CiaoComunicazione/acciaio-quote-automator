
import { useState, useMemo } from 'react';
import { Offerta, OfferStatus } from '@/types/offerte';

interface FilterOptions {
  stato: OfferStatus | 'ALL';
  prodotti: string[];
  cliente: string;
  dataInizio?: Date;
  dataFine?: Date;
  fornitore: string;
}

export const useOfferteFilters = (offerte: Offerta[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    stato: 'ALL',
    prodotti: [],
    cliente: '',
    fornitore: '',
  });

  const filteredOfferte = useMemo(() => {
    return offerte.filter(offerta => {
      // Filter by status
      if (filters.stato !== 'ALL' && offerta.stato !== filters.stato) {
        return false;
      }
      
      // Filter by products
      if (filters.prodotti.length > 0) {
        const hasMatchingProduct = filters.prodotti.some(prod => 
          offerta.prodotti.some(p => p.toLowerCase().includes(prod.toLowerCase()))
        );
        if (!hasMatchingProduct) return false;
      }
      
      // Filter by client or code
      if (filters.cliente && !offerta.cliente.toLowerCase().includes(filters.cliente.toLowerCase()) && 
          !offerta.codice.toLowerCase().includes(filters.cliente.toLowerCase())) {
        return false;
      }
      
      // Filter by date range
      if (filters.dataInizio) {
        const receiveDate = new Date(offerta.dataRicezione);
        if (receiveDate < filters.dataInizio) return false;
      }
      
      if (filters.dataFine) {
        const receiveDate = new Date(offerta.dataRicezione);
        if (receiveDate > filters.dataFine) return false;
      }
      
      // Filter by supplier
      if (filters.fornitore && !offerta.fornitoriCoinvolti.some(f => 
          f.toLowerCase().includes(filters.fornitore.toLowerCase())
        )) {
        return false;
      }
      
      return true;
    });
  }, [offerte, filters]);

  const addProductFilter = (prodotto: string) => {
    if (!filters.prodotti.includes(prodotto)) {
      setFilters(prev => ({
        ...prev,
        prodotti: [...prev.prodotti, prodotto]
      }));
    }
  };

  const removeProductFilter = (prodotto: string) => {
    setFilters(prev => ({
      ...prev,
      prodotti: prev.prodotti.filter(p => p !== prodotto)
    }));
  };

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return {
    filters,
    filteredOfferte,
    addProductFilter,
    removeProductFilter,
    updateFilter,
  };
};
