import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.css']
})
export class ApplicantsListComponent implements OnInit {
  @Input() job: Job;
  applicants: Application[];
  isEmpty: boolean;

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.getApplicationsByJobId(this.job.id).subscribe(
      data => {this.applicants = data; console.log(data)},
      err => console.error(err),
      () => {if (this.applicants.length < 1) {
                this.isEmpty = true;
              } else {
                this.isEmpty = false;
              }
            }
      );
  }

}
