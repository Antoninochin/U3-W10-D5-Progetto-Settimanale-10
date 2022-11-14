import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss']
})
export class TodosPage implements OnInit {

  todo: Todo[]= []

  constructor( private todoService:TodosService ) { }

  ngOnInit(): void {

    this.todo = this.todoService.todolist;
  }

  // check(i: Todo){
  // this.todo[i].check = this.todo[i].check === "check" ? "" : "check" ;
  // }

}
