import { configureStore } from '@reduxjs/toolkit';
import pokemonDetailReducer from './pokemonDetail/reducer';
import pokemonsReducer from './pokemons/reducer';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    pokemonDetail: pokemonDetailReducer,
  },
});

export default store;
