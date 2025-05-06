
import React from 'react';

const NotificheTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Sistema di Notifiche</h2>
      <p>
        Il gestionale dispone di un sistema di notifiche che tiene gli utenti informati sugli eventi importanti 
        e sulle azioni che richiedono attenzione.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Tipologie di notifiche</h3>
      <p>
        Il sistema genera notifiche per diversi tipi di eventi:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Notifiche relative alle offerte</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Ricezione di una nuova richiesta di offerta</li>
            <li>Scadenza imminente per la preparazione di un'offerta</li>
            <li>Conferma di un'offerta da parte di un cliente</li>
            <li>Scadenza di un'offerta non confermata</li>
          </ul>
        </li>
        <li>
          <strong>Notifiche relative ai fornitori</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Ricezione di una risposta da un fornitore</li>
            <li>Scadenza del termine per la risposta di un fornitore</li>
            <li>Sollecito automatico inviato a un fornitore</li>
          </ul>
        </li>
        <li>
          <strong>Notifiche di sistema</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Avvisi relativi a problemi tecnici</li>
            <li>Aggiornamenti del software</li>
            <li>Operazioni completate con successo (es. backup)</li>
          </ul>
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Visualizzazione delle notifiche</h3>
      <p>
        Le notifiche sono accessibili in due modi:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Icona nella barra superiore</strong>
          <p className="mt-1">
            Nella parte superiore destra dell'interfaccia è presente un'icona a forma di campana che:
          </p>
          <ul className="list-disc pl-6 mt-1">
            <li>Mostra un indicatore rosso quando ci sono notifiche non lette</li>
            <li>Al clic visualizza un elenco delle notifiche più recenti</li>
            <li>Permette di marcare le notifiche come lette o di eliminarle</li>
          </ul>
        </li>
        <li>
          <strong>Toast notifications</strong>
          <p className="mt-1">
            Per eventi importanti che richiedono attenzione immediata, il sistema mostra notifiche temporanee (toast) 
            che appaiono nell'angolo dello schermo e scompaiono dopo alcuni secondi.
          </p>
        </li>
      </ol>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Priorità delle notifiche</h3>
      <p>
        Le notifiche sono classificate in base alla loro priorità:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Alta priorità (rosso)</strong>: Richiedono attenzione immediata
          <ul className="list-disc pl-6 mt-1">
            <li>Scadenze imminenti</li>
            <li>Problemi di sistema</li>
            <li>Conferme di offerte</li>
          </ul>
        </li>
        <li>
          <strong>Media priorità (arancione)</strong>: Richiedono attenzione in tempi brevi
          <ul className="list-disc pl-6 mt-1">
            <li>Risposte dei fornitori</li>
            <li>Nuove richieste di offerta</li>
          </ul>
        </li>
        <li>
          <strong>Bassa priorità (blu)</strong>: Informative
          <ul className="list-disc pl-6 mt-1">
            <li>Operazioni completate con successo</li>
            <li>Aggiornamenti di sistema</li>
          </ul>
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Configurazione delle notifiche</h3>
      <p>
        Gli amministratori possono configurare il comportamento del sistema di notifiche tramite la sezione Impostazioni:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Attivare o disattivare specifici tipi di notifiche</li>
        <li>Configurare i tempi per i solleciti automatici ai fornitori</li>
        <li>Impostare il periodo di conservazione delle notifiche</li>
        <li>Configurare l'invio di notifiche via email per eventi critici</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Best practice per l'utilizzo delle notifiche</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Controllare regolarmente le notifiche non lette</li>
        <li>Gestire immediatamente le notifiche ad alta priorità</li>
        <li>Marcare come lette le notifiche dopo averle gestite</li>
        <li>Non ignorare le notifiche di sistema, anche se di bassa priorità</li>
      </ul>
    </div>
  );
};

export default NotificheTab;
