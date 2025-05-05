
import { useState, KeyboardEvent } from 'react';
import { Search, Calendar, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { OfferStatus } from '@/types/offerte';
import { PRODOTTI_OPTIONS } from '@/data/offerte-mock';

interface FilterBarProps {
  selectedStatus: OfferStatus | 'ALL';
  setSelectedStatus: (status: OfferStatus | 'ALL') => void;
  selectedProducts: string[];
  addProduct: (product: string) => void;
  removeProduct: (product: string) => void;
  clienteFilter: string;
  setClienteFilter: (value: string) => void;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
  fornitoreFilter: string;
  setFornitoreFilter: (value: string) => void;
}

export const FilterBar = ({
  selectedStatus,
  setSelectedStatus,
  selectedProducts,
  addProduct,
  removeProduct,
  clienteFilter,
  setClienteFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  fornitoreFilter,
  setFornitoreFilter
}: FilterBarProps) => {
  const [productInput, setProductInput] = useState('');
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && productInput) {
      addProduct(productInput);
      setProductInput('');
    }
  };

  const handleProductSelection = (value: string) => {
    if (!selectedProducts.includes(value)) {
      addProduct(value);
    }
    setProductInput('');
  };
  
  const filteredProducts = PRODOTTI_OPTIONS.filter(
    p => p.toLowerCase().includes(productInput.toLowerCase()) && !selectedProducts.includes(p)
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Status Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Stato</label>
          <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as OfferStatus | 'ALL')}>
            <SelectTrigger>
              <SelectValue placeholder="Seleziona stato" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ALL">Tutti gli stati</SelectItem>
                <SelectItem value="RICEVUTA">Ricevuta</SelectItem>
                <SelectItem value="IN_LAVORAZIONE">In lavorazione</SelectItem>
                <SelectItem value="INVIATA">Inviata</SelectItem>
                <SelectItem value="CONFERMATA">Confermata</SelectItem>
                <SelectItem value="SCADUTA">Scaduta</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        {/* Product Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Prodotto</label>
          <div className="relative">
            <Select onValueChange={handleProductSelection}>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona prodotto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {PRODOTTI_OPTIONS.map(product => (
                    <SelectItem 
                      key={product} 
                      value={product}
                      disabled={selectedProducts.includes(product)}
                    >
                      {product}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {selectedProducts.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProducts.map((product) => (
                <Badge key={product} variant="secondary" className="py-1">
                  {product}
                  <button 
                    onClick={() => removeProduct(product)}
                    className="ml-1 hover:text-destructive" 
                  >
                    <X size={14} />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        {/* Cliente/Codice Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Cliente o codice offerta</label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cerca..."
              className="pl-8"
              value={clienteFilter}
              onChange={(e) => setClienteFilter(e.target.value)}
            />
          </div>
        </div>
        
        {/* Date Range Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Data ricezione da</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className={`w-full justify-start text-left font-normal ${!startDate && "text-muted-foreground"}`}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, 'dd/MM/yyyy') : <span>Seleziona data...</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Data ricezione a</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className={`w-full justify-start text-left font-normal ${!endDate && "text-muted-foreground"}`}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, 'dd/MM/yyyy') : <span>Seleziona data...</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Fornitore Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Fornitore</label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cerca fornitore..."
              className="pl-8"
              value={fornitoreFilter}
              onChange={(e) => setFornitoreFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Reset filters button */}
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => {
            setSelectedStatus('ALL');
            removeProduct('all'); // custom handler to clear all products
            setClienteFilter('');
            setStartDate(undefined);
            setEndDate(undefined);
            setFornitoreFilter('');
          }}
          className="text-xs"
        >
          Azzera filtri
        </Button>
      </div>
    </div>
  );
};
