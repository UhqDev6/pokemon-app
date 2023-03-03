import React from 'react';
import PropTypes from 'prop-types';
import SpinnerLoading from '../atoms/SpinnerLoading';

function PokemonList(props) {
  const {
    pokemon,
    isLoading,
  } = props;
  return (
    <div className="">
      {
        isLoading ? (
          <SpinnerLoading />
        ) : (
          <>
            <div className="flex justify-center mx-auto mt-10 antialiased text-lg font-semibold uppercase">
              <h1>{pokemon.name}</h1>
            </div>
            <div className="flex justify-center mx-auto antialiased font-light text-sm capitalize">
              <p>{`#${pokemon.id}`}</p>
            </div>
            <div className=" flex justify-center mx-auto mt-5">
              <img className="w-32 h-24" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.sprites.other.dream_world.front_default} />
            </div>
            <div className="flex justify-center mx-auto antialiased font-light text-sm mt-4">
              {
                pokemon.types.map((type) => (
                  <span key={type.type.url} className={`${type.type.name}  rounded-full p-2 text-xs w-16 items-center ml-1 mr-1`}>
                    <p className="flex justify-center text-white font-bold">{`${type.type.name}`}</p>
                  </span>
                ))
              }
            </div>
          </>
        )
      }
    </div>
  );
}

PokemonList.propTypes = {
  pokemon: PropTypes.func,
  isLoading: PropTypes.bool,
};

PokemonList.defaultProps = {
  pokemon: [],
  isLoading: false,
};

export default PokemonList;
