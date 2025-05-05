
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Database, Users, Package, UserCircle, ClipboardList, Trash } from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DatabasePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("suppliers");

  // Redirect if not admin
  React.useEffect(() => {
    if (user?.role !== 'ADMINISTRATOR') {
      navigate('/unauthorized');
    }
  }, [user, navigate]);

  // Mock data for demonstration
  const suppliers = [
    { id: '1', code: 'SUPP001', companyName: 'Acciaio Italia S.p.A.', email: 'ordini@acciaioitalia.com' },
    { id: '2', code: 'SUPP002', companyName: 'MetalTrade GmbH', email: 'sales@metaltrade.de' },
    { id: '3', code: 'SUPP003', companyName: 'SteelCorp Inc.', email: 'orders@steelcorp.com' },
  ];

  const products = [
    { id: '1', code: 'PROD001', name: 'Lamiera Inox AISI 304', details: '2000x1000x2mm' },
    { id: '2', code: 'PROD002', name: 'Tubo Inox AISI 316L', details: 'Ø50x2mm, L=6m' },
    { id: '3', code: 'PROD003', name: 'Barra Tonda Inox AISI 430', details: 'Ø30mm, L=3m' },
  ];

  const customers = [
    { id: '1', code: 'CUST001', name: 'Costruzioni Meccaniche S.r.l.', email: 'acquisti@cmeccaniche.it', address: 'Via Roma 123, Milano' },
    { id: '2', code: 'CUST002', name: 'Cantieri Navali SpA', email: 'ordini@cantierinavali.com', address: 'Via del Mare 45, La Spezia' },
    { id: '3', code: 'CUST003', name: 'Tecnologie Industriali', email: 'info@tecnologieindustriali.it', address: 'Corso Italia 78, Torino' },
  ];

  const users = [
    { id: '1', username: 'mario.rossi', name: 'Mario', surname: 'Rossi', role: 'ADMINISTRATOR' },
    { id: '2', username: 'luigi.bianchi', name: 'Luigi', surname: 'Bianchi', role: 'JUNIOR' },
    { id: '3', username: 'giulia.verdi', name: 'Giulia', surname: 'Verdi', role: 'JUNIOR' },
  ];

  const logs = [
    { id: '1', timestamp: '2025-05-04 09:15:23', username: 'mario.rossi', action: 'Login', details: 'Accesso riuscito' },
    { id: '2', timestamp: '2025-05-04 09:30:45', username: 'mario.rossi', action: 'Preventivo Creato', details: 'Creato preventivo #040525-01' },
    { id: '3', timestamp: '2025-05-04 10:05:12', username: 'luigi.bianchi', action: 'Preventivo Inviato', details: 'Inviato a Acciaio Italia S.p.A.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gestione Database</h1>
        <p className="text-muted-foreground">
          Visualizza e modifica fornitori, prodotti, clienti, utenti e log di sistema.
        </p>
      </div>

      <Tabs defaultValue="suppliers" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 gap-2 w-full sm:w-auto">
          <TabsTrigger value="suppliers" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">Fornitori</span>
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span className="hidden sm:inline">Prodotti</span>
          </TabsTrigger>
          <TabsTrigger value="customers" className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Clienti</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Utenti</span>
          </TabsTrigger>
          <TabsTrigger value="logs" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            <span className="hidden sm:inline">Log</span>
          </TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                {activeTab === "suppliers" && "Gestione Fornitori"}
                {activeTab === "products" && "Gestione Prodotti"}
                {activeTab === "customers" && "Gestione Clienti"}
                {activeTab === "users" && "Gestione Utenti"}
                {activeTab === "logs" && "Log di Sistema"}
              </CardTitle>
              <div className="flex items-center gap-2">
                {activeTab !== "logs" && (
                  <Button size="sm">
                    {activeTab === "suppliers" && "Aggiungi Fornitore"}
                    {activeTab === "products" && "Aggiungi Prodotto"}
                    {activeTab === "customers" && "Aggiungi Cliente"}
                    {activeTab === "users" && "Aggiungi Utente"}
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Esporta CSV
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input placeholder={`Cerca ${
                activeTab === "suppliers" ? "fornitori" : 
                activeTab === "products" ? "prodotti" :
                activeTab === "customers" ? "clienti" :
                activeTab === "users" ? "utenti" : "log"
              }...`} className="max-w-sm" />
            </div>

            <TabsContent value="suppliers" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Codice</TableHead>
                    <TableHead>Azienda</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suppliers.map(supplier => (
                    <TableRow key={supplier.id}>
                      <TableCell>{supplier.code}</TableCell>
                      <TableCell>{supplier.companyName}</TableCell>
                      <TableCell>{supplier.email}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">Modifica</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Modifiche</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler confermare le modifiche a questo fornitore?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Eliminazione</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler eliminare questo fornitore? Questa azione non può essere annullata.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì, Elimina</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="products" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Codice</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Dettagli</TableHead>
                    <TableHead>Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map(product => (
                    <TableRow key={product.id}>
                      <TableCell>{product.code}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.details}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">Modifica</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Modifiche</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler confermare le modifiche a questo prodotto?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Eliminazione</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler eliminare questo prodotto? Questa azione non può essere annullata.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì, Elimina</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="customers" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Codice</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Indirizzo</TableHead>
                    <TableHead>Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map(customer => (
                    <TableRow key={customer.id}>
                      <TableCell>{customer.code}</TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.address}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">Modifica</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Modifiche</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler confermare le modifiche a questo cliente?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Eliminazione</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler eliminare questo cliente? Questa azione non può essere annullata.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì, Elimina</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="users" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Cognome</TableHead>
                    <TableHead>Ruolo</TableHead>
                    <TableHead>Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.surname}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.role === 'ADMINISTRATOR' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role === 'ADMINISTRATOR' ? 'Amministratore' : 'Junior'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">Modifica</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Modifiche</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler confermare le modifiche a questo utente?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Conferma Eliminazione</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Sei sicuro di voler eliminare questo utente? Questa azione non può essere annullata.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction>Sì, Elimina</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="logs" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data e Ora</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Azione</TableHead>
                    <TableHead>Dettagli</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map(log => (
                    <TableRow key={log.id}>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell>{log.username}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default DatabasePage;
