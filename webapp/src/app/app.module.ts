import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { HttpClientModule } from '@angular/common/http';

import { JobCardService } from './services/job-card.service';
import { UserService } from './services/user.service';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { JobDetailPageComponent } from './components/job-detail-page/job-detail-page.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostedJobsComponent } from './components/posted-jobs/posted-jobs.component';
import { SavedJobsComponent } from './components/saved-jobs/saved-jobs.component';
import { PostJobPageComponent } from './components/post-job-page/post-job-page.component';
import { PostJobFormComponent } from './components/post-job-form/post-job-form.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    SearchPageComponent,
    NavBarComponent,
    SearchBarComponent,
    JobDetailPageComponent,
    JobDetailComponent,
    ProfilePageComponent,
    ProfileComponent,
    PostedJobsComponent,
    SavedJobsComponent,
    PostJobPageComponent,
    PostJobFormComponent,
    RegisterPageComponent,
    RegisterFormComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobCardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
