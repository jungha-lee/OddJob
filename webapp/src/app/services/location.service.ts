import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url: string = 'http://oddjob2.cfapps.io/locations';

  constructor(private http: HttpClient) {}

  // this function might not need
  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.url);
  }

  getLocation(id: number): Observable<Location> {
    return this.http.get<Location>(this.url + '/' + id);
  }

  postLocation(location: Location) {
    return this.http.post<Location>(this.url, location);
  }
}
