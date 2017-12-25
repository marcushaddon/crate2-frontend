import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(null);

  public login(username: string, password: string): void {
    const endpoint = environment.baseUrl + 'auth/login';
    const data = {
      username: username,
      password: password
    };

    const result = this.http.post(endpoint, data);

    // We'll handle setting the token, rather than letting whatever components know
    result
    .map(res => res.json())
    .subscribe(
      (token) => {
        window.localStorage.setItem('crate-jwt-token', token);
        this.loggedIn.next(true);
      },
      (err) => {
        console.log('Error signing in!');
        this.loggedIn.next(false);
      }
    );
  }
}
