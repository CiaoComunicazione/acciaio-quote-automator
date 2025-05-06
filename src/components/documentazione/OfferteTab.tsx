
import React from 'react';

const OfferteTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Gestione Offerte</h2>
      <p>
        La sezione Offerte è il cuore operativo del gestionale, dove vengono gestite tutte le richieste 
        di offerta, dalla ricezione alla finalizzazione.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Visualizzazione e filtri</h3>
      <p>
        La schermata principale mostra un elenco di tutte le offerte presenti nel sistema. È possibile 
        filtrare le offerte utilizzando i seguenti criteri:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Stato</strong>: Filtrare per stato dell'offerta
          <ul className="list-disc pl-6 mt-1">
            <li>Ricevuta: L'offerta è stata ricevuta ma non ancora elaborata</li>
            <li>In Lavorazione: L'offerta è in fase di elaborazione</li>
            <li>Inviata: L'offerta è stata inviata al cliente</li>
            <li>Confermata: L'offerta è stata accettata dal cliente</li>
            <li>Scaduta: L'offerta è scaduta senza conferma</li>
          </ul>
        </li>
        <li><strong>Prodotto</strong>: Filtrare per tipo di prodotto richiesto</li>
        <li><strong>Cliente o codice offerta</strong>: Ricerca per nome cliente o codice offerta</li>
        <li><strong>Data ricezione</strong>: Filtrare per intervallo di date</li>
        <li><strong>Fornitore</strong>: Filtrare per fornitore coinvolto</li>
      </ul>
      <p>
        I filtri possono essere utilizzati singolarmente o combinati tra loro per una ricerca più precisa.
        È possibile azzerare tutti i filtri con l'apposito pulsante "Azzera filtri".
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Elenco offerte</h3>
      <p>
        L'elenco delle offerte mostra le seguenti informazioni per ogni offerta:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Cliente</strong>: Nome del cliente che ha richiesto l'offerta</li>
        <li><strong>Data ricezione</strong>: Data in cui è stata ricevuta la richiesta</li>
        <li><strong>Stato</strong>: Stato attuale dell'offerta (con indicatore visivo)</li>
        <li><strong>Codice offerta</strong>: Identificativo univoco dell'offerta</li>
        <li><strong>Azioni</strong>: Pulsante per visualizzare i dettagli dell'offerta</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Dettaglio offerta</h3>
      <p>
        Facendo clic sul pulsante "Visualizza" di un'offerta, si accede alla schermata di dettaglio, 
        che è organizzata in diverse sezioni:
      </p>
      
      <h4 className="text-lg font-medium mt-4">1. Dati generali</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Cliente</strong>: Nome del cliente</li>
        <li><strong>Codice offerta</strong>: Identificativo univoco</li>
        <li><strong>Data ricezione</strong>: Data in cui è stata ricevuta la richiesta</li>
        <li><strong>Data elaborazione</strong>: Data in cui è iniziata l'elaborazione</li>
        <li><strong>Stato</strong>: Stato attuale dell'offerta</li>
      </ul>
      
      <h4 className="text-lg font-medium mt-4">2. Richiesta originale</h4>
      <p>
        Questa sezione contiene il testo originale della richiesta ricevuta dal cliente.
      </p>
      
      <h4 className="text-lg font-medium mt-4">3. Richiesta immessa</h4>
      <p>
        Qui sono elencati i prodotti richiesti con le seguenti informazioni:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Prodotto</strong>: Nome del prodotto</li>
        <li><strong>Quantità</strong>: Quantità richiesta</li>
        <li><strong>Unità</strong>: Unità di misura</li>
      </ul>
      
      <h4 className="text-lg font-medium mt-4">4. Richieste preventivo ai fornitori</h4>
      <p>
        Questa sezione mostra l'elenco dei fornitori a cui è stata inviata la richiesta di preventivo:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Fornitore</strong>: Nome del fornitore</li>
        <li><strong>Codice preventivo</strong>: Identificativo della richiesta</li>
        <li><strong>Data invio</strong>: Data in cui è stata inviata la richiesta al fornitore</li>
        <li><strong>Data risposta</strong>: Data in cui il fornitore ha risposto (se disponibile)</li>
        <li><strong>Stato</strong>: Stato della richiesta al fornitore</li>
        <li><strong>Azioni</strong>: Pulsanti per gestire la richiesta al fornitore</li>
      </ul>
      
      <p>
        Le azioni disponibili sono:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Ferma sollecito / Riattiva sollecito</strong>: Permette di bloccare o riattivare i solleciti automatici al fornitore.
          <ul className="list-disc pl-6 mt-1">
            <li>
              Al clic su "Ferma sollecito" appare un popup di conferma con l'opzione "Impedisci una nuova richiesta prodotto per la stessa offerta". 
              Se questa opzione viene selezionata, il sistema non contatterà nuovamente il fornitore in caso di prodotto non trovato.
            </li>
            <li>
              Al clic su "Riattiva sollecito" appare un popup di conferma. In caso di riattivazione, viene riabilitata anche la possibilità 
              di fare una seconda richiesta al fornitore se un prodotto non è stato trovato.
            </li>
          </ul>
        </li>
        <li>
          <strong>Aggiorna dati fornitore</strong>: Reindirizza alla scheda del fornitore nel database per fare un aggiornamento manuale 
          (utile se il fornitore risponde che non tratta un determinato prodotto).
        </li>
      </ul>
      
      <h4 className="text-lg font-medium mt-4">5. Prodotti del fornitore</h4>
      <p>
        Per ogni fornitore, è possibile visualizzare i dettagli dei prodotti richiesti:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Prodotto</strong>: Nome del prodotto</li>
        <li><strong>Quantità</strong>: Quantità richiesta</li>
        <li><strong>Prezzo</strong>: Prezzo offerto dal fornitore (se disponibile)</li>
      </ul>
      
      <h4 className="text-lg font-medium mt-4">6. Offerta cliente</h4>
      <p>
        Questa sezione mostra i dettagli dell'offerta finale preparata per il cliente:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Prodotti</strong>: Elenco dei prodotti con quantità e prezzi</li>
        <li><strong>Costo totale prodotti</strong>: Somma dei costi dei prodotti</li>
        <li><strong>Costo spedizione</strong>: Costo della spedizione</li>
        <li><strong>Totale offerta</strong>: Importo totale dell'offerta</li>
        <li><strong>Data consegna prevista</strong>: Data stimata di consegna</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Suggerimenti pratici</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Utilizzare i filtri per trovare rapidamente offerte specifiche</li>
        <li>Monitorare attentamente lo stato delle richieste ai fornitori per evitare ritardi</li>
        <li>Utilizzare la funzione "Ferma sollecito" quando si sa che un fornitore non risponderà</li>
        <li>Aggiornare regolarmente i dati dei fornitori quando si ricevono informazioni sui prodotti non trattati</li>
      </ul>
    </div>
  );
};

export default OfferteTab;
