import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

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
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  // handleLogin() {

  //   if (this.authenticationService.authenticate(this.loginForm.value.email, this.loginForm.value.password)) {
  //     this.router.navigate(["/profile"]);
  //     console.log("login");
  //   } else {
  //     console.log("login failed");
  //   }
  // }

  handleAuthLogin() {
    this.authenticationService.executeAuthenticationService(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        data => {
          console.log("login, getuserbyemail");
          this.userService.getUserByEmail(this.loginForm.value.email).subscribe(user => {sessionStorage.setItem('authenticatedUser', JSON.stringify(user)); this.router.navigate(['/profile'])})
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }
}


