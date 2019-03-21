import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  getJobsOwnedByUser(id: number): Observable <Job[]> {
    return this.http.get<Job[]>(this.url + '/jobs/' + id);
  }

  getJobAppliedByUser(id: number): Observable <Job[]> {
    return this.http.get<Job[]>(this.url + '/applications/' + id);
  }

  register(user: User) {
    console.log(user);
    return this.http.post(this.url, user);
  }
}
