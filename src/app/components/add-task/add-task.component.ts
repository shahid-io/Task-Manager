import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  title: string;
  day: string;
  reminder: boolean = false;

  constructor() {
    this.title = "";
    this.day = "";
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (!this.title) {
      alert("Please Add Task");
      return;
    }
    const newTask = {
      title: this.title,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask)

    // @todo emit event
    this.title = '';
    this.day = '';
    this.reminder = false;
  }
}
