import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {

  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

}
