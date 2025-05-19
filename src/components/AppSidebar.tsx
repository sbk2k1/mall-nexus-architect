
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building, CreditCard, Home, Menu, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon: Icon, label, isActive }: NavItemProps) => {
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 pl-2 mb-1",
          isActive 
            ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground" 
            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Button>
    </Link>
  );
};

const AppSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/properties', icon: Building, label: 'Properties' },
    { to: '/tenants', icon: Users, label: 'Tenants' },
    { to: '/financials', icon: CreditCard, label: 'Financials' },
  ];

  return (
    <Sidebar defaultCollapsed={false} className="border-r border-border transition-all duration-300">
      <SidebarHeader className="flex h-16 items-center border-b border-border px-4">
        <SidebarTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
        </SidebarTrigger>
        <h2 className="text-lg font-bold">Mall Manager</h2>
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-4">
        <div className="space-y-1">
          <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">MAIN MENU</p>
          
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isActive={
                currentPath === item.to ||
                (item.to !== '/' && currentPath.startsWith(item.to))
              }
            />
          ))}
        </div>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@example.com</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
