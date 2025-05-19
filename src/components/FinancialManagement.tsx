
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, BarChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CreditCard, DollarSign, TrendingUp, TrendingDown, Download, Filter } from 'lucide-react';

const revenueData = [
  { month: 'Jan', rent: 580000, services: 120000, parking: 45000, advertising: 65000 },
  { month: 'Feb', rent: 550000, services: 115000, parking: 42000, advertising: 70000 },
  { month: 'Mar', rent: 620000, services: 125000, parking: 48000, advertising: 72000 },
  { month: 'Apr', rent: 600000, services: 130000, parking: 50000, advertising: 80000 },
  { month: 'May', rent: 630000, services: 135000, parking: 52000, advertising: 85000 },
  { month: 'Jun', rent: 650000, services: 140000, parking: 53000, advertising: 90000 },
];

const expenseData = [
  { month: 'Jan', maintenance: 120000, utilities: 85000, staff: 150000, marketing: 45000 },
  { month: 'Feb', maintenance: 115000, utilities: 82000, staff: 150000, marketing: 40000 },
  { month: 'Mar', maintenance: 118000, utilities: 84000, staff: 150000, marketing: 60000 },
  { month: 'Apr', maintenance: 125000, utilities: 86000, staff: 155000, marketing: 50000 },
  { month: 'May', maintenance: 130000, utilities: 88000, staff: 155000, marketing: 55000 },
  { month: 'Jun', maintenance: 128000, utilities: 90000, staff: 160000, marketing: 65000 },
];

const invoices = [
  { id: 'INV-001', tenant: 'Fashion Emporium', amount: '$12,450', date: 'Jun 01, 2025', status: 'Paid', dueDate: 'Jun 15, 2025' },
  { id: 'INV-002', tenant: 'Tech Haven', amount: '$8,720', date: 'Jun 01, 2025', status: 'Paid', dueDate: 'Jun 15, 2025' },
  { id: 'INV-003', tenant: 'Gourmet Delight', amount: '$5,325', date: 'Jun 01, 2025', status: 'Pending', dueDate: 'Jun 15, 2025' },
  { id: 'INV-004', tenant: 'Home Essentials', amount: '$7,890', date: 'Jun 01, 2025', status: 'Overdue', dueDate: 'Jun 15, 2025' },
  { id: 'INV-005', tenant: 'Fitness Central', amount: '$6,450', date: 'Jun 01, 2025', status: 'Pending', dueDate: 'Jun 15, 2025' }
];

const FinancialManagement = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Financial Management</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Reports
            </Button>
            <Button>Generate Invoice</Button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card className="animate-scale-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">$2.4M</p>
                  <div className="flex items-center text-sm font-medium text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+12.5% vs last month</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/20 rounded-full">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:100ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Operating Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">$968K</p>
                  <div className="flex items-center text-sm font-medium text-red-500">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    <span>+4.3% vs last month</span>
                  </div>
                </div>
                <div className="p-3 bg-red-500/20 rounded-full">
                  <CreditCard className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:200ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Net Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">$1.43M</p>
                  <div className="flex items-center text-sm font-medium text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+18.2% vs last month</span>
                  </div>
                </div>
                <div className="p-3 bg-green-500/20 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-scale-in [animation-delay:300ms]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Collection Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">94.8%</p>
                  <div className="flex items-center text-sm font-medium text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+2.1% vs last month</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <CreditCard className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="revenue" className="animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <TabsContent value="revenue" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Monthly revenue streams (2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" tick={{ fill: '#999' }} />
                      <YAxis tick={{ fill: '#999' }} />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, '']}
                        contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#333' }}
                        labelStyle={{ color: '#FFF' }}
                      />
                      <Legend />
                      <Bar dataKey="rent" name="Tenant Rent" stackId="a" fill="#8B5CF6" />
                      <Bar dataKey="services" name="Service Charges" stackId="a" fill="#3B82F6" />
                      <Bar dataKey="parking" name="Parking" stackId="a" fill="#10B981" />
                      <Bar dataKey="advertising" name="Advertising" stackId="a" fill="#F59E0B" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="expenses" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Monthly expenses by category (2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={expenseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorMaintenance" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="colorUtilities" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="colorStaff" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="colorMarketing" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.2} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" tick={{ fill: '#999' }} />
                      <YAxis tick={{ fill: '#999' }} />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, '']}
                        contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#333' }}
                        labelStyle={{ color: '#FFF' }}
                      />
                      <Legend />
                      <Area type="monotone" dataKey="maintenance" name="Maintenance" stackId="1" stroke="#8B5CF6" fill="url(#colorMaintenance)" />
                      <Area type="monotone" dataKey="utilities" name="Utilities" stackId="1" stroke="#3B82F6" fill="url(#colorUtilities)" />
                      <Area type="monotone" dataKey="staff" name="Staff" stackId="1" stroke="#10B981" fill="url(#colorStaff)" />
                      <Area type="monotone" dataKey="marketing" name="Marketing" stackId="1" stroke="#F59E0B" fill="url(#colorMarketing)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Invoices</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map(invoice => (
                    <TableRow key={invoice.id} className="hover-scale">
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.tenant}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>
                        <Badge className={
                          invoice.status === 'Paid' ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' :
                          invoice.status === 'Overdue' ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' :
                          'bg-amber-500/20 text-amber-500 hover:bg-amber-500/30'
                        }>
                          {invoice.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialManagement;
