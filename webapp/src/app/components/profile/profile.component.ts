import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';
import { User } from './../../models/user';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  service: UserService;

  updateUser() {
    this.service.register(this.user).subscribe(user => console.log(user.firstName + ' updated'));
  }

  constructor(service: UserService) {
    this.service = service;
  }

  ngOnInit() {
  }

}
