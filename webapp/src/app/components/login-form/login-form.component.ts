import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { LoggedInUserService } from 'src/app/services/logged-in-user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin = false;
  errorMessage ="Invalid credentials"

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private loggedInUserService: LoggedInUserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  handleAuthLogin() {
    this.authenticationService.executeAuthenticationService(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        data => {
          this.userService.getUserByEmail(this.loginForm.value.email).subscribe(
            user => {
              this.loggedInUserService.setUser(user);
              this.router.navigate(['/profile'])
            });
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}





