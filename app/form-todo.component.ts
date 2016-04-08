import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-form-todo',
  templateUrl: 'app/form-todo.component.html',
  styleUrls: ['app/form-todo.component.css'],
  providers: [TodoService]
})

export class FormTodoComponent implements OnInit {
  todo:Todo;

  constructor(private _todoService:TodoService,
              private _routeParams:RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    if (id)
      this.todo = this._todoService.getTodo(id);
    else
      this.todo = new Todo();
  }

  goBack() {
    window.history.back();
  }

  saveTodo(todo) {
    this._todoService.addTodo(todo);
  }
}
