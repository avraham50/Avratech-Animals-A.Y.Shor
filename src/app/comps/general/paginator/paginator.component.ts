import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() moveItem:EventEmitter <number> = new EventEmitter <number>() ;

  novItemPage(d:number):void{
    console.log(' novItemPage(d)',d)
    this.moveItem.emit(d);
  }
}
