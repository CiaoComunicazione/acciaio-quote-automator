
import React from 'react';

const DatabaseTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Database</h2>
      <p>
        La sezione Database è accessibile solo agli utenti con ruolo Amministratore e consente di gestire 
        tutte le anagrafiche del sistema.
      </p>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong className="font-medium">Nota:</strong> Questa sezione è accessibile solo agli utenti con ruolo di Amministratore.
            </p>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Struttura e funzionalità</h3>
      <p>
        Il Database è organizzato in diverse schede, accessibili tramite i tab nella parte superiore della schermata:
      </p>
      
      <h4 className="text-lg font-medium mt-4">1. Fornitori</h4>
      <p>
        Questa sezione contiene l'anagrafica completa dei fornitori:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Codice</strong>: Codice identificativo del fornitore</li>
        <li><strong>Azienda</strong>: Ragione sociale del fornitore</li>
        <li><strong>Email</strong>: Indirizzo email principale per le comunicazioni</li>
        <li>
          <strong>Azioni</strong>: Pulsanti per gestire il fornitore
          <ul className="list-disc pl-6 mt-1">
            <li><strong>Modifica</strong>: Permette di modificare i dati del fornitore</li>
            <li><strong>Elimina</strong>: Permette di rimuovere il fornitore dal database</li>
          </ul>
        </li>
      </ul>
      <p>
        In questa sezione è possibile anche aggiungere un nuovo fornitore tramite il pulsante "Aggiungi Fornitore".
      </p>
      
      <h4 className="text-lg font-medium mt-4">2. Prodotti</h4>
      <p>
        Questa sezione contiene l'anagrafica dei prodotti trattati:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Codice</strong>: Codice identificativo del prodotto</li>
        <li><strong>Nome</strong>: Denominazione del prodotto</li>
        <li><strong>Dettagli</strong>: Specifiche tecniche del prodotto</li>
        <li>
          <strong>Azioni</strong>: Pulsanti per gestire il prodotto
          <ul className="list-disc pl-6 mt-1">
            <li><strong>Modifica</strong>: Permette di modificare i dati del prodotto</li>
            <li><strong>Elimina</strong>: Permette di rimuovere il prodotto dal database</li>
          </ul>
        </li>
      </ul>
      <p>
        È possibile aggiungere un nuovo prodotto tramite il pulsante "Aggiungi Prodotto".
      </p>
      
      <h4 className="text-lg font-medium mt-4">3. Clienti</h4>
      <p>
        Questa sezione contiene l'anagrafica dei clienti:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Codice</strong>: Codice identificativo del cliente</li>
        <li><strong>Nome</strong>: Ragione sociale del cliente</li>
        <li><strong>Email</strong>: Indirizzo email principale per le comunicazioni</li>
        <li><strong>Indirizzo</strong>: Indirizzo di spedizione principale</li>
        <li>
          <strong>Azioni</strong>: Pulsanti per gestire il cliente
          <ul className="list-disc pl-6 mt-1">
            <li><strong>Modifica</strong>: Permette di modificare i dati del cliente</li>
            <li><strong>Elimina</strong>: Permette di rimuovere il cliente dal database</li>
          </ul>
        </li>
      </ul>
      <p>
        È possibile aggiungere un nuovo cliente tramite il pulsante "Aggiungi Cliente".
      </p>
      
      <h4 className="text-lg font-medium mt-4">4. Utenti</h4>
      <p>
        Questa sezione permette di gestire gli utenti del sistema:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Username</strong>: Nome utente per l'accesso al sistema</li>
        <li><strong>Nome</strong>: Nome dell'utente</li>
        <li><strong>Cognome</strong>: Cognome dell'utente</li>
        <li><strong>Ruolo</strong>: Ruolo dell'utente (Amministratore o Junior)</li>
        <li>
          <strong>Azioni</strong>: Pulsanti per gestire l'utente
          <ul className="list-disc pl-6 mt-1">
            <li><strong>Modifica</strong>: Permette di modificare i dati dell'utente</li>
            <li><strong>Elimina</strong>: Permette di rimuovere l'utente dal sistema</li>
          </ul>
        </li>
      </ul>
      <p>
        È possibile aggiungere un nuovo utente tramite il pulsante "Aggiungi Utente".
      </p>
      
      <h4 className="text-lg font-medium mt-4">5. Log</h4>
      <p>
        Questa sezione mostra il registro delle attività svolte nel sistema:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Data e Ora</strong>: Momento in cui è stata eseguita l'azione</li>
        <li><strong>Username</strong>: Utente che ha eseguito l'azione</li>
        <li><strong>Azione</strong>: Tipo di azione eseguita</li>
        <li><strong>Dettagli</strong>: Informazioni specifiche sull'azione</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Funzioni comuni</h3>
      <p>
        Tutte le schede del Database (tranne i Log) condividono alcune funzionalità comuni:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Ricerca</strong>: Campo di ricerca per filtrare i dati visualizzati</li>
        <li><strong>Esporta CSV</strong>: Pulsante per esportare i dati in formato CSV</li>
        <li><strong>Conferma modifiche</strong>: Tutte le operazioni di modifica richiedono una conferma</li>
        <li><strong>Conferma eliminazione</strong>: Le operazioni di eliminazione richiedono una conferma aggiuntiva</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Suggerimenti pratici</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Mantenere aggiornate le anagrafiche, specialmente per quanto riguarda i prodotti trattati dai fornitori</li>
        <li>Fare attenzione quando si eliminano record, verificando che non siano collegati a offerte attive</li>
        <li>Utilizzare regolarmente la funzione di esportazione CSV per avere un backup dei dati</li>
        <li>Consultare periodicamente i log per monitorare l'attività del sistema</li>
      </ul>
    </div>
  );
};

export default DatabaseTab;
