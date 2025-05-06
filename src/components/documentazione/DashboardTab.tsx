
import React from 'react';

const DashboardTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#172a65]">Dashboard</h2>
      <p>
        La Dashboard rappresenta il punto di ingresso principale del gestionale, offrendo una panoramica 
        immediata sullo stato del sistema e delle attività in corso.
      </p>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Componenti principali</h3>
      
      <h4 className="text-lg font-medium mt-4">1. Indicatori principali</h4>
      <p>
        Nella parte superiore della dashboard sono presenti quattro indicatori chiave:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Offerte Totali</strong>: Numero complessivo di offerte presenti nel sistema</li>
        <li><strong>In Lavorazione</strong>: Numero di offerte attualmente in fase di elaborazione</li>
        <li><strong>Ordini Confermati</strong>: Numero di offerte che sono state accettate dai clienti</li>
        <li><strong>Fornitori in Attesa</strong>: Numero di richieste inviate ai fornitori che sono in attesa di risposta</li>
      </ul>
      
      <h4 className="text-lg font-medium mt-4">2. Offerte recenti</h4>
      <p>
        Questa sezione mostra un elenco delle ultime offerte inserite nel sistema, con le seguenti informazioni:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Nome del cliente</li>
        <li>Codice dell'offerta</li>
        <li>Stato attuale (indicato sia testualmente che con un codice colore)</li>
      </ul>
      <p>
        Questo elenco permette di avere un'immediata visibilità sulle attività più recenti e di 
        accedere rapidamente alle offerte che potrebbero richiedere attenzione.
      </p>
      
      <h4 className="text-lg font-medium mt-4">3. Stato del sistema</h4>
      <p>
        Questa sezione mostra lo stato operativo dei vari sistemi e servizi:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Servizio Email</strong>: Stato del sistema di comunicazione via email</li>
        <li><strong>Elaborazione Offerte</strong>: Stato del sistema di gestione delle offerte</li>
        <li><strong>Comunicazione Fornitori</strong>: Stato del sistema di comunicazione con i fornitori</li>
        <li><strong>Backup Database</strong>: Informazioni sull'ultimo backup eseguito</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Come utilizzare la Dashboard</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Monitoraggio quotidiano</strong>: Consultare la dashboard all'inizio della giornata 
          lavorativa per avere una visione d'insieme delle attività
        </li>
        <li>
          <strong>Controllo rapido</strong>: Verificare lo stato del sistema in caso di problemi o anomalie
        </li>
        <li>
          <strong>Accesso alle offerte recenti</strong>: Fare clic su una offerta nell'elenco per 
          accedere direttamente ai suoi dettagli
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#172a65] mt-6">Suggerimenti pratici</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Prestare particolare attenzione al numero di "Fornitori in Attesa" per evitare ritardi nelle offerte</li>
        <li>Se il numero di offerte "In Lavorazione" è elevato, potrebbe essere necessario assegnare più risorse</li>
        <li>Controllare regolarmente lo "Stato del Sistema" per assicurarsi che tutti i servizi siano operativi</li>
      </ul>
    </div>
  );
};

export default DashboardTab;
