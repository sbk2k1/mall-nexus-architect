
import React from 'react';
import { ArrowDown, ArrowUp, Users, ShoppingCart, Building, DollarSign } from 'lucide-react';

const StatCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon 
}: { 
  title: string; 
  value: string; 
  change: { value: string; positive: boolean }; 
  icon: React.ElementType;
}) => {
  return (
    <div className="stat-card animate-scale-in">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-md bg-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className={`flex items-center text-xs font-medium ${change.positive ? 'text-green-500' : 'text-red-500'}`}>
          {change.positive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
          {change.value}
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Total Tenants" 
        value="126" 
        change={{ value: "12% vs last month", positive: true }} 
        icon={Users} 
      />
      <StatCard 
        title="Total Properties" 
        value="5" 
        change={{ value: "No change", positive: true }} 
        icon={Building} 
      />
      <StatCard 
        title="Customer Traffic" 
        value="32.5K" 
        change={{ value: "5% vs last month", positive: false }} 
        icon={ShoppingCart} 
      />
      <StatCard 
        title="Revenue" 
        value="$2.4M" 
        change={{ value: "18% vs last month", positive: true }} 
        icon={DollarSign} 
      />
    </div>
  );
};

export default DashboardStats;
