import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { Job } from 'src/app/models/job';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  @Input() user: User;
  @Input() job: Job;
  application: Application;
  applicationSubmitted = false;


  constructor(
    private applicationService: ApplicationService,
  ) { }

  ngOnInit() {
  }

  onSubmitApplication() {
    if (!this.applicationSubmitted) {
      let applicantMsg = (document.getElementById('application-message') as HTMLInputElement).value;

      this.application = new Application(null, this.job, this.user, null, applicantMsg);

      console.log(this.application);

      this.applicationService
        .postApplication(this.application)
        .subscribe(user => console.log());
      location.reload();
      this.applicationSubmitted = true;
    } else {
      console.log('Application already sent!');
    }
  }

}
