
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Mail, FileText, Database, Settings, ClipboardList, BarChart3,
  User // Added User import from Lucide
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Quote Requests', href: '/quotes', icon: FileText },
    { name: 'Supplier Quotes', href: '/supplier-quotes', icon: ClipboardList },
    { name: 'Email Inbox', href: '/inbox', icon: Mail },
  ];

  const adminNavigation = [
    { name: 'Database', href: '/database', icon: Database, admin: true },
    { name: 'Settings', href: '/settings', icon: Settings, admin: true },
  ];

  // Filter navigation based on user role
  const filteredAdminNavigation = adminNavigation.filter(
    item => !item.admin || user?.role === 'ADMINISTRATOR'
  );

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen w-64 bg-steel-900 text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-steel-900 font-bold text-lg">A</span>
          </div>
          <span className="font-semibold text-xl">Acciaio</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto pt-5 pb-4">
        <nav className="px-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-md",
                isActive(item.href)
                  ? "bg-steel-700 text-white"
                  : "text-gray-300 hover:bg-steel-800 hover:text-white"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
          
          {filteredAdminNavigation.length > 0 && (
            <>
              <div className="pt-5">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Administration
                </div>
                {filteredAdminNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-md",
                      isActive(item.href)
                        ? "bg-steel-700 text-white"
                        : "text-gray-300 hover:bg-steel-800 hover:text-white"
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </>
          )}
        </nav>
      </div>
      
      <div className="p-4 border-t border-steel-700">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-steel-700 rounded-full flex items-center justify-center">
            <User size={16} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">
              {user?.name} {user?.surname}
            </p>
            <p className="text-xs text-gray-300">
              {user?.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
