
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Filter, Plus, Search, Share, Store, ShoppingBag } from 'lucide-react';

const tenants = [
  { id: 1, name: "Fashion Emporium", category: "Clothing", location: "Central City Mall", floor: "2", unit: "A12", status: "Active", revenue: "$45,200", leaseEnd: "Dec 2025" },
  { id: 2, name: "Tech Haven", category: "Electronics", location: "Central City Mall", floor: "3", unit: "B05", status: "Active", revenue: "$58,600", leaseEnd: "Aug 2025" },
  { id: 3, name: "Gourmet Delight", category: "Food", location: "Riverside Shopping Center", floor: "1", unit: "C22", status: "Active", revenue: "$32,800", leaseEnd: "Mar 2026" },
  { id: 4, name: "Home Essentials", category: "Home Goods", location: "Westside Plaza", floor: "2", unit: "D15", status: "Inactive", revenue: "$0", leaseEnd: "Expired" },
  { id: 5, name: "Fitness Central", category: "Sports", location: "Northgate Galleria", floor: "4", unit: "E08", status: "Active", revenue: "$38,900", leaseEnd: "Oct 2025" },
  { id: 6, name: "Book Paradise", category: "Books", location: "Harbor Market", floor: "1", unit: "F10", status: "Active", revenue: "$21,500", leaseEnd: "May 2026" },
  { id: 7, name: "Beauty Oasis", category: "Beauty", location: "Central City Mall", floor: "3", unit: "G17", status: "Active", revenue: "$42,300", leaseEnd: "Jul 2025" },
  { id: 8, name: "Toy Universe", category: "Toys", location: "Westside Plaza", floor: "2", unit: "H25", status: "Pending", revenue: "$0", leaseEnd: "Feb 2026" }
];

const tenantCategories = [
  { name: "Clothing", count: 15, color: "bg-blue-500" },
  { name: "Food", count: 22, color: "bg-green-500" },
  { name: "Electronics", count: 8, color: "bg-purple-500" },
  { name: "Home Goods", count: 12, color: "bg-amber-500" },
  { name: "Services", count: 18, color: "bg-pink-500" }
];

const TenantManagement = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tenant Management</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Tenant
          </Button>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card className="animate-scale-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Total Tenants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">126</p>
                  <p className="text-sm text-muted-foreground">Active tenants</p>
                </div>
                <div className="p-3 bg-primary/20 rounded-full">
                  <Store className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:100ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Occupancy Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Space leased</p>
                </div>
                <div className="p-3 bg-green-500/20 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:200ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Lease Renewals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Due in 30 days</p>
                </div>
                <div className="p-3 bg-yellow-500/20 rounded-full">
                  <Store className="h-6 w-6 text-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:300ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Vacant Units</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">18</p>
                  <p className="text-sm text-muted-foreground">Available for lease</p>
                </div>
                <div className="p-3 bg-red-500/20 rounded-full">
                  <Store className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">Categories</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="px-6 pb-6 space-y-4">
                {tenantCategories.map(category => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                      <span>{category.name}</span>
                    </div>
                    <span className="text-muted-foreground">{category.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-border p-4">
              <Button variant="outline" className="w-full">View All Categories</Button>
            </CardFooter>
          </Card>

          <Card className="lg:col-span-3 animate-fade-in [animation-delay:100ms]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <CardTitle className="text-xl">Tenant Directory</CardTitle>
                <div className="flex w-full sm:w-auto gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search tenants..." className="pl-10" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tenant</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Lease End</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tenants.map(tenant => (
                      <TableRow key={tenant.id} className="hover-scale">
                        <TableCell className="font-medium">{tenant.name}</TableCell>
                        <TableCell>{tenant.category}</TableCell>
                        <TableCell>{tenant.location}</TableCell>
                        <TableCell>{tenant.floor}-{tenant.unit}</TableCell>
                        <TableCell>
                          <Badge className={
                            tenant.status === 'Active' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' :
                            tenant.status === 'Inactive' ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' :
                            'bg-amber-500/20 text-amber-500 hover:bg-amber-500/30'
                          }>
                            {tenant.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{tenant.revenue}</TableCell>
                        <TableCell>{tenant.leaseEnd}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TenantManagement;
