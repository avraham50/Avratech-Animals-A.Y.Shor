import { Component, OnInit } from '@angular/core';
import { WildService } from 'src/app/services/wild.service';

@Component({
  selector: 'app-wid-card',
  templateUrl: './wid-card.component.html',
  styleUrls: ['./wid-card.component.css']
})
export class WidCardComponent implements OnInit {

  constructor(public wildSrv:WildService) { }

  ngOnInit() {
  }

}
