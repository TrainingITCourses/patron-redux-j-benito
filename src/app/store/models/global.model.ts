import { CriterionType } from 'app/models';

export interface Global {
    agengies: any[];
    missionTypes: any[];
    statusTypes: any[];
    launches: any[];
    criterion: CriterionType;
}

export const globalInitialState: Global = {
    agengies: [],
    missionTypes: [],
    statusTypes: [],
    launches: [],
    criterion: null
};
