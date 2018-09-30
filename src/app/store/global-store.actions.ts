import { Criterion, CriterionType } from 'app/models';

export enum GlobalActionTypes {
  LoadAgencies = '[Global] LoadAgencies',
  LoadMissionTypes = '[Global] LoadMissionTypes',
  LoadStatusTypes = '[Global] LoadStatusTypes',
  LoadLaunches = '[Global] LoadLaunches',
  LoadCriterion = '[Global] LoadCriterion'
}

export interface Action {
  readonly type: GlobalActionTypes;
  readonly payload: any;
}

export class LoadAgencies implements Action {
  public readonly type = GlobalActionTypes.LoadAgencies;
  constructor(public readonly payload: any[]) {}
}

export class LoadMissionTypes implements Action {
  public readonly type = GlobalActionTypes.LoadMissionTypes;
  constructor(public readonly payload: any[]) {}
}

export class LoadStatusTypes implements Action {
  public readonly type = GlobalActionTypes.LoadStatusTypes;
  constructor(public readonly payload: any[]) {}
}

export class LoadLaunches implements Action {
  public readonly type = GlobalActionTypes.LoadLaunches;
  constructor(public readonly payload: any[]) {}
}

export class LoadCriterion implements Action {
  public readonly type = GlobalActionTypes.LoadCriterion;
  constructor(public readonly payload: Criterion) {}
}

export type GlobalActions =
  LoadAgencies |
  LoadMissionTypes |
  LoadStatusTypes |
  LoadLaunches |
  LoadCriterion;
