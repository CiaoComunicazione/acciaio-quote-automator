
import { Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-sm">
      <div>
        <img 
          src="/lovable-uploads/a5ca00f9-f4d8-43c8-afd2-6fdac643075c.png" 
          alt="Acciaio Logo" 
          className="h-10" 
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-end">
            <span className="font-medium text-sm">
              {user?.name} {user?.surname}
            </span>
            <span className="text-xs text-muted-foreground">
              {user?.role === 'ADMINISTRATOR' ? 'Amministratore' : 'Junior'}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={logout} title="Esci">
            <LogOut size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
