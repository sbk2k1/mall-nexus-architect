
import React from 'react';
import { ArrowDown, ArrowUp, Users, ShoppingCart, Building, DollarSign, TrendingUp, BarChart2, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const StatCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon,
  detail,
  detailMetric
}: { 
  title: string; 
  value: string; 
  change: { value: string; positive: boolean }; 
  icon: React.ElementType;
  detail?: string;
  detailMetric?: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="stat-card animate-scale-in">
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
            {detail && (
              <p className="text-xs text-muted-foreground mt-2">{detail} {detailMetric && <span className="font-medium text-foreground">{detailMetric}</span>}</p>
            )}
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-card border-secondary">
        <div className="space-y-4">
          <div className="flex justify-between">
            <h4 className="text-sm font-semibold">{title} Insights</h4>
            <div className={`flex items-center text-xs font-medium ${change.positive ? 'text-green-500' : 'text-red-500'}`}>
              {change.positive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
              {change.value}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full" 
                style={{ width: `${Math.min(Math.abs(parseInt(change.value)) * 5, 100)}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="space-y-1">
                <p className="text-muted-foreground">Previous</p>
                <p className="font-medium">
                  {change.positive 
                    ? parseInt(value.replace(/[^0-9]/g, '')) * 0.88
                    : parseInt(value.replace(/[^0-9]/g, '')) * 1.12
                  }
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Current</p>
                <p className="font-medium">{value}</p>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground">
            {change.positive 
              ? `${title} has increased over the last period. This indicates positive growth in this metric.`
              : `${title} has decreased over the last period. This may require attention.`
            }
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Total Tenants" 
        value="126" 
        change={{ value: "12%", positive: true }} 
        icon={Users} 
        detail="New tenants this month:"
        detailMetric="14"
      />
      <StatCard 
        title="Total Properties" 
        value="5" 
        change={{ value: "0%", positive: true }} 
        icon={Building} 
        detail="Occupancy rate:"
        detailMetric="95%"
      />
      <StatCard 
        title="Customer Traffic" 
        value="32.5K" 
        change={{ value: "5%", positive: false }} 
        icon={ShoppingCart} 
        detail="Avg. daily visitors:"
        detailMetric="4.6K"
      />
      <StatCard 
        title="Revenue" 
        value="$2.4M" 
        change={{ value: "18%", positive: true }} 
        icon={DollarSign} 
        detail="Projected Q2:"
        detailMetric="$2.8M"
      />
      <StatCard 
        title="Avg. Lease Rate" 
        value="$42/sqft" 
        change={{ value: "7%", positive: true }} 
        icon={TrendingUp} 
        detail="Market average:"
        detailMetric="$38/sqft"
      />
      <StatCard 
        title="Performance Index" 
        value="87.3" 
        change={{ value: "4%", positive: true }} 
        icon={BarChart2} 
        detail="YoY improvement:"
        detailMetric="+12.5%"
      />
      <StatCard 
        title="Maintenance Tickets" 
        value="28" 
        change={{ value: "12%", positive: false }} 
        icon={Clock} 
        detail="Avg. resolution time:"
        detailMetric="32h"
      />
      <StatCard 
        title="Rent Collection" 
        value="98.2%" 
        change={{ value: "1.5%", positive: true }} 
        icon={DollarSign} 
        detail="Outstanding amount:"
        detailMetric="$45K"
      />
    </div>
  );
};

export default DashboardStats;
