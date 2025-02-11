"use client";

import { Status, Task, mockTasksApi } from "@/lib/mock/tasks";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CreateTaskDialog from "./create-task-dialog";
import TaskCard from "./task-card";

interface TaskListProps {
  initialTasks: Task[];
  userId: string;
}

const statusOrder: Status[] = ["todo", "in_progress", "backlog", "done", "canceled"];

function DroppableContainer({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <div
      ref={setNodeRef}
      className="space-y-4 rounded-lg border border-border bg-card p-4"
    >
      <h2 className="text-xl font-semibold capitalize">{title}</h2>
      {children}
    </div>
  );
}

export default function TaskList({ initialTasks, userId }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    })
  );

  const groupedTasks = tasks.reduce((acc, task) => {
    const status = task.status;
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  const handleTaskUpdate = () => {
    const updatedTasks = mockTasksApi.getTasks(userId);
    setTasks(updatedTasks);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    if (task) setActiveTask(task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeTask = tasks.find((t) => t.id === active.id);
    const newStatus = over.id as Status;

    if (activeTask && activeTask.status !== newStatus) {
      mockTasksApi.updateTask(activeTask.id, { status: newStatus });
      handleTaskUpdate();
    }

    setActiveTask(null);
  };

  // Initialize tasks from localStorage on mount
  useEffect(() => {
    handleTaskUpdate();
  }, [userId]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <CreateTaskDialog
          userId={userId}
          onTaskCreated={handleTaskUpdate}
        />
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {statusOrder.map((status) => (
            <DroppableContainer
              key={status}
              id={status}
              title={status.replace("_", " ")}
            >
              <SortableContext
                items={groupedTasks[status]?.map((t) => t.id) || []}
                strategy={rectSortingStrategy}
              >
                <div className="space-y-4">
                  {groupedTasks[status]?.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onUpdate={handleTaskUpdate}
                    />
                  ))}
                </div>
              </SortableContext>
            </DroppableContainer>
          ))}
        </div>

        {typeof window !== "undefined" &&
          createPortal(
            <DragOverlay>
              {activeTask && (
                <TaskCard
                  task={activeTask}
                  onUpdate={handleTaskUpdate}
                />
              )}
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </div>
  );
}
