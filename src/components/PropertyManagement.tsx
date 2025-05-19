
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

type Property = {
  id: number;
  name: string;
  location: string;
  tenants: number;
  area: string;
  lastMaintenance: string;
  image: string;
};

const properties: Property[] = [
  {
    id: 1,
    name: "Central City Mall",
    location: "Downtown, Metro City",
    tenants: 85,
    area: "120,000 sq ft",
    lastMaintenance: "15 days ago",
    image: "https://images.unsplash.com/photo-1519567438786-d9aec96d8ff4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Riverside Shopping Center",
    location: "Riverside, Metro City",
    tenants: 56,
    area: "95,000 sq ft",
    lastMaintenance: "7 days ago",
    image: "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "Westside Plaza",
    location: "West District, Metro City",
    tenants: 42,
    area: "78,000 sq ft",
    lastMaintenance: "22 days ago",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGx8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "Harbor Market",
    location: "Harbor District, Metro City",
    tenants: 38,
    area: "65,000 sq ft",
    lastMaintenance: "12 days ago",
    image: "https://images.unsplash.com/photo-1581360742512-021d5b2157d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    name: "Northgate Galleria",
    location: "North District, Metro City",
    tenants: 63,
    area: "110,000 sq ft",
    lastMaintenance: "5 days ago",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGx8ZW58MHx8MHx8fDA%3D"
  }
];

const PropertyManagement = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Property Management</h1>
          <Button>Add New Property</Button>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 animate-scale-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Properties Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-black/20 rounded-lg">
                  <Building className="h-6 w-6 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-black/20 rounded-lg">
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Occupancy</p>
                  <p className="text-2xl font-bold">82%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:100ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Total Area</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">468,000</p>
              <p className="text-sm text-muted-foreground">Square Feet</p>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:200ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Scheduled Tasks</p>
                </div>
                <div className="p-3 bg-yellow-400/20 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-8 animate-fade-in">All Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <Card key={property.id} className="overflow-hidden hover-scale animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="h-40 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-start">
                  <span>{property.name}</span>
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {property.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tenants</p>
                    <p className="font-medium">{property.tenants}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Area</p>
                    <p className="font-medium">{property.area}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    Last maintenance: {property.lastMaintenance}
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
