import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todolist: Todo[] = [
    {
      id:1,
      title:'',
      check:false,
    },
  ];

  constructor() { }
  
}

