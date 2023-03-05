import { ActionTypes } from '../../constants/ActionTypes';

const favoriteReducer = (favorite = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE_POKEMON:
      return favorite.concat(action.payload.favorite);
    case ActionTypes.DELETE_FAVORITE_POKEMON:
      return favorite.filter((index) => index === action.payload.favorite);
    default:
      return favorite;
  }
};

export default favoriteReducer;
