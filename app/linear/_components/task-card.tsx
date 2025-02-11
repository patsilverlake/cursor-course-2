"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { Task, mockTasksApi } from "@/lib/mock/tasks";
import { cn } from "@/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ChevronDown } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onUpdate: () => void;
}

const statusColors = {
  backlog: "bg-gray-500",
  todo: "bg-blue-500",
  in_progress: "bg-yellow-500",
  done: "bg-green-500",
  canceled: "bg-red-500"
};

const priorityColors = {
  low: "bg-gray-500",
  medium: "bg-blue-500",
  high: "bg-yellow-500",
  urgent: "bg-red-500"
};

export default function TaskCard({ task, onUpdate }: TaskCardProps) {
  const { toast } = useToast();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };

  const handleStatusChange = async (newStatus: Task["status"]) => {
    try {
      mockTasksApi.updateTask(task.id, { status: newStatus });
      onUpdate();
      toast({
        title: "Success",
        description: "Task updated successfully"
      });
    } catch (_) {
      toast({
        title: "Error",
        description: "Failed to update task",
        variant: "destructive"
      });
    }
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn("w-full cursor-grab active:cursor-grabbing", {
        "ring-2 ring-primary": isDragging
      })}
      {...attributes}
      {...listeners}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{task.title}</CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
              >
                <Badge className={`${statusColors[task.status]} text-white`}>{task.status.replace("_", " ")}</Badge>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleStatusChange("backlog")}>Backlog</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("todo")}>Todo</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("in_progress")}>In Progress</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("done")}>Done</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("canceled")}>Canceled</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-sm text-gray-500">{task.description || "No description provided"}</CardDescription>

        <div className="mt-4 flex items-center gap-2">
          <Badge className={`${priorityColors[task.priority]} text-white`}>{task.priority}</Badge>
          {task.assignedTo && <Badge variant="outline">{task.assignedTo}</Badge>}
        </div>
      </CardContent>
    </Card>
  );
}
