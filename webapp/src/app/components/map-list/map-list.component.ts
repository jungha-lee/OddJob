import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {
  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat: number = 59.35;
  lng: number = 18.0;

  // list of lat,lng for calcualting center of map
  listLat: number[];
  listLng: number[];

  @Input() jobsForMap: Job[];

  constructor() {}

  ngOnInit() {
  }
}
