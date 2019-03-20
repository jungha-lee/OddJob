import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/job';

@Component ({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

}
