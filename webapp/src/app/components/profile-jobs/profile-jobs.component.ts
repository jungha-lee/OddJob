import { Component, OnInit } from '@angular/core';
import { JobService } from './../../services/job.service';

@Component({
  selector: 'app-profile-jobs',
  templateUrl: './profile-jobs.component.html',
  styleUrls: ['./profile-jobs.component.css']
})
export class ProfileJobsComponent implements OnInit {
  service: JobService;

  constructor(service: JobService) {
    this.service = service;
  }

  ngOnInit() {
  }

}
