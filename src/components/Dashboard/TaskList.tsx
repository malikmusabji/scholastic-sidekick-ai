
import React from "react";
import { tasks } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const TaskList = () => {
  const [taskItems, setTaskItems] = React.useState(tasks);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState({
    title: "",
    priority: "medium" as "low" | "medium" | "high",
  });
  const { toast } = useToast();

  const toggleTaskCompletion = (id: string) => {
    setTaskItems(
      taskItems.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    
    const task = taskItems.find(t => t.id === id);
    if (task) {
      toast({
        title: task.completed ? "Task reopened" : "Task completed",
        description: task.title,
        duration: 2000,
      });
    }
  };

  const handleAddTask = () => {
    if (!newTask.title.trim()) {
      toast({
        title: "Error",
        description: "Task title cannot be empty",
        variant: "destructive",
      });
      return;
    }

    const newTaskItem = {
      id: `task${Date.now()}`,
      title: newTask.title,
      completed: false,
      priority: newTask.priority,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 3)),
    };

    setTaskItems([newTaskItem, ...taskItems]);
    setNewTask({ title: "", priority: "medium" });
    setIsDialogOpen(false);
    toast({
      title: "Task created",
      description: `"${newTask.title}" has been added to your tasks`,
      duration: 2000,
    });
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
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Plus size={14} />
              <span>Add</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
              <DialogDescription>
                Create a new task for your to-do list.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="task-title">Task Name</Label>
                <Input
                  id="task-title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  placeholder="Enter your task here..."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="task-priority">Priority</Label>
                <Select
                  value={newTask.priority}
                  onValueChange={(value: "low" | "medium" | "high") => 
                    setNewTask({...newTask, priority: value})
                  }
                >
                  <SelectTrigger id="task-priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddTask}>Add Task</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
