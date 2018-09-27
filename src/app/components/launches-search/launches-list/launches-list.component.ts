import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss']
})
export class LaunchesListComponent implements OnInit {
  @Input() public filteredLaunches: any[];

  constructor() { }

  ngOnInit() {
  }

}
