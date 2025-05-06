
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import TabNavigation from '@/components/documentazione/TabNavigation';
import DocumentationContent from '@/components/documentazione/DocumentationContent';

const Documentazione = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documentazione</h1>
        <p className="text-muted-foreground">
          Guida completa all'utilizzo del gestionale Acciaio
        </p>
      </div>

      <Tabs defaultValue="introduzione" className="space-y-4">
        <TabNavigation defaultValue="introduzione" />
      
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Documentazione Gestionale Acciaio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DocumentationContent />
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Documentazione;
