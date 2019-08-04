import { Component, OnInit } from '@angular/core';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';


interface NewItem  {
  id: number,
  status: boolean,
  text: string,
  title: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ToDoList';
  
  newTitle="";
  newText="";
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  


  addNew() {
    const newItem:NewItem = {
      id: this.todosArray.length+1,
      status: false,
      text: this.newText,
      title: this.newTitle
    }

    this.todosArray.unshift(newItem);
    this.newText = "";
    this.newTitle = "";
  }
  
  delItem(text) {
    const index = this.todosArray.findIndex((el) => el.text === text);
    this.todosArray.splice(index,1);
  }

  show(){
    console.log(this.todosArray);
  }

  todosArray = [];

  getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => todos.map((td) => {
      return {
        id: td.id,
        status: td.completed,
        text: td.title,
        title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
      }
    }))

    .then(todos => {
      todos.length = 10;
      return todos;
    })
    .then(todos => {
      return this.todosArray = todos;
    })
  }

  ngOnInit(): void {
    this.getData();
  }

}
