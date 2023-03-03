import { ActionTypes } from '../../constants/ActionTypes';

const pokemonDetailReducer = (pokemonDetail = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POKEMONS_DETAIL:
      return action.payload.pokemonDetail;
    case ActionTypes.CLEAR_POKEMON_DETAIL:
      return null;
    default:
      return pokemonDetail;
  }
};

export default pokemonDetailReducer;
