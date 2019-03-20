import { Component, OnInit } from '@angular/core';
import { JobCardService } from '../../services/job-card.service';
import { Job } from '../../models/job';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  service: JobCardService;
  public jobs: Job[];

  constructor(injectedService: JobCardService) {
      this.service = injectedService;
   }

  ngOnInit() {
    this.service.getJobs().subscribe(jobs => {this.jobs = jobs; console.log(jobs[1]); });
  }

}
