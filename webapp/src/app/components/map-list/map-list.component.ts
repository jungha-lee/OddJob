import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {
  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat: number;
  lng: number;

  // list of lat,lng for calcualting center of map
  listLat: number[] = [];
  listLng: number[] = [];

  @Input() joblistForMap: Job[];

  calcMapCenter() {
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.joblistForMap.length; i++) {
      this.listLat.push(this.joblistForMap[i].location.lat);
      this.listLng.push(this.joblistForMap[i].location.lng);
    }
    this.lat = (Math.max(...this.listLat) + Math.min(...this.listLat)) / 2;
    this.lng = (Math.max(...this.listLng) + Math.min(...this.listLng)) / 2;
  }

  constructor() {
  }

  ngOnInit() {
    this.calcMapCenter();
  }

}
