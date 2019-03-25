import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Job } from './../../models/job';
import { Application } from './../../models/application';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  service: UserService;
  user: User;
  jobsOwned: Job[];
  jobsApplied: Application[];

  constructor(service: UserService) {
    this.service = service;
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
    this.service.getJobsOwnedByUser(this.user.id).subscribe(data => {this.jobsOwned = data; console.log(data); });
    this.service.getJobAppliedByUser(this.user.id).subscribe(data => {this.jobsApplied = data; console.log(data); });
  }

}