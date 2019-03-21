import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from '../../models/job';
import { LocationService } from 'src/app/services/location.service';
import { User } from 'src/app/models/user';
import { Location } from '../../models/location';

@Component({
  selector: 'post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.css']
})
export class PostJobFormComponent implements OnInit {
  @Input() jobData = {title: '', description: '', location: null, jobpic: '', owner: null, price: '', date: null};
  @Input() locationData = {id: null, street: '', zipCode: '', city: '', country: '', lat: null, lng: null};

  constructor(private jobService: JobService, private locationService: LocationService) {}

  ngOnInit() {
  }

  postJob(): void {

    this.locationService.postLocation(this.locationData).subscribe(data => {
      alert('Location added!');
    });
    console.log('before apply location');
    console.log(this.jobData);

    this.locationService.getLocation(1).subscribe(location => {this.jobData.location = location; });

    // this.jobData.location = new Location(null, this.locationData.street, this.locationData.zipCode,
    //   this.locationData.city, this.locationData.country, this.locationData.lng, this.locationData.lat);

    console.log('after apply location');
    console.log(this.jobData);

    this.jobService.postJob(this.jobData).subscribe(data => {
      alert('Job posted!');
    }, error => {console.log(error);
    });

  }
}



