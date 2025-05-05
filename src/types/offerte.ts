
export type OfferStatus = 'RICEVUTA' | 'IN_LAVORAZIONE' | 'INVIATA' | 'CONFERMATA' | 'SCADUTA';

export interface Prodotto {
  id: string;
  nome: string;
  quantita: number;
  unita: string;
  prezzo?: number;
}

export interface Fornitore {
  id: string;
  nome: string;
  codicePreventivo: string;
  dataInvio: string;
  dataRisposta?: string;
  stato: 'INVIATO' | 'RISPOSTO' | 'BLOCCATO' | 'SCADUTO';
  blocked: boolean;
  prodotti: Prodotto[];
  costoSpedizione?: number;
  tempiConsegna?: string;
}

export interface Offerta {
  id: string;
  cliente: string;
  dataRicezione: string;
  dataElaborazione?: string;
  stato: OfferStatus;
  codice: string;
  testoRichiesta: string;
  prodotti: string[];
  fornitoriCoinvolti: string[];
  richiestaImmessa: Prodotto[];
  fornitori: Fornitore[];
  offertaCliente?: {
    prodotti: Prodotto[];
    costoTotale: number;
    costoSpedizione: number;
    totale: number;
    dataConsegna: string;
  };
}
