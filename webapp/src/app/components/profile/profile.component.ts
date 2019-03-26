import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from '../../services/user.service';
import axios from 'axios';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  @Input() user: User;
  service: UserService;
  selectedFile = File;
  userPic: string;
  router: Router;
  showChangePassword = false;

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  constructor(
    private authenticationService: AuthenticationService,
    service: UserService,
    private r: Router){
    this.service = service;
    this.router = r;
  }

  updateUser() {
    this.user.profilePic = (document.getElementById('pic') as HTMLImageElement).src;
    console.log(this.user);
    this.service.update(this.user).subscribe(user => console.log(user + ' updated'));

    /* Update user in session */
    sessionStorage.setItem('authenticatedUser', JSON.stringify(this.user));
    document.getElementById('hidden').style.display = 'block';
    this.sleep(1000).then(() => {
      location.reload();
    });
    
  }

  ngOnInit() {
    this.userPic = this.user.profilePic;
    var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/linusaxel/upload';
    var CLOUDINARY_UPLOAD_PRESET = 'oddjob';

    var picture = document.getElementById('pic') as HTMLImageElement;
    var fileUpload = document.getElementById('file-upload');

    fileUpload.addEventListener('change', function() {
      let target = event.target as HTMLInputElement;
      let file = target.files[0];

      var formData = new FormData();

      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
      }).then(function(res) {
        console.log(formData);
        console.log(res);
        console.log(res.data.secure_url);
        picture.src = res.data.secure_url;
      }).catch(function(err) {
        console.log('is this happenin?');
        console.log(err);
      });

    });
  }

  toggleChangePassword() {
    this.showChangePassword = !this.showChangePassword;
  }





}
