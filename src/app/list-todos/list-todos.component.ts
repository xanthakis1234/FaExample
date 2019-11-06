import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
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
  message: string
  // todos=[
  //   new Todo(1, "Learn to dance", false, new Date()),
  //   new Todo(2, "Visist wherever", false, new Date()),
  //   new Todo(3, "mpla", false, new Date()),
  //   new Todo(3, "asddsf", false, new Date())
  // ]
  //test commit

  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }s

  refreshTodos(){
    this.todoService.retrieveAllTodos('Nek').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id){
   console.log(`delete todo ${id}`);
   this.todoService.deleteTodo('Nek',id).subscribe(
     response =>{
       console.log(response);
        this.message = `Delete of Todo ${id} Succesfull`;
        this.refreshTodos();
     }
   );
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos', id])
  }
}
