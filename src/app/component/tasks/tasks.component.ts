import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  public tasks:any = [];
  public newTask:any;

  public addTask() {
    if(this.newTask !== ""){
      this.tasks.push(this.newTask);
      this.newTask = "";
    }
  }

}
