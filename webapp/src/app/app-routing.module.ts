import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { JobDetailPageComponent } from './components/job-detail-page/job-detail-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { PostJobPageComponent } from './components/post-job-page/post-job-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditJobComponent } from './components/edit-job/edit-job.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'logout', component: LoginPageComponent, canActivate:[AuthGuardService]},
  { path: 'register', component: RegisterPageComponent},
  { path: 'jobs/:id', component: JobDetailPageComponent},
  { path: 'editjob/:id', component: EditJobComponent},
  { path: 'profile', component: ProfilePageComponent, canActivate:[AuthGuardService]},
  { path: 'postjob', component: PostJobPageComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
