import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.css']
})
export class PostJobFormComponent implements OnInit {
  @Input() jobData = {title: '', price: '', description: ''};

  constructor(private jobService: JobService) {}

  ngOnInit() {}

  postJob(): void {
    this.jobService.postJob(this.jobData).subscribe(data => {
      alert('Job posted!');
    });
  }
}