
import React from "react";
import { Bell, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-card border-b border-border h-16 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-primary hidden md:block">
          Scholastic Sidekick AI
        </h1>
        <h1 className="text-xl font-bold text-primary md:hidden">SSA</h1>
      </div>

      <div className="hidden md:flex items-center mx-4 max-w-md w-full">
        <div className="relative w-full">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search..."
            className="pl-8 bg-background w-full"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Settings size={20} />
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <User size={20} className="text-primary" />
          <span className="hidden md:inline">Student</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
