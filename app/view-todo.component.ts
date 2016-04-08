import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-view-todo',
  templateUrl: 'app/view-todo.component.html',
  styleUrls: ['app/view-todo.component.css'],
  providers: [TodoService]
})
export class ViewTodoComponent implements OnInit {
  todo:Todo;

  constructor(private _todoService:TodoService,
              private _routeParams:RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.todo = this._todoService.getTodo(id);
  }

  goBack() {
    window.history.back();
  }
}
