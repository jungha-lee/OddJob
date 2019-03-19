import { Component, OnInit } from '@angular/core';
import { JobcardService } from './services/jobcard.service';
import { Job } from './models/job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  service: JobcardService;
  public jobs: Job[];

  constructor(injectedService: JobcardService) {
    this.service = injectedService;
  }

  ngOnInit() {
    this.service.getJobs().subscribe(jobs => {this.jobs = jobs; console.log(jobs[1]); });
  }
}
