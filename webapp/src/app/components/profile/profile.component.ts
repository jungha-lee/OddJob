import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from '../../services/user.service';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  @Input() user: User;
  service: UserService;
  selectedFile = File;

  constructor(service: UserService) {
    this.service = service;
  }


  updateUser() {
    this.user.profilePic = (document.getElementById('pic') as HTMLImageElement).src;
    console.log(this.user);
    this.service.register(this.user).subscribe(user => console.log(user + ' updated'));
  }

  updateUserPicture(url: string) {
    this.user.profilePic = url;
    this.updateUser();
  }

  ngOnInit() {
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





}
