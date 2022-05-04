import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../services/todos.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() {}

  ngOnInit(): void {}
}
