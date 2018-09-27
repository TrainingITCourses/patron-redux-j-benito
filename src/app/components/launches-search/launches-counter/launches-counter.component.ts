import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launches-counter',
  templateUrl: './launches-counter.component.html',
  styleUrls: ['./launches-counter.component.scss']
})
export class LaunchesCounterComponent implements OnInit {
  @Input() public filteredLaunches: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
