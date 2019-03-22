import { ApplicationService } from "./../../services/application.service";
import { Application } from "./../../models/application";
import { Component, OnInit, Input } from "@angular/core";
import { Job } from "src/app/models/job";

@Component({
  selector: "job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.css"]
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;
  applicationService: ApplicationService;
  application: Application;

  constructor(service: ApplicationService) {
    this.applicationService = service;
  }

  ngOnInit() {}

  saveJob() {
    console.log('Application posted');
    this.application = new Application(5, this.job, null, null, null);
    this.applicationService.postApplication(this.application).subscribe(user => console.log());
  }
}
