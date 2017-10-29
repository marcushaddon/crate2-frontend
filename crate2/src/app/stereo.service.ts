import { Injectable, EventEmitter, NgZone } from '@angular/core';


declare const player: any;

@Injectable()
export class StereoService {

  private _state: number;
  stateChanged: EventEmitter<number> = new EventEmitter();
  
  constructor(private zone: NgZone) {
    // Expose this to outside scripts
    window['stereo'] = this;
   }

  get state() {
    return this._state;
  }

  set state(newState: number) {
    this._state = newState;
    this.stateChanged.next(this._state);
  }


}
