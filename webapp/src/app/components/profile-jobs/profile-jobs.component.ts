import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-jobs',
  templateUrl: './profile-jobs.component.html',
  styleUrls: ['./profile-jobs.component.css']
})
export class ProfileJobsComponent implements OnInit {

  @Input() jobsOwned: Job[];

  constructor() {
  }

  ngOnInit() {
  }

}
