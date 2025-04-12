
import React from "react";
import { 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  FileText, 
  LayoutDashboard, 
  GraduationCap,
  BookMarked,
  MessageSquare,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
};

const MenuItem = ({ icon, label, active = false, href }: MenuItemProps) => {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

const SideMenu = () => {
  return (
    <div className="bg-sidebar w-64 h-screen p-4 hidden md:block">
      <div className="flex items-center justify-center mb-8 p-4">
        <GraduationCap size={24} className="text-primary mr-2" />
        <h2 className="text-xl font-bold text-sidebar-foreground">
          Sidekick AI
        </h2>
      </div>

      <div className="space-y-1">
        <MenuItem 
          icon={<LayoutDashboard size={20} />} 
          label="Dashboard" 
          active 
          href="/"
        />
        <MenuItem 
          icon={<Calendar size={20} />} 
          label="Calendar" 
          href="/calendar" 
        />
        <MenuItem 
          icon={<CheckSquare size={20} />} 
          label="Tasks" 
          href="/tasks" 
        />
        <MenuItem 
          icon={<BookOpen size={20} />} 
          label="Courses" 
          href="/courses" 
        />
        <MenuItem 
          icon={<FileText size={20} />} 
          label="Grades" 
          href="/grades" 
        />
        <MenuItem 
          icon={<BookMarked size={20} />} 
          label="Notes" 
          href="/notes" 
        />
        <MenuItem 
          icon={<MessageSquare size={20} />} 
          label="Messages" 
          href="/messages" 
        />
      </div>

      <div className="absolute bottom-4 w-[calc(100%-2rem)]">
        <MenuItem 
          icon={<Settings size={20} />} 
          label="Settings" 
          href="/settings" 
        />
      </div>
    </div>
  );
};

export default SideMenu;
