export enum GlobalActionTypes {
  // LoadCriterionTypes = '[Global] LoadCriterionTypes',
  // LoadCriterionResults = '[Global] LoadCriterionResults',

  LoadAgencies = '[Global] LoadAgencies',
  LoadMissionTypes = '[Global] LoadMissionTypes',
  LoadStatusTypes = '[Global] LoadStatusTypes',
  LoadLaunches = '[Global] LoadLaunches'
}

export interface Action {
  readonly type: GlobalActionTypes;
  readonly payload: any;
}

// export class LoadCriterionTypes implements Action {
//   public readonly type = GlobalActionTypes.LoadCriterionTypes;
//   constructor(public readonly payload: any[]) {}
// }

// export class LoadCriterionResults implements Action {
//   public readonly type = GlobalActionTypes.LoadCriterionResults;
//   constructor(public readonly payload: any[]) {}
// }

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

export type GlobalActions =
  // LoadCriterionTypes |
  // LoadCriterionResults |
  LoadAgencies |
  LoadMissionTypes |
  LoadStatusTypes |
  LoadLaunches;
