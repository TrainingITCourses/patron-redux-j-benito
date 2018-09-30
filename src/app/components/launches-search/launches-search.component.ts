import { Component, OnInit } from '@angular/core';
import { Criterion } from 'app/models';
import { LaunchesService } from 'app/services';

import { LoadLaunches } from 'app/store/global-store.actions';
import { GlobalStore, GlobalSlideTypes } from 'app/store/global-store.state';
import { CriterionTypes } from 'app/models';

@Component({
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.scss']
})
export class LaunchesSearchComponent implements OnInit {
  private launches: any[];
  public filteredLaunches: any[] = [];

  constructor(private launchesService: LaunchesService,
              private global: GlobalStore) { }

  ngOnInit() {
    this.launchesService
      .getLaunches()
      .subscribe((launches) => {
        this.global.dispatch(new LoadLaunches(launches));
    });

    this.global
      .select$(GlobalSlideTypes.Launches)
      .subscribe(launches => {
        this.launches = launches;
      });

    this.global
      .select$(GlobalSlideTypes.Criterion)
      .subscribe(criterion => {
        this.launchCriterionChange(criterion);
      });
  }

  private launchCriterionChange(criterion: Criterion) {

    /* If not criterion, clean list */
    if (!criterion) {
      this.filteredLaunches = [];
      return;
    }

    switch (criterion.type) {

      /* Filter by status types */
      case CriterionTypes.StatusTypes:
        this.filteredLaunches = this.launches.filter(
          launch => launch.status === criterion.id
        );
        break;

      /* Filter by agencies */
      case CriterionTypes.Agencies:
        this.filteredLaunches = this.launches.filter(
          launch => (
            (launch.rocket.agencies ? launch.rocket.agencies.some(agency => agency.id === criterion.id) : false) ||
            (launch.missions ? launch.missions.some(mission => (
              mission.agencies ? mission.agencies.some(agency => agency.id === criterion.id) : false)) : false) ||
            (launch.location.pads ? launch.location.pads.some(pad => (
              pad.agencies ? pad.agencies.some(agency => agency.id === criterion.id) : false)) : false)
          )
        );
        break;

      /* Filter by mission types */
      case CriterionTypes.MissionTypes:
        this.filteredLaunches = this.launches.filter(
          launch => launch.missions.some(mission => mission.type === criterion.id)
        );
        break;
    }
  }
}
