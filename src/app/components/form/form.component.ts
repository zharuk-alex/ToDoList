import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iTodoNew } from '../../models/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

  }
  
  newTitle="";
  newText="";
 
  // 
  @Output() addItemEvent = new EventEmitter<{}>();

  addNew() {
    const newItem:iTodoNew = {
      title: this.newTitle,
      body: this.newText,
      userId: 1
    }

    this.newText = "";
    this.newTitle = "";
    console.log('from form ', newItem);
    this.addItemEvent.emit(newItem);
  }
  
  // 

}
