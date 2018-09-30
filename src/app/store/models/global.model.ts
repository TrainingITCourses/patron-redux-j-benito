import { Criterion } from 'app/models';

export interface Global {
    agengies: any[];
    missionTypes: any[];
    statusTypes: any[];
    launches: any[];
    criterion: Criterion;
}

export const globalInitialState: Global = {
    agengies: [],
    missionTypes: [],
    statusTypes: [],
    launches: [],
    criterion: null
};
