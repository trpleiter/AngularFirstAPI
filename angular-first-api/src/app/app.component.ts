import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Todo, TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public todos!: Todo[];
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService
      .getToDos()
      .pipe(
        tap((response) => {
          console.log(response);
          this.todos = response;
        })
      )
      .subscribe();
  }
}
