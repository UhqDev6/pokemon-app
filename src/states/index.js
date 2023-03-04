import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorite/reducer';
import pokemonDetailReducer from './pokemonDetail/reducer';
import pokemonsReducer from './pokemons/reducer';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    pokemonDetail: pokemonDetailReducer,
    favorite: favoriteReducer,
  },
});

export default store;
