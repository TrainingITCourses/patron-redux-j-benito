export interface Global {
    launchesCriteria: {
        criterionTypes: any[];
        criterionResults: any[];
    };
    launches: any[];
}

export const globalInitialState: Global = {
    launchesCriteria: {
        criterionTypes: [],
        criterionResults: []
    },
    launches: []
};
