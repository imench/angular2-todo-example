import {Injectable} from 'angular2/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {
  getTodos() {
    return TODOS;
  }

  getTodo(id:number) {
    return TODOS.filter(todo => todo.id === id)[0];
  }

  addTodo(todo:Todo) {
    todo.id = TODOS.map(td => td.id).sort(function (a, b) {
        return b - a
      })[0] + 1;
    TODOS.push(todo);
  }

  UpdateTodo(todo:Todo) {
    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id == todo.id)
        TODOS[i] = todo;
    }
  }

  deleteTodo(todo:Todo) {
    TODOS.splice(TODOS.indexOf(todo), 1);
  }
}

var TODOS:Todo[] = [
  {"id": 1, "name": "English homework", "description": "exercice 1", "done": false},
  {"id": 2, "name": "Learn angular 2", "description": "Todo application", "done": true},
  {"id": 3, "name": "Learn Javascript", "description": "Javascript application", "done": false},
  {"id": 4, "name": "Learn Typescript", "description": "Typescript application", "done": false},
  {"id": 5, "name": "Learn Node", "description": "Node application", "done": true}
];