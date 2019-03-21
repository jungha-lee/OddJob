import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from './services/job.service';
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
import { ProfileJobsComponent } from './components/profile-jobs/profile-jobs.component';


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
    RegisterFormComponent,
    ProfileJobsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JobService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
