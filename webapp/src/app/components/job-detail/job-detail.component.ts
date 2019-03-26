import { ApplicationService } from "./../../services/application.service";
import { Application } from "./../../models/application";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Job } from "src/app/models/job";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.css"]
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;
  @Input() isDetailPage = false;

  application: Application;
  user: User;
  isOwnedByLoggedInUser = false;
  isAppliedByUser = false;
  currentApplication: Application;
  userApplications: Application[];
  guestUser: boolean = false;

  constructor(
    private applicationService: ApplicationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("authenticatedUser"));

    this.checkIfUserIsSignedIn();

    if (!this.guestUser) {
      this.userService.getJobAppliedByUser(this.user.id).subscribe(
        data => (this.userApplications = data),
        err => console.error(err),
        () =>
          this.userApplications.forEach(app => {
            if (app.jobId.id === this.job.id) {
              this.currentApplication = app;
              this.isAppliedByUser = true;
              console.log(this.isAppliedByUser + " for " + this.job.title);
            }
          })
      );
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

  saveJob() {
    console.log("Application posted");
    this.application = new Application(null, this.job, this.user, null, null);
    console.log(this.application);
    this.applicationService
      .postApplication(this.application)
      .subscribe(user => console.log());
    location.reload();
  }

  //Not working atm
  removeApplication() {
    console.log("removeApplication: " + this.currentApplication.id);
    this.applicationService
      .removeApplication(this.currentApplication.id)
      .subscribe(res => console.log(res), err => console.error(err));
  }
}
