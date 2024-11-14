import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from '../types/task';
import {CommonModule, NgFor} from '@angular/common';
import {TaskComponent} from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Task[] = [
    {
      name: "Morning workout",
      description: `
- 10 Push-ups\n
- 50 Set-ups
      `,
      isFinished: true
    },
    {
      name: "Daily meetup at the cafe",
      description: "Place: Volna by Zernovaya",
      isFinished: false
    },
    {
      name: "loremloremloremloremloremloremloremloremloremloremloremlloremloremloremloremloremloremoremloremlorem",
      description: "loreloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremm",
      isFinished: false
    }
  ];
}
