import { Component, ViewChild, OnInit, Output, AfterViewInit, EventEmitter } from '@angular/core';

import { iTodo, iTodoNew } from './models/todo';
import { iUser } from './models/user';
import { TodoService } from './services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  
  title = 'ToDoList';
  todosArray: iTodo[] = [];
  currentItemRemove:any;

  constructor(private todoServices: TodoService){
    this.todoServices.getTodos().then((td) => {
      this.todosArray = td;
      console.log(this.todosArray)
    })
    
  }
  // 
  addItem($event:iTodoNew){
    this.todoServices.createTodo($event).then((res) => {
      const newItem: iTodo = {
        id: res.id,
        status: false,
        text: res['body'],
        title: res.title
      }
      this.todosArray.unshift(newItem);
    })
  }
  // 
  updateItem($event:number){
    console.log($event);
  }
  // 
  deleteItem($event:number) {
    this.todoServices.deleteTodo($event).then((res) => {
      if(res==200){
        const index = this.todosArray.findIndex((el) => el.id === $event);
        this.todosArray.splice(index,1);
      }
    })
  }

  ngOnInit(): void {
   
  }

}
