import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})

export class MapDetailComponent implements OnInit {
  @Input() lat: number;
  @Input() lng: number;

  zoom: number = 11;
  
  constructor() {}

  ngOnInit() {}
}