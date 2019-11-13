import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildService {

  constructor() { }



  wilds = [
    { name: 'lion', size: 'large', lifeSpan: '12y', habitat: 'africa', img: 'https://i.gifer.com/3TY5.gif' },
    { name: 'Leopard', size: 'large', lifeSpan: '11y', habitat: 'africa', img: 'https://thumbs.gfycat.com/CleanOrdinaryIberiannase-size_restricted.gif' },
    { name: 'wolf', size: 'medium', lifeSpan: '6y', habitat: 'europe', img: 'https://i.giphy.com/media/zLutJroJ0Jw08/200.webp' },
    { name: 'elephant', size: 'extra large', lifeSpan: '15y', habitat: 'thailand', img: 'https://media2.giphy.com/media/6WZjWS157vFu0/source.gif' },
    { name: 'crocodile', size: 'medium', lifeSpan: '2y', habitat: 'usa', img: 'https://media.tenor.com/images/5ab57a546f35e33427b519377c974405/tenor.gif' }
  ]

  curentWildIndex = 0;
  curentWild = this.wilds[this.curentWildIndex];
}





