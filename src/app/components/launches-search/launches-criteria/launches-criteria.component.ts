import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'app/services';
import { CriterionType, Criterion, CriterionTypes } from 'app/models';
import { BehaviorSubject, forkJoin } from 'rxjs';

import { GlobalStore, GlobalSlideTypes } from 'app/store/global-store.state';
import { LoadAgencies, LoadMissionTypes, LoadStatusTypes, LoadCriterion } from 'app/store/global-store.actions';

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {
  public criterionType: CriterionType;
  public isLoaded: boolean;
  public criterionResults$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private launchesService: LaunchesService,
              private global: GlobalStore) { }

  ngOnInit() {
    forkJoin(
      this.launchesService.getAgencies(),
      this.launchesService.getMissionTypes(),
      this.launchesService.getStatusTypes()
    )
    .subscribe(([agencies, missionTypes, statusTypes]) => {
      this.global.dispatch(new LoadAgencies(agencies));
      this.global.dispatch(new LoadMissionTypes(missionTypes));
      this.global.dispatch(new LoadStatusTypes(statusTypes));
      this.isLoaded = true;
    });
  }

  onCriterionTypeChange(criterionType: CriterionType) {
    this.criterionType = criterionType;

    switch (criterionType) {
      case CriterionTypes.Agencies:
        const agencies = this.global.selectSnapShot(GlobalSlideTypes.Agencies);
        this.criterionResults$.next(agencies);
        break;

      case CriterionTypes.MissionTypes:
        const missionTypes = this.global.selectSnapShot(GlobalSlideTypes.MissionTypes);
        this.criterionResults$.next(missionTypes);
        break;

      case CriterionTypes.StatusTypes:
        const statusTypes = this.global.selectSnapShot(GlobalSlideTypes.StatusTypes);
        this.criterionResults$.next(statusTypes);
        break;
    }
    this.global.dispatch(new LoadCriterion(null));
  }

  onCriterionResultChange(criterionResultId: string) {
    this.global.dispatch(
      new LoadCriterion({
        type: this.criterionType,
        id: Number(criterionResultId)
      } as Criterion)
    );
  }

}
