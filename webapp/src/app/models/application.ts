import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Job } from './job';
import { User } from './user';

export class Application {
  constructor(
    id: number,
    jobId: Job,
    applicantId: User,
    status: string,
    applicantMsg: string
  ) { }
}
