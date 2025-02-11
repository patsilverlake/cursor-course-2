export type Priority = "low" | "medium" | "high" | "urgent";
export type Status = "backlog" | "todo" | "in_progress" | "done" | "canceled";

export interface Task {
  id: string;
  userId: string;
  title: string;
  description?: string;
  priority: Priority;
  status: Status;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "linear_tasks";

// Mock initial data
const mockTasks: Task[] = [
  {
    id: "1",
    userId: "user1",
    title: "Implement authentication",
    description: "Add user authentication using Clerk",
    priority: "high",
    status: "in_progress",
    assignedTo: "john@example.com",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "2",
    userId: "user1",
    title: "Design system improvements",
    description: "Update component library with new design tokens",
    priority: "medium",
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Helper to get tasks from localStorage or initialize with mock data
const getStoredTasks = (): Task[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockTasks));
    return mockTasks;
  }
  return JSON.parse(stored);
};

// Helper to save tasks to localStorage
const saveTasks = (tasks: Task[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const mockTasksApi = {
  getTasks: (userId: string) => {
    const tasks = getStoredTasks();
    return tasks.filter((task) => task.userId === userId);
  },

  createTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
    const tasks = getStoredTasks();
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
  },

  updateTask: (id: string, data: Partial<Task>) => {
    const tasks = getStoredTasks();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new Error("Task not found");

    tasks[index] = {
      ...tasks[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    saveTasks(tasks);
    return tasks[index];
  },

  deleteTask: (id: string) => {
    const tasks = getStoredTasks();
    const filtered = tasks.filter((t) => t.id !== id);
    saveTasks(filtered);
  }
};
