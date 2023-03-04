import { toast } from 'react-toastify';
import { ActionTypes } from '../../constants/ActionTypes';
import api from '../../utils/api';

const addToFavoriteActionCreator = (favorite) => ({
  type: ActionTypes.ADD_FAVORITE_POKEMON,
  payload: {
    favorite,
  },
});

const asyncAddToFavorite = (id) => async (dispatch) => {
  try {
    const favorite = await api.getDetailPokemon(id);
    dispatch(addToFavoriteActionCreator(favorite));
  } catch (err) {
    toast.error(err?.message);
  }
};

export {
  addToFavoriteActionCreator,
  asyncAddToFavorite,
};
