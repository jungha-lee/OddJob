import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-profile-jobs',
  templateUrl: './profile-jobs.component.html',
  styleUrls: ['./profile-jobs.component.css']
})
export class ProfileJobsComponent implements OnInit {

  @Input() jobsOwned: Job[];
  @Input() jobsApplied: Job[];

  constructor() {
  }

  ngOnInit() {
  }

}
