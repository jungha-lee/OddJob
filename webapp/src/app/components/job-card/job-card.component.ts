import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job';
import { User } from 'src/app/models/user';

@Component ({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job;
  @Input() appId: number;
  @Output() output = new EventEmitter<Job>();
  user: User;
  guestUser: boolean = false;
  isOwnedByUser: boolean = false;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("authenticatedUser"));

    this.checkIfUserIsSignedIn();

    this.checkIfOwnedByUser();
  }

  selectJobCard() {
    this.output.emit(this.job);
  }

  checkIfOwnedByUser() {
    if(this.job.ownerId.id === this.user.id) {
      this.isOwnedByUser = true;
    }
  }

  checkIfUserIsSignedIn() {
    if (this.user === undefined || this.user === null) {
      this.user = {
        id: 100000000,
        email: "guestuser",
        password: "aaaaaa",
        firstName: "guest",
        lastName: "guestsson",
        phone: "0",
        profilePic: "",
        description: "string"
      };
      this.guestUser = true;
    } else {
      this.guestUser = false;
    }
  }

}
