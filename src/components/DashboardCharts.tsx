
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, PieChart, AreaChart, LineChart, 
  Bar, Pie, Area, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, Cell, ReferenceLine 
} from 'recharts';

const salesData = [
  { month: 'Jan', revenue: 2400, previous: 1398, target: 2000 },
  { month: 'Feb', revenue: 1398, previous: 1800, target: 2000 },
  { month: 'Mar', revenue: 9800, previous: 8200, target: 8000 },
  { month: 'Apr', revenue: 3908, previous: 2500, target: 3000 },
  { month: 'May', revenue: 4800, previous: 4200, target: 4500 },
  { month: 'Jun', revenue: 3800, previous: 4100, target: 4000 }
];

const occupancyData = [
  { name: 'Retail Shops', value: 65, color: '#8B5CF6' },
  { name: 'Food Courts', value: 20, color: '#3B82F6' },
  { name: 'Entertainment', value: 10, color: '#10B981' },
  { name: 'Vacant', value: 5, color: '#1F2937' }
];

const trafficData = [
  { day: 'Mon', visits: 4000, online: 2400 },
  { day: 'Tue', visits: 3000, online: 1398 },
  { day: 'Wed', visits: 5000, online: 3800 },
  { day: 'Thu', visits: 2780, online: 3908 },
  { day: 'Fri', visits: 7890, online: 4800 },
  { day: 'Sat', visits: 9000, online: 3800 },
  { day: 'Sun', visits: 7390, online: 4300 }
];

const tenantPerformanceData = [
  { name: 'Tech Store', revenue: 4000, growth: 24 },
  { name: 'Fashion Outlet', revenue: 3000, growth: -5 },
  { name: 'Restaurant', revenue: 2000, growth: 10 },
  { name: 'Bookstore', revenue: 2780, growth: 16 },
  { name: 'Cinema', revenue: 1890, growth: 4 },
  { name: 'Supermarket', revenue: 2390, growth: 7 }
];

const CustomTooltipStyle = {
  backgroundColor: '#1F1F1F',
  borderColor: '#333',
  color: '#FFF',
  padding: '8px',
  borderRadius: '4px',
};

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Revenue Comparison</CardTitle>
          <CardDescription>Current vs Previous Quarter with Target</CardDescription>
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
                  contentStyle={CustomTooltipStyle}
                  labelStyle={{ color: '#FFF' }}
                  formatter={(value) => [`$${value}`, '']}
                />
                <Legend />
                <ReferenceLine y={5000} stroke="#ff9800" strokeDasharray="3 3" label={{ value: "Goal Line", fill: "#ff9800", position: "insideTopRight" }} />
                <Bar dataKey="previous" fill="#475569" name="Previous Quarter" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" fill="#8B5CF6" name="Current Quarter" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" fill="#10B981" name="Target" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Mall Occupancy Distribution</CardTitle>
          <CardDescription>Tenant category breakdown</CardDescription>
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
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={CustomTooltipStyle}
                  labelStyle={{ color: '#FFF' }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend formatter={(value) => <span style={{color: '#999'}}>{value}</span>} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Weekly Visitor Traffic</CardTitle>
          <CardDescription>In-person vs Online Engagement</CardDescription>
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
                  <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fill: '#999' }} />
                <YAxis tick={{ fill: '#999' }} />
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <Tooltip
                  contentStyle={CustomTooltipStyle}
                  labelStyle={{ color: '#FFF' }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="visits" 
                  name="In-store Visits"
                  stroke="#8B5CF6" 
                  fillOpacity={1} 
                  fill="url(#colorVisits)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="online" 
                  name="Online Engagement"
                  stroke="#3B82F6" 
                  fillOpacity={1} 
                  fill="url(#colorOnline)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Top Tenant Performance</CardTitle>
          <CardDescription>Revenue & Growth by Tenant</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={tenantPerformanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" tick={{ fill: '#999' }} />
                <YAxis yAxisId="left" tick={{ fill: '#999' }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: '#999' }} />
                <Tooltip 
                  contentStyle={CustomTooltipStyle}
                  labelStyle={{ color: '#FFF' }}
                />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="revenue" name="Revenue ($K)" stroke="#8B5CF6" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="growth" name="Growth %" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;
