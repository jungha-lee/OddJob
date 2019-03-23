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
<<<<<<< HEAD
  applicationService: ApplicationService;
  application: Application;
=======
  @Input() isDetailPage: boolean;
>>>>>>> 623848919e2dd318f76197c1ba8e29a3fcf2ce3c

  constructor(service: ApplicationService) {
    this.applicationService = service;
  }

<<<<<<< HEAD
  ngOnInit() {}

  saveJob() {
    console.log('Application posted');
    this.application = new Application(5, this.job, null, null, null);
    this.applicationService.postApplication(this.application).subscribe(user => console.log());
  }
=======

>>>>>>> 623848919e2dd318f76197c1ba8e29a3fcf2ce3c
}
