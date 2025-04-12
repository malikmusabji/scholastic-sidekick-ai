
import React from "react";
import { quickLinks } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

const QuickLinks = () => {
  // Dynamically get the icon component
  const getIcon = (iconName: string) => {
    const icon = Icons[iconName as keyof typeof Icons];
    return icon ? React.createElement(icon, { size: 18 }) : <Link size={18} />;
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="dashboard-card-title">Quick Links</CardTitle>
        <Button variant="ghost" size="sm" className="h-8">
          <Plus size={16} className="mr-1" /> Add
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 p-3">
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-lg",
                "hover:bg-muted transition-colors text-center gap-2"
              )}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {getIcon(link.icon)}
              </div>
              <span className="text-sm">{link.title}</span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickLinks;
