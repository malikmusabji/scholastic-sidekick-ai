
import React from "react";
import { todaySchedule, courses } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const DailySchedule = () => {
  // Find the course color for a schedule item
  const getCourseColor = (courseId?: string) => {
    if (!courseId) return "bg-gray-200";
    const course = courses.find((c) => c.id === courseId);
    return course ? course.color : "bg-gray-200";
  };

  // Get icon based on schedule type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "class":
        return <Clock size={14} />;
      case "study":
        return <BookIcon size={14} />;
      case "meeting":
        return <UsersIcon size={14} />;
      case "exam":
        return <FileTextIcon size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  // Check if a time slot is current
  const isCurrentTimeSlot = (startTime: string, endTime: string) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const startTimeMinutes = startHour * 60 + startMinute;
    
    const [endHour, endMinute] = endTime.split(":").map(Number);
    const endTimeMinutes = endHour * 60 + endMinute;
    
    return currentTime >= startTimeMinutes && currentTime <= endTimeMinutes;
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="dashboard-card-title">Today's Schedule</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {todaySchedule.map((item) => {
            const isCurrent = isCurrentTimeSlot(item.startTime, item.endTime);
            
            return (
              <div
                key={item.id}
                className={cn(
                  "flex items-start p-3 hover:bg-muted/50 transition-colors",
                  isCurrent && "bg-muted/30"
                )}
              >
                <div
                  className={cn(
                    "w-1 h-16 rounded-full mr-3 self-center",
                    getCourseColor(item.course)
                  )}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium flex items-center gap-1">
                      {item.title}
                      {isCurrent && (
                        <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" title="Current session" />
                      )}
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      {item.startTime} - {item.endTime}
                    </span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin size={14} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

// Simple icons for schedule types
const BookIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const UsersIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const FileTextIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default DailySchedule;
