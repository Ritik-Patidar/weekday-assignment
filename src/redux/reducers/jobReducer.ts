import { JobActionType } from "../actionTypes/jobActionTypes";

export interface JobState {
  filters: any;
}

const initialState: JobState = {
  filters: {},
};

interface SetJobActionI {
  type: JobActionType.SET_FILTERS;
  payload: any;
}

export type JobActionsI = SetJobActionI;

const JobReducer = (state = initialState, action: any): JobState => {
  switch (action.type) {
    case JobActionType.SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default JobReducer;
