import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-sort',
  templateUrl: './toggle-sort.component.html',
  styleUrls: ['./toggle-sort.component.css']
})
export class ToggleSortComponent implements OnInit {
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sortToggleEventHandler(event) {
    
    this.valueChange.emit(event);
    console.log('event',this.valueChange)
  }
}


