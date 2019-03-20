import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    var searchBar = document.getElementById('userInput');
    var userInput = searchBar.innerHTML;

    console.log('Hiya');
    console.log(userInput);
  }

}
