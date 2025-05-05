
import { useState } from 'react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { ArrowLeft, Eye, PauseCircle, PlayCircle } from 'lucide-react';
import { Offerta, Fornitore } from '@/types/offerte';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StatusBadge } from '@/components/offerte/StatusBadge';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';

interface OffertaDetailProps {
  offerta: Offerta;
  onBack: () => void;
  onToggleBlockSupplier: (fornitorId: string) => void;
}

export const OffertaDetail = ({ offerta, onBack, onToggleBlockSupplier }: OffertaDetailProps) => {
  const [viewRfqDialog, setViewRfqDialog] = useState<{ open: boolean; fornitore?: Fornitore }>({
    open: false,
  });

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div>
        <Button 
          variant="link" 
          onClick={onBack} 
          className="pl-0 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Torna alle Offerte
        </Button>
      </div>

      {/* Accordion sections */}
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        {/* Section 1: Details */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">
            1. Dati
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Cliente</p>
                    <p className="font-medium">{offerta.cliente}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Codice</p>
                    <p className="font-medium">{offerta.codice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Stato</p>
                    <StatusBadge status={offerta.stato} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Data ricezione</p>
                    <p className="font-medium">
                      {format(new Date(offerta.dataRicezione), 'dd MMMM yyyy', { locale: it })}
                    </p>
                  </div>
                  {offerta.dataElaborazione && (
                    <div>
                      <p className="text-sm text-gray-500">Data elaborazione</p>
                      <p className="font-medium">
                        {format(new Date(offerta.dataElaborazione), 'dd MMMM yyyy', { locale: it })}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Section 2: Original Request */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">
            2. Richiesta originale
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-4">
                <p className="whitespace-pre-line">{offerta.testoRichiesta}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Prodotti</p>
                  <div className="flex flex-wrap gap-2">
                    {offerta.prodotti.map((prodotto, index) => (
                      <Badge key={index} variant="outline">
                        {prodotto}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Section 3: Products */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">
            3. Richiesta immessa
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Prodotto</TableHead>
                      <TableHead>Quantità</TableHead>
                      <TableHead>Unità</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {offerta.richiestaImmessa.map((prodotto) => (
                      <TableRow key={prodotto.id}>
                        <TableCell>{prodotto.nome}</TableCell>
                        <TableCell>{prodotto.quantita}</TableCell>
                        <TableCell>{prodotto.unita}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Section 4: Supplier Quotes */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium">
            4. Richieste preventivo ai fornitori
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-4">
                {offerta.fornitori.length === 0 ? (
                  <p className="text-center py-4 text-gray-500">
                    Nessuna richiesta preventivo inviata
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fornitore</TableHead>
                        <TableHead>Codice preventivo</TableHead>
                        <TableHead>Data invio</TableHead>
                        <TableHead>Stato</TableHead>
                        <TableHead>Azioni</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {offerta.fornitori.map((fornitore) => (
                        <TableRow key={fornitore.id}>
                          <TableCell>{fornitore.nome}</TableCell>
                          <TableCell>{fornitore.codicePreventivo}</TableCell>
                          <TableCell>
                            {format(new Date(fornitore.dataInvio), 'dd MMM yyyy', { locale: it })}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={fornitore.stato === 'RISPOSTO' ? "default" : 
                                      fornitore.stato === 'BLOCCATO' ? "destructive" : 
                                      fornitore.stato === 'SCADUTO' ? "outline" : "secondary"}
                            >
                              {fornitore.stato}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              {(fornitore.stato === 'RISPOSTO' || fornitore.dataRisposta) && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setViewRfqDialog({ open: true, fornitore })}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  Visualizza preventivo
                                </Button>
                              )}
                              
                              {(fornitore.stato === 'INVIATO' || fornitore.stato === 'BLOCCATO') && (
                                <Button
                                  variant={fornitore.blocked ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => onToggleBlockSupplier(fornitore.id)}
                                >
                                  {fornitore.blocked ? (
                                    <>
                                      <PlayCircle className="h-4 w-4 mr-1" />
                                      Riattiva sollecito
                                    </>
                                  ) : (
                                    <>
                                      <PauseCircle className="h-4 w-4 mr-1" />
                                      Ferma sollecito
                                    </>
                                  )}
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* Section 5: Client Offer */}
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium">
            5. Offerta al cliente
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-4">
                {!offerta.offertaCliente ? (
                  <p className="text-center py-4 text-gray-500">
                    Nessuna offerta al cliente creata
                  </p>
                ) : (
                  <>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Prodotti</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Prodotto</TableHead>
                            <TableHead>Quantità</TableHead>
                            <TableHead>Unità</TableHead>
                            <TableHead>Prezzo unitario</TableHead>
                            <TableHead>Totale</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {offerta.offertaCliente.prodotti.map((prodotto) => (
                            <TableRow key={prodotto.id}>
                              <TableCell>{prodotto.nome}</TableCell>
                              <TableCell>{prodotto.quantita}</TableCell>
                              <TableCell>{prodotto.unita}</TableCell>
                              <TableCell>€ {prodotto.prezzo?.toFixed(2)}</TableCell>
                              <TableCell>
                                € {(prodotto.prezzo! * prodotto.quantita).toFixed(2)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Riepilogo costi</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Costo prodotti:</span>
                            <span>€ {offerta.offertaCliente.costoTotale.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Costo spedizione:</span>
                            <span>€ {offerta.offertaCliente.costoSpedizione.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>Totale:</span>
                            <span>€ {offerta.offertaCliente.totale.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Informazioni di consegna</h4>
                        <p>Data di consegna prevista: {format(new Date(offerta.offertaCliente.dataConsegna), 'dd MMMM yyyy', { locale: it })}</p>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* RFQ Dialog */}
      <Dialog 
        open={viewRfqDialog.open} 
        onOpenChange={(open) => setViewRfqDialog({ open })}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Dettaglio Preventivo</DialogTitle>
            <DialogDescription>
              {viewRfqDialog.fornitore?.nome} - {viewRfqDialog.fornitore?.codicePreventivo}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Data invio richiesta</p>
                <p className="font-medium">
                  {viewRfqDialog.fornitore?.dataInvio && 
                    format(new Date(viewRfqDialog.fornitore.dataInvio), 'dd MMM yyyy', { locale: it })}
                </p>
              </div>
              {viewRfqDialog.fornitore?.dataRisposta && (
                <div>
                  <p className="text-sm text-gray-500">Data risposta</p>
                  <p className="font-medium">
                    {format(new Date(viewRfqDialog.fornitore.dataRisposta), 'dd MMM yyyy', { locale: it })}
                  </p>
                </div>
              )}
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Prodotti</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Prodotto</TableHead>
                    <TableHead>Quantità</TableHead>
                    <TableHead>Unità</TableHead>
                    <TableHead>Prezzo unitario</TableHead>
                    <TableHead>Totale</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {viewRfqDialog.fornitore?.prodotti.map((prodotto) => (
                    <TableRow key={prodotto.id}>
                      <TableCell>{prodotto.nome}</TableCell>
                      <TableCell>{prodotto.quantita}</TableCell>
                      <TableCell>{prodotto.unita}</TableCell>
                      <TableCell>
                        {prodotto.prezzo ? `€ ${prodotto.prezzo.toFixed(2)}` : '-'}
                      </TableCell>
                      <TableCell>
                        {prodotto.prezzo 
                          ? `€ ${(prodotto.prezzo * prodotto.quantita).toFixed(2)}` 
                          : '-'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {viewRfqDialog.fornitore?.costoSpedizione && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Informazioni aggiuntive</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Costo spedizione:</span>
                      <span>€ {viewRfqDialog.fornitore.costoSpedizione.toFixed(2)}</span>
                    </div>
                    {viewRfqDialog.fornitore.tempiConsegna && (
                      <div className="flex justify-between">
                        <span>Tempi di consegna:</span>
                        <span>{viewRfqDialog.fornitore.tempiConsegna}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
