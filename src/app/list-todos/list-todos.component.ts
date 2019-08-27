import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  // todos=[
  //   new Todo(1, "Learn to dance", false, new Date()),
  //   new Todo(2, "Visist wherever", false, new Date()),
  //   new Todo(3, "mpla", false, new Date()),
  //   new Todo(3, "asddsf", false, new Date())
  // ]

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('Nek').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    );
  }

}
