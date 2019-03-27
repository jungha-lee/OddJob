import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/models/job';
import axios from 'axios';
import { LocationService } from 'src/app/services/location.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  user: User;
  id: number;
  job: Job;
  completeAddress;
  string;
  incompleteAddress = false;
  options = {
    componentRestrictions: { country: 'se' }
  };

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  constructor(private route: ActivatedRoute,
              private jobService: JobService,
              private locationService: LocationService,
              private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJob(this.id).subscribe(
      data => {(this.job = data); this.user = JSON.parse(sessionStorage.getItem('authenticatedUser'))},
      err => console.error(err),
      () => this.userCheck())
  }

  userCheck() {
    if (this.job.ownerId.id !== this.user.id) {
      this.router.navigate(['/jobs/', this.job.id]);
    } else {
      console.log('Jobowner may delete job.');
    }
  }

  // --------Autocomplete address function -> assigning location vars values upon change in address field------------------
  handleAddressChange(event) {
    if (event.address_components.length === 5) {
      this.job.location.street = event.address_components[0].long_name;
      this.job.location.zipCode = null;
      this.job.location.city = event.address_components[2].long_name;
      this.job.location.country = event.address_components[4].long_name;
      this.job.location.lng = event.geometry.viewport.ga.j;
      this.job.location.lat = event.geometry.viewport.ma.j;
      this.completeAddress = event.formatted_address;
      document.getElementById("invalidAddress").style.display = "none";
      document.getElementById("validAddress").style.display = "inline-block";
      this.incompleteAddress = false;
    } else if (event.address_components.length === 7) {
      this.job.location.street = event.address_components[1].long_name + " " + event.address_components[0].long_name;
      this.job.location.zipCode = event.address_components[6].long_name;
      this.job.location.city = event.address_components[3].long_name;
      this.job.location.country = event.address_components[5].long_name;
      this.job.location.lng = event.geometry.viewport.ga.j;
      this.job.location.lat = event.geometry.viewport.ma.j;
      this.completeAddress = event.formatted_address;
      document.getElementById("invalidAddress").style.display = "none";
      document.getElementById("validAddress").style.display = "inline-block";
      this.incompleteAddress = false;
    } else {
      document.getElementById("invalidAddress").style.display = "inline-block";
      document.getElementById("validAddress").style.display = "none";
      this.incompleteAddress = true;
    }
    console.log(this.job);
  }

  uploadPicture() {
    console.log('uploadPicture()');
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/linusaxel/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'oddjob';
    const target = event.target as HTMLInputElement;
    const file = target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
      .then(res => {
        console.log(res.data.secure_url);
        this.job.jobPic = res.data.secure_url;
      })
      .catch(err => {
        console.log(err);
      });
    }

  deleteJob() {
    this.jobService.delete(this.job.id).subscribe(
      res => console.log('job id: ' + this.job.id + ' was deleted.'),
      err => console.error(err));
    document.getElementById('hidden2').style.display = 'block';
    this.sleep(1500).then(() => {
      this.router.navigate(['/profile']);
    });
  }

  submit() {
    this.locationService.postLocation(this.job.location).subscribe(
      res => {this.jobService.postJob(this.job).subscribe(
        data => console.log(this.job.title + ' with id: ' + this.job.id + ' was updated.'))}
        );
    document.getElementById('hidden').style.display = 'block';
    console.log(document.getElementById('hidden'));
    this.sleep(1500).then(() => {
      this.router.navigate(['/jobs/', this.job.id]);
    });
  }
}
