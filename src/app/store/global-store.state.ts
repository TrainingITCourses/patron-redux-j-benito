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
  private agencies$ = new BehaviorSubject<any>(this.state.agengies);
  private missionTypes$ = new BehaviorSubject<any>(this.state.missionTypes);
  private statusTypes$ = new BehaviorSubject<any>(this.state.statusTypes);
  private launches$ = new BehaviorSubject<any>(this.state.launches);
  private criterion$ = new BehaviorSubject<any>(this.state.criterion);

  constructor() {}

  public select$ = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.Agencies:
        return this.agencies$.asObservable();
      case GlobalSlideTypes.MissionTypes:
        return this.missionTypes$.asObservable();
      case GlobalSlideTypes.StatusTypes:
        return this.statusTypes$.asObservable();
      case GlobalSlideTypes.Launches:
        return this.launches$.asObservable();
      case GlobalSlideTypes.Criterion:
        return this.criterion$.asObservable();
    }
  }

  public selectSnapShot = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.Agencies:
        return [...this.state.agengies];
      case GlobalSlideTypes.MissionTypes:
        return [...this.state.missionTypes];
      case GlobalSlideTypes.StatusTypes:
        return [...this.state.statusTypes];
      case GlobalSlideTypes.Launches:
        return [...this.state.launches];
      case GlobalSlideTypes.Criterion:
        return {...this.state.criterion};
    }
  }

  public dispatch = (action: GlobalActions) => {
    console.log('dispatching...', action);
    this.state = globalStoreReducer(this.state, action);
    switch (action.type) {
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
      case GlobalActionTypes.LoadCriterion:
        this.criterion$.next(this.state.criterion ? {...this.state.criterion} : null);
        break;
    }
  }
}

export enum GlobalSlideTypes {
  Agencies = 'agencies',
  MissionTypes = 'missionTypes',
  StatusTypes = 'statusTypes',
  Launches = 'launches',
  Criterion = 'criterion'
}
