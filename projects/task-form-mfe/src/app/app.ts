import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from "./task-form/task-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-form-mfe');
}
