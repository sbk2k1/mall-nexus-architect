
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Dashboard from "@/components/Dashboard";
import PropertyManagement from "@/components/PropertyManagement";
import TenantManagement from "@/components/TenantManagement";
import FinancialManagement from "@/components/FinancialManagement";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  
  // Map of tabs to their corresponding components
  const tabComponents: Record<string, React.ReactNode> = {
    dashboard: <Dashboard />,
    properties: <PropertyManagement />,
    tenants: <TenantManagement />,
    financials: <FinancialManagement />,
  };

  // Function to handle route changes (simulated since we're not using real routes yet)
  const handleRouteChange = (path: string) => {
    const routeMap: Record<string, string> = {
      '/': 'dashboard',
      '/properties': 'properties',
      '/tenants': 'tenants',
      '/financials': 'financials',
    };
    
    setActiveTab(routeMap[path] || 'dashboard');
  };

  // Override Link component behavior to use our state-based navigation
  // This allows our mockup to work without real routing
  React.useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        handleRouteChange(link.getAttribute('href') || '/');
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            {tabComponents[activeTab]}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
