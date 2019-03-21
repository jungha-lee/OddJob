import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LocationService } from 'src/app/services/location.service';
import { Job } from '../../models/job';
import { Location } from '../../models/location';
import { User } from 'src/app/models/user';

@Component({
  selector: 'post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.css']
})
export class PostJobFormComponent implements OnInit {
  newJob: Job;
  newLocation: Location;

  @Input() jobData = {title: '', description: '', jobPic: '', owner: null, price: 0, date: null};
  @Input() locationData = {id: null, street: '', zipCode: '', city: '', country: '', lat: null, lng: null};

  constructor(private jobService: JobService, private locationService: LocationService) {}

  ngOnInit() {
  }

  postJob(): void {
    this.locationService.postLocation(this.locationData).subscribe(data => {
      this.locationService.getLocation(data.id).subscribe(loc => {this.newLocation = loc;
        this.newJob = new Job(null, this.jobData.title, this.jobData.description, this.newLocation, this.jobData.jobPic, null, this.jobData.price, null);
          this.jobService.postJob(this.newJob).subscribe(data => {alert('Job posted!');
          }, error => {console.log(error);
          });
        });
    });
  }
}