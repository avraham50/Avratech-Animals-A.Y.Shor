import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdService } from './services/bird.service';
import { BeastsService } from './services/beasts.service';
import { WildService } from './services/wild.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avraAnimals';

  constructor(public pagServ: PagingService, public birdSrv: BirdService,
    public beastSrv: BeastsService, public wildSrv: WildService) { }

  getUp(event) {
    console.log('AppComponent  getUp', event);
    let newInd;
    switch (this.pagServ.curentPanel) {
     
      case "birds":
        newInd = this.getNumberIndex(this.birdSrv.curentBirdIndex,
        event,this.birdSrv.birds)
        this.birdSrv.curentBirdIndex = newInd;
        this.birdSrv.curentBird = this.birdSrv.birds[newInd];
        break;
      case "beasts":
        newInd = this.getNumberIndex(this.beastSrv.curentBeastIndex,
        event,this.beastSrv.beasts)
        this.beastSrv.curentBeastIndex = newInd;
        this.beastSrv.curentBeast = this.beastSrv.beasts[newInd];
        break;
      default:
        break;
    }
  }

  private getNumberIndex(contemIndex: number, dalta: number, array: {}[]) {
    console.log('getNumberIndex(contemIndex: number, dalta: number, array: {}[])',
    contemIndex, dalta, array)
    let max = array.length - 1;
    let newIndex = contemIndex + dalta;
    if (newIndex > max) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = max;
    }

    return newIndex;
  }

}



