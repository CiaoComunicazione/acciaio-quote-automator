
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Database, Settings, BarChart3 } from "lucide-react";

const Documentazione = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Manuale Utente</h1>
        <p className="text-muted-foreground">
          Documentazione completa del sistema di gestione offerte
        </p>
      </div>

      <Tabs defaultValue="introduzione" className="space-y-4">
        <TabsList>
          <TabsTrigger value="introduzione">Introduzione</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="offerte">Offerte</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="impostazioni">Impostazioni</TabsTrigger>
        </TabsList>

        {/* Tab: Introduzione */}
        <TabsContent value="introduzione" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Benvenuto nel Sistema di Gestione Offerte</CardTitle>
              <CardDescription>
                Una panoramica completa delle funzionalità disponibili
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Cos'è il Sistema di Gestione Offerte</h3>
                <p className="mt-1">
                  Il Sistema di Gestione Offerte è una piattaforma sviluppata per semplificare e ottimizzare il processo di gestione delle richieste dei clienti, dall'acquisizione iniziale alla conferma finale dell'ordine. Il sistema consente di:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Tracciare lo stato di ogni richiesta di offerta</li>
                  <li>Gestire comunicazioni con fornitori e clienti</li>
                  <li>Monitorare le performance attraverso metriche e indicatori</li>
                  <li>Amministrare utenti, fornitori e database del sistema</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium">Struttura del sistema</h3>
                <p className="mt-1">
                  Il sistema è organizzato in quattro sezioni principali, accessibili dal menu laterale:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start">
                    <div className="bg-[#172a65] p-2 rounded-md mr-3">
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Panoramica generale con statistiche e indicatori di performance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-500 p-2 rounded-md mr-3">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Offerte</h4>
                      <p className="text-sm text-muted-foreground">Gestione completa delle richieste di offerta e preventivi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-md mr-3">
                      <Database className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Database</h4>
                      <p className="text-sm text-muted-foreground">Gestione di clienti, fornitori e prodotti</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 p-2 rounded-md mr-3">
                      <Settings className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Impostazioni</h4>
                      <p className="text-sm text-muted-foreground">Configurazione del sistema e gestione degli utenti</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Flusso di lavoro tipico</h3>
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>
                    <span className="font-medium">Ricezione richiesta cliente</span>: Una nuova richiesta viene registrata nel sistema con stato "Ricevuta"
                  </li>
                  <li>
                    <span className="font-medium">Elaborazione richiesta</span>: L'operatore analizza la richiesta, inserisce i dettagli necessari e cambia lo stato in "In Lavorazione"
                  </li>
                  <li>
                    <span className="font-medium">Richiesta preventivi ai fornitori</span>: Il sistema consente di inviare richieste a più fornitori contemporaneamente
                  </li>
                  <li>
                    <span className="font-medium">Ricezione e analisi preventivi</span>: Man mano che i fornitori rispondono, i loro preventivi vengono registrati nel sistema
                  </li>
                  <li>
                    <span className="font-medium">Creazione offerta cliente</span>: In base ai preventivi ricevuti, viene preparata l'offerta per il cliente
                  </li>
                  <li>
                    <span className="font-medium">Invio offerta</span>: L'offerta viene inviata al cliente e lo stato cambia in "Inviata"
                  </li>
                  <li>
                    <span className="font-medium">Conferma o scadenza</span>: L'offerta viene confermata dal cliente o scade dopo un periodo definito
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Dashboard */}
        <TabsContent value="dashboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>
                Panoramica generale con statistiche e indicatori di performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Panoramica</h3>
                <p className="mt-1">
                  La Dashboard fornisce una visione immediata dello stato del sistema attraverso indicatori chiave di performance (KPI) e liste delle attività recenti.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Indicatori chiave</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Nel riquadro superiore della dashboard sono visualizzati quattro indicatori principali:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                        <li><span className="font-medium">Offerte Totali</span>: Numero complessivo di richieste nel sistema</li>
                        <li><span className="font-medium">In Lavorazione</span>: Offerte attualmente in fase di elaborazione</li>
                        <li><span className="font-medium">Ordini Confermati</span>: Offerte accettate dai clienti</li>
                        <li><span className="font-medium">Fornitori in Attesa</span>: Numero di richieste inviate ai fornitori in attesa di risposta</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Offerte Recenti</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Nella sezione centrale viene mostrato un elenco delle ultime offerte inserite nel sistema, con:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                        <li>Nome del cliente</li>
                        <li>Codice offerta</li>
                        <li>Stato attuale (indicato con colori differenti)</li>
                      </ul>
                      <p className="text-sm mt-2">
                        Questa visualizzazione permette di monitorare rapidamente le attività più recenti.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Stato del Sistema</h3>
                <p className="mt-1">
                  La sezione "Stato del Sistema" mostra lo stato operativo dei vari componenti della piattaforma, consentendo di identificare rapidamente eventuali problematiche:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Servizio Email (per l'invio di comunicazioni)</li>
                  <li>Elaborazione Offerte (funzionalità core del sistema)</li>
                  <li>Comunicazione Fornitori (integrazione con sistemi esterni)</li>
                  <li>Backup Database (con data e ora dell'ultimo backup effettuato)</li>
                </ul>
                <p className="text-sm mt-2">
                  Ogni servizio è accompagnato da un indicatore colorato che ne segnala lo stato (verde per operativo, rosso per malfunzionamento).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Utilizzo della Dashboard</h3>
                <p className="mt-1">
                  La Dashboard è progettata per essere consultata quotidianamente, fornendo un punto di partenza per le attività giornaliere:
                </p>
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Verifica degli indicatori principali per monitorare il volume di lavoro</li>
                  <li>Controllo delle offerte recenti per dare priorità alle attività urgenti</li>
                  <li>Controllo dello stato del sistema per assicurarsi che tutti i servizi siano operativi</li>
                </ol>
                <p className="text-sm mt-2">
                  Si consiglia di consultare la Dashboard all'inizio della giornata lavorativa e periodicamente durante il giorno per monitorare l'evoluzione delle attività.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Offerte */}
        <TabsContent value="offerte" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestione Offerte</CardTitle>
              <CardDescription>
                Funzionalità complete per la gestione delle richieste e dei preventivi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Visualizzazione e Filtri</h3>
                <p className="mt-1">
                  La pagina Offerte presenta una lista completa delle richieste nel sistema, con funzionalità di filtro avanzate:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <h4 className="font-medium text-sm">Filtri disponibili:</h4>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                      <li><span className="font-medium">Stato</span>: Filtra per stato dell'offerta (Ricevuta, In lavorazione, Inviata, Confermata, Scaduta)</li>
                      <li><span className="font-medium">Prodotto</span>: Filtra per tipologia di prodotto richiesto</li>
                      <li><span className="font-medium">Cliente/Codice</span>: Ricerca per nome cliente o codice offerta</li>
                      <li><span className="font-medium">Data</span>: Filtro per intervallo di date di ricezione</li>
                      <li><span className="font-medium">Fornitore</span>: Filtra offerte che coinvolgono specifici fornitori</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Nella lista offerte vengono visualizzati:</h4>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                      <li>Stato dell'offerta (con codice colore)</li>
                      <li>Cliente e codice identificativo</li>
                      <li>Data di ricezione</li>
                      <li>Prodotti principali richiesti</li>
                      <li>Elenco fornitori coinvolti</li>
                      <li>Pulsante per visualizzare i dettagli</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Dettaglio Offerta</h3>
                <p className="mt-1">
                  La schermata di dettaglio offerta è organizzata in sezioni navigabili tramite un'interfaccia a fisarmonica (accordion):
                </p>
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>
                    <span className="font-medium">Dati</span>
                    <p className="text-sm mt-1">
                      Informazioni generali sull'offerta: cliente, codice, stato, date di ricezione ed elaborazione.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Richiesta originale</span>
                    <p className="text-sm mt-1">
                      Testo della richiesta ricevuta dal cliente e categorie di prodotti identificate.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Richiesta immessa</span>
                    <p className="text-sm mt-1">
                      Dettaglio dei prodotti inseriti nel sistema, con specifiche su quantità e unità di misura.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Richieste preventivo ai fornitori</span>
                    <p className="text-sm mt-1">
                      Elenco dei fornitori contattati, con stato della richiesta (inviato, risposto, bloccato, scaduto).
                      Da qui è possibile:
                    </p>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                      <li>Visualizzare i preventivi ricevuti</li>
                      <li>Fermare o riattivare i solleciti automatici</li>
                      <li>Aggiornare i dati del fornitore</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium">Offerta al cliente</span>
                    <p className="text-sm mt-1">
                      Dettaglio dell'offerta preparata per il cliente, comprensiva di:
                    </p>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                      <li>Elenco prodotti con prezzi unitari e totali</li>
                      <li>Riepilogo costi (prodotti, spedizione, totale)</li>
                      <li>Informazioni di consegna e tempistiche</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-medium">Gestione dei Fornitori</h3>
                <p className="mt-1">
                  Dal dettaglio dell'offerta è possibile gestire le comunicazioni con i fornitori:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    <span className="font-medium">Visualizzazione preventivi</span>
                    <p className="text-sm mt-1">
                      Per i fornitori che hanno risposto, è possibile visualizzare il dettaglio del preventivo con prodotti, prezzi, costi di spedizione e tempi di consegna.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Gestione solleciti</span>
                    <p className="text-sm mt-1">
                      È possibile interrompere i solleciti automatici per i fornitori che non hanno ancora risposto, con l'opzione di bloccare anche eventuali nuove richieste per la stessa offerta.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Aggiornamento dati fornitore</span>
                    <p className="text-sm mt-1">
                      Link diretto alla sezione Database per aggiornare le informazioni di contatto del fornitore.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium">Stati dell'offerta</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#172a65] mr-2"></span>
                    <span className="font-medium">Ricevuta</span>: 
                    <span className="ml-2 text-sm">La richiesta è stata registrata nel sistema ma non è ancora stata elaborata</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
                    <span className="font-medium">In Lavorazione</span>: 
                    <span className="ml-2 text-sm">L'offerta è in fase di elaborazione, in attesa di preventivi dai fornitori</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                    <span className="font-medium">Inviata</span>: 
                    <span className="ml-2 text-sm">L'offerta è stata inviata al cliente, in attesa di risposta</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    <span className="font-medium">Confermata</span>: 
                    <span className="ml-2 text-sm">Il cliente ha accettato l'offerta, l'ordine è confermato</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                    <span className="font-medium">Scaduta</span>: 
                    <span className="ml-2 text-sm">L'offerta ha superato il periodo di validità senza conferma dal cliente</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Database */}
        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database</CardTitle>
              <CardDescription>
                Gestione di clienti, fornitori e prodotti nel sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Gestione Clienti</h3>
                <p className="mt-1">
                  La sezione clienti permette di gestire l'anagrafica completa dei clienti aziendali:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Visualizzazione elenco clienti con funzionalità di ricerca e filtri</li>
                  <li>Schede dettaglio cliente con informazioni anagrafiche e di contatto</li>
                  <li>Cronologia delle offerte per ogni cliente</li>
                  <li>Gestione delle note e dei documenti associati</li>
                </ul>
                <p className="text-sm mt-2">
                  Per ogni cliente è possibile registrare informazioni come:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ragione sociale</li>
                    <li>Partita IVA / Codice fiscale</li>
                    <li>Indirizzo completo</li>
                    <li>Contatti principali</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Settore di attività</li>
                    <li>Classificazione cliente</li>
                    <li>Condizioni commerciali standard</li>
                    <li>Note particolari</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Gestione Fornitori</h3>
                <p className="mt-1">
                  La sezione fornitori consente di gestire il database dei fornitori dell'azienda:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Elenco fornitori con filtri per categoria, area geografica, stato attività</li>
                  <li>Schede dettaglio fornitore con informazioni complete</li>
                  <li>Monitoraggio delle performance (tempi di risposta, affidabilità, qualità)</li>
                  <li>Gestione dei contatti e dei canali di comunicazione preferiti</li>
                </ul>
                <p className="text-sm mt-2">
                  Per ogni fornitore vengono registrate informazioni dettagliate come:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ragione sociale e dati fiscali</li>
                    <li>Categorie di prodotti trattati</li>
                    <li>Tempi medi di consegna</li>
                    <li>Modalità di pagamento accettate</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Referenti commerciali</li>
                    <li>Valutazione storica delle forniture</li>
                    <li>Eventuali accordi quadro</li>
                    <li>Note logistiche e operative</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Catalogo Prodotti</h3>
                <p className="mt-1">
                  Il catalogo prodotti raccoglie informazioni su tutti i prodotti trattati dall'azienda:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Categorizzazione gerarchica dei prodotti</li>
                  <li>Schede tecniche con specifiche dettagliate</li>
                  <li>Associazione ai fornitori preferenziali</li>
                  <li>Storico prezzi e disponibilità</li>
                </ul>
                <p className="text-sm mt-2">
                  Le informazioni gestite per ogni prodotto includono:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Codice interno e descrizione</li>
                    <li>Specifiche tecniche</li>
                    <li>Unità di misura</li>
                    <li>Categoria merceologica</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Fornitori qualificati</li>
                    <li>Prezzi di riferimento</li>
                    <li>Tempi di approvvigionamento tipici</li>
                    <li>Documenti tecnici associati</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Funzionalità principali del Database</h3>
                <div className="mt-2 space-y-4">
                  <div>
                    <h4 className="font-medium">Ricerca avanzata</h4>
                    <p className="text-sm mt-1">
                      Tutte le sezioni del database dispongono di funzionalità di ricerca avanzata, permettendo di filtrare i dati in base a molteplici parametri combinati tra loro.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Importazione/Esportazione</h4>
                    <p className="text-sm mt-1">
                      È possibile importare ed esportare dati in formato CSV o Excel, facilitando l'integrazione con altri sistemi aziendali.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Reportistica</h4>
                    <p className="text-sm mt-1">
                      Il sistema permette di generare report personalizzati su clienti, fornitori o prodotti, con possibilità di includere grafici e tabelle riassuntive.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Storicizzazione</h4>
                    <p className="text-sm mt-1">
                      Tutte le modifiche ai dati vengono storicizzate, consentendo di tracciare l'evoluzione delle informazioni nel tempo.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Impostazioni */}
        <TabsContent value="impostazioni" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Impostazioni</CardTitle>
              <CardDescription>
                Configurazione del sistema e gestione degli utenti
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Gestione Utenti</h3>
                <p className="mt-1">
                  La sezione di gestione utenti permette agli amministratori di creare e gestire gli account di accesso al sistema:
                </p>
                <div className="mt-3">
                  <h4 className="font-medium">Creazione di nuovi utenti</h4>
                  <p className="text-sm mt-1">
                    Gli amministratori possono creare nuovi utenti tramite due modalità:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Tramite la sezione Impostazioni {">"} Nuovo Utente</strong>
                      <p className="mt-1">
                        Questa è la modalità consigliata per creare rapidamente un nuovo utente, specificando:
                      </p>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                        <li>Nome e cognome</li>
                        <li>Email di accesso</li>
                        <li>Ruolo (Amministratore o Utente standard)</li>
                        <li>Password temporanea (che l'utente dovrà cambiare al primo accesso)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Tramite la sezione Database {">"} Utenti</strong>
                      <p className="mt-1">
                        Questa modalità permette una gestione più completa degli utenti esistenti, con funzionalità per:
                      </p>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                        <li>Modificare i dati degli utenti</li>
                        <li>Disabilitare temporaneamente account</li>
                        <li>Reimpostare password</li>
                        <li>Visualizzare log di accesso e attività</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Ruoli e permessi</h4>
                  <p className="text-sm mt-1">
                    Il sistema prevede due ruoli principali con diversi livelli di accesso:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <Card className="border border-gray-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Amministratore</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Permessi completi, inclusi:</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-xs">
                          <li>Gestione utenti e permessi</li>
                          <li>Accesso alle configurazioni di sistema</li>
                          <li>Gestione database completa</li>
                          <li>Modifica di tutti i parametri di sistema</li>
                          <li>Visualizzazione log e statistiche</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border border-gray-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Utente standard</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Permessi operativi:</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-xs">
                          <li>Gestione offerte</li>
                          <li>Consultazione database</li>
                          <li>Creazione report standard</li>
                          <li>Modifica dati propri</li>
                          <li>Visualizzazione dashboard</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Configurazione del Sistema</h3>
                <p className="mt-1">
                  La sezione di configurazione permette di personalizzare vari aspetti del funzionamento del sistema:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-medium">Parametri generali</h4>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                      <li>Logo aziendale e personalizzazione interfaccia</li>
                      <li>Formato codici offerta</li>
                      <li>Valuta e formato numeri</li>
                      <li>Fuso orario e formato date</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Notifiche</h4>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                      <li>Configurazione email per notifiche</li>
                      <li>Impostazione soglie di alert</li>
                      <li>Pianificazione report automatici</li>
                      <li>Gestione solleciti automatici</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Workflow e stati</h4>
                  <p className="text-sm mt-1">
                    È possibile configurare aspetti specifici del workflow delle offerte:
                  </p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                    <li>Durata validità offerte (giorni)</li>
                    <li>Tempi di attesa prima dei solleciti automatici</li>
                    <li>Regole di calcolo margini</li>
                    <li>Criteri di assegnazione priorità</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">Backup e manutenzione</h4>
                  <p className="text-sm mt-1">
                    La sezione di manutenzione permette di gestire:
                  </p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                    <li>Pianificazione backup automatici</li>
                    <li>Pulizia dati obsoleti</li>
                    <li>Ottimizzazione database</li>
                    <li>Verifica integrità dati</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Log di sistema</h3>
                <p className="mt-1">
                  Gli amministratori possono accedere ai log di sistema per monitorare l'attività:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Log di accesso (login/logout degli utenti)</li>
                  <li>Log di modifica (tracciamento delle modifiche ai dati)</li>
                  <li>Log di sistema (errori e avvisi tecnici)</li>
                  <li>Log di comunicazione (email inviate, notifiche generate)</li>
                </ul>
                <p className="text-sm mt-2">
                  I log possono essere filtrati per periodo, tipo di evento, utente e altri parametri, facilitando l'analisi e la risoluzione di eventuali problematiche.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Documentazione;
