import { Component, OnInit } from '@angular/core';
import { StereoService } from '../services/stereo.service';
// TESTING
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(
    private stereo: StereoService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.stereo.stateChanged
    .subscribe(
      // Do something with new state
    );

    this.http.get('http://localhost:3000/api/album/58a1d8d7bbfe602d03557125')
    .subscribe(data => console.log(data));


  }





}
