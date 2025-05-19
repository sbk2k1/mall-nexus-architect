
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building, CreditCard, Home, Menu, Users, TrendingUp, Settings, ShoppingCart, Calendar, BarChart2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  subItems?: { label: string; to: string; description?: string }[];
}

const NavItem = ({ to, icon: Icon, label, isActive, subItems }: NavItemProps) => {
  if (subItems && subItems.length > 0) {
    return (
      <NavigationMenuItem className="w-full">
        <NavigationMenuTrigger className={cn(
          "w-full justify-start gap-2 pl-2 mb-1 h-auto",
          isActive 
            ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground" 
            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground bg-transparent"
        )}>
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-card border border-border">
          <ul className="grid w-[320px] gap-2 p-2">
            {subItems.map((item) => (
              <li key={item.to}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.to}
                    className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="font-medium leading-none">{item.label}</div>
                    {item.description && (
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link to={to} className="w-full">
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
    { 
      to: '/', 
      icon: Home, 
      label: 'Dashboard',
      subItems: [
        { 
          label: 'Overview', 
          to: '/',
          description: 'High-level metrics and key performance indicators'
        },
        { 
          label: 'Analytics', 
          to: '/analytics',
          description: 'Detailed reports and data visualization'
        }
      ]
    },
    { 
      to: '/properties', 
      icon: Building, 
      label: 'Properties',
      subItems: [
        { 
          label: 'All Properties', 
          to: '/properties',
          description: 'View and manage all mall properties'
        },
        { 
          label: 'Space Management', 
          to: '/properties/space',
          description: 'Floor plans and space allocation'
        },
        { 
          label: 'Maintenance', 
          to: '/properties/maintenance',
          description: 'Track facility issues and maintenance tickets'
        }
      ]
    },
    { 
      to: '/tenants', 
      icon: Users, 
      label: 'Tenants',
      subItems: [
        { 
          label: 'Tenant Directory', 
          to: '/tenants',
          description: 'View and manage all tenants'
        },
        { 
          label: 'Leasing', 
          to: '/tenants/leasing',
          description: 'Manage lease agreements and renewals'
        },
        { 
          label: 'Performance', 
          to: '/tenants/performance',
          description: 'Track tenant sales and metrics'
        }
      ]
    },
    { 
      to: '/financials', 
      icon: CreditCard, 
      label: 'Financials',
      subItems: [
        { 
          label: 'Revenue', 
          to: '/financials',
          description: 'Income statements and financial reporting'
        },
        { 
          label: 'Invoicing', 
          to: '/financials/invoicing',
          description: 'Manage billing and payment collection'
        },
        { 
          label: 'Forecasting', 
          to: '/financials/forecasting',
          description: 'Financial projections and planning'
        }
      ]
    },
  ];

  return (
    <Sidebar className="border-r border-border transition-all duration-300">
      <SidebarHeader className="flex h-16 items-center border-b border-border px-4">
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
        </SidebarTrigger>
        <h2 className="text-lg font-bold">Mall Manager</h2>
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-4">
        <div className="space-y-1">
          <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">MAIN MENU</p>
          
          <NavigationMenu orientation="vertical" className="w-full max-w-none">
            <NavigationMenuList className="flex-col items-start space-y-1 space-x-0">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  subItems={item.subItems}
                  isActive={
                    currentPath === item.to ||
                    (item.to !== '/' && currentPath.startsWith(item.to))
                  }
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="mt-6 space-y-1">
          <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">UTILITIES</p>
          <Link to="/settings" className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 pl-2 mb-1 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Button>
          </Link>
          <Link to="/calendar" className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 pl-2 mb-1 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Calendar className="h-5 w-5" />
              <span>Calendar</span>
            </Button>
          </Link>
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
