import { Component, OnInit } from '@angular/core';
import { Criterion } from 'app/models';
import { LaunchesService } from 'app/services';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.scss']
})
export class LaunchesSearchComponent implements OnInit {
  private launches: any[];
  public filteredLaunches: any[] = [];
  // public filteredLaunches$: BehaviorSubject<any[]> = new BehaviorSubject(this.filteredLaunches);

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getLaunches().subscribe((launches) => {
      this.launches = launches;
    });
  }

  onLaunchCriterionChange(criterion: Criterion) {

    /* If not criterion, clean list */
    if (!criterion) {
      this.filteredLaunches = [];
      return;
    }

    /* Filter by status */
    if (criterion.type === 'status') {
      this.filteredLaunches = this.launches.filter(
        launch => launch.status === criterion.id
      );

    /* Filter by agencies */
    } else if (criterion.type === 'agencies') {
      this.filteredLaunches = this.launches.filter(
        launch => (
          (launch.rocket.agencies ? launch.rocket.agencies.some(agency => agency.id === criterion.id) : false) ||
          (launch.missions ? launch.missions.some(mission => (
            mission.agencies ? mission.agencies.some(agency => agency.id === criterion.id) : false)) : false) ||
          (launch.location.pads ? launch.location.pads.some(pad => (
            pad.agencies ? pad.agencies.some(agency => agency.id === criterion.id) : false)) : false)
        )
      );

    /* Filter by types */
    } else if (criterion.type === 'types') {
      this.filteredLaunches = this.launches.filter(
        launch => launch.missions.some(mission => mission.type === criterion.id)
      );
    }

    // this.filteredLaunches$.next(this.filteredLaunches);
  }
}
