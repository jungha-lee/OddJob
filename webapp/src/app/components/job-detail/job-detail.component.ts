import { ApplicationService } from './../../services/application.service';
import { Application } from './../../models/application';
import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job';
import { User } from 'src/app/models/user';

@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  @Input() job: Job;
  @Input() isDetailPage: boolean = false;

  applicationService: ApplicationService;
  application: Application;
  user: User;
  isOwnedByLoggedInUser = false;

  constructor(service: ApplicationService) {
    this.applicationService = service;
  }


  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('authenticatedUser'));
    if (this.user.id === this.job.ownerId.id) {
      this.isOwnedByLoggedInUser = true;
    }
  }

  saveJob() {
    console.log('Application posted');
    this.application = new Application(null, this.job, this.user, null, null);
    console.log(this.application);
    this.applicationService.postApplication(this.application).subscribe(user => console.log());
  }

}
