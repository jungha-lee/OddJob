import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Job } from './job';
import { User } from './user';

export class Application {
  id: number;
  jobId: Job;
  applicantId: User;
  status: string;
  applicantMsg: string;

  constructor(
    id: number,
    jobId: Job,
    applicantId: User,
    status: string,
    applicantMsg: string
  ) {
    this.id = id;
    this.jobId = jobId;
    this.applicantId = applicantId;
    this.status = status;
    this.applicantMsg = applicantMsg;
   }
}
