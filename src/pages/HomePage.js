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
    <div className="p-5 flex w-full mx-auto justify-center sm:justify-start">
      <div className="flex flex-wrap gap-5 justify-center">
        {
          isLoading ? (
            <SpinnerLoading />
          ) : (
            pokemons.map((pokemon) => (
              <div className="md=flex md:flex-row justify-center" key={pokemon.id}>
                <Card pokemon={pokemon}>
                  <PokemonList pokemon={pokemon} key={pokemon.id} isLoading={isLoading} />
                </Card>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

export default HomePage;
