
import React from 'react';

const ImpostazioniTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Impostazioni</h2>
      <p>
        La sezione Impostazioni è accessibile solo agli utenti con ruolo Amministratore e consente di configurare 
        vari aspetti del funzionamento del sistema.
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
        Le Impostazioni sono organizzate in diverse schede, accessibili tramite i tab nella parte superiore della schermata:
      </p>
      
      <h4 className="text-lg font-medium mt-4">1. Generale</h4>
      <p>
        Questa scheda permette di configurare le impostazioni generali del sistema:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Indirizzo Email Mittente</strong>: L'indirizzo email utilizzato dal sistema per inviare comunicazioni.
          Questo indirizzo apparirà come mittente in tutte le email inviate dal sistema.
        </li>
        <li>
          <strong>Percentuale di Ricarico</strong>: La percentuale standard da applicare ai costi dei fornitori 
          per determinare i prezzi nelle offerte ai clienti. Questo valore può essere modificato in base alle 
          politiche commerciali dell'azienda.
        </li>
        <li>
          <strong>Invio Automatico Offerte</strong>: Attiva o disattiva l'invio automatico delle offerte ai clienti 
          una volta che sono state preparate. Se disattivato, le offerte dovranno essere inviate manualmente.
        </li>
      </ul>
      <p>
        Le modifiche alle impostazioni generali richiedono una conferma tramite popup.
      </p>
      
      <h4 className="text-lg font-medium mt-4">2. Spedizioni</h4>
      <p>
        Questa scheda permette di configurare le politiche di spedizione:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Abilita Spedizione Gratuita</strong>: Attiva o disattiva la possibilità di offrire spedizioni gratuite
          ai clienti al superamento di una soglia di pallet.
        </li>
        <li>
          <strong>Soglia Spedizione Gratuita (Pallet)</strong>: Il numero minimo di pallet al di sopra del quale 
          la spedizione viene offerta gratuitamente. Questa opzione è visibile solo se la spedizione gratuita è abilitata.
        </li>
        <li>
          <strong>Fasce Costo Spedizione</strong>: Configurazione dei costi di spedizione in base al numero di pallet.
          Per ogni fascia è possibile specificare:
          <ul className="list-disc pl-6 mt-1">
            <li><strong>Pallet Min</strong>: Numero minimo di pallet per la fascia</li>
            <li><strong>Pallet Max</strong>: Numero massimo di pallet per la fascia</li>
            <li><strong>Costo (€)</strong>: Costo di spedizione per la fascia indicata</li>
          </ul>
        </li>
      </ul>
      <p>
        È possibile aggiungere nuove fasce con il pulsante "Aggiungi Fascia" o rimuovere fasce esistenti 
        con il pulsante a forma di cestino accanto a ciascuna fascia.
      </p>
      
      <h4 className="text-lg font-medium mt-4">3. Festività</h4>
      <p>
        Questa scheda permette di configurare le festività personalizzate durante le quali l'azienda è chiusa:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Seleziona Date</strong>: Un calendario dove è possibile selezionare le date di chiusura.
          È possibile selezionare più date contemporaneamente.
        </li>
        <li>
          <strong>Festività Selezionate</strong>: Un riepilogo delle date selezionate, visualizzate in formato YYYY-MM-DD.
        </li>
      </ul>
      <p>
        Queste date vengono utilizzate dal sistema per calcolare correttamente i tempi di consegna e per 
        evitare di inviare richieste o solleciti durante i periodi di chiusura.
      </p>
      
      <h4 className="text-lg font-medium mt-4">4. Nuovo Utente</h4>
      <p>
        Questa scheda permette di creare nuovi utenti per il sistema:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Nome</strong>: Nome dell'utente</li>
        <li><strong>Cognome</strong>: Cognome dell'utente</li>
        <li><strong>Nome Utente</strong>: Username per l'accesso al sistema</li>
        <li><strong>Password</strong>: Password iniziale per l'accesso</li>
        <li>
          <strong>Ruolo</strong>: Ruolo dell'utente nel sistema
          <ul className="list-disc pl-6 mt-1">
            <li><strong>Junior</strong>: Accesso limitato alle funzioni operative</li>
            <li><strong>Amministratore</strong>: Accesso completo a tutte le funzionalità</li>
          </ul>
        </li>
      </ul>
      <p>
        La creazione di un nuovo utente richiede una conferma tramite popup.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Suggerimenti pratici</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Rivedere periodicamente la percentuale di ricarico per adeguarla alle condizioni di mercato</li>
        <li>Aggiornare le fasce di costo spedizione in base agli accordi con i trasportatori</li>
        <li>Mantenere aggiornato il calendario delle festività all'inizio di ogni anno</li>
        <li>Assegnare il ruolo di Amministratore solo agli utenti che effettivamente necessitano di accesso completo al sistema</li>
        <li>Consigliare agli utenti di cambiare la password al primo accesso per motivi di sicurezza</li>
      </ul>
    </div>
  );
};

export default ImpostazioniTab;
