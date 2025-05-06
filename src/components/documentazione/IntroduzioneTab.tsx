
import React from 'react';

const IntroduzioneTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Introduzione al Gestionale Acciaio</h2>
      <p>
        Benvenuti nella documentazione del Sistema di Gestione Offerte Acciaio, un'applicazione web progettata 
        specificamente per gestire il flusso di richieste di offerta, preventivi da fornitori e comunicazioni 
        con i clienti nel settore siderurgico.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Panoramica del sistema</h3>
      <p>
        Il gestionale Acciaio è stato sviluppato per ottimizzare il processo di gestione delle offerte, 
        dalla ricezione di una richiesta da parte del cliente fino alla preparazione dell'offerta finale. 
        Il sistema permette di:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Gestire in modo centralizzato tutte le richieste di offerta</li>
        <li>Automatizzare l'invio di richieste preventivo ai fornitori</li>
        <li>Tenere traccia dello stato di ogni offerta</li>
        <li>Organizzare le risposte dei fornitori</li>
        <li>Preparare offerte competitive per i clienti</li>
        <li>Monitorare le performance attraverso statistiche e report</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Accesso al sistema</h3>
      <p>
        Per accedere al sistema è necessario utilizzare le proprie credenziali personali (nome utente e password).
        Gli utenti possono avere ruoli diversi con permessi differenziati:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Amministratore</strong>: Accesso completo a tutte le funzionalità, incluse impostazioni di sistema e gestione utenti</li>
        <li><strong>Junior</strong>: Accesso alle funzionalità operative quotidiane, con limitazioni su alcune funzioni amministrative</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Struttura principale</h3>
      <p>
        L'applicazione è organizzata nelle seguenti sezioni principali:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Dashboard</strong>: Panoramica generale con statistiche e stato del sistema</li>
        <li><strong>Offerte</strong>: Gestione completa delle richieste di offerta e preventivi</li>
        <li><strong>Database</strong>: Gestione anagrafiche di fornitori, prodotti, clienti (solo per amministratori)</li>
        <li><strong>Impostazioni</strong>: Configurazione del sistema (solo per amministratori)</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Flusso di lavoro tipico</h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Ricezione richiesta di offerta dal cliente</li>
        <li>Inserimento della richiesta nel sistema</li>
        <li>Invio richieste preventivo ai fornitori</li>
        <li>Gestione dei solleciti e delle risposte dei fornitori</li>
        <li>Preparazione dell'offerta finale al cliente</li>
        <li>Gestione dello stato dell'offerta (conferma o scadenza)</li>
      </ol>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Interfaccia utente</h3>
      <p>
        L'interfaccia utente è progettata per essere intuitiva e funzionale:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Barra laterale</strong>: Accesso rapido alle sezioni principali dell'applicazione</li>
        <li><strong>Barra superiore</strong>: Notifiche, accesso al profilo utente e funzioni di logout</li>
        <li><strong>Area di lavoro</strong>: Visualizzazione e gestione dei dati relativi alla sezione selezionata</li>
      </ul>
    </div>
  );
};

export default IntroduzioneTab;
