import { Injectable } from '@angular/core';
import { iTodo, iTodoNew } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(limit= 10): Promise<iTodo[]> {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(r => r.json())
      .then(todos => todos.map((td) => {
        return {
          id: td.id,
          status: td.completed,
          text: td.body,
          title: td.title ? td.title : `Untitled ${td.id}`
        }
      })
    );
  }

  getTodo(id): Promise<iTodo> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    })
  }

  createTodo(obj): Promise<iTodo> {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: obj.title,
        body: obj.body,
        userId: obj.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    })
  } 

  updateTodo(obj): Promise<iTodo> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: obj.id,
        title: obj.title,
        body: obj.body,
        userId: obj.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    })

  }

  deleteTodo(id:number): Promise<any> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      console.log(response);
      return response.status; // or any other prop process OK
    })
  }
}
