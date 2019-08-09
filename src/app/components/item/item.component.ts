import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { iTodo, iTodoEdit } from '../../models/todo';
import { faSquare, faCheckSquare, faPencilAlt, faTimes, faChevronDown, faChevronUp  } from '@fortawesome/free-solid-svg-icons';
import { NgbdModalContent } from '../modal/modal-edit.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() todo: iTodo;
  constructor(private modalService: NgbModal) { }
  
  faTimes = faTimes;
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  faPencilAlt = faPencilAlt;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  closeResult: string;
  

  titleShown=false;
  deleteProcess=false;
  // 
  @Output() deleteItemEvent = new EventEmitter<any>();
  

  delItem(id:any){
    this.deleteItemEvent.emit(this.todo.id);
    this.deleteProcess=true;
  }
  // 
  @Output() editItemItemEvent = new EventEmitter<iTodo>();

  editItem(){
    this.editItemItemEvent.emit(this.todo);
  }
  // 
  ngOnInit() {

  }

  // 
  open(content) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.todo = this.todo;
  }
  
  
}
