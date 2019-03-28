import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url: string = 'http://oddjobdb.cfapps.io/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(this.url + '/' + id);
  }

  postJob(job: Job) {
    return this.http.post<Job>(this.url, job);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' +  id);
  }
}
