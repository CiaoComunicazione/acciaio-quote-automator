
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import IntroduzioneTab from './IntroduzioneTab';
import DashboardTab from './DashboardTab';
import OfferteTab from './OfferteTab';
import DatabaseTab from './DatabaseTab';
import ImpostazioniTab from './ImpostazioniTab';
import RicercaTab from './RicercaTab';
import UtentiTab from './UtentiTab';
import NotificheTab from './NotificheTab';

const DocumentationContent: React.FC = () => {
  return (
    <ScrollArea className="h-[calc(100vh-300px)] px-1">
      <TabsContent value="introduzione" className="space-y-6 mt-0">
        <IntroduzioneTab />
      </TabsContent>
      
      <TabsContent value="dashboard" className="space-y-6 mt-0">
        <DashboardTab />
      </TabsContent>
      
      <TabsContent value="offerte" className="space-y-6 mt-0">
        <OfferteTab />
      </TabsContent>
      
      <TabsContent value="database" className="space-y-6 mt-0">
        <DatabaseTab />
      </TabsContent>
      
      <TabsContent value="impostazioni" className="space-y-6 mt-0">
        <ImpostazioniTab />
      </TabsContent>
      
      <TabsContent value="ricerca" className="space-y-6 mt-0">
        <RicercaTab />
      </TabsContent>
      
      <TabsContent value="utenti" className="space-y-6 mt-0">
        <UtentiTab />
      </TabsContent>
      
      <TabsContent value="notifiche" className="space-y-6 mt-0">
        <NotificheTab />
      </TabsContent>
    </ScrollArea>
  );
};

export default DocumentationContent;
