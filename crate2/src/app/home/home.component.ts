import { Component, OnInit } from '@angular/core';
import { StereoService } from '../stereo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _stereo: StereoService
  ) { }

  ngOnInit() {

  }

  // TESTING ONLY
  play(): void {
    this._stereo.play();
  }


}
