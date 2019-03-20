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

  sendDataToParent(){
    this.output.emit(document.getElementById('textbox').value);
  }

}
