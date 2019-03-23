import { ApplicationService } from "./../../services/application.service";
import { Application } from "./../../models/application";
import { Component, OnInit, Input } from "@angular/core";
import { Job } from "src/app/models/job";
import { User } from 'src/app/models/user';

@Component({
  selector: "job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.css"]
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;
  applicationService: ApplicationService;
  application: Application;
  user: User;

  constructor(service: ApplicationService) {
    this.applicationService = service;
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
  }

  saveJob() {
    console.log(this.user);
    console.log('Application posted');
    this.application = new Application(null, this.job, this.user, null, null);
    this.applicationService.postApplication(this.application).subscribe(user => console.log());
  }

}
