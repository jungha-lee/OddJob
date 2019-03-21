import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {}

  authenticate(username, password) {
    if (username === "ana@gmail.com" && password === "aaaaaa"){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    // console.log("user logged in " + !(user === null));
    return !(user === null);
  }
}
