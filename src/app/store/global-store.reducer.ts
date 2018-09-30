import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { Global, globalInitialState } from './models/global.model';

export function globalStoreReducer(
  state = globalInitialState,
  action: GlobalActions
): Global {
  const result = { ...state };
  switch (action.type) {
    case GlobalActionTypes.LoadAgencies:
      result.agengies = action.payload;
      break;
    case GlobalActionTypes.LoadMissionTypes:
      result.missionTypes = action.payload;
      break;
    case GlobalActionTypes.LoadStatusTypes:
      result.statusTypes = action.payload;
      break;
    case GlobalActionTypes.LoadLaunches:
      result.launches = action.payload;
      break;
    case GlobalActionTypes.LoadCriterion:
      result.criterion = action.payload;
      break;
  }
  return result;
}
