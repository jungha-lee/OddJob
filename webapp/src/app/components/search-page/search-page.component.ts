import { Component, OnInit, Input } from "@angular/core";
import { JobService } from "../../services/job.service";
import { Job } from "../../models/job";
import { Directive } from "@angular/core";

@Component({
  selector: "search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  service: JobService;
  jobs: Job[];
  searchedJobs: Job[] = [];
  @Input() userInput: string;
  userSearch: string;
  selectedJob: Job;
  jobDataLoaded: boolean;
  searchedJobLoaded: boolean;

  constructor(injectedService: JobService) {
    this.service = injectedService;
  }

  ngOnInit() {
    this.jobDataLoaded = false;
    this.service.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.jobDataLoaded = true;
    });
  }

  searchMatches(search: string) {
    this.searchedJobLoaded = false;
    this.searchedJobs = [];
    console.log('1');

    for (let i = 0; i < this.jobs.length; i++) {
      if (this.aContainsB(this.jobs[i].title, search) ||
      this.aContainsB(this.jobs[i].description, search) ||
      this.aContainsB(this.jobs[i].location.city, search) ||
      this.aContainsB(this.jobs[i].location.country, search)) {
        this.searchedJobs.push(this.jobs[i]);
      }
    }

    this.selectedJob = this.searchedJobs[0];

    console.log('2');
    this.searchedJobLoaded = true;
    return this.searchedJobs;
  }

  getSelectedJob($event) {
    this.selectedJob = $event;
  }

  getUserSearch($event) {
    const untrimmedSearch =$event;
    this.userSearch = untrimmedSearch.trim();

    if (this.userSearch === 'all jobs') {
      this.searchedJobs = this.jobs;
      this.selectedJob = this.jobs[0];
    } else {
      this.searchedJobs = this.searchMatches(this.userSearch);
    }
  }

  aContainsB(a, b) {
    return a.toLowerCase().includes(b) || a.includes(b);
  }
}
