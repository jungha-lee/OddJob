import { Component, OnInit } from '@angular/core';
import { JobcardService } from './services/jobcard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  service: JobcardService;
  private data: string;

  constructor(injectedService: JobcardService) {
    this.service = injectedService;
  }

  ngOnInit() {
    this.service.getJobs().subscribe(data => {this.data = data; console.log(data)});

  }
}