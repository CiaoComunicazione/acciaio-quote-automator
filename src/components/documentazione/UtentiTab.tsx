
import React from 'react';

const UtentiTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Gestione Utenti e Profili</h2>
      <p>
        Il sistema gestisce diversi tipi di utenti con ruoli e permessi differenziati per garantire 
        la sicurezza e la corretta distribuzione delle responsabilità.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Tipi di utente</h3>
      <p>
        Gli utenti del sistema sono suddivisi in due categorie principali:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Amministratore</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Accesso completo a tutte le funzionalità del sistema</li>
            <li>Può gestire altri utenti (creare, modificare, eliminare)</li>
            <li>Può accedere e modificare le impostazioni del sistema</li>
            <li>Può gestire le anagrafiche nel database</li>
            <li>Ha accesso ai log di sistema</li>
            <li>Può configurare i parametri economici (percentuali di ricarico, costi spedizione)</li>
          </ul>
        </li>
        <li>
          <strong>Junior</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Accesso alle funzionalità operative quotidiane</li>
            <li>Può visualizzare e gestire le offerte</li>
            <li>Può comunicare con clienti e fornitori tramite il sistema</li>
            <li>Può visualizzare la dashboard</li>
            <li>Non può accedere alle sezioni Database e Impostazioni</li>
            <li>Non può modificare i parametri economici del sistema</li>
          </ul>
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Creazione e gestione utenti</h3>
      <p>
        La creazione e la gestione degli utenti può essere effettuata in due modi:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Tramite la sezione Impostazioni {'->'} Nuovo Utente</strong>
          <p className="mt-1">
            Questa è la modalità consigliata per creare rapidamente un nuovo utente, specificando:
          </p>
          <ul className="list-disc pl-6 mt-1">
            <li>Nome e cognome</li>
            <li>Username</li>
            <li>Password iniziale</li>
            <li>Ruolo (Junior o Amministratore)</li>
          </ul>
        </li>
        <li>
          <strong>Tramite la sezione Database {'->'} Utenti</strong>
          <p className="mt-1">
            Questa modalità permette una gestione più completa degli utenti esistenti, con funzionalità per:
          </p>
          <ul className="list-disc pl-6 mt-1">
            <li>Visualizzare tutti gli utenti del sistema</li>
            <li>Modificare i dati di un utente esistente</li>
            <li>Eliminare un utente</li>
            <li>Aggiungere un nuovo utente</li>
          </ul>
        </li>
      </ol>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Profilo utente</h3>
      <p>
        Ogni utente ha un proprio profilo visualizzabile nella parte superiore destra dell'interfaccia. 
        Le informazioni mostrate includono:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Nome e cognome</strong>: Identificazione dell'utente</li>
        <li><strong>Ruolo</strong>: Junior o Amministratore</li>
      </ul>
      <p>
        Accanto al profilo è presente l'icona di logout, che permette di uscire in sicurezza dal sistema.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Best practice per la gestione utenti</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Principio del minimo privilegio</strong>: Assegnare a ciascun utente solo i permessi 
          strettamente necessari per svolgere le proprie mansioni.
        </li>
        <li>
          <strong>Revisione periodica</strong>: Verificare regolarmente l'elenco degli utenti attivi e 
          disabilitare gli account non più necessari.
        </li>
        <li>
          <strong>Password sicure</strong>: Consigliare agli utenti di scegliere password complesse e di cambiarle periodicamente.
        </li>
        <li>
          <strong>Formazione</strong>: Assicurarsi che i nuovi utenti ricevano una formazione adeguata 
          all'utilizzo del sistema prima di accedere in autonomia.
        </li>
        <li>
          <strong>Monitoraggio</strong>: Utilizzare i log di sistema per monitorare le attività degli utenti 
          e identificare eventuali anomalie.
        </li>
      </ul>
    </div>
  );
};

export default UtentiTab;
