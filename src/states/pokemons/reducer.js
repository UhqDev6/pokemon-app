import { ActionTypes } from '../../constants/ActionTypes';

const pokemonsReducer = (pokemons = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POKEMONS:
      return action.payload.pokemons;
    default:
      return pokemons;
  }
};

export default pokemonsReducer;
