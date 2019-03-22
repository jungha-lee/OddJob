import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  postJobForm: FormGroup;
  loading = false;
  submitted = false;

  newJob: Job;
  newLocation: Location;
  locationData: Location;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.postJobForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      jobPic: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],

      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    });
  }

  get f() {
    return this.postJobForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.postJobForm.invalid) {
      return;
    }

    this.loading = true;

    this.locationData = new Location(
      null,
      this.postJobForm.controls['street'].value,
      this.postJobForm.controls['zipCode'].value,
      this.postJobForm.controls['city'].value,
      this.postJobForm.controls['country'].value,
      this.postJobForm.controls['lat'].value,
      this.postJobForm.controls['lng'].value
    );

    this.locationService
      .postLocation(this.locationData)
      .subscribe(data => {
        this.locationService.getLocation(data.id).subscribe(loc => {
          this.newLocation = loc;
          this.newJob = new Job(
            null,
            this.postJobForm.controls['title'].value,
            this.postJobForm.controls['description'].value,
            this.newLocation,
            this.postJobForm.controls['jobPic'].value,
            null,
            this.postJobForm.controls['price'].value,
            null
          );
          this.jobService.postJob(this.newJob).subscribe(
            data => {
              alert('Job posted!');
            },
            error => {
              console.log(error);
            }
          );
        });
      });
  }
}