import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public username: string;
  public password: string;

  ngOnInit() {
    this.auth.loggedIn
    .subscribe(success => {
      if (success) {
        alert('Succesfully logged in!');
        // TODO: Navigate to home page
      } else if (success === false) {
        alert('Incorrect username or password!');
      }
    });
  }

  public login() {
    this.auth.login(this.username, this.password);
  }

}
