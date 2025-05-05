
import { Offerta } from '@/types/offerte';

export const PRODOTTI_OPTIONS = [
  "COILS", 
  "LAMIERE", 
  "PIATTI CESOIATI", 
  "NASTRINI", 
  "ANGOLARI TONDI E PIENI", 
  "PROFILI PRESSOPIEGATI A DISEGNO", 
  "BARRE MECCANICHE", 
  "LAMIERE BRAMME"
];

export const mockOfferte: Offerta[] = [
  {
    id: '1',
    cliente: 'Industrie Meccaniche Spa',
    dataRicezione: '2025-04-20',
    dataElaborazione: '2025-04-22',
    stato: 'INVIATA',
    codice: '200425-01',
    testoRichiesta: 'Richiesta urgente per lamiere in acciaio inox AISI 304, spessore 2mm, quantità 500kg.',
    prodotti: ['LAMIERE', 'COILS'],
    fornitoriCoinvolti: ['Acciai Speciali Srl', 'MetalTrade Group'],
    richiestaImmessa: [
      { id: '1-1', nome: 'Lamiera INOX AISI 304 2mm', quantita: 500, unita: 'kg' }
    ],
    fornitori: [
      {
        id: 'f1',
        nome: 'Acciai Speciali Srl',
        codicePreventivo: '200425-01-01',
        dataInvio: '2025-04-21',
        dataRisposta: '2025-04-23',
        stato: 'RISPOSTO',
        blocked: false,
        prodotti: [
          { id: '1-1', nome: 'Lamiera INOX AISI 304 2mm', quantita: 500, unita: 'kg', prezzo: 4.50 }
        ],
        costoSpedizione: 120,
        tempiConsegna: '7-10 giorni'
      },
      {
        id: 'f2',
        nome: 'MetalTrade Group',
        codicePreventivo: '200425-01-02',
        dataInvio: '2025-04-21',
        stato: 'INVIATO',
        blocked: false,
        prodotti: [
          { id: '1-1', nome: 'Lamiera INOX AISI 304 2mm', quantita: 500, unita: 'kg' }
        ]
      }
    ],
    offertaCliente: {
      prodotti: [
        { id: '1-1', nome: 'Lamiera INOX AISI 304 2mm', quantita: 500, unita: 'kg', prezzo: 5.20 }
      ],
      costoTotale: 2600,
      costoSpedizione: 150,
      totale: 2750,
      dataConsegna: '2025-05-05'
    }
  },
  {
    id: '2',
    cliente: 'Costruzioni Navali Srl',
    dataRicezione: '2025-04-15',
    stato: 'RICEVUTA',
    codice: '150425-02',
    testoRichiesta: 'Necessito di preventivo per barre tonde in acciaio AISI 316L per applicazione navale.',
    prodotti: ['BARRE MECCANICHE', 'ANGOLARI TONDI E PIENI'],
    fornitoriCoinvolti: [],
    richiestaImmessa: [
      { id: '2-1', nome: 'Barra tonda AISI 316L ø25mm', quantita: 200, unita: 'mt' },
      { id: '2-2', nome: 'Barra tonda AISI 316L ø40mm', quantita: 100, unita: 'mt' }
    ],
    fornitori: []
  },
  {
    id: '3',
    cliente: 'Food Processing Tech',
    dataRicezione: '2025-03-10',
    dataElaborazione: '2025-03-12',
    stato: 'CONFERMATA',
    codice: '100325-03',
    testoRichiesta: 'Richiesta preventivo per lamiere in acciaio AISI 316 per impianto alimentare.',
    prodotti: ['LAMIERE', 'PIATTI CESOIATI'],
    fornitoriCoinvolti: ['Inox Professional SpA', 'Steel Solutions Srl', 'MetalTrade Group'],
    richiestaImmessa: [
      { id: '3-1', nome: 'Lamiera INOX AISI 316 1.5mm', quantita: 300, unita: 'kg' },
      { id: '3-2', nome: 'Piatto cesoiato AISI 316 100x10mm', quantita: 50, unita: 'mt' }
    ],
    fornitori: [
      {
        id: 'f3',
        nome: 'Inox Professional SpA',
        codicePreventivo: '100325-03-01',
        dataInvio: '2025-03-12',
        dataRisposta: '2025-03-14',
        stato: 'RISPOSTO',
        blocked: false,
        prodotti: [
          { id: '3-1', nome: 'Lamiera INOX AISI 316 1.5mm', quantita: 300, unita: 'kg', prezzo: 5.80 },
          { id: '3-2', nome: 'Piatto cesoiato AISI 316 100x10mm', quantita: 50, unita: 'mt', prezzo: 12.50 }
        ],
        costoSpedizione: 180,
        tempiConsegna: '10-15 giorni'
      },
      {
        id: 'f4',
        nome: 'Steel Solutions Srl',
        codicePreventivo: '100325-03-02',
        dataInvio: '2025-03-12',
        dataRisposta: '2025-03-15',
        stato: 'RISPOSTO',
        blocked: false,
        prodotti: [
          { id: '3-1', nome: 'Lamiera INOX AISI 316 1.5mm', quantita: 300, unita: 'kg', prezzo: 5.95 },
          { id: '3-2', nome: 'Piatto cesoiato AISI 316 100x10mm', quantita: 50, unita: 'mt', prezzo: 11.80 }
        ],
        costoSpedizione: 150,
        tempiConsegna: '12-14 giorni'
      },
      {
        id: 'f5',
        nome: 'MetalTrade Group',
        codicePreventivo: '100325-03-03',
        dataInvio: '2025-03-12',
        stato: 'BLOCCATO',
        blocked: true,
        prodotti: [
          { id: '3-1', nome: 'Lamiera INOX AISI 316 1.5mm', quantita: 300, unita: 'kg' }
        ]
      }
    ],
    offertaCliente: {
      prodotti: [
        { id: '3-1', nome: 'Lamiera INOX AISI 316 1.5mm', quantita: 300, unita: 'kg', prezzo: 6.40 },
        { id: '3-2', nome: 'Piatto cesoiato AISI 316 100x10mm', quantita: 50, unita: 'mt', prezzo: 13.20 }
      ],
      costoTotale: 2580,
      costoSpedizione: 180,
      totale: 2760,
      dataConsegna: '2025-03-30'
    }
  },
  {
    id: '4',
    cliente: 'MetalCraft Industries',
    dataRicezione: '2025-04-01',
    dataElaborazione: '2025-04-03',
    stato: 'IN_LAVORAZIONE',
    codice: '010425-04',
    testoRichiesta: 'Preventivo per nastrini inox per componenti elettrici.',
    prodotti: ['NASTRINI'],
    fornitoriCoinvolti: ['Steel Solutions Srl'],
    richiestaImmessa: [
      { id: '4-1', nome: 'Nastrino INOX AISI 430 0.5mm', quantita: 100, unita: 'kg' }
    ],
    fornitori: [
      {
        id: 'f6',
        nome: 'Steel Solutions Srl',
        codicePreventivo: '010425-04-01',
        dataInvio: '2025-04-03',
        stato: 'INVIATO',
        blocked: false,
        prodotti: [
          { id: '4-1', nome: 'Nastrino INOX AISI 430 0.5mm', quantita: 100, unita: 'kg' }
        ]
      }
    ]
  },
  {
    id: '5',
    cliente: 'Carpenteria Moderna',
    dataRicezione: '2025-02-15',
    dataElaborazione: '2025-02-17',
    stato: 'SCADUTA',
    codice: '150225-05',
    testoRichiesta: 'Richiesta profili pressopiegati secondo disegno allegato.',
    prodotti: ['PROFILI PRESSOPIEGATI A DISEGNO'],
    fornitoriCoinvolti: ['Inox Professional SpA'],
    richiestaImmessa: [
      { id: '5-1', nome: 'Profilo pressopiegato INOX AISI 304 3mm', quantita: 50, unita: 'pezzi' }
    ],
    fornitori: [
      {
        id: 'f7',
        nome: 'Inox Professional SpA',
        codicePreventivo: '150225-05-01',
        dataInvio: '2025-02-17',
        dataRisposta: '2025-02-20',
        stato: 'SCADUTO',
        blocked: false,
        prodotti: [
          { id: '5-1', nome: 'Profilo pressopiegato INOX AISI 304 3mm', quantita: 50, unita: 'pezzi', prezzo: 18.50 }
        ],
        costoSpedizione: 90,
        tempiConsegna: '20-25 giorni'
      }
    ]
  }
];
