
import React from "react";
import { tasks } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const TaskList = () => {
  const [taskItems, setTaskItems] = React.useState(tasks);

  const toggleTaskCompletion = (id: string) => {
    setTaskItems(
      taskItems.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Only show first 4 tasks
  const displayTasks = taskItems.slice(0, 4);

  const priorityColors = {
    high: "text-red-500 dark:text-red-400",
    medium: "text-amber-500 dark:text-amber-400",
    low: "text-green-500 dark:text-green-400",
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="dashboard-card-title">Tasks</CardTitle>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Plus size={14} />
          <span>Add</span>
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div>
          {displayTasks.length > 0 ? (
            <div className="space-y-1">
              {displayTasks.map((task) => (
                <div
                  key={task.id}
                  className={cn(
                    "flex items-start p-3 gap-3 hover:bg-muted/50 transition-colors",
                    task.completed && "opacity-60"
                  )}
                >
                  <div className="mt-0.5">
                    <button onClick={() => toggleTaskCompletion(task.id)}>
                      {task.completed ? (
                        <CheckCircle2
                          className="text-primary h-5 w-5"
                          fill="currentColor"
                          fillOpacity={0.2}
                        />
                      ) : (
                        <Circle className="text-muted-foreground h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="flex-1">
                    <h4
                      className={cn(
                        "font-medium",
                        task.completed && "line-through"
                      )}
                    >
                      {task.title}
                    </h4>
                    {task.dueDate && (
                      <p className={cn("text-sm text-muted-foreground")}>
                        Due{" "}
                        {task.dueDate.toLocaleDateString(undefined, {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className={cn("font-normal", priorityColors[task.priority])}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No tasks yet. Click "Add" to create a new task.
            </div>
          )}
          {taskItems.length > 4 && (
            <div className="p-2 border-t">
              <Button variant="ghost" size="sm" className="w-full">
                View all {taskItems.length} tasks
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskList;
