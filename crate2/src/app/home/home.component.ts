import { Component, OnInit } from '@angular/core';
import { StereoService } from '../stereo.service';


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
      (state) => console.log("Home got a new status of " + state)
    );
  }


  


}
