import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Todo} from './todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'my-todos',
  templateUrl: 'app/todos.component.html',
  providers: [TodoService],
  styleUrls: ['app/todos.component.css']
})

export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private _todoService:TodoService, private _router:Router) {
  }

  getTodos() {
    this.todos = this._todoService.getTodos();
  }

  gotoView(todo) {
    this._router.navigate(['ViewTodo', {id: todo.id}]);
  }

  gotoUpdate(todo) {
    this._router.navigate(['UpdateTodo', {id: todo.id}]);
  }

  ngOnInit() {
    this.getTodos();
  }

  deleteTodo(todo) {
    this._todoService.deleteTodo(todo);
  }
}