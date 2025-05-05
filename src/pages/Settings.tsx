
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
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
import { Trash, Plus, Settings as SettingsIcon, Mail, Truck, Calendar as CalendarIcon, UserPlus } from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  
  // Settings form state
  const [emailSender, setEmailSender] = useState('quotes@acciaio.com');
  const [markup, setMarkup] = useState('15');
  const [automaticQuotes, setAutomaticQuotes] = useState(true);
  const [freeShippingEnabled, setFreeShippingEnabled] = useState(true);
  const [freeShippingThreshold, setFreeShippingThreshold] = useState('10');
  
  // Shipping ranges state
  const [shippingRanges, setShippingRanges] = useState([
    { id: '1', minPallets: 1, maxPallets: 2, cost: 150 },
    { id: '2', minPallets: 3, maxPallets: 5, cost: 250 },
    { id: '3', minPallets: 6, maxPallets: 10, cost: 400 },
  ]);

  // New user form state
  const [newUser, setNewUser] = useState({
    name: '',
    surname: '',
    username: '',
    password: '',
    role: 'JUNIOR',
  });

  // Redirect if not admin
  React.useEffect(() => {
    if (user?.role !== 'ADMINISTRATOR') {
      navigate('/unauthorized');
    }
  }, [user, navigate]);

  // Handle adding a new shipping range
  const addShippingRange = () => {
    const lastRange = shippingRanges[shippingRanges.length - 1];
    const newRange = {
      id: (parseInt(lastRange.id) + 1).toString(),
      minPallets: lastRange.maxPallets + 1,
      maxPallets: lastRange.maxPallets + 3,
      cost: lastRange.cost + 100
    };
    setShippingRanges([...shippingRanges, newRange]);
  };

  // Handle removing a shipping range
  const removeShippingRange = (id: string) => {
    setShippingRanges(shippingRanges.filter(range => range.id !== id));
  };

  // Format date to string (YYYY-MM-DD)
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Get the list of selected holidays
  const getSelectedHolidays = (): string => {
    return selectedDates.map(date => formatDate(date)).join(', ');
  };

  const updateNewUser = (field: string, value: string) => {
    setNewUser({ ...newUser, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Impostazioni di Sistema</h1>
        <p className="text-muted-foreground">
          Gestisci le impostazioni generali, i costi di spedizione, le festività e crea nuovi utenti.
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 sm:w-auto">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Generale</span>
          </TabsTrigger>
          <TabsTrigger value="shipping" className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            <span className="hidden sm:inline">Spedizioni</span>
          </TabsTrigger>
          <TabsTrigger value="holidays" className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Festività</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Nuovo Utente</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Impostazioni Generali</CardTitle>
              <CardDescription>
                Configura le impostazioni generali del sistema come indirizzo email, percentuale di ricarico e automazione delle offerte.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-sender">Indirizzo Email Mittente</Label>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email-sender"
                    value={emailSender}
                    onChange={(e) => setEmailSender(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="markup">Percentuale di Ricarico</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="markup"
                    value={markup}
                    onChange={(e) => setMarkup(e.target.value)}
                    type="number"
                    min="0"
                    className="w-32"
                  />
                  <span className="text-muted-foreground">%</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch 
                  id="automatic-quotes"
                  checked={automaticQuotes}
                  onCheckedChange={setAutomaticQuotes}
                />
                <Label htmlFor="automatic-quotes">Invio Automatico Offerte</Label>
              </div>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Salva Modifiche</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Conferma Modifiche</AlertDialogTitle>
                    <AlertDialogDescription>
                      Sei sicuro di voler confermare le modifiche alle impostazioni generali?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No</AlertDialogCancel>
                    <AlertDialogAction>Si</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Impostazioni Spedizione</CardTitle>
              <CardDescription>
                Configura i costi di spedizione in base alle fasce di pallet e soglia per la spedizione gratuita.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Switch 
                  id="free-shipping"
                  checked={freeShippingEnabled}
                  onCheckedChange={setFreeShippingEnabled}
                />
                <Label htmlFor="free-shipping">Abilita Spedizione Gratuita</Label>
              </div>

              {freeShippingEnabled && (
                <div className="space-y-2 mb-4">
                  <Label htmlFor="free-shipping-threshold">Soglia Spedizione Gratuita (Pallet)</Label>
                  <Input
                    id="free-shipping-threshold"
                    value={freeShippingThreshold}
                    onChange={(e) => setFreeShippingThreshold(e.target.value)}
                    type="number"
                    min="1"
                    className="w-32"
                  />
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">Fasce Costo Spedizione</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={addShippingRange}
                  >
                    <Plus className="h-4 w-4" /> Aggiungi Fascia
                  </Button>
                </div>

                <div className="space-y-3">
                  {shippingRanges.map((range) => (
                    <div key={range.id} className="flex items-center gap-2 p-3 border rounded-md">
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div>
                          <Label htmlFor={`min-pallets-${range.id}`}>Pallet Min</Label>
                          <Input
                            id={`min-pallets-${range.id}`}
                            value={range.minPallets}
                            onChange={(e) => {
                              const newRanges = shippingRanges.map(r => 
                                r.id === range.id ? {...r, minPallets: parseInt(e.target.value)} : r
                              );
                              setShippingRanges(newRanges);
                            }}
                            type="number"
                            min="1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`max-pallets-${range.id}`}>Pallet Max</Label>
                          <Input
                            id={`max-pallets-${range.id}`}
                            value={range.maxPallets}
                            onChange={(e) => {
                              const newRanges = shippingRanges.map(r => 
                                r.id === range.id ? {...r, maxPallets: parseInt(e.target.value)} : r
                              );
                              setShippingRanges(newRanges);
                            }}
                            type="number"
                            min={range.minPallets}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`cost-${range.id}`}>Costo (€)</Label>
                          <Input
                            id={`cost-${range.id}`}
                            value={range.cost}
                            onChange={(e) => {
                              const newRanges = shippingRanges.map(r => 
                                r.id === range.id ? {...r, cost: parseInt(e.target.value)} : r
                              );
                              setShippingRanges(newRanges);
                            }}
                            type="number"
                            min="0"
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeShippingRange(range.id)}
                        disabled={shippingRanges.length <= 1}
                        className="mt-6"
                      >
                        <Trash className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Salva Modifiche</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Conferma Modifiche</AlertDialogTitle>
                    <AlertDialogDescription>
                      Sei sicuro di voler confermare le modifiche alle impostazioni di spedizione?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No</AlertDialogCancel>
                    <AlertDialogAction>Si</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="holidays">
          <Card>
            <CardHeader>
              <CardTitle>Festività Personalizzate</CardTitle>
              <CardDescription>
                Imposta le festività personalizzate quando l'azienda è chiusa e non verranno elaborate le offerte.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Seleziona Date</h3>
                  <Calendar
                    mode="multiple"
                    selected={selectedDates}
                    onSelect={(dates) => setSelectedDates(dates || [])}
                    className="rounded-md border"
                  />
                </div>

                <div>
                  <h3 className="font-medium mb-2">Festività Selezionate</h3>
                  <Textarea 
                    readOnly 
                    value={getSelectedHolidays()} 
                    placeholder="Nessuna festività personalizzata selezionata"
                    className="min-h-[200px]"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Salva Modifiche</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Conferma Modifiche</AlertDialogTitle>
                    <AlertDialogDescription>
                      Sei sicuro di voler confermare le modifiche alle impostazioni delle festività?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No</AlertDialogCancel>
                    <AlertDialogAction>Si</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Crea Nuovo Utente</CardTitle>
              <CardDescription>
                Aggiungi un nuovo utente al sistema con permessi specifici.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-user-name">Nome</Label>
                  <Input
                    id="new-user-name"
                    value={newUser.name}
                    onChange={(e) => updateNewUser('name', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-user-surname">Cognome</Label>
                  <Input
                    id="new-user-surname"
                    value={newUser.surname}
                    onChange={(e) => updateNewUser('surname', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-user-username">Nome Utente</Label>
                  <Input
                    id="new-user-username"
                    value={newUser.username}
                    onChange={(e) => updateNewUser('username', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-user-password">Password</Label>
                  <Input
                    id="new-user-password"
                    type="password"
                    value={newUser.password}
                    onChange={(e) => updateNewUser('password', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Ruolo</Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="role-junior"
                        name="role"
                        value="JUNIOR"
                        checked={newUser.role === 'JUNIOR'}
                        onChange={() => updateNewUser('role', 'JUNIOR')}
                        className="mr-2"
                      />
                      <Label htmlFor="role-junior">Junior</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="role-admin"
                        name="role"
                        value="ADMINISTRATOR"
                        checked={newUser.role === 'ADMINISTRATOR'}
                        onChange={() => updateNewUser('role', 'ADMINISTRATOR')}
                        className="mr-2"
                      />
                      <Label htmlFor="role-admin">Amministratore</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Crea Utente</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Conferma Creazione Utente</AlertDialogTitle>
                    <AlertDialogDescription>
                      Sei sicuro di voler creare un nuovo utente con questi privilegi?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No</AlertDialogCancel>
                    <AlertDialogAction>Si</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;

