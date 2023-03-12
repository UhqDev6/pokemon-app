import { ActionTypes } from '../../constants/ActionTypes';

const setFilteredByTypeActionCreator = (type) => ({
  type: ActionTypes.SET_FILTERED_BY_TYPE,
  payload: {
    type,
  },
});

export {
  setFilteredByTypeActionCreator,
};
