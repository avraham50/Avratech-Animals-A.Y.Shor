import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor() { }



  birds = [
    { name: 'blue-tail', size: 'small', lifeSpan: '15y', habitat: 'africa', img: 'https://miro.medium.com/max/1600/1*VViJJSx_Dz3kgUzmvA7gaA.gif' },
    { name: 'long-tail', size: 'small', lifeSpan: '1y', habitat: 'holand', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH9T6rG2kEVkW-dvfRhuzSfJgPtj67qFRRECe0wttMhLyLhFTH' },
    { name: 'blue-mouth', size: 'meduin', lifeSpan: '5y', habitat: 'israel', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmx7lUEK6FJY6bMBZkPWVAZ3C27O6KgR6l2Xpc19NyQG-7BGcV' },
    { name: 'pink-beak', size: 'large', lifeSpan: '115y', habitat: 'africa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7McIxDt6iXe02TQaSgavU1fUsGR7VlOh_yNFtPKlntNXDEkIC' },
    { name: 'flamingo', size: 'extra large', lifeSpan: '5m', habitat: 'america', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCT60ReN7HYk9oRGkpzTEo11FXgP1GUlEhVVZMQ6L-1OZAt0Hz' }
  ]

  curentBirdIndex = 0;
  curentBird = this.birds[this.curentBirdIndex];
}