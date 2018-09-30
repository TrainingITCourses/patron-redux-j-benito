import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalStoreReducer } from './global-store.reducer';
import { Global, globalInitialState } from './models/global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalStore {
  private state: Global = { ...globalInitialState };
  // private criterionTypes$ = new BehaviorSubject<any>(this.state.launchesCriteria.criterionTypes);
  // private criterionResults$ = new BehaviorSubject<any>(this.state.launchesCriteria.criterionResults);
  private agencies$ = new BehaviorSubject<any>(this.state.agengies);
  private missionTypes$ = new BehaviorSubject<any>(this.state.missionTypes);
  private statusTypes$ = new BehaviorSubject<any>(this.state.statusTypes);
  private launches$ = new BehaviorSubject<any>(this.state.launches);

  constructor() {}

  public select$ = (slice: GlobalSlideTypes) => {
    switch (slice) {
      // case GlobalSlideTypes.criterionTypes:
      //   return this.criterionTypes$.asObservable();
      // case GlobalSlideTypes.criterionResults:
      //   return this.criterionResults$.asObservable();
      case GlobalSlideTypes.Agencies:
        return this.agencies$.asObservable();
      case GlobalSlideTypes.MissionTypes:
        return this.missionTypes$.asObservable();
      case GlobalSlideTypes.StatusTypes:
        return this.statusTypes$.asObservable();
      case GlobalSlideTypes.Launches:
        return this.launches$.asObservable();
    }
  }

  public selectSnapShot = (slice: GlobalSlideTypes) => {
    switch (slice) {
      // case GlobalSlideTypes.criterionTypes:
      //   return [...this.state.launchesCriteria.criterionTypes];
      // case GlobalSlideTypes.criterionResults:
      //   return [...this.state.launchesCriteria.criterionResults];
      case GlobalSlideTypes.Agencies:
        return [...this.state.agengies];
      case GlobalSlideTypes.MissionTypes:
        return [...this.state.missionTypes];
      case GlobalSlideTypes.StatusTypes:
        return [...this.state.statusTypes];
      case GlobalSlideTypes.Launches:
        return [...this.state.launches];
    }
  }

  public dispatch = (action: GlobalActions) => {
    console.log('dispatching...', action);
    this.state = globalStoreReducer(this.state, action);
    switch (action.type) {
      // case GlobalActionTypes.LoadCriterionTypes:
      //   this.criterionTypes$.next([...this.state.launchesCriteria.criterionTypes]);
      //   break;
      // case GlobalActionTypes.LoadCriterionResults:
      //   this.criterionResults$.next([...this.state.launchesCriteria.criterionResults]);
      //   break;
      case GlobalActionTypes.LoadAgencies:
        this.agencies$.next([...this.state.agengies]);
        break;
      case GlobalActionTypes.LoadMissionTypes:
        this.missionTypes$.next([...this.state.missionTypes]);
        break;
      case GlobalActionTypes.LoadStatusTypes:
        this.statusTypes$.next([...this.state.statusTypes]);
        break;
      case GlobalActionTypes.LoadLaunches:
        this.launches$.next([...this.state.launches]);
        break;
    }
  }
}

export enum GlobalSlideTypes {
  // criterionTypes = 'criterionTypes',
  // criterionResults = 'criterionResults',
  Agencies = 'agencies',
  MissionTypes = 'missionTypes',
  StatusTypes = 'statusTypes',
  Launches = 'launches'
}
