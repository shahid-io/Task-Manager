import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() {
    this.task = {
      id: 0,
      text: '',
      day: '',
      reminder: false,
    };
  }
  ngOnInit(): void {

  }
  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

}
