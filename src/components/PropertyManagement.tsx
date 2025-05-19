
import React from 'react';
import DashboardHeader from './DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, MapPin, Check, X, Clock, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const PropertiesList = () => {
  const properties = [
    {
      id: 1,
      name: "Westfield Shopping Center",
      location: "San Francisco, CA",
      size: "1.2M sq ft",
      tenants: 120,
      occupancy: 95,
      maintenance: 8,
      revenueGrowth: 12.5
    },
    {
      id: 2,
      name: "Highland Mall",
      location: "Seattle, WA",
      size: "850K sq ft",
      tenants: 98,
      occupancy: 87,
      maintenance: 12,
      revenueGrowth: 5.2
    },
    {
      id: 3,
      name: "Riverside Galleria",
      location: "Austin, TX",
      size: "1.5M sq ft",
      tenants: 145,
      occupancy: 98,
      maintenance: 5,
      revenueGrowth: 18.7
    },
    {
      id: 4,
      name: "East Point Center",
      location: "Chicago, IL",
      size: "780K sq ft",
      tenants: 82,
      occupancy: 91,
      maintenance: 14,
      revenueGrowth: -2.1
    },
    {
      id: 5,
      name: "Metropolitan Plaza",
      location: "New York, NY",
      size: "2.1M sq ft",
      tenants: 210,
      occupancy: 96,
      maintenance: 9,
      revenueGrowth: 9.8
    }
  ];

  return (
    <div className="space-y-6">
      {properties.map((property) => (
        <Card key={property.id} className="hover-scale transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2 mb-4 lg:mb-0">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{property.name}</h3>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">Size: {property.size} • {property.tenants} Tenants</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Occupancy</p>
                  <div className="flex items-end gap-1.5">
                    <span className="text-lg font-bold">{property.occupancy}%</span>
                    <Progress value={property.occupancy} className="h-2 w-20" />
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Maintenance</p>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-400" />
                    <span className="text-lg font-bold">{property.maintenance}</span>
                    <span className="text-xs text-muted-foreground">open</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Revenue Growth</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${property.revenueGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`text-lg font-bold ${property.revenueGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {property.revenueGrowth}%
                    </span>
                  </div>
                </div>
              </div>
              
              <Button className="mt-4 lg:mt-0">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const MaintenanceList = () => {
  const maintenanceItems = [
    { id: 1, property: "Westfield Shopping Center", issue: "HVAC System Failure - Food Court", status: "urgent", reportedBy: "Tenant Manager", createdAt: "2025-05-18" },
    { id: 2, property: "Highland Mall", issue: "Water Leak in Restroom B12", status: "in-progress", reportedBy: "Security Staff", createdAt: "2025-05-17" },
    { id: 3, property: "Riverside Galleria", issue: "Broken Escalator Level 2->3", status: "scheduled", reportedBy: "Mall Manager", createdAt: "2025-05-15" },
    { id: 4, property: "East Point Center", issue: "Parking Garage Gate Malfunction", status: "completed", reportedBy: "Customer Service", createdAt: "2025-05-10" },
    { id: 5, property: "Metropolitan Plaza", issue: "Lighting Issues in Main Atrium", status: "in-progress", reportedBy: "Operations Team", createdAt: "2025-05-12" }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return <Check className="h-4 w-4 text-green-500" />;
      case 'urgent': return <X className="h-4 w-4 text-red-500" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-amber-400" />;
      default: return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-900/30 text-green-400';
      case 'urgent': return 'bg-red-900/30 text-red-400';
      case 'in-progress': return 'bg-amber-900/30 text-amber-400';
      case 'scheduled': return 'bg-blue-900/30 text-blue-400';
      default: return 'bg-gray-900/30 text-gray-400';
    }
  };

  return (
    <div className="space-y-4">
      {maintenanceItems.map((item) => (
        <Card key={item.id} className="hover-scale transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 mb-4 md:mb-0">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">{item.property}</h3>
                </div>
                <p className="text-sm">{item.issue}</p>
                <p className="text-xs text-muted-foreground">Reported by: {item.reportedBy} • {item.createdAt}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${getStatusClass(item.status)}`}>
                  {getStatusIcon(item.status)}
                  <span className="capitalize text-xs font-medium">{item.status}</span>
                </div>
                
                <Button variant="outline" size="sm">View</Button>
                <Button size="sm">Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const PropertyManagement = () => {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-6 animate-fade-in">Property Management</h2>
        
        <Tabs defaultValue="properties" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="properties" className="space-y-6 animate-fade-in">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Mall Properties Overview</CardTitle>
                <CardDescription>Manage and view all shopping mall properties in your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Card className="bg-secondary/50 p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <h3 className="text-4xl font-bold text-primary">5</h3>
                      <p className="text-sm text-muted-foreground">Total Properties</p>
                    </div>
                  </Card>
                  <Card className="bg-secondary/50 p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <h3 className="text-4xl font-bold text-primary">6.43M</h3>
                      <p className="text-sm text-muted-foreground">Total Area (sq ft)</p>
                    </div>
                  </Card>
                  <Card className="bg-secondary/50 p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <h3 className="text-4xl font-bold text-green-500">93.4%</h3>
                      <p className="text-sm text-muted-foreground">Avg Occupancy</p>
                    </div>
                  </Card>
                  <Card className="bg-secondary/50 p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <h3 className="text-4xl font-bold text-amber-500">48</h3>
                      <p className="text-sm text-muted-foreground">Maintenance Issues</p>
                    </div>
                  </Card>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Property List</h3>
                  <Button>Add New Property</Button>
                </div>
                
                <PropertiesList />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="maintenance" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>Track and manage maintenance issues across all properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-red-900/20 p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <h3 className="text-4xl font-bold text-red-500">12</h3>
                      <p className="text-sm text-muted-foreground">Urgent Issues</p>
                    </div>
                  </Card>
                  <Card className="bg-amber-900/20 p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <h3 className="text-4xl font-bold text-amber-500">24</h3>
                      <p className="text-sm text-muted-foreground">In Progress</p>
                    </div>
                  </Card>
                  <Card className="bg-green-900/20 p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <h3 className="text-4xl font-bold text-green-500">118</h3>
                      <p className="text-sm text-muted-foreground">Completed (30 days)</p>
                    </div>
                  </Card>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Recent Maintenance Requests</h3>
                  <Button>Create New Request</Button>
                </div>
                
                <MaintenanceList />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Property Analytics</CardTitle>
                <CardDescription>Performance metrics and analysis for all properties</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Building className="h-16 w-16 mx-auto text-primary/50" />
                  <h3 className="text-xl font-medium">Analytics Dashboard</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Detailed property performance data, comparative metrics, and ROI analysis would be displayed here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertyManagement;
