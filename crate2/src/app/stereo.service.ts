import { Injectable } from '@angular/core';

declare const player: any;

@Injectable()
export class StereoService {

  
  public _ready: boolean = false;
  constructor() {
    console.log(player);
   }



}
