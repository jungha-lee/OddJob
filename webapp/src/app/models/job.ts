import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';
import { Location } from '../models/location';
import { User } from './user';

export class Job {
  id: number;
  title: string;
  description: string;
  location: Location;
  jobPic: string;
  ownerId: User;
  price: number;
  date: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    location: Location,
    jobPic: string,
    ownerId: User,
    price: number,
    date: Date = new Date()
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.location = location;
    this.jobPic = jobPic;
    this.ownerId = ownerId;
    this.price = price;
    this.date = date;
  }
}
