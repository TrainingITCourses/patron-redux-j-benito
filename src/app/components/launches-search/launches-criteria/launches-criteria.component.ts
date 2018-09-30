import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LaunchesService } from 'app/services';
import { CriterionType, IdValueType, Criterion, CriterionTypes } from 'app/models';
import { BehaviorSubject, forkJoin } from 'rxjs';

import { GlobalStore, GlobalSlideTypes } from 'app/store/global-store.state';
import { LoadAgencies, LoadMissionTypes, LoadStatusTypes } from 'app/store/global-store.actions';

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {
  @Output() public launchCriterionChange = new EventEmitter<Criterion>();

  public criterionType: CriterionType;
  public isLoaded: boolean;
  // public criterionResults: IdValueType[] = [];
  public criterionResults$: BehaviorSubject<IdValueType[]> = new BehaviorSubject([]);

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
        this.assignCriterionResults(agencies);
        break;

      case CriterionTypes.MissionTypes:
        this.launchesService.getMissionTypes().subscribe((missionTypes) => {
          this.assignCriterionResults(missionTypes);
        });
        break;

      case CriterionTypes.StatusTypes:
        this.launchesService.getStatusTypes().subscribe((statusTypes) => {
          this.assignCriterionResults(statusTypes);
        });
        break;
    }
    this.launchCriterionChange.emit();
  }

  private assignCriterionResults(results: any[]): void {
    const criterionResults = [];
    results.forEach((elem) => {
      criterionResults.push({
        id: elem.id,
        value: elem.name
      });
    });
    this.criterionResults$.next(criterionResults);
  }

  onCriterionResultChange(criterionResultId: string) {
    this.launchCriterionChange.emit({
      type: this.criterionType,
      id: Number(criterionResultId)
    });
  }

}
