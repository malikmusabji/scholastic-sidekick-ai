
import React from "react";
import { getUpcomingEvents } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CalendarView = () => {
  const upcomingEvents = getUpcomingEvents();

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "exam":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "assignment":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "meeting":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    }
  };

  const formatEventDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getDaysFromNow = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `In ${diffDays} days`;
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="dashboard-card-title flex items-center gap-2">
          <CalendarIcon size={18} className="text-primary" />
          <span>Upcoming Events</span>
        </CardTitle>
        <Button variant="ghost" size="sm" className="h-8">
          <span>View Calendar</span>
          <ChevronRight size={16} />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center p-3 hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0 mr-3">
                <div className="h-12 w-12 rounded-md border flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-muted-foreground">
                    {event.date.toLocaleDateString(undefined, { month: "short" })}
                  </span>
                  <span className="text-lg font-bold">
                    {event.date.getDate()}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{event.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {formatEventDate(event.date)}
                </p>
              </div>
              <Badge className={cn("ml-2", getEventTypeColor(event.type))}>
                {getDaysFromNow(event.date)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Simple Badge component
const Badge = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <span 
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
};

export default CalendarView;
