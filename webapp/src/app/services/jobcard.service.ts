import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobcardService {

  private url: string = 'http://localhost:8080/jobs';


  constructor(private http: HttpClient) { 

  }
  
  getJobs() :Observable<string> {
    return this.http.get<string>(this.url);
  }
}
