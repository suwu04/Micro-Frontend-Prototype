import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from 'shared';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="registry-container">
      <h3 class="registry-header">📋 Global Registry</h3>
      
      <div class="list-body">
        @for (t of taskService.allTasks(); track $index) {
          <div class="task-row">
            <span class="urgency-pill" [ngClass]="$any(t).urgency">
              {{ $any(t).urgency }}
            </span> 
            <strong class="task-text">{{ $any(t).text }}</strong>
          </div>
        } @empty {
          <p class="empty-state">No tasks available in the registry.</p>
        }
      </div>
    </div>
  `,
  styles: [`
    /* Dark Mode Container */
    .registry-container { 
      background: #1a1a1a; 
      color: #ffffff; 
      padding: 0; 
      border-radius: 12px; 
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .registry-header {
      background: #2d2d2d;
      margin: 0;
      padding: 20px;
      font-size: 1.2rem;
      border-bottom: 1px solid #3d3d3d;
    }

    .list-body {
      padding: 10px 20px 20px 20px;
    }

    .task-row { 
      padding: 12px 0; 
      border-bottom: 1px solid #333; 
      display: flex; 
      gap: 15px; 
      align-items: center; 
    }

    .task-row:last-child { border-bottom: none; }

    .task-text { font-weight: 400; color: #e0e0e0; }

    /* Urgency Pills */
    .urgency-pill { 
      font-size: 10px; 
      font-weight: bold;
      text-transform: uppercase;
      padding: 4px 8px; 
      border-radius: 6px; 
      min-width: 60px;
      text-align: center;
      letter-spacing: 0.5px;
    }

    /* Color Logic */
    .High { background: #ff4d4d; color: white; } 
    .Medium { background: #ffc107; color: #000; } 
    .Low { background: #2ecc71; color: white; }

    .empty-state { color: #888; font-style: italic; padding: 20px 0; }
  `]
})
export class TaskListComponent {
  public taskService = inject(TaskService);
}