import {Component} from 'angular2/core';
import {TodosComponent} from './todos.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [TodosComponent]
})
export class AppComponent {
    title = 'Todos application';
}

