import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  id = 1;
  service: UserService;
  user: User;

  constructor(service: UserService) {
    this.service = service;
   }

  ngOnInit() {
    this.service.getUser(this.id).subscribe(user => {this.user = user; console.log(user); });
  }

}
