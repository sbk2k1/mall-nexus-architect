
import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import DashboardCharts from './DashboardCharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    { id: 1, title: "Mall-wide Sale", date: "June 5, 2025", status: "Confirmed" },
    { id: 2, title: "Food Festival", date: "June 12, 2025", status: "Planning" },
    { id: 3, title: "Tech Expo", date: "June 20, 2025", status: "Pending" }
  ];

  return (
    <Card className="dashboard-card animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">Upcoming Events</CardTitle>
        </div>
        <CalendarDays className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-secondary/50 transition-colors">
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.status === 'Confirmed' ? 'bg-green-950 text-green-400' :
                event.status === 'Planning' ? 'bg-blue-950 text-blue-400' :
                'bg-amber-950 text-amber-400'
              }`}>
                {event.status}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-6 animate-fade-in">Dashboard Overview</h2>
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <DashboardCharts />
          <div className="lg:col-span-1">
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
