import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobcardService {

  private url: string = 'http://localhost:8080/jobs';


  constructor(private http: HttpClient) {

  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }
}
