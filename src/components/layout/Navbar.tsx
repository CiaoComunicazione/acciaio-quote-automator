
import { Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-sm">
      <div>
        <img 
          src="/lovable-uploads/d58c95cd-b4b8-4b6f-a27f-3b280c1b4e07.png" 
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
              {user?.role}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={logout}>
            <LogOut size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
