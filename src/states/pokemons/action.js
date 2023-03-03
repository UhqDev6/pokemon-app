import { toast } from 'react-toastify';
import { ActionTypes } from '../../constants/ActionTypes';
import api from '../../utils/api';

const receivePokemonsActionCreator = (pokemons) => ({
  type: ActionTypes.RECEIVE_POKEMONS,
  payload: {
    pokemons,
  },
});

const asyncPokemons = () => async (dispatch) => {
  try {
    const pokemons = await api.getAllPokemon();
    console.log(pokemons);
    dispatch(receivePokemonsActionCreator(pokemons));
  } catch (err) {
    toast.error(err?.message);
  }
};

export {
  receivePokemonsActionCreator,
  asyncPokemons,
};
