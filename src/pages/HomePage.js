import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillBookmarkHeartFill, BsSliders, BsXLg } from 'react-icons/bs';
import Card from '../components/atoms/Card';
import SpinnerLoading from '../components/atoms/SpinnerLoading';
import PokemonList from '../components/moleculas/PokemonList';
import { asyncAddToFavorite } from '../states/favorite/action';
import { asyncPokemons } from '../states/pokemons/action';
import api from '../utils/api';
import FilteredBar from '../components/atoms/FilteredBar';
import Wrapper from '../components/atoms/Wrapper';

function HomePage() {
  const {
    pokemons = [],
  } = useSelector((states) => states);
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [offset, setOffSet] = useState(0);
  const [poke, setPoke] = useState([]);
  const [active, setActive] = useState(false);

  const handleAddFavorite = (key) => {
    dispatch(asyncAddToFavorite(key));
    navigate('/favorite');
  };

  const handleLoadMore = async () => {
    const results = await api.getAllPokemon(offset);
    setPoke([...poke, ...results]);
    setOffSet(offset + 10);
  };

  useEffect(() => {
    handleLoadMore();
    dispatch(asyncPokemons(offset));
    setIsloading(false);
  }, [dispatch]);
  return (
    <Wrapper>
      <div className="flex justify-end mr-10 gap-5">
        <Link to="/favorite">
          <div className="flex-none">
            <BsFillBookmarkHeartFill color="#9f60c5" />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setActive(!active)}
        >
          <div className="flex-none">
            {
              !active ? (
                <BsSliders color="#9f60c5" />
              ) : (
                <BsXLg color="#9f60c5" />
              )
            }
          </div>
        </button>
      </div>
      <div className={active ? 'block' : 'hidden'}>
        <FilteredBar />
      </div>
      <div className="p-5 flex w-full mx-auto justify-center sm:justify-start">
        <div className="flex flex-wrap gap-5 justify-center">
          {
          isLoading ? (
            <SpinnerLoading />
          ) : (
            poke.map((pokemon) => (
              <div className="md=flex md:flex-row justify-center" key={pokemon.id}>
                <Card pokemon={pokemon}>
                  <PokemonList pokemon={pokemon} key={pokemon.id} isLoading={isLoading} />
                </Card>
                <div className="flex justify-center shadow-md bg-violet-400 hover:bg-violet-500 cursor-pointer p-2 rounded-b-3xl text-white">
                  <button
                    type="button"
                    onClick={() => handleAddFavorite(pokemon.id)}
                    className="capitalize"
                  >
                    add to favorite
                  </button>
                </div>
              </div>
            ))
          )
        }
        </div>
      </div>
      <div className="flex w-full">
        <button
          type="button"
          className="w-full justify-center shadow-md bg-violet-400 hover:bg-violet-500 cursor-pointer p-2 rounded-t-full text-white capitalize"
          onClick={() => handleLoadMore()}
        >
          {
            isLoading ? (
              <SpinnerLoading />
            ) : (
              <p>Load more</p>
            )
          }
        </button>
      </div>
    </Wrapper>
  );
}

export default HomePage;
