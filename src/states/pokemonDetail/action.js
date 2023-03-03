import { ActionTypes } from '../../constants/ActionTypes';

const receivePokemonActionCreator = (pokemonDetail) => ({
  type: ActionTypes.RECEIVE_POKEMONS_DETAIL,
  payload: {
    pokemonDetail,
  },
});

export {
  receivePokemonActionCreator,
};
