import { Injectable, signal, computed } from '@angular/core';

export interface Task {
  id: number;
  text: string;
  urgency: 'Low' | 'Medium' | 'High';
  deadline: string; // Format: YYYY-MM-DD
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSignal = signal<Task[]>([]);
  
  // Expose the raw list
  allTasks = this.tasksSignal.asReadonly();

  // Reactive filter for Today's deadlines
  todayTasks = computed(() => {
    const today = new Date().toISOString().split('T')[0];
    return this.tasksSignal().filter(t => t.deadline === today);
  });

  addTask(task: Omit<Task, 'id'>) {
  console.log('Adding task:', task); // Check if this triggers when you click add
  this.tasksSignal.update(tasks => [...tasks, { ...task, id: Date.now() }]);
  console.log('Current Signal Value:', this.tasksSignal());
  }
}