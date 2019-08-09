import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { iTodo, iTodoEdit } from '../../models/todo';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// 
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: '../modal/modal-edit.component.html',
})

export class NgbdModalContent {
  @Input() todo: iTodo;

  constructor(public activeModal: NgbActiveModal) {  }

  editedItem:iTodoEdit;

  @Output() saveEditedEvent = new EventEmitter<{}>();

  saveEdited(){
    // console.log('close Modal');
    this.activeModal.close();
    if(this.editedItem.title !== this.todo.title || this.editedItem.text !== this.todo.text) {
      // console.log('save');
      // console.log(this.editedItem);
      this.todo.title = this.editedItem.title;
      this.todo.text = this.editedItem.text;
      this.saveEditedEvent.emit(this.todo);
    }
  }

  ngOnInit() {
    this.editedItem = {
      id: this.todo.id,
      title: this.todo.title,
      text: this.todo.text
    };
  }
}
  // 