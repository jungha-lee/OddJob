import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.css']
})
export class PostJobFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postJob() {
    console.log('Job posted');
  }

}
