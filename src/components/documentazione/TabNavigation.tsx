
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BarChart3, FileText, Database, Settings, FileSearch, User, Bell } from 'lucide-react';

interface TabNavigationProps {
  defaultValue: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ defaultValue }) => {
  return (
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
  );
};

export default TabNavigation;
