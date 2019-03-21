import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Boolean {
    //this.http.get<User>(this.url + '/' + email);
    return (email == "ana@gmail.com" && password == "aaaaaa");
  }
}
