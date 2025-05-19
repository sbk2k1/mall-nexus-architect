
import React from 'react';
import DashboardHeader from './DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, User, Store, FileText, ShoppingCart, TrendingUp, TrendingDown, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TenantList = () => {
  const tenants = [
    { 
      id: 1, 
      name: "Urban Outfitters", 
      category: "Fashion", 
      location: "Westfield, Level 2", 
      size: "3,200 sq ft",
      leaseEnd: "2026-08-15",
      sales: "+12.5%",
      status: "active",
      contact: "Sarah Johnson",
      email: "sarah@urbanoutfitters.com",
      phone: "415-555-7890"
    },
    { 
      id: 2, 
      name: "Tech Haven", 
      category: "Electronics", 
      location: "Highland Mall, Level 1", 
      size: "5,800 sq ft",
      leaseEnd: "2025-12-30",
      sales: "+8.2%",
      status: "active",
      contact: "Michael Chen",
      email: "michael@techhaven.com",
      phone: "206-555-3456"
    },
    { 
      id: 3, 
      name: "Gourmet Delights", 
      category: "Food & Beverage", 
      location: "Riverside Galleria, Food Court", 
      size: "1,500 sq ft",
      leaseEnd: "2025-06-01",
      sales: "-2.7%",
      status: "warning",
      contact: "Carlos Rodriguez",
      email: "carlos@gourmetdelights.com",
      phone: "512-555-9012"
    },
    { 
      id: 4, 
      name: "Fitness First", 
      category: "Health & Fitness", 
      location: "East Point Center, Level 3", 
      size: "8,900 sq ft",
      leaseEnd: "2028-03-15",
      sales: "+21.3%",
      status: "active",
      contact: "Jessica Williams",
      email: "jessica@fitnessfirst.com",
      phone: "312-555-6789"
    },
    { 
      id: 5, 
      name: "Book Nook", 
      category: "Books & Gifts", 
      location: "Metropolitan Plaza, Level 2", 
      size: "2,100 sq ft",
      leaseEnd: "2025-09-30",
      sales: "-4.6%",
      status: "warning",
      contact: "David Thompson",
      email: "david@booknook.com",
      phone: "212-555-3456"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active': return <Badge className="bg-green-900/30 text-green-400 hover:bg-green-900/50">Active</Badge>;
      case 'warning': return <Badge className="bg-amber-900/30 text-amber-400 hover:bg-amber-900/50">At Risk</Badge>;
      case 'overdue': return <Badge className="bg-red-900/30 text-red-400 hover:bg-red-900/50">Payment Overdue</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getSalesTrend = (sales: string) => {
    const value = parseFloat(sales);
    if (value > 0) {
      return <div className="flex items-center gap-1 text-green-500"><TrendingUp className="h-4 w-4" />{sales}</div>;
    } else {
      return <div className="flex items-center gap-1 text-red-500"><TrendingDown className="h-4 w-4" />{sales}</div>;
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Lease End</TableHead>
              <TableHead>Sales Trend</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenants.map((tenant) => (
              <TableRow key={tenant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/20 text-primary">{tenant.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{tenant.name}</p>
                      <p className="text-xs text-muted-foreground">{tenant.contact}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{tenant.location}</TableCell>
                <TableCell>{tenant.category}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    {tenant.leaseEnd}
                  </div>
                </TableCell>
                <TableCell>{getSalesTrend(tenant.sales)}</TableCell>
                <TableCell>{getStatusBadge(tenant.status)}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const LeaseRenewalsList = () => {
  const upcomingRenewals = [
    { id: 1, tenant: "Book Nook", expiryDate: "2025-09-30", daysRemaining: 134, status: "not-started", category: "Books & Gifts" },
    { id: 2, tenant: "Gourmet Delights", expiryDate: "2025-06-01", daysRemaining: 14, status: "in-progress", category: "Food & Beverage" },
    { id: 3, tenant: "Tech Haven", expiryDate: "2025-12-30", daysRemaining: 225, status: "not-started", category: "Electronics" },
    { id: 4, tenant: "Luxury Watches", expiryDate: "2025-05-25", daysRemaining: 7, status: "in-negotiation", category: "Jewelry" },
    { id: 5, tenant: "Coffee Haven", expiryDate: "2025-06-15", daysRemaining: 28, status: "in-progress", category: "Food & Beverage" },
  ];

  return (
    <div className="space-y-4">
      {upcomingRenewals.map((renewal) => (
        <Card key={renewal.id} className={`hover-scale transition-all duration-300 ${
          renewal.daysRemaining <= 14 ? 'border-red-500/50' : 
          renewal.daysRemaining <= 30 ? 'border-amber-500/50' : 
          'border-border'
        }`}>
          <CardContent className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Store className="h-4 w-4 text-primary" />
                <h3 className="font-bold">{renewal.tenant}</h3>
                <Badge variant="outline" className="text-xs">{renewal.category}</Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>Expiry: {renewal.expiryDate}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between md:justify-end gap-4">
              <Badge className={
                renewal.daysRemaining <= 14 ? 'bg-red-900/30 text-red-400' :
                renewal.daysRemaining <= 30 ? 'bg-amber-900/30 text-amber-400' :
                'bg-blue-900/30 text-blue-400'
              }>
                {renewal.daysRemaining} days remaining
              </Badge>
              
              <Badge variant="outline" className="capitalize">
                {renewal.status.replace(/-/g, ' ')}
              </Badge>
              
              <Button size="sm">Start Renewal</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const ContactList = () => {
  const contacts = [
    { id: 1, name: "Sarah Johnson", company: "Urban Outfitters", role: "Store Manager", email: "sarah@urbanoutfitters.com", phone: "415-555-7890" },
    { id: 2, name: "Michael Chen", company: "Tech Haven", role: "Owner", email: "michael@techhaven.com", phone: "206-555-3456" },
    { id: 3, name: "Carlos Rodriguez", company: "Gourmet Delights", role: "Operations Director", email: "carlos@gourmetdelights.com", phone: "512-555-9012" },
    { id: 4, name: "Jessica Williams", company: "Fitness First", role: "General Manager", email: "jessica@fitnessfirst.com", phone: "312-555-6789" },
    { id: 5, name: "David Thompson", company: "Book Nook", role: "Owner", email: "david@booknook.com", phone: "212-555-3456" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contacts.map(contact => (
        <Card key={contact.id} className="hover-scale transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary/20 text-primary text-lg">{contact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="space-y-2">
                <div>
                  <h3 className="font-bold">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">{contact.role} at {contact.company}</p>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                    <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                    <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-4 gap-2">
              <Button size="sm" variant="outline">Message</Button>
              <Button size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const TenantManagement = () => {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-6 animate-fade-in">Tenant Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Tenants</p>
                <h3 className="text-2xl font-bold">126</h3>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-green-500/20">
                <Store className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                <h3 className="text-2xl font-bold">95.3%</h3>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-amber-500/20">
                <FileText className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Expiring Leases</p>
                <h3 className="text-2xl font-bold">14</h3>
                <p className="text-xs text-muted-foreground">(Next 90 days)</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-blue-500/20">
                <ShoppingCart className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Sales/sqft</p>
                <h3 className="text-2xl font-bold">$642</h3>
              </div>
            </div>
          </Card>
        </div>
        
        <Tabs defaultValue="tenants" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="tenants">All Tenants</TabsTrigger>
            <TabsTrigger value="renewals">Lease Renewals</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tenants" className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Tenant Directory</h3>
              <Button>Add New Tenant</Button>
            </div>
            <TenantList />
          </TabsContent>
          
          <TabsContent value="renewals" className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upcoming Lease Renewals</h3>
              <Button variant="outline">Generate Renewal Report</Button>
            </div>
            <LeaseRenewalsList />
          </TabsContent>
          
          <TabsContent value="contacts" className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Key Contacts</h3>
              <Button>Add Contact</Button>
            </div>
            <ContactList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TenantManagement;
