import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job';

@Component ({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job;

  @Output() output = new EventEmitter<Job>();

  constructor() { }

  ngOnInit() {
  }

  selectJobCard(){
    console.log('alksdfj');
    console.log(this.job);
    this.output.emit(this.job);
  }

}
