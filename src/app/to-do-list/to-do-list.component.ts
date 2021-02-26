import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input()
  public taskList:ArrayType[] = [];
  /* A two-way binding */
  public newTask: any; 

  constructor() { }
  
  ngOnInit(): void {
  }

  addTask(){
    this.taskList.push(this.newTask); 
    console.log(this.taskList);
  }
  /* This function takes to input the task, that has to be deleted*/
  removeTask(index: number){
    if (index > -1){
      this.taskList.splice(index,1);
    }
  }
}
