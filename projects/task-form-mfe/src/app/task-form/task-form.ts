import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from 'shared';
import { CommonModule, NgClass } from '@angular/common'; // Use your new clean import

@Component({
  selector: 'task-form',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './task-form.html',
  styleUrls : ['./task-form.css']
})
export class TaskFormComponent {
  private taskService = inject(TaskService);

  // Temporary local state for the form
  taskText = '';
  urgency: 'Low' | 'Medium' | 'High' = 'Medium';

 showToast = false;

onSubmit() {
  if (this.taskText.trim()) {
    this.taskService.addTask({
      text: this.taskText,
      urgency: this.urgency,
      deadline: new Date().toISOString().split('T')[0] 
    });

    // 1. Show the toast
    this.showToast = true;

    // 2. Clear the box
    this.taskText = ''; 

    // 3. Auto-hide the toast after 3 seconds
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
}