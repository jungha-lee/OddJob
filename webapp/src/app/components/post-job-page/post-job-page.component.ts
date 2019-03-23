import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'post-job-page',
  templateUrl: './post-job-page.component.html',
  styleUrls: ['./post-job-page.component.css']
})
export class PostJobPageComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
