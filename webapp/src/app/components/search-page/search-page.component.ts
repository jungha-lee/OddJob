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
    console.log('1. init start');
    this.jobDataLoaded = false;
    this.service.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.jobDataLoaded = true;
      console.log('2. init end');
    });
  }

  searchMatches(job) {
    console.log('3. searchMatches start');
    this.searchedJobLoaded = false;
    const ifMatches: boolean =
      this.aContainsB(job.title, [this.userSearch]) ||
      this.aContainsB(job.description, [this.userSearch]) ||
      this.aContainsB(job.location.city, [this.userSearch]) ||
      this.aContainsB(job.location.country, [this.userSearch]);

    if (ifMatches) {
      if (this.searchedJobs.indexOf(job) === -1) {
        this.searchedJobs.push(job);
      }
    }
    console.log('4. searchMatches end');
    this.searchedJobLoaded = true;
    return ifMatches;
  }

  getSelectedJob($event) {
    this.selectedJob = $event;
    console.log(this.selectedJob);
  }

  getUserSearch($event) {
    this.userSearch = $event;
  }

  aContainsB(a, b) {
    return a.toLowerCase().includes(b) || a.includes(b);
  }
}
