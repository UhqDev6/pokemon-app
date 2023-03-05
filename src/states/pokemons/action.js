import { toast } from 'react-toastify';
import { ActionTypes } from '../../constants/ActionTypes';
import api from '../../utils/api';

const receivePokemonsActionCreator = (pokemons) => ({
  type: ActionTypes.RECEIVE_POKEMONS,
  payload: {
    pokemons,
  },
});

const receiveLoadMorePokemonsActionCreator = (pokemons) => ({
  type: ActionTypes.RECEIVE_POKEMONS_MORE,
  payload: {
    pokemons,
  },
});

const asyncPokemons = (offset) => async (dispatch) => {
  try {
    const pokemons = await api.getAllPokemon(offset);
    console.log(pokemons);
    dispatch(receivePokemonsActionCreator(pokemons));
  } catch (err) {
    toast.error(err?.message);
  }
};

const asyncLoadMorePokemons = (offset) => async (dispatch) => {
  try {
    const pokemons = await api.getAllPokemon(offset);
    dispatch(receiveLoadMorePokemonsActionCreator(pokemons));
  } catch (err) {
    toast.error(err?.message);
  }
};

export {
  receivePokemonsActionCreator,
  asyncPokemons,
  receiveLoadMorePokemonsActionCreator,
  asyncLoadMorePokemons,
};
