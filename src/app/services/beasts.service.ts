import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor(public bestSrv:BeastsService) { }

    beasts = [
    { name: 'goat.', size: 'small', lifeSpan: '3y', habitat: 'Everywhere', img: 'https://media2.giphy.com/media/cMso9wDwqSy3e/giphy.webp?cid=790b7611526db03983a4665256fb1e809fc1812ed2dec6e6&rid=giphy.webp' },
    { name: 'Lamb.', size: 'meduin', lifeSpan: '4y', habitat: 'Everywhere' ,img: 'https://media2.giphy.com/media/10EVP84wEuM42k/source.gif' },
    { name: 'calf.', size: 'large', lifeSpan: '1y', habitat: 'Argentina' ,img: 'https://media.giphy.com/media/Zf5yE1NxyiTJe/giphy.gif' },
    { name: 'ox', size: 'extra large', lifeSpan: '7-8y', habitat: 'Orgevay' ,img: 'https://media.tenor.com/images/93ec59534afb7e587c06f9d95c5be115/tenor.gif' },
    { name: 'cow', size: 'extra large', lifeSpan: '6y', habitat: 'Poland', img: 'https://media.tenor.com/images/e60bb86f712b206c41a30fe068260a81/tenor.gif' }
  ]

  curentBeastIndex = 0;
  curentBeast = this.beasts[this.curentBeastIndex];


  }

  
























  
  // beasts = [
  //   { name: 'goat.', size: 'small', lifeSpan: '3y', habitat: 'Everywhere', img: 'https://media2.giphy.com/media/cMso9wDwqSy3e/giphy.webp?cid=790b7611526db03983a4665256fb1e809fc1812ed2dec6e6&rid=giphy.webp' },
  //   { name: 'Lamb.', size: 'meduin', lifeSpan: '4y', habitat: 'Everywhere' ,img: 'https://media2.giphy.com/media/10EVP84wEuM42k/source.gif' },
  //   { name: 'calf.', size: 'large', lifeSpan: '1y', habitat: 'Argentina' ,img: 'https://media.giphy.com/media/Zf5yE1NxyiTJe/giphy.gif' },
  //   { name: 'ox', size: 'extra large', lifeSpan: '7-8y', habitat: 'Orgevay' ,img: 'https://media.tenor.com/images/93ec59534afb7e587c06f9d95c5be115/tenor.gif' },
  //   { name: 'cow', size: 'extra large', lifeSpan: '6y', habitat: 'Poland', img: 'https://media.tenor.com/images/e60bb86f712b206c41a30fe068260a81/tenor.gif' }
  // ]

  // curentBeastIndex = 0;
  // curentBeast = this.beasts[this.curentBeastIndex];

