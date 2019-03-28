import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoggedInUserService } from 'src/app/services/logged-in-user.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: User;
  subscription: Subscription;

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private loggedInUserService: LoggedInUserService) { 
      this.subscription = this.loggedInUserService.getUser().subscribe(user => { this.user = user; console.log(user) });
    }

  ngOnInit() {
    if (this.authenticationService.getAuthenticatedUsername) {
      this.user = JSON.parse(sessionStorage.getItem("authenticatedUser"));
    }
  }

}
