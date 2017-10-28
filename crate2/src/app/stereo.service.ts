import { Injectable } from '@angular/core';

declare const player: any;

@Injectable()
export class StereoService {

  
  
  constructor() {
    console.log(player);
   }

   private state(): number {
     if (player) return player.getPlayerState();
     return -1;
   }

   ready(): boolean {
    return this.state() === 5;
  }

  // TESTING ONLY
  play(): void {
    player.playVideo();
  }



}
