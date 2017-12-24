import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  public Login(username: string, password: string): Observable<boolean> {
    const endpoint = environment.apiUrl + 'auth/login';
    const data = {
      username: username,
      password: password
    };

    const result = this.http.post(endpoint, data);


    result
    .map(res => res.json())
    .subscribe(
      (token) => window.localStorage.setItem('crate-jwt-token', token),
      (err) => console.log('Error signing in!')
    );

    return result
    .map(res => res.status === 201 ? true : false );

  }
}
