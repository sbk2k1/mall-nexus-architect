
import React from 'react';
import DashboardHeader from './DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, DollarSign, TrendingUp, TrendingDown, BarChart2, PieChart, Calendar, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 2450000, expenses: 1250000 },
  { month: 'Feb', revenue: 2100000, expenses: 1100000 },
  { month: 'Mar', revenue: 2800000, expenses: 1300000 },
  { month: 'Apr', revenue: 2600000, expenses: 1200000 },
  { month: 'May', revenue: 2400000, expenses: 1150000 },
  { month: 'Jun', revenue: 2750000, expenses: 1250000 },
];

const categoryData = [
  { name: 'Rent', value: 1850000 },
  { name: 'Service Charges', value: 450000 },
  { name: 'Parking', value: 180000 },
  { name: 'Marketing Fees', value: 120000 },
  { name: 'Other', value: 150000 },
];

const invoicesData = [
  { id: "INV-2025-1243", tenant: "Urban Outfitters", amount: "$12,450", status: "paid", dueDate: "2025-05-01", paidOn: "2025-04-28" },
  { id: "INV-2025-1244", tenant: "Tech Haven", amount: "$18,750", status: "paid", dueDate: "2025-05-01", paidOn: "2025-04-30" },
  { id: "INV-2025-1245", tenant: "Gourmet Delights", amount: "$5,280", status: "overdue", dueDate: "2025-05-01", paidOn: null },
  { id: "INV-2025-1246", tenant: "Fitness First", amount: "$22,100", status: "pending", dueDate: "2025-06-01", paidOn: null },
  { id: "INV-2025-1247", tenant: "Book Nook", amount: "$7,350", status: "pending", dueDate: "2025-06-01", paidOn: null },
];

const RevenueTrends = () => {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Revenue & Expenses</CardTitle>
        <CardDescription>Year-to-date financial performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={revenueData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" tick={{ fill: '#999' }} />
              <YAxis tick={{ fill: '#999' }} tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#333' }}
                labelStyle={{ color: '#FFF' }}
                formatter={(value) => [`$${(value / 1000000).toFixed(2)}M`, '']}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                name="Revenue" 
                stroke="#8B5CF6" 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                name="Expenses" 
                stroke="#EF4444" 
                fillOpacity={1} 
                fill="url(#colorExpenses)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t border-border pt-4">
        <div>
          <p className="text-sm text-muted-foreground">YTD Revenue</p>
          <p className="text-lg font-bold">$15.1M</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">YTD Expenses</p>
          <p className="text-lg font-bold">$7.25M</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Net Profit</p>
          <p className="text-lg font-bold text-green-500">$7.85M</p>
        </div>
      </CardFooter>
    </Card>
  );
};

const RevenueCategories = () => {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Revenue Categories</CardTitle>
        <CardDescription>Breakdown by income source</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" tick={{ fill: '#999' }} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              <YAxis type="category" dataKey="name" tick={{ fill: '#999' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#333' }}
                labelStyle={{ color: '#FFF' }}
                formatter={(value) => [`$${(value / 1000).toFixed(0)}K`, '']}
              />
              <Legend />
              <Bar dataKey="value" name="Amount" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const InvoicesList = () => {
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'paid': return <Badge className="bg-green-900/30 text-green-400 hover:bg-green-900/50">Paid</Badge>;
      case 'pending': return <Badge className="bg-amber-900/30 text-amber-400 hover:bg-amber-900/50">Pending</Badge>;
      case 'overdue': return <Badge className="bg-red-900/30 text-red-400 hover:bg-red-900/50">Overdue</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'paid': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending': return <Calendar className="h-5 w-5 text-amber-500" />;
      case 'overdue': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Invoices</CardTitle>
        <CardDescription>Latest billing and payment activity</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 divide-y divide-border">
          {invoicesData.map((invoice) => (
            <div key={invoice.id} className="p-4 hover:bg-secondary/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {getStatusIcon(invoice.status)}
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{invoice.id}</p>
                      {getStatusBadge(invoice.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{invoice.tenant}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{invoice.amount}</p>
                  <p className="text-xs text-muted-foreground">
                    {invoice.status === 'paid' 
                      ? `Paid on ${invoice.paidOn}` 
                      : `Due ${invoice.dueDate}`
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-6">
        <Button variant="outline">View All Invoices</Button>
        <Button>Generate New Invoice</Button>
      </CardFooter>
    </Card>
  );
};

const BudgetProgress = () => {
  const budgetCategories = [
    { category: "Maintenance", allocated: 250000, spent: 105000, percentage: 42 },
    { category: "Marketing", allocated: 180000, spent: 142000, percentage: 79 },
    { category: "Operations", allocated: 320000, spent: 215000, percentage: 67 },
    { category: "Utilities", allocated: 420000, spent: 310000, percentage: 74 },
    { category: "Staff", allocated: 580000, spent: 290000, percentage: 50 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Utilization</CardTitle>
        <CardDescription>Year-to-date spending against budget</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgetCategories.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">{item.category}</p>
                <div className="text-right">
                  <p className="text-sm font-medium">${(item.spent / 1000).toFixed(0)}K / ${(item.allocated / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-muted-foreground">{item.percentage}% utilized</p>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    item.percentage > 85 ? 'bg-red-500' : 
                    item.percentage > 60 ? 'bg-amber-500' : 
                    'bg-green-500'
                  }`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const FinancialManagement = () => {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-6 animate-fade-in">Financial Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-green-500/20">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <h3 className="text-2xl font-bold">$2.4M</h3>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-primary/20">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Collection Rate</p>
                <h3 className="text-2xl font-bold">98.2%</h3>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-red-500/20">
                <TrendingDown className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Expenses</p>
                <h3 className="text-2xl font-bold">$1.15M</h3>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card p-4 hover-scale">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md bg-blue-500/20">
                <TrendingUp className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Net Profit</p>
                <h3 className="text-2xl font-bold">$1.25M</h3>
              </div>
            </div>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="invoicing">Invoicing</TabsTrigger>
            <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueTrends />
              <RevenueCategories />
            </div>
          </TabsContent>
          
          <TabsContent value="invoicing" className="animate-fade-in">
            <InvoicesList />
          </TabsContent>
          
          <TabsContent value="budgeting" className="animate-fade-in">
            <BudgetProgress />
          </TabsContent>
          
          <TabsContent value="reports" className="animate-fade-in">
            <Card className="h-[400px]">
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Access and generate financial reports</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-[300px]">
                <div className="text-center space-y-4">
                  <FileText className="h-16 w-16 mx-auto text-primary/50" />
                  <h3 className="text-xl font-medium">Financial Reporting Center</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Generate custom reports, download financial statements, and export data for accounting purposes.
                  </p>
                  <div className="flex gap-4 justify-center mt-6">
                    <Button variant="outline">Monthly Reports</Button>
                    <Button>Generate Custom Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FinancialManagement;
