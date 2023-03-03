import { toast } from 'react-toastify';
import { ActionTypes } from '../../constants/ActionTypes';
import api from '../../utils/api';

const receivePokemonDetailActionCreator = (pokemonDetail) => ({
  type: ActionTypes.RECEIVE_POKEMONS_DETAIL,
  payload: {
    pokemonDetail,
  },
});

const clearPokemonDetailActionCreator = () => ({
  type: ActionTypes.CLEAR_POKEMON_DETAIL,
});

const asyncReceivePokemonDetail = (id) => async (dispatch) => {
  try {
    dispatch(clearPokemonDetailActionCreator());
    const pokemonDetail = await api.getDetailPokemon(id);
    dispatch(receivePokemonDetailActionCreator(pokemonDetail));
  } catch (err) {
    toast.error(err?.message);
  }
};

export {
  receivePokemonDetailActionCreator,
  clearPokemonDetailActionCreator,
  asyncReceivePokemonDetail,
};
