import {Injectable} from 'angular2/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {
  getTodos() {
    return TODOS;
  }
}

var TODOS: Todo[] = [
  {"id": 11, "name": "English homework", "description": "exercice 1", "done": false},
  {"id": 12, "name": "Learn angular 2", "description": "Todo application", "done": true},
  {"id": 13, "name": "Learn Javascript", "description": "Javascript application", "done": false},
  {"id": 14, "name": "Learn Typescript", "description": "Typescript application", "done": false},
  {"id": 15, "name": "Learn Node", "description": "Node application", "done": true}
];