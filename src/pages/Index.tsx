
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import QuoteSection from "@/components/Dashboard/QuoteSection";
import WordOfTheDay from "@/components/Dashboard/WordOfTheDay";
import DailySchedule from "@/components/Dashboard/DailySchedule";
import TaskList from "@/components/Dashboard/TaskList";
import CalendarView from "@/components/Dashboard/CalendarView";
import GradeOverview from "@/components/Dashboard/GradeOverview";
import QuickLinks from "@/components/Dashboard/QuickLinks";
import { getTodayFormatted } from "@/lib/data";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">{getTodayFormatted()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 dashboard-section">
          <QuoteSection />
        </div>
        <div className="dashboard-section">
          <WordOfTheDay />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1 dashboard-section">
          <DailySchedule />
        </div>
        <div className="lg:col-span-1 dashboard-section">
          <TaskList />
        </div>
        <div className="lg:col-span-1 dashboard-section">
          <CalendarView />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="dashboard-section">
          <GradeOverview />
        </div>
        <div className="dashboard-section">
          <QuickLinks />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
