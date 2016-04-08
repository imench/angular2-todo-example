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
}

var TODOS:Todo[] = [
  {"id": 1, "name": "English homework", "description": "exercice 1", "done": false},
  {"id": 2, "name": "Learn angular 2", "description": "Todo application", "done": true},
  {"id": 3, "name": "Learn Javascript", "description": "Javascript application", "done": false},
  {"id": 4, "name": "Learn Typescript", "description": "Typescript application", "done": false},
  {"id": 5, "name": "Learn Node", "description": "Node application", "done": true}
];