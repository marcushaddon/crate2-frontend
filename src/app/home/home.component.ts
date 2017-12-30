import { Component, OnInit } from '@angular/core';
import { StereoService } from '../services/stereo.service';
import { UserService } from '../services/user.service';
// TESTING



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(
    private stereo: StereoService,
    private user: UserService
  ) { }

  message = 'Welcome to Crate, stranger!';

  ngOnInit() {
    this.user.meUpdated
    .subscribe(
      me => this.message = me && me.userName ? `Welcome to Crate, ${me.userName}!` : 'Welcome to Crate, stringer!',
      err => this.message = 'There was an error fetching your identity!'
    );

    if (!this.user.me) {
      this.user.fetchIdentity();
    }


  }





}
