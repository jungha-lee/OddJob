import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'job-detail-page',
  templateUrl: './job-detail-page.component.html',
  styleUrls: ['./job-detail-page.component.css'],
})

export class JobDetailPageComponent implements OnInit {
  selectedJob: Job;
  id: number;
  constructor(private jobService: JobService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJob(this.id).subscribe(data => {
      this.selectedJob = data;
    });
  }
}
