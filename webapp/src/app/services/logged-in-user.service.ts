import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {

  private subject = new Subject<any>();
  
  constructor() { }
  
  clearUser() {
    this.subject.next();
  }

  setUser(user: User) {
    sessionStorage.setItem('authenticatedUser', JSON.stringify(user));
    this.subject.next(user);
  }

  getUser(): Observable<any> {
      return this.subject.asObservable();
  }
}
