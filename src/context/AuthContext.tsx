
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

// This is a mock implementation - in a real app you would connect to a backend
const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    name: 'Administrator',
    surname: 'User',
    role: 'ADMINISTRATOR',
  },
  {
    id: '2',
    username: 'operator',
    name: 'Junior',
    surname: 'Operator',
    role: 'JUNIOR',
  },
];

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();
  
  // Check for existing session on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('acciaioUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('acciaioUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(u => 
          u.username.toLowerCase() === username.toLowerCase() && 
          // In a real app, you would hash the password and compare with the stored hash
          password === 'password' 
        );
        
        if (foundUser) {
          setUser(foundUser);
          localStorage.setItem('acciaioUser', JSON.stringify(foundUser));
          toast({
            title: "Login successful",
            description: `Welcome back, ${foundUser.name}!`,
          });
          resolve(true);
        } else {
          toast({
            title: "Login failed",
            description: "Invalid username or password",
            variant: "destructive",
          });
          resolve(false);
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('acciaioUser');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
