import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Job } from './../../models/job';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  id = 4;
  service: UserService;
  user: User;
  jobsOwned: Job[];
  jobsApplied: Job[];

  constructor(service: UserService) {
    this.service = service;
   }

  ngOnInit() {
    this.service.getUser(this.id).subscribe(user => {this.user = user; console.log(user); });
    this.service.getJobsOwnedByUser(this.id).subscribe(data => {this.jobsOwned = data; console.log(data); });
  }

}
