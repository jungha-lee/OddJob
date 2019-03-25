import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './../models/application';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  private url: string = 'http://localhost:8080/applications';

  constructor(private http: HttpClient) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.url);
  }

  postApplication(application: Application) {
    return this.http.post(this.url, application);
  }

  removeApplication(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

}

