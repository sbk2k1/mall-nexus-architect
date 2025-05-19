
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, PieChart, AreaChart, Bar, Pie, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const salesData = [
  { month: 'Jan', revenue: 2400, previous: 1398 },
  { month: 'Feb', revenue: 1398, previous: 1800 },
  { month: 'Mar', revenue: 9800, previous: 8200 },
  { month: 'Apr', revenue: 3908, previous: 2500 },
  { month: 'May', revenue: 4800, previous: 4200 },
  { month: 'Jun', revenue: 3800, previous: 4100 }
];

const occupancyData = [
  { name: 'Occupied', value: 85 },
  { name: 'Vacant', value: 15 }
];

const COLORS = ['#8B5CF6', '#1F2937'];

const trafficData = [
  { day: 'Mon', visits: 4000 },
  { day: 'Tue', visits: 3000 },
  { day: 'Wed', visits: 5000 },
  { day: 'Thu', visits: 2780 },
  { day: 'Fri', visits: 7890 },
  { day: 'Sat', visits: 9000 },
  { day: 'Sun', visits: 7390 }
];

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Revenue Comparison</CardTitle>
          <CardDescription>Current vs Previous Quarter</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" tick={{ fill: '#999' }} />
                <YAxis tick={{ fill: '#999' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#333' }}
                  labelStyle={{ color: '#FFF' }}
                />
                <Legend />
                <Bar dataKey="previous" fill="#475569" name="Previous Quarter" />
                <Bar dataKey="revenue" fill="#8B5CF6" name="Current Quarter" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Mall Occupancy Rate</CardTitle>
          <CardDescription>Current tenant distribution</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={occupancyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {occupancyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#333' }}
                  labelStyle={{ color: '#FFF' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card lg:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Weekly Visitor Traffic</CardTitle>
          <CardDescription>Foot traffic analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={trafficData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fill: '#999' }} />
                <YAxis tick={{ fill: '#999' }} />
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#333' }}
                  labelStyle={{ color: '#FFF' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="visits" 
                  stroke="#8B5CF6" 
                  fillOpacity={1} 
                  fill="url(#colorVisits)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;
