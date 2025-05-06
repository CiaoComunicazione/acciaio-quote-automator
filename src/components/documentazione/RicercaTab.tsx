
import React from 'react';

const RicercaTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Funzionalità di Ricerca</h2>
      <p>
        Il gestionale offre diverse funzionalità di ricerca per trovare rapidamente le informazioni necessarie 
        all'interno del sistema.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Ricerca nelle Offerte</h3>
      <p>
        Nella sezione Offerte sono disponibili molteplici filtri per raffinare la ricerca:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Filtro per stato</strong>: Permette di visualizzare solo le offerte in un determinato stato 
          (Ricevuta, In Lavorazione, Inviata, Confermata, Scaduta).
        </li>
        <li>
          <strong>Filtro per prodotto</strong>: Permette di visualizzare solo le offerte che contengono 
          determinati prodotti. È possibile selezionare più prodotti contemporaneamente.
        </li>
        <li>
          <strong>Ricerca per cliente o codice</strong>: Permette di cercare offerte in base al nome del cliente 
          o al codice dell'offerta. La ricerca è incrementale e mostra risultati durante la digitazione.
        </li>
        <li>
          <strong>Filtro per data</strong>: Permette di visualizzare le offerte ricevute in un determinato 
          intervallo di date, specificando una data di inizio e una data di fine.
        </li>
        <li>
          <strong>Filtro per fornitore</strong>: Permette di visualizzare solo le offerte che coinvolgono 
          un determinato fornitore.
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Ricerca nel Database</h3>
      <p>
        Nella sezione Database, ogni scheda (Fornitori, Prodotti, Clienti, Utenti, Log) dispone di un campo 
        di ricerca specifico che permette di filtrare i dati visualizzati:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Ricerca fornitori</strong>: Filtra per codice, nome azienda o email.
        </li>
        <li>
          <strong>Ricerca prodotti</strong>: Filtra per codice, nome o dettagli del prodotto.
        </li>
        <li>
          <strong>Ricerca clienti</strong>: Filtra per codice, nome, email o indirizzo.
        </li>
        <li>
          <strong>Ricerca utenti</strong>: Filtra per username, nome o cognome.
        </li>
        <li>
          <strong>Ricerca log</strong>: Filtra per data, username, azione o dettagli.
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Best practice per la ricerca</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Combinare i filtri</strong>: Per trovare rapidamente un'informazione specifica, utilizzare 
          una combinazione di filtri. Ad esempio, per trovare tutte le offerte confermate per un determinato cliente 
          nell'ultimo mese, utilizzare contemporaneamente i filtri per stato, cliente e data.
        </li>
        <li>
          <strong>Utilizzare ricerche parziali</strong>: Non è necessario inserire il nome completo di un cliente 
          o di un prodotto; il sistema cercherà corrispondenze parziali.
        </li>
        <li>
          <strong>Azzerare i filtri</strong>: Utilizzare il pulsante "Azzera filtri" per ripartire da zero quando 
          si desidera effettuare una nuova ricerca.
        </li>
        <li>
          <strong>Esportare i risultati</strong>: Dopo aver filtrato i dati, utilizzare la funzione di esportazione 
          CSV per salvare i risultati e analizzarli esternamente.
        </li>
      </ul>
    </div>
  );
};

export default RicercaTab;
