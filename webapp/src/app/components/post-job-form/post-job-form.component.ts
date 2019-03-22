import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { JobService } from 'src/app/services/job.service';
import { LocationService } from 'src/app/services/location.service';
import { Job } from '../../models/job';
import { Location } from '../../models/location';
import { User } from 'src/app/models/user';
import { strictEqual } from 'assert';

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

  street: string;
  zipCode: string;
  city: string;
  country: string;
  lat: number;
  lng: number;

  options = {
    componentRestrictions: { country: 'se'}
  };

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
    });
  }

  handleAddressChange(event) {

    console.log(event);
    console.log(event.address_components[1].long_name );

    this.street = event.address_components[1].long_name + ' ' + event.address_components[0].long_name ;
    this.zipCode = event.address_components[6].long_name;
    this.city = event.address_components[2].long_name;
    this.country = event.address_components[5].long_name;
    this.lng = event.geometry.viewport.ga.j;
    this.lat = event.geometry.viewport.ma.j;
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
      this.street,
      this.zipCode,
      this.city,
      this.country,
      this.lat,
      this.lng
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
