import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: User;
  constructor() {
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
  }
}
