import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, public router: Router) { }

  public username: string;
  public password: string;

  ngOnInit() {
    this.auth.loggedIn
    .subscribe(success => {
      if (success) {
        alert('Succesfully logged in!');
        // TODO: Navigate to home page
        this.router.navigateByUrl('/');
      } else if (success === false) {
        alert('Incorrect username or password!');
      }
    });
  }

  public login() {
    this.auth.login(this.username, this.password);
  }

}
