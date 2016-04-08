import {Component, OnInit} from 'angular2/core';
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

  constructor(private _todoService:TodoService) {
  }

  getTodos() {
    this.todos = this._todoService.getTodos();
  }

  ngOnInit() {
    this.getTodos();
  }
}