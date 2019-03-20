import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  service: UserService;
  user: User;

  constructor(private injectedService: UserService) {
      this.service = injectedService;
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
  }

  register() {
  }

}
