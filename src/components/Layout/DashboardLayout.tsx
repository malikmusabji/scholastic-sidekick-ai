
import React from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <SideMenu />

      {/* Mobile sidebar drawer */}
      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="icon" className="rounded-full bg-primary shadow-lg">
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-4 bg-sidebar text-sidebar-foreground">
              <SideMenu />
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Navbar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
