"use client";

import { Task, mockTasksApi } from "@/lib/mock/tasks";
import TaskList from "./_components/task-list";

// For demo purposes, we'll use a mock user ID
const MOCK_USER_ID = "user1";

export default function LinearPage() {
  const tasks: Task[] = mockTasksApi.getTasks(MOCK_USER_ID);

  return (
    <div className="container mx-auto py-8">
      <TaskList
        initialTasks={tasks}
        userId={MOCK_USER_ID}
      />
    </div>
  );
}
