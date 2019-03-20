import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

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
    let searchBar = document.getElementById('userInput');
    let userInput = searchBar.innerHTML;

/*     @Output() sendUserInput: string = new EventEmitter();
 */
    console.log('Hiya');
    console.log(userInput);
  }

}
