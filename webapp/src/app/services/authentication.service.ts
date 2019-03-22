import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;

  constructor(private userService: UserService) {}

  authenticate(username, password) {
    if (username === "ana@gmail.com" && password === "aaaaaa"){
      sessionStorage.setItem('authenticatedUser', "logged in, loading user details from server...");
      this.userService.getUser(1).subscribe(user => { //hardcoded to get user with ID = 1
        this.user = user;
        sessionStorage.setItem('authenticatedUser', JSON.stringify(this.user)); //user stored in json format in session
        let retrievedObject = sessionStorage.getItem('authenticatedUser');
        console.log('retrievedObject: ', JSON.parse(retrievedObject)); //and this is how you parse it back
      });
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
