
import { useData } from '@/context/DataContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShoppingCart, TrendingUp, Users, Clock } from 'lucide-react';

const statusCounts = (quotes: any[], status: string): number => {
  return quotes.filter(q => q.status === status).length;
};

const Dashboard = () => {
  const { quotes, supplierQuotes } = useData();
  
  const totalQuotes = quotes.length;
  const inProgressQuotes = statusCounts(quotes, 'IN_PROGRESS');
  const confirmedQuotes = statusCounts(quotes, 'CONFIRMED');
  const pendingSupplierQuotes = supplierQuotes.filter(sq => 
    sq.status === 'SENT' || sq.status === 'REMINDER_SENT'
  ).length;
  
  const cards = [
    {
      title: 'Total Quotes',
      value: totalQuotes,
      description: 'All time quote requests',
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'In Progress',
      value: inProgressQuotes,
      description: 'Quotes being processed',
      icon: Clock,
      color: 'bg-amber-500',
    },
    {
      title: 'Confirmed Orders',
      value: confirmedQuotes,
      description: 'Successfully converted quotes',
      icon: ShoppingCart,
      color: 'bg-green-500',
    },
    {
      title: 'Pending Suppliers',
      value: pendingSupplierQuotes,
      description: 'Awaiting supplier responses',
      icon: Users,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your quotation system
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
            <CardTitle>Recent Quote Requests</CardTitle>
            <CardDescription>
              The latest quote requests from customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            {quotes.length > 0 ? (
              <div className="space-y-4">
                {quotes.slice(0, 5).map((quote) => (
                  <div key={quote.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">{quote.customerName}</p>
                      <p className="text-sm text-muted-foreground">Quote: {quote.quoteCode}</p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        quote.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 
                        quote.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                        quote.status === 'EXPIRED' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {quote.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
                {quotes.length === 0 && (
                  <p className="text-center text-muted-foreground py-4">No quotes available</p>
                )}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">No quotes available</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              Current system performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Service</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Operational
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Quote Processing</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Operational
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Supplier Communication</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Operational
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Database Backup</span>
              <span className="flex items-center text-sm font-medium text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
                Last backup: Today 03:00
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
