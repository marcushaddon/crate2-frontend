import { Component, OnInit } from '@angular/core';
import { StereoService } from '../services/stereo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(
    private stereo: StereoService
  ) { }

  ngOnInit() {
    this.stereo.stateChanged
    .subscribe(
      // Do something with new state
    );
  }


  


}
