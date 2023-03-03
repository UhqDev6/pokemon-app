import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemons/reducer';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export default store;
