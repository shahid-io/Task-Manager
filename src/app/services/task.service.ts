import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { TASKS } from 'src/app/mock.task';
import { Task } from 'src/app/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const task = of(TASKS);
    // return task;
    return this.http.get<Task[]>(this.apiUrl)
  }
}
