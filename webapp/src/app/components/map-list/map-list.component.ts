import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  lat: number;
  lng: number;

  // list of lat,lng for calcualting center of map
  listLat: number[] = [];
  listLng: number[] = [];

  styles: any[] = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -30
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#353535"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#656565"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#505050"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#454545"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -40
            },
            {
                "invert_lightness": true
            },
            {
                "gamma": 1.5
            }
        ]
    }
];

  @Input() joblistForMap: Job[];
  @Output() selectedMarker = new EventEmitter<number>();

  calcMapCenter() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.joblistForMap.length; i++) {
      this.listLat.push(this.joblistForMap[i].location.lat);
      this.listLng.push(this.joblistForMap[i].location.lng);
    }
    this.lat = (Math.max(...this.listLat) + Math.min(...this.listLat)) / 2;
    this.lng = (Math.max(...this.listLng) + Math.min(...this.listLng)) / 2;
  }

  markerClicked(marker: Marker, m: Job) {
    this.selectedMarker.emit(m.id);
  }

  constructor() {}

  ngOnInit() {
    this.calcMapCenter();
  }
}

interface Marker {
  _id: number;
  lat: number;
  lng: number;
  label?: string;
}
