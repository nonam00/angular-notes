import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from "../../types/task"
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()
  task!: Task;
}
