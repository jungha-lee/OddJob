import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';
import { User } from './user';

export class Job {
  constructor(
    id: number,
    title: string,
    description: string,
    location: Location,
    jobPic: string,
    owner: User,
    price: number,
    date: Date = new Date()
  ) { }
}
