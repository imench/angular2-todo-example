import {Component} from 'angular2/core';
import {TodosComponent} from './todos.component';
import {ViewTodoComponent} from './view-todo.component';
import {FormTodoComponent} from './form-todo.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [TodosComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/todos',
    name: 'Todos',
    component: TodosComponent,
    useAsDefault: true
  },
  {
    path: '/view/:id',
    name: 'ViewTodo',
    component: ViewTodoComponent
  },
  {
    path: '/update/:id',
    name: 'UpdateTodo',
    component: FormTodoComponent
  }
])
export class AppComponent {
  title = 'Todos application';
}
