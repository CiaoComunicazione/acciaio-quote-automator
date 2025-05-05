
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StatusBadge } from '@/components/offerte/StatusBadge';
import { Offerta } from '@/types/offerte';

interface OfferteListProps {
  offerte: Offerta[];
  onViewDetail: (id: string) => void;
}

export const OfferteList = ({ offerte, onViewDetail }: OfferteListProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Data ricezione</TableHead>
            <TableHead>Stato</TableHead>
            <TableHead>Codice offerta</TableHead>
            <TableHead className="text-right">Azioni</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offerte.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8">
                Nessuna offerta trovata con i criteri di ricerca selezionati
              </TableCell>
            </TableRow>
          ) : (
            offerte.map((offerta) => (
              <TableRow key={offerta.id}>
                <TableCell className="font-medium">{offerta.cliente}</TableCell>
                <TableCell>
                  {format(new Date(offerta.dataRicezione), 'dd MMM yyyy', { locale: it })}
                </TableCell>
                <TableCell>
                  <StatusBadge status={offerta.stato} />
                </TableCell>
                <TableCell>{offerta.codice}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onViewDetail(offerta.id)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Visualizza
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
