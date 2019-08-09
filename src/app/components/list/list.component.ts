import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { iTodo } from '../../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Input() itemsList: iTodo[];
  constructor() { }
  
  @Output() deleteItemEvent = new EventEmitter<number>();

  delItem(id:number){
    this.deleteItemEvent.emit(id);
  }

  ngOnInit() {
    
  }

}
