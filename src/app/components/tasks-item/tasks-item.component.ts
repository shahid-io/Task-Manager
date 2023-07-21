import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
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

}
