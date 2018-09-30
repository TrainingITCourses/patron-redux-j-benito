export enum CriterionTypes {
  Agencies = 'agencies',
  MissionTypes = 'types',
  StatusTypes = 'status'
}

export class Criterion {
  type: CriterionType;
  id: number;
}

export type CriterionType =
  CriterionTypes.Agencies |
  CriterionTypes.MissionTypes |
  CriterionTypes.StatusTypes;
