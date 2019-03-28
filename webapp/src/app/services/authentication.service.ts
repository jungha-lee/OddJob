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

  // authenticate(username, password) {
  //   if (username === "ana@gmail.com" && password === "aaaaaa"){
  //     sessionStorage.setItem('authenticatedUser', "logged in, loading user details from server...");
  //     this.userService.getUser(1).subscribe(user => { //hardcoded to get user with ID = 1
  //       this.user = user;
  //       sessionStorage.setItem('authenticatedUser', JSON.stringify(this.user)); //user stored in json format in session
  //       let retrievedObject = sessionStorage.getItem('authenticatedUser');
  //       console.log('retrievedObject: ', JSON.parse(retrievedObject)); //and this is how you parse it back
  //     });
  //     return true;
  //   }
  //   return false;
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUsername');
    // console.log("user logged in " + !(user === null));
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
