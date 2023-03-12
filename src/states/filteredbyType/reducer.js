import { ActionTypes } from '../../constants/ActionTypes';

const filteredByTypeReducer = (filtered = '', action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_FILTERED_BY_TYPE: {
      if (action.payload.type === filtered) {
        return '';
      }
      return action.payload.type;
    }
    default:
      return filtered;
  }
};

export default filteredByTypeReducer;
