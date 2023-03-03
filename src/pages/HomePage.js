/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/atoms/Card';
import SpinnerLoading from '../components/atoms/SpinnerLoading';
import PokemonList from '../components/moleculas/PokemonList';
import { asyncPokemons } from '../states/pokemons/action';

function HomePage() {
  const {
    pokemons = [],
  } = useSelector((states) => states);
  const [isLoading, setIsloading] = useState(true);

  console.log(pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPokemons());
    setIsloading(false);
  }, [dispatch]);
  return (
    <div className="p-5">
      {
        isLoading ? (
          <SpinnerLoading />
        ) : (
          pokemons.map((pokemon) => (
            <div className="flex justify-center">
              <Card>
                <PokemonList pokemon={pokemon} key={pokemon.id} isLoading={isLoading} />
              </Card>
            </div>
          ))
        )
      }
    </div>
  );
}

export default HomePage;
