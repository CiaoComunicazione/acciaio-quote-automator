
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, BookOpen, BarChart3, Database, Settings, FileSearch, User, Bell } from 'lucide-react';

const Documentazione = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documentazione</h1>
        <p className="text-muted-foreground">
          Guida completa all'utilizzo del gestionale Acciaio
        </p>
      </div>

      <Tabs defaultValue="introduzione" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2 h-auto">
          <TabsTrigger value="introduzione" className="flex items-center gap-2 h-auto py-2">
            <BookOpen className="h-4 w-4" />
            <span>Introduzione</span>
          </TabsTrigger>
          <TabsTrigger value="dashboard" className="flex items-center gap-2 h-auto py-2">
            <BarChart3 className="h-4 w-4" />
            <span>Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="offerte" className="flex items-center gap-2 h-auto py-2">
            <FileText className="h-4 w-4" />
            <span>Offerte</span>
          </TabsTrigger>
          <TabsTrigger value="database" className="flex items-center gap-2 h-auto py-2">
            <Database className="h-4 w-4" />
            <span>Database</span>
          </TabsTrigger>
          <TabsTrigger value="impostazioni" className="flex items-center gap-2 h-auto py-2">
            <Settings className="h-4 w-4" />
            <span>Impostazioni</span>
          </TabsTrigger>
          <TabsTrigger value="ricerca" className="flex items-center gap-2 h-auto py-2">
            <FileSearch className="h-4 w-4" />
            <span>Ricerca</span>
          </TabsTrigger>
          <TabsTrigger value="utenti" className="flex items-center gap-2 h-auto py-2">
            <User className="h-4 w-4" />
            <span>Utenti</span>
          </TabsTrigger>
          <TabsTrigger value="notifiche" className="flex items-center gap-2 h-auto py-2">
            <Bell className="h-4 w-4" />
            <span>Notifiche</span>
          </TabsTrigger>
        </TabsList>
      
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Documentazione Gestionale Acciaio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-300px)] px-1">
              <TabsContent value="introduzione" className="space-y-6 mt-0">
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
              </TabsContent>
              
              <TabsContent value="dashboard" className="space-y-6 mt-0">
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
              </TabsContent>
              
              <TabsContent value="offerte" className="space-y-6 mt-0">
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
              </TabsContent>
              
              <TabsContent value="database" className="space-y-6 mt-0">
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
              </TabsContent>
              
              <TabsContent value="impostazioni" className="space-y-6 mt-0">
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
              </TabsContent>
              
              <TabsContent value="ricerca" className="space-y-6 mt-0">
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
              </TabsContent>
              
              <TabsContent value="utenti" className="space-y-6 mt-0">
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
                      <strong>Tramite la sezione Impostazioni > Nuovo Utente</strong>
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
                      <strong>Tramite la sezione Database > Utenti</strong>
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
              </TabsContent>
              
              <TabsContent value="notifiche" className="space-y-6 mt-0">
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
              </TabsContent>
            </ScrollArea>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Documentazione;
