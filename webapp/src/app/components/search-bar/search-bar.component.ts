import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  sendDataToParent() {
    let search = document.getElementById('textbox') as HTMLInputElement ;
    this.output.emit(search.value);
  }
}
