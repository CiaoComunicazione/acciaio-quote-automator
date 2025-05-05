
import { useData } from '@/context/DataContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShoppingCart, TrendingUp, Users, Clock } from 'lucide-react';
import { mockOfferte } from '@/data/offerte-mock';

const Dashboard = () => {
  const totalOfferte = mockOfferte.length;
  const inProgressOfferte = mockOfferte.filter(q => q.stato === 'IN_LAVORAZIONE').length;
  const confirmedOfferte = mockOfferte.filter(q => q.stato === 'CONFERMATA').length;
  const pendingFornitori = mockOfferte.reduce((acc, offerta) => {
    const fornitorePending = offerta.fornitori.filter(f => 
      f.stato === 'INVIATO' || f.stato === 'BLOCCATO'
    ).length;
    return acc + fornitorePending;
  }, 0);
  
  const cards = [
    {
      title: 'Offerte Totali',
      value: totalOfferte,
      description: 'Tutte le richieste di offerta',
      icon: FileText,
      color: 'bg-[#172a65]',
    },
    {
      title: 'In Lavorazione',
      value: inProgressOfferte,
      description: 'Offerte in fase di elaborazione',
      icon: Clock,
      color: 'bg-amber-500',
    },
    {
      title: 'Ordini Confermati',
      value: confirmedOfferte,
      description: 'Offerte convertite con successo',
      icon: ShoppingCart,
      color: 'bg-green-500',
    },
    {
      title: 'Fornitori in Attesa',
      value: pendingFornitori,
      description: 'In attesa di risposta dai fornitori',
      icon: Users,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Panoramica del sistema di gestione offerte
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <div className={`${card.color} p-2 rounded-md`}>
                <card.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Offerte Recenti</CardTitle>
            <CardDescription>
              Le ultime richieste di offerta dai clienti
            </CardDescription>
          </CardHeader>
          <CardContent>
            {mockOfferte.length > 0 ? (
              <div className="space-y-4">
                {mockOfferte.slice(0, 5).map((offerta) => (
                  <div key={offerta.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">{offerta.cliente}</p>
                      <p className="text-sm text-muted-foreground">Codice: {offerta.codice}</p>
                    </div>
                    <div>
                      <div className="inline-flex items-center">
                        <span className="mr-2 text-sm">{offerta.stato === 'CONFERMATA' ? 'Confermata' : 
                        offerta.stato === 'IN_LAVORAZIONE' ? 'In lavorazione' :
                        offerta.stato === 'RICEVUTA' ? 'Ricevuta' :
                        offerta.stato === 'INVIATA' ? 'Inviata' :
                        offerta.stato === 'SCADUTA' ? 'Scaduta' : offerta.stato}</span>
                        <span className={`inline-block w-2 h-2 rounded-full ${
                          offerta.stato === 'CONFERMATA' ? 'bg-green-500' : 
                          offerta.stato === 'IN_LAVORAZIONE' ? 'bg-gray-500' :
                          offerta.stato === 'RICEVUTA' ? 'bg-[#172a65]' :
                          offerta.stato === 'INVIATA' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">Nessuna offerta disponibile</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Stato del Sistema</CardTitle>
            <CardDescription>
              Attuale performance del sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Servizio Email</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Operativo
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Elaborazione Offerte</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Operativo
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Comunicazione Fornitori</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Operativo
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Backup Database</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Ultimo backup: Oggi 03:00
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
