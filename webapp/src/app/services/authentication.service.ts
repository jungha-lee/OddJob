import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoggedInUserService } from 'src/app/services/logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private loggedInUserService: LoggedInUserService) {}

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUsername');
    return !(user === null);
  }

  getAuthenticatedUsername() {
    return sessionStorage.getItem('authenticatedUsername');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUsername)
      return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('authenticatedUsername');
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
    this.loggedInUserService.clearUser();
    this.router.navigate(['/login']);
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);

    let header = new HttpHeaders({
        Authorization : basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>('http://oddjob2.cfapps.io/auth',
    {headers : header}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUsername', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    )
  }
}

export class AuthenticationBean{
  constructor(public message:string) {}
}
